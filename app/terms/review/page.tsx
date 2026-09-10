import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { sections } from "../content";

export const metadata: Metadata = {
  title: "Terms of Service — counsel review",
  robots: { index: false, follow: false },
};

/** Counsel-review copy of the terms page, with the open questions inline. */
export default function TermsReviewPage() {
  return (
    <LegalPage
      review
      eyebrow="Terms — for review"
      title="Terms of Service"
      updated="September 2026"
      intro="The terms on which we provide intake and call-handling services, and the terms governing use of this website."
      sections={sections}
    />
  );
}
