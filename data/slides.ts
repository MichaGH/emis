export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "elektronika",
    eyebrow: "Návrh a výroba elektroniky",
    title: "Elektronika navrhnutá",
    highlight: "a vyrobená u nás",
    text: "EMIS vyvíja a zostavuje vlastné elektronické zariadenia — od dosiek plošných spojov až po hotový prístroj.",
    ctaLabel: "Naše zariadenia",
    ctaHref: "#elektronika",
    image: "/images/circuitboard1.webp",
  },
  {
    id: "koloidne-striebro",
    eyebrow: "Koloidné striebro",
    title: "Generátory koloidného",
    highlight: "striebra",
    text: "Prístroje, ktoré pripravia koloidné striebro s časticami rozmeru v nanometroch priamo u vás doma.",
    ctaLabel: "Koloidné striebro",
    ctaHref: "#koloidne-striebro",
    image: "/images/nanoparticles2.jpg",
  },
  {
    id: "vyroba",
    eyebrow: "Vlastný vývoj",
    title: "Zariadenia pre",
    highlight: "špecifické použitie",
    text: "Cínovacie zariadenia, toner testery, informačné tabule — technika, ktorú inde nekúpite.",
    ctaLabel: "Prezrieť produkty",
    ctaHref: "#produkty",
    image: "/images/circuitboard2.webp",
  },
];
