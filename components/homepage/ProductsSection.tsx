import Link from "next/link";
import { CONTAINER } from "@/constants";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function ProductsSection() {
  return (
    <section id="eshop" className="section-sheen scroll-mt-20">
      <div className={`${CONTAINER} py-20 lg:py-28`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
            E-shop
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Generátory koloidného striebra
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">
            Prístroje na výrobu koloidného striebra doma. Elektródy z 99,99 %
            striebra s certifikátom výrobcu sú súčasťou balenia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[22px] bg-white/70 px-7 py-5 text-center sm:flex-row sm:text-left">
          <p className="font-semibold">
            Potrebujete väčšie množstvo? Modely{" "}
            <span className="text-primary">GKS 505</span> a{" "}
            <span className="text-primary">GKS 905</span> dodávame na
            objednávku.
          </p>
          <Link
            href="/produkty"
            className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
          >
            Porovnať modely
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
