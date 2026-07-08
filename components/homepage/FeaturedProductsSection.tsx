import Link from "next/link";
import { CONTAINER } from "@/constants";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Tag } from "@/components/ui/Tag";

export function FeaturedProductsSection() {
  return (
    <section id="produkty" className="scroll-mt-20 bg-background">
      <div className={`${CONTAINER} py-20 lg:py-28`}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Tag label="Vybrané produkty" />
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Zariadenia pripravené na objednávku
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Ukážka ponuky. Kompletný sortiment a technické parametre budú
              doplnené podľa podkladov.
            </p>
          </div>
          <Link
            href="/produkty"
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-primary hover:underline"
          >
            Celá ponuka
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
