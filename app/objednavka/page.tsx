import type { Metadata } from "next";
import { CONTAINER } from "@/constants";
import { CheckoutHeader } from "@/components/checkout/CheckoutHeader";
import { CartReview } from "@/components/checkout/CartReview";

export const metadata: Metadata = {
  title: "Košík — EMIS",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <>
      <CheckoutHeader step={1} title="Košík" />
      <section className="bg-surface">
        <div className={`${CONTAINER} py-12 lg:py-16`}>
          <CartReview />
        </div>
      </section>
    </>
  );
}
