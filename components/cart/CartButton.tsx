"use client";

import { useCart } from "@/components/cart/CartProvider";
import { CartIcon } from "@/components/ui/Icons";

export function CartButton({ transparent = false }: { transparent?: boolean }) {
  const { count, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Košík, ${count} položiek`}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors ${
        transparent
          ? "border-white/25 text-white hover:bg-white/10"
          : "border-border text-foreground hover:bg-surface"
      }`}
    >
      <CartIcon className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold text-primary-foreground">
          {count}
        </span>
      )}
    </button>
  );
}
