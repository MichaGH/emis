import type { Metadata } from "next";
import { ContactSection } from "@/components/homepage/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt — EMIS",
};

export default function ContactPage() {
  return <ContactSection />;
}
