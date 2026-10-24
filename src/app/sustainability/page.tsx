import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "How Green Harvest supports cassava farmers, creates rural jobs and works toward a circular cassava value chain.",
};

const pillars = [
  {
    title: "Farmers and cooperatives",
    text: "We give cassava farmers and cooperatives a reliable market close to home, and our mission is to share modern processing skills and affordable technology with them.",
    image: "/images/farm/cassava-field.webp",
    alt: "Rows of young cassava plants",
  },
  {
    title: "Jobs and local value",
    text: "Processing the crop where it grows creates employment, encourages rural enterprise and keeps more of the value of each harvest in Benue.",
    image: "/images/facility/processing-team.webp",
    alt: "Green Harvest staff processing cassava",
  },
  {
    title: "Less waste, more value",
    text: "Peels, pulp and wastewater are raw materials too. We are working to turn them into animal feed, biogas and fertiliser for a more circular value chain.",
    image: "/images/farm/cassava-stems.webp",
    alt: "Bundles of cassava stems ready for replanting",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        title="Growing value in the communities that grow cassava"
        intro="Our model depends on healthy farms, fair markets and less waste. These are the commitments behind it."
        crumbs={[{ label: "Company", href: "/about" }, { label: "Sustainability" }]}
        image="/images/farm/cassava-field.webp"
      />
      <section className="py-20 sm:py-24">
        <Container className="space-y-20">
          {pillars.map((p, i) => (
            <article key={p.title} className="grid items-center gap-10 md:grid-cols-2">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-card ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={p.image} alt={p.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <h2 className="display text-3xl">{p.title}</h2>
                <p className="prose-gh mt-5 text-lg text-muted">{p.text}</p>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <CtaBand
        title="Farmer, cooperative or development partner?"
        text="We want to hear from groups who can supply cassava or partner on farmer programmes."
      />
    </>
  );
}
