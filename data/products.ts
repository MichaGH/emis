import type { Product } from "@/lib/types";

// Ukážkové (dummy) produkty pre návrh. Reálne produkty, ceny a popisy
// doplní klient. Ceny sú orientačné a slúžia len na vizuálny návrh.
export const products: Product[] = [
  {
    id: "gks-g1",
    name: "Generátor koloidného striebra G1",
    code: "EMIS G1",
    category: "Generátory koloidného striebra",
    shortDescription:
      "Základný model pre domácu prípravu koloidného striebra s automatickým časovaním.",
    price: 149,
    available: true,
  },
  {
    id: "cin-t2",
    name: "Cínovacie zariadenie T2",
    code: "EMIS T2",
    category: "Cínovacie zariadenia",
    shortDescription:
      "Dielenské cínovacie zariadenie s rýchlym nábehom a stabilnou pracovnou teplotou.",
    price: 320,
    available: true,
  },
  {
    id: "tt-basic",
    name: "Toner tester TT",
    code: "EMIS TT",
    category: "Toner testery",
    shortDescription:
      "Prístroj na kontrolu tonerov určený pre servis tlačiarní a kancelárskej techniky.",
    price: 95,
    available: false,
  },
];
