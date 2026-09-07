/**
 * Published rate card. These are the only pricing figures the site states —
 * base price, included minutes, and the overage rate per plan.
 *
 * Deliberately NOT here: per-account projections, "current plan" state, or
 * any usage-based recommendation. Those belong in the partner portal, not on
 * a public page.
 */

export type Plan = {
  id: string;
  name: string;
  /** Monthly base in USD. null = quoted. */
  price: number | null;
  /** Minutes included in the base price. */
  included: number;
  /** USD per minute beyond the included allowance. null = quoted. */
  overage: number | null;
  blurb: string;
  /** Enterprise is quoted rather than computed. */
  quoted?: boolean;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 400,
    included: 200,
    overage: 2.3,
    blurb: "For firms testing a single practice area or a light overflow load.",
  },
  {
    id: "growth",
    name: "Growth",
    price: 925,
    included: 500,
    overage: 2.15,
    blurb: "For firms running steady daily intake across a few case types.",
  },
  {
    id: "pro",
    name: "Pro",
    price: 1700,
    included: 1000,
    overage: 2.0,
    blurb: "For higher call volume where the lower per-minute rate pays off.",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    included: 1000,
    overage: null,
    blurb: "Priced on your expected volume. Your account manager prepares the quote.",
    quoted: true,
  },
];

/** Monthly total: base + any minutes beyond the included allowance. */
export function monthlyCost(plan: Plan, minutes: number): number | null {
  if (plan.price === null || plan.overage === null) return null;
  const over = Math.max(0, minutes - plan.included);
  return plan.price + over * plan.overage;
}

/** Blended cost per minute at a given volume — the number that actually compares plans. */
export function effectiveRate(plan: Plan, minutes: number): number | null {
  const cost = monthlyCost(plan, minutes);
  if (cost === null || minutes <= 0) return null;
  return cost / minutes;
}

/** The cheapest computable plan at a given volume, or null below any usage. */
export function bestPlan(minutes: number): Plan | null {
  const priced = plans.filter((p) => !p.quoted);
  if (!priced.length || minutes <= 0) return null;
  return priced.reduce((best, p) =>
    (monthlyCost(p, minutes) ?? Infinity) < (monthlyCost(best, minutes) ?? Infinity)
      ? p
      : best,
  );
}

export const usd = (n: number, cents = false) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  });
