import { CONTAINER, SITE } from "@/constants";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhoneIcon } from "@/components/ui/Icons";

// Záverečná výzva — bez karty: veľký nadpis a dve tlačidlá na bielom pozadí.
export function AdviceSection() {
  return (
    <section className="bg-white">
      <div className={`${CONTAINER} py-20 lg:py-24`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              Poradíme vám s výberom generátora
            </h2>
            <p className="mt-5 max-w-xl text-xl leading-relaxed">
              Prístroje navrhujeme a vyrábame sami, takže na každú otázku vám
              odpovie priamo ten, kto ich postavil.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SITE.phoneHref}`}
              className="btn-primary inline-flex items-center gap-2.5 rounded-lg px-7 py-4 text-[15px] font-bold"
            >
              <PhoneIcon className="h-[18px] w-[18px]" />
              Zavolať {SITE.phone}
            </a>
            <ButtonLink href="/kontakt" variant="white">
              Napísať správu
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
