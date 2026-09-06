import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { Button, Check, SectionHeading } from "@/components/ui";
import { CTA_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Your firm sets the criteria and we handle the first-level screening — a clear process from first call to qualified lead delivery.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    n: "1",
    title: "Set the Criteria",
    body: "We document your accepted case types, intake questions, and qualification standards.",
  },
  {
    n: "2",
    title: "Screen the Inquiry",
    body: "Our team completes the intake and applies your approved criteria.",
  },
  {
    n: "3",
    title: "Deliver the Lead",
    body: "Qualified leads are sent by email with a completed intake summary, or through an available API integration.",
  },
  {
    n: "4",
    title: "Your Firm Reviews",
    body: "Your team makes the final decision on whether to pursue or accept the matter.",
  },
];

const examples = [
  "The matter falls outside the firm's practice area.",
  "The incident occurred outside the firm's accepted jurisdiction.",
  "The date falls outside the firm's timing requirements.",
  "The caller is already represented.",
  "The matter does not meet minimum case criteria.",
  "The caller is seeking a service the firm does not provide.",
  "Required information cannot be confirmed.",
];

const boundaries = [
  "We do not decide whether your firm should accept a case.",
  "We do not provide legal advice.",
  "We do not replace attorney or staff review.",
  "We do not apply criteria your firm has not approved.",
  "We do not use one intake process for every firm.",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            Your firm sets the criteria. We handle the{" "}
            <span className="font-serif italic text-gradient">first-level</span>{" "}
            screening.
          </>
        }
        actions={
          <>
            <Button href="/contact" withArrow>
              {CTA_LABEL}
            </Button>
            <Button href="/services" variant="secondary">
              See Services
            </Button>
          </>
        }
      >
        <p>A clear process from first call to qualified lead delivery.</p>
      </PageHero>

      {/* ------------------------------- Steps ------------------------------ */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <ol className="grid gap-6 md:grid-cols-2">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 100} as="li">
                <article className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-lift ring-1 ring-navy-800/6 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift-lg hover:ring-teal-500/25 sm:p-10">
                  <span
                    className="pointer-events-none absolute bottom-2 right-5 select-none text-[5.5rem] font-bold leading-none text-navy-800/[0.05] transition-colors duration-500 group-hover:text-teal-500/12"
                    aria-hidden="true"
                  >
                    {step.n}
                  </span>
                  <span className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-teal-500 to-brand-600 text-base font-bold text-white shadow-[0_8px_20px_-8px_rgb(9_168_189/0.9)]">
                    {step.n}
                  </span>
                  <h2 className="relative mt-6 text-xl font-semibold text-navy-800">
                    {step.title}
                  </h2>
                  <p className="relative mt-3 leading-relaxed text-navy-800/65">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* --------------------- Criteria & boundaries ------------------------ */}
      <section className="relative overflow-hidden bg-navy-50/70 py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 dot-grid-dark opacity-40"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="h-full rounded-3xl bg-white p-8 shadow-lift ring-1 ring-navy-800/6 sm:p-10">
                <SectionHeading
                  eyebrow="Common disqualification examples"
                  title="Criteria defined by your firm"
                >
                  <p>Examples include:</p>
                </SectionHeading>
                <ul className="mt-8 space-y-4">
                  {examples.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3.5 text-[0.9375rem] leading-relaxed text-navy-800/70"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 ring-1 ring-inset ring-teal-500/20">
                        <Check className="size-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative h-full overflow-hidden rounded-3xl bg-navy-900 p-8 shadow-lift-lg sm:p-10">
                <div
                  className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-500/25 blur-[90px]"
                  aria-hidden="true"
                />
                <SectionHeading
                  eyebrow="Clear roles. Clear expectations."
                  tone="light"
                  title="What we do not do"
                />
                <ul className="relative mt-8 space-y-4">
                  {boundaries.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3.5 border-b border-white/8 pb-4 text-[0.9375rem] leading-relaxed text-navy-100/75 last:border-0 last:pb-0"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-400"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Ready to define your{" "}
            <span className="font-serif italic text-gradient">intake criteria</span>?
          </>
        }
        body="We will walk through your case types, questions, and qualification standards, then build the workflow around them."
      />
    </>
  );
}
