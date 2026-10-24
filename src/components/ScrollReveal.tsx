"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/**
 * Site-wide scroll reveal. No per-page markup needed:
 * - Every section after the first inside <main> has its content blocks revealed
 *   as they scroll into view; list items are staggered.
 * - Add data-reveal to any extra element to opt it in.
 * Content stays visible without JS and for users who prefer reduced motion.
 */
const AUTO = "main > section:not(:first-child) > div > *";
const STEP_MS = 70;
const MAX_STEPS = 6;

export function ScrollReveal() {
  const pathname = usePathname();

  // Layout effect so new pages are marked before paint (no flash on client navigation).
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      root.classList.remove("js-reveal");
      return;
    }

    const targets = new Set<HTMLElement>();
    document.querySelectorAll<HTMLElement>(AUTO).forEach((el) => {
      // Lists animate item by item instead of as one block.
      if (el.matches("ul, ol")) el.querySelectorAll<HTMLElement>(":scope > li").forEach((li) => targets.add(li));
      else {
        targets.add(el);
        el.querySelectorAll<HTMLElement>(":scope > ul > li, :scope > ol > li, :scope > dl > div").forEach((li) => targets.add(li));
      }
    });
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => targets.add(el));

    targets.forEach((el) => {
      el.classList.add("reveal");
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      const i = Math.min(siblings.indexOf(el), MAX_STEPS);
      el.style.setProperty("--reveal-delay", `${Math.max(i, 0) * STEP_MS}ms`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
