import Image from "next/image";
import { CONTAINER } from "@/constants";
import { natureImage } from "@/data/silver";

// Fotka prírody cez celú šírku s krátkou vetou — vizuálny predel na podstránke.
export function NatureBand() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <Image
        src={natureImage}
        alt="Horská bystrina medzi kameňmi"
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,22,28,0.82)_0%,rgba(3,22,28,0.5)_55%,rgba(3,22,28,0.15)_100%)]" />
      <div className={`${CONTAINER} flex min-h-[420px] items-center py-20 lg:min-h-[520px]`}>
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Čistá voda a čisté striebro
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            Nič viac do roztoku nepatrí. Preto záleží na destilovanej vode,
            na striebre s certifikátom a na stabilnom prúde počas výroby.
          </p>
        </div>
      </div>
    </section>
  );
}
