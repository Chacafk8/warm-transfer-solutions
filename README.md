# Warm Transfer Solutions

Marketing site for Warm Transfer Solutions — legal intake and call support for
growing law firms. Built with **Next.js 16** (App Router), **React 19**,
**TypeScript**, and **Tailwind CSS v4**, and set up to deploy on **Vercel**.

The original static HTML template is preserved under [`legacy/`](./legacy) for
reference; nothing in that folder is built or served.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

---

## Before you launch

### 1. Contact details

Everything user-facing reads from a single file — [`lib/site.ts`](./lib/site.ts):

```ts
export const site = {
  url: "https://www.warmtransfersolutions.com",  // www is canonical
  email: "info@warmtransfersolutions.com",       // set
  phone: "",                                     // optional — see below
  ...
};
```

`email` and `url` are set. `phone` is **optional**: while it is empty the phone
row is omitted from the contact page and the footer entirely, rather than
showing a placeholder to visitors. Add a number in display form and the row
returns with a working `tel:` link:

```ts
phone: "(555) 555-0100",
```

The apex domain 308-redirects to `www` in Vercel, so `url` points at `www` —
that keeps the sitemap, canonical tags, and `og:url` off a redirect.

### 2. Replace the Privacy Policy and Terms

`/privacy` and `/terms` are **placeholders**. The sections in
`app/privacy/page.tsx` and `app/terms/page.tsx` are drafting prompts, not legal
language — they need to be replaced with copy reviewed by counsel that reflects
your actual practices. Both pages carry a visible warning banner and are set to
`noindex` until you do.

Pay particular attention to the **call recording** section: consent rules vary
by state and need jurisdiction-specific review.

### 3. Wire up the contact form (optional)

The form at `/contact` posts to `app/api/contact/route.ts`. Until an email
provider is configured it returns `503` and the form shows a fallback pointing
the visitor at your email address — no enquiry is silently dropped.

To enable delivery, set these environment variables (see `.env.example`):

| Variable | Notes |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `CONTACT_FROM_EMAIL` | Sender, on a domain verified with Resend |
| `CONTACT_TO_EMAIL` | Where enquiries land (defaults to `site.email`) |

The route validates input, rejects bots with a honeypot field, and sets
`reply_to` to the enquirer so you can reply directly.

Prefer a different provider? Swap the `fetch` call in
`app/api/contact/route.ts` — the rest of the route is provider-agnostic.

### 4. Review the sample dashboard figures

The partner-dashboard mockups on `/` and `/services` use illustrative numbers
and carry a "not performance claims" disclaimer. Keep the disclaimer if you keep
the figures.

---

## Deploying

The Vercel project (`warmtransfer-website`) is connected to this repository, so
deployment is automatic:

- **Push to `main`** → production build at `www.warmtransfersolutions.com`
- **Push to any other branch** → preview deployment at its own URL

No manual upload step. Framework preset is Next.js; build settings are detected
(`next build`, output `.next`) and should not be overridden.

Contact-form credentials, when you want them, go under **Settings →
Environment Variables** (see step 3 above).

### Domains

| Host | Role |
| --- | --- |
| `www.warmtransfersolutions.com` | production |
| `warmtransfersolutions.com` | 308 redirect to `www` |

DNS is at GoDaddy: an `A` record on `@` pointing at Vercel, and a `CNAME` on
`www`. If you change the canonical host, update `site.url` to match.

---

## Project structure

```
app/
  layout.tsx           Root layout: fonts, metadata, JSON-LD, header/footer
  page.tsx             Home
  how-it-works/        Process, disqualification examples, role boundaries
  services/            Service grid, customization, portal, FAQ
  contact/             Contact details + form
  privacy/ terms/      Legal placeholders (noindex)
  api/contact/         Form handler
  globals.css          Design tokens, utilities, animations
  icon.png             Favicon (generated from the logo mark)
components/
  site-header.tsx      Sticky header that condenses on scroll
  site-footer.tsx
  dashboard-preview.tsx  Animated partner-portal mockup
  faq.tsx              Accessible accordion
  reveal.tsx           Scroll-reveal wrapper
  ui.tsx               Buttons, headings, aurora background
lib/site.ts            Contact details, nav, metadata — edit this first
legacy/                Original static HTML template (not built)
```

## Design notes

Brand palette is taken from the logo and defined as Tailwind theme tokens in
`app/globals.css`:

| Token | Hex |
| --- | --- |
| `navy-800` | `#071A4D` |
| `brand-600` | `#0B4FA3` |
| `teal-500` | `#09A8BD` |
| `teal-400` | `#26C1D1` |

Type is Inter, with Instrument Serif italic used for the accent words in
headings. Dark sections use an animated gradient "aurora" field with a dot-grid
overlay; content fades in on scroll via `IntersectionObserver`.

Accessibility and robustness: `prefers-reduced-motion` disables all animation
and count-ups, a `<noscript>` rule keeps content visible without JavaScript,
there's a skip-to-content link, and the accordion and mobile menu are keyboard
operable with correct ARIA state.
