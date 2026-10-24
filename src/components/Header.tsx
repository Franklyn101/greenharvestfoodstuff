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

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-garri focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Container className="flex h-18 items-center justify-between gap-6 py-2">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${siteConfig.shortName} home`}>
          <Image src="/images/brand/logo.png" alt="" width={419} height={253} priority className="h-12 w-auto sm:h-14" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`rounded-full px-3.5 py-2 text-[15px] font-medium hover:text-leaf-dark ${
                      item.children.some((c) => isActive(c.href)) ? "text-leaf-dark" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  <ul className="invisible absolute left-0 top-full min-w-52 rounded-card border border-line bg-white p-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block rounded px-3 py-2 text-[15px] hover:bg-flour">
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
          <Link href="/contact#quote" className="btn btn-primary hidden !py-2.5 text-sm sm:inline-flex">
            Request a quote
          </Link>
          <button
            type="button"
            className="rounded-md p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white lg:hidden">
          <Container className="py-4">
            <ul className="space-y-1">
              {mainNav.flatMap((item) => item.children ?? [item]).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded px-2 py-3 text-lg font-medium hover:bg-flour">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact#quote" className="btn btn-primary mt-4 w-full justify-center">
              Request a quote
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
