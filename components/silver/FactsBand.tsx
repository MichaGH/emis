import { CONTAINER } from "@/constants";
import { silverFacts } from "@/data/silver";

// Tmavý pás so štyrmi faktami o roztoku (veľká hodnota + krátky popis).
export function FactsBand() {
  return (
    <section className="bg-[#03161c] text-white">
      <div className={CONTAINER}>
        <dl className="grid divide-y divide-white/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {silverFacts.map((fact) => (
            <div key={fact.value} className="py-10 sm:px-6 lg:py-14 lg:first:pl-0">
              <dt className="text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
                {fact.value}
              </dt>
              <dd className="mt-3 max-w-[16rem] leading-relaxed">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
