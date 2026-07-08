import type { NavItem } from "@/lib/types";

// Navigácia počíta s budúcimi podstránkami. Odkazy zatiaľ smerujú
// na jednoduché placeholder stránky.
export const mainNav: NavItem[] = [
  { label: "Produkty", href: "/produkty" },
  { label: "Softvér", href: "/softver" },
  { label: "O nás", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerNav: NavItem[] = [
  { label: "Koloidné striebro", href: "/#koloidne-striebro" },
  { label: "Produkty", href: "/produkty" },
  { label: "Softvér", href: "/softver" },
  { label: "O nás", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];
