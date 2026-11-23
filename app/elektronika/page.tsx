import type { Metadata } from "next";
import Image from "next/image";
import { CONTAINER, SITE } from "@/constants";
import { clients, electronicsProjects, workPrinciples } from "@/data/electronics";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactSection } from "@/components/homepage/ContactSection";
import { ProjectCard } from "@/components/electronics/ProjectCard";

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
        image="/images/chip-tweezers.jpg"
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
              Zariadenia, ktoré sme navrhli a postavili pre výrobné firmy.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {electronicsProjects.map((p) => (
              <ProjectCard key={p.code} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${CONTAINER} grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28`}>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(6,15,38,0.55)]">
            <Image
              src="/images/workshop-soldering.jpg"
              alt="Spájkovanie elektroniky v dielni"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Od schémy po hotový prístroj
            </h2>
            <ol className="mt-10 space-y-7">
              {workPrinciples.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[4.25rem_1fr]">
                  <span className="text-primary text-[2.6rem] font-extrabold leading-none tracking-[-0.04em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="mt-1.5 text-lg leading-relaxed text-foreground">
                      {p.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
