"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-800/10 overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-navy-800/8">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-navy-50/60 sm:px-8"
              >
                <span className="text-base font-semibold text-navy-800 sm:text-lg">
                  {item.q}
                </span>
                <span
                  className={`relative flex size-8 shrink-0 items-center justify-center rounded-full ring-1 ring-inset transition-all duration-300 ${
                    isOpen
                      ? "bg-teal-500 text-white ring-teal-500"
                      : "text-navy-800/60 ring-navy-800/15"
                  }`}
                  aria-hidden="true"
                >
                  <span className="absolute h-0.5 w-3 rounded-full bg-current" />
                  <span
                    className={`absolute h-3 w-0.5 rounded-full bg-current transition-transform duration-300 ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              className={`grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pr-16 text-[0.9375rem] leading-relaxed text-navy-800/70 sm:px-8 sm:pb-7">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
