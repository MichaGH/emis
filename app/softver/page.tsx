import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Softvér — EMIS",
};

export default function SoftwarePage() {
  return (
    <PagePlaceholder
      eyebrow="Softvér"
      title="Účtovný softvér"
      description="Súčasťou histórie EMIS je aj vlastný účtovný program. Informácie o jeho dostupnosti, verzii a podpore doplníme po dodaní aktuálnych podkladov."
    />
  );
}
