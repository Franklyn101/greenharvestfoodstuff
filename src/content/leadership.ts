export type Leader = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string[];
};

export const leadership: Leader[] = [
  {
    slug: "letthemsay-braboke-inaibagha",
    name: "Letthemsay Braboke Inaibagha",
    role: "Chairman",
    photo: "/images/leadership/letthemsay-inaibagha.webp",
    bio: [
      "Letthemsay Braboke Inaibagha is the Chairman of Green Harvest Food Stuff Ltd. He provides strategic leadership and oversight of the company's operations, corporate direction and long-term growth.",
      "As Chairman, he guides key business decisions and supports the company's commitment to sustainable growth and excellence in the foodstuff sector.",
    ],
  },
  {
    slug: "joshua-esho-apeh",
    name: "Joshua Esho Apeh",
    role: "Managing Director / Chief Executive Officer",
    photo: "/images/leadership/joshua-apeh.webp",
    bio: [
      "Joshua Esho Apeh is the Managing Director and Chief Executive Officer of Green Harvest Food Stuff Ltd. He oversees the company's day-to-day operations, implements its business strategy and drives operational efficiency and growth.",
      "He provides executive leadership across the company's activities and leads the work toward its corporate objectives.",
    ],
  },
];
