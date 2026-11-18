"use client";

import { useEffect, type RefObject } from "react";

export const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
/** Progress of `p` through the window [a, b], clamped to 0..1. */
export const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a), 0, 1);
export const ease = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Calls `onFrame(progress, reduced)` on every animation frame the page scrolls.
 * Progress runs 0..1 while the pinned section's sticky stage is held on screen.
 * With reduced motion, progress is always 1 (the finished state).
 * Updates are imperative (DOM writes in `onFrame`) so React never re-renders on scroll.
 */
export function usePinnedProgress(
  ref: RefObject<HTMLElement | null>,
  onFrame: (p: number, reduced: boolean) => void,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = prefersReducedMotion();
    let ticking = false;

    const run = () => {
      ticking = false;
      if (reduced) return onFrame(1, true);
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      onFrame(total <= 0 ? 1 : clamp(-r.top / total, 0, 1), false);
    };
    const req = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(run);
      }
    };

    run();
    window.addEventListener("scroll", req, { passive: true });
    window.addEventListener("resize", req);
    return () => {
      window.removeEventListener("scroll", req);
      window.removeEventListener("resize", req);
    };
    // onFrame is intentionally read once; sections pass stable closures over refs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
