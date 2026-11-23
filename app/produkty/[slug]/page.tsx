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
      <section className="panel-navy text-white">
        <div className={`${CONTAINER} pt-8 lg:pt-10`}>
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
            <span className="inline-block rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white">
              {product.category}
            </span>
            <h1 className="mt-4 text-5xl font-extrabold tracking-[-0.03em] sm:text-6xl">
              {product.code}
            </h1>
            <p className="mt-2 text-xl font-semibold text-dark-muted">{product.name}</p>

            <p className="mt-6 text-lg leading-relaxed text-white/90">
              {product.shortDescription}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {product.keySpecs.map((spec) => (
                <li key={spec.label} className="rounded-lg bg-dark-surface px-4 py-2.5">
                  <span className="text-dark-muted">{spec.label}: </span>
                  <span className="font-bold">{spec.value}</span>
                </li>
              ))}
            </ul>

            <div className="card-gloss mt-8 rounded-[22px] p-6 text-foreground">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-semibold text-muted">Cena s DPH</p>
                  <p className="mt-1 text-4xl font-extrabold text-primary">
                    {formatPrice(product.price)}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#e3f5e9] px-3 py-1.5 text-sm font-semibold text-[#1c7a3e]">
                  <CheckIcon className="h-4 w-4" />
                  {product.available ? "Skladom" : "Na objednávku"}
                </span>
              </div>
              <AddToCartButton product={product} size="lg" className="mt-5 w-full" />
              <a
                href={`tel:${SITE.phoneHref}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-surface px-5 py-3.5 font-semibold hover:bg-surface-strong"
              >
                <PhoneIcon className="h-[18px] w-[18px] text-primary" />
                Poradiť sa: {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`${CONTAINER} grid gap-6 py-16 lg:grid-cols-12 lg:py-24`}>
        <div className="card-gloss rounded-[22px] p-7 sm:p-10 lg:col-span-7">
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
          <div className="panel-blue rounded-[22px] p-7 text-white sm:p-8">
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

      <section className="section-sheen">
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
