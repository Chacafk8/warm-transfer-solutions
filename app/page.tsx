import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Aurora, Button, Check, Eyebrow, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { CTA_LABEL, site } from "@/lib/site";

export const metadata: Metadata = {
  description: site.description,
  alternates: { canonical: "/" },
};

const heroPoints = [
  "Customized intake process",
  "Qualified lead delivery",
  "Flexible call coverage",
  "Centralized intake reporting",
];

const disqualifiers = [
  "Outside the firm's accepted practice area",
  "Outside the accepted jurisdiction",
  "Does not meet timing requirements",
  "Caller is already represented",
  "Does not meet the firm's minimum case criteria",
];

const flow = [
  {
    step: "01",
    title: "Call Received",
    body: "We answer professionally using your preferred greeting.",
  },
  {
    step: "02",
    title: "Intake Completed",
    body: "We gather the information required for the case type.",
  },
  {
    step: "03",
    title: "Criteria Applied",
    body: "We compare the inquiry against your approved standards.",
  },
  {
    step: "04",
    title: "Lead Delivered",
    body: "Qualified leads are sent to your firm with an intake summary.",
  },
];

const definable = [
  "Intake questions",
  "Accepted case types",
  "Qualification criteria",
  "Disqualification criteria",
  "Escalation rules",
  "Coverage hours",
  "Tone and communication style",
  "Lead-delivery preferences",
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------- Hero ------------------------------- */}
      <section className="relative isolate overflow-hidden bg-navy-900 pb-24 pt-32 sm:pt-36 lg:pb-32 lg:pt-40">
        <Aurora />

        <div className="container-page relative">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow tone="light">Built around your firm</Eyebrow>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl lg:leading-[1.14]">
                  Professional call support for{" "}
                  <span className="serif-accent text-gradient">growing</span> law
                  firms
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-100/75">
                  We screen prospective-client calls using your firm&rsquo;s approved
                  criteria and send qualified leads directly to your team.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href="/contact" withArrow>
                    {CTA_LABEL}
                  </Button>
                  <Button href="/how-it-works" variant="secondary">
                    See How It Works
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <ul className="mt-12 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {heroPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-[0.9375rem] text-navy-100/80"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-300 ring-1 ring-inset ring-teal-400/30">
                        <Check className="size-3.5" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={260}>
              <DashboardPreview
                stats={[
                  { label: "Calls Handled", value: "128" },
                  { label: "Qualified Inquiries", value: "34" },
                  { label: "Unqualified Inquiries", value: "94" },
                  { label: "Lead Delivery", value: "12 min", hint: "Average" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------- Value strip --------------------------- */}
      <section className="relative border-b border-navy-800/8 bg-navy-50/60">
        <div className="container-page">
          <dl className="grid divide-y divide-navy-800/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                t: "Your criteria",
                d: "Every question and qualification standard is defined and approved by your firm.",
              },
              {
                t: "Your coverage",
                d: "Overflow, after-hours, or defined business-hour support — you choose the model.",
              },
              {
                t: "Your visibility",
                d: "Outcomes, summaries, and delivery times collected in one partner portal.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 90} className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <dt className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-700">
                  {item.t}
                </dt>
                <dd className="mt-3 text-[0.9375rem] leading-relaxed text-navy-800/65">
                  {item.d}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------ Problem ----------------------------- */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 dot-grid-dark opacity-40"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="A better use of your team's time"
                title={
                  <>
                    Let your staff focus on{" "}
                    <span className="serif-accent text-teal-600">
                      higher-value
                    </span>{" "}
                    work
                  </>
                }
              >
                <p>
                  Many inquiries do not meet a firm&rsquo;s basic case requirements. We
                  handle the initial screening so your staff can focus on active
                  clients, case development, and the work that actually moves matters
                  forward.
                </p>
              </SectionHeading>

              <div className="mt-10">
                <Button href="/how-it-works" variant="ghost" withArrow>
                  See the full process
                </Button>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 shadow-lift-lg sm:p-10">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-teal-500/20 blur-3xl"
                  aria-hidden="true"
                />
                <h3 className="relative text-lg font-semibold text-white">
                  Common reasons an inquiry may not move forward
                </h3>
                <ul className="relative mt-7 space-y-4">
                  {disqualifiers.map((item) => (
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

      {/* ------------------------------- Flow ------------------------------- */}
      <section className="relative overflow-hidden bg-navy-50/70 py-24 lg:py-32">
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              eyebrow="Simple intake flow"
              title="From incoming call to qualified lead"
              align="center"
            >
              <p>Your firm sets the standards. We follow the workflow.</p>
            </SectionHeading>
          </Reveal>

          <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* connecting rail on large screens */}
            <div
              className="pointer-events-none absolute left-0 right-0 top-[2.25rem] hidden h-px bg-linear-to-r from-teal-400/0 via-teal-500/40 to-teal-400/0 lg:block"
              aria-hidden="true"
            />
            {flow.map((item, i) => (
              <Reveal key={item.step} delay={i * 110} as="li" className="relative">
                <div className="group h-full rounded-3xl bg-white p-7 shadow-lift ring-1 ring-navy-800/6 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift-lg hover:ring-teal-500/25">
                  <span className="relative z-10 inline-flex size-11 items-center justify-center rounded-2xl bg-linear-to-br from-teal-500 to-brand-600 text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgb(9_168_189/0.9)]">
                    {item.step}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-navy-800">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-navy-800/65">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* --------------------------- Customization -------------------------- */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Built for your firm"
                title={
                  <>
                    Your process, followed{" "}
                    <span className="serif-accent text-teal-600">
                      consistently
                    </span>
                  </>
                }
              >
                <p>
                  You define the questions, case types, qualification standards,
                  coverage hours, and lead-delivery preferences. We follow them the
                  same way on every call.
                </p>
              </SectionHeading>
              <div className="mt-10">
                <Button href="/services" variant="ghost" withArrow>
                  See customization options
                </Button>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="grid grid-cols-2 gap-3">
                {definable.map((item) => (
                  <div
                    key={item}
                    /* Static labels, so deliberately no hover state — these are
                       not clickable and should not suggest otherwise. */
                    className="rounded-2xl bg-navy-50/80 px-4 py-4 text-sm font-medium text-navy-800/80 ring-1 ring-inset ring-navy-800/6"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ Portal ------------------------------ */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-24 lg:py-32">
        <Aurora />
        <div className="container-page relative">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Partner portal"
                tone="light"
                title="Full visibility into every intake"
              >
                <p>
                  Review intake activity, outcomes, summaries, delivery times, and
                  recordings where legally permitted and properly disclosed.
                </p>
              </SectionHeading>
              <div className="mt-10">
                <Button href="/services" variant="secondary" withArrow>
                  Explore services
                </Button>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <DashboardPreview
                bars={false}
                stats={[
                  { label: "Calls Handled", value: "128" },
                  { label: "Qualified", value: "34" },
                  { label: "Unqualified", value: "94" },
                  { label: "Lead Delivery", value: "12 min", hint: "Average" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
