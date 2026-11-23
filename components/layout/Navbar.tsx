"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { SITE, CONTAINER } from "@/constants";
import { CartButton } from "@/components/cart/CartButton";
import { MenuIcon, CloseIcon, PhoneIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/layout/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className={`${CONTAINER} flex h-[72px] items-center justify-between gap-6`}>
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-[15px] font-semibold transition-colors ${
                isActive(item.href)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-4 -bottom-[17px] h-[3px] rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneHref}`}
            className="hidden items-center gap-2 px-3 text-[15px] font-bold text-foreground hover:text-primary xl:inline-flex"
          >
            <PhoneIcon className="h-[18px] w-[18px] text-primary" />
            {SITE.phone}
          </a>
          <a
            href={`tel:${SITE.phoneHref}`}
            aria-label={`Zavolať ${SITE.phone}`}
            className="btn-gloss-white inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <CartButton />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            aria-expanded={open}
            className="btn-gloss-white inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white pb-4 lg:hidden">
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
