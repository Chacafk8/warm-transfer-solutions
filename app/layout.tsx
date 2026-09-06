import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "legal intake",
    "law firm call answering",
    "legal intake services",
    "lead qualification for law firms",
    "after-hours legal intake",
    "warm transfer",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071A4D",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  areaServed: "US",
  serviceType: "Legal intake and call support",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <head>
        {/* Scroll-reveal is progressive enhancement — without JS the content
            must still be visible rather than stuck at opacity 0. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-navy-800 focus:shadow-lift-lg"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
