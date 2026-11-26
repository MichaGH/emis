"use client";

import { useEffect, useState } from "react";
import { heroVideos, posterSrc } from "@/data/heroVideos";
import { HeroSection } from "@/components/homepage/HeroSection";
import { ProductsSection } from "@/components/homepage/ProductsSection";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";

// Testovanie videa v úvodnej sekcii (koloidné striebro): šípky / klávesy ← →,
// náhľady, stmavenie a čiernobiely „strieborný“ režim. Iba na /test-video.

export function HeroVideoTester() {
  const [index, setIndex] = useState(0);
  const [dim, setDim] = useState(0.1);
  const [mono, setMono] = useState(false);
  const [open, setOpen] = useState(true);

  const count = heroVideos.length;
  const current = heroVideos[index];
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  const video = (
    <video
      key={current.id}
      className={`absolute inset-0 -z-20 h-full w-full object-cover ${
        mono ? "grayscale contrast-[1.1] brightness-[1.05]" : ""
      }`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={posterSrc(current)}
      aria-hidden
    >
      {/* menší súbor pre mobil, plné HD pre desktop */}
      <source src={current.sd} type="video/mp4" media="(max-width: 768px)" />
      <source src={current.hd} type="video/mp4" />
    </video>
  );

  return (
    <>
      <HeroSection background={video} dim={dim} />
      <ProductsSection />

      <div
        className="fixed bottom-5 left-1/2 z-50 w-[min(760px,calc(100vw-180px))] -translate-x-1/2 overflow-hidden rounded-2xl bg-white text-foreground shadow-[0_24px_60px_-16px_rgba(6,15,38,0.6)] ring-1 ring-black/10 max-sm:w-[calc(100vw-24px)]"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <div className="flex items-center gap-3 px-3 py-2.5">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Predchádzajúce video"
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-surface hover:bg-surface-strong"
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-bold">
              {index + 1}/{count} · {current.label}
            </p>
            <p className="truncate text-[12px]">
              {current.group} ·{" "}
              <a href={current.source} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                zdroj na Pexels
              </a>
            </p>
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Ďalšie video"
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-hover"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex-none rounded-lg px-2.5 py-2 text-[13px] font-semibold hover:bg-surface"
          >
            {open ? "Skryť" : "Viac"}
          </button>
        </div>

        {open && (
          <div className="border-t border-border px-3 pb-3 pt-2.5">
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {heroVideos.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  title={`${v.group} — ${v.label}`}
                  className={`relative h-11 w-16 flex-none overflow-hidden rounded-md ${
                    i === index ? "ring-2 ring-primary ring-offset-1" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- malé náhľady z CDN */}
                  <img src={posterSrc(v, 160)} alt="" className="h-full w-full object-cover" />
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
                <span className="w-8 tabular-nums">{Math.round(dim * 100)}%</span>
              </label>
              <label className="flex items-center gap-2 font-semibold">
                <input
                  type="checkbox"
                  checked={mono}
                  onChange={(e) => setMono(e.target.checked)}
                  className="h-4 w-4 accent-[var(--primary)]"
                />
                Čiernobielo (striebristé)
              </label>
              <span>Klávesy ← → prepínajú</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
