import { HeroSection } from "@/components/homepage/HeroSection";
import { ProductsSection } from "@/components/homepage/ProductsSection";
import { SilverSection } from "@/components/homepage/SilverSection";
import { NatureSection } from "@/components/homepage/NatureSection";
import { HealthSection } from "@/components/homepage/HealthSection";
import { BenefitsSection } from "@/components/homepage/BenefitsSection";
import { ReasonsSection } from "@/components/homepage/ReasonsSection";
import { ElectronicsSection } from "@/components/homepage/ElectronicsSection";
import { ContactSection } from "@/components/homepage/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <NatureSection />
      <HealthSection />
      <SilverSection />
      <ReasonsSection />
      <BenefitsSection />
      <ElectronicsSection />
      <ContactSection />
    </>
  );
}
