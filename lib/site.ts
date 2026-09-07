/**
 * Single source of truth for contact details, nav, and metadata.
 * Update the placeholders below before launch — they are also read by the
 * contact page, the footer, and the JSON-LD in app/layout.tsx.
 */

export const site = {
  name: "Warm Transfer Solutions",
  tagline: "Legal Intake Support",
  description:
    "Professional legal intake and call support for growing law firms. We screen prospective-client calls using your firm's approved criteria and deliver qualified leads to your team.",
  url: "https://www.warmtransfersolutions.com",
  email: "info@warmtransfersolutions.com",
  /**
   * Optional. Leave empty to hide the phone row from the contact page and
   * footer entirely — better than publishing a placeholder number. Add the
   * real number in display form, e.g. "(555) 555-0100".
   */
  phone: "",
  coverage: "Flexible business-hour and after-hours options",
} as const;

/** Email is required; the site shows a pre-launch notice without it. */
export const hasEmail =
  site.email.includes("@") && !site.email.startsWith("YOUR-EMAIL");

/** Phone is optional — anything falsy or placeholder-shaped hides the row. */
export const hasPhone =
  site.phone.trim().length > 0 &&
  !site.phone.startsWith("YOUR PHONE") &&
  /\d/.test(site.phone);

/** Digits-only form for tel: links. */
export const phoneHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export const CTA_LABEL = "Tell Us About Your Firm";
