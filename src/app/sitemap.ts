import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/content/products";

const routes = ["", "/about", "/leadership", "/products", "/operations", "/institutional-supply", "/sustainability", "/compliance", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...routes.map((r) => ({ url: `${siteConfig.url}${r}`, lastModified: now, priority: r === "" ? 1 : 0.8 })),
    ...products.map((p) => ({ url: `${siteConfig.url}/products/${p.slug}`, lastModified: now, priority: 0.7 })),
  ];
}
