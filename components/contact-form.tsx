"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Arrow, Check } from "./ui";

const volumes = [
  "Fewer than 50",
  "50–100",
  "101–250",
  "251–500",
  "More than 500",
];

type Status = "idle" | "sending" | "sent" | "error" | "fallback";

const fieldClass =
  "w-full rounded-2xl border border-navy-800/12 bg-white px-4 py-3.5 text-[0.9375rem] text-navy-800 shadow-xs transition-all duration-200 placeholder:text-navy-800/35 hover:border-navy-800/22 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/12";

const labelClass =
  "mb-2 block text-sm font-semibold text-navy-800";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState<string[]>([]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setMessage("");
    setInvalid([]);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      if (result.error === "not_configured") {
        // Email delivery isn't wired up yet — offer the mailto fallback so the
        // enquiry still reaches the firm.
        setStatus("fallback");
        return;
      }

      setInvalid(Array.isArray(result.fields) ? result.fields : []);
      setStatus("error");
      setMessage(
        typeof result.error === "string" && result.error !== "send_failed"
          ? result.error
          : "We could not send your message just now. Please email us directly.",
      );
    } catch {
      setStatus("error");
      setMessage("We could not reach the server. Please email us directly.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-lift ring-1 ring-navy-800/6">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-teal-50 text-teal-600 ring-1 ring-inset ring-teal-500/20">
          <Check className="size-7" />
        </span>
        <h2 className="mt-6 text-xl font-semibold text-navy-800">
          Thank you — your message is on its way.
        </h2>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-navy-800/65">
          We will review your intake process and coverage needs, and get back to you
          shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-sm font-semibold text-teal-700 underline underline-offset-4 transition-colors hover:text-teal-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  const isSending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-7 shadow-lift ring-1 ring-navy-800/6 sm:p-9"
    >
      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name <span className="text-teal-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            aria-invalid={invalid.includes("name") || undefined}
            className={fieldClass}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="firm">
            Firm Name <span className="text-teal-600">*</span>
          </label>
          <input
            id="firm"
            name="firm"
            required
            autoComplete="organization"
            aria-invalid={invalid.includes("firm") || undefined}
            className={fieldClass}
            placeholder="Doe &amp; Associates"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email <span className="text-teal-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={invalid.includes("email") || undefined}
            className={fieldClass}
            placeholder="jane@firm.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="(555) 555-0100"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="volume">
          Approximate Monthly Intake Volume
        </label>
        <select id="volume" name="volume" className={`${fieldClass} appearance-none bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-11`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23071A4D' stroke-opacity='0.5' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E\")" }}>
          <option value="">Select one</option>
          {volumes.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="challenge">
          What is your biggest intake challenge?{" "}
          <span className="text-teal-600">*</span>
        </label>
        <textarea
          id="challenge"
          name="challenge"
          required
          rows={5}
          aria-invalid={invalid.includes("challenge") || undefined}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us how your firm currently handles new inquiries and where your team is losing the most time."
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800 ring-1 ring-inset ring-red-600/15"
        >
          {message}
        </p>
      )}

      {status === "fallback" && (
        <p
          role="alert"
          className="mt-5 rounded-2xl bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900 ring-1 ring-inset ring-amber-600/20"
        >
          Email delivery is not configured for this site yet. Please reach us directly
          at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold underline underline-offset-2"
          >
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={isSending}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-teal-500 to-brand-600 px-7 py-4 text-[0.9375rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {isSending ? (
          <>
            <span
              className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
              aria-hidden="true"
            />
            Sending…
          </>
        ) : (
          <>
            Get Started
            <Arrow />
          </>
        )}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-navy-800/45">
        By submitting this form you agree that we may contact you about your intake
        needs. We do not provide legal advice.
      </p>
    </form>
  );
}
