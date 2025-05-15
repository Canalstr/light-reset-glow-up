
import React from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SocialProofSection: React.FC = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: "Johanna K.",
      location: "Munich",
      quote: t("fatima.quote"),
      stars: 5,
      result: "Better focus & energy in 4 weeks"
    },
    {
      name: "Lisa M.",
      location: "Berlin",
      quote: t("layla.quote"),
      stars: 5,
      result: "Improved sleep in 5 weeks"
    },
    {
      name: "Nina S.",
      location: "Hamburg",
      quote: t("nour.quote"),
      stars: 4,
      result: "Enhanced productivity in 5 weeks"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-light-peach">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t("hear.from")}</h2>
        <p className="section-description">
          {t("saudi.women")}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="bg-white p-6">
                <div className="flex mb-2">
                  {Array(testimonial.stars).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sun-yellow text-sun-yellow" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="bg-light-orange px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-4 text-sm text-gray-500">
          <p>{t("results.vary")}</p>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">{t("scientific.background")}</h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              {t("research1")}
            </p>
            <p className="text-gray-700">
              {t("research2")}
            </p>
            <p className="text-gray-700">
              {t("research3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
