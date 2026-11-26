import Link from "next/link";
import { CONTAINER } from "@/constants";
import { silverHealth } from "@/data/silver";
import { ArrowRightIcon } from "@/components/ui/Icons";

// Striebro a zdravie — tvrdenia s číslovanými zdrojmi [1], [2]… a zoznamom
// zdrojov pod nimi. Obsah je v data/silver.ts (silverHealth).
export function HealthSection() {
  return (
    <section className="bg-white">
      <div className={`${CONTAINER} grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28`}>
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            {silverHealth.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed">{silverHealth.intro}</p>
          <Link
            href="/koloidne-striebro"
            className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:underline"
          >
            Viac o koloidnom striebre
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="lg:col-span-7">
          <ol className="divide-y divide-border border-y border-border">
            {silverHealth.points.map((point, i) => (
              <li key={point.text} className="flex gap-5 py-6">
                <span className="text-2xl font-extrabold leading-none text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed">
                  {point.text}
                  <a
                    href={`#zdroj-${point.ref}`}
                    className="ml-1 align-super text-sm font-bold text-primary hover:underline"
                    aria-label={`Zdroj ${point.ref}`}
                  >
                    [{point.ref}]
                  </a>
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <h3 className="text-sm font-bold">Zdroje</h3>
            <ol className="mt-3 space-y-2 text-sm leading-relaxed">
              {silverHealth.references.map((ref, i) => (
                <li key={ref} id={`zdroj-${i + 1}`} className="scroll-mt-28">
                  [{i + 1}] {ref}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
