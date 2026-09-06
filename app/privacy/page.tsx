import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Warm Transfer Solutions handles information collected through this website and our intake services.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    body: "Describe what is collected through this website (contact-form submissions such as name, firm, email, phone, and intake volume) and what is collected in the course of providing intake services (caller details, intake responses, and call recordings where applicable).",
  },
  {
    heading: "How information is used",
    body: "Explain the purposes: responding to enquiries, providing intake and screening services to client firms, delivering qualified leads, and maintaining service records.",
  },
  {
    heading: "Call recording and disclosure",
    body: "State whether calls are recorded, in which jurisdictions, how consent is obtained and disclosed to callers, and how recordings are retained and accessed. Recording consent rules vary by state — this section needs jurisdiction-specific review.",
  },
  {
    heading: "Storage, retention, and security",
    body: "Describe where information is stored, how long it is retained, and the safeguards used to protect it.",
  },
  {
    heading: "Sharing with third parties",
    body: "Identify the categories of recipients — client law firms, subprocessors, hosting and email providers — and confirm that information is not sold.",
  },
  {
    heading: "Your choices and rights",
    body: "Explain how visitors can request access, correction, or deletion of their information, and any rights arising under applicable state privacy laws.",
  },
  {
    heading: "Contact us",
    body: "Provide the address and email for privacy enquiries.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="How we handle information collected through this website and in the course of providing intake services."
      sections={sections}
    />
  );
}
