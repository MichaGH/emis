import type { Product } from "@/lib/types";

// Produkty v e-shope. Popisy a parametre vychádzajú z pôvodného webu emis.sk.
// CENY SÚ ZATIAĽ ORIENTAČNÉ — treba ich nahradiť podľa aktuálneho cenníka klienta.
export const products: Product[] = [
  {
    id: "gks-904",
    slug: "gks-904",
    name: "Generátor koloidného striebra",
    code: "GKS 904",
    category: "Generátory",
    shortDescription:
      "Jednoduchý generátor s časovačom. Kompaktná riadiaca jednotka, nádoba 400 ml a dve strieborné elektródy.",
    description: [
      "GKS 904 je najjednoduchší spôsob, ako si pripraviť koloidné striebro doma. Riadiaca jednotka sa napája zo sieťového adaptéra a cez dve strieborné elektródy vedie do destilovanej vody presne regulovaný prúd.",
      "Časovač stráži dĺžku výroby, takže nemusíte stáť pri nádobe s hodinkami. Stav prístroja ukazujú kontrolky na čelnom paneli.",
      "Model je bez miešačky — vodu je vhodné počas výroby občas premiešať, prípadne doplniť samostatnú magnetickú miešačku MGM 101.",
    ],
    keySpecs: [
      { label: "Objem", value: "400 ml" },
      { label: "Miešačka", value: "bez miešačky" },
      { label: "Elektródy", value: "2 Ag elektródy" },
    ],
    specs: [
      { label: "Typ", value: "jednoduchý generátor s časovačom" },
      { label: "Objem várky", value: "400 ml" },
      { label: "Regulácia prúdu", value: "elektronická" },
      { label: "Miešanie", value: "bez miešačky" },
      { label: "Elektródy", value: "2 ks, striebro 99,99 %" },
      { label: "Certifikát elektród", value: "od výrobcu striebra" },
      { label: "Napájanie", value: "sieťový adaptér" },
    ],
    inBox: [
      "riadiaca jednotka GKS 904",
      "sieťový adaptér",
      "držiak elektród na nádobu",
      "2 strieborné elektródy 99,99 %",
      "návod na výrobu",
    ],
    price: 89,
    available: true,
    illustration: "gks904",
  },
  {
    id: "gks-906",
    slug: "gks-906",
    name: "Automatický generátor s miešačkou",
    code: "GKS 906",
    category: "Generátory",
    shortDescription:
      "Generátor so zabudovanou magnetickou miešačkou. Voda sa mieša počas celej výroby, výsledok je rovnomernejší.",
    description: [
      "GKS 906 má generátor aj magnetickú miešačku v jednej skrinke. Nádobu s destilovanou vodou postavíte na prístroj, vložíte elektródy a výroba prebehne automaticky.",
      "Priebežné miešanie odvádza častice striebra od elektród a rozptyľuje ich v celom objeme. Výroba je kratšia a výsledný roztok rovnomernejší.",
      "Elektronická regulácia udržiava prúd stabilný počas celej výroby, aj keď sa vodivosť vody postupne mení.",
    ],
    keySpecs: [
      { label: "Objem", value: "400 ml" },
      { label: "Miešačka", value: "s miešačkou" },
      { label: "Elektródy", value: "2 Ag elektródy" },
    ],
    specs: [
      { label: "Typ", value: "automatický generátor" },
      { label: "Objem várky", value: "400 ml" },
      { label: "Regulácia prúdu", value: "elektronická" },
      { label: "Miešanie", value: "zabudovaná magnetická miešačka" },
      { label: "Elektródy", value: "2 ks, striebro 99,99 %" },
      { label: "Certifikát elektród", value: "od výrobcu striebra" },
      { label: "Napájanie", value: "sieťový adaptér" },
    ],
    inBox: [
      "generátor GKS 906 so zabudovanou miešačkou",
      "sieťový adaptér",
      "magnetické miešadlo",
      "držiak elektród",
      "2 strieborné elektródy 99,99 %",
      "návod na výrobu",
    ],
    price: 159,
    available: true,
    illustration: "gks906",
  },
  {
    id: "mgm-101",
    slug: "mgm-101",
    name: "Magnetická miešačka",
    code: "MGM 101",
    category: "Príslušenstvo",
    shortDescription:
      "Samostatná magnetická miešačka. Doplnok ku GKS 904 alebo na miešanie iných tekutín.",
    description: [
      "MGM 101 mieša tekutinu pomocou magnetického miešadla, ktoré sa vloží priamo do nádoby. V nádobe nie sú žiadne pohyblivé časti okrem miešadla.",
      "Pri výrobe koloidného striebra priebežné miešanie destilovanej vody skráti čas výroby a zlepší kvalitu výsledného roztoku. Miešačka je vhodná ako doplnok ku generátoru GKS 904.",
    ],
    keySpecs: [
      { label: "Použitie", value: "ku GKS 904" },
      { label: "Miešadlo", value: "magnetické miešadlo" },
      { label: "Nádoba", value: "do 400 ml" },
    ],
    specs: [
      { label: "Typ", value: "magnetická miešačka" },
      { label: "Miešanie", value: "magnetické miešadlo v nádobe" },
      { label: "Vhodná nádoba", value: "sklenená kadička do 400 ml" },
      { label: "Kompatibilita", value: "GKS 904, samostatné použitie" },
      { label: "Napájanie", value: "sieťový adaptér" },
    ],
    inBox: ["miešačka MGM 101", "sieťový adaptér", "magnetické miešadlo"],
    price: 69,
    available: true,
    illustration: "mgm101",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

// Celý rad generátorov GKS podľa pôvodného webu — do porovnávacej tabuľky.
// GKS 505 a 905 sa zatiaľ nepredávajú cez e-shop (na dopyt).
export const gksLineup = [
  {
    code: "GKS 904",
    type: "jednoduchý, s časovačom",
    volume: "400 ml",
    stirrer: "nie",
    electrodes: "2 × Ag v balení",
    use: "domácnosť",
    slug: "gks-904",
  },
  {
    code: "GKS 906",
    type: "automatický",
    volume: "400 ml",
    stirrer: "áno, zabudovaná",
    electrodes: "2 × Ag v balení",
    use: "domácnosť",
    slug: "gks-906",
  },
  {
    code: "GKS 505",
    type: "automatický",
    volume: "600 – 2000 ml",
    stirrer: "áno, zabudovaná",
    electrodes: "bez elektród",
    use: "väčšie množstvá",
  },
  {
    code: "GKS 905",
    type: "priemyselný",
    volume: "podľa elektród",
    stirrer: "nie",
    electrodes: "bez elektród",
    use: "priemyselná výroba",
  },
] as const;
