import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "@/constants";
import { Tag } from "@/components/ui/Tag";
import {
  ArrowRightIcon,
  ShieldIcon,
  PulseIcon,
  DropletIcon,
} from "@/components/ui/Icons";

// Na čo sa koloidné striebro tradične využíva. Formulácie sú zámerne
// opatrné — nejde o liečivo, len o všeobecne uvádzané vlastnosti.
const benefits = [
  {
    Icon: ShieldIcon,
    label: "Antimikrobiálne vlastnosti",
    text: "Dlhodobo sa cení pre svoje antibakteriálne a protiplesňové pôsobenie.",
  },
  {
    Icon: PulseIcon,
    label: "Podpora prirodzenej imunity",
    text: "Bežne sa využíva ako doplnok pri každodennej starostlivosti o zdravie.",
  },
  {
    Icon: DropletIcon,
    label: "Vnútorné aj vonkajšie použitie",
    text: "Ako roztok, na ošetrenie pokožky, výplachy či prípravu obkladov.",
  },
];

export function ColloidalSilverSection() {
  return (
    <section id="koloidne-striebro" className="scroll-mt-20 bg-soft-gradient">
      <div className={`${CONTAINER} py-20 lg:py-28`}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/nanoparticles2.jpg"
                alt="Snímka strieborných nanočastíc z elektrónového mikroskopu"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-xl bg-background px-4 py-2.5 shadow-soft">
              <p className="font-display text-sm font-semibold">
                Striebro pod mikroskopom
              </p>
              <p className="text-xs text-muted">
                Snímka z elektrónového mikroskopu
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <Tag label="Koloidné striebro" />
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Prírodná pomoc, ktorú si pripravíte doma
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Koloidné striebro sú drobné čiastočky čistého striebra rozptýlené
              vo vode. Odjakživa sa spája s prírodnou starostlivosťou o zdravie
              a naše generátory umožňujú pripraviť si ho jednoducho doma —
              s jednoduchou obsluhou a elektronickou reguláciou prúdu.
            </p>

            <Link
              href="#produkty"
              className="bg-brand-gradient shadow-brand mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Generátory koloidného striebra
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Benefit cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {benefits.map(({ Icon, label, text }) => (
            <div
              key={label}
              className="rounded-2xl border border-border/70 bg-background p-6 shadow-soft"
            >
              <span className="bg-brand-gradient shadow-brand inline-flex h-11 w-11 items-center justify-center rounded-xl text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {label}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
