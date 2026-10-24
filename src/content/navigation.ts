export type NavItem = { label: string; href: string; children?: NavItem[] };

export const mainNav: NavItem[] = [
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About us", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "How we process", href: "/operations" },
  { label: "Institutional supply", href: "/institutional-supply" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; links: NavItem[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
  {
    heading: "What we supply",
    links: [
      { label: "Food products", href: "/products#food" },
      { label: "Industrial products", href: "/products#industrial" },
      { label: "Institutional supply", href: "/institutional-supply" },
      { label: "How we process", href: "/operations" },
    ],
  },
];
