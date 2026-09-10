import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { sections } from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Warm Transfer Solutions handles information collected through this website and in the course of providing intake services to law firms.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

/**
 * Public page. Counsel notes are stripped here on the server, so they are
 * never sent to the browser — hiding them in the client still shipped them
 * in the payload.
 */
export default function PrivacyPage() {
  const publicSections = sections.map(({ flag: _flag, ...rest }) => rest);
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      updated="September 2026"
      intro="How we handle information from visitors to this website, and from callers whose calls we handle on behalf of a client law firm."
      sections={publicSections}
    />
  );
}
