import type { ReactNode } from "react";
import { PageHero } from "./page-hero";
import { Reveal } from "./reveal";

export type LegalSection = { heading: string; body: ReactNode };

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
                      Placeholder — replace before launch
                    </h2>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-amber-900/80">
                      The sections below are drafting prompts only. They are not legal
                      language and must be replaced with a policy reviewed by counsel
                      that accurately reflects your actual practices.
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
                    <div className="mt-3 leading-relaxed text-navy-800/65">
                      {section.body}
                    </div>
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
