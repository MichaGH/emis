export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductIllustration = "gks904" | "gks906" | "mgm101";

export type Product = {
  id: string;
  slug: string;
  name: string;
  code: string;
  category: string;
  /** Jedna veta do zoznamu produktov */
  shortDescription: string;
  /** Dlhší popis na detail produktu (odseky) */
  description: string[];
  /** 3 hlavné parametre zobrazené na karte */
  keySpecs: ProductSpec[];
  /** Kompletná tabuľka parametrov na detaile */
  specs: ProductSpec[];
  /** Čo je v balení */
  inBox: string[];
  price: number;
  available: boolean;
  illustration: ProductIllustration;
  /** Fotografia produktu (public/images/products/…). Kým chýba, zobrazí sa výkres. */
  image?: string;
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

export type ElectronicsProject = {
  code: string;
  /** typ zariadenia — zobrazuje sa na štítku karty */
  category: string;
  title: string;
  description: string;
  client?: string;
};

export type Faq = {
  question: string;
  answer: string;
};
