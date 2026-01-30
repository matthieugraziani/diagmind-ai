import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import SocietalImpactSection from "@/components/SocietalImpactSection";
import TechnologySection from "@/components/TechnologySection";
import RoadmapSection from "@/components/RoadmapSection";
import CybersecuritySection from "@/components/CybersecuritySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Watermark />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <HowItWorksSection />
          <AdvantagesSection />
          <SocietalImpactSection />
          <TechnologySection />
          <RoadmapSection />
          <CybersecuritySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
