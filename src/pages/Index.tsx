
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VSLSection from "@/components/VSLSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import QuizSection from "@/components/QuizSection";
import CourseOverviewSection from "@/components/CourseOverviewSection";
import PurchaseSection from "@/components/PurchaseSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="priceTimer" className="text-center my-4 font-bold">
        Preis steigt in <span id="ttl">03:54:12</span>
      </div>
      <HeroSection />
      <VSLSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <SocialProofSection />
      <QuizSection />
      <CourseOverviewSection />
      <PurchaseSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
