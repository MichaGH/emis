import Image from "next/image";
import { CONTAINER } from "@/constants";
import { natureImage, whyPeopleMakeIt } from "@/data/silver";

// „Prečo si ho ľudia vyrábajú doma“ — veľká fotka rodiny a štyri dlaždice
// s dôvodmi (každá iné pozadie, posledná s fotkou bystriny).
const tileStyles = [
  "bg-primary text-white",
  "bg-white text-foreground",
  "bg-white text-foreground",
  "text-white",
];

export function NatureSection() {
  return (
    <section className="bg-surface">
      <div className={`${CONTAINER} py-20 lg:py-28`}>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Prečo si ho ľudia vyrábajú doma
          </h2>
          <p className="text-lg leading-relaxed lg:pb-1">
            Koloidné striebro si doma vyrábajú ľudia, ktorí uprednostňujú
            jednoduché a prírodné veci a radi vedia, čo presne používajú.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-xl lg:col-span-2 lg:row-span-2 lg:min-h-[560px]">
            <Image
              src="/images/family-meadow.jpg"
              alt="Rodina s deťmi na prechádzke po lúke"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {whyPeopleMakeIt.map((item, i) => {
            const withPhoto = i === whyPeopleMakeIt.length - 1;
            return (
              <div
                key={item.title}
                className={`relative isolate flex min-h-[260px] flex-col justify-between overflow-hidden rounded-xl p-7 ${tileStyles[i]}`}
              >
                {withPhoto && (
                  <>
                    <Image
                      src={natureImage}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="-z-20 object-cover"
                    />
                    <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,22,28,0.35)_0%,rgba(3,22,28,0.85)_100%)]" />
                  </>
                )}
                <span className="text-5xl font-extrabold leading-none tracking-[-0.04em] opacity-90">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold leading-tight">{item.title}</h3>
                  <p className="mt-2 leading-relaxed">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
