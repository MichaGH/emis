"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { useHydrated } from "@/components/checkout/useHydrated";
import { formatPrice } from "@/lib/format";
import { ProductMedia } from "@/components/product/ProductMedia";
import { ArrowRightIcon, MinusIcon, PlusIcon, TrashIcon } from "@/components/ui/Icons";

// Krok 1 — prehľad košíka s úpravou počtu kusov.
export function CartReview() {
  const { lines, total, setQuantity, removeItem } = useCart();
  const hydrated = useHydrated();

  if (!hydrated) return <div className="h-64" aria-busy="true" />;

  if (lines.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center">
        <p className="text-xl font-bold">Košík je prázdny</p>
        <p className="mt-2">Vyberte si generátor alebo príslušenstvo.</p>
        <Link href="/produkty" className="btn-primary mt-6 inline-flex rounded-lg px-6 py-3.5 font-bold">
          Prejsť na produkty
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
      <ul className="divide-y divide-border overflow-hidden rounded-xl bg-white">
        {lines.map(({ product, quantity }) => (
          <li key={product.id} className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center">
            <Link href={`/produkty/${product.slug}`} className="flex-none">
              <ProductMedia
                product={product}
                sizes="140px"
                className="aspect-[4/3] w-full rounded-lg sm:w-36"
                drawingClassName="h-[85%] w-[85%]"
              />
            </Link>
            <div className="min-w-0 flex-1">
              <Link href={`/produkty/${product.slug}`} className="text-lg font-bold hover:text-primary">
                {product.code}
              </Link>
              <p>{product.name}</p>
              <p className="mt-1 text-sm">{formatPrice(product.price)} / ks</p>
            </div>
            <div className="flex items-center justify-between gap-6 sm:justify-end">
              <div className="inline-flex items-center rounded-lg bg-surface">
                <button
                  type="button"
                  aria-label="Znížiť množstvo"
                  onClick={() => setQuantity(product.id, quantity - 1)}
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button
                  type="button"
                  aria-label="Zvýšiť množstvo"
                  onClick={() => setQuantity(product.id, quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
              <p className="w-24 text-right text-lg font-bold">{formatPrice(product.price * quantity)}</p>
              <button
                type="button"
                onClick={() => removeItem(product.id)}
                aria-label={`Odstrániť ${product.code}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-surface"
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <aside className="rounded-xl bg-white p-6">
        <div className="flex items-baseline justify-between">
          <span className="font-semibold">Spolu s DPH</span>
          <span className="text-2xl font-extrabold">{formatPrice(total)}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed">
          Objednávka je nezáväzný dopyt — nič neplatíte vopred. Ozveme sa vám
          s platobnými údajmi a termínom dodania.
        </p>
        <Link
          href="/objednavka/udaje"
          className="btn-primary mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-4 font-bold"
        >
          Pokračovať na údaje
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <Link href="/produkty" className="mt-3 block text-center text-sm font-semibold hover:text-primary">
          Pokračovať vo výbere
        </Link>
      </aside>
    </div>
  );
}
