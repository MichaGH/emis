import type { Metadata } from "next";
import { ContactSection } from "@/components/homepage/ContactSection";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Kontakt — EMIS",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Kontakt"
        title="Kontakt"
        lead="Objednávky, otázky k výrobe koloidného striebra, servis aj zákazkový vývoj — všetko vybavíte na jednom čísle."
      />
      <ContactSection />
    </>
  );
}
