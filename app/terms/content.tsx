// Shared copy for the public page and the counsel-review page.
import { type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";
import {
  NOT_BILLED,
  NO_FEES,
  OVERNIGHT_SURCHARGE,
  OVERNIGHT_WINDOW,
  usd,
} from "@/lib/pricing";

export const sections: LegalSection[] = [
  {
    heading: "1. This agreement",
    body: (
      <>
        <p>
          These terms are an agreement between you (the &ldquo;Firm&rdquo;) and
          WarmTransfer Solutions, LLC, a Wyoming limited liability company trading as
          Warm Transfer Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;). They govern
          your use of this website and the intake and call-handling services we
          provide under any service plan agreed between us (your &ldquo;Service
          Plan&rdquo;).
        </p>
        <p>
          Your Service Plan sets out the plan you have selected, your billing term,
          your rates, and anything agreed specifically for your firm. Where your
          Service Plan differs from these terms, your Service Plan governs.
        </p>
        <p className="rounded-2xl bg-navy-50 px-5 py-4 text-[0.9375rem] font-semibold uppercase tracking-wide text-navy-800 ring-1 ring-inset ring-navy-800/10">
          Section 16 requires disputes to be resolved by binding individual
          arbitration. You and we each waive the right to a jury trial and the right
          to bring or take part in a class, collective, or representative action.
          Please read it.
        </p>
      </>
    ),
    flag: (
      <p>
        Note the registered name is WarmTransfer Solutions, LLC — one word — while
        the site brands as Warm Transfer Solutions throughout. The clause names both,
        which is the safe approach, but confirm that is how counsel wants it stated.
        Confirm also the precedence rule. We have made the Service Plan govern over these terms, which
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
          {NO_FEES.map((f) => f.toLowerCase()).join(" fee, no ")} fee. What we charge
          for the service is the plan base, minutes beyond your allowance, and the
          overnight surcharge — nothing else.
        </p>
        <p>
          The only other amount that can appear on an invoice is the Stripe
          processing fee described in section 6, which applies to card and ACH
          payments and which you avoid entirely by paying by check.
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
          We invoice monthly. Your billing cycle runs from the start date shown on
          your Service Plan. Base charges are billed for the coming month, and any
          overage and overnight charges for the month just ended.
        </p>
        <p>
          <strong>Payment is due within 15 days of the invoice date.</strong>
        </p>
        <p>
          <strong>How you pay.</strong> Payments by card and by ACH are processed
          through Stripe and carry Stripe&rsquo;s processing fee for that method.
          Enrolling in automatic payment reduces that fee by half. Paying by check
          carries no processing fee.
        </p>
        <p>
          <strong>Late payment.</strong> An invoice still unpaid 30 days after the
          invoice date incurs a late fee of {usd(50)}.
        </p>
        <p>
          If an invoice is not paid when due we may suspend the service after notice
          to you. Suspension does not end your Service Plan or your obligation to pay.
        </p>
      </>
    ),
    flag: (
      <>
        <p>
          <strong>The processing fee is stated without a number, deliberately.</strong>{" "}
          It is Stripe&rsquo;s fee rather than ours, the rate differs between card and
          ACH, and quoting figures we do not set risks being wrong when Stripe changes
          them. Confirm whether counsel would rather state the current rates
          explicitly, and whether the autopay reduction applies to both methods.
        </p>
        <p>
          <strong>The pricing page does not yet mention it.</strong> That page claims
          every rate we charge is published, so a card fee — even one that is
          avoidable and not ours — belongs there as a footnote. Section 5 has been
          reworded here to distinguish what we charge for the service from what a
          payment method costs; the pricing page should carry the same distinction.
        </p>
        <p>
          Also confirm: whether the {usd(50)} late fee recurs monthly or is charged
          once, whether interest runs in addition, how much notice precedes
          suspension, and whether autopay enrollment is offered on all plans.
        </p>
      </>
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
          <strong>Ending a twelve-month term early.</strong> If you end the plan
          before the term is up, the base charges for the remainder of the term become
          due immediately. The twelve-month rates are lower than the month-to-month
          rates because of the commitment, and the balance reflects it.
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
          <strong>Early termination is drafted as the full remaining base charges,
          per instruction. Counsel should pressure-test it.</strong> A clause taking
          100% of the remaining term can be attacked as a penalty rather than
          enforceable liquidated damages, particularly where we save the cost of
          performing. If it is struck down we may recover nothing rather than
          something, so a percentage — or acceleration of base charges only, which is
          how it is drafted — may hold up better than a figure a court reads as
          punitive.
        </p>
        <p>
          Note the drafting deliberately accelerates <em>base charges only</em>, not
          projected overage, since projected overage would be the weakest part of such
          a claim. Confirm the notice period for month-to-month cancellation.
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
          <strong>Beyond that promise we make no warranties.</strong> We do not
          warrant that every inquiry will be captured, screened, or delivered without
          error, that the service will be uninterrupted or error-free, or that it will
          produce any particular business result. Telephony, network, and third-party
          systems fail in ways outside our control.
        </p>
        <p>
          To the fullest extent the law allows, we disclaim all implied warranties,
          including merchantability, fitness for a particular purpose, and
          non-infringement. This website is provided as is.
        </p>
      </>
    ),
    flag: (
      <>
        <p>
          <strong>This is now a hybrid, and deliberately so.</strong> It keeps one
          affirmative promise — reasonable care and skill — and disclaims everything
          beyond it, including the implied warranties Alert disclaims wholesale.
        </p>
        <p>
          The single promise is worth keeping. Our Services page tells firms our
          people listen for distress and know when to slow down; disclaiming every
          warranty two clicks away would be read aloud next to it. The disclaimer of
          implied warranties costs us nothing we were relying on.
        </p>
        <p>
          If counsel would rather disclaim everything in Alert&rsquo;s terms, the
          marketing claims on the Services page should be softened at the same time
          so the two documents do not contradict each other.
        </p>
      </>
    ),
  },
  {
    heading: "12. Limitation of liability",
    body: (
      <>
        <p>
          We are not liable for indirect or consequential loss, including lost
          profits, lost business, or the value of any claim or matter that is not
          pursued, whether or not we were told such loss was possible.
        </p>
        <p>
          <strong>Notice of a claim.</strong> You must tell us in writing within
          fourteen days of the date of the problem. We are not liable for a claim
          notified after that.
        </p>
        <p>
          <strong>Our total liability</strong> for any claim is limited to a credit
          equal to the pro-rated monthly charge for the period in which the liability
          arose, up to a maximum of fifteen days&rsquo; charges or {usd(500)},
          whichever is less. That credit is your sole remedy.
        </p>
      </>
    ),
    flag: (
      <>
        <p>
          <strong>Drafted to match Alert&rsquo;s published position</strong> — fifteen
          days&rsquo; pro-rated charge or {usd(500)}, whichever is less, with a
          fourteen-day notice window. Three things counsel should weigh before it
          stands.
        </p>
        <p>
          1. <strong>Carve-outs are usually required.</strong> A cap this low
          typically survives review only with exceptions for gross negligence, wilful
          misconduct, breach of confidentiality, and our indemnity obligations. A cap
          that purports to limit everything is more likely to be struck down whole
          than read down.
        </p>
        <p>
          2. <strong>The published figure stands as the floor.</strong> Firms will
          negotiate it, and a higher cap can be agreed in an individual Service Plan —
          which is the right way round, since a published number can be conceded in a
          deal but never clawed back. Counsel should confirm the Service Plan can
          raise the cap without disturbing the rest of this section.
        </p>
        <p>
          3. <strong>The fourteen-day notice window does most of the work.</strong> A
          missed inquiry may not surface for months, so in practice this bars more
          claims than the cap does. That is precisely why Alert has it — and precisely
          why a court may look at it closely. Confirm whether the clock should run
          from the date of the problem or from when the firm reasonably discovered it.
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
        should set the scope, whether it is mutual, and whether defense and settlement
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
        operationally honor it.
      </p>
    ),
  },
  {
    heading: "16. Disputes, arbitration, and governing law",
    body: (
      <>
        <p>
          <strong>Talk to us first.</strong> If something goes wrong, contact us and
          we will try to resolve it directly. Most problems are settled this way.
        </p>
        <p>
          <strong>Binding arbitration.</strong> Any dispute arising out of or relating
          to these terms, your Service Plan, or the service that we cannot resolve
          directly will be resolved by binding arbitration administered by the
          American Arbitration Association under its Commercial Arbitration Rules,
          before a single arbitrator, rather than in court. The Federal Arbitration
          Act governs this section.
        </p>
        <p>
          <strong>Individual basis only.</strong> Disputes will be arbitrated only on
          an individual basis. You and we each waive any right to a jury trial, and
          any right to bring, join, or participate in a class, collective,
          consolidated, or representative action. An arbitrator may award the same
          individual relief a court could, but may not award relief on behalf of
          anyone who is not a party.
        </p>
        <p>
          <strong>What is outside arbitration.</strong> Either of us may bring a claim
          in small claims court where it qualifies, and either of us may seek
          injunctive or other equitable relief from a court to protect intellectual
          property or to prevent a breach of the confidentiality obligations in
          section 8. Questions about whether this arbitration provision is valid or
          how far it reaches are for a court, not the arbitrator.
        </p>
        <p>
          <strong>Seat and venue.</strong> The arbitration will be seated in the
          State of Wyoming, and judgment on the award may be entered in any court of
          competent jurisdiction.
        </p>
        <p>
          <strong>Governing law.</strong> These terms are governed by the laws of the
          State of Wyoming, without regard to conflict-of-law rules.
        </p>
        <p>
          This section survives termination of your Service Plan.
        </p>
      </>
    ),
    flag: (
      <>
        <p>
          <strong>Governing law is bracketed pending advice.</strong> The company is
          registered in Wyoming, which is normally sufficient connection for a
          Wyoming choice-of-law clause in a business-to-business contract. Counsel
          should confirm.
        </p>
        <p>
          <strong>What the clause will not do.</strong> A choice of Wyoming law
          governs the agreement between us and the client firm. It does not displace
          statutes that attach to the individuals involved rather than to the
          contract. California Penal Code &sect;632 is criminal law and is not subject
          to contractual choice of law at all; the CCPA and the equivalent Virginia,
          Colorado, Connecticut and Utah statutes attach to their own residents&rsquo;
          personal information. Nothing on this page should be drafted as though
          Wyoming registration reduces that exposure.
        </p>
        <p>
          <strong>The determinative fact is operational, not corporate.</strong>{" "}
          Recording law follows where the parties to the call are sitting. Counsel
          needs to know where our representatives are physically located when they
          take calls, and should advise whether we comply state by state or default to
          the strictest rule in play.
        </p>
        <p>
          <strong>Arbitration is wanted, and is drafted above.</strong> Four points
          for counsel.
        </p>
        <p>
          1. We have specified the AAA <em>Commercial</em> rules rather than the
          Consumer rules Alert uses, because our counterparties are law firms. That is
          the right fit and it also means the clause faces far less scrutiny than a
          consumer arbitration clause would.
        </p>
        <p>
          2. <strong>No opt-out is included.</strong> Alert offers thirty days.
          An opt-out mainly buys enforceability against unsophisticated parties, which
          is not who we contract with. Confirm we are content without one.
        </p>
        <p>
          3. <strong>Conspicuousness.</strong> There is an uppercase notice in section
          1 pointing to this clause, which is the convention for making a jury-trial
          waiver enforceable. Confirm the placement and wording are sufficient.
        </p>
        <p>
          4. The seat is drafted as the State of Wyoming to match the governing
          law, without naming a county — confirm whether a specific locale is needed
          for AAA purposes. Decide also how arbitration costs and fees are allocated — including whether we pay the filing fee in smaller disputes,
          which materially improves enforceability. Note a Wyoming seat may be
          resisted by firms elsewhere even where Wyoming law is accepted.
        </p>
      </>
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
