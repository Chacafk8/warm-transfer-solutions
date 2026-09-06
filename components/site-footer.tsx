import Image from "next/image";
import Link from "next/link";
import { CTA_LABEL, contactIsConfigured, nav, site } from "@/lib/site";
import { Arrow } from "./ui";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100/70">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal-500/50 to-transparent" />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-page relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Image
              src="/logo.png"
              alt={site.name}
              width={640}
              height={160}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-6 text-[0.9375rem] leading-relaxed">
              Professional legal intake and call support for growing law firms. Your
              firm sets the criteria — we handle the first-level screening.
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-teal-300"
            >
              {CTA_LABEL}
              <Arrow />
            </Link>
          </div>

          <div>
            <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white/45">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white/45">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              <li>
                {contactIsConfigured ? (
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {site.email}
                  </a>
                ) : (
                  <span className="text-white/40">{site.email}</span>
                )}
              </li>
              <li>
                {contactIsConfigured ? (
                  <a
                    href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {site.phone}
                  </a>
                ) : (
                  <span className="text-white/40">{site.phone}</span>
                )}
              </li>
              <li className="pt-1 text-white/45">{site.coverage}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-white/35">
          {site.name} provides administrative intake and call-handling support. We do
          not provide legal advice, and we do not decide whether a firm should accept
          a matter. All final decisions rest with the firm.
        </p>
      </div>
    </footer>
  );
}
