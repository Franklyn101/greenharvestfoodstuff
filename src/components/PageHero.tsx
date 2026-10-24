import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

type Crumb = { label: string; href?: string };

/** Interior page header: breadcrumb, title, intro, optional photo strip. */
export function PageHero({
  title,
  intro,
  crumbs = [],
  image,
  imageAlt = "",
}: {
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      {image && (
        <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover opacity-30" priority />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/40" aria-hidden />
      <Container className="relative py-16 sm:py-24">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex gap-2">
                  <span aria-hidden>/</span>
                  {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="display max-w-4xl text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>}
      </Container>
    </section>
  );
}
