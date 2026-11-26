import Image from "next/image";
import { CONTAINER } from "@/constants";
import { heroContent, heroOverlay, heroVideo } from "@/data/hero";
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
  overlay = heroOverlay,
}: {
  /** fotka v pozadí (lokálna cesta alebo URL) — bez nej beží video */
  image?: string;
  /** object-position fotky, napr. "center 30%" */
  imagePosition?: string;
  /** filtre fotky (Tailwind triedy) */
  imageClassName?: string;
  /** vlastné pozadie namiesto fotky (napr. video) — musí mať -z-20 */
  background?: React.ReactNode;
  /** sila stmavenia: 0 = čisté pozadie, 1 = plné prekrytie, do 1,5 = tmavšie */
  overlay?: number;
} = {}) {
  return (
    <>
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
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,22,28,0.72)_0%,rgba(3,22,28,0.5)_22%,rgba(3,22,28,0.5)_70%,rgba(3,22,28,0.78)_100%)]"
        style={overlay === 1 ? undefined : { opacity: Math.min(overlay, 1) }}
      />
      {overlay > 1 && (
        <div className="absolute inset-0 -z-10 bg-[#03161c]" style={{ opacity: (overlay - 1) * 0.8 }} />
      )}

      {/* Nenápadné obrysy v pozadí — vľavo fľaštička, vpravo generátor */}
      <BottleOutline className="pointer-events-none absolute -left-16 top-20 -z-10 hidden h-[90%] text-white/[0.1] lg:block" />
      <ProcessOutline className="pointer-events-none absolute -right-24 top-10 -z-10 hidden h-[115%] text-white/[0.1] lg:block" />

      {/* Úvodná sekcia (na desktope min. 57 % výšky okna) — nadpis, veta, tlačidlá */}
      <div className={`${CONTAINER} flex flex-col items-center justify-center pb-24 pt-[calc(var(--nav-h)+3.5rem)] text-center sm:pb-28 lg:min-h-[57svh] lg:pb-32 lg:pt-[calc(var(--nav-h)+2rem)]`}>
        <h1 className="max-w-5xl text-[3rem] font-extrabold leading-[1.02] tracking-[-0.04em] [text-shadow:0_1px_2px_rgba(3,22,28,0.6)] sm:text-7xl lg:text-[5rem]">
          {heroContent.title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-white [text-shadow:0_1px_2px_rgba(3,22,28,0.7)] sm:text-2xl">
          {heroContent.lead}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href={heroContent.primary.href}>{heroContent.primary.label}</ButtonLink>
          <ButtonLink href={heroContent.secondary.href} variant="glass">
            {heroContent.secondary.label}
          </ButtonLink>
        </div>
      </div>
    </section>

    {/* Karta so štatistikami — prekrýva spodný okraj úvodnej sekcie */}
    <div className="relative z-10 bg-white">
      <div className={CONTAINER}>
        <dl className="-mt-16 grid divide-y divide-border rounded-xl bg-white shadow-[0_18px_40px_-24px_rgba(3,22,28,0.45)] ring-1 ring-black/[0.06] sm:-mt-20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {heroContent.facts.map((fact) => (
            <div key={fact.label} className="px-6 py-6 text-center sm:px-8 sm:py-8">
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="block font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {fact.value}
                </span>
                <span className="mt-1.5 block text-[15px] font-medium">{fact.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </>
  );
}
