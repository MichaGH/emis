import { CONTAINER, SITE } from "@/constants";
import { ContactForm } from "@/components/contact/ContactForm";
import { PhoneIcon, MailIcon, PinIcon, ArrowRightIcon } from "@/components/ui/Icons";

export function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-[#03161c] text-white">
      <div className={`${CONTAINER} grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28`}>
        <div className="lg:col-span-5">
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Zavolajte priamo konštruktérovi
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white">
            Poradíme s výberom generátora, s výrobou aj so servisom. Zákazkový
            vývoj radi preberieme osobne.
          </p>

          {/* Kontakty ako rovnocenné riadky — rovnaká veľkosť, oddelené čiarou */}
          <ul className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {[
              {
                icon: PhoneIcon,
                label: "Telefón",
                value: SITE.phone,
                href: `tel:${SITE.phoneHref}`,
              },
              {
                icon: MailIcon,
                label: "E-mail",
                value: SITE.email,
                href: `mailto:${SITE.email}`,
              },
              {
                icon: PinIcon,
                label: "Adresa",
                value: `${SITE.street}, ${SITE.city}`,
              },
            ].map((item) => {
              const Icon = item.icon;
              const body = (
                <>
                  <Icon className="h-5 w-5 flex-none text-white" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-medium text-white">
                      {item.label}
                    </span>
                    <span className="block truncate text-lg font-semibold">{item.value}</span>
                  </span>
                  {item.href && (
                    <ArrowRightIcon className="h-4 w-4 flex-none opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className="group flex items-center gap-4 py-4">
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-4">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-[15px] text-white">{SITE.owner}</p>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
