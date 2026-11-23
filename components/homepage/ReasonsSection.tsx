import Image from "next/image";
import { CONTAINER } from "@/constants";
import { reasons } from "@/data/silver";
import { GaugeIcon, BadgeIcon, WrenchIcon } from "@/components/ui/Icons";

const icons = [GaugeIcon, BadgeIcon, WrenchIcon];

export function ReasonsSection() {
  return (
    <section className="panel-navy relative overflow-hidden text-white">
      <div className={`${CONTAINER} grid items-center gap-16 py-20 lg:grid-cols-12 lg:py-28`}>
        <div className="lg:col-span-6">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-accent">
            Prečo generátor GKS
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Prístroj, ktorý konštruktér pozná do poslednej súčiastky
          </h2>

          <ul className="mt-12 space-y-9">
            {reasons.map((reason, i) => {
              const Icon = icons[i];
              return (
                <li key={reason.title}>
                  <h3 className="flex items-center gap-3 text-xl font-bold">
                    <Icon className="h-6 w-6 text-accent" />
                    {reason.title}
                  </h3>
                  <p className="mt-2 max-w-lg pl-9 text-lg leading-relaxed text-dark-muted">
                    {reason.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[5/5]">
            <Image
              src="/images/lab-beakers-dark.jpg"
              alt="Sklenené kadičky na tmavom pozadí"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(200deg,transparent_40%,rgba(6,15,38,0.7)_100%)]" />
          </div>

          {/* Plávajúca sklenená karta so štatistikou */}
          <div className="glass-dark absolute -bottom-6 right-4 rounded-2xl px-7 py-6 sm:right-8">
            <p className="text-5xl font-extrabold tracking-[-0.03em] sm:text-6xl">
              99,99 %
            </p>
            <p className="mt-1 max-w-[15rem] font-medium text-white/85">
              čistota striebra elektród, s certifikátom výrobcu
            </p>
          </div>

          {/* Snímka z mikroskopu */}
          <figure className="absolute -left-4 top-8 w-40 sm:-left-8 sm:w-48">
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white/15 shadow-2xl">
              <Image
                src="/images/nanoparticles1.webp"
                alt="Častice striebra pod elektrónovým mikroskopom"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm font-semibold text-white/80">
              Častice striebra
              <br />
              pod mikroskopom
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
