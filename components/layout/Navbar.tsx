"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { SITE, CONTAINER } from "@/constants";
import { CartButton } from "@/components/cart/CartButton";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-background/90 shadow-[0_1px_0_var(--border)] backdrop-blur"
      }`}
    >
      <div className={`${CONTAINER} flex h-16 items-center justify-between`}>
        <Link href="/" className="flex items-center gap-2">
          <span className="bg-brand-gradient flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold text-primary-foreground shadow-brand">
            E
          </span>
          <span
            className={`font-display text-lg font-bold tracking-tight ${
              transparent ? "text-white" : "text-foreground"
            }`}
          >
            {SITE.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                transparent
                  ? "text-white/80 hover:text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CartButton transparent={transparent} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors md:hidden ${
              transparent
                ? "border-white/25 text-white hover:bg-white/10"
                : "border-border text-foreground hover:bg-surface"
            }`}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className={`${CONTAINER} flex flex-col py-2`}>
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
