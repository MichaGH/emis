export type Product = {
  id: string;
  name: string;
  code: string;
  category: string;
  shortDescription: string;
  price: number;
  available: boolean;
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  icon: "silver" | "solder" | "toner" | "board";
};

export type NavItem = {
  label: string;
  href: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};
