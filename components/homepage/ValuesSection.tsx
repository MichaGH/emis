import { CONTAINER } from "@/constants";
import { Tag } from "@/components/ui/Tag";
import { ShieldIcon, PulseIcon, TargetIcon } from "@/components/ui/Icons";

// Zámerne NIE prázdne slogany "kvalita / spoľahlivosť" — každý pilier má
// konkrétne vysvetlenie viazané na to, čo EMIS reálne robí (viď design.md).
const pillars = [
  {
    Icon: ShieldIcon,
    title: "Kvalita, ktorá obstála",
    description:
      "Naše meracie a testovacie prístroje využívali aj výrobné linky známych výrobcov elektroniky.",
  },
  {
    Icon: PulseIcon,
    title: "Spoľahlivosť roky overená",
    description:
      "Zariadenia navrhujeme tak, aby fungovali dlhodobo a stabilne aj v náročnej výrobnej prevádzke.",
  },
  {
    Icon: TargetIcon,
    title: "Presnosť na mieru",
    description:
      "Každý prístroj ladíme na konkrétnu úlohu — presne podľa funkčných požiadaviek zákazníka.",
  },
];

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-dark text-dark-foreground">
      {/* Jemná circuit-board textúra ako značkový motív — nie AI glow blob */}
      <div
        aria-hidden
        className="circuit-texture circuit-light pointer-events-none absolute inset-0 opacity-[0.06]"
      />

      <div className={`${CONTAINER} relative py-20 lg:py-28`}>
        <div className="mx-auto max-w-2xl text-center">
          <Tag label="Na čom nám záleží" tone="dark" />
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Prečo na naše prístroje spoľahnete
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-dark-muted">
            Nerobíme veľké série. Robíme prístroje, ktoré majú svoju úlohu splniť
            presne a dlhodobo.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {pillars.map(({ Icon, title, description }) => (
            <div key={title} className="text-center">
              <span className="bg-brand-gradient shadow-brand mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white">
                <Icon className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-dark-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
