/**
 * Published rate card, mirroring the pricing catalog.
 *
 * Both terms carry their own base price AND their own overage rate — a
 * 12-month commitment lowers both, so the saving grows with volume.
 *
 * Not modelled here: per-account projections, "current plan" state, or any
 * Enterprise figure. Enterprise depends on volume and is quoted by a sales
 * representative, so the site publishes no Enterprise pricing at all.
 */

export type BillingTerm = "monthly" | "annual";

export type Rate = {
  /** Base price per month, USD. */
  base: number;
  /** USD per minute beyond the included allowance. */
  overage: number;
};

export type Plan = {
  id: string;
  name: string;
  /** Minutes included in the base price. */
  included: number;
  monthly: Rate;
  annual: Rate;
  blurb: string;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    included: 200,
    monthly: { base: 450, overage: 2.5 },
    annual: { base: 400, overage: 2.3 },
    blurb: "For firms testing a single practice area or a light overflow load.",
  },
  {
    id: "growth",
    name: "Growth",
    included: 500,
    monthly: { base: 1050, overage: 2.35 },
    annual: { base: 925, overage: 2.15 },
    blurb: "For firms running steady daily intake across a few case types.",
  },
  {
    id: "pro",
    name: "Pro",
    included: 1000,
    monthly: { base: 1950, overage: 2.2 },
    annual: { base: 1700, overage: 2.0 },
    blurb: "For higher call volume where the lower per-minute rate pays off.",
  },
];

/**
 * Surcharge added to each overnight minute, on top of the plan rate.
 * Same across every plan and both terms.
 */
export const OVERNIGHT_SURCHARGE = 0.15;

export const rateFor = (plan: Plan, term: BillingTerm): Rate =>
  term === "annual" ? plan.annual : plan.monthly;

/**
 * Monthly total: base + minutes beyond the allowance at the plan rate,
 * plus the overnight surcharge on any overnight minutes.
 */
export function monthlyCost(
  plan: Plan,
  minutes: number,
  term: BillingTerm,
  overnightMinutes = 0,
): number {
  const rate = rateFor(plan, term);
  const over = Math.max(0, minutes - plan.included);
  const overnight = Math.min(Math.max(overnightMinutes, 0), minutes);
  return rate.base + over * rate.overage + overnight * OVERNIGHT_SURCHARGE;
}

/** Blended cost per minute — the figure that actually compares plans. */
export function effectiveRate(
  plan: Plan,
  minutes: number,
  term: BillingTerm,
  overnightMinutes = 0,
): number | null {
  if (minutes <= 0) return null;
  return monthlyCost(plan, minutes, term, overnightMinutes) / minutes;
}

/** Cheapest published plan at a given volume. */
export function bestPlan(
  minutes: number,
  term: BillingTerm,
  overnightMinutes = 0,
): Plan | null {
  if (minutes <= 0) return null;
  return plans.reduce((best, p) =>
    monthlyCost(p, minutes, term, overnightMinutes) <
    monthlyCost(best, minutes, term, overnightMinutes)
      ? p
      : best,
  );
}

/** What the 12-month term saves on this plan's base price, per month. */
export const baseSaving = (plan: Plan) => plan.monthly.base - plan.annual.base;

/** Largest base-price saving across the plans, as a whole percentage. */
export const maxSavingPct = Math.max(
  ...plans.map((p) => Math.round((baseSaving(p) / p.monthly.base) * 100)),
);

/** Above this volume we point visitors at a sales rep rather than the rate card. */
export const ENTERPRISE_THRESHOLD = 1000;

export const usd = (n: number, cents = false) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  });
