import Link from "next/link";
import { SITE } from "@/constants";

// Dočasné textové logo — iba názov, bez ikonky.
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} — úvod`}
      className={`font-display text-[26px] transition-colors font-extrabold leading-none tracking-[0.04em] ${
        dark ? "text-white" : "text-primary"
      }`}
    >
      {SITE.name}
    </Link>
  );
}
