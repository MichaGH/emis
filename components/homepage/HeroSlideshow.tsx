"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroSlides } from "@/data/slides";
import { CONTAINER } from "@/constants";
import { ArrowRightIcon } from "@/components/ui/Icons";

const INTERVAL = 6500;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearInterval(timer);
  }, [count, index]);

  return (
    <section className="relative -mt-16 h-[64vh] min-h-[420px] w-full max-h-[560px] overflow-hidden bg-dark text-dark-foreground">
      {/* Background slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/75 to-dark/20" />
          {/* Faint blue wash so the hero reads as brand-blue, not flat black */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-strong/40 via-transparent to-transparent mix-blend-screen" />
        </div>
      ))}

      {/* Content */}
      <div className={`${CONTAINER} relative flex h-full flex-col justify-center pt-16`}>
        <div className="relative min-h-[210px] max-w-2xl sm:min-h-[220px]">
          {heroSlides.map((slide, i) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ${
                i === index
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0"
              }`}
            >
              <h1 className="font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                {slide.title}{" "}
                <span className="text-accent">{slide.highlight}</span>
              </h1>
              <p className="mt-4 max-w-lg leading-relaxed text-dark-muted">
                {slide.text}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={slide.ctaHref}
                  className="bg-brand-gradient shadow-brand inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {slide.ctaLabel}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="#produkty"
                  className="inline-flex items-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                >
                  Zobraziť ponuku
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 left-0 right-0 z-10">
        <div className={`${CONTAINER} flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Snímka ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-10 bg-accent"
                    : "w-4 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Predchádzajúca"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Ďalšia"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
