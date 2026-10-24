import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";

export function CtaBand({
  title = "Tell us what you need to source",
  text = "Share the product, quantity and delivery location, and we will come back with pricing and lead times.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-garri text-forest">
      <Container className="flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="display text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact#quote" className="btn bg-forest text-white hover:bg-forest-2">
            Request a quote
          </Link>
          <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="btn btn-ghost" rel="noopener noreferrer" target="_blank">
            Chat on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
