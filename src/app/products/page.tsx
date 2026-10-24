import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { categoryLabels, productsByCategory, type ProductCategory } from "@/content/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Garri, fufu flour, high quality cassava flour, cassava starch, ethanol and cassava-based animal feed from Green Harvest Food Stuff Ltd.",
};

const order: ProductCategory[] = ["food", "industrial", "developing"];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products from one root"
        intro="Food staples for homes and institutions, and cassava derivatives for manufacturers. Every line is available in retail, institutional or bulk packs."
        crumbs={[{ label: "Products" }]}
        image="/images/farm/harvested-roots.webp"
      />

      {order.map((cat) => {
        const items = productsByCategory(cat);
        const { title, intro } = categoryLabels[cat];
        const muted = cat === "developing";
        return (
          <section key={cat} id={cat} className={`scroll-mt-24 py-20 ${cat === "industrial" ? "bg-white" : ""}`}>
            <Container>
              <h2 className="display text-3xl sm:text-4xl">{title}</h2>
              <p className="mt-3 max-w-2xl text-lg text-muted">{intro}</p>
              <ul className={`mt-10 grid gap-8 ${muted ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                {items.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/products/${p.slug}`} className="group block">
                      <div className={`relative overflow-hidden rounded-card bg-line ${muted ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                        <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                      </div>
                      <h3 className="heading mt-5 text-xl group-hover:text-leaf-dark">{p.name}</h3>
                      <p className="mt-2 leading-relaxed text-muted">{p.summary}</p>
                      {p.packs.length > 0 && (
                        <p className="mt-3 text-sm font-medium text-peel">Packs: {p.packs.join(", ")}</p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
