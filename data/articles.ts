// Články o koloidnom striebre — zatiaľ pripravené miesta, text doplní klient.
// draft: true → stránka článku sa neindexuje, kým nie je text hotový.
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  /** odseky textu */
  body: string[];
  draft: boolean;
};

const px = (id: string, file: string) =>
  `https://images.pexels.com/videos/${id}/${file}?auto=compress&cs=tinysrgb&w=1200`;

export const articles: Article[] = [
  {
    slug: "clanok-1",
    title: "Článok 1",
    excerpt: "Krátky úvod článku 1 — doplníme.",
    image: px("9667531", "abstract-animal-aquarium-art-9667531.jpeg"),
    imageAlt: "Kvapka dopadajúca na pokojnú hladinu vody",
    body: ["Text článku 1.", "Ďalší odsek článku 1."],
    draft: true,
  },
  {
    slug: "clanok-2",
    title: "Článok 2",
    excerpt: "Krátky úvod článku 2 — doplníme.",
    image: px("18483699", "pexels-photo-18483699.jpeg"),
    imageAlt: "Rieka tečúca lesom medzi kameňmi",
    body: ["Text článku 2.", "Ďalší odsek článku 2."],
    draft: true,
  },
  {
    slug: "clanok-3",
    title: "Článok 3",
    excerpt: "Krátky úvod článku 3 — doplníme.",
    image: px("34308151", "pexels-photo-34308151.jpeg"),
    imageAlt: "Číra hladina vody s odleskami svetla",
    body: ["Text článku 3.", "Ďalší odsek článku 3."],
    draft: true,
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
