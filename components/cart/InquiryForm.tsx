"use client";

import { useActionState } from "react";
import Link from "next/link";
import { sendInquiry, type InquiryState } from "@/app/actions/inquiry";
import type { CartLine } from "@/components/cart/CartProvider";
import { ArrowLeftIcon, MailIcon } from "@/components/ui/Icons";

const field =
  "mt-1.5 w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-[#7a8494] focus:border-primary focus:bg-white";
const label = "text-sm font-bold";

// Nezáväzný dopyt — bez platby. Predávajúci zákazníka kontaktuje
// s platobnými údajmi a termínom dodania.
export function InquiryForm({
  lines,
  onBack,
  onSent,
}: {
  lines: CartLine[];
  onBack: () => void;
  onSent: () => void;
}) {
  const [state, formAction, pending] = useActionState<InquiryState, FormData>(
    async (prev, formData) => {
      const result = await sendInquiry(prev, formData);
      if (result.status === "sent") onSent();
      return result;
    },
    { status: "idle" },
  );

  const items = JSON.stringify(lines.map((l) => ({ id: l.product.id, quantity: l.quantity })));

  if (state.status === "not-configured" || state.status === "error") {
    return (
      <div className="p-5">
        <div className="rounded-xl bg-surface p-5">
          <p className="text-lg font-bold">Dokončite dopyt e-mailom</p>
          <p className="mt-2 leading-relaxed">
            {state.status === "error"
              ? state.message
              : "Online odosielanie zatiaľ nie je zapnuté."}{" "}
            Pripravili sme vám hotový e-mail so všetkými údajmi — stačí ho
            odoslať.
          </p>
          <a
            href={state.mailto}
            className="btn-primary mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-4 font-bold"
          >
            <MailIcon className="h-5 w-5" />
            Otvoriť e-mail s dopytom
          </a>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Späť ku košíku
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="p-5">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Späť ku košíku
      </button>

      <p className="mt-4 text-xl font-bold">Vaše údaje</p>
      <p className="mt-1 leading-relaxed">
        Dopyt je nezáväzný. Ozveme sa vám s platobnými údajmi a termínom
        dodania.
      </p>

      <input type="hidden" name="items" value={items} />

      <div className="mt-5 grid gap-4">
        <label className="block">
          <span className={label}>Meno a priezvisko *</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={label}>E-mail *</span>
            <input name="email" type="email" required autoComplete="email" className={field} />
          </label>
          <label className="block">
            <span className={label}>Telefón *</span>
            <input name="phone" type="tel" required autoComplete="tel" className={field} />
          </label>
        </div>
        <label className="block">
          <span className={label}>Ulica a číslo *</span>
          <input name="street" required autoComplete="street-address" className={field} />
        </label>
        <label className="block">
          <span className={label}>PSČ a obec *</span>
          <input name="city" required autoComplete="address-level2" className={field} />
        </label>
        <label className="block">
          <span className={label}>Poznámka</span>
          <textarea name="note" rows={3} className={`${field} resize-y`} />
        </label>
        <label className="flex items-start gap-3 text-sm leading-relaxed">
          <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 flex-none accent-[var(--primary)]" />
          <span>
            Súhlasím s{" "}
            <Link href="/obchodne-podmienky" className="font-semibold text-primary underline">
              obchodnými podmienkami
            </Link>{" "}
            a so spracovaním údajov na vybavenie dopytu.
          </span>
        </label>
      </div>

      {state.status === "invalid" && (
        <p role="alert" className="mt-4 rounded-lg bg-[#fde8e8] px-4 py-3 text-sm font-semibold text-[#9b1c1c]">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-primary mt-5 w-full rounded-lg px-5 py-4 font-bold disabled:opacity-60"
      >
        {pending ? "Odosielam…" : "Odoslať nezáväzný dopyt"}
      </button>
    </form>
  );
}
