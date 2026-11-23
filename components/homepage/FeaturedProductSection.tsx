import Link from "next/link";
import { CONTAINER } from "@/constants";
import { getProduct } from "@/data/products";
import { featuredCallouts, featuredProductSlug } from "@/data/featured";
import { formatPrice } from "@/lib/format";
import { DeviceIllustration } from "@/components/illustrations/DeviceIllustration";
import { ArrowRightIcon } from "@/components/ui/Icons";

type Callout = (typeof featuredCallouts)[number];

function CalloutItem({ item, n }: { item: Callout; n: number }) {
  const left = item.side === "left";
  return (
    <li className={`flex items-center gap-4 ${left ? "" : "lg:flex-row-reverse"}`}>
      <div className={`min-w-0 ${left ? "lg:text-right" : ""}`}>
        <p className="flex items-center gap-2.5 font-bold leading-tight lg:block">
          <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-xs font-bold text-white lg:hidden">
            {n}
          </span>
          {item.title}
        </p>
        <p className="mt-1 text-[15px] leading-snug text-muted max-lg:pl-[34px]">
          {item.detail}
        </p>
      </div>
      {/* vodiaca čiara k výkresu — iba desktop */}
      <span aria-hidden className="hidden h-px min-w-6 flex-1 bg-foreground/25 lg:block" />
      <span
        aria-hidden
        className="hidden h-7 w-7 flex-none items-center justify-center rounded-full bg-primary text-xs font-bold text-white lg:flex"
      >
        {n}
      </span>
    </li>
  );
}

export function FeaturedProductSection() {
  const product = getProduct(featuredProductSlug);
  if (!product) return null;

  const left = featuredCallouts.filter((c) => c.side === "left");
  const right = featuredCallouts.filter((c) => c.side === "right");
  const number = (item: Callout) => featuredCallouts.indexOf(item) + 1;

  return (
    <section className="bg-surface">
      <div className={`${CONTAINER} py-20 lg:py-24`}>
        <div className="card rounded-[28px] px-5 pb-8 pt-6 sm:px-10 sm:pb-10 sm:pt-8 lg:px-12">
          <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[15px] font-semibold text-primary">
                Celý postup zvládne jeden prístroj
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-[-0.02em] sm:text-[1.75rem]">
                {product.code}
                <span className="font-semibold text-muted"> — {product.name}</span>
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-right leading-tight">
                <span className="block text-xs font-semibold text-muted">s DPH</span>
                <span className="text-2xl font-extrabold">{formatPrice(product.price)}</span>
              </p>
              <Link
                href={`/produkty/${product.slug}`}
                className="btn-primary group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-[15px] font-bold"
              >
                Detail
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="mt-6 grid items-center gap-8 lg:mt-8 lg:grid-cols-[1fr_minmax(0,360px)_1fr] lg:gap-0">
            <ol className="order-2 grid gap-6 sm:grid-cols-2 lg:order-1 lg:grid-cols-1 lg:gap-14">
              {left.map((item) => (
                <CalloutItem key={item.title} item={item} n={number(item)} />
              ))}
            </ol>

            <div className="stage order-1 flex items-center justify-center rounded-2xl p-6 lg:order-2 lg:mx-4">
              <DeviceIllustration
                type={product.illustration}
                label={`${product.code} — ${product.name}`}
                className="h-[240px] w-auto sm:h-[300px]"
              />
            </div>

            <ol className="order-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-14">
              {right.map((item) => (
                <CalloutItem key={item.title} item={item} n={number(item)} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
