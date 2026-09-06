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
  // TODO: replace before launch
  url: "https://warmtransfersolutions.com",
  email: "YOUR-EMAIL@warmtransfersolutions.com",
  phone: "YOUR PHONE NUMBER",
  coverage: "Flexible business-hour and after-hours options",
} as const;

/** true once the placeholders above have been replaced with real values. */
export const contactIsConfigured =
  !site.email.startsWith("YOUR-EMAIL") && !site.phone.startsWith("YOUR PHONE");

export const nav = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const CTA_LABEL = "Tell Us About Your Firm";
