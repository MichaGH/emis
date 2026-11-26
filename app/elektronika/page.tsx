import type { Metadata } from "next";
import Image from "next/image";
import { CONTAINER, SITE } from "@/constants";
import { clients, electronicsProjects, workPrinciples } from "@/data/electronics";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactSection } from "@/components/homepage/ContactSection";
import { ProjectGallery } from "@/components/electronics/ProjectGallery";

export const metadata: Metadata = {
  title: "Zákazková elektronika — EMIS",
  description:
    "Vývoj a výroba jednoúčelových elektronických zariadení a testovacích pracovísk na zákazku. Nižná, od roku 1990.",
};

export default function ElectronicsPage() {
  return (
    <>
      <PageHeader
        crumb="Zákazková elektronika"
        title="Jednoúčelové zariadenia pre výrobu a prevádzku"
        lead={`Od roku ${SITE.founded} navrhujeme hardvér aj softvér prístrojov presne podľa toho, čo zákazník potrebuje.`}
        image="/images/realizacie/dm716-3.jpg"
      >
        <p className="mt-12 text-[15px] font-semibold text-white">
          Zariadenia sme dodali pre
        </p>
        <p className="mt-2 text-xl font-bold">{clients.join("  ·  ")}</p>
      </PageHeader>

      <section className="bg-surface">
        <div className={`${CONTAINER} py-20 lg:py-28`}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Vybrané realizácie
            </h2>
            <p className="mt-4 text-lg text-foreground">
              Zariadenia, ktoré sme navrhli a postavili pre výrobné firmy. Kliknite na fotku pre viac záberov.
            </p>
          </div>

          <div className="mt-14">
            <ProjectGallery projects={electronicsProjects} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${CONTAINER} grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28`}>
          <div className="relative aspect-[5/4] overflow-hidden rounded-xl">
            <Image
              src="/images/workshop-soldering.jpg"
              alt="Spájkovanie elektroniky v dielni"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Od schémy po hotový prístroj
            </h2>
            <ul className="mt-10 space-y-7">
              {workPrinciples.map((p) => (
                <li key={p.title} className="border-l-2 border-primary pl-5">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-1.5 text-lg leading-relaxed">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
