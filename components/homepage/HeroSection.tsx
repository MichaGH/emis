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
        className="-z-20 object-cover brightness-[1.15] contrast-[1.12] saturate-[1.2]"
        style={{ objectPosition: imagePosition }}
      />
      {dim > 0 && (
        <div className="absolute inset-0 -z-10 bg-darker" style={{ opacity: dim }} />
      )}
      {/* Jemné rozmazanie iba v strede (za textom a tlačidlami), plynulo
          prechádza do ostrej fotky po okrajoch. */}
      <div className="absolute inset-0 -z-10 backdrop-blur-[5px] [mask-image:radial-gradient(ellipse_48%_38%_at_50%_47%,#000_35%,transparent_100%)]" />
      {/* Fotka je jasná a kontrastná. Stmavený je len pás hore (navigácia)
          a ovál za textom; čitateľnosť dopĺňa tieň písma. */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_46%_34%_at_50%_46%,rgba(6,15,38,0.66)_0%,rgba(6,15,38,0.48)_50%,transparent_100%),linear-gradient(180deg,rgba(6,15,38,0.5)_0%,transparent_20%,transparent_75%,rgba(6,15,38,0.3)_100%)]" />

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
                <span className="mt-1.5 block text-[15px] font-medium text-white">
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
