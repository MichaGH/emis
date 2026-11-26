"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice, pluralItems } from "@/lib/format";
import { ProductMedia } from "@/components/product/ProductMedia";
import { InquiryForm } from "@/components/cart/InquiryForm";
import {
  CloseIcon,
  ArrowRightIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  CheckIcon,
} from "@/components/ui/Icons";

export function CartDrawer() {
  const { lines, total, isOpen, closeCart, removeItem, setQuantity, clear } = useCart();
  // Kroky: košík → údaje (nezáväzný dopyt) → potvrdenie
  const [step, setStep] = useState<"cart" | "form" | "sent">("cart");

  const close = () => {
    closeCart();
    if (step !== "cart") setStep("cart");
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={close}
        className={`absolute inset-0 bg-dark/50 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Košík"
      >
        <header className="bg-primary flex items-center justify-between px-6 py-5 text-white">
          <div>
            <h2 className="text-xl font-bold">
              {step === "cart" ? "Košík" : "Nezáväzný dopyt"}
            </h2>
            <p className="text-sm text-white">
              {step === "sent"
                ? "Odoslané"
                : lines.length === 0
                  ? "Zatiaľ prázdny"
                  : pluralItems(lines.length)}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Zavrieť košík"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 transition-colors hover:bg-white/25"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </header>

        {step === "sent" && (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
              <CheckIcon className="h-7 w-7" />
            </span>
            <p className="mt-5 text-xl font-bold">Dopyt sme prijali</p>
            <p className="mt-2 max-w-xs leading-relaxed">
              Ozveme sa vám s platobnými údajmi a termínom dodania.
            </p>
            <button
              type="button"
              onClick={close}
              className="btn-primary mt-6 rounded-lg px-5 py-3 font-semibold"
            >
              Zavrieť
            </button>
          </div>
        )}

        {step === "form" && lines.length > 0 && (
          <div className="flex-1 overflow-y-auto">
            <InquiryForm
              lines={lines}
              onBack={() => setStep("cart")}
              onSent={() => {
                clear();
                setStep("sent");
              }}
            />
          </div>
        )}

        {(step === "cart" || (step === "form" && lines.length === 0)) && (
        <div className="flex-1 overflow-y-auto p-5">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-lg font-medium">V košíku zatiaľ nič nie je.</p>
              <button
                type="button"
                onClick={close}
                className="mt-4 btn-primary rounded-lg px-5 py-3 font-semibold"
              >
                Pokračovať vo výbere
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {lines.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 rounded-xl bg-surface p-3">
                  <ProductMedia
                    product={product}
                    sizes="80px"
                    className="h-20 w-20 flex-none rounded-xl"
                    drawingClassName="h-[85%] w-[85%]"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold">{product.code}</p>
                        <p className="text-sm text-muted">{product.name}</p>
                      </div>
                      <p className="font-bold">
                        {formatPrice(product.price * quantity)}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-lg bg-white">
                        <button
                          type="button"
                          aria-label="Znížiť množstvo"
                          onClick={() => setQuantity(product.id, quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center text-foreground"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="w-6 text-center font-semibold">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Zvýšiť množstvo"
                          onClick={() => setQuantity(product.id, quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center text-foreground"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        aria-label="Odstrániť z košíka"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-white hover:text-foreground"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        )}

        {step === "cart" && lines.length > 0 && (
          <footer className="p-5 pt-0">
            <div className="rounded-xl bg-surface p-5">
              <div className="flex items-baseline justify-between">
                <span className="font-semibold">Spolu s DPH</span>
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(total)}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed">
                Objednávka je nezáväzný dopyt — nič neplatíte vopred. Ozveme sa
                vám s platobnými údajmi a termínom dodania.
              </p>
              <button
                type="button"
                onClick={() => setStep("form")}
                className="btn-primary mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-4 font-bold"
              >
                Pokračovať k dopytu
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </footer>
        )}
      </aside>
    </div>
  );
}
