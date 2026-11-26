import type { Metadata } from "next";
import { CONTAINER } from "@/constants";
import { CheckoutHeader } from "@/components/checkout/CheckoutHeader";
import { CheckoutDetails } from "@/components/checkout/CheckoutDetails";

export const metadata: Metadata = {
  title: "Vaše údaje — EMIS",
  robots: { index: false, follow: false },
};

export default function CheckoutDetailsPage() {
  return (
    <>
      <CheckoutHeader step={2} title="Vaše údaje" />
      <section className="bg-surface">
        <div className={`${CONTAINER} py-12 lg:py-16`}>
          <CheckoutDetails />
        </div>
      </section>
    </>
  );
}
