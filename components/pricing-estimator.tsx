"use client";

import { useId, useMemo, useState } from "react";
import {
  bestPlan,
  effectiveRate,
  monthlyCost,
  plans,
  usd,
  type Plan,
} from "@/lib/pricing";

const MAX = 2500;
const PRESETS = [200, 500, 1000, 1800];

/**
 * Lets a visitor price their own volume against the published rate card.
 * Every figure here is derived from lib/pricing.ts — nothing is hard-coded,
 * so the cards above and this estimator can never drift apart.
 */
export function PricingEstimator() {
  const [minutes, setMinutes] = useState(500);
  const sliderId = useId();

  const priced = useMemo(() => plans.filter((p) => !p.quoted), []);
  const best = bestPlan(minutes);

  const max = useMemo(() => {
    const costs = priced.map((p) => monthlyCost(p, minutes) ?? 0);
    return Math.max(...costs, 1);
  }, [priced, minutes]);

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lift-lg ring-1 ring-navy-800/6">
      {/* ---------------------------- control ---------------------------- */}
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
                  setMinutes(Number.isFinite(v) ? Math.min(Math.max(v, 0), MAX) : 0);
                }}
                aria-label="Expected monthly minutes"
                className="w-32 rounded-xl border border-navy-800/12 bg-white px-3 py-2 text-3xl font-semibold tabular-nums text-navy-800 tracking-tight focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/12"
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
      </div>

      {/* ---------------------------- results ---------------------------- */}
      <div className="divide-y divide-navy-800/8">
        {priced.map((plan) => (
          <Row
            key={plan.id}
            plan={plan}
            minutes={minutes}
            max={max}
            isBest={best?.id === plan.id && minutes > 0}
          />
        ))}

        {/* Enterprise is quoted, so it is shown but never given a fake number. */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:px-9">
          <div>
            <p className="font-semibold text-navy-800">Enterprise</p>
            <p className="mt-1 text-sm text-navy-800/60">
              Quoted on expected volume, from 1,000 minutes.
            </p>
          </div>
          <p className="text-lg font-semibold text-navy-800/50">Custom quote</p>
        </div>
      </div>

      <p className="border-t border-navy-800/8 bg-navy-50/40 px-6 py-5 text-xs leading-relaxed text-navy-800/55 sm:px-9">
        Estimate only, based on the published rates above. Your actual invoice
        depends on how call time is measured and rounded, which is confirmed in your
        service agreement.
      </p>
    </div>
  );
}

function Row({
  plan,
  minutes,
  max,
  isBest,
}: {
  plan: Plan;
  minutes: number;
  max: number;
  isBest: boolean;
}) {
  const cost = monthlyCost(plan, minutes) ?? 0;
  const rate = effectiveRate(plan, minutes);
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
              Lowest cost here
            </span>
          )}
        </div>
        <p className="text-2xl font-semibold tabular-nums text-navy-800">
          {usd(cost, true)}
          <span className="ml-1 text-sm font-medium text-navy-800/45">/mo</span>
        </p>
      </div>

      {/* Single-series comparison bar. The value is always labelled above, so
          the bar is a magnitude cue rather than the only way to read the number. */}
      <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-navy-800/8">
        <div
          className={`h-full rounded-full transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isBest ? "bg-teal-500" : "bg-navy-400"
          }`}
          style={{ width: `${width}%` }}
        />
      </div>

      <p className="mt-3 text-sm text-navy-800/60">
        {usd(plan.price ?? 0)} base
        {over > 0 ? (
          <>
            {" + "}
            {over.toLocaleString()} min over at {usd(plan.overage ?? 0, true)}
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
