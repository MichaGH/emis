import type { ElectronicsProject } from "@/lib/types";

// Zariadenia vyvinuté na zákazku — podľa pôvodného webu emis.sk.
export const electronicsProjects: ElectronicsProject[] = [
  {
    code: "CÍN",
    category: "Výrobné zariadenie",
    title: "Cínovacie zariadenie",
    description:
      "Bezolovnaté cínovanie vo výrobe vychyľovacích cievok pre televízne obrazovky. Dodávky aj do závodov v Číne a Brazílii.",
    client: "LG.Philips Displays",
  },
  {
    code: "DVB-T",
    category: "Testovacie pracovisko",
    title: "Pracovisko pre moduly DVB-T",
    description:
      "Kontrola napájacích napätí, nastavenie AVC a programovanie FLASH pamäte cez J-TAG. Osciloskopická kontrola video a audio výstupov.",
  },
  {
    code: "CTV2011",
    category: "Testovacie pracovisko",
    title: "Pracovisko LCD FTVP CTV2011",
    description:
      "Oživenie a nastavenie základnej dosky LCD televízora vrátane programovania pamätí a kontroly všetkých signálov.",
  },
  {
    code: "DM716",
    category: "Kamerové systémy",
    title: "Demodulátor pre kamerové systémy",
    description:
      "Demodulácia signálov z koaxiálneho kábla na 4 až 16 video (BNC) a audio (RCA) výstupov.",
  },
  {
    code: "TONER",
    category: "Testovacie zariadenie",
    title: "Tester tonera",
    description:
      "Pripojenie ľubovoľnej fixačnej jednotky laserovej tlačiarne, nastavenie teploty a otáčok valca, údaje na LCD displeji.",
  },
  {
    code: "INFO",
    category: "Riadenie výroby",
    title: "Informačná tabuľa",
    description:
      "Aktuálny stav výroby a plnenia plánu pre zamestnancov. Zobrazované položky sa dajú jednoducho preprogramovať.",
  },
  {
    code: "HOD",
    category: "Signalizácia",
    title: "Hodiny pre výrobné haly",
    description:
      "Zvuková signalizácia prestávok a zmien, časy nastaviteľné diaľkovým ovládaním.",
  },
  {
    code: "ADAPTÉR",
    category: "Testovanie DPS",
    title: "Ihlové polia a adaptéry",
    description:
      "Adaptéry pre vnútroobvodové a funkčné testovanie osadených dosiek plošných spojov.",
  },
];

export const clients = [
  "LG.Philips Displays",
  "Samsung",
  "Panasonic",
  "XPS b.v.",
  "OVP Orava",
];

export const workPrinciples = [
  {
    title: "Zadanie od začiatku po kus",
    text: "Návrh elektroniky, doska plošných spojov, firmvér, skrinka aj oživenie — u jedného človeka.",
  },
  {
    title: "Ovládanie pre obsluhu vo výrobe",
    text: "Zariadenia sú navrhnuté tak, aby ich operátor zvládol bez dlhého zaúčania.",
  },
  {
    title: "Záručný aj pozáručný servis",
    text: "Zariadenie poznáme do poslednej súčiastky, preto ho vieme aj po rokoch opraviť.",
  },
];
