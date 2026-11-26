import Image from "next/image";
import { CONTAINER } from "@/constants";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ClientLogoList } from "@/components/homepage/ClientsSection";

// Zákazková elektronika — menšia sekcia nižšie na úvodnej stránke,
// spolu s logami firiem, pre ktoré sme zariadenia vyvíjali.
export function ElectronicsSection() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className={CONTAINER}>
        <div className="relative isolate overflow-hidden rounded-xl text-white">
          <Image
            src="/images/chip-tweezers.jpg"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(6,15,38,0.96)_0%,rgba(10,24,56,0.88)_50%,rgba(10,24,56,0.55)_100%)]" />

          <div className="flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-[15px] font-semibold text-accent">Elektronika na zákazku</p>
              <h2 className="mt-2 text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl">
                Prístroj presne podľa vášho zadania
              </h2>
              <p className="mt-4 leading-relaxed text-white">
                Testovacie pracoviská, riadenie a signalizácia pre výrobu. Od
                schémy až po hotové zariadenie so servisom.
              </p>
            </div>
            <div className="flex flex-none flex-wrap gap-3">
              <ButtonLink href="/elektronika">Realizácie</ButtonLink>
              <ButtonLink href="/kontakt" variant="glass" arrow={false}>
                Konzultovať zadanie
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-bold">Zariadenia sme vyvíjali pre:</h3>
          <ClientLogoList className="mt-8" />
        </div>
      </div>
    </section>
  );
}
