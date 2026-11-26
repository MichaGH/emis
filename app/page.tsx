import { HeroSection } from "@/components/homepage/HeroSection";
import { ProductsSection } from "@/components/homepage/ProductsSection";
import { SilverSection } from "@/components/homepage/SilverSection";
import { NatureSection } from "@/components/homepage/NatureSection";
import { HealthSection } from "@/components/homepage/HealthSection";
import { ElectronicsSection } from "@/components/homepage/ElectronicsSection";
import { AdviceSection } from "@/components/homepage/AdviceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <HealthSection />
      <NatureSection />
      <SilverSection />
      <AdviceSection />
      <ElectronicsSection />
    </>
  );
}
