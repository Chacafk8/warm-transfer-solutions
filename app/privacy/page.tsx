import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Warm Transfer Solutions handles information collected through this website and in the course of providing intake services to law firms.",
  alternates: { canonical: "/privacy" },
  // Stays noindex until counsel has signed off on the draft below.
  robots: { index: false, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: "Who we are, and the two roles we play",
    body: (
      <>
        <p>
          Warm Transfer Solutions provides administrative intake and call-handling
          support to law firms. We handle information in two distinct capacities,
          and different rules apply to each.
        </p>
        <p>
          <strong>As a business, for this website.</strong> When you contact us
          through this site, we decide how your information is used, and this policy
          governs it.
        </p>
        <p>
          <strong>As a service provider, for callers.</strong> When we handle calls
          for a client law firm, we process caller information solely on that
          firm&rsquo;s documented instructions, under a written agreement and with
          the firm&rsquo;s express authorization. The firm determines what is
          collected and why. If you were a caller and want to exercise rights over
          your information, the firm is the right place to start; we assist them.
        </p>
      </>
    ),
    flag: (
      <p>
        Confirm the legal entity name, type, and state of formation for the opening
        line, and confirm &ldquo;service provider&rdquo; is the correct CCPA
        characterisation given the client agreements as written.
      </p>
    ),
  },
  {
    heading: "Information we collect",
    body: (
      <>
        <p>
          <strong>From website visitors.</strong> If you submit the contact form, we
          receive your name, firm name, email address, phone number if you provide
          one, your approximate monthly intake volume, and whatever you write in the
          message field. Our hosting provider records standard server logs.
        </p>
        <p>
          <strong>From callers, on behalf of a client firm.</strong> Contact details
          and the answers to the intake questions that firm has approved, along with
          the outcome of the screening. Where a client firm has enabled call
          recording, recordings associated with that firm.
        </p>
        <p>
          This website sets no analytics, advertising, or tracking cookies.
        </p>
      </>
    ),
    flag: (
      <p>
        The no-cookies statement is accurate for the site as currently built. It must
        be revisited if analytics, a chat widget, or advertising pixels are ever
        added.
      </p>
    ),
  },
  {
    heading: "How we use information",
    body: (
      <>
        <p>
          Website enquiries are used to respond to you and to discuss whether our
          service fits your firm.
        </p>
        <p>
          Caller information is used only to carry out intake and screening for the
          client firm and to deliver the result to that firm. We do not use caller
          information for our own marketing, we do not sell it, and we do not share
          one firm&rsquo;s caller information with another firm.
        </p>
      </>
    ),
  },
  {
    heading: "Call recording, notice, and consent",
    body: (
      <>
        <p>
          Calls reach the client law firm first and are routed to us by the firm. Any
          notice to the caller that a call may be recorded, and any consent required
          before recording, is given by the client firm before the call reaches us.
        </p>
        <p>
          Where a client firm has enabled recording, we hold the resulting recordings
          as a service provider on that firm&rsquo;s behalf and make them available
          to the firm in its partner portal.
        </p>
      </>
    ),
    flag: (
      <>
        <p>
          <strong>This section needs the most attention.</strong> California is an
          all-party consent state under Penal Code &sect;632. The current arrangement
          relies on the client firm having given notice and obtained consent before
          the call is routed to us.
        </p>
        <p>Three questions follow from that:</p>
        <p>
          1. Is the firm&rsquo;s responsibility for notice and consent an express
          representation in the services agreement, backed by an indemnity — or is it
          an assumption? If a firm&rsquo;s announcement is defective, we are still a
          party to the call and the custodian of the recording.
        </p>
        <p>
          2. How are calls involving parties in other states handled, given that
          consent requirements differ and calls cross state lines?
        </p>
        <p>
          3. Should we give our own recording announcement as a backstop, independent
          of the firm&rsquo;s?
        </p>
        <p>
          <strong>How a competitor handles it.</strong> Alert Communications states
          plainly that the client is solely responsible for obtaining all consents
          and permissions from call participants, and that compliance with notice and
          consent requirements is the client&rsquo;s sole responsibility. They also
          record their own client calls where state law allows, with notification and
          stay-on-the-line consent. That is the explicit allocation this section
          currently leaves as an assumption.
        </p>
      </>
    ),
  },
  {
    heading: "Who we share information with",
    body: (
      <>
        <p>
          <strong>The client law firm</strong>, which receives the intake it
          instructed us to carry out.
        </p>
        <p>
          <strong>Service providers who help us operate</strong>, such as hosting and
          email delivery, bound to use the information only to provide those services
          to us.
        </p>
        <p>
          <strong>Where the law requires it</strong>, including valid legal process.
        </p>
        <p>
          We do not sell personal information, and we do not share it for
          cross-context behavioural advertising.
        </p>
      </>
    ),
    flag: (
      <p>
        Provide the list of subprocessors to name or categorise here (hosting, email
        delivery, CRM, telephony), and confirm the &ldquo;do not sell or
        share&rdquo; statement against the CCPA definitions.
      </p>
    ),
  },
  {
    heading: "How long we keep information, and how we protect it",
    body: (
      <>
        <p>
          We keep intake records and recordings for as long as the client firm
          instructs and as long as we need them to provide the service and meet our
          own legal obligations, then delete or de-identify them.
        </p>
        <p>
          We use administrative and technical safeguards appropriate to the
          sensitivity of the information, and we limit access to staff who need it to
          do their work. No method of transmission or storage is completely secure.
        </p>
      </>
    ),
    flag: (
      <>
        <p>
          Replace the retention language with actual periods — separately for intake
          records, call recordings, and website enquiries — and confirm whether
          retention is set by us, by each client firm, or by the agreement.
        </p>
        <p>
          <strong>Benchmark.</strong> Alert Communications publishes concrete
          numbers: data retained no more than 24 months, call recordings no more than
          90 days, and nothing retained after account termination. Stated periods
          read as far more credible than &ldquo;as long as necessary&rdquo;, and they
          also limit our own exposure in discovery. Worth matching the specificity
          even if the numbers differ.
        </p>
      </>
    ),
  },
  {
    heading: "Your privacy rights",
    body: (
      <>
        <p>
          <strong>If you contacted us through this website</strong>, you may ask us
          what we hold about you, ask us to correct or delete it, and ask us not to
          contact you again. Email {site.email} and we will respond.
        </p>
        <p>
          <strong>If you were a caller</strong>, we handled your information on
          instructions from the law firm you called. Requests are best directed to
          that firm, and we will assist the firm in responding.
        </p>
        <p>We will not discriminate against you for exercising these rights.</p>
      </>
    ),
    flag: (
      <>
        <p>
          Confirm whether we meet the CCPA applicability thresholds in our own right,
          and add the specific request mechanism, verification steps, and response
          timeframes counsel wants stated.
        </p>
        <p>
          <strong>A position worth considering.</strong> Alert Communications argues
          in its policy that, as a service provider processing solely on customer
          instructions, it is exempt from consumer deletion requests under the CCPA
          internal-use exception, and states that it will not delete on request —
          directing consumers to the customer instead. They run the same argument
          under the Virginia, Colorado, Connecticut, and Utah statutes.
        </p>
        <p>
          That is a more assertive stance than our draft takes. Counsel should advise
          whether it is right for us, and whether we need the other four states
          covered or only California.
        </p>
      </>
    ),
  },
  {
    heading: "Changes to this policy, and how to reach us",
    body: (
      <>
        <p>
          If we change this policy we will update the date shown on this page. For
          any question about privacy, email {site.email}.
        </p>
      </>
    ),
    flag: (
      <p>
        Add the business mailing address, and confirm whether a
        &ldquo;last updated&rdquo; date and change-notification commitment should
        appear.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="How we handle information from visitors to this website, and from callers whose calls we handle on behalf of a client law firm."
      sections={sections}
    />
  );
}
