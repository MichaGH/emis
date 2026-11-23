"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { SITE, CONTAINER } from "@/constants";
import { CartButton } from "@/components/cart/CartButton";
import { MenuIcon, CloseIcon, PhoneIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/layout/Logo";

// Navigácia leží nad tmavou úvodnou sekciou každej stránky:
// kým nie je odrolované, je priehľadná (biely text), potom biela.
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-40 -mb-[var(--nav-h)] transition-[background-color,box-shadow,color] duration-200 ${
        solid
          ? "bg-white text-foreground shadow-[0_1px_0_rgba(13,26,46,0.08),0_8px_24px_-16px_rgba(13,26,46,0.35)]"
          : "bg-transparent text-white"
      }`}
    >
      <div className={`${CONTAINER} flex h-[var(--nav-h)] items-center justify-between gap-6`}>
        <Logo dark={!solid} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hlavná navigácia">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-[15px] font-semibold transition-colors ${
                  solid
                    ? active
                      ? "text-primary"
                      : "hover:text-primary"
                    : active
                      ? "text-white"
                      : "text-white hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-[3px] rounded-full ${
                      solid ? "bg-primary" : "bg-white"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneHref}`}
            className={`hidden items-center gap-2 px-3 text-[15px] font-bold transition-colors xl:inline-flex ${
              solid ? "hover:text-primary" : "hover:text-white/80"
            }`}
          >
            <PhoneIcon className={`h-[18px] w-[18px] ${solid ? "text-primary" : ""}`} />
            {SITE.phone}
          </a>
          <a
            href={`tel:${SITE.phoneHref}`}
            aria-label={`Zavolať ${SITE.phone}`}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg md:hidden ${
              solid ? "btn-light" : "bg-white/12 hover:bg-white/20"
            }`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <CartButton />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            aria-expanded={open}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg lg:hidden ${
              solid ? "btn-light" : "bg-white/12 hover:bg-white/20"
            }`}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white pb-4 lg:hidden" aria-label="Mobilná navigácia">
          <ul className={`${CONTAINER} pt-2`}>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3.5 text-xl font-bold ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
