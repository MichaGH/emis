import type { Metadata } from "next";
import { CONTAINER } from "@/constants";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Produkty — EMIS",
};

export default function ProductsPage() {
  return (
    <section className={`${CONTAINER} py-20`}>
      <Tag label="Produkty" />
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Naša ponuka
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Ukážkový zoznam produktov. Kompletný sortiment a technické parametre
        budú doplnené po dodaní podkladov.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
