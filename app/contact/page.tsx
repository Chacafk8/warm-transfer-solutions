import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/ui";
import { hasEmail, hasPhone, phoneHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us how your firm handles new inquiries and where your team needs intake support.",
  alternates: { canonical: "/contact" },
};

// The phone row is dropped entirely when no number is configured, rather
// than rendering a placeholder to visitors.
const details = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, linked: hasEmail },
  ...(hasPhone
    ? [{ label: "Phone", value: site.phone, href: phoneHref, linked: true }]
    : []),
  { label: "Coverage", value: site.coverage, href: undefined, linked: false },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us about{" "}
            <span className="serif-accent text-gradient">your firm</span>
          </>
        }
      >
        <p>
          Tell us how your firm handles new inquiries and where your team needs
          support.
        </p>
      </PageHero>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 dot-grid-dark opacity-40"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Explore a better intake process"
                title="Let's talk about your call volume"
              >
                <p>
                  We will learn about your intake process, call volume, and coverage
                  needs — then show you exactly how the workflow would run for your
                  firm.
                </p>
              </SectionHeading>

              <dl className="mt-10 space-y-5">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-2xl bg-white p-5 shadow-lift ring-1 ring-navy-800/6"
                  >
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-teal-700">
                      {detail.label}
                    </dt>
                    <dd className="mt-1.5 text-[0.9375rem] font-medium text-navy-800">
                      {detail.href && detail.linked ? (
                        <a
                          href={detail.href}
                          className="transition-colors hover:text-teal-700"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              {!hasEmail && (
                <p className="mt-6 rounded-2xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900 ring-1 ring-inset ring-amber-600/20">
                  <strong className="font-semibold">Before launch:</strong> replace the
                  placeholder email address in{" "}
                  <code className="rounded bg-amber-100 px-1 py-0.5 font-mono">
                    lib/site.ts
                  </code>
                  . This notice disappears automatically once real values are set.
                </p>
              )}
            </Reveal>

            <Reveal delay={140}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
