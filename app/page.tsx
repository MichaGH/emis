import { HeroSlideshow } from "@/components/homepage/HeroSlideshow";
import { ElectronicsSection } from "@/components/homepage/ElectronicsSection";
import { ValuesSection } from "@/components/homepage/ValuesSection";
import { ColloidalSilverSection } from "@/components/homepage/ColloidalSilverSection";
import { NanoparticlesSection } from "@/components/homepage/NanoparticlesSection";
import { FeaturedProductsSection } from "@/components/homepage/FeaturedProductsSection";
import { TrustSection } from "@/components/homepage/TrustSection";
import { SoftwareSection } from "@/components/homepage/SoftwareSection";
import { ContactSection } from "@/components/homepage/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <ElectronicsSection />
      <ValuesSection />
      <ColloidalSilverSection />
      <NanoparticlesSection />
      <FeaturedProductsSection />
      <TrustSection />
      <SoftwareSection />
      <ContactSection />
    </>
  );
}
