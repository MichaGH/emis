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

// Modrý pás, biely text — bez kartičiek a okrajov.
export function BenefitsSection() {
  return (
    <section className="bg-primary text-white">
      <div className={`${CONTAINER} py-20 lg:py-24`}>
        <h2 className="text-center text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
          Prečo prístroj od nás
        </h2>

        <ul className="mt-14 grid gap-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {benefits.map((b) => {
            const Icon = icons[b.icon];
            return (
              <li key={b.title} className="flex flex-col items-center text-center">
                <Icon className="h-12 w-12" strokeWidth={1.4} />
                <h3 className="mt-6 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 max-w-[17rem] leading-relaxed text-white">
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
