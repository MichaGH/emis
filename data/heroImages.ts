// Kandidáti na fotku do úvodnej sekcie — iba pre testovaciu stránku /test.
// Všetko Unsplash License (bezplatné aj na komerčné použitie). Obrázky sa
// zatiaľ načítavajú priamo z Unsplash CDN; vybranú fotku potom stiahneme do /public.
export type HeroImageGroup = "Aktuálna" | "Dosky plošných spojov" | "Dielňa" | "Meracie prístroje";

export type HeroImage = {
  id: string;
  group: HeroImageGroup;
  label: string;
  /** stránka fotky na Unsplash (autor, licencia) */
  source: string;
  position?: string;
};

const U = "https://unsplash.com/photos/";

export const heroImages: HeroImage[] = [
  { id: "local", group: "Aktuálna", label: "Tmavomodrá doska (súčasná)", source: `${U}pfR18JNEMv8` },

  { id: "photo-1518770660439-4636190af475", group: "Dosky plošných spojov", label: "Čierna doska, makro", source: `${U}FO7JIlwjOtU` },
  { id: "photo-1697952431907-8542919a16b3", group: "Dosky plošných spojov", label: "Čiernobiela doska", source: `${U}b_GcLCaKt94` },
  { id: "photo-1557701197-2f99da0922dd", group: "Dosky plošných spojov", label: "Modrá doska s čipmi", source: `${U}mjwGKmwkDDA` },
  { id: "photo-1517055729445-fa7d27394b48", group: "Dosky plošných spojov", label: "Modrá doska, rozostrená", source: `${U}CBydtQDjaJc` },
  { id: "photo-1651340741844-48edcd3fe79c", group: "Dosky plošných spojov", label: "Tmavá doska, súčiastky", source: `${U}vILVKROnyGA` },
  { id: "photo-1651340765216-ba02df201308", group: "Dosky plošných spojov", label: "Modrá doska, detail", source: `${U}cA8VTQeHU0c` },

  { id: "photo-1581090466144-8ed89ea98b25", group: "Dielňa", label: "Spájkovanie v tme", source: `${U}Q-UJHElsKOc` },
  { id: "photo-1581090466619-e945d2e2980e", group: "Dielňa", label: "Technik pri pracovnom stole", source: `${U}YXdbaTRcQzA` },
  { id: "photo-1593616307659-07f02b400e14", group: "Dielňa", label: "Spájkovačka na modrom", source: `${U}YYQSNidk0sE` },
  { id: "photo-1562568068-7a90cf9e499d", group: "Dielňa", label: "Spájkovanie dosky", source: `${U}C-Cml4m7rUo` },
  { id: "photo-1514168757508-07ffe9ae125b", group: "Dielňa", label: "Tmavé pracovisko", source: `${U}CpPF4W5PB1c` },

  { id: "photo-1580063665860-af92a61c2810", group: "Meracie prístroje", label: "Vintage osciloskop", source: `${U}5tuU44e_2e0` },
  { id: "photo-1562568068-ea24dcbf3c78", group: "Meracie prístroje", label: "Merací stôl s osciloskopom", source: `${U}uf4luctGaXI` },
  { id: "photo-1527167151437-87cf28fb6b38", group: "Meracie prístroje", label: "Obrazovka osciloskopu", source: `${U}r427ZzVVbwU` },
  { id: "photo-1633556424327-cb61ad884b80", group: "Meracie prístroje", label: "Panel s červenými gombíkmi", source: `${U}RhMA1Oh-r_g` },
  { id: "photo-1633556425965-b27209afe9ce", group: "Meracie prístroje", label: "Osciloskop na stole", source: `${U}2UPmDaqgma8` },
  { id: "photo-1458007683879-47560d7e33c3", group: "Meracie prístroje", label: "Analógový voltmeter", source: `${U}xVptEZzgVfo` },
  { id: "photo-1587317304283-b01650dc735e", group: "Meracie prístroje", label: "Dva analógové meráky", source: `${U}ar6XfQSeSwM` },
  { id: "photo-1723536998172-9805f991916f", group: "Meracie prístroje", label: "Starý prístroj s ručičkami", source: `${U}US1ndpdptUI` },
  { id: "photo-1730578725478-d21598adc87e", group: "Meracie prístroje", label: "Voltmeter čiernobielo", source: `${U}hdxhetSsoBk` },
  { id: "photo-1573399054516-90665ecc44be", group: "Meracie prístroje", label: "Retro CRT televízor", source: `${U}-I8lDurtfAo` },
];

export function heroImageSrc(img: HeroImage) {
  return img.id === "local"
    ? "/images/hero-pcb.jpg"
    : `https://images.unsplash.com/${img.id}?w=2400&q=80&auto=format&fit=crop`;
}
