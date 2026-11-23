import { HeroSection } from "@/components/homepage/HeroSection";
import { ClientsSection } from "@/components/homepage/ClientsSection";
import { ProductsSection } from "@/components/homepage/ProductsSection";
import { SilverSection } from "@/components/homepage/SilverSection";
import { FeaturedProductSection } from "@/components/homepage/FeaturedProductSection";
import { BenefitsSection } from "@/components/homepage/BenefitsSection";
import { ReasonsSection } from "@/components/homepage/ReasonsSection";
import { ElectronicsSection } from "@/components/homepage/ElectronicsSection";
import { ContactSection } from "@/components/homepage/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ProductsSection />
      <FeaturedProductSection />
      <BenefitsSection />
      <ReasonsSection />
      <ElectronicsSection />
      <SilverSection />
      <ContactSection />
    </>
  );
}
