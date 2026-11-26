import {
  Archivo,
  Archivo_Narrow,
  Barlow,
  Barlow_Condensed,
  Bricolage_Grotesque,
  Chivo,
  DM_Sans,
  Figtree,
  Geist,
  Hanken_Grotesk,
  IBM_Plex_Sans,
  Instrument_Sans,
  Inter,
  Manrope,
  Onest,
  Red_Hat_Display,
  Rubik,
  Saira_Condensed,
  Schibsted_Grotesk,
  Sora,
  Space_Grotesk,
  Work_Sans,
} from "next/font/google";

// next/font vyžaduje doslovné hodnoty v nastaveniach — preto bez spread/premenných.

// Pôvodný font — už len ako voľba vo FontPickeri.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  preload: false,
});

// Alternatívy pre výber písma (FontPicker). preload: false → súbor sa
// stiahne až vtedy, keď sa font na stránke reálne použije.
const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  preload: false,
});
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  preload: false,
});
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  // hlavné písmo webu — prednačítané
  preload: true,
});
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  // hlavné písmo webu — prednačítané
  preload: true,
});
const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const redHat = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const sairaCondensed = Saira_Condensed({
  variable: "--font-saira-condensed",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  preload: false,
});
const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  preload: false,
});
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin", "latin-ext"],
  preload: false,
});

export const fontVariables = [
  archivo,
  archivoNarrow,
  barlow,
  barlowCondensed,
  bricolage,
  chivo,
  dmSans,
  figtree,
  geist,
  hanken,
  plex,
  inter,
  instrument,
  manrope,
  onest,
  redHat,
  rubik,
  sairaCondensed,
  schibsted,
  sora,
  spaceGrotesk,
  workSans,
]
  .map((f) => f.variable)
  .join(" ");
