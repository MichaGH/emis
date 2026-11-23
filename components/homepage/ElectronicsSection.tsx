import Image from "next/image";
import { CONTAINER } from "@/constants";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ElectronicsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className={CONTAINER}>
        <div className="relative isolate overflow-hidden rounded-[28px] text-white">
          <Image
            src="/images/chip-tweezers.jpg"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(6,15,38,0.96)_0%,rgba(10,24,56,0.88)_50%,rgba(10,24,56,0.55)_100%)]" />

          <div className="flex flex-col gap-10 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                Prístroj presne podľa vášho zadania
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
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
      </div>
    </section>
  );
}
