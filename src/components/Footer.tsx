import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/content/navigation";
import { Container } from "./Container";

export function Footer() {
  const { contact, social } = siteConfig;
  const socials = Object.entries(social).filter(([, url]) => url);

  return (
    <footer className="bg-forest text-white/85">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Image src="/images/brand/logo-white.png" alt={siteConfig.shortName} width={419} height={253} className="h-16 w-auto" />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/70">
            Cassava processing in Benue State for Nigerian homes, institutions and industry.
          </p>
        </div>

        {footerNav.map((col) => (
          <div key={col.heading}>
            <h2 className="heading text-sm text-garri">{col.heading}</h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="heading text-sm text-garri">Contact</h2>
          <address className="mt-4 space-y-2.5 text-[15px] not-italic">
            <p>
              <a href={`tel:${contact.phoneIntl}`} className="hover:text-white hover:underline">
                {contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="break-all hover:text-white hover:underline">
                {contact.email}
              </a>
            </p>
            <p className="text-white/70">{contact.processingSite}</p>
            {contact.headOffice && <p className="text-white/70">{contact.headOffice}</p>}
          </address>
          {socials.length > 0 && (
            <ul className="mt-4 flex gap-4 text-sm">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} className="capitalize hover:text-white" rel="noopener noreferrer" target="_blank">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-white/55 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. RC {siteConfig.rcNumber}.
          </p>
          <p>{siteConfig.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
