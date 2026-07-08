"use client";

import type { Product } from "@/lib/types";
import { useCart } from "@/components/cart/CartProvider";
import { PlusIcon } from "@/components/ui/Icons";

export function AddToCartButton({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const { addItem } = useCart();

  if (!product.available) {
    return (
      <span className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-muted">
        Na dopyt
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      className={`inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover ${className}`}
    >
      <PlusIcon className="h-4 w-4" />
      Do košíka
    </button>
  );
}
