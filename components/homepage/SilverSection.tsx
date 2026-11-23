import Link from "next/link";
import { CONTAINER } from "@/constants";
import { processOverview, type ProcessIcon } from "@/data/silver";
import {
  ArrowRightIcon,
  BoltIcon,
  DropletIcon,
  ElectrodeIcon,
  SwirlIcon,
} from "@/components/ui/Icons";

const icons: Record<ProcessIcon, typeof BoltIcon> = {
  droplet: DropletIcon,
  electrode: ElectrodeIcon,
  bolt: BoltIcon,
  stir: SwirlIcon,
};

export function SilverSection() {
  return (
    <section id="koloidne-striebro" className="scroll-mt-20 bg-surface">
      <div className={`${CONTAINER} py-20 lg:py-24`}>
        <div className="text-center">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Ako vzniká koloidné striebro
          </h2>
          <p className="mt-4 text-lg text-foreground/75">
            Voda, striebro a slabý prúd. Zvyšok urobí prístroj.
          </p>
        </div>

        {/* Stepper — kroky vedľa seba, spojené čiarou cez stredy krúžkov */}
        <ol className="relative mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:mt-16 lg:grid-cols-4">
          <span
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-[2px] bg-foreground/15 lg:block"
          />
          {processOverview.map((step) => {
            const Icon = icons[step.icon];
            return (
              <li key={step.number} className="relative flex flex-col items-center text-center">
                <span className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-foreground/15 bg-white text-primary">
                  <Icon className="h-10 w-10" strokeWidth={1.5} />
                  <span className="absolute -right-1 -top-1 rounded-full bg-foreground px-2 py-0.5 text-xs font-bold text-white">
                    {step.number}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-1 text-[15px] text-muted">{step.text}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-14 text-center">
          <Link
            href="/koloidne-striebro"
            className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
          >
            Podrobný návod na výrobu
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
