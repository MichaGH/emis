import Image from "next/image";
import { CONTAINER } from "@/constants";
import { Tag } from "@/components/ui/Tag";

// Historickí zákazníci prevzatí z pôvodnej stránky klienta (old_content.md).
const references = ["LG Philips Displays", "Samsung", "Panasonic", "Orava"];

export function ElectronicsSection() {
  return (
    <section id="elektronika" className="scroll-mt-16 bg-background">
      <div
        className={`${CONTAINER} grid items-center gap-14 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28`}
      >
        {/* Image collage */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/circuitboard1.webp"
              alt="Detail dosky plošných spojov s elektronickými súčiastkami"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-7 -right-4 hidden w-44 overflow-hidden rounded-xl border-4 border-background shadow-soft sm:block">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/circuitboard2.webp"
                alt="Integrovaný obvod na doske plošných spojov"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -left-3 top-6 rounded-xl bg-background px-4 py-3 shadow-soft">
            <p className="font-display text-2xl font-bold leading-none text-primary">
              1990
            </p>
            <p className="mt-1 text-xs font-medium text-muted">Rok založenia</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <Tag label="Zákazková elektronika" />
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Elektroniku vyvíjame a vyrábame na mieru
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            EMIS navrhuje aplikačný hardvér aj softvér presne podľa funkčných
            a kvalitatívnych požiadaviek zákazníka — od návrhu obvodu cez
            osadenie dosky až po hotové zariadenie a jeho servis.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Firma vznikla v roku 1990 v Nižnej. Naše meracie a testovacie
            prístroje využívali aj výrobné prevádzky známych spoločností.
          </p>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
              Zariadenia sme vyvíjali pre
            </p>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {references.map((name) => (
                <li
                  key={name}
                  className="rounded-lg border border-border bg-surface px-3.5 py-2 font-display text-sm font-semibold text-foreground/80"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
