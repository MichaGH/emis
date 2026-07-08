import Image from "next/image";
import { CONTAINER } from "@/constants";
import { Tag } from "@/components/ui/Tag";

export function NanoparticlesSection() {
  return (
    <section className="relative overflow-hidden bg-dark text-dark-foreground">
      {/* Ambient video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/nanoparticles1.webp"
      >
        <source src="/videos/nanoparticles.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/80" />

      <div className={`${CONTAINER} relative py-24 lg:py-32`}>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <Tag label="Nanočastice striebra" tone="dark" />
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Pri pohľade zblízka
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-dark-muted">
              To, čo v pohári vyzerá ako číra tekutina, tvoria pri veľkom
              zväčšení jednotlivé čiastočky striebra. Ich veľkosť sa meria
              v nanometroch — v miliardtinách metra.
            </p>
            <p className="mt-4 leading-relaxed text-dark-muted">
              Práve rozmer častíc rozhoduje o kvalite koloidného striebra,
              a preto naše generátory dbajú na stabilný a rovnomerný priebeh
              prípravy.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-dark-border lg:mx-0 lg:ml-auto">
            <Image
              src="/images/nanoparticles1.webp"
              alt="Detail strieborných nanočastíc zo snímky elektrónového mikroskopu"
              fill
              sizes="(max-width: 1024px) 80vw, 384px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/90 to-transparent px-4 py-3">
              <p className="text-xs text-dark-muted">
                Snímka z elektrónového mikroskopu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
