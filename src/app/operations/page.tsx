import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { processSteps, qualityCommitments } from "@/content/company";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "How we process",
  description:
    "How Green Harvest sources, inspects, processes, packs and dispatches cassava products, and how we assure quality at every stage.",
};

const gallery = [
  { src: "/images/facility/garri-frying.webp", alt: "Staff frying garri on open trays" },
  { src: "/images/facility/frying-machine.webp", alt: "A worker loading a mechanised garri fryer" },
  { src: "/images/facility/processing-line.webp", alt: "Staff working at stainless steel processing tables" },
  { src: "/images/facility/packaging.webp", alt: "Staff packing garri into sacks" },
];

export default function OperationsPage() {
  const packed = products.filter((p) => p.packs.length);
  return (
    <>
      <PageHero
        title="How we process cassava"
        intro="Fresh roots in, consistent products out. Here is what happens between the farm gate and the delivery truck."
        crumbs={[{ label: "How we process" }]}
        image="/images/facility/processing-line.webp"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <ol className="relative space-y-10 border-l-2 border-leaf pl-8 sm:pl-12">
            {processSteps.map((s, i) => (
              <li key={s.title} className="relative max-w-3xl">
                <span className="absolute -left-[3.05rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-forest text-sm font-bold text-white sm:-left-[4.05rem]" aria-hidden>
                  {i + 1}
                </span>
                <h2 className="heading text-2xl">{s.title}</h2>
                <p className="mt-2 text-lg leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <h2 className="display text-3xl sm:text-4xl">Inside the plant</h2>
          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {gallery.map((g) => (
              <li key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-card">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="display text-3xl">Quality assurance</h2>
            <ul className="mt-8">
              {qualityCommitments.map((q) => (
                <li key={q} className="flex gap-4 border-b border-line py-4 text-lg">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-leaf" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.3 7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                  </svg>
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-3xl">Packaging options</h2>
            <table className="mt-8 w-full text-left">
              <thead>
                <tr className="border-b-2 border-forest text-sm text-muted">
                  <th className="py-3 font-semibold">Product</th>
                  <th className="py-3 font-semibold">Pack sizes</th>
                </tr>
              </thead>
              <tbody>
                {packed.map((p) => (
                  <tr key={p.slug} className="border-b border-line">
                    <td className="py-4 pr-4 font-semibold">{p.name}</td>
                    <td className="py-4 text-muted">{p.packs.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="heading mt-12 text-xl">Warehousing and distribution</h3>
            <p className="prose-gh mt-3 text-muted">
              Stock is batch-identified and rotated first-in, first-out. We plan scheduled and emergency deliveries, rural
              drop-offs and multi-location distribution across Nigeria, with accurate documentation on every consignment.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
