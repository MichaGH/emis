import { HeroSection } from "@/components/homepage/HeroSection";
import { ProductsSection } from "@/components/homepage/ProductsSection";
import { SilverSection } from "@/components/homepage/SilverSection";
import { ReasonsSection } from "@/components/homepage/ReasonsSection";
import { HistorySection } from "@/components/homepage/HistorySection";
import { ElectronicsSection } from "@/components/homepage/ElectronicsSection";
import { ContactSection } from "@/components/homepage/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <SilverSection />
      <ReasonsSection />
      <HistorySection />
      <ElectronicsSection />
      <ContactSection />
    </>
  );
}
