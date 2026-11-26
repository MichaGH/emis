import Image from "next/image";
import { CONTAINER } from "@/constants";
import { heroContent, heroVideo } from "@/data/hero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProcessOutline } from "@/components/illustrations/ProcessOutline";
import { BottleOutline } from "@/components/illustrations/BottleOutline";

const DEFAULT_IMAGE_CLASS = "";

/** Predvolené pozadie: video trblietavej hladiny. Kým sa načíta (alebo pri
 *  vypnutých animáciách v systéme), je vidieť statický náhľad. */
function HeroVideoBackground() {
  return (
    <>
      <Image
        src={heroVideo.poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroVideo.poster}
        aria-hidden
      >
        <source src={heroVideo.sd} type="video/mp4" media="(max-width: 768px)" />
        <source src={heroVideo.hd} type="video/mp4" />
      </video>
    </>
  );
}

export function HeroSection({
  image,
  imagePosition = "center",
  imageClassName = DEFAULT_IMAGE_CLASS,
  background,
  dim = 0,
}: {
  /** fotka v pozadí (lokálna cesta alebo URL) — bez nej beží video */
  image?: string;
  /** object-position fotky, napr. "center 30%" */
  imagePosition?: string;
  /** filtre fotky (Tailwind triedy) */
  imageClassName?: string;
  /** vlastné pozadie namiesto fotky (napr. video) — musí mať -z-20 */
  background?: React.ReactNode;
  /** extra rovnomerné stmavenie 0–1 (testovanie) */
  dim?: number;
} = {}) {
  return (
    <section className="relative isolate overflow-hidden bg-darker text-white">
      {background ??
        (image ? (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`-z-20 object-cover ${imageClassName}`}
          style={{ objectPosition: imagePosition }}
        />
        ) : (
          <HeroVideoBackground />
        ))}
      {/* Rovnomerné tmavé petrolejové prekrytie (ladí s vodou na videu),
          tmavšie hore pod navigáciou a dole pod štatistikami. Žiadna škvrna
          okolo textu. */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,22,28,0.72)_0%,rgba(3,22,28,0.5)_22%,rgba(3,22,28,0.5)_70%,rgba(3,22,28,0.78)_100%)]" />
      {dim > 0 && (
        <div className="absolute inset-0 -z-10 bg-[#03161c]" style={{ opacity: dim }} />
      )}

      {/* Nenápadné obrysy v pozadí — vľavo fľaštička, vpravo generátor */}
      <BottleOutline className="pointer-events-none absolute -left-16 top-20 -z-10 hidden h-[90%] text-white/[0.1] lg:block" />
      <ProcessOutline className="pointer-events-none absolute -right-24 top-10 -z-10 hidden h-[115%] text-white/[0.1] lg:block" />

      <div className={`${CONTAINER} flex flex-col items-center pb-12 pt-[calc(var(--nav-h)+5.5rem)] text-center sm:pt-[calc(var(--nav-h)+7rem)] lg:min-h-svh lg:pb-14 lg:pt-[calc(var(--nav-h)+3rem)]`}>
        {/* Na desktope je hero na celú výšku okna, text je v strede, štatistiky dole */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="max-w-4xl text-[3rem] font-extrabold leading-[1.02] tracking-[-0.035em] [text-shadow:0_1px_2px_rgba(3,22,28,0.6)] sm:text-7xl lg:text-[5.75rem]">
            {heroContent.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white [text-shadow:0_1px_2px_rgba(3,22,28,0.7)] sm:text-xl">
            {heroContent.lead}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href={heroContent.primary.href}>{heroContent.primary.label}</ButtonLink>
            <ButtonLink href={heroContent.secondary.href} variant="glass">
              {heroContent.secondary.label}
            </ButtonLink>
          </div>
        </div>

        {/* Štatistiky — obyčajný text nad tenkou čiarou, bez panelu */}
        <dl className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-8 border-t border-white/30 pt-8 sm:grid-cols-3 lg:mt-12">
          {heroContent.facts.map((fact) => (
            <div key={fact.label}>
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
