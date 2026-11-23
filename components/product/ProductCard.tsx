import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { ProductMedia } from "@/components/product/ProductMedia";

export function ProductCard({ product }: { product: Product }) {
  const href = `/produkty/${product.slug}`;

  return (
    <article className="card-gloss group flex flex-col overflow-hidden rounded-[22px] transition-transform duration-300 hover:-translate-y-1">
      <Link href={href} className="relative block">
        <ProductMedia product={product} className="aspect-[5/4]" />
        <span className="absolute left-5 top-5 text-sm font-bold uppercase tracking-[0.08em] text-primary">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col px-7 pb-7 pt-6">
        <Link href={href} className="block">
          <h3 className="text-[1.75rem] font-extrabold leading-none tracking-tight">
            {product.code}
          </h3>
          <p className="mt-2 text-[17px] font-semibold text-muted">{product.name}</p>
        </Link>

        <p className="mt-4 flex-1 leading-relaxed text-foreground/85">
          {product.shortDescription}
        </p>

        <p className="mt-5 text-[15px] font-semibold text-foreground">
          {product.keySpecs.map((s) => s.value).join("  ·  ")}
        </p>

        <div className="mt-7 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-muted">s DPH</p>
            <p className="text-[1.75rem] font-extrabold leading-none tracking-tight">
              {formatPrice(product.price)}
            </p>
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
