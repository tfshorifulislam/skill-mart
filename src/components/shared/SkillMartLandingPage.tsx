import React from "react";
import HeroSection from "./HeroSection";
import TrustStatsSection from "./TrustStatsSection";
import CategorySection from "./CategorySection";
import FeaturedSkills from "./FeaturedSkills";
import BecomeInstructor from "./BecomeInstructor";
import BenefitsSection from "./BenefitsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function SkillMartLandingPage() {
  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans antialiased min-h-screen flex flex-col">
      <main className="grow">
        <HeroSection />
        <TrustStatsSection />
        <CategorySection />
        <FeaturedSkills />
        <BecomeInstructor />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
