import Image from "next/image";
import { CONTAINER } from "@/constants";
import { natureImage, whyPeopleMakeIt } from "@/data/silver";

// Tretia sekcia — príroda a dôvody, prečo si ľudia koloidné striebro
// vyrábajú doma. Referencie zákazníkov doplní klient.
export function NatureSection() {
  return (
    <section className="bg-surface">
      <div className={`${CONTAINER} grid gap-12 py-20 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-28`}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:col-span-5">
          <Image
            src={natureImage}
            alt="Horská bystrina medzi kameňmi"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-7">
          <h2 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Prečo si ho ľudia vyrábajú doma
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">
            Koloidné striebro si doma vyrábajú ľudia, ktorí uprednostňujú
            jednoduché a prírodné veci a radi vedia, čo presne používajú.
          </p>

          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {whyPeopleMakeIt.map((item) => (
              <li key={item.title} className="border-l-2 border-primary pl-5">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-1.5 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
