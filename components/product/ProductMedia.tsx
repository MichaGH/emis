import Image from "next/image";
import type { Product } from "@/lib/types";
import { DeviceIllustration } from "@/components/illustrations/DeviceIllustration";

/**
 * Obrázok produktu. Ak má produkt fotku (`image`), zobrazí ju.
 * Inak dočasne zobrazí výkres prístroja na svetlom „pódiu“.
 */
export function ProductMedia({
  product,
  sizes = "(max-width: 768px) 100vw, 33vw",
  className = "",
  drawingClassName = "h-[74%] w-[74%]",
}: {
  product: Product;
  sizes?: string;
  className?: string;
  drawingClassName?: string;
}) {
  return (
    <div className={`stage relative overflow-hidden ${className}`}>
      {product.image ? (
        <Image
          src={product.image}
          alt={`${product.code} — ${product.name}`}
          fill
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <DeviceIllustration
          type={product.illustration}
          label={`${product.code} — ${product.name}`}
          className={`absolute inset-x-0 bottom-[10%] mx-auto ${drawingClassName}`}
        />
      )}
    </div>
  );
}
