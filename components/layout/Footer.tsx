import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { SITE, CONTAINER } from "@/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className={`${CONTAINER} py-14`}>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                E
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                {SITE.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Návrh a výroba špecializovaných elektronických zariadení —
              generátory koloidného striebra a technika pre špecifické použitie.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-sm font-semibold">Stránky</h3>
              <ul className="mt-4 space-y-3">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Kontakt</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>{SITE.email}</li>
                <li>{SITE.phone}</li>
                <li>{SITE.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Všetky práva vyhradené.
          </p>
          <p>Kontaktné údaje budú doplnené po dodaní podkladov.</p>
        </div>
      </div>
    </footer>
  );
}
