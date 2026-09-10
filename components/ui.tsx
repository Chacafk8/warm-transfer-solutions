import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* ---------------------------------- Button --------------------------------- */

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-r from-teal-500 to-brand-600 text-white shadow-[0_10px_30px_-10px_rgb(9_168_189/0.7)] hover:shadow-[0_14px_40px_-10px_rgb(9_168_189/0.85)] hover:brightness-110",
  secondary:
    "bg-white/8 text-white ring-1 ring-inset ring-white/20 backdrop-blur-sm hover:bg-white/14 hover:ring-white/35",
  ghost:
    "bg-white text-navy-800 ring-1 ring-inset ring-navy-800/12 hover:ring-navy-800/25 hover:bg-navy-50 shadow-lift",
  light:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-[0_10px_30px_-12px_rgb(7_26_77/0.6)]",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.9375rem] font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0";

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  withArrow = false,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  withArrow?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {withArrow && <Arrow />}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

/* --------------------------------- Eyebrow --------------------------------- */

export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const tones =
    tone === "light"
      ? "text-teal-300 ring-white/15 bg-white/5"
      : "text-teal-700 ring-teal-600/20 bg-teal-50";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] ring-1 ring-inset ${tones} ${className}`}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-teal-400" />
        <span className="relative inline-flex size-1.5 rounded-full bg-teal-500" />
      </span>
      {children}
    </span>
  );
}

/* --------------------------------- Section --------------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <Eyebrow tone={tone} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={`text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18] ${
          isLight ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      {children && (
        <div
          className={`mt-5 text-lg leading-relaxed ${
            isLight ? "text-navy-100/75" : "text-navy-800/65"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

/* ---------------------------------- Aurora --------------------------------- */

/** Ambient animated gradient field for dark sections. */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`aurora ${className}`} aria-hidden="true">
      <div className="absolute -top-40 -left-32 size-[36rem] animate-drift rounded-full bg-brand-600/35 blur-[120px]" />
      <div className="absolute -top-24 right-0 size-[30rem] animate-drift-slow rounded-full bg-teal-500/25 blur-[120px]" />
      <div className="absolute -bottom-40 left-1/3 size-[28rem] animate-drift rounded-full bg-teal-400/15 blur-[130px]" />
      <div className="absolute inset-0 dot-grid opacity-60" />
    </div>
  );
}

/* ----------------------------------- Check --------------------------------- */

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`size-5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 10.5 3.5 3.5L15 7" />
    </svg>
  );
}
