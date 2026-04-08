import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import TrustSection from "@/app/components/TrustSection";
import ServicesSection from "@/app/components/ServicesSection";
import ProcessSection from "@/app/components/ProcessSection";
import ReferencesSection from "@/app/components/ReferencesSection";
import WhyUsSection from "@/app/components/WhyUsSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import MobileCtaBar from "@/app/components/MobileCtaBar";

export default function HomePage() {
  return (
    <>
      {/* 1. Header */}
      <Navbar />

      <main>
        {/* 2. Hero section */}
        <HeroSection />

        {/* 3. Trust section */}
        <TrustSection />

        {/* 4. Services section */}
        <ServicesSection />

        {/* 5. References section */}
        <ReferencesSection />

        {/* 6. Process section */}
        <ProcessSection />

        {/* 7. Why us section */}
        <WhyUsSection />

        {/* 8. Contact section */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Mobile sticky actions */}
      <MobileCtaBar />
    </>
  );
}
