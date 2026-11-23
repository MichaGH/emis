import { CONTAINER, SITE } from "@/constants";
import { ContactForm } from "@/components/contact/ContactForm";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/ui/Icons";

export function ContactSection() {
  return (
    <section id="kontakt" className="panel-blue scroll-mt-20 text-white">
      <div className={`${CONTAINER} grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28`}>
        <div className="lg:col-span-5">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/80">
            Kontakt
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Zavolajte priamo konštruktérovi
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">
            Poradíme s výberom generátora, s výrobou aj so servisom. Zákazkový
            vývoj radi preberieme osobne.
          </p>

          <a
            href={`tel:${SITE.phoneHref}`}
            className="mt-10 flex items-center gap-4 text-3xl font-extrabold tracking-tight hover:text-white/85 sm:text-4xl"
          >
            <PhoneIcon className="h-8 w-8" />
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-5 flex items-center gap-4 text-lg font-semibold hover:text-white/85"
          >
            <MailIcon className="h-6 w-6" />
            {SITE.email}
          </a>
          <p className="mt-5 flex items-start gap-4 text-lg font-medium text-white/90">
            <PinIcon className="mt-0.5 h-6 w-6 flex-none" />
            <span>
              {SITE.owner}
              <br />
              {SITE.street}, {SITE.city}
            </span>
          </p>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
