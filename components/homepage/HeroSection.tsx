import Image from "next/image";
import { SITE, CONTAINER } from "@/constants";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProcessOutline } from "@/components/illustrations/ProcessOutline";
import { ElectronicsOutline } from "@/components/illustrations/ElectronicsOutline";

const facts = [
  { value: `${SITE.founded}`, label: "rok založenia v Nižnej" },
  { value: "Na mieru", label: "prístroje podľa zadania" },
  { value: "GKS", label: "generátory koloidného striebra" },
];

export function HeroSection({
  image = "/images/hero-pcb.jpg",
  imagePosition = "center",
  dim = 0,
}: {
  /** fotka v pozadí (lokálna cesta alebo URL) */
  image?: string;
  /** object-position fotky, napr. "center 30%" */
  imagePosition?: string;
  /** extra rovnomerné stmavenie 0–1 (testovanie fotiek) */
  dim?: number;
} = {}) {
  return (
    <section className="relative isolate overflow-hidden bg-darker text-white">
      {/* Fotka plošného spoja */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover saturate-[1.15]"
        style={{ objectPosition: imagePosition }}
      />
      {dim > 0 && (
        <div className="absolute inset-0 -z-10 bg-darker" style={{ opacity: dim }} />
      )}
      {/* Fotka ostáva ostrá a sýta. Stmavená je len zľahka (hore kvôli navigácii)
          a viac iba v mäkkom ovále priamo za nadpisom a textom. */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_44%_30%_at_50%_42%,rgba(6,15,38,0.62)_0%,rgba(6,15,38,0.45)_55%,transparent_100%),linear-gradient(180deg,rgba(6,15,38,0.55)_0%,rgba(6,15,38,0.22)_22%,rgba(6,15,38,0.18)_70%,rgba(6,15,38,0.4)_100%)]" />

      {/* Nenápadné obrysy v pozadí — vľavo testovacie pracovisko, vpravo generátor */}
      <ElectronicsOutline className="pointer-events-none absolute -left-20 top-16 -z-10 hidden h-[95%] text-white/[0.09] lg:block" />
      <ProcessOutline className="pointer-events-none absolute -right-24 top-10 -z-10 hidden h-[115%] text-white/[0.09] lg:block" />

      <div className={`${CONTAINER} flex flex-col items-center pb-12 pt-[calc(var(--nav-h)+5.5rem)] text-center sm:pt-[calc(var(--nav-h)+7rem)] lg:min-h-svh lg:pb-14 lg:pt-[calc(var(--nav-h)+3rem)]`}>
        {/* Na desktope je hero na celú výšku okna, text je v strede, štatistiky dole */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="max-w-4xl text-[3rem] [text-shadow:0_2px_30px_rgba(6,15,38,0.7),0_1px_3px_rgba(6,15,38,0.5)] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-7xl lg:text-[5.75rem]">
            Elektronika na mieru
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white [text-shadow:0_1px_14px_rgba(6,15,38,0.85),0_1px_2px_rgba(6,15,38,0.6)] sm:text-xl">
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
        </div>

        {/* Štatistiky na sklenenom paneli */}
        <dl className="mt-16 grid bg-darker/45 ring-1 ring-inset ring-white/15 backdrop-blur-xl w-full max-w-4xl grid-cols-1 divide-y divide-white/15 rounded-2xl sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:mt-12">
          {facts.map((fact) => (
            <div key={fact.label} className="px-6 py-6 sm:py-7">
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="block text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {fact.value}
                </span>
                <span className="mt-1.5 block text-[15px] font-medium text-white/85">
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
