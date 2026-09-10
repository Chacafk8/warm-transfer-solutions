"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import {
  ENTERPRISE_THRESHOLD,
  NOT_BILLED,
  OVERNIGHT_SURCHARGE,
  OVERNIGHT_WINDOW,
  baseSaving,
  bestPlan,
  effectiveRate,
  maxSavingPct,
  monthlyCost,
  plans,
  rateFor,
  usd,
  type BillingTerm,
  type Plan,
} from "@/lib/pricing";
import { Reveal } from "@/components/reveal";
import { Arrow, Button, SectionHeading } from "@/components/ui";
import { TermToggle } from "./term-toggle";

const MAX = 2500;
const PRESETS = [200, 500, 1000, 1800];

/**
 * Rate card and estimator share one billing-term control, so the advertised
 * price and the calculated one can never disagree on the page.
 */
export function PlansAndEstimator() {
  const [term, setTerm] = useState<BillingTerm>("annual");
  const [minutes, setMinutes] = useState(500);
  const sliderId = useId();

  const best = bestPlan(minutes, term);
  const max = useMemo(
    () => Math.max(...plans.map((p) => monthlyCost(p, minutes, term)), 1),
    [minutes, term],
  );
  const overThreshold = minutes > ENTERPRISE_THRESHOLD;

  return (
    <>
      {/* ----------------------------- rate card ----------------------------- */}
      <section className="py-20 lg:py-24">
        <div className="container-page">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <TermToggle term={term} onChange={setTerm} />
            <p className="text-sm text-navy-800/55">
              {term === "annual"
                ? `A 12-month term lowers both the base price and the per-minute rate — up to ${maxSavingPct}% off the base.`
                : "Month-to-month pricing, with no term commitment."}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 90}>
                <PlanCard plan={plan} term={term} />
              </Reveal>
            ))}

            {/* Enterprise carries no public figures — it is quoted by a rep. */}
            <Reveal delay={270}>
              <article className="flex h-full flex-col rounded-3xl bg-navy-900 p-7 text-white shadow-lift-lg">
                <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-300">
                  Enterprise
                </h2>
                <p className="mt-4 text-3xl font-semibold tracking-tight">
                  Let&rsquo;s talk
                </p>
                <p className="mt-6 border-t border-white/10 pt-6 text-[0.9375rem] leading-relaxed text-navy-100/70">
                  Enterprise pricing depends entirely on your volume, so we
                  don&rsquo;t publish a rate for it. A sales representative will
                  build a quote around the call load you actually expect.
                </p>
                <div className="mt-auto pt-7">
                  <Button href="/contact" variant="secondary" className="w-full">
                    Talk to a rep
                  </Button>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal delay={340}>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {/* What gets added */}
              <div className="flex items-start gap-3.5 rounded-2xl bg-navy-50/80 px-6 py-5 ring-1 ring-inset ring-navy-800/6">
                <MoonIcon />
                <p className="text-sm leading-relaxed text-navy-800/65">
                  <strong className="font-semibold text-navy-800">
                    Overnight calls
                  </strong>{" "}
                  — calls handled between {OVERNIGHT_WINDOW} carry an additional{" "}
                  <strong className="font-semibold text-navy-800">
                    {usd(OVERNIGHT_SURCHARGE, true)} per minute
                  </strong>
                  , on every plan and both terms.
                </p>
              </div>

              {/* What never gets billed at all */}
              <div className="flex items-start gap-3.5 rounded-2xl bg-teal-50 px-6 py-5 ring-1 ring-inset ring-teal-500/20">
                <ShieldIcon />
                <p className="text-sm leading-relaxed text-teal-900/75">
                  <strong className="font-semibold text-teal-900">
                    Never billed
                  </strong>{" "}
                  — you are not charged for{" "}
                  {NOT_BILLED.map((t) => t.toLowerCase()).join(", ")}. You pay for
                  calls worth answering, not for junk that reaches the line.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------- estimator ----------------------------- */}
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
              eyebrow="Best bang for your buck"
              title={
                <>
                  Price your own{" "}
                  <span className="serif-accent text-teal-600">volume</span>
                </>
              }
              align="center"
            >
              <p>
                Set your expected monthly minutes and we&rsquo;ll show which plan
                costs least — even when that is the cheapest one.
              </p>
            </SectionHeading>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-14 max-w-3xl">
            <div className="overflow-hidden rounded-3xl bg-white shadow-lift-lg ring-1 ring-navy-800/6">
              <div className="border-b border-navy-800/8 bg-navy-50/50 p-7 sm:p-9">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <label
                      htmlFor={sliderId}
                      className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-teal-700"
                    >
                      Your expected monthly minutes
                    </label>
                    <div className="mt-2 flex items-baseline gap-2">
                      <input
                        type="number"
                        min={0}
                        max={MAX}
                        step={10}
                        value={minutes}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          setMinutes(
                            Number.isFinite(v) ? Math.min(Math.max(v, 0), MAX) : 0,
                          );
                        }}
                        aria-label="Expected monthly minutes"
                        className="w-32 rounded-xl border border-navy-800/12 bg-white px-3 py-2 text-3xl font-semibold tracking-tight tabular-nums text-navy-800 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/12"
                      />
                      <span className="text-lg text-navy-800/50">minutes</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {PRESETS.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setMinutes(p)}
                        aria-pressed={minutes === p}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          minutes === p
                            ? "bg-navy-800 text-white"
                            : "bg-white text-navy-800/70 ring-1 ring-inset ring-navy-800/12 hover:bg-navy-50 hover:text-navy-800"
                        }`}
                      >
                        {p.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  id={sliderId}
                  type="range"
                  min={0}
                  max={MAX}
                  step={10}
                  value={minutes}
                  onChange={(e) => setMinutes(Number(e.target.value))}
                  className="mt-7 w-full accent-teal-500"
                />
                <div className="mt-2 flex justify-between text-xs tabular-nums text-navy-800/45">
                  <span>0</span>
                  <span>{MAX.toLocaleString()}+</span>
                </div>

                <div className="mt-6 flex justify-center border-t border-navy-800/8 pt-6">
                  <TermToggle term={term} onChange={setTerm} />
                </div>
              </div>

              <div className="divide-y divide-navy-800/8">
                {plans.map((plan) => (
                  <Row
                    key={plan.id}
                    plan={plan}
                    minutes={minutes}
                    term={term}
                    max={max}
                    isBest={best?.id === plan.id && minutes > 0}
                  />
                ))}

                <div
                  className={`flex flex-wrap items-center justify-between gap-4 p-6 transition-colors sm:px-9 ${
                    overThreshold ? "bg-navy-900 text-white" : ""
                  }`}
                >
                  <div>
                    <p
                      className={`font-semibold ${overThreshold ? "text-white" : "text-navy-800"}`}
                    >
                      Enterprise
                    </p>
                    <p
                      className={`mt-1 text-sm ${
                        overThreshold ? "text-navy-100/70" : "text-navy-800/60"
                      }`}
                    >
                      {overThreshold
                        ? "At this volume, ask a rep to quote Enterprise before choosing a plan above."
                        : "Quoted individually — pricing depends on your volume."}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                      overThreshold
                        ? "bg-linear-to-r from-teal-500 to-brand-600 text-white"
                        : "text-teal-700 ring-1 ring-inset ring-teal-600/25 hover:bg-teal-50"
                    }`}
                  >
                    Talk to a rep
                    <Arrow />
                  </Link>
                </div>
              </div>

              <div className="border-t border-navy-800/8 bg-navy-50/40 px-6 py-5 sm:px-9">
                <p className="flex items-start gap-2.5 text-xs leading-relaxed text-navy-800/70">
                  <MoonIcon />
                  <span>
                    <strong className="font-semibold text-navy-800">
                      Overnight calls
                    </strong>{" "}
                    — calls handled between {OVERNIGHT_WINDOW} carry an additional{" "}
                    {usd(OVERNIGHT_SURCHARGE, true)} per minute, on every plan and
                    both terms. Not included in the totals above.
                  </span>
                </p>
                <p className="mt-3 flex items-start gap-2.5 text-xs leading-relaxed text-navy-800/70">
                  <ShieldIcon small />
                  <span>
                    <strong className="font-semibold text-navy-800">
                      Never billed
                    </strong>{" "}
                    — {NOT_BILLED.map((t) => t.toLowerCase()).join(", ")} are not
                    charged to your account.
                  </span>
                </p>
                <p className="mt-3 text-xs leading-relaxed text-navy-800/50">
                  Estimate only, based on the published rates. Your actual invoice
                  depends on how call time is measured and rounded, which is
                  confirmed in your service agreement.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* -------------------------------- pieces --------------------------------- */

function PlanCard({ plan, term }: { plan: Plan; term: BillingTerm }) {
  const { base, overage } = rateFor(plan, term);
  const saving = baseSaving(plan);

  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-lift ring-1 ring-navy-800/6 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift-lg hover:ring-teal-500/25">
      <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-700">
        {plan.name}
      </h2>

      <p className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight tabular-nums text-navy-800">
          {usd(base)}
        </span>
        <span className="text-sm font-medium text-navy-800/45">/mo</span>
      </p>
      <p className="mt-1.5 h-5 text-sm text-navy-800/50">
        {term === "annual" ? (
          <>
            <span className="line-through">{usd(plan.monthly.base)}</span> monthly ·
            <span className="font-semibold text-teal-700"> save {usd(saving)}/mo</span>
          </>
        ) : (
          <>{usd(plan.annual.base)}/mo on a 12-month term</>
        )}
      </p>

      <dl className="mt-6 space-y-3 border-t border-navy-800/8 pt-6 text-sm">
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-navy-800/55">Included minutes</dt>
          <dd className="font-semibold tabular-nums text-navy-800">
            {plan.included.toLocaleString()}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-navy-800/55">Additional minutes</dt>
          <dd className="font-semibold tabular-nums text-navy-800">
            {usd(overage, true)}/min
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-navy-800/55">Overnight minutes</dt>
          <dd className="font-semibold tabular-nums text-navy-800">
            +{usd(OVERNIGHT_SURCHARGE, true)}/min
          </dd>
        </div>
      </dl>

      <p className="mt-6 grow text-[0.9375rem] leading-relaxed text-navy-800/60">
        {plan.blurb}
      </p>

      <div className="mt-7">
        <Button href="/contact" className="w-full">
          Get started
        </Button>
      </div>
    </article>
  );
}

function Row({
  plan,
  minutes,
  term,
  max,
  isBest,
}: {
  plan: Plan;
  minutes: number;
  term: BillingTerm;
  max: number;
  isBest: boolean;
}) {
  const { base, overage } = rateFor(plan, term);
  const cost = monthlyCost(plan, minutes, term);
  const rate = effectiveRate(plan, minutes, term);
  const over = Math.max(0, minutes - plan.included);
  const remaining = Math.max(0, plan.included - minutes);
  const width = Math.max((cost / max) * 100, 2);

  return (
    <div className={`p-6 transition-colors sm:px-9 ${isBest ? "bg-teal-50/50" : ""}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div className="flex items-center gap-3">
          <p className="font-semibold text-navy-800">{plan.name}</p>
          {isBest && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-600 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-white">
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="size-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 8.5 3.5 3.5L13 5" />
              </svg>
              Best value here
            </span>
          )}
        </div>
        <p className="text-2xl font-semibold tabular-nums text-navy-800">
          {usd(cost, true)}
          <span className="ml-1 text-sm font-medium text-navy-800/45">/mo</span>
        </p>
      </div>

      {/* Single-series magnitude cue. The value is always labelled above it. */}
      <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-navy-800/8">
        <div
          className={`h-full rounded-full transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isBest ? "bg-teal-500" : "bg-navy-400"
          }`}
          style={{ width: `${width}%` }}
        />
      </div>

      <p className="mt-3 text-sm text-navy-800/60">
        {usd(base)} base
        {over > 0 ? (
          <>
            {" + "}
            {over.toLocaleString()} min over at {usd(overage, true)}
          </>
        ) : remaining > 0 ? (
          <> · {remaining.toLocaleString()} minutes still included</>
        ) : (
          <> · all {plan.included.toLocaleString()} included minutes used</>
        )}
        {rate !== null && (
          <span className="text-navy-800/40">
            {" · "}
            {usd(rate, true)}/min effective
          </span>
        )}
      </p>
    </div>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="mt-px size-4 shrink-0 text-navy-800/45"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

function ShieldIcon({ small = false }: { small?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`mt-px shrink-0 text-teal-600 ${small ? "size-4" : "size-5"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9.5-4.1-1.6-7-5.3-7-9.5V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
