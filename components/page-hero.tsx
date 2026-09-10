import type { ReactNode } from "react";
import { Aurora, Eyebrow } from "./ui";
import { Reveal } from "./reveal";

/** Dark hero used at the top of every interior page. */
export function PageHero({
  eyebrow,
  title,
  children,
  actions,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  /** Optional artwork for the empty right-hand column. */
  aside?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-44">
      <Aurora />
      <div className="container-page relative">
        <div
          className={
            aside
              ? "grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
              : ""
          }
        >
        <Reveal className={aside ? "" : "max-w-3xl"}>
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.14]">
            {title}
          </h1>
          {children && (
            <div className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/75">
              {children}
            </div>
          )}
          {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
        </Reveal>
        {aside && (
          <Reveal delay={160} className="hidden justify-center lg:flex">
            {aside}
          </Reveal>
        )}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
