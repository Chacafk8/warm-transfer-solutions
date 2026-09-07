import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { PricingEstimator } from "@/components/pricing-estimator";
import { Faq, type FaqItem } from "@/components/faq";
import { Button, Check, SectionHeading } from "@/components/ui";
import { CTA_LABEL } from "@/lib/site";
import { plans, usd } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Published rates for legal intake support: base price, included minutes, and per-minute overage for every plan. Estimate your monthly cost before you talk to anyone.",
  alternates: { canonical: "/pricing" },
};

const included = [
  "Customized intake questions by case type",
  "Screening against your approved criteria",
  "Qualified lead delivery with intake summary",
  "Partner portal with outcomes and reporting",
  "Your choice of coverage hours",
  "Call recordings where legally permitted",
];

const faqs: FaqItem[] = [
  {
    q: "What happens if I go over my included minutes?",
    a: "Nothing changes in how calls are handled. Minutes beyond your plan's allowance are billed at that plan's published per-minute rate — the same rate shown on this page. There is no penalty tier and no surprise reclassification.",
  },
  {
    q: "How do I know which plan to pick?",
    a: "Use the estimator above. Enter the call volume you actually expect and it shows what each plan would cost, including which is cheapest at that volume. Plans with a higher base price carry a lower per-minute rate, so the right choice depends entirely on your volume.",
  },
  {
    q: "What counts toward my minutes?",
    a: "Time our team spends handling calls on your behalf. Exactly how call time is measured and rounded is set out in your service agreement — ask us to walk through it before you sign, and we will.",
  },
  {
    q: "When does Enterprise make sense?",
    a: "Above roughly 1,000 minutes a month. At that point pricing is built around your expected volume rather than taken from a rate card, and your account manager prepares the quote.",
  },
  {
    q: "Does the plan change what my firm controls?",
    a: "No. Every plan follows criteria your firm defines and approves, and your firm makes the final decision on every matter. Plans differ on volume and rate, not on how intake is handled.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Published rates. No{" "}
            <span className="font-serif italic text-gradient">
              &ldquo;contact us for a quote&rdquo;
            </span>
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
          Every plan&rsquo;s base price, included minutes, and per-minute rate are on
          this page. Work out what you would pay before you speak to anyone.
        </p>
      </PageHero>

      {/* ------------------------------ rate card ------------------------- */}
      <section className="py-24 lg:py-28">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 90}>
                <article className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-lift ring-1 ring-navy-800/6 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift-lg hover:ring-teal-500/25">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-700">
                    {plan.name}
                  </h2>

                  <p className="mt-4 flex items-baseline gap-1">
                    {plan.price === null ? (
                      <span className="text-3xl font-semibold text-navy-800">
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="text-4xl font-semibold tracking-tight text-navy-800">
                          {usd(plan.price)}
                        </span>
                        <span className="text-sm font-medium text-navy-800/45">
                          /mo
                        </span>
                      </>
                    )}
                  </p>

                  <dl className="mt-6 space-y-3 border-t border-navy-800/8 pt-6 text-sm">
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-navy-800/55">Included minutes</dt>
                      <dd className="font-semibold tabular-nums text-navy-800">
                        {plan.quoted ? "From " : ""}
                        {plan.included.toLocaleString()}
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-navy-800/55">Additional minutes</dt>
                      <dd className="font-semibold tabular-nums text-navy-800">
                        {plan.overage === null
                          ? "Quoted"
                          : `${usd(plan.overage, true)}/min`}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-6 grow text-[0.9375rem] leading-relaxed text-navy-800/60">
                    {plan.blurb}
                  </p>

                  <div className="mt-7">
                    <Button
                      href="/contact"
                      variant={plan.quoted ? "ghost" : "primary"}
                      className="w-full"
                    >
                      {plan.quoted ? "Request a quote" : "Get started"}
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ estimator ------------------------- */}
      <section
        id="estimate"
        className="relative overflow-hidden scroll-mt-24 bg-navy-50/70 py-24 lg:py-32"
      >
        <div
          className="pointer-events-none absolute inset-0 dot-grid-dark opacity-40"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              eyebrow="Estimate your cost"
              title={
                <>
                  Price your own{" "}
                  <span className="font-serif italic text-teal-600">volume</span>
                </>
              }
              align="center"
            >
              <p>
                Move the slider to your expected monthly minutes. The maths is the
                same one we bill on.
              </p>
            </SectionHeading>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-14 max-w-3xl">
            <PricingEstimator />
          </Reveal>
        </div>
      </section>

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
                  There is no separate onboarding line, no per-lead charge, and no
                  rate that changes once you are past your allowance. Your monthly
                  total is the plan base plus any minutes beyond what the plan
                  includes.
                </p>
              </SectionHeading>

              <div className="mt-9 rounded-2xl bg-navy-900 p-6 font-mono text-sm leading-relaxed text-navy-100/80 shadow-lift">
                <span className="text-teal-300">monthly total</span> = base price
                <br />
                <span className="pl-[6.5rem]" /> + (minutes over included ×{" "}
                <span className="text-teal-300">plan rate</span>)
              </div>

              <p className="mt-6 text-sm leading-relaxed text-navy-800/55">
                A higher base buys a lower per-minute rate, which is why the plans
                cross over as volume grows. The estimator shows exactly where.
              </p>
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
        body="Tell us roughly how many calls you take a month and we will tell you which plan is cheapest for you — including if that is the smallest one."
      />
    </>
  );
}
