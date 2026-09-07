import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";
import {
  NOT_BILLED,
  NO_FEES,
  OVERNIGHT_SURCHARGE,
  OVERNIGHT_WINDOW,
  usd,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms on which Warm Transfer Solutions provides legal intake and call-handling services, and the terms governing use of this website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: "1. This agreement",
    body: (
      <>
        <p>
          These terms are an agreement between you (the &ldquo;Firm&rdquo;) and Warm
          Transfer Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;). They govern your
          use of this website and the intake and call-handling services we provide
          under any service plan agreed between us (your &ldquo;Service Plan&rdquo;).
        </p>
        <p>
          Your Service Plan sets out the plan you have selected, your billing term,
          your rates, and anything agreed specifically for your firm. Where your
          Service Plan differs from these terms, your Service Plan governs.
        </p>
      </>
    ),
    flag: (
      <p>
        Confirm the legal entity name and type for the opening line, and confirm the
        precedence rule. We have made the Service Plan govern over these terms, which
        is the opposite of Alert&rsquo;s choice — it suits us better because our
        plans are published and negotiated per firm, but it does mean a Service Plan
        can override protections here.
      </p>
    ),
  },
  {
    heading: "2. What we do",
    body: (
      <>
        <p>
          We complete initial intake on calls your firm routes to us, screen each
          inquiry against criteria your firm has defined and approved, and deliver
          qualified inquiries to you with a completed intake summary — by email, or
          through an API integration where supported.
        </p>
        <p>We do not:</p>
        <p>
          decide whether your firm should accept a matter; provide legal advice to
          callers or to you; replace attorney or staff review; or apply criteria your
          firm has not approved.
        </p>
        <p>
          Every decision about whether to pursue, accept, or decline a matter rests
          with your firm.
        </p>
      </>
    ),
  },
  {
    heading: "3. Your firm's responsibilities",
    body: (
      <>
        <p>Your firm is responsible for:</p>
        <p>
          <strong>Defining the criteria.</strong> The intake questions, accepted case
          types, and qualification standards we apply are yours. We follow them as
          approved and will not apply criteria you have not agreed.
        </p>
        <p>
          <strong>Notice and consent for recording.</strong> Calls reach your firm
          first and are routed to us by you. Any notice to the caller that a call may
          be recorded, and any consent required by law before recording, is given by
          your firm before the call reaches us. You confirm you have given that
          notice and obtained any required consent.
        </p>
        <p>
          <strong>Reviewing what we deliver.</strong> You will review the inquiries we
          deliver and make your own decision on each. Our screening supports your
          review; it does not replace it.
        </p>
        <p>
          <strong>Lawful instructions.</strong> You confirm you are entitled to
          instruct us to collect and process caller information, and that our doing so
          on your instructions is lawful.
        </p>
      </>
    ),
    flag: (
      <p>
        <strong>This is the section that carries our liability position.</strong> The
        recording paragraph in particular should be a warranty backed by an indemnity,
        not a description. California is an all-party consent state under Penal Code
        &sect;632, and if a firm&rsquo;s announcement is absent or defective we are
        still a party to the call and the custodian of the recording. Alert allocates
        this to the client expressly; counsel should decide the exact mechanism and
        whether an indemnity sits here or in section 14.
      </p>
    ),
  },
  {
    heading: "4. Plans, minutes, and how we bill",
    body: (
      <>
        <p>
          Each plan includes a monthly base price and an allowance of included
          minutes. Minutes beyond that allowance are billed at your plan&rsquo;s
          published per-minute rate. Both the base price and the per-minute rate
          depend on whether you are on a month-to-month or twelve-month term.
        </p>
        <p>
          <strong>Overnight minutes.</strong> Calls handled between{" "}
          {OVERNIGHT_WINDOW} carry an additional {usd(OVERNIGHT_SURCHARGE, true)} per
          minute, on every plan and both terms.
        </p>
        <p>
          <strong>What counts as a minute.</strong> Time is measured from when our
          representative takes the call until it is transferred, ends, or is
          otherwise disconnected.
        </p>
        <p>
          Current rates for every plan and both terms are published at{" "}
          {site.url}/pricing.
        </p>
      </>
    ),
    flag: (
      <>
        <p>
          <strong>Two things to settle here.</strong>
        </p>
        <p>
          1. <strong>Rounding.</strong> We have not stated one. Alert rounds every
          partial minute up to a whole minute and says so. The figures in our own
          billing system suggest we bill partial minutes rather than rounding up —
          confirm which is right and state it, because our pricing page currently
          tells visitors their invoice &ldquo;depends on how call time is measured and
          rounded&rdquo;.
        </p>
        <p>
          2. <strong>Whether time spent on the account outside the call counts.</strong>{" "}
          Alert bills hold time, outbound ringing, and post-call write-up. Ours is
          silent, which reads as narrower. Confirm and state it either way.
        </p>
      </>
    ),
  },
  {
    heading: "5. What we do not charge for",
    body: (
      <>
        <p>
          <strong>Junk calls.</strong> You are not billed for{" "}
          {NOT_BILLED.map((t) => t.toLowerCase()).join(", ")}. Screening these out is
          part of the service.
        </p>
        <p>
          <strong>Fees we do not have.</strong> There is no{" "}
          {NO_FEES.map((f) => f.toLowerCase()).join(" fee, no ")} fee. Your bill is
          the plan base, minutes beyond your allowance, and the overnight surcharge.
        </p>
      </>
    ),
    flag: (
      <p>
        This section commits us publicly and is repeated on the pricing page. It is a
        real differentiator — Alert expressly reserves the right to bill robocalls,
        telemarketing and dead-air calls, and lists seven categories of add-on fee.
        Counsel should confirm we are comfortable being held to it, and whether we
        want to reserve any right to change it on notice.
      </p>
    ),
  },
  {
    heading: "6. Payment",
    body: (
      <>
        <p>
          We invoice monthly. Base charges are billed for the coming month and any
          overage and overnight charges for the month just ended.
        </p>
        <p>
          If an invoice is not paid when due we may suspend the service after notice
          to you. Suspension does not end your Service Plan or your obligation to pay.
        </p>
      </>
    ),
    flag: (
      <p>
        Confirm the actual payment terms: due date, accepted methods, whether
        autopay is required, any card surcharge, interest on late amounts, and how
        much notice precedes suspension. The draft above is deliberately minimal
        because these are commercial decisions, not drafting ones.
      </p>
    ),
  },
  {
    heading: "7. Term, renewal, and cancellation",
    body: (
      <>
        <p>
          Your Service Plan states whether you are on a month-to-month term or a
          twelve-month term.
        </p>
        <p>
          <strong>Month-to-month.</strong> Either of us may end the plan with notice
          before your next billing date.
        </p>
        <p>
          <strong>Twelve-month term.</strong> The plan runs for the stated term. At
          the end of it, unless we agree otherwise, it continues month to month on the
          month-to-month rates for your plan.
        </p>
        <p>
          We may end a Service Plan on notice, or immediately where use of the service
          is unlawful, abusive toward our team, or in breach of these terms.
        </p>
      </>
    ),
    flag: (
      <>
        <p>
          Confirm the notice period for month-to-month cancellation, and what happens
          on early termination of a twelve-month term — whether the balance of the
          term is payable.
        </p>
        <p>
          Also confirm the roll-off. We have drafted the twelve-month term as
          continuing at <em>month-to-month rates</em>, which is the honest reading of
          our own rate card since the lower rates were the price of the commitment.
          Alert rolls to month-to-month too. Confirm this matches how billing is
          actually configured.
        </p>
      </>
    ),
  },
  {
    heading: "8. Confidentiality",
    body: (
      <>
        <p>
          We treat everything we learn in the course of handling your calls as
          confidential. That includes caller information, the contents of intake
          conversations, your criteria and scripts, and your call volumes.
        </p>
        <p>
          We use it only to provide the service to you, we do not disclose it to other
          firms, and we require our staff and service providers to keep it
          confidential. This obligation continues after your Service Plan ends.
        </p>
      </>
    ),
    flag: (
      <p>
        We have committed to confidentiality by contract without taking a position on
        whether privilege attaches to prospective-client communications under Rule
        1.18. That was deliberate: the commitment is worth making either way, and it
        is a selling point to firms. Counsel should confirm the scope, any carve-outs
        for legally compelled disclosure, and whether anything further is needed to
        protect privilege where it does attach.
      </p>
    ),
  },
  {
    heading: "9. Your data and your portal",
    body: (
      <>
        <p>
          Caller information belongs to your firm. We process it on your instructions
          as a service provider, and our{" "}
          <a href="/privacy" className="font-medium text-teal-700 underline underline-offset-2">
            Privacy Policy
          </a>{" "}
          explains how.
        </p>
        <p>
          Your partner portal gives you access to intake activity, outcomes, delivery
          times, summaries, and recordings where you have enabled them. Information in
          the portal is subject to our retention periods, which are set out in the
          Privacy Policy.
        </p>
      </>
    ),
    flag: (
      <p>
        Once retention periods are settled in the Privacy Policy, decide whether to
        repeat them here and what we commit to on export at termination — Alert states
        it will not return data after an account closes, which is a defensible
        position but one worth taking deliberately.
      </p>
    ),
  },
  {
    heading: "10. No legal advice, and no attorney–client relationship",
    body: (
      <>
        <p>
          We are not a law firm and we do not provide legal advice. Nothing on this
          website is legal advice, and contacting us does not create an
          attorney&ndash;client relationship with us or with any firm we work with.
        </p>
        <p>
          If you called a law firm and spoke with our team, that conversation was
          administrative intake carried out on the firm&rsquo;s instructions. It does
          not by itself mean the firm has agreed to represent you.
        </p>
      </>
    ),
  },
  {
    heading: "11. Service warranty and disclaimers",
    body: (
      <>
        <p>
          We will provide the service with reasonable care and skill, using
          appropriately trained people.
        </p>
        <p>
          We do not warrant that every inquiry will be captured, screened, or
          delivered without error, that the service will be uninterrupted, or that it
          will produce any particular business result. Telephony, network, and
          third-party systems fail in ways outside our control.
        </p>
        <p>This website is provided as is.</p>
      </>
    ),
    flag: (
      <p>
        We have kept an affirmative &ldquo;reasonable care and skill&rdquo; warranty
        rather than disclaiming everything. Alert disclaims all warranties in
        capitals. Ours is a weaker legal position and a stronger commercial one, and
        it is consistent with how the rest of the site talks. Counsel should confirm
        that trade is acceptable.
      </p>
    ),
  },
  {
    heading: "12. Limitation of liability",
    body: (
      <>
        <p>
          We are not liable for indirect or consequential loss, including lost
          profits, lost business, or the value of any claim or matter that is not
          pursued.
        </p>
        <p>
          Our total liability arising out of the service is limited to an amount
          stated in your Service Plan.
        </p>
      </>
    ),
    flag: (
      <>
        <p>
          <strong>The cap figure is deliberately left blank — it is the single most
          important commercial decision on this page.</strong>
        </p>
        <p>
          The exposure is asymmetric: monthly fees run from a few hundred to a few
          thousand dollars, while an inquiry that is missed, delayed, or wrongly
          screened out can cost the value of a case. The exclusion above names lost
          case value expressly, because generic &ldquo;lost profits&rdquo; wording may
          not reach it.
        </p>
        <p>
          Alert caps at fifteen days&rsquo; pro-rated charge or five hundred dollars,
          whichever is less, and requires written notice of a claim within fourteen
          days. Counsel should advise where between that and a twelve-months-of-fees
          cap we should sit, whether a notice-of-claim window is wanted, and whether
          the number belongs on the public page or only in the Service Plan.
        </p>
      </>
    ),
  },
  {
    heading: "13. Indemnity",
    body: (
      <>
        <p>
          You will indemnify us against claims arising from your instructions, your
          criteria, your use of the inquiries we deliver, or any failure to give
          notice or obtain consent required before a call is recorded.
        </p>
      </>
    ),
    flag: (
      <p>
        This is where the recording allocation in section 3 is enforced. Counsel
        should set the scope, whether it is mutual, and whether defence and settlement
        control sit with us or with the firm.
      </p>
    ),
  },
  {
    heading: "14. Using this website",
    body: (
      <>
        <p>
          Use this site for legitimate purposes connected with evaluating or using our
          services. Do not attempt to disrupt it, access it by automated means beyond
          ordinary search indexing, or use it to send unlawful or abusive content.
        </p>
        <p>
          The content, design, and branding on this site belong to us or are used with
          permission, and may not be reproduced commercially without our written
          consent.
        </p>
      </>
    ),
  },
  {
    heading: "15. Changes to these terms",
    body: (
      <>
        <p>
          We may update these terms. If a change materially affects your Service Plan
          we will tell you before it takes effect, and the date at the foot of this
          page will always show when it was last updated.
        </p>
      </>
    ),
    flag: (
      <p>
        We have committed to advance notice of material changes rather than
        change-on-posting. Alert makes modifications effective immediately on posting.
        Ours is friendlier and consistent with a transparency-led site; confirm we can
        operationally honour it.
      </p>
    ),
  },
  {
    heading: "16. Disputes and governing law",
    body: (
      <>
        <p>
          If something goes wrong, contact us first and we will try to resolve it
          directly.
        </p>
        <p>
          These terms are governed by the laws of the State of California, without
          regard to conflict-of-law rules.
        </p>
      </>
    ),
    flag: (
      <p>
        Decide on arbitration. Alert leads with binding individual arbitration, a
        jury-trial waiver, and a class-action waiver in capitals, with a thirty-day
        written opt-out and carve-outs for IP and small claims. Our clients are law
        firms rather than consumers, which changes the calculus. Counsel should advise
        whether we want it, and confirm venue.
      </p>
    ),
  },
  {
    heading: "17. Contact",
    body: (
      <p>
        Questions about these terms can go to {site.email}.
      </p>
    ),
    flag: <p>Add the business mailing address and a telephone number.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      intro="The terms on which we provide intake and call-handling services, and the terms governing use of this website."
      sections={sections}
    />
  );
}
