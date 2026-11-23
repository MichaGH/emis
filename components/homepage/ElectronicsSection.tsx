import Image from "next/image";
import { CONTAINER } from "@/constants";
import { electronicsProjects } from "@/data/electronics";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CheckIcon } from "@/components/ui/Icons";

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

          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
            <div className="lg:col-span-5">
              <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                Prístroj presne podľa vášho zadania
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                Testovacie pracoviská, riadenie a signalizácia pre výrobu. Od
                schémy až po hotové zariadenie so servisom.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/elektronika">Realizácie</ButtonLink>
                <ButtonLink href="/kontakt" variant="glass" arrow={false}>
                  Konzultovať zadanie
                </ButtonLink>
              </div>
            </div>

            <ul className="grid content-start gap-x-8 gap-y-5 rounded-2xl bg-white/[0.07] p-7 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {electronicsProjects.map((p) => (
                <li key={p.code} className="flex gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 flex-none text-accent" />
                  <span>
                    <span className="block font-bold">{p.title}</span>
                    {p.client && (
                      <span className="text-sm text-white/70">pre {p.client}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
