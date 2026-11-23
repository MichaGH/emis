// Hlavný prístroj na homepage — výkres s očíslovanými popiskami.
// side = na ktorej strane výkresu sa popisok zobrazí (desktop).
export const featuredProductSlug = "gks-906";

export const featuredCallouts: {
  title: string;
  detail: string;
  side: "left" | "right";
}[] = [
  { title: "Elektródy 99,99 % Ag", detail: "s certifikátom výrobcu striebra", side: "left" },
  { title: "Várka 400 ml", detail: "destilovaná voda, sklenená nádoba", side: "left" },
  { title: "Regulácia prúdu", detail: "elektronická, stabilná počas výroby", side: "right" },
  { title: "Magnetická miešačka", detail: "zabudovaná, rovnomerný roztok", side: "right" },
];
