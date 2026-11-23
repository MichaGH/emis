import type { Metadata } from "next";
import Image from "next/image";
import { CONTAINER } from "@/constants";
import { processSteps, silverFaq } from "@/data/silver";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  PlusIcon,
} from "@/components/ui/Icons";
import {
  ProcessDiagram,
  processLegend,
} from "@/components/illustrations/ProcessDiagram";

export const metadata: Metadata = {
  title: "Koloidné striebro — ako vzniká a ako ho vyrobiť | EMIS",
  description:
    "Čo je koloidné striebro, ako vzniká elektrolýzou a ako ho vyrobiť doma s generátorom GKS.",
};

export default function SilverPage() {
  return (
    <>
      <PageHeader
        crumb="Koloidné striebro"
        title="Koloidné striebro: čo to je a ako ho vyrobiť"
        lead="Stručne a vecne — z čoho vzniká, čo pri výrobe potrebujete a na čo si dať pozor."
      />

      <section className={`${CONTAINER} grid gap-10 py-16 lg:grid-cols-12 lg:py-24`}>
        <article className="space-y-5 text-lg leading-relaxed text-foreground lg:col-span-6">
          <SectionLabel label="Čo to je" />
          <p className="text-2xl font-bold leading-snug text-foreground">
            Koloidné striebro je destilovaná voda, v ktorej sú rozptýlené
            veľmi malé častice a ióny striebra.
          </p>
          <p>
            Častice sú také malé, že sa vo vode neusadzujú a voľným okom ich
            neuvidíte. Roztok je číry, pri vyššej koncentrácii mierne
            žltkastý.
          </p>
          <p>
            Doma sa vyrába elektrolýzou: do destilovanej vody sa ponoria dve
            elektródy z čistého striebra a pripojí sa k nim slabý jednosmerný
            prúd. Striebro z elektród postupne prechádza do vody.
          </p>
          <p>
            Kvalitu výsledku ovplyvňuje najmä čistota striebra a vody,
            stabilita prúdu a to, či sa voda počas výroby mieša. Presne tieto
            veci rieši generátor GKS.
          </p>
        </article>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="card rounded-[22px] p-5 sm:p-7">
            <div className="p-2">
              <ProcessDiagram className="mx-auto h-auto w-full max-w-[340px]" />
            </div>
            <ul className="mt-4 space-y-2">
              {processLegend.map((item) => (
                <li
                  key={item.n}
                  className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3"
                >
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.n}
                  </span>
                  <span className="font-bold">{item.title}</span>
                  <span className="ml-auto text-sm text-muted">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className={`${CONTAINER} py-16 lg:py-24`}>
          <SectionLabel label="Postup výroby" />
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Štyri kroky k hotovému roztoku
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {processSteps.map((step) => {
              return (
                <li key={step.number} className="card flex gap-6 rounded-[22px] p-8">
                  <span className="text-primary text-5xl font-extrabold leading-none tracking-[-0.04em]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className={`${CONTAINER} grid gap-10 py-16 lg:grid-cols-12 lg:py-24`}>
        <div className="lg:col-span-4">
          <SectionLabel label="Časté otázky" />
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Na čo sa zákazníci pýtajú
          </h2>
          <div className="relative mt-8 aspect-square w-full max-w-sm overflow-hidden rounded-xl">
            <Image
              src="/images/nanoparticles1.webp"
              alt="Nanočastice striebra pod elektrónovým mikroskopom"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-sm text-muted">
            Ilustračná snímka z elektrónového mikroskopu.
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-3">
            {silverFaq.map((faq) => (
              <details key={faq.question} className="group rounded-xl bg-surface open:bg-surface-strong">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white text-primary transition-transform group-open:rotate-45">
                    <PlusIcon className="h-4 w-4" />
                  </span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/produkty">Generátory GKS</ButtonLink>
            <ButtonLink href="/kontakt" variant="white">
              Opýtať sa
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
