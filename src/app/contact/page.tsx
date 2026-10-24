import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/config/site";
import { getProduct } from "@/content/products";

export const metadata: Metadata = {
  title: "Contact and quotes",
  description: "Request a quote or contact Green Harvest Food Stuff Ltd by phone, WhatsApp or email.",
};

type Props = { searchParams: Promise<{ product?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { product } = await searchParams;
  const defaultProduct = product && getProduct(product) ? product : "";
  const { contact } = siteConfig;

  return (
    <>
      <PageHero
        title="Talk to us"
        intro="For quotes, partnerships, farmer supply or anything else, reach us directly or send the form and we will reply within two working days."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="heading text-2xl">Reach us directly</h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              <div className="py-4">
                <dt className="text-sm text-muted">Phone</dt>
                <dd className="mt-1 text-lg font-semibold">
                  <a href={`tel:${contact.phoneIntl}`} className="hover:text-leaf-dark">{contact.phone}</a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-muted">WhatsApp</dt>
                <dd className="mt-1 text-lg font-semibold">
                  <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-leaf-dark">
                    Message us on WhatsApp
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-muted">Email</dt>
                <dd className="mt-1 break-all text-lg font-semibold">
                  <a href={`mailto:${contact.email}`} className="hover:text-leaf-dark">{contact.email}</a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-muted">Processing site</dt>
                <dd className="mt-1 text-lg">{contact.processingSite}</dd>
              </div>
              {contact.headOffice && (
                <div className="py-4">
                  <dt className="text-sm text-muted">Head office</dt>
                  <dd className="mt-1 text-lg">{contact.headOffice}</dd>
                </div>
              )}
            </dl>
          </div>
          <div id="quote" className="scroll-mt-28">
            <h2 className="heading text-2xl">Request a quote</h2>
            <p className="mt-2 text-muted">Tell us the product, quantity and where it needs to go.</p>
            <div className="mt-8">
              <ContactForm defaultProduct={defaultProduct} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
