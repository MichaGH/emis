import type { Faq, ProcessStep } from "@/lib/types";

// Postup výroby — vecne, bez zdravotných tvrdení.
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Destilovaná voda",
    description:
      "Do sklenenej nádoby nalejete destilovanú alebo deionizovanú vodu. Z vodovodnej vody kvalitné koloidné striebro nevznikne.",
  },
  {
    number: "02",
    title: "Strieborné elektródy",
    description:
      "Do držiaka vložíte dve elektródy z 99,99 % striebra a ponoríte ich do vody. Čisté striebro je základ čistého roztoku.",
  },
  {
    number: "03",
    title: "Regulovaný prúd",
    description:
      "Generátor vedie medzi elektródami malý, presne riadený prúd. Zo striebra sa uvoľňujú drobné častice a ióny do vody.",
  },
  {
    number: "04",
    title: "Miešanie a hotovo",
    description:
      "Miešačka rozptyľuje častice v celom objeme. Po skončení časovača je roztok hotový — skladujte ho v tmavej fľaši.",
  },
];

// Prečo vlastný prístroj — konkrétne dôvody, žiadne slogany.
export const reasons = [
  {
    title: "Stabilný prúd počas celej výroby",
    text: "Ako pribúda striebra vo vode, mení sa jej vodivosť. Elektronická regulácia prúd udržiava, takže výroba nebeží „naslepo“.",
  },
  {
    title: "Elektródy s certifikátom",
    text: "Striebro 99,99 % dodávame s certifikátom od výrobcu. Viete presne, čo do vody ponárate.",
  },
  {
    title: "Vyrobené a servisované na Orave",
    text: "Prístroje navrhujeme a skladáme sami v Nižnej. Ak treba poradiť alebo opraviť, voláte priamo konštruktérovi.",
  },
];

export const silverFaq: Faq[] = [
  {
    question: "Akú vodu použiť?",
    answer:
      "Iba destilovanú alebo deionizovanú vodu. Minerály a chlór z vodovodnej vody reagujú so striebrom a výsledok je zakalený.",
  },
  {
    question: "Ako dlho trvá jedna výroba?",
    answer:
      "Závisí od objemu, požadovanej koncentrácie a od toho, či vodu miešate. Presné časy nájdete v návode, ktorý je súčasťou balenia.",
  },
  {
    question: "Ako koloidné striebro skladovať?",
    answer:
      "V tmavej sklenenej fľaši, v chlade a mimo priameho svetla. Nepoužívajte kovové nádoby ani lyžičky.",
  },
  {
    question: "Opotrebujú sa elektródy?",
    answer:
      "Áno, postupne — striebro z nich prechádza do vody. Elektródy pred každou výrobou očistite, náhradné si môžete objednať.",
  },
  {
    question: "Môžem si objednať aj náhradné elektródy?",
    answer:
      "Áno. Napíšte alebo zavolajte, pripravíme elektródy podľa vášho generátora.",
  },
];

// Skrátený postup pre homepage — ikonky a jeden krátky riadok.
export type ProcessIcon = "droplet" | "electrode" | "bolt" | "stir";

export const processOverview: {
  number: string;
  icon: ProcessIcon;
  title: string;
  text: string;
}[] = [
  { number: "01", icon: "droplet", title: "Destilovaná voda", text: "Nalejete ju do nádoby" },
  { number: "02", icon: "electrode", title: "Strieborné elektródy", text: "Ponoríte ich do vody" },
  { number: "03", icon: "bolt", title: "Regulovaný prúd", text: "Uvoľňuje striebro do vody" },
  { number: "04", icon: "stir", title: "Miešanie", text: "Roztok je rovnomerný" },
];
