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

  // Bots fill hidden fields; humans do not.
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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  // No mail provider wired up yet — tell the client so it can offer the
  // mailto fallback rather than silently dropping the enquiry.
  // Validate the actual recipient, which may come from the env override.
  const toIsUsable = to.includes("@") && !to.startsWith("YOUR-EMAIL");

  if (!apiKey || !from || !toIsUsable) {
    console.warn(
      "[contact] Mail delivery is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL.",
    );
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
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
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("[contact] Failed to reach the mail provider:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
