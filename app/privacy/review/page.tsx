import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { sections } from "../content";

export const metadata: Metadata = {
  title: "Privacy Policy — counsel review",
  robots: { index: false, follow: false },
};

/** Counsel-review copy of the privacy page, with the open questions inline. */
export default function PrivacyReviewPage() {
  return (
    <LegalPage
      review
      eyebrow="Privacy — for review"
      title="Privacy Policy"
      updated="September 2026"
      intro="How we handle information from visitors to this website, and from callers whose calls we handle on behalf of a client law firm."
      sections={sections}
    />
  );
}
