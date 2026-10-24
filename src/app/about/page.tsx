import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { coreValues, competitiveStrengths, mission, vision } from "@/content/company";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Green Harvest Food Stuff Ltd is a Nigerian commercial cassava processing company in Benue State, turning cassava into food and industrial products.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A Nigerian cassava processor with industrial ambitions"
        intro="We treat cassava as a raw material with many value streams, from food and flour to starch, ethanol and feed, so more of every harvest becomes something useful."
        crumbs={[{ label: "About us" }]}
        image="/images/farm/aerial-fields.webp"
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="prose-gh text-lg">
            <h2 className="display mb-6 text-3xl">Our story</h2>
            <p>
              Green Harvest Food Stuff Ltd was set up to build on the opportunity in commercial cassava farming and
              processing. We contribute to national food production, supply raw materials to Nigerian industry and are
              building toward agricultural exports.
            </p>
            <p>
              We combine access to raw materials, processing technology, packaging and market-focused value addition to
              serve customers in Nigeria and beyond. Our aim is to become one of Nigeria&rsquo;s leading commercial cassava
              processing companies.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image src="/images/facility/gate-sign.webp" alt="The Green Harvest sign at the site entrance" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-12 md:grid-cols-2">
          <div className="border-l-4 border-leaf pl-6">
            <h2 className="heading text-2xl">Vision</h2>
            <p className="mt-4 text-lg leading-relaxed">{vision}</p>
          </div>
          <div className="border-l-4 border-garri pl-6">
            <h2 className="heading text-2xl">Mission</h2>
            <p className="mt-4 text-lg leading-relaxed">{mission}</p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <h2 className="display text-3xl sm:text-4xl">What we stand for</h2>
          <p className="mt-4 max-w-xl text-muted">Our five core values spell GREAT.</p>
          <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v) => (
              <div key={v.name}>
                <dt>
                  <span className="display block text-6xl text-leaf" aria-hidden>{v.letter}</span>
                  <span className="heading mt-3 block text-xl">{v.name}</span>
                </dt>
                <dd className="mt-2 leading-relaxed text-muted">{v.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-forest py-20 text-white sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display text-3xl sm:text-4xl">Why Benue</h2>
            <div className="prose-gh mt-6 text-lg text-white/80">
              <p>
                Benue State is one of Nigeria&rsquo;s leading cassava-producing states. Our site on the Adoka–Otukpo Road puts
                us close to the farmers and cooperatives we buy from.
              </p>
              <p>
                Shorter distances mean fresher roots, lower haulage costs and more income staying in the communities that
                grow the crop.
              </p>
            </div>
          </div>
          <div>
            <h3 className="heading text-lg text-garri">Our strengths</h3>
            <ul className="mt-5">
              {competitiveStrengths.map((s) => (
                <li key={s} className="border-b border-white/15 py-3">{s}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
