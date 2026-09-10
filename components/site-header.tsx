"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CTA_LABEL, nav, site } from "@/lib/site";
import { Arrow } from "./ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // The menu remembers which route it was opened on, so navigating away closes
  // it without needing an effect to sync the two.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled || open
            ? "border-b border-white/10 bg-navy-900/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-page">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            <Link
              href="/"
              aria-label={`${site.name} home`}
              className="relative flex items-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/logo.png"
                alt={site.name}
                width={640}
                height={160}
                priority
                /* The lockup is navy on white; brightness-0 + invert renders it
                   as a crisp white mark against the dark bar. */
                className={`w-auto brightness-0 invert transition-all duration-500 ${
                  scrolled ? "h-9" : "h-11"
                }`}
              />
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 lg:flex"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-navy-100/70 hover:text-white"
                  }`}
                >
                  {isActive(item.href) && (
                    <span className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-inset ring-white/15" />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Opens in a new tab so a visitor mid-enquiry keeps the site.
                  noopener/noreferrer because the target controls window.opener. */}
              <a
                href={site.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-navy-100/75 ring-1 ring-inset ring-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white hover:ring-white/30 lg:inline-flex"
              >
                <LockIcon />
                Portal Login
                <span className="sr-only"> (opens in a new tab)</span>
              </a>

              <Link
                href="/contact"
                className="group hidden items-center gap-2 rounded-full bg-linear-to-r from-teal-500 to-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgb(9_168_189/0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:inline-flex"
              >
                {CTA_LABEL}
                <Arrow />
              </Link>

              <button
                type="button"
                onClick={() => setOpenedOn(open ? null : pathname)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="inline-flex size-10 items-center justify-center rounded-full text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/10 lg:hidden"
              >
                <span className="relative block h-3 w-4">
                  <span
                    className={`absolute left-0 block h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                      open ? "top-1.5 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 block h-0.5 w-4 rounded-full bg-current transition-opacity duration-200 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                      open ? "top-1.5 -rotate-45" : "top-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-b border-white/10 bg-navy-900/95 backdrop-blur-xl lg:hidden"
      >
        <nav className="container-page flex flex-col gap-1 py-5" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-navy-100/75 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-medium text-navy-100/75 ring-1 ring-inset ring-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white hover:ring-white/30"
          >
            <LockIcon />
            Portal Login
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-teal-500 to-brand-600 px-5 py-3 text-sm font-semibold text-white"
          >
            {CTA_LABEL}
            <Arrow />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
