import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { sections } from "./content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms on which Warm Transfer Solutions provides legal intake and call-handling services, and the terms governing use of this website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

/**
 * Public page. Counsel notes are stripped here on the server, so they are
 * never sent to the browser — hiding them in the client still shipped them
 * in the payload.
 */
export default function TermsPage() {
  const publicSections = sections.map(({ flag: _flag, ...rest }) => rest);
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      updated="September 2026"
      intro="The terms on which we provide intake and call-handling services, and the terms governing use of this website."
      sections={publicSections}
    />
  );
}
