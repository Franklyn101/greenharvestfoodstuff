import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Cassava processing in Benue, Nigeria`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: siteConfig.name,
    url: siteConfig.url,
    images: [{ url: "/images/facility/processing-team.webp", width: 668, height: 465, alt: "Green Harvest processing team at work" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0e3a1f",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/brand/logo.png`,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phoneIntl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 60 Adoka–Otukpo Road",
    addressRegion: "Benue State",
    addressCountry: "NG",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        {/* Flag JS before first paint so reveal targets start hidden; skipped for reduced motion. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-reveal')",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
