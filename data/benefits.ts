// Kartičky s ikonkami na homepage. Vychádzajú z bodov pôvodného webu
// (záručný a pozáručný servis, certifikát elektród, dodávky pre priemysel,
// dizajn pre jednoduché a ľahké použitie).
export type BenefitIcon = "shield" | "badge" | "chip" | "gauge";

export const benefits: { icon: BenefitIcon; title: string; text: string }[] = [
  {
    icon: "shield",
    title: "Záruka a servis",
    text: "Záručný aj pozáručný servis robíme sami. Voláte priamo človeku, ktorý prístroj navrhol.",
  },
  {
    icon: "badge",
    title: "Certifikované striebro",
    text: "Elektródy z 99,99 % striebra dodávame s certifikátom od výrobcu striebra.",
  },
  {
    icon: "chip",
    title: "Overené v priemysle",
    text: "Naše zariadenia pracovali vo výrobe u LG.Philips Displays, Samsungu či Panasonicu.",
  },
  {
    icon: "gauge",
    title: "Jednoduchá obsluha",
    text: "Navrhnuté na ľahké použitie — zapojíte, zapnete a prístroj sám stráži prúd.",
  },
];
