import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "@/constants";

export function PageHeader({
  crumb,
  title,
  lead,
  image = "/images/hero-pcb.jpg",
  children,
}: {
  crumb: string;
  title: string;
  lead?: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-darker text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,15,38,0.82)_0%,rgba(10,24,56,0.58)_55%,rgba(6,15,38,0.85)_100%)]" />

      <div className={`${CONTAINER} pb-16 pt-[calc(var(--nav-h)+2.5rem)] lg:pb-24 lg:pt-[calc(var(--nav-h)+3.5rem)]`}>
        <nav aria-label="Omrvinky" className="text-sm font-semibold">
          <Link href="/" className="text-accent hover:underline">
            Úvod
          </Link>
          <span className="mx-2 text-white">/</span>
          <span>{crumb}</span>
        </nav>
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h1 className="text-4xl font-extrabold leading-[1.03] tracking-[-0.03em] sm:text-5xl lg:col-span-7 lg:text-6xl">
            {title}
          </h1>
          {lead && (
            <p className="text-lg leading-relaxed text-white lg:col-span-5">
              {lead}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
