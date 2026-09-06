import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms governing use of the Warm Transfer Solutions website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: "Use of this website",
    body: "Set out the permitted uses of the site and the conduct that is prohibited.",
  },
  {
    heading: "No legal advice and no attorney–client relationship",
    body: "State clearly that Warm Transfer Solutions provides administrative intake and call-handling support only, does not provide legal advice, and that nothing on this site creates an attorney–client relationship.",
  },
  {
    heading: "Scope and limitations of services",
    body: "Describe what the service does and does not include — in particular that client firms define all qualification criteria and retain sole authority over whether to accept a matter.",
  },
  {
    heading: "Client firm responsibilities",
    body: "Outline what the engaging firm is responsible for: approving intake criteria and scripts, confirming jurisdictional and recording requirements, and reviewing delivered leads.",
  },
  {
    heading: "Intellectual property",
    body: "State ownership of the site's content, branding, and materials, and the limits of any licence granted to visitors.",
  },
  {
    heading: "Disclaimers and limitation of liability",
    body: "Include the warranty disclaimers and liability limits appropriate for your business, reviewed by counsel.",
  },
  {
    heading: "Governing law and contact",
    body: "Identify the governing law and venue, and provide contact details for questions about these terms.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms and Conditions"
      intro="The terms governing use of this website and the services described on it."
      sections={sections}
    />
  );
}
