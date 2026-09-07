import { Suspense } from "react";
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
          consent requirements differ and calls cross state lines? Note that the
          company&rsquo;s Wyoming registration does not bear on this — Wyoming is a
          one-party consent state, but recording law follows where the parties to the
          call are sitting, not where the company is formed.
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
      <>
        <p>
          Confirm the service-provider categories to name here. Alert lists telecom
          providers, marketing companies, IT service providers, billing processors,
          and email and data hosting providers, and points to a separate Data
          Processing Agreement.
        </p>
        <p>
          A DPA is worth considering for us too — client firms handling
          prospective-client data will increasingly ask for one, and having it ready
          is a sales advantage rather than a hurdle.
        </p>
        <p>
          Also confirm the &ldquo;do not sell or share&rdquo; statement. It is
          currently true because the site runs no analytics or advertising
          technology; adding either could change the answer.
        </p>
      </>
    ),
  },
  {
    heading: "How long we keep information, and how we protect it",
    body: (
      <>
        <p>
          <strong>Intake records:</strong> retained for the life of the client
          firm&rsquo;s account and for 24 months after, then deleted.
        </p>
        <p>
          <strong>Call recordings:</strong> retained for 90 days, then deleted.
        </p>
        <p>
          <strong>Website enquiries:</strong> retained for 24 months from your
          last contact with us.
        </p>
        <p>
          A client firm can instruct us to keep its records for a shorter period, and
          we will keep information for longer where the law requires it.
        </p>
        <p>
          Access is limited to staff and service providers who need it to do their
          work, information is encrypted in transit, and we review access regularly.
          No method of transmission or storage is completely secure.
        </p>
      </>
    ),
    flag: (
      <>
        <p>
          <strong>Periods adopted: 24 months for records, 90 days for recordings</strong>,
          matching what Alert publishes and defensible in this market.
        </p>
        <p>
          <strong>These are commitments, and the CRM is being configured to enforce
          them automatically.</strong> That work needs to be verified before this page
          publishes: a stated 90-day recording period that storage does not actually
          honour becomes a documented breach of our own policy, and it is the first
          thing opposing counsel would ask for.
        </p>
        <p>
          <strong>The split is deliberate.</strong> The written intake record — what
          was asked, what was answered, what outcome was reached — is kept for 24
          months because it is the evidence if a firm ever disputes how an inquiry was
          handled. The recording goes at 90 days because it carries the consent risk,
          the storage cost, and the discovery exposure while adding little the written
          record does not already hold.
        </p>
        <p>
          One consequence worth being deliberate about: after 90 days a dispute is
          argued from the written record alone, and that cuts both ways. It protects
          us from a recording being read against us, and it removes a recording we
          might have wanted in our defence. The 24-month record is what does the
          defending, so it needs to be complete and accurate at the point it is
          written.
        </p>
        <p>
          Still to confirm: whether a firm may instruct a longer period as well as a
          shorter one, and what happens to records when an account closes.
        </p>
      </>
    ),
  },
  {
    heading: "Your privacy rights, including California",
    body: (
      <>
        <p>
          <strong>If you contacted us through this website</strong>, you may ask us
          what we hold about you, ask us to correct or delete it, and ask us not to
          contact you again. Email {site.email} and we will respond within 45 days.
        </p>
        <p>
          <strong>If you were a caller</strong>, we handled your information as a
          service provider on instructions from the law firm you called. That firm is
          the right place to direct a request about it, and we will help the firm
          respond — through its partner portal where the information is available
          there, or directly where it is not.
        </p>
        <p>
          Because we hold that information on the firm&rsquo;s behalf rather than for
          our own purposes, we do not delete or alter it on our own initiative. We act
          on the firm&rsquo;s instruction, and we keep records for the periods set out
          below.
        </p>
        <p>
          <strong>California residents.</strong> The CCPA gives you rights to know
          what personal information is collected about you, to request deletion or
          correction, and not to be discriminated against for exercising those
          rights. We do not sell personal information and we do not share it for
          cross-context behavioural advertising.
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
          <strong>A position we have deliberately not taken.</strong> Alert argues
          that as a service provider it is exempt from consumer deletion requests
          under the CCPA internal-use exception, and states flatly that it will not
          delete on request. They run the same argument under the Virginia, Colorado,
          Connecticut and Utah statutes.
        </p>
        <p>
          <strong>Our position is now: assist, but do not delete on our own
          initiative.</strong> We help the firm respond and act on its instruction,
          which reaches the same practical outcome as Alert without a flat public
          refusal to a caller who has just been through a bad week.
        </p>
        <p>
          Counsel should confirm this survives the CCPA analysis. The internal-use
          exception Alert relies on is the same one that supports us; the difference
          is tone, not mechanism. Also confirm whether the other four states need
          covering, which depends on where our client firms operate rather than where
          we do.
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
    <Suspense>
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      updated="September 2026"
      intro="How we handle information from visitors to this website, and from callers whose calls we handle on behalf of a client law firm."
      sections={sections}
    />
    </Suspense>
  );
}
