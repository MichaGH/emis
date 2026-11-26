import Link from "next/link";
import { CONTAINER } from "@/constants";
import { CheckIcon } from "@/components/ui/Icons";

const steps = [
  { n: 1, label: "Košík", href: "/objednavka" },
  { n: 2, label: "Vaše údaje", href: "/objednavka/udaje" },
  { n: 3, label: "Odoslané", href: null },
];

// Hlavička objednávky — nadpis a kroky 1 → 2 → 3 (hotové kroky sú odkazy späť).
export function CheckoutHeader({ step, title }: { step: 1 | 2 | 3; title: string }) {
  return (
    <section className="bg-[#03161c] text-white">
      <div className={`${CONTAINER} pb-10 pt-[calc(var(--nav-h)+2.5rem)] lg:pb-12`}>
        <h1 className="text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">{title}</h1>

        <ol className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3 text-[15px] font-semibold">
          {steps.map((s, i) => {
            const done = s.n < step;
            const current = s.n === step;
            const badge = (
              <span
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-full text-sm font-bold ${
                  current
                    ? "bg-white text-[#03161c]"
                    : done
                      ? "bg-primary text-white"
                      : "ring-1 ring-inset ring-white/40"
                }`}
              >
                {done ? <CheckIcon className="h-4 w-4" /> : s.n}
              </span>
            );
            return (
              <li key={s.n} className="flex items-center gap-3">
                {done && s.href && step < 3 ? (
                  <Link href={s.href} className="flex items-center gap-2.5 hover:underline">
                    {badge}
                    {s.label}
                  </Link>
                ) : (
                  <span className={`flex items-center gap-2.5 ${current || done ? "" : "opacity-60"}`} aria-current={current ? "step" : undefined}>
                    {badge}
                    {s.label}
                  </span>
                )}
                {i < steps.length - 1 && <span aria-hidden className="h-px w-8 bg-white/30 sm:w-12" />}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
