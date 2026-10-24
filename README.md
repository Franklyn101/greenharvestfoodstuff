# Green Harvest Food Stuff Ltd — website

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4. Statically rendered except `/contact` and `/api/contact`.

## Run

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL once the domain is chosen
npm run dev                  # http://localhost:3000
npm run build && npm start
```

## Where things live

| What | File |
| --- | --- |
| Domain, contact details, feature flags | `src/config/site.ts` |
| Products (food, industrial, in development) | `src/content/products.ts` |
| Vision, mission, values, process, supply programmes | `src/content/company.ts` |
| Leadership bios | `src/content/leadership.ts` |
| Certificates / clearances | `src/content/compliance.ts` |
| Navigation | `src/content/navigation.ts` |
| Brand tokens (colours, type) | `src/app/globals.css` |
| Quote form email handler | `src/app/api/contact/route.ts` |

## Pages

`/` · `/about` · `/leadership` · `/products` · `/products/[slug]` · `/operations` · `/institutional-supply` · `/sustainability` · `/compliance` · `/contact`, plus `sitemap.xml`, `robots.txt` and a 404.

## When the domain is chosen

1. Set `NEXT_PUBLIC_SITE_URL=https://www.<domain>` in the host's environment.
2. Create `info@<domain>` and update `contact.email` in `src/config/site.ts`.
3. Verify the domain in Resend and set `RESEND_API_KEY` and `CONTACT_FROM` so the quote form emails the company.

## Open items for the client

- **Head office address**: certificates show House 2, Jikoyi Phase 1, Abuja; the profile shows the Benue site. Set `contact.headOffice` once confirmed.
- **Certificate scans**: hidden by default (`showCertificateScans: false`) because they include staff counts, revenue lines and tax IDs. The compliance page lists status instead. The scan files are git-ignored (this repo is public), so to enable them copy the approved files into `public/images/certificates/` on the build machine only.
- **Photos**: images were pulled from the PDF profiles and are low resolution (≈450–750px). Request original photos of the site, staff, products and both directors. Some machinery photos in the profiles appear to be supplier stock images and were left out.
- **Products in development**: starch syrup/glucose and biogas are marked as in development. Confirm whether ethanol and animal feed are in production today.
- **Social media links**: add in `src/config/site.ts`.
