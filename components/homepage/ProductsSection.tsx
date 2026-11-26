import Link from "next/link";
import { CONTAINER } from "@/constants";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function ProductsSection() {
  return (
    <section id="eshop" className="scroll-mt-20 bg-white">
      <div className={`${CONTAINER} py-20 lg:py-28`}>
        {/* Veľký nadpis na jeden riadok, pod ním podnadpis a odkaz — na stred */}
        <div className="border-b border-border pb-10 text-center">
          <h2 className="text-[3.25rem] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">
            Generátory <span className="text-primary">GKS</span>
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-2xl font-semibold leading-snug tracking-[-0.01em] sm:text-3xl lg:text-[2.25rem]">
            Elektródy z 99,99 % striebra s certifikátom výrobcu sú súčasťou
            balenia.
          </p>
          <Link
            href="/produkty"
            className="mt-7 inline-flex items-center gap-2 text-lg font-bold text-primary hover:underline sm:text-xl"
          >
            Porovnať modely
            <ArrowRightIcon className="h-5 w-5" />
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
