import type { NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "Koloidné striebro", href: "/koloidne-striebro" },
  { label: "Produkty", href: "/produkty" },
  { label: "Zákazková elektronika", href: "/elektronika" },
  { label: "O nás", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Obchod",
    items: [
      { label: "Generátor GKS 904", href: "/produkty/gks-904" },
      { label: "Generátor GKS 906", href: "/produkty/gks-906" },
      { label: "Miešačka MGM 101", href: "/produkty/mgm-101" },
      { label: "Všetky produkty", href: "/produkty" },
    ],
  },
  {
    title: "Informácie",
    items: [
      { label: "Ako vzniká koloidné striebro", href: "/koloidne-striebro" },
      { label: "Zákazková elektronika", href: "/elektronika" },
      { label: "O nás", href: "/o-nas" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];
