import type { ReactNode } from "react";
import { PageHero } from "./page-hero";
import { Reveal } from "./reveal";

export type LegalSection = {
  heading: string;
  body: ReactNode;
  /** Question for counsel, rendered inline so it cannot be missed in review. */
  flag?: ReactNode;
};

/**
 * Shared shell for Privacy / Terms. The sections below are drafting prompts,
 * not legal language — the banner stays until real, reviewed copy replaces them.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  updated,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  updated?: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title}>
        <p>{intro}</p>
      </PageHero>

      <section className="py-24 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="rounded-3xl bg-amber-50 p-7 ring-1 ring-inset ring-amber-600/20 sm:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      className="size-5"
                    >
                      <path d="M12 8v5" />
                      <circle cx="12" cy="16.5" r="0.6" fill="currentColor" />
                      <path d="M10.3 3.9 2.6 17.1A2 2 0 0 0 4.3 20h15.4a2 2 0 0 0 1.7-2.9L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-base font-semibold text-amber-900">
                      Draft — not yet reviewed by counsel
                    </h2>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-amber-900/80">
                      This is a working draft prepared for legal review, not a final
                      policy. Items marked{" "}
                      <span className="font-semibold">For counsel</span> need a
                      decision or confirmation before publication. This page is set
                      to noindex until that review is complete.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-12 space-y-10">
              {sections.map((section, i) => (
                <Reveal key={section.heading} delay={i * 70}>
                  <article className="border-b border-navy-800/8 pb-10 last:border-0 last:pb-0">
                    <h2 className="text-xl font-semibold text-navy-800">
                      {section.heading}
                    </h2>
                    <div className="mt-3 space-y-4 leading-relaxed text-navy-800/65">
                      {section.body}
                    </div>

                    {section.flag && (
                      <div className="mt-5 rounded-2xl bg-amber-50 px-5 py-4 ring-1 ring-inset ring-amber-600/20">
                        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-amber-800">
                          For counsel
                        </p>
                        <div className="mt-2 space-y-2 text-sm leading-relaxed text-amber-900/85">
                          {section.flag}
                        </div>
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>

            {updated && (
              <p className="mt-12 text-sm text-navy-800/45">
                Last updated: {updated}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
