import Image from "next/image";
import { CONTAINER, SITE } from "@/constants";
import { clients } from "@/data/electronics";
import { timeline } from "@/data/history";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HistorySection() {
  return (
    <section className="bg-white">
      <div className={`${CONTAINER} grid items-center gap-16 py-20 lg:grid-cols-12 lg:py-28`}>
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(6,15,38,0.55)]">
            <Image
              src="/images/workshop-soldering.jpg"
              alt="Spájkovanie elektroniky v dielni"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="card-gloss absolute -bottom-8 left-6 rounded-2xl px-7 py-5 sm:left-10">
            <p className="text-metal-blue text-5xl font-extrabold tracking-[-0.04em]">
              {SITE.founded}
            </p>
            <p className="mt-1 font-semibold">založenie firmy v Nižnej</p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
            O nás
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Elektronika z Oravy od roku {SITE.founded}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">
            EMIS vedie {SITE.owner}. Návrh, doska plošných spojov, firmvér aj
            oživenie hotového prístroja — všetko v jednej dielni.
          </p>

          <ol className="mt-10 space-y-6">
            {timeline.map((t) => (
              <li key={t.year} className="grid grid-cols-[8.5rem_1fr] items-baseline gap-4">
                <span className="text-2xl font-extrabold tracking-tight text-primary">
                  {t.year}
                </span>
                <span className="text-lg leading-relaxed">{t.text}</span>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-sm font-bold uppercase tracking-[0.1em] text-muted">
            Zariadenia sme dodali pre
          </p>
          <p className="mt-2 text-lg font-bold leading-relaxed">
            {clients.join("  ·  ")}
          </p>

          <div className="mt-10">
            <ButtonLink href="/o-nas">Viac o nás</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
