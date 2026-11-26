import type { Metadata } from "next";
import Link from "next/link";
import { CONTAINER, SITE } from "@/constants";
import { CheckoutHeader } from "@/components/checkout/CheckoutHeader";
import { CheckIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Dopyt odoslaný — EMIS",
  robots: { index: false, follow: false },
};

export default function InquirySentPage() {
  return (
    <>
      <CheckoutHeader step={3} title="Ďakujeme" />
      <section className="bg-surface">
        <div className={`${CONTAINER} py-12 lg:py-16`}>
          <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 text-center sm:p-12">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
              <CheckIcon className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-2xl font-extrabold">Dopyt sme prijali</h2>
            <p className="mt-3 text-lg leading-relaxed">
              Ozveme sa vám s platobnými údajmi a termínom dodania. Ak sa
              chcete na niečo opýtať hneď, volajte {SITE.phone}.
            </p>
            <Link href="/" className="btn-primary mt-8 inline-flex rounded-lg px-6 py-3.5 font-bold">
              Späť na úvod
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
