"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const mobileLinks = mainNav.flatMap((item) => item.children ?? [item]);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-garri focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Container className="flex h-18 items-center justify-between gap-6 py-2">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label={`${siteConfig.shortName} home`}
          >
            <Image
              src="/images/brand/logo.png"
              alt=""
              width={419}
              height={253}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) =>
                item.children ? (
                  <li key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className={`rounded-full px-3.5 py-2 text-[15px] font-medium hover:text-leaf-dark ${
                        item.children.some((c) => isActive(c.href))
                          ? "text-leaf-dark"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                    <ul className="invisible absolute left-0 top-full min-w-52 rounded-card border border-line bg-white p-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="block rounded px-3 py-2 text-[15px] hover:bg-flour"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`rounded-full px-3.5 py-2 text-[15px] font-medium hover:text-leaf-dark ${
                        isActive(item.href) ? "text-leaf-dark" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact#quote"
              className="btn btn-primary hidden !py-2.5 text-sm sm:inline-flex"
            >
              Request a quote
            </Link>
            <button
              type="button"
              className="rounded-md p-2 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
              {/* Three bars that morph into an X */}
              <span className="relative block h-5 w-6" aria-hidden>
                <span
                  className={`absolute left-0 top-0.5 h-0.5 w-6 rounded bg-current transition duration-300 ${open ? "translate-y-[8px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[9px] h-0.5 w-6 rounded bg-current transition duration-200 ${open ? "scale-x-0 opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[17px] h-0.5 w-6 rounded bg-current transition duration-300 ${open ? "-translate-y-[8px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </Container>

        {/* Mobile menu: slides open via grid-rows 0fr -> 1fr, links stagger in. */}
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          inert={!open}
          className={`absolute inset-x-0 top-full grid border-line bg-white shadow-lg transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
            open
              ? "grid-rows-[1fr] border-t opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <Container className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto py-4">
              <ul className="space-y-1">
                {mobileLinks.map((item, i) => (
                  <li
                    key={item.href}
                    style={{
                      transitionDelay: open ? `${80 + i * 40}ms` : "0ms",
                    }}
                    className={`transition duration-300 ease-out ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`block rounded px-2 py-3 text-lg font-medium hover:bg-flour ${isActive(item.href) ? "text-leaf-dark" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  transitionDelay: open
                    ? `${80 + mobileLinks.length * 40}ms`
                    : "0ms",
                }}
                className={`transition duration-300 ease-out ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
              >
                <Link
                  href="/contact#quote"
                  className="btn btn-primary mt-4 w-full justify-center"
                >
                  Request a quote
                </Link>
              </div>
            </Container>
          </div>
        </nav>
      </header>

      {/* Backdrop: dims the page behind the open menu; tap to close. */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-forest/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
