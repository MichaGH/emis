import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="shadow-soft shadow-soft-hover group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-background">
      {/* Visual placeholder — PCB style */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-dark-border bg-dark">
        <div className="circuit-texture circuit-light absolute inset-0 opacity-[0.15]" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        <span className="relative rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent backdrop-blur">
          {product.code}
        </span>
        {!product.available && (
          <span className="absolute left-3 top-3 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-dark-muted backdrop-blur">
            Na dopyt
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          {product.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-xl font-semibold">
            {formatPrice(product.price)}
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
