"use client";

import { CONTAINER, SITE } from "@/constants";
import { Tag } from "@/components/ui/Tag";

export function ContactSection() {
  return (
    <section id="kontakt" className={`${CONTAINER} scroll-mt-20 py-20 lg:py-24`}>
      <div className="grid gap-12 rounded-2xl border border-border/70 bg-surface p-8 shadow-soft lg:grid-cols-2 lg:gap-16 lg:p-12">
        <div>
          <Tag label="Kontakt" />
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Máte otázku k zariadeniu?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Napíšte nám a ozveme sa. Pri objednávke na mieru radi poradíme
            s výberom.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex justify-between border-b border-border pb-4">
              <dt className="text-muted">E-mail</dt>
              <dd className="font-medium">{SITE.email}</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-4">
              <dt className="text-muted">Telefón</dt>
              <dd className="font-medium">{SITE.phone}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Lokalita</dt>
              <dd className="font-medium">{SITE.location}</dd>
            </div>
          </dl>
        </div>

        {/* Statický formulár — vizuálny placeholder, bez odosielania */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Meno" name="name" placeholder="Vaše meno" />
            <Field
              label="E-mail"
              name="email"
              type="email"
              placeholder="vas@email.sk"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium"
            >
              Správa
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="S čím vám môžeme pomôcť?"
              className="w-full resize-none rounded-md border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
          >
            Odoslať správu
          </button>
          <p className="text-xs text-muted">
            Formulár je zatiaľ ukážkový — napojenie na odosielanie sa doplní.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-primary"
      />
    </div>
  );
}
