import type { Metadata } from "next";
import Image from "next/image";
import { CONTAINER, SITE } from "@/constants";
import { clients, workPrinciples } from "@/data/electronics";
import { timeline } from "@/data/history";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "O nás — EMIS",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="O nás"
        title="Malá firma, ktorá si všetko navrhne sama"
        lead={`EMIS vedie ${SITE.owner}. Od roku ${SITE.founded} navrhuje a vyrába elektroniku v Nižnej — pre výrobné závody aj pre domácnosti.`}
        image="/images/workshop-soldering.jpg"
      />

      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-28`}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Elektronika z Oravy od roku {SITE.founded}
            </h2>
          </div>

          <ol className="mt-14 grid gap-5 lg:grid-cols-3">
            {timeline.map((t) => (
              <li key={t.year} className="card rounded-[22px] p-8">
                <span className="text-primary text-4xl font-extrabold tracking-[-0.03em]">
                  {t.year}
                </span>
                <p className="mt-4 text-lg leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-dark text-white">
        <div className={`${CONTAINER} grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28`}>
          <div>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Jeden človek, celý prístroj
            </h2>
            <ol className="mt-10 space-y-7">
              {workPrinciples.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[4rem_1fr]">
                  <span className="text-4xl font-extrabold leading-none text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="mt-1.5 text-lg leading-relaxed text-dark-muted">
                      {p.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-12 text-[15px] font-semibold text-white">
              Zariadenia sme dodali pre
            </p>
            <p className="mt-2 text-lg font-bold">{clients.join("  ·  ")}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/produkty">Generátory GKS</ButtonLink>
              <ButtonLink href="/elektronika" variant="glass">
                Zákazková elektronika
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <Image
              src="/images/pcb-closeup.jpg"
              alt="Detail osadenej dosky plošných spojov"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
