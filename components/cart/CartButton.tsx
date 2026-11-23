"use client";

import { useCart } from "@/components/cart/CartProvider";
import { CartIcon } from "@/components/ui/Icons";
import { pluralItems } from "@/lib/format";

export function CartButton() {
  const { count, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Košík, ${pluralItems(count)}`}
      className="btn-gloss inline-flex h-11 items-center gap-2 rounded-full px-5 font-bold"
    >
      <CartIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Košík</span>
      {count > 0 && (
        <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1.5 text-xs font-bold text-primary">
          {count}
        </span>
      )}
    </button>
  );
}
