import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { SITE, CONTAINER } from "@/constants";
import { Logo } from "@/components/layout/Logo";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-darker text-white">
      <div className={`${CONTAINER} grid gap-12 py-16 md:grid-cols-12`}>
        <div className="md:col-span-4">
          <Logo dark />
          <p className="mt-5 max-w-sm leading-relaxed text-dark-muted">
            Generátory koloidného striebra a elektronika na zákazku. Navrhnuté
            a vyrobené v Nižnej na Orave.
          </p>
        </div>

        {footerNav.map((group) => (
          <div key={group.title} className="md:col-span-2">
            <h3 className="font-bold">{group.title}</h3>
            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-dark-muted transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-4">
          <div className="glass-dark rounded-2xl p-6">
            <h3 className="font-bold">Kontakt</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="flex items-center gap-3 text-xl font-bold hover:text-accent"
                >
                  <PhoneIcon className="h-5 w-5 text-accent" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 hover:text-accent"
                >
                  <MailIcon className="h-5 w-5 text-accent" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-dark-muted">
                <PinIcon className="mt-0.5 h-5 w-5 flex-none text-accent" />
                <span>
                  {SITE.owner}, {SITE.street}, {SITE.city}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black/20">
        <div
          className={`${CONTAINER} flex flex-col gap-2 py-5 text-sm text-dark-muted sm:flex-row sm:justify-between`}
        >
          <p>
            © {new Date().getFullYear()} {SITE.name} · {SITE.owner}
          </p>
          <p>Elektronika z Oravy od roku {SITE.founded}</p>
        </div>
      </div>
    </footer>
  );
}
