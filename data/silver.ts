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

// Skrátený postup pre homepage — veľké čísla a jeden krátky riadok.
export const processOverview: {
  number: string;
  title: string;
  text: string;
}[] = [
  { number: "01", title: "Destilovaná voda", text: "Čistý základ bez minerálov a chlóru" },
  { number: "02", title: "Strieborné elektródy", text: "Striebro s čistotou 99,99 %" },
  { number: "03", title: "Regulovaný prúd", text: "Uvoľňuje z elektród drobné častice striebra" },
  { number: "04", title: "Miešanie", text: "Rozptýli častice v celom objeme vody" },
];

// Sekcia „Prečo si ho ľudia vyrábajú doma“ — dôvody z pohľadu ľudí, ktorí ho
// používajú. Bez zdravotných tvrdení; referencie a upozornenia doplní klient.
export const whyPeopleMakeIt = [
  {
    title: "Vedia, z čoho je",
    text: "Iba destilovaná voda a striebro s čistotou 99,99 %. Nič, čo by nebolo vidieť.",
  },
  {
    title: "Vždy čerstvé",
    text: "Vyrobia si toľko, koľko práve potrebujú, a nemusia ho skladovať mesiace.",
  },
  {
    title: "Vyjde lacnejšie",
    text: "Prístroj a elektródy vydržia roky. Jedna várka je len voda a trocha striebra.",
  },
  {
    title: "Stará tradícia",
    text: "Striebro je v domácnostiach po generácie — od príborov až po nádoby na vodu.",
  },
];

// Fotka prírody pre sekciu — horská bystrina (Pexels License).
// Zdroj: https://www.pexels.com/video/majestic-mountain-stream-in-the-italian-alps-35574237/
export const natureImage =
  "https://images.pexels.com/videos/35574237/alpine-landscape-alpine-mountains-alpine-scenery-alpine-waterfall-35574237.jpeg?auto=compress&cs=tinysrgb&w=1600";

// Sekcia „Striebro a zdravie“ — iba overiteľné fakty so zdrojmi (ref = číslo
// v zozname zdrojov). Klient môže body a zdroje upraviť; každé tvrdenie má mať zdroj.
export const silverHealth = {
  title: "Striebro a zdravie",
  intro: "Striebro sa v medicíne používa dodnes. Niekoľko faktov, ktoré potvrdzujú odborné zdroje:",
  points: [
    {
      text: "Striebro pôsobí antimikrobiálne — ióny striebra poškodzujú bunkové steny a enzýmy baktérií.",
      ref: 1,
    },
    {
      text: "Obväzy so striebrom sa v nemocniciach používajú pri ošetrovaní rán a popálenín.",
      ref: 2,
    },
    {
      text: "Striebrom sa pokrývajú aj zdravotnícke pomôcky, napríklad močové katétre.",
      ref: 3,
    },
  ],
  references: [
    "Lansdown, A. B. G.: Silver in health care: antimicrobial effects and safety in use. Current Problems in Dermatology, 33, 2006, s. 17–34.",
    "Khansa, I. a kol.: Silver in Wound Care — Friend or Foe?: A Comprehensive Review. Plastic and Reconstructive Surgery – Global Open, 7(8), 2019, e2390.",
    "Lam, T. B. L. a kol.: Types of indwelling urethral catheters for short-term catheterisation in hospitalised adults. Cochrane Database of Systematic Reviews, 2014.",
  ],
};
