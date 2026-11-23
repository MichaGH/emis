"use client";

import type { Product } from "@/lib/types";
import { useCart } from "@/components/cart/CartProvider";
import { CartIcon } from "@/components/ui/Icons";

export function AddToCartButton({
  product,
  size = "md",
  className = "",
}: {
  product: Product;
  size?: "md" | "lg";
  className?: string;
}) {
  const { addItem } = useCart();
  const pad = size === "lg" ? "px-8 py-4 text-base" : "px-5 py-3 text-[15px]";

  if (!product.available) {
    return (
      <span
        className={`btn-light inline-flex items-center justify-center rounded-lg font-bold ${pad} ${className}`}
      >
        Na dopyt
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      className={`btn-primary inline-flex items-center justify-center gap-2 rounded-lg font-bold ${pad} ${className}`}
    >
      <CartIcon className="h-[18px] w-[18px]" />
      Do košíka
    </button>
  );
}
