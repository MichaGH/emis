import Image from "next/image";
import { SITE, CONTAINER } from "@/constants";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProcessOutline } from "@/components/illustrations/ProcessOutline";

const facts = [
  { value: `od ${SITE.founded}`, label: "vývoj a výroba elektroniky" },
  { value: "Na mieru", label: "prístroje podľa zadania" },
  { value: "GKS", label: "generátory koloidného striebra" },
  { value: "Nižná", label: "výroba a servis na Orave" },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-darker text-white">
      {/* Fotka plošného spoja */}
      <Image
        src="/images/hero-pcb.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Navy prekrytie, aby text ostal čitateľný */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,15,38,0.82)_0%,rgba(10,24,56,0.72)_45%,rgba(6,15,38,0.95)_100%)]" />

      {/* Nenápadný obrys generátora v pozadí */}
      <ProcessOutline className="pointer-events-none absolute -right-24 top-10 -z-10 hidden h-[115%] text-white/[0.09] lg:block" />
      <ProcessOutline className="pointer-events-none absolute -left-40 bottom-[-30%] -z-10 hidden h-[90%] -scale-x-100 text-white/[0.05] xl:block" />

      <div className={`${CONTAINER} flex flex-col items-center pb-16 pt-24 text-center sm:pt-32 lg:pb-20 lg:pt-40`}>
        <p className="glass-dark rounded-full px-4 py-1.5 text-sm font-semibold text-white/90">
          EMIS · Nižná · od roku {SITE.founded}
        </p>

        <h1 className="mt-7 max-w-4xl text-[2.9rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-7xl lg:text-[5.5rem]">
          Elektronika na mieru
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
          Navrhujeme a vyrábame elektronické zariadenia — od jednoúčelových
          prístrojov pre výrobu až po generátory koloidného striebra pre
          domácnosť.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/#eshop">Generátory striebra</ButtonLink>
          <ButtonLink href="/elektronika" variant="glass">
            Zákazkový vývoj
          </ButtonLink>
        </div>

        <dl className="glass-dark mt-20 grid w-full max-w-5xl grid-cols-2 gap-y-6 rounded-2xl px-6 py-7 text-left sm:px-10 lg:mt-28 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="px-2">
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="block text-2xl font-extrabold tracking-tight sm:text-[1.75rem]">
                  {fact.value}
                </span>
                <span className="mt-1 block text-[15px] font-medium text-white/75">
                  {fact.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
