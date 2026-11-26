"use client";

import { useEffect, useState } from "react";
import { heroImages, heroImageSrc, heroImageFilter } from "@/data/heroImages";
import { HeroSection } from "@/components/homepage/HeroSection";
import { ClientsSection } from "@/components/homepage/ClientsSection";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";

// Testovanie fotiek v úvodnej sekcii: šípky / klávesy ← →, náhľady,
// extra stmavenie a výrez fotky. Iba na stránke /test.

const positions = [
  { label: "Stred", value: "center" },
  { label: "Hore", value: "center 20%" },
  { label: "Dole", value: "center 80%" },
];

export function HeroImageTester() {
  const [index, setIndex] = useState(0);
  const [dim, setDim] = useState(0);
  const [position, setPosition] = useState("center");
  const [open, setOpen] = useState(true);

  const count = heroImages.length;
  const current = heroImages[index];
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  return (
    <>
      <HeroSection
        image={heroImageSrc(current)}
        imageClassName={heroImageFilter(current)}
        imagePosition={position}
        dim={dim}
      />
      <ClientsSection />

      <div
        className="fixed bottom-5 left-1/2 z-50 w-[min(760px,calc(100vw-180px))] -translate-x-1/2 overflow-hidden rounded-2xl bg-white text-foreground shadow-[0_24px_60px_-16px_rgba(6,15,38,0.6)] ring-1 ring-black/10"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <div className="flex items-center gap-3 px-3 py-2.5">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Predchádzajúca fotka"
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-surface hover:bg-surface-strong"
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-bold">
              {index + 1}/{count} · {current.label}
            </p>
            <p className="truncate text-[12px] text-muted">
              {current.group} ·{" "}
              <a href={current.source} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                zdroj na Unsplash
              </a>
            </p>
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Ďalšia fotka"
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-hover"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex-none rounded-lg px-2.5 py-2 text-[13px] font-semibold text-muted hover:bg-surface"
          >
            {open ? "Skryť" : "Viac"}
          </button>
        </div>

        {open && (
          <div className="border-t border-border px-3 pb-3 pt-2.5">
            {/* náhľady */}
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {heroImages.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  title={`${img.group} — ${img.label}`}
                  className={`relative h-11 w-16 flex-none overflow-hidden rounded-md ${
                    i === index ? "ring-2 ring-primary ring-offset-1" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- malé náhľady z CDN */}
                  <img
                    src={heroImageSrc(img, 160)}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
              <label className="flex items-center gap-2 font-semibold">
                Stmavenie
                <input
                  type="range"
                  min={0}
                  max={0.7}
                  step={0.05}
                  value={dim}
                  onChange={(e) => setDim(Number(e.target.value))}
                  className="w-32 accent-[var(--primary)]"
                />
                <span className="w-8 tabular-nums text-muted">{Math.round(dim * 100)}%</span>
              </label>
              <div className="flex items-center gap-1 font-semibold">
                Výrez
                {positions.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setPosition(p.value)}
                    className={`ml-1 rounded-md px-2 py-1 ${
                      position === p.value ? "bg-foreground text-white" : "bg-surface hover:bg-surface-strong"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <span className="text-muted">Klávesy ← → prepínajú</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
