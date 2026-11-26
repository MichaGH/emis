import Link from "next/link";
import { CONTAINER } from "@/constants";
import { processOverview } from "@/data/silver";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function SilverSection() {
  return (
    <section id="koloidne-striebro" className="scroll-mt-20 bg-surface">
      <div className={`${CONTAINER} pb-20 pt-2 lg:pb-24 lg:pt-4`}>
        <div className="text-center">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Ako vzniká koloidné striebro
          </h2>
          <p className="mt-4 text-lg text-foreground">
            Voda, striebro a slabý prúd. Zvyšok urobí prístroj.
          </p>
        </div>

        {/* Kroky ako jeden biely pás — tenké deliace čiary (gap-px na sivom)
            a na desktope šípka na každom predele, aby kroky nadväzovali */}
        <div className="relative mt-14 lg:mt-16">
          <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border lg:grid-cols-4">
            {processOverview.map((step) => (
              <li
                key={step.number}
                className="flex flex-col items-center bg-white px-5 py-9 text-center lg:py-12"
              >
                <span className="text-[3.5rem] font-extrabold leading-none tracking-[-0.05em] text-primary">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-1 text-[15px] text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              aria-hidden
              className="absolute top-1/2 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary ring-1 ring-border lg:flex"
              style={{ left: `${n * 25}%` }}
            >
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          ))}
        </div>

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
