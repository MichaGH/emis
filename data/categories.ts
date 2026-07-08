import type { Category } from "@/lib/types";

// Hlavné oblasti, ktorým sa EMIS venuje. Popisy sú vecné a neutrálne —
// upresnia sa po dodaní podkladov od klienta.
export const categories: Category[] = [
  {
    slug: "generatory-koloidneho-striebra",
    title: "Generátory koloidného striebra",
    description:
      "Zariadenia na prípravu koloidného striebra pre domáce použitie. Jednoduchá obsluha a stabilná prevádzka.",
    icon: "silver",
  },
  {
    slug: "cinovacie-zariadenia",
    title: "Cínovacie zariadenia",
    description:
      "Prístroje určené na cínovanie a prácu so spájkovaním v dielni aj pri servisných úkonoch.",
    icon: "solder",
  },
  {
    slug: "toner-testery",
    title: "Toner testery",
    description:
      "Testovacie zariadenia pre kontrolu tonerov a súvisiacej tlačovej techniky.",
    icon: "toner",
  },
  {
    slug: "informacne-tabule",
    title: "Informačné tabule s hodinami",
    description:
      "Informačné panely s hodinami do prevádzok, čakární a verejných priestorov.",
    icon: "board",
  },
];
