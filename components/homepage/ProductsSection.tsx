import Link from "next/link";
import { CONTAINER } from "@/constants";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function ProductsSection() {
  return (
    <section id="eshop" className="scroll-mt-20 bg-white">
      <div className={`${CONTAINER} py-20 lg:py-28`}>
        {/* Veľký nadpis na jeden riadok, pod ním podnadpis a odkaz na porovnanie */}
        <h2 className="text-[3.25rem] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">
          Generátory <span className="text-primary">GKS</span>
        </h2>
        <div className="mt-6 flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-xl font-medium leading-snug sm:text-2xl">
            Elektródy z 99,99 % striebra s certifikátom výrobcu sú súčasťou
            balenia.
          </p>
          <Link
            href="/produkty"
            className="inline-flex flex-none items-center gap-2 font-bold text-primary hover:underline"
          >
            Porovnať modely
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
