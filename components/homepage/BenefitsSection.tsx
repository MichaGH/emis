import { CONTAINER } from "@/constants";
import { benefits, type BenefitIcon } from "@/data/benefits";
import {
  BadgeIcon,
  ChipIcon,
  GaugeIcon,
  ShieldIcon,
} from "@/components/ui/Icons";

const icons: Record<BenefitIcon, typeof ShieldIcon> = {
  shield: ShieldIcon,
  badge: BadgeIcon,
  chip: ChipIcon,
  gauge: GaugeIcon,
};

// Jeden pás rozdelený tenkými čiarami — bez kartičiek a farebných podkladov.
export function BenefitsSection() {
  return (
    <section className="bg-white">
      <div className={`${CONTAINER} py-20 lg:py-24`}>
        <h2 className="text-center text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
          Prečo prístroj od nás
        </h2>

        {/* gap-px na sivom podklade = tenké deliace čiary medzi bunkami */}
        <ul className="mt-12 grid gap-px border-y border-border bg-border sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {benefits.map((b) => {
            const Icon = icons[b.icon];
            return (
              <li
                key={b.title}
                className="flex flex-col items-center bg-white px-6 py-10 text-center lg:py-12"
              >
                <Icon className="h-12 w-12 text-primary" strokeWidth={1.4} />
                <h3 className="mt-6 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 max-w-[17rem] leading-relaxed text-foreground/75">
                  {b.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
