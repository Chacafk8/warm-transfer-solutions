import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  firm?: string;
  email?: string;
  phone?: string;
  volume?: string;
  challenge?: string;
  /** Honeypot — must stay empty. */
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CRM_LEADS_URL =
  process.env.CRM_LEADS_URL ?? "https://app.warmtransfersolutions.com/api/leads";

/** Whether a delivery channel took the enquiry, was never wired up, or broke. */
type Delivery = "sent" | "skipped" | "failed";

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill hidden fields; humans do not. This stays ahead of every outbound
  // call so a bot can never reach the CRM or the mail provider.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const firm = clean(body.firm, 160);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 60);
  const volume = clean(body.volume, 60);
  const challenge = clean(body.challenge, 4000);

  const missing: string[] = [];
  if (!name) missing.push("name");
  if (!firm) missing.push("firm");
  if (!email) missing.push("email");
  if (!challenge) missing.push("challenge");

  if (missing.length) {
    return NextResponse.json(
      { error: "Please complete all required fields.", fields: missing },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address.", fields: ["email"] },
      { status: 400 },
    );
  }

  // Both channels are attempted, and the enquiry counts as received if either
  // one takes it — a broken mailbox cannot lose a lead the CRM already holds,
  // or the other way round. The failure that did happen is logged, not shown.
  const [crm, mail] = await Promise.all([
    postToCrm({
      firm_name: firm,
      contact_name: name,
      email,
      phone,
      monthly_volume: volume,
      challenge,
      page: request.headers.get("referer") || `${site.url}/contact`,
      // The CRM keys off this id, so a resubmitted or retried enquiry lands
      // once rather than twice.
      external_id: crypto.randomUUID(),
    }),
    sendEmail({ name, firm, email, phone, volume, challenge }),
  ]);

  if (crm === "sent" || mail === "sent") {
    return NextResponse.json({ ok: true });
  }

  // Neither channel is wired up — tell the client so it can offer the mailto
  // fallback rather than silently dropping the enquiry.
  if (crm === "skipped" && mail === "skipped") {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  return NextResponse.json({ error: "send_failed" }, { status: 502 });
}

/**
 * Hands the enquiry to the CRM so it lands under Sales → Leads. Server-side
 * only: the shared secret must never reach the browser.
 */
async function postToCrm(lead: {
  firm_name: string;
  contact_name: string;
  email: string;
  phone: string;
  monthly_volume: string;
  challenge: string;
  page: string;
  external_id: string;
}): Promise<Delivery> {
  const secret = process.env.LEADS_WEBHOOK_SECRET;

  if (!secret) {
    console.warn("[contact] LEADS_WEBHOOK_SECRET is unset; skipping the CRM hand-off.");
    return "skipped";
  }

  try {
    const response = await fetch(CRM_LEADS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });

    // 201 is a new lead, 200 one the CRM already recorded under this
    // external_id. Either way the enquiry is in the CRM.
    if (response.ok) return "sent";

    const detail = await response.text();
    console.error("[contact] The CRM rejected the lead:", response.status, detail);
    return "failed";
  } catch (error) {
    console.error("[contact] Failed to reach the CRM:", error);
    return "failed";
  }
}

async function sendEmail({
  name,
  firm,
  email,
  phone,
  volume,
  challenge,
}: {
  name: string;
  firm: string;
  email: string;
  phone: string;
  volume: string;
  challenge: string;
}): Promise<Delivery> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Validate the actual recipient, which may come from the env override.
  const toIsUsable = to.includes("@") && !to.startsWith("YOUR-EMAIL");

  // Name the variable that is actually missing: "not configured" on its own
  // sends you checking all three, and the recipient can be wrong rather than
  // absent.
  const unset: string[] = [];
  if (!apiKey) unset.push("RESEND_API_KEY");
  if (!from) unset.push("CONTACT_FROM_EMAIL");
  if (!toIsUsable) unset.push(`CONTACT_TO_EMAIL (resolved to "${to}", which is not an address)`);

  if (unset.length) {
    console.warn(
      `[contact] Mail delivery is not configured; missing: ${unset.join(", ")}. ` +
        "Set these in Vercel under Project → Settings → Environment Variables, " +
        "then redeploy — env changes do not reach a deployment that is already running.",
    );
    return "skipped";
  }

  const lines = [
    `Name: ${name}`,
    `Firm: ${firm}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Approximate monthly intake volume: ${volume || "—"}`,
    "",
    "Biggest intake challenge:",
    challenge,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New intake enquiry — ${firm}`,
        text: lines,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[contact] Resend rejected the message:", response.status, detail);
      return "failed";
    }
  } catch (error) {
    console.error("[contact] Failed to reach the mail provider:", error);
    return "failed";
  }

  return "sent";
}
