import type { Metadata } from "next";
import { CONTAINER } from "@/constants";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ComparisonTable } from "@/components/product/ComparisonTable";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactSection } from "@/components/homepage/ContactSection";

export const metadata: Metadata = {
  title: "Produkty — EMIS",
  description:
    "Generátory koloidného striebra GKS 904, GKS 906 a magnetická miešačka MGM 101.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        crumb="Produkty"
        title="Generátory a príslušenstvo"
        lead="Všetky prístroje navrhujeme a skladáme sami. Ku generátorom dodávame elektródy z 99,99 % striebra s certifikátom výrobcu."
      />

      <section className="bg-surface">
        <div className={`${CONTAINER} py-16 lg:py-20`}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-20">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-2xl font-extrabold">Porovnanie radu GKS</h2>
              <p className="font-medium text-muted">
                GKS 505 a GKS 905 dodávame na objednávku.
              </p>
            </div>
            <ComparisonTable />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
