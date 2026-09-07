import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { PlansAndEstimator } from "@/components/pricing/plans-and-estimator";
import { Faq, type FaqItem } from "@/components/faq";
import { Button, Check, SectionHeading } from "@/components/ui";
import { CTA_LABEL } from "@/lib/site";
import {
  NOT_BILLED,
  NO_FEES,
  OVERNIGHT_SURCHARGE,
  OVERNIGHT_WINDOW,
  maxSavingPct,
  usd,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Published rates for legal intake support: base price, included minutes, and per-minute rates on both month-to-month and 12-month terms. Estimate your monthly cost before you talk to anyone.",
  alternates: { canonical: "/pricing" },
};

const included = [
  "Customized intake questions by case type",
  "Screening against your approved criteria",
  "Qualified lead delivery with intake summary",
  "Partner portal with outcomes and reporting",
  "Your choice of coverage hours",
];

const faqs: FaqItem[] = [
  {
    q: "What happens if I go over my included minutes?",
    a: "Nothing changes in how calls are handled. Minutes beyond your plan's allowance are billed at that plan's published per-minute rate — the same rate shown on this page. There is no penalty tier and no surprise reclassification.",
  },
  {
    q: "Are there any other fees?",
    a: `No. There is no setup or onboarding fee, no per-lead charge, and no cost to integrate with your system through our API. The plan base, the per-minute rate for minutes past your allowance, and the overnight surcharge are the entire bill — which is why we can publish all of them on one page.`,
  },
  {
    q: "Do I pay for robocalls and wrong numbers?",
    a: `No. ${NOT_BILLED.join(", ")} are not billed to your account. Screening those out is part of the job — charging you for the time it takes would be charging you for our own filter. You pay for calls worth answering.`,
  },
  {
    q: "What does the 12-month term actually change?",
    a: "It lowers both numbers: the monthly base price and the per-minute rate for additional minutes. Because both drop, the saving grows with your volume. Month-to-month carries no commitment and is priced accordingly — both columns are published above, so you can compare them directly.",
  },
  {
    q: "How does overnight coverage affect the price?",
    a: `Calls handled between ${OVERNIGHT_WINDOW} carry an additional ${usd(OVERNIGHT_SURCHARGE, true)} per minute on top of your plan's rate. It is identical on every plan and both terms, so it does not change which plan is cheapest for you — it adds the same amount whichever you pick. The estimator leaves it out for that reason; add it to the total yourself, or ask us to price your expected overnight load.`,
  },
  {
    q: "How do I know which plan to pick?",
    a: "Use the estimator. Enter the call volume you actually expect and it shows what each plan would cost, and which is cheapest at that volume. A higher base price buys a lower per-minute rate, so the right answer depends entirely on your volume — sometimes that is the smallest plan.",
  },
  {
    q: "Why is there no price for Enterprise?",
    a: "Because it would not mean anything. Enterprise pricing is built around your expected volume rather than taken from a rate card, so a published figure would be guesswork. A sales representative will put together a quote based on the call load you actually expect.",
  },
  {
    q: "What counts toward my minutes?",
    a: "Time our team spends handling calls on your behalf. Exactly how call time is measured and rounded is set out in your service agreement — ask us to walk through it before you sign, and we will.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Every rate we charge,{" "}
            <span className="font-serif italic text-gradient">published</span>
          </>
        }
        actions={
          <>
            <Button href="/contact" withArrow>
              {CTA_LABEL}
            </Button>
            <Button href="#estimate" variant="secondary">
              Estimate My Cost
            </Button>
          </>
        }
      >
        <p>
          Base price, included minutes, per-minute rates on both terms, and the
          overnight surcharge — plus what we never bill you for. Work out what you
          would pay before you speak to anyone.
        </p>
      </PageHero>

      <PlansAndEstimator />

      {/* --------------------------- how billing works -------------------- */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="How billing works"
                title="One formula, published in full"
              >
                <p>
                  Your monthly total is the plan base, plus any minutes beyond
                  what the plan includes charged at that plan&rsquo;s published
                  per-minute rate, plus the overnight surcharge on calls handled
                  between {OVERNIGHT_WINDOW}. That is the whole bill — there is no
                  setup fee, no per-lead charge, and no cost to integrate with your
                  system. Going over your allowance costs the rate printed on the
                  card above, a flat number that does not climb the further past it
                  you go.
                </p>
              </SectionHeading>

              <div className="mt-9 overflow-x-auto rounded-2xl bg-navy-900 p-6 shadow-lift">
                <pre className="font-mono text-sm leading-relaxed text-navy-100/80">
                  <span className="text-teal-300">monthly total</span> = base price
                  {"\n"}
                  {"              "}+ (minutes over included ×{" "}
                  <span className="text-teal-300">plan rate</span>)
                  {"\n"}
                  {"              "}+ (overnight minutes × {usd(OVERNIGHT_SURCHARGE, true)}){"\n"}
                  <span className="text-navy-100/40">
                    {"              "}# overnight = 10 PM&ndash;6 AM Pacific
                  </span>
                </pre>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-navy-800/55">
                A higher base buys a lower per-minute rate, and a 12-month term
                lowers both — up to {maxSavingPct}% off the base price. That is why
                the plans cross over as volume grows. The estimator shows exactly
                where.
              </p>

              <div className="mt-9 rounded-2xl bg-teal-50 p-6 ring-1 ring-inset ring-teal-500/20 sm:p-7">
                <h3 className="text-base font-semibold text-teal-900">
                  What you never pay for
                </h3>

                <div className="mt-5 space-y-5">
                  {[
                    { label: "Calls we don't bill", items: NOT_BILLED },
                    { label: "Fees we don't have", items: NO_FEES },
                  ].map((group) => (
                    <div key={group.label}>
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-teal-700">
                        {group.label}
                      </p>
                      <ul className="mt-2.5 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-teal-800 ring-1 ring-inset ring-teal-500/20"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="mt-5 border-t border-teal-500/15 pt-5 text-[0.9375rem] leading-relaxed text-teal-900/70">
                  Filtering junk calls is the job you are hiring us for — billing
                  you for the time it takes would be charging you for our own
                  filter. The plan base, the per-minute rate past your allowance,
                  and the overnight surcharge are the entire bill.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-3xl bg-white p-8 shadow-lift ring-1 ring-navy-800/6 sm:p-10">
                <h3 className="text-lg font-semibold text-navy-800">
                  Included in every plan
                </h3>
                <ul className="mt-7 space-y-4">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3.5 border-b border-navy-800/6 pb-4 text-[0.9375rem] leading-relaxed text-navy-800/70 last:border-0 last:pb-0"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 ring-1 ring-inset ring-teal-500/20">
                        <Check className="size-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-sm leading-relaxed text-navy-800/50">
                  Plans differ on volume and rate — not on how your intake is
                  handled.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------------- FAQ ---------------------------- */}
      <section className="bg-navy-50/70 py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Billing questions"
              title="Straight answers"
              align="center"
            />
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-14 max-w-3xl">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Not sure which plan fits your{" "}
            <span className="font-serif italic text-gradient">volume</span>?
          </>
        }
        body="Tell us roughly how many calls you take a month and we will tell you which plan costs least — including if that is the smallest one."
      />
    </>
  );
}
