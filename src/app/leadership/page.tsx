import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { leadership } from "@/content/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the leadership of Green Harvest Food Stuff Ltd.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        title="Leadership"
        intro="The people setting the direction of Green Harvest and running its operations."
        crumbs={[{ label: "Company", href: "/about" }, { label: "Leadership" }]}
      />
      <section className="py-20 sm:py-24">
        <Container className="space-y-20">
          {leadership.map((l, i) => (
            <article
              key={l.slug}
              id={l.slug}
              className={`grid scroll-mt-28 items-start gap-10 md:grid-cols-[minmax(0,340px)_1fr] ${
                i % 2 ? "md:[&>*:first-child]:order-2 md:grid-cols-[1fr_minmax(0,340px)]" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-white">
                <Image src={l.photo} alt={`Portrait of ${l.name}`} fill sizes="(min-width:768px) 340px, 100vw" className="object-cover object-top" />
              </div>
              <div className="md:pt-6">
                <p className="font-semibold text-leaf-dark">{l.role}</p>
                <h2 className="display mt-2 text-3xl sm:text-4xl">{l.name}</h2>
                <div className="prose-gh mt-6 text-lg text-muted">
                  {l.bio.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
