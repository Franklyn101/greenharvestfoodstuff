import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { institutionalBuyers, supplyPrograms } from "@/content/company";

export const metadata: Metadata = {
  title: "Institutional supply",
  description:
    "Garri, fufu flour and cassava flour for government programmes, humanitarian organisations, schools, hospitals and other institutions, with relief and bulk packaging.",
};

const readiness = [
  "Flexible production scheduling",
  "Fast order processing",
  "Scalable output",
  "Dependable raw-material sourcing",
  "Institutional and relief packaging",
  "Coordinated logistics",
];

export default function InstitutionalSupplyPage() {
  return (
    <>
      <PageHero
        title="Institutional and humanitarian supply"
        intro="Staple cassava foods packed and delivered for feeding programmes, relief operations and large kitchens."
        crumbs={[{ label: "Institutional supply" }]}
        image="/images/facility/packaging.webp"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <ul className="grid gap-10 md:grid-cols-2">
            {supplyPrograms.map((s) => (
              <li key={s.title} className="border-t-2 border-forest pt-6">
                <h2 className="heading text-2xl">{s.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image src="/images/facility/delivery-tricycle.webp" alt="A Green Harvest staff member on a delivery tricycle at the site" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="display text-3xl sm:text-4xl">Ready when the order comes</h2>
            <ul className="mt-8 grid gap-x-6 sm:grid-cols-2">
              {readiness.map((r) => (
                <li key={r} className="border-b border-line py-3 text-lg">{r}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="heading text-2xl">Who we supply</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {institutionalBuyers.map((b) => (
              <li key={b} className="rounded-full border border-line bg-white px-4 py-2">{b}</li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-muted">
            Green Harvest is registered on the Bureau of Public Procurement&rsquo;s national contractor database and holds
            current tax, pension, NSITF and ITF clearances.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Planning a feeding or relief programme?"
        text="Send us the products, quantities, pack sizes and drop-off locations. We will respond with a supply plan and quotation."
      />
    </>
  );
}
