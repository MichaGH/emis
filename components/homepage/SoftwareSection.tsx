import Link from "next/link";
import { CONTAINER } from "@/constants";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Tag } from "@/components/ui/Tag";

export function SoftwareSection() {
  return (
    <section className={`${CONTAINER} pb-4`}>
      <div className="flex flex-col gap-6 rounded-2xl border border-border/70 bg-surface p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between lg:p-10">
        <div className="max-w-xl">
          <Tag label="Softvér" />
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight">
            Účtovný softvér
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Súčasťou histórie EMIS je aj vlastný účtovný program. Informácie
            o jeho dostupnosti a podpore budú doplnené na samostatnej stránke.
          </p>
        </div>
        <Link
          href="/softver"
          className="inline-flex flex-none items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-strong"
        >
          Zobraziť softvér
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
