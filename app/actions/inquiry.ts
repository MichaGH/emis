"use server";

import { SITE } from "@/constants";
import { products } from "@/data/products";

// Nezáväzný dopyt z košíka. Platba sa neprenáša — predávajúci zákazníka
// kontaktuje s platobnými údajmi. Odoslanie e-mailom cez Resend
// (https://resend.com), ak sú nastavené premenné prostredia:
//   RESEND_API_KEY  — API kľúč
//   INQUIRY_TO      — kam dopyty chodia (predvolene e-mail z constants)
//   INQUIRY_FROM    — odosielateľ, napr. "EMIS <dopyt@emis.sk>" (overená doména v Resend)
// Bez nich formulár nič nepredstiera a ponúkne odoslanie cez e-mail zákazníka.

export type InquiryState =
  | { status: "idle" }
  | { status: "invalid"; message: string }
  | { status: "sent" }
  | { status: "error"; message: string; mailto: string }
  | { status: "not-configured"; mailto: string };

type Line = { id: string; quantity: number };

const text = (v: FormDataEntryValue | null) => (typeof v === "string" ? v.trim() : "");

function buildMessage(fields: Record<string, string>, lines: { code: string; name: string; quantity: number }[]) {
  return [
    "Nezáväzný dopyt z webu",
    "",
    "Produkty:",
    ...lines.map((l) => `- ${l.code} ${l.name} — ${l.quantity} ks`),
    "",
    `Meno: ${fields.name}`,
    `E-mail: ${fields.email}`,
    `Telefón: ${fields.phone}`,
    `Adresa: ${fields.street}, ${fields.city}`,
    fields.note ? `Poznámka: ${fields.note}` : "",
  ]
    .filter((l, i, a) => !(l === "" && a[i - 1] === ""))
    .join("\n");
}

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const fields = {
    name: text(formData.get("name")),
    email: text(formData.get("email")),
    phone: text(formData.get("phone")),
    street: text(formData.get("street")),
    city: text(formData.get("city")),
    note: text(formData.get("note")),
  };

  if (!fields.name || !fields.email || !fields.phone || !fields.street || !fields.city) {
    return { status: "invalid", message: "Vyplňte prosím všetky povinné údaje." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return { status: "invalid", message: "E-mailová adresa nie je v správnom tvare." };
  }
  if (formData.get("consent") !== "on") {
    return { status: "invalid", message: "Potvrďte prosím súhlas s obchodnými podmienkami." };
  }

  // Položky berieme z katalógu podľa id — nič z prehliadača sa nepreberá naslepo.
  let parsed: Line[] = [];
  try {
    parsed = JSON.parse(text(formData.get("items")) || "[]");
  } catch {
    parsed = [];
  }
  const lines = parsed
    .map((l) => {
      const product = products.find((p) => p.id === l.id);
      const quantity = Math.min(Math.max(Math.floor(Number(l.quantity)), 1), 99);
      return product ? { code: product.code, name: product.name, quantity } : null;
    })
    .filter((l): l is { code: string; name: string; quantity: number } => l !== null);

  if (lines.length === 0) {
    return { status: "invalid", message: "Košík je prázdny." };
  }

  const subject = `Dopyt z webu — ${fields.name}`;
  const body = buildMessage(fields, lines);
  const to = process.env.INQUIRY_TO || SITE.email;
  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM;
  if (!apiKey || !from) {
    return { status: "not-configured", mailto };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to: [to], reply_to: fields.email, subject, text: body }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}`);
    return { status: "sent" };
  } catch {
    return {
      status: "error",
      message: "Dopyt sa nepodarilo odoslať. Skúste to prosím cez e-mail.",
      mailto,
    };
  }
}
