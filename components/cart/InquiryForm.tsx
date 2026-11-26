"use client";

import { useActionState } from "react";
import Link from "next/link";
import { sendInquiry, type InquiryState } from "@/app/actions/inquiry";
import type { CartLine } from "@/components/cart/CartProvider";
import { MailIcon } from "@/components/ui/Icons";

const field =
  "mt-1.5 w-full rounded-lg border border-black/10 bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-[#7a8494] focus:border-primary focus:bg-white";
const label = "text-sm font-bold";

// Nezáväzný dopyt — bez platby. Predávajúci zákazníka kontaktuje
// s platobnými údajmi a termínom dodania.
export function InquiryForm({
  lines,
  onSent,
}: {
  lines: CartLine[];
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
      <div className="rounded-xl bg-white p-6 sm:p-8">
        <p className="text-xl font-bold">Dokončite dopyt e-mailom</p>
        <p className="mt-2 leading-relaxed">
          {state.status === "error"
            ? state.message
            : "Online odosielanie zatiaľ nie je zapnuté."}{" "}
          Pripravili sme vám hotový e-mail so všetkými údajmi — stačí ho
          odoslať.
        </p>
        <a
          href={state.mailto}
          className="btn-primary mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 font-bold"
        >
          <MailIcon className="h-5 w-5" />
          Otvoriť e-mail s dopytom
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-xl bg-white p-6 sm:p-8">
      <p className="text-xl font-bold">Kontaktné údaje a adresa</p>
      <p className="mt-1 leading-relaxed">
        Dopyt je nezáväzný. Ozveme sa vám s platobnými údajmi a termínom
        dodania.
      </p>

      <input type="hidden" name="items" value={items} />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className={label}>Meno a priezvisko *</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className={label}>E-mail *</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block">
          <span className={label}>Telefón *</span>
          <input name="phone" type="tel" required autoComplete="tel" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Ulica a číslo *</span>
          <input name="street" required autoComplete="street-address" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>PSČ a obec *</span>
          <input name="city" required autoComplete="address-level2" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Poznámka</span>
          <textarea name="note" rows={3} className={`${field} resize-y`} />
        </label>
        <label className="flex items-start gap-3 text-sm leading-relaxed sm:col-span-2">
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
        <p role="alert" className="mt-5 rounded-lg bg-[#fde8e8] px-4 py-3 text-sm font-semibold text-[#9b1c1c]">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-primary mt-6 w-full rounded-lg px-6 py-4 font-bold disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Odosielam…" : "Odoslať nezáväzný dopyt"}
      </button>
    </form>
  );
}
