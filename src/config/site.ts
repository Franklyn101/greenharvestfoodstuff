/**
 * Central site configuration.
 *
 * DOMAIN: set NEXT_PUBLIC_SITE_URL in .env.local (or your host's env settings)
 * once the client picks a domain. Everything that needs an absolute URL —
 * metadata, Open Graph, sitemap.xml, robots.txt — reads from here.
 */
export const siteConfig = {
  name: "Green Harvest Food Stuff Ltd",
  shortName: "Green Harvest",
  legalName: "Greenharvest Foodstuff Ltd",
  rcNumber: "9084229",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  tagline: "Powering industries. Feeding communities. Driving innovation.",
  description:
    "Green Harvest Food Stuff Ltd is a Nigerian cassava processing company in Benue State producing garri, fufu flour, high quality cassava flour, starch, ethanol feedstock and cassava-based animal feed for households, institutions and industry.",
  contact: {
    phone: "09035876764",
    phoneIntl: "+2349035876764",
    whatsapp: "2349035876764",
    // TODO: switch to a domain email (e.g. info@<domain>) once the domain is live.
    email: "greenharvestfoodstuff@gmail.com",
    processingSite: "No. 60 Adoka–Otukpo Road, Benue State, Nigeria",
    // TODO: confirm with client. Certificates list House 2, Jikoyi Phase 1, Abuja
    // as the registered business address. Set to a string to show it on the site.
    headOffice: null as string | null,
  },
  social: {
    // Add profile URLs when the client provides them; empty ones are hidden.
    facebook: "",
    instagram: "",
    linkedin: "",
    x: "",
  },
  /**
   * Certificate scans include employee counts, revenue lines and tax IDs.
   * Kept off by default: the compliance page shows a status list instead.
   * Flip to true only after the client approves publishing the scans.
   */
  showCertificateScans: false,
} as const;

export type SiteConfig = typeof siteConfig;
