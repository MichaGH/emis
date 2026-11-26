import Link from "next/link";
import { CONTAINER } from "@/constants";
import { processOverview } from "@/data/silver";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function SilverSection() {
  return (
    <section id="koloidne-striebro" className="scroll-mt-20 bg-white">
      <div className={`${CONTAINER} py-20 lg:py-24`}>
        <div className="text-center">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Ako vzniká koloidné striebro
          </h2>
          <p className="mt-4 text-lg text-foreground">
            Voda, striebro a slabý prúd. Zvyšok urobí prístroj.
          </p>
        </div>

        {/* Kroky vedľa seba — rovnaké biele kartičky, všetko na stred */}
        <ol className="mt-14 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {processOverview.map((step) => (
            <li
              key={step.number}
              className="flex flex-col items-center rounded-xl bg-surface px-5 py-8 text-center lg:py-10"
            >
              <span className="text-[3.5rem] font-extrabold leading-none tracking-[-0.05em] text-primary">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
              <p className="mt-1 text-[15px] text-muted">{step.text}</p>
            </li>
          ))}
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
