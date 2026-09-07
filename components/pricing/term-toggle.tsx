"use client";

import type { BillingTerm } from "@/lib/pricing";
import { maxSavingPct } from "@/lib/pricing";

const options: { value: BillingTerm; label: string }[] = [
  { value: "monthly", label: "Month-to-month" },
  { value: "annual", label: "12-month term" },
];

export function TermToggle({
  term,
  onChange,
  tone = "dark",
}: {
  term: BillingTerm;
  onChange: (t: BillingTerm) => void;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <div
      role="radiogroup"
      aria-label="Billing term"
      className={`inline-flex items-center gap-1 rounded-full p-1 ${
        isLight ? "bg-white/10 ring-1 ring-inset ring-white/15" : "bg-navy-800/6"
      }`}
    >
      {options.map((option) => {
        const active = term === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              active
                ? isLight
                  ? "bg-white text-navy-800 shadow-sm"
                  : "bg-navy-800 text-white shadow-sm"
                : isLight
                  ? "text-white/70 hover:text-white"
                  : "text-navy-800/60 hover:text-navy-800"
            }`}
          >
            {option.label}
            {option.value === "annual" && (
              <span
                className={`ml-2 rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold ${
                  active
                    ? // active pill sits on a dark ground in both tones
                      "bg-teal-400/20 text-teal-200"
                    : isLight
                      ? "bg-teal-400/20 text-teal-200"
                      : "bg-teal-600/12 text-teal-700"
                }`}
              >
                save up to {maxSavingPct}%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
