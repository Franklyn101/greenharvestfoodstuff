import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { credentials } from "@/content/compliance";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Registrations and clearances held by Greenharvest Foodstuff Ltd, including CAC incorporation, BPP registration and tax, pension, NSITF and ITF clearances.",
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        title="Registrations and clearances"
        intro={`${siteConfig.legalName} (RC ${siteConfig.rcNumber}) is a registered private limited company with current statutory clearances.`}
        crumbs={[{ label: "Company", href: "/about" }, { label: "Compliance" }]}
      />
      <section className="py-20">
        <Container>
          <ul className={siteConfig.showCertificateScans ? "grid gap-10 sm:grid-cols-2 lg:grid-cols-3" : "border-t-2 border-forest"}>
            {credentials.map((c) =>
              siteConfig.showCertificateScans ? (
                <li key={c.document}>
                  <a href={c.image} target="_blank" rel="noopener" className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-card border border-line bg-white">
                      <Image src={c.image} alt={`${c.document} issued by ${c.issuer}`} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-contain p-3" />
                    </div>
                    <h2 className="heading mt-4 text-lg group-hover:text-leaf-dark">{c.document}</h2>
                    <p className="text-muted">{c.issuer}</p>
                  </a>
                </li>
              ) : (
                <li key={c.document} className="grid gap-2 border-b border-line py-6 md:grid-cols-[1.1fr_1.6fr_auto] md:gap-8">
                  <div>
                    <h2 className="heading text-lg">{c.document}</h2>
                    <p className="text-muted">{c.issuer}</p>
                  </div>
                  <p className="leading-relaxed">{c.detail}</p>
                  <p className="text-sm font-medium text-peel md:text-right">{c.validUntil ? `Valid to ${c.validUntil}` : "Current"}</p>
                </li>
              ),
            )}
          </ul>
          <p className="mt-10 max-w-2xl text-muted">
            Procurement officers can request copies of any of these documents through our contact page.
          </p>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
