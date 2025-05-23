
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const PurchaseSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  const features = [
    "Kompletter 7-Tage Licht-Sprint [7 Video Lektionen + PDF Workbook]",
    "Community Chat",
    "Persönliche Licht Timing Empfehlungen",
    "Tägliche Umsetzungsguides",
    "Progress Tracker Muster",
    "Troubleshooting Resourcen",
    "Deutschlandspezifische Lichtempfehlungen"
  ];

  const handlePurchase = () => {
    if (acceptedTerms) {
      window.open("https://buy.stripe.com/4gM00k7Ti9Yj2rya1jdZ601", "_blank");
    } else {
      alert(language === "de" ? 
        "Bitte akzeptieren Sie die Bedingungen zum Widerrufsrecht." : 
        "Please accept the terms regarding the right of withdrawal.");
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-light-yellow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-sun-yellow opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">{language === "de" ? "Starte deinen Light Sprint heute" : t("start.journey")}</h2>
        <p className="section-description">
          {t("invest.in")}
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-6 md:p-8 bg-white">
                  <h3 className="text-2xl font-bold mb-4">{language === "de" ? "Das komplette Licht Sprint System" : t("complete.system")}</h3>
                  
                  <div className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-bright-orange mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-light-peach p-4 rounded-lg mb-6">
                    <p className="text-sm">
                      <span className="font-semibold">{language === "de" ? "7-Tage-Ergebnis-Versprechen:" : "Our Satisfaction Promise:"}</span>{" "}
                      <span>Bezwing deinen Morgen-Zombie in 7 Tagen </span>
                      <Link to="/garantie" className="text-bright-orange hover:underline">
                        – oder kassier einen 20-Min 1-zu-1 Analyse-Call 🎁
                      </Link>
                    </p>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 bg-gradient-to-br from-bright-orange to-sun-yellow p-6 md:p-8 text-white">
                  <div className="text-center">
                    <p className="text-xl mb-2">{language === "de" ? "Spezieller Einführungspreis" : t("special.launch")}</p>
                    <h2 className="text-3xl font-bold mb-4">€27 <span className="text-lg">(-94%)</span></h2>
                    
                    <table className="w-full text-left mb-6 bg-white/10 rounded-lg overflow-hidden">
                      <thead>
                        <tr>
                          <th colSpan={3} className="text-left p-3 bg-white/20">Dein heutiges Paket für €27:</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3">„Sprint-Prep" Checkliste PDF</td>
                          <td className="p-3"><i>sofort</i></td>
                          <td className="p-3 text-right"><b>€19</b></td>
                        </tr>
                        <tr>
                          <td className="p-3">Completion-Call Garantie</td>
                          <td className="p-3"><i>sofort</i></td>
                          <td className="p-3 text-right"><b>€297</b></td>
                        </tr>
                        <tr className="bg-yellow-50/20">
                          <td className="p-3 font-bold">WERT HEUTE (Systemzugang & Orientierung)</td>
                          <td></td>
                          <td className="p-3 text-right font-bold">€459</td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <div className="flex items-start space-x-2 mt-6 mb-4 bg-white/10 p-3 rounded-lg">
                      <Checkbox 
                        id="terms" 
                        checked={acceptedTerms}
                        onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                        className="mt-1 bg-white border-white"
                      />
                      <label htmlFor="terms" className="text-sm text-left">
                        Ich verlange die sofortige Bereitstellung digitaler Inhalte und verliere mein 14-tägiges Widerrufsrecht (§ 356 Abs 5 BGB).
                      </label>
                    </div>
                    
                    <Button 
                      onClick={handlePurchase}
                      disabled={!acceptedTerms}
                      className="w-full bg-white text-bright-orange hover:bg-light-yellow hover:text-bright-orange text-lg py-6 mt-4"
                    >
                      {t("start.your")}
                    </Button>
                    
                    <div className="mt-4 text-sm flex flex-wrap justify-center gap-3">
                      <Link to="/agb" className="text-white hover:underline">AGB</Link>
                      <span>·</span>
                      <Link to="/widerruf" className="text-white hover:underline">Widerruf</Link>
                      <span>·</span>
                      <Link to="/datenschutz" className="text-white hover:underline">Datenschutz</Link>
                      <span>·</span>
                      <Link to="/garantie" className="text-white hover:underline">Ergebnis-Garantie</Link>
                    </div>
                    
                    <p className="mt-4 text-sm opacity-80">
                      {t("secure.payment")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
