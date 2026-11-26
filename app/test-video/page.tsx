import type { Metadata } from "next";
import { HeroVideoTester } from "@/components/dev/HeroVideoTester";

// Testovacia stránka — úvodná sekcia o koloidnom striebre s videom v pozadí.
// Nie je v navigácii a nemá sa indexovať.
export const metadata: Metadata = {
  title: "Test — video v úvodnej sekcii | EMIS",
  robots: { index: false, follow: false },
};

export default function HeroVideoTestPage() {
  return <HeroVideoTester />;
}
