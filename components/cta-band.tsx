import { Reveal } from "./reveal";
import { Button, Eyebrow } from "./ui";
import { CTA_LABEL } from "@/lib/site";

export function CtaBand({
  title,
  body,
}: {
  title?: React.ReactNode;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-navy-800 via-navy-900 to-navy-950 px-8 py-14 shadow-lift-lg sm:px-14 lg:px-16 lg:py-20">
            <div
              className="pointer-events-none absolute -right-24 -top-24 size-80 animate-drift rounded-full bg-teal-500/25 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-16 size-80 animate-drift-slow rounded-full bg-brand-500/20 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 dot-grid opacity-50"
              aria-hidden="true"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <Eyebrow tone="light">Start a conversation</Eyebrow>
                <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
                  {title ?? (
                    <>
                      Spend less time screening and more time{" "}
                      <span className="serif-accent text-gradient">
                        building your firm
                      </span>
                    </>
                  )}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100/70">
                  {body ??
                    "Tell us how your firm currently handles new inquiries and where your team is losing the most time."}
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Button href="/contact" withArrow className="px-8 py-4 text-base">
                  {CTA_LABEL}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
