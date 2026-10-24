import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { categoryLabels, getProduct, products } from "@/content/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  return { title: p.name, description: p.summary, openGraph: { images: [p.image] } };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const developing = product.category === "developing";

  return (
    <>
      <PageHero
        title={product.name}
        intro={product.summary}
        crumbs={[{ label: "Products", href: "/products" }, { label: product.name }]}
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-line lg:sticky lg:top-28">
            <Image src={product.image} alt={product.imageAlt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" priority />
          </div>

          <div>
            {developing && (
              <p className="mb-6 rounded-card border border-garri bg-garri/15 px-4 py-3 text-sm">
                This value stream is in development. Contact us to discuss offtake or partnership.
              </p>
            )}
            <div className="prose-gh text-lg">
              {product.description.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            {product.varieties && (
              <div className="mt-10">
                <h2 className="heading text-xl">Varieties</h2>
                <dl className="mt-4 divide-y divide-line border-y border-line">
                  {product.varieties.map((v) => (
                    <div key={v.name} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr]">
                      <dt className="font-semibold">{v.name}</dt>
                      <dd className="text-muted">{v.note}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <h2 className="heading text-xl">Used for</h2>
                <ul className="mt-4 space-y-2">
                  {product.uses.map((u) => (
                    <li key={u} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" aria-hidden />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
              {product.packs.length > 0 && (
                <div>
                  <h2 className="heading text-xl">Pack sizes</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {product.packs.map((s) => (
                      <li key={s} className="rounded-full border border-line bg-white px-3 py-1 font-medium">{s}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-muted">Custom relief and institutional packaging on request.</p>
                </div>
              )}
            </div>

            <Link href={`/contact?product=${product.slug}#quote`} className="btn btn-primary mt-10">
              {developing ? "Discuss a partnership" : `Request a quote for ${product.name.split(" (")[0].toLowerCase()}`}
            </Link>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-20">
          <Container>
            <h2 className="heading text-2xl">More {categoryLabels[product.category].title.toLowerCase()}</h2>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-line">
                      <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                    </div>
                    <h3 className="heading mt-4 text-lg group-hover:text-leaf-dark">{p.name}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}
