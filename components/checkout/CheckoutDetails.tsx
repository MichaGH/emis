"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";
import { useHydrated } from "@/components/checkout/useHydrated";
import { InquiryForm } from "@/components/cart/InquiryForm";
import { formatPrice } from "@/lib/format";
import { ProductMedia } from "@/components/product/ProductMedia";

// Krok 2 — formulár s údajmi a vedľa prehľad objednávky.
export function CheckoutDetails() {
  const { lines, total, clear } = useCart();
  const hydrated = useHydrated();
  const router = useRouter();
  const [sent, setSent] = useState(false);

  if (!hydrated || sent) return <div className="h-64" aria-busy="true" />;

  if (lines.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center">
        <p className="text-xl font-bold">Košík je prázdny</p>
        <Link href="/produkty" className="btn-primary mt-6 inline-flex rounded-lg px-6 py-3.5 font-bold">
          Prejsť na produkty
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
      <InquiryForm
        lines={lines}
        onSent={() => {
          setSent(true);
          clear();
          router.push("/objednavka/odoslane");
        }}
      />

      <aside className="rounded-xl bg-white p-6 lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)]">
        <div className="flex items-center justify-between">
          <p className="font-bold">Vaša objednávka</p>
          <Link href="/objednavka" className="text-sm font-semibold text-primary hover:underline">
            Upraviť
          </Link>
        </div>
        <ul className="mt-4 divide-y divide-border">
          {lines.map(({ product, quantity }) => (
            <li key={product.id} className="flex items-center gap-4 py-3">
              <ProductMedia
                product={product}
                sizes="64px"
                className="h-14 w-16 flex-none rounded-md"
                drawingClassName="h-[85%] w-[85%]"
              />
              <div className="min-w-0 flex-1">
                <p className="font-bold">{product.code}</p>
                <p className="text-sm">{quantity} ks</p>
              </div>
              <p className="font-semibold">{formatPrice(product.price * quantity)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex items-baseline justify-between border-t border-border pt-4">
          <span className="font-semibold">Spolu s DPH</span>
          <span className="text-xl font-extrabold">{formatPrice(total)}</span>
        </div>
      </aside>
    </div>
  );
}
