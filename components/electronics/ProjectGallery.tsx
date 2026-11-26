"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ElectronicsProject } from "@/lib/types";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "@/components/ui/Icons";

// Galéria realizácií: karta s titulnou fotkou, po kliknutí prehliadač
// všetkých fotiek zariadenia (← → prepínajú, Esc zatvára).
export function ProjectGallery({ projects }: { projects: ElectronicsProject[] }) {
  const [open, setOpen] = useState<{ project: number; photo: number } | null>(null);

  const current = open ? projects[open.project] : null;
  const count = current?.photos.length ?? 0;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight")
        setOpen((o) => o && { ...o, photo: (o.photo + 1) % count });
      if (e.key === "ArrowLeft")
        setOpen((o) => o && { ...o, photo: (o.photo - 1 + count) % count });
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, count]);

  return (
    <>
      {/* Karty: fotka vľavo, text vpravo (na mobile pod sebou), bez štítkov na fotke */}
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => {
          const photos = p.photos.length;
          const label = photos === 1 ? "Zobraziť fotku" : `Zobraziť ${photos} ${photos <= 4 ? "fotky" : "fotiek"}`;
          return (
            <article
              key={p.code}
              className="group grid overflow-hidden rounded-xl bg-white sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
            >
              <button
                type="button"
                onClick={() => setOpen({ project: i, photo: 0 })}
                className="relative block aspect-[4/3] overflow-hidden bg-surface sm:aspect-auto sm:min-h-[260px]"
                aria-label={`${label}: ${p.title}`}
              >
                <Image
                  src={p.photos[0]}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>

              <div className="flex flex-col p-6">
                <p className="text-[13px] font-semibold">
                  <span className="text-primary">{p.category}</span>
                  <span className="mx-2 opacity-40">/</span>
                  {p.code}
                </p>
                <h3 className="mt-2 text-xl font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed">{p.description}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-border pt-4 text-sm">
                  <span className="font-semibold">{p.client ? `Pre ${p.client}` : "Na zákazku"}</span>
                  <button
                    type="button"
                    onClick={() => setOpen({ project: i, photo: 0 })}
                    className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
                  >
                    {label}
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {current && open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-50 flex flex-col bg-darker/95"
          onClick={() => setOpen(null)}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 text-white">
            <p className="min-w-0 truncate font-bold">
              {current.code} · {current.title}
              <span className="ml-3 font-medium">
                {open.photo + 1}/{count}
              </span>
            </p>
            <button
              type="button"
              aria-label="Zavrieť"
              onClick={() => setOpen(null)}
              className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white/10 hover:bg-white/20"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.photos[open.photo]}
              src={current.photos[open.photo]}
              alt={`${current.title} — fotka ${open.photo + 1}`}
              fill
              sizes="100vw"
              className="object-contain p-4 sm:p-8"
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Predchádzajúca fotka"
                  onClick={() => setOpen({ ...open, photo: (open.photo - 1 + count) % count })}
                  className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg bg-white text-foreground hover:bg-surface"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Ďalšia fotka"
                  onClick={() => setOpen({ ...open, photo: (open.photo + 1) % count })}
                  className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg bg-white text-foreground hover:bg-surface"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {count > 1 && (
            <div className="flex justify-center gap-2 overflow-x-auto px-5 py-4" onClick={(e) => e.stopPropagation()}>
              {current.photos.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setOpen({ ...open, photo: i })}
                  aria-label={`Fotka ${i + 1}`}
                  className={`relative h-14 w-20 flex-none overflow-hidden rounded-md ${
                    i === open.photo ? "ring-2 ring-white" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={src} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
