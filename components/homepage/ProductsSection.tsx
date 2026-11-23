import { CONTAINER } from "@/constants";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function ProductsSection() {
  return (
    <section id="eshop" className="scroll-mt-20 bg-white">
      <div className={`${CONTAINER} py-20 lg:py-28`}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Generátory koloidného striebra
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground">
            Prístroje na výrobu koloidného striebra doma. Elektródy z 99,99 %
            striebra s certifikátom výrobcu sú súčasťou balenia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
