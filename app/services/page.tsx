import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { HumanSupportMark } from "@/components/human-support-mark";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Faq, type FaqItem } from "@/components/faq";
import { Button, Check, Eyebrow, SectionHeading } from "@/components/ui";
import { CTA_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Flexible intake support, qualified lead delivery, system integration, and partner reporting for growing law firms.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: PhoneIcon,
    title: "Client Intake and Screening",
    body: "We complete the initial intake and screen each inquiry using your approved criteria.",
  },
  {
    icon: PencilIcon,
    title: "Customized Scripts",
    body: "Use your existing script, or create a consistent workflow organized by case type.",
  },
  {
    icon: ClockIcon,
    title: "Flexible Coverage",
    body: "Choose overflow, after-hours, or defined business-hour coverage.",
  },
  {
    icon: SendIcon,
    title: "Qualified Lead Delivery",
    body: "Receive qualified leads by email with a completed intake summary.",
  },
  {
    icon: PlugIcon,
    title: "System Integration",
    body: "Where supported, leads can be created directly in your system through API integration.",
  },
  {
    icon: GridIcon,
    title: "Partner Portal",
    body: "Review intake activity, outcomes, delivery times, recordings, and summaries in one place.",
  },
];

const firmDefines = [
  "Intake questions",
  "Accepted case types",
  "Qualification criteria",
  "Disqualification criteria",
  "Escalation rules",
];

const workflowIncludes = [
  "Coverage hours",
  "Tone and communication style",
  "Required documentation",
  "Email delivery preferences",
  "API or system-integration requirements",
];

const portalIncludes = [
  "Number of calls handled",
  "Qualified and unqualified inquiries",
  "Common disqualification reasons",
  "Call outcomes and lead delivery times",
  "Call recordings, where legally permitted and properly disclosed",
  "Completed intake summaries",
];

const faqs: FaqItem[] = [
  {
    q: "Who determines whether a lead is qualified?",
    a: "Your firm does. We apply the criteria approved by your team — we do not set the standards ourselves.",
  },
  {
    q: "How are qualified leads delivered?",
    a: "By email with a completed intake summary or, where available, through an API integration into your existing system.",
  },
  {
    q: "Can you use our current intake questions?",
    a: "Yes. We can follow your existing script exactly, or help organize it into a consistent workflow by case type.",
  },
  {
    q: "Can criteria vary by case type?",
    a: "Yes. Each case type can have its own intake questions and its own qualification standards.",
  },
  {
    q: "What happens to unqualified inquiries?",
    a: "The outcome and the disqualification reason can be recorded and reviewed in the partner portal.",
  },
  {
    q: "Do you make the final decision to accept a case?",
    a: "No. Your firm retains all final decision-making authority on every matter.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Legal intake support built{" "}
            <span className="serif-accent text-gradient">around your firm</span>
          </>
        }
        aside={<HumanSupportMark className="w-full max-w-[420px]" />}
        actions={
          <>
            <Button href="/contact" withArrow>
              {CTA_LABEL}
            </Button>
            <Button href="/how-it-works" variant="secondary">
              See How It Works
            </Button>
          </>
        }
      >
        <p>
          Flexible intake support, lead delivery, and reporting for growing law firms.
        </p>
      </PageHero>

      {/* --------------------------- Human-centered ------------------------- */}
      {/* Light treatment: this sits directly under the dark hero, so a second
          navy section would run the top of the page into one long slab. */}
      <section className="relative overflow-hidden bg-navy-50/70 py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 dot-grid-dark opacity-40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 top-0 size-[34rem] rounded-full bg-teal-400/10 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container-page relative">
          <Reveal className="max-w-3xl">
            <Eyebrow>Human-centered by design</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold text-navy-800 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              The first voice they hear is a{" "}
              <span className="serif-accent text-teal-600">person</span>
            </h2>
            <p className="mt-7 text-2xl font-medium leading-snug text-navy-800/80 sm:text-[1.75rem]">
              No bots, just a person, real live agents.{" "}
              <span className="font-semibold text-teal-700">ALWAYS.</span>
            </p>
          </Reveal>

          {/* Where the line sits: people in front, software behind. The person
              card carries the teal accent; the software card stays neutral. */}
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal delay={120}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-lift-lg ring-1 ring-teal-500/25 sm:p-10">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 ring-1 ring-inset ring-teal-500/20">
                  <PersonIcon />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-navy-800">
                  A person handles the conversation
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Listening for distress, hesitation, and confusion",
                    "Knowing when to slow down before the next question",
                    "Hearing what someone means, not just what they said",
                    "Treating a caller like a person, not a form to complete",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3.5 border-b border-navy-800/6 pb-4 text-[0.9375rem] leading-relaxed text-navy-800/70 last:border-0 last:pb-0"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-lift ring-1 ring-navy-800/6 sm:p-10">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-800/55 ring-1 ring-inset ring-navy-800/8">
                  <ChipIcon />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-navy-800">
                  Software handles everything behind it
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Lead delivery the moment an inquiry qualifies",
                    "Completed intake summaries, written up automatically",
                    "Outcomes and reporting in the partner portal",
                    "API integration straight into your system",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3.5 border-b border-navy-800/6 pb-4 text-[0.9375rem] leading-relaxed text-navy-800/70 last:border-0 last:pb-0"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-navy-300"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={280}>
            <p className="mt-14 text-center text-2xl font-semibold tracking-tight text-navy-800 sm:text-3xl">
              We automate the paperwork.{" "}
              <span className="serif-accent text-teal-600">
                Never the conversation.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------- Service grid ------------------------- */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={(i % 3) * 100}>
                  <article className="group h-full rounded-3xl bg-white p-8 shadow-lift ring-1 ring-navy-800/6 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift-lg hover:ring-teal-500/25">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 ring-1 ring-inset ring-teal-500/15 transition-colors duration-400 group-hover:bg-linear-to-br group-hover:from-teal-500 group-hover:to-brand-600 group-hover:text-white group-hover:ring-transparent">
                      <Icon />
                    </span>
                    <h2 className="mt-6 text-lg font-semibold text-navy-800">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-navy-800/65">
                      {service.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------- Customization ------------------------- */}
      <section className="relative overflow-hidden bg-navy-50/70 py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 dot-grid-dark opacity-40"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              eyebrow="Customization"
              title={
                <>
                  Built around your firm, not a{" "}
                  <span className="serif-accent text-teal-600">generic</span>{" "}
                  script
                </>
              }
            >
              <p>Choose the details that matter to your firm.</p>
            </SectionHeading>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              { title: "Your firm can define", items: firmDefines },
              { title: "Your workflow can also include", items: workflowIncludes },
            ].map((panel, i) => (
              <Reveal key={panel.title} delay={i * 130}>
                <div className="h-full rounded-3xl bg-white p-8 shadow-lift ring-1 ring-navy-800/6 sm:p-10">
                  <h3 className="text-lg font-semibold text-navy-800">
                    {panel.title}
                  </h3>
                  <ul className="mt-7 space-y-4">
                    {panel.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3.5 border-b border-navy-800/6 pb-4 text-[0.9375rem] text-navy-800/70 last:border-0 last:pb-0"
                      >
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 ring-1 ring-inset ring-teal-500/20">
                          <Check className="size-3.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- Portal ----------------------------- */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-24 lg:py-32">
        <div className="aurora" aria-hidden="true">
          <div className="absolute -top-32 right-0 size-[34rem] animate-drift rounded-full bg-brand-600/30 blur-[120px]" />
          <div className="absolute -bottom-32 left-0 size-[30rem] animate-drift-slow rounded-full bg-teal-500/20 blur-[120px]" />
          <div className="absolute inset-0 dot-grid opacity-60" />
        </div>

        <div className="container-page relative">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Partner portal"
                tone="light"
                title="One place to review every intake"
              >
                <p>Your portal can include:</p>
              </SectionHeading>
              <ul className="mt-8 space-y-4">
                {portalIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 border-b border-white/8 pb-4 text-[0.9375rem] leading-relaxed text-navy-100/75 last:border-0 last:pb-0"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-300 ring-1 ring-inset ring-teal-400/30">
                      <Check className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140}>
              <DashboardPreview
                stats={[
                  { label: "Calls Handled", value: "128" },
                  { label: "Qualified", value: "34" },
                  { label: "Top Disqualification", value: "Jurisdiction" },
                  { label: "Lead Delivery", value: "12 min", hint: "Average" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------------- FAQ ------------------------------ */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Common questions"
              align="center"
            />
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-14 max-w-3xl">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* --------------------------------- Icons --------------------------------- */

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "size-5.5",
  "aria-hidden": true,
};

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M6.6 3h-2A1.6 1.6 0 0 0 3 4.6C3 13.1 10.9 21 19.4 21a1.6 1.6 0 0 0 1.6-1.6v-2a1 1 0 0 0-.8-1l-3.3-.7a1 1 0 0 0-1 .4l-.9 1.2a13.4 13.4 0 0 1-5.4-5.4l1.2-.9a1 1 0 0 0 .4-1l-.7-3.3a1 1 0 0 0-1-.8Z" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg {...iconProps}>
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z" />
      <path d="M14.5 5.5l3 3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 1.9" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 3 10.5 13.5" />
      <path d="M21 3l-6.8 18-3.7-7.5L3 9.8 21 3Z" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9 3v6M15 3v6" />
      <path d="M6 9h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V9Z" />
      <path d="M12 18v3" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.6" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg {...iconProps} className="size-6">
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg {...iconProps} className="size-6">
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
      <path d="M10 3v3.5M14 3v3.5M10 17.5V21M14 17.5V21M3 10h3.5M3 14h3.5M17.5 10H21M17.5 14H21" />
    </svg>
  );
}
