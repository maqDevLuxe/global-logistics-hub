import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import SupplyChainSection from "@/components/home/SupplyChainSection";
import AIFreightSection from "@/components/home/AIFreightSection";
import MetricsSection from "@/components/home/MetricsSection";
import WarehousingSection from "@/components/home/WarehousingSection";
import ComplianceSection from "@/components/home/ComplianceSection";
import AerialPortSection from "@/components/home/AerialPortSection";
import CountersSection from "@/components/home/CountersSection";
import InsightsSection from "@/components/home/InsightsSection";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <SupplyChainSection />
      <AIFreightSection />
      <MetricsSection />
      <WarehousingSection />
      <ComplianceSection />
      <AerialPortSection />
      <CountersSection />
      <InsightsSection />
      <SustainabilitySection />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
