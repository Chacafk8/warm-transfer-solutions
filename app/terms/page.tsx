import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms governing use of the Warm Transfer Solutions website. Services are provided under a separate written agreement.",
  alternates: { canonical: "/terms" },
  // Stays noindex until counsel has signed off on the draft below.
  robots: { index: false, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: "What these terms cover",
    body: (
      <>
        <p>
          These terms govern your use of this website. They are not the agreement
          under which we provide intake services.
        </p>
        <p>
          Intake and call-handling services are provided to client law firms under a
          separate written services agreement. Where anything on this website differs
          from that agreement, the agreement governs.
        </p>
      </>
    ),
    flag: (
      <p>
        Keeping the website terms and the services agreement separate is deliberate.
        Confirm this framing matches how the MSA is drafted, and that nothing on the
        public site is capable of being read as an offer or a service commitment —
        the pricing page in particular publishes rates.
      </p>
    ),
  },
  {
    heading: "No legal advice, and no attorney–client relationship",
    body: (
      <>
        <p>
          Warm Transfer Solutions is not a law firm and does not provide legal
          advice. Nothing on this website is legal advice, and using this website or
          contacting us does not create an attorney–client relationship with us or
          with any firm we work with.
        </p>
        <p>
          If you called a law firm and spoke with our team, that conversation was
          administrative intake carried out on the firm&rsquo;s instructions. It does
          not by itself mean the firm has agreed to represent you.
        </p>
      </>
    ),
    flag: (
      <p>
        Confirm the second paragraph against the position counsel wants to take on
        prospective-client duties, including whether it should reference the client
        firm&rsquo;s own engagement process.
      </p>
    ),
  },
  {
    heading: "What our service is, and what it is not",
    body: (
      <>
        <p>
          We complete initial intake and screen inquiries against criteria the client
          firm has defined and approved. We deliver qualified inquiries to the firm
          with a completed intake summary.
        </p>
        <p>We do not:</p>
        <p>
          decide whether a firm should accept a matter; provide legal advice; replace
          attorney or staff review; or apply criteria the firm has not approved.
        </p>
        <p>
          Every decision about whether to pursue, accept, or decline a matter rests
          with the client firm.
        </p>
      </>
    ),
  },
  {
    heading: "Client firm responsibilities",
    body: (
      <>
        <p>Under the services agreement, the client firm is responsible for:</p>
        <p>
          defining and approving the intake questions and qualification criteria we
          apply; giving any notice and obtaining any consent required before calls
          are recorded; reviewing the inquiries we deliver; and making its own
          decisions about every matter.
        </p>
      </>
    ),
    flag: (
      <p>
        These are the obligations that carry our liability position, so they need to
        be real covenants in the MSA rather than descriptions here. In particular,
        the firm&rsquo;s review of delivered inquiries should be an obligation, not a
        courtesy — it is what separates our work from the firm&rsquo;s decision.
      </p>
    ),
  },
  {
    heading: "No guarantee of outcome, and limits on liability",
    body: (
      <>
        <p>
          We provide our service with reasonable care and skill, but we do not
          guarantee that every inquiry will be captured, qualified, or delivered
          without error, and we do not guarantee any particular business result.
        </p>
        <p>
          This website is provided as is. To the fullest extent the law allows, we
          disclaim implied warranties in respect of the website.
        </p>
      </>
    ),
    flag: (
      <>
        <p>
          <strong>This is the section worth the most attention.</strong> The
          commercial exposure is asymmetric: monthly fees are in the hundreds to low
          thousands, while the downside of an inquiry that is missed, delayed, or
          wrongly screened out can be the value of a lost case.
        </p>
        <p>Three things to consider:</p>
        <p>
          1. A cap on aggregate liability tied to fees paid in a defined preceding
          period.
        </p>
        <p>
          2. An exclusion of consequential and indirect damages that names lost case
          value or lost recovery expressly — generic &ldquo;lost profits&rdquo;
          wording may not clearly reach it.
        </p>
        <p>
          3. Whether any of this belongs on the public website at all, or solely in
          the services agreement. Stating a cap publicly may be worse than stating
          nothing.
        </p>
      </>
    ),
  },
  {
    heading: "Using this website",
    body: (
      <>
        <p>
          You may use this website for legitimate purposes connected with evaluating
          or using our services. Do not attempt to disrupt it, access it by automated
          means beyond ordinary search indexing, or use it to send unlawful or
          abusive content.
        </p>
      </>
    ),
  },
  {
    heading: "Our content and marks",
    body: (
      <>
        <p>
          The content, design, and branding on this website belong to Warm Transfer
          Solutions or are used with permission. You may not reproduce them for
          commercial purposes without our written consent.
        </p>
      </>
    ),
  },
  {
    heading: "Governing law",
    body: (
      <>
        <p>
          These terms are governed by the laws of the State of California, without
          regard to conflict-of-law rules.
        </p>
      </>
    ),
    flag: (
      <p>
        Confirm venue, and whether arbitration and a class-action waiver are wanted
        here, in the services agreement, or in neither.
      </p>
    ),
  },
  {
    heading: "Changes, and how to reach us",
    body: (
      <>
        <p>
          We may update these terms and will update the date shown on this page when
          we do. Questions about these terms can go to {site.email}.
        </p>
      </>
    ),
    flag: <p>Add the business mailing address and a &ldquo;last updated&rdquo; date.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms and Conditions"
      intro="These terms govern use of this website. Intake services are provided to client firms under a separate written agreement."
      sections={sections}
    />
  );
}
