import Link from "next/link";
import { CONTAINER } from "@/constants";
import { processOverview } from "@/data/silver";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function SilverSection() {
  return (
    <section id="koloidne-striebro" className="scroll-mt-20 bg-surface">
      <div className={`${CONTAINER} py-20 lg:py-24`}>
        <div className="text-center">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Ako vzniká koloidné striebro
          </h2>
          <p className="mt-4 text-lg text-foreground">
            Voda, striebro a slabý prúd. Zvyšok urobí prístroj.
          </p>
        </div>

        {/* Kroky vedľa seba — veľké čísla spojené čiarou */}
        <ol className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:mt-16 lg:grid-cols-4 lg:gap-0">
          {processOverview.map((step, i) => {
            const last = i === processOverview.length - 1;
            return (
              <li key={step.number} className="lg:pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-[3.5rem] font-extrabold leading-none tracking-[-0.05em] text-primary">
                    {step.number}
                  </span>
                  {!last && (
                    <span aria-hidden className="hidden flex-1 items-center lg:flex">
                      <span className="h-[2px] flex-1 bg-primary/25" />
                      <span className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-primary/50" />
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
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
