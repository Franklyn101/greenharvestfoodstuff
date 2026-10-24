export type Credential = {
  issuer: string;
  document: string;
  detail: string;
  validUntil?: string;
  image: string;
};

/**
 * Registrations and clearances from the company profile.
 * Dates are as printed on the documents. Update yearly as they renew.
 */
export const credentials: Credential[] = [
  {
    issuer: "Corporate Affairs Commission",
    document: "Certificate of Incorporation",
    detail: "Private company limited by shares, RC 9084229. Incorporated 17 December 2025.",
    image: "/images/certificates/cac-incorporation.webp",
  },
  {
    issuer: "Bureau of Public Procurement",
    document: "Interim Registration Report",
    detail: "Listed on the National Database of Contractors, Consultants and Service Providers.",
    validUntil: "31 December 2026",
    image: "/images/certificates/bpp-irr.webp",
  },
  {
    issuer: "Nigeria Revenue Service",
    document: "Tax Clearance Certificate",
    detail: "Active, compliant taxpayer.",
    validUntil: "31 December 2026",
    image: "/images/certificates/tax-clearance.webp",
  },
  {
    issuer: "National Pension Commission",
    document: "Pension Clearance Certificate",
    detail: "Compliant with the Pension Reform Act 2014.",
    validUntil: "31 December 2026",
    image: "/images/certificates/pencom.webp",
  },
  {
    issuer: "Nigeria Social Insurance Trust Fund",
    document: "ECS Clearance Certificate",
    detail: "Compliant with the Employees' Compensation Act 2010.",
    validUntil: "31 December 2026",
    image: "/images/certificates/nsitf.webp",
  },
  {
    issuer: "Industrial Training Fund",
    document: "Certificate of Compliance",
    detail: "Compliant with the Industrial Training Fund Act.",
    validUntil: "31 December 2026",
    image: "/images/certificates/itf.webp",
  },
  {
    issuer: "Federal Ministry of Industry, Trade and Investment",
    document: "Trademark Acceptance",
    detail: "GHFS Green Harvest mark accepted under Class 30 (food products).",
    image: "/images/certificates/trademark.webp",
  },
];
