// Fonty dostupné vo výbere písma (FontPicker). `variable` musí sedieť
// s `variable` v lib/fonts.ts — tam sa fonty reálne načítavajú cez next/font.
export type FontOption = { label: string; variable: string; note?: string };

export const fontOptions: FontOption[] = [
  { label: "Archivo", variable: "--font-archivo" },
  { label: "Archivo Narrow", variable: "--font-archivo-narrow" },
  { label: "Barlow", variable: "--font-barlow" },
  { label: "Barlow Condensed", variable: "--font-barlow-condensed" },
  { label: "Bricolage Grotesque", variable: "--font-bricolage" },
  { label: "Chivo", variable: "--font-chivo" },
  { label: "DM Sans", variable: "--font-dm-sans", note: "text" },
  { label: "Figtree", variable: "--font-figtree" },
  { label: "Geist", variable: "--font-geist" },
  { label: "Hanken Grotesk", variable: "--font-hanken" },
  { label: "IBM Plex Sans", variable: "--font-plex" },
  { label: "Inter", variable: "--font-inter" },
  { label: "Instrument Sans", variable: "--font-instrument" },
  { label: "Manrope", variable: "--font-manrope", note: "nadpisy" },
  { label: "Onest", variable: "--font-onest" },
  { label: "Red Hat Display", variable: "--font-red-hat" },
  { label: "Rubik", variable: "--font-rubik" },
  { label: "Saira Condensed", variable: "--font-saira-condensed" },
  { label: "Schibsted Grotesk", variable: "--font-schibsted" },
  { label: "Sora", variable: "--font-sora" },
  { label: "Space Grotesk", variable: "--font-space-grotesk" },
  { label: "Work Sans", variable: "--font-work-sans" },
];

export const DEFAULT_PRIMARY_FONT = "--font-manrope";
export const DEFAULT_SECONDARY_FONT = "--font-dm-sans";

// Odporúčané kombinácie (nadpisy / text) — rýchly výber v FontPicker.
export const fontPresets: {
  name: string;
  primary: string;
  secondary: string;
  note: string;
}[] = [
  {
    name: "Priemyselná",
    primary: "--font-barlow-condensed",
    secondary: "--font-barlow",
    note: "Barlow Condensed + Barlow",
  },
  {
    name: "Technická",
    primary: "--font-plex",
    secondary: "--font-plex",
    note: "IBM Plex Sans",
  },
  {
    name: "Strojová",
    primary: "--font-saira-condensed",
    secondary: "--font-hanken",
    note: "Saira Condensed + Hanken Grotesk",
  },
  {
    name: "Súčasná",
    primary: "--font-manrope",
    secondary: "--font-dm-sans",
    note: "Manrope + DM Sans (aktuálny stav)",
  },
];
