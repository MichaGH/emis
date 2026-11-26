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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <article
            key={p.code}
            className="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-black/[0.07]"
          >
            <button
              type="button"
              onClick={() => setOpen({ project: i, photo: 0 })}
              className="relative block aspect-[4/3] overflow-hidden bg-surface text-left"
              aria-label={`Fotky: ${p.title}`}
            >
              <Image
                src={p.photos[0]}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute left-3 top-3 rounded-md bg-dark px-2.5 py-1 text-sm font-extrabold tracking-[0.02em] text-white">
                {p.code}
              </span>
              {p.photos.length > 1 && (
                <span className="absolute bottom-3 right-3 rounded-md bg-white px-2 py-0.5 text-xs font-bold text-foreground">
                  {p.photos.length} {p.photos.length <= 4 ? "fotky" : "fotiek"}
                </span>
              )}
            </button>

            <div className="flex flex-1 flex-col p-5">
              <p className="text-[13px] font-semibold text-primary">{p.category}</p>
              <h3 className="mt-1 text-lg font-bold leading-snug">{p.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed">{p.description}</p>
              {p.client && (
                <p className="mt-4 border-t border-border pt-3 text-sm font-semibold">
                  Pre {p.client}
                </p>
              )}
            </div>
          </article>
        ))}
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
