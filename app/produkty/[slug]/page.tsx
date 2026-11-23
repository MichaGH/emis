import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONTAINER, SITE } from "@/constants";
import { getProduct, products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { ProductMedia } from "@/components/product/ProductMedia";
import { ProductCard } from "@/components/product/ProductCard";
import { CheckIcon, PhoneIcon } from "@/components/ui/Icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/produkty/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.code} — ${product.name} | EMIS`,
    description: product.shortDescription,
  };
}

export default async function ProductPage(props: PageProps<"/produkty/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((p) => p.id !== product.id);

  return (
    <>
      <section className="bg-dark text-white">
        <div className={`${CONTAINER} pt-[calc(var(--nav-h)+2rem)] lg:pt-[calc(var(--nav-h)+2.5rem)]`}>
          <nav aria-label="Omrvinky" className="text-sm font-semibold">
            <Link href="/" className="text-accent hover:underline">
              Úvod
            </Link>
            <span className="mx-2 text-dark-muted">/</span>
            <Link href="/produkty" className="text-accent hover:underline">
              Produkty
            </Link>
            <span className="mx-2 text-dark-muted">/</span>
            <span>{product.code}</span>
          </nav>
        </div>

        <div className={`${CONTAINER} grid gap-8 pb-16 pt-8 lg:grid-cols-12 lg:gap-12 lg:pb-20`}>
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-3">
              <ProductMedia
                product={product}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="aspect-[4/3] rounded-lg"
                drawingClassName="h-[80%] w-[80%]"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[15px] font-semibold text-accent">{product.category}</p>
            <h1 className="mt-2 text-5xl font-extrabold tracking-[-0.03em] sm:text-6xl">
              {product.code}
            </h1>
            <p className="mt-2 text-xl font-semibold text-dark-muted">{product.name}</p>

            <p className="mt-6 text-lg leading-relaxed text-white/90">
              {product.shortDescription}
            </p>

            <p className="mt-5 text-lg font-semibold">
              {product.keySpecs.map((s) => s.value).join("  ·  ")}
            </p>

            {/* Cena a nákup priamo na tmavom pozadí — bez samostatnej karty */}
            <div className="mt-8 border-t border-white/15 pt-7">
              <div className="flex items-end justify-between gap-4">
                <p>
                  <span className="block text-sm font-semibold text-dark-muted">Cena s DPH</span>
                  <span className="mt-1 block text-4xl font-extrabold tracking-tight">
                    {formatPrice(product.price)}
                  </span>
                </p>
                <span className="inline-flex items-center gap-1.5 pb-1 text-[15px] font-semibold text-[#6fd49a]">
                  <CheckIcon className="h-4 w-4" />
                  {product.available ? "Skladom" : "Na objednávku"}
                </span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-[1.4fr_1fr]">
                <AddToCartButton product={product} size="lg" className="w-full" />
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="btn-outline-light flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold"
                >
                  <PhoneIcon className="h-[18px] w-[18px]" />
                  Poradiť sa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${CONTAINER} grid gap-6 py-16 lg:grid-cols-12 lg:py-24`}>
        <div className="card rounded-[22px] p-7 sm:p-10 lg:col-span-7">
          <h2 className="text-2xl font-extrabold">Popis</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/90">
            {product.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-extrabold">Obsah balenia</h2>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {product.inBox.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-surface px-4 py-3 font-medium"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary text-white">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-primary rounded-[22px] p-7 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">Technické parametre</h2>
            <dl className="mt-6 space-y-2">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-2 gap-4 rounded-lg bg-primary-deep px-4 py-3"
                >
                  <dt className="text-white/80">{spec.label}</dt>
                  <dd className="font-semibold">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 rounded-xl bg-surface p-5 leading-relaxed">
            Koloidné striebro nie je liek. Informácie na tejto stránke popisujú
            prístroj a postup výroby, nie zdravotné účinky.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className={`${CONTAINER} py-16 lg:py-20`}>
          <h2 className="text-3xl font-extrabold">Ďalšie produkty</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
