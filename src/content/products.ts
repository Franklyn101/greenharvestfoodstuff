export type ProductCategory = "food" | "industrial" | "developing";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  summary: string;
  description: string[];
  uses: string[];
  packs: string[];
  image: string;
  imageAlt: string;
  varieties?: { name: string; note: string }[];
};

export const categoryLabels: Record<ProductCategory, { title: string; intro: string }> = {
  food: {
    title: "Food products",
    intro: "Staple cassava foods for homes, retailers, institutional kitchens and relief programmes.",
  },
  industrial: {
    title: "Industrial products",
    intro: "Cassava derivatives for manufacturers, feed mills and processors.",
  },
  developing: {
    title: "Value streams in development",
    intro: "Further uses of the root and its by-products that we are building toward. Talk to us about offtake or partnership.",
  },
};

export const products: Product[] = [
  {
    slug: "garri",
    name: "Garri",
    category: "food",
    summary: "White, yellow and Ijebu garri, fried to a consistent grain and dryness.",
    description: [
      "Garri is grated, fermented, dewatered and fried cassava, and one of the most widely eaten staples in West Africa. We produce it in three varieties so buyers can match the product to how their customers eat it.",
      "Each batch is checked for moisture, texture and cleanliness before it is bagged, so the garri stores well and cooks the same way from one sack to the next.",
    ],
    varieties: [
      { name: "White garri", note: "Fried without palm oil. The everyday choice for eba." },
      { name: "Yellow garri", note: "Fried with palm oil for colour and flavour." },
      { name: "Ijebu garri", note: "Fine, crisp and sharply sour. Preferred for soaking and drinking." },
    ],
    uses: ["Households and retail", "School and institutional feeding", "Humanitarian food baskets"],
    packs: ["1kg", "5kg", "10kg", "25kg", "50kg"],
    image: "/images/products/garri.webp",
    imageAlt: "A heap of yellow garri grains",
  },
  {
    slug: "fufu-flour",
    name: "Fufu flour",
    category: "food",
    summary: "Hygienically processed cassava fufu, ready to prepare in minutes.",
    description: [
      "Our fufu flour gives households and kitchens the taste of traditional fufu without the long soaking and pounding. It is processed and dried under hygienic conditions and packed to keep out moisture.",
    ],
    uses: ["Households and retail", "Restaurants and canteens", "Institutional kitchens"],
    packs: ["1kg", "5kg", "10kg", "25kg"],
    image: "/images/products/fufu.webp",
    imageAlt: "Wraps of prepared fufu on a white plate",
  },
  {
    slug: "high-quality-cassava-flour",
    name: "High quality cassava flour (HQCF)",
    category: "food",
    summary: "Fine, unfermented cassava flour for bakeries and food manufacturers.",
    description: [
      "HQCF is milled from fresh, quickly processed roots to give a smooth, neutral flour. Bakers and food processors use it to replace part of the wheat flour in bread, biscuits and pastries, and as a base for gluten-free products.",
      "Using local cassava flour in place of imported wheat helps manufacturers manage input costs and supports Nigeria's import-substitution goals.",
    ],
    uses: ["Bread and confectionery", "Biscuits and snacks", "Pasta and noodles", "Gluten-free products"],
    packs: ["1kg", "5kg", "10kg", "25kg", "50kg"],
    image: "/images/products/hqcf.webp",
    imageAlt: "A bowl of fine white cassava flour",
  },
  {
    slug: "cassava-starch",
    name: "Cassava starch",
    category: "industrial",
    summary: "Native and industrial-grade starch for food, paper, textile and adhesive manufacturers.",
    description: [
      "Cassava starch is one of the most versatile products of the root. Food processors use it as a thickener and binder; paper, textile and adhesive makers use it in sizing, finishing and glue production; pharmaceutical manufacturers use it as a tablet binder.",
    ],
    uses: ["Food processing and bakery", "Paper and packaging", "Textiles", "Adhesives", "Pharmaceutical binders"],
    packs: ["25kg", "50kg", "Bulk"],
    image: "/images/products/starch.webp",
    imageAlt: "Cassava starch powder in a wooden bowl",
  },
  {
    slug: "fuel-ethanol",
    name: "Ethanol",
    category: "industrial",
    summary: "Cassava-derived ethanol for fuel blending, sanitisers, cosmetics and chemical manufacturing.",
    description: [
      "Cassava is a strong feedstock for ethanol. The starch is converted to sugars and fermented, then distilled. The ethanol can be blended with petrol, used as a cleaner cooking fuel, or supplied to pharmaceutical, cosmetic and chemical manufacturers.",
    ],
    uses: ["Fuel blending", "Sanitiser and disinfectant production", "Pharmaceuticals and cosmetics", "Paints, coatings and inks"],
    packs: ["25L", "50L", "200L", "Bulk tanker"],
    image: "/images/products/ethanol.webp",
    imageAlt: "Cassava roots beside a laboratory bottle of ethanol",
  },
  {
    slug: "animal-feed",
    name: "Cassava-based animal feed",
    category: "industrial",
    summary: "Energy-rich feed ingredients from cassava roots and peels for poultry, pigs and ruminants.",
    description: [
      "Dried, chipped and pelleted cassava is a lower-cost energy source that can replace part of the maize in livestock rations. Peels are processed into dried mash, and starch by-products act as natural pellet binders in fish feed.",
      "All feed material is properly grated, fermented and dried to remove naturally occurring cyanogenic compounds before use.",
    ],
    uses: ["Broilers, layers and growers", "Pig farms", "Cattle and goats", "Aquaculture pellet binders"],
    packs: ["25kg", "50kg"],
    image: "/images/livestock/poultry.webp",
    imageAlt: "Brown laying hens",
  },
  {
    slug: "starch-syrup-glucose",
    name: "Starch syrup and glucose",
    category: "developing",
    summary: "Sweeteners for confectionery, soft drinks and pharmaceutical use.",
    description: [
      "Cassava starch can be converted into glucose and syrups used by confectioners, beverage makers and pharmaceutical companies.",
    ],
    uses: ["Confectionery", "Soft drinks", "Pharmaceuticals"],
    packs: [],
    image: "/images/products/cassava-flour.webp",
    imageAlt: "Cassava roots and a bowl of cassava starch",
  },
  {
    slug: "biogas",
    name: "Biogas from processing waste",
    category: "developing",
    summary: "Turning peels and wastewater into energy for the factory and fertiliser for farms.",
    description: [
      "Cassava processing leaves peels and wastewater behind. Digested, they produce biogas for heating and power, and the remaining slurry is a useful farm fertiliser.",
    ],
    uses: ["Factory heat and power", "Cooking gas", "Organic fertiliser"],
    packs: [],
    image: "/images/products/biogas.webp",
    imageAlt: "Biogas digester tanks",
  },
];

export const productsByCategory = (c: ProductCategory) => products.filter((p) => p.category === c);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
