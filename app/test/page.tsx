import type { Metadata } from "next";
import { HeroImageTester } from "@/components/dev/HeroImageTester";

// Testovacia stránka na výber fotky do úvodnej sekcie. Nie je v navigácii
// a nemá sa indexovať.
export const metadata: Metadata = {
  title: "Test — fotky do úvodnej sekcie | EMIS",
  robots: { index: false, follow: false },
};

export default function HeroTestPage() {
  return <HeroImageTester />;
}
