import Image from "next/image";
import { CONTAINER } from "@/constants";
import { reasons } from "@/data/silver";
import { GaugeIcon, BadgeIcon, WrenchIcon } from "@/components/ui/Icons";

const icons = [GaugeIcon, BadgeIcon, WrenchIcon];

export function ReasonsSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className={`${CONTAINER} grid items-center gap-16 py-20 lg:grid-cols-12 lg:py-28`}>
        <div className="lg:col-span-6">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[3.25rem]">
            Presnosť, ktorú uvidíte pod mikroskopom
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white">
            Generátor GKS drží prúd stabilný počas celej výroby. Výsledkom sú
            rovnomerné častice a čistý roztok.
          </p>

          <ul className="mt-12 space-y-9">
            {reasons.map((reason, i) => {
              const Icon = icons[i];
              return (
                <li key={reason.title}>
                  <h3 className="flex items-center gap-3 text-xl font-bold">
                    <Icon className="h-6 w-6 text-accent" />
                    {reason.title}
                  </h3>
                  <p className="mt-2 max-w-lg pl-9 text-lg leading-relaxed text-white">
                    {reason.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Snímka z mikroskopu s obyčajným popisom — bez plávajúcich kariet */}
        <figure className="lg:col-span-6">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/nanoparticles1.webp"
              alt="Častice striebra pod elektrónovým mikroskopom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-[15px] text-white">
            Častice striebra pod elektrónovým mikroskopom (ilustračná snímka).
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
