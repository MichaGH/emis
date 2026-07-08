import { CONTAINER } from "@/constants";
import { Tag } from "@/components/ui/Tag";
import { CpuIcon, ChatIcon, TargetIcon } from "@/components/ui/Icons";

const points = [
  {
    Icon: CpuIcon,
    title: "Vlastný vývoj a výroba",
    description:
      "Zariadenia navrhujeme aj vyrábame priamo u nás. Vieme ich prispôsobiť konkrétnym požiadavkám.",
  },
  {
    Icon: ChatIcon,
    title: "Priamy kontakt s výrobcom",
    description:
      "Komunikujete priamo s tým, kto zariadenie vyrobil — bez medzičlánkov a call centier.",
  },
  {
    Icon: TargetIcon,
    title: "Zamerané na špecifické použitie",
    description:
      "Venujeme sa prístrojom, ktoré nie sú bežne dostupné a majú svoje konkrétne uplatnenie.",
  },
];

export function TrustSection() {
  return (
    <section className={`${CONTAINER} py-20 lg:py-24`}>
      <div className="max-w-2xl">
        <Tag label="Prečo EMIS" />
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Malý výrobca, konkrétne riešenia
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Nie sme veľký e-shop. Sústredíme sa na to, čo dokážeme spoľahlivo
          navrhnúť, vyrobiť a odovzdať.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {points.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-border/70 bg-background p-7 shadow-soft"
          >
            <span className="bg-brand-gradient shadow-brand inline-flex h-12 w-12 items-center justify-center rounded-xl text-white">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
