import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "O nás — EMIS",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="O nás"
      title="O firme EMIS"
      description="EMIS sa venuje návrhu a výrobe špecializovaných elektronických zariadení. Podrobnejší popis firmy a jej histórie doplníme po dodaní podkladov."
    />
  );
}
