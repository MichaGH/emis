import Image from "next/image";
import { CONTAINER } from "@/constants";
import { processSteps } from "@/data/silver";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function SilverSection() {
  return (
    <section id="koloidne-striebro" className="scroll-mt-20 bg-white">
      <div className={`${CONTAINER} grid items-center gap-14 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28`}>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(6,15,38,0.55)]">
            <Image
              src="/images/lab-beaker-water.jpg"
              alt="Sklenená kadička s čírou vodou v laboratóriu"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(6,15,38,0.65)_100%)]" />
            <p className="absolute bottom-6 left-6 right-6 text-lg font-bold text-white">
              Destilovaná voda + striebro 99,99 % + regulovaný prúd
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
            Koloidné striebro
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Ako vzniká koloidné striebro
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">
            Koloidné striebro sú drobné častice striebra rozptýlené vo vode.
            Vznikajú elektrolýzou — slabý prúd medzi dvomi striebornými
            elektródami uvoľňuje striebro priamo do destilovanej vody.
          </p>

          <ol className="mt-10 space-y-7">
            {processSteps.map((step) => (
              <li key={step.number} className="grid grid-cols-[4.25rem_1fr] items-start">
                <span className="text-metal-blue text-[2.6rem] font-extrabold leading-none tracking-[-0.04em]">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-foreground/80">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <ButtonLink href="/koloidne-striebro">Podrobný návod</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
