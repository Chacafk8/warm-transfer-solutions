"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: string; hint?: string };

/** Pulls the leading integer out of "128", "12 min", "34" etc. */
function numericPart(value: string) {
  const match = value.match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}

function useCountUp(target: number | null, active: boolean, duration = 1400) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active || target === null) return;

    // Honor reduced motion by jumping straight to the final value on the
    // first frame rather than animating up to it.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = reduce ? 1 : Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setN(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return n;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const target = numericPart(stat.value);
  const count = useCountUp(target, active);
  const suffix = target !== null ? stat.value.slice(String(target).length) : "";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-teal-400/30 hover:bg-white/[0.07]">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-white/45">
        {stat.label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-white tabular-nums">
        {target !== null ? (
          <>
            {count}
            <span className="text-lg font-medium text-white/70">{suffix}</span>
          </>
        ) : (
          <span className="text-xl">{stat.value}</span>
        )}
      </p>
      {stat.hint && <p className="mt-1 text-xs text-teal-300/80">{stat.hint}</p>}
    </div>
  );
}

/**
 * Illustrative partner-portal mockup. The figures are sample data, not
 * performance claims — the disclaimer below is intentional and should stay.
 */
export function DashboardPreview({
  stats,
  bars = true,
}: {
  stats: Stat[];
  bars?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setActive(true));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const series = [38, 52, 44, 68, 57, 79, 63, 86, 72, 94, 81, 100];

  return (
    <div ref={ref} className="relative">
      {/* glow behind the card */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-linear-to-tr from-teal-500/20 via-brand-600/10 to-transparent blur-2xl"
        aria-hidden="true"
      />

      <div className="glass relative rounded-3xl p-5 shadow-glow sm:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-teal-400/70" />
            </span>
            <p className="text-sm font-semibold text-white">Partner Dashboard</p>
          </div>
          <span className="rounded-full bg-white/8 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-wider text-white/50 ring-1 ring-inset ring-white/10">
            Sample view
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={active} />
          ))}
        </div>

        {bars && (
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-white/45">
                Intake volume
              </p>
              <p className="text-[0.6875rem] text-white/35">Last 12 weeks</p>
            </div>
            <div
              className="mt-4 flex h-20 items-end gap-1.5"
              role="img"
              aria-label="Illustrative bar chart showing sample intake volume over twelve weeks"
            >
              {series.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-[3px] bg-linear-to-t from-brand-500/50 to-teal-400/90 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    height: active ? `${height}%` : "0%",
                    transitionDelay: `${i * 55}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <p className="mt-4 text-xs leading-relaxed text-white/35">
          Illustrative dashboard only. Figures shown are sample data, not performance
          claims.
        </p>
      </div>
    </div>
  );
}
