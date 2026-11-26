import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "@/constants";
import { silverHealth } from "@/data/silver";
import { ArrowRightIcon } from "@/components/ui/Icons";

// Striebro a zdravie — tmavá polovica s textom a fotka rodiny v horách cez
// celú výšku. Tvrdenia majú číslované zdroje [1], [2]… (data/silver.ts).
export function HealthSection() {
  return (
    <section className="relative bg-[#03161c] text-white">
      {/* fotka — na desktope pravá polovica od okraja po okraj */}
      <div className="relative aspect-[3/2] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-1/2">
        <Image
          src="/images/family-mountains.jpg"
          alt="Rodina odpočíva na skale s výhľadom na zalesnené hory"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className={`${CONTAINER} relative`}>
        <div className="py-16 lg:w-1/2 lg:py-24 lg:pr-16">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            {silverHealth.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed">{silverHealth.intro}</p>

          <ol className="mt-10 space-y-6">
            {silverHealth.points.map((point, i) => (
              <li key={point.text} className="flex gap-5">
                <span className="text-3xl font-extrabold leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed">
                  {point.text}
                  <a
                    href={`#zdroj-${point.ref}`}
                    className="ml-1 align-super text-sm font-bold text-accent hover:underline"
                    aria-label={`Zdroj ${point.ref}`}
                  >
                    [{point.ref}]
                  </a>
                </p>
              </li>
            ))}
          </ol>

          <Link
            href="/koloidne-striebro"
            className="btn-outline-light mt-10 inline-flex items-center gap-2.5 rounded-lg px-6 py-3.5 text-[15px] font-bold"
          >
            Viac o koloidnom striebre
            <ArrowRightIcon className="h-4 w-4" />
          </Link>

          <div className="mt-12 border-t border-white/20 pt-6">
            <h3 className="text-sm font-bold">Zdroje</h3>
            <ol className="mt-3 space-y-2 text-[13px] leading-relaxed">
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
