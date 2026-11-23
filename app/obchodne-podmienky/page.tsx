import type { Metadata } from "next";
import { CONTAINER, SITE } from "@/constants";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Obchodné podmienky — EMIS",
};

// Úplné znenie obchodných podmienok dodá klient — zatiaľ iba predajca
// a upozornenie ku koloidnému striebru.
export default function TermsPage() {
  return (
    <>
      <PageHeader crumb="Obchodné podmienky" title="Obchodné podmienky" />

      <section className="bg-white">
        <div className={`${CONTAINER} max-w-3xl py-16 lg:py-20`}>
          <h2 className="text-2xl font-extrabold">Predávajúci</h2>
          <p className="mt-4 text-lg leading-relaxed">
            {SITE.owner} — {SITE.name}
            <br />
            {SITE.street}, {SITE.city}
            <br />
            {SITE.email} · {SITE.phone}
          </p>

          <h2 className="mt-12 text-2xl font-extrabold">Upozornenie</h2>
          <p className="mt-4 text-lg leading-relaxed">
            Koloidné striebro nie je registrovaný liek. Pred vnútorným užívaním
            sa poraďte s lekárom.
          </p>

          <p className="mt-12 rounded-xl bg-surface p-5 leading-relaxed">
            Úplné znenie obchodných podmienok doplníme podľa podkladov od
            predávajúceho.
          </p>
        </div>
      </section>
    </>
  );
}
