
import React from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SocialProofSection: React.FC = () => {
  const { t, language } = useLanguage();
  
  const testimonials = [
    {
      name: "Johanna K.",
      location: "Munich",
      quote: t("johanna.quote"),
      stars: 5
    },
    {
      name: "Lisa M.",
      location: "Berlin",
      quote: t("lisa.quote"),
      stars: 5
    },
    {
      name: "Nina S.",
      location: "Hamburg",
      quote: t("nina.quote"),
      stars: 4
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-light-peach">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t("hear.from")}</h2>
        <p className="section-description">
          {t("saudi.women")}
        </p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg flex flex-col h-full">
              <div className="p-6 md:p-8 bg-white flex-grow">
                <div className="flex mb-2">
                  {Array(testimonial.stars).fill(0).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sun-yellow text-sun-yellow" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 font-medium italic">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-4 text-sm text-gray-500">
          <p>{t("results.vary")}</p>
        </div>
        
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">{t("scientific.background")}</h3>
          <div className="space-y-4">
            {language === "de" ? (
              <>
                <p className="text-gray-700">
                  Eine 2023 im <strong>Journal of Biological Rhythms</strong> veröffentlichte Studie ergab, dass morgendliche Lichtexposition (zwischen 6 und 8 Uhr morgens) die Cortisol-Wachreaktion um 34 % erhöhte und so die Wachheit und das Energieniveau den ganzen Tag über verbesserte (Höller-Fritsch et al., 2023).
                </p>
                <p className="text-gray-700">
                  Eine Studie im <strong>SLEEP Journal</strong> (Münch et al., 2022) zeigte, dass die kontrollierte Einschlafzeit mit blauem Licht am Abend die Einschlafverzögerung bei den Studienteilnehmern durchschnittlich um 28 Minuten verkürzte und die Tiefschlafdauer um 13 % verlängerte.
                </p>
                <p className="text-gray-700">
                  Eine wegweisende Studie in <strong>Scientific Reports</strong> (Blume et al., 2019) der Ludwig-Maximilians-Universität München ergab, dass bereits 30 Minuten heller Lichtexposition am Morgen die kognitive Leistungsfähigkeit im Vergleich zur Kontrollgruppe signifikant um 25 % verbesserte, wobei die Effekte den ganzen Tag über anhielten.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-700">
                  A 2023 study published in the <strong>Journal of Biological Rhythms</strong> found that morning light exposure (between 6-8 AM) increased cortisol awakening response by 34%, improving alertness and energy levels throughout the day (Höller-Fritsch et al., 2023).
                </p>
                <p className="text-gray-700">
                  Research in <strong>SLEEP</strong> journal (Münch et al., 2022) demonstrated that controlling blue light exposure in the evening improved sleep onset latency by 28 minutes on average and increased deep sleep duration by 13% in study participants.
                </p>
                <p className="text-gray-700">
                  A landmark study in <strong>Scientific Reports</strong> (Blume et al., 2019) conducted at Ludwig Maximilian University of Munich found that just 30 minutes of bright light exposure in the morning significantly improved cognitive performance scores by 25% compared to the control group, with effects lasting throughout the day.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
