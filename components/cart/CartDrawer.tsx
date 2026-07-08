"use client";

import { useEffect } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice, pluralItems } from "@/lib/format";
import { CloseIcon, TrashIcon, ArrowRightIcon } from "@/components/ui/Icons";

export function CartDrawer() {
  const { lines, total, isOpen, closeCart, removeItem, setQuantity } = useCart();

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
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-[#0d1f38]/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Košík"
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <h2 className="font-display text-lg font-semibold">Košík</h2>
            <p className="text-sm text-muted">
              {lines.length === 0 ? "Zatiaľ prázdny" : pluralItems(lines.length)}
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Zavrieť košík"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </header>

        {/* Lines */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-muted">
                V košíku zatiaľ nič nie je.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                Pokračovať vo výbere
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {lines.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center rounded-md border border-border bg-surface text-[10px] font-medium text-muted">
                    {product.code}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      {product.name}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">
                      {formatPrice(product.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="inline-flex items-center rounded-md border border-border">
                        <button
                          type="button"
                          aria-label="Znížiť množstvo"
                          onClick={() => setQuantity(product.id, quantity - 1)}
                          className="h-7 w-7 text-muted transition-colors hover:text-foreground"
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-sm">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Zvýšiť množstvo"
                          onClick={() => setQuantity(product.id, quantity + 1)}
                          className="h-7 w-7 text-muted transition-colors hover:text-foreground"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        aria-label="Odstrániť z košíka"
                        className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-foreground"
                      >
                        <TrashIcon className="h-3.5 w-3.5" />
                        Odstrániť
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <footer className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Spolu</span>
              <span className="font-display text-xl font-semibold">
                {formatPrice(total)}
              </span>
            </div>
            <p className="mt-3 rounded-md bg-surface px-3 py-2.5 text-xs leading-relaxed text-muted">
              Po odoslaní objednávky vám pošleme potvrdenie s platobnými údajmi.
            </p>
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Pokračovať k objednávke
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
