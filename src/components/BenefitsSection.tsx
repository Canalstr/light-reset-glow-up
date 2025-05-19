
import React from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      title: t("benefit1.title"),
      description: t("benefit1.desc"),
      icon: "scale"
    },
    {
      title: t("benefit2.title"),
      description: t("benefit2.desc"),
      icon: "clock"
    },
    {
      title: t("benefit3.title"),
      description: t("benefit3.desc"),
      icon: "energy"
    },
    {
      title: t("benefit4.title"),
      description: t("benefit4.desc"),
      icon: "sleep"
    },
    {
      title: t("benefit5.title"),
      description: t("benefit5.desc"),
      icon: "metabolism"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-light-yellow rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-light-peach rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">{t("benefits.of")}</h2>
        <p className="section-description">
          {t("experience.benefits")}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-light-orange rounded-full flex items-center justify-center mr-3">
                  <Check className="h-5 w-5 text-bright-orange" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto bg-light-yellow rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">{t("without.changing")}</h3>
          <p className="text-gray-700">
            {t("light.reset.works")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
