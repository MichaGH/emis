import Link from "next/link";
import { CONTAINER } from "@/constants";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Tag } from "@/components/ui/Tag";

export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className={`${CONTAINER} flex flex-1 flex-col justify-center py-24`}>
      <Tag label={eyebrow} />
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        {description}
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Späť na úvod
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
      <p className="mt-16 max-w-md rounded-lg border border-dashed border-border bg-surface px-4 py-3 text-sm text-muted">
        Táto podstránka je pripravená na doplnenie obsahu po dodaní podkladov
        od klienta.
      </p>
    </section>
  );
}
