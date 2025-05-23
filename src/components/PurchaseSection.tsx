
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
                <div className="w-full md:w-7/12 p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">{language === "de" ? "Das komplette Licht Sprint System" : t("complete.system")}</h3>
                  <p className="text-gray-600 mb-6">
                    {language === "de" ? "Alles was du brauchst, um deine Energie und Schlafqualität zu verbessern" : t("everything.you.need")}
                  </p>
                  
                  <table style={{width:"100%", maxWidth:"480px", borderCollapse:"collapse", fontSize:"15px", margin:"16px 0"}}>
                    <tr><th colSpan={3} style={{textAlign:"left", paddingBottom:"8px"}}>Dein heutiges Paket für €27:</th></tr>
                    <tr><td>„Sprint-Prep" Checkliste PDF</td><td><i>sofort</i></td><td style={{textAlign:"right"}}><b>€19</b></td></tr>
                    <tr><td>Completion-Call Garantie</td><td><i>sofort</i></td><td style={{textAlign:"right"}}><b>€297</b></td></tr>
                    <tr style={{background:"#ffe"}}><td><b>WERT HEUTE (Systemzugang & Orientierung)</b></td><td></td><td style={{textAlign:"right"}}><b>€459</b></td></tr>
                  </table>
                  
                  <h2>DEIN PREIS JETZT <i>€27</i> (-94 %)</h2>
                  
                  <div className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-bright-orange mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-light-peach p-4 rounded-lg text-center mb-6">
                    <p className="text-sm">
                      <span className="font-semibold">{language === "de" ? "Unser Zufriedenheitsversprechen:" : "Our Satisfaction Promise:"}</span> {language === "de" 
                      ? "Wenn Du innerhalb von 7 Tagen keine signifikanten Verbesserungen deiner Energie und Konzentration bemerkst, arbeiten wir mit dir an der Anpassung deines Protokolls oder erstatten dir den vollen Betrag zurück." 
                      : "If you don't notice significant improvements in your energy and focus levels within 7 days, we'll work with you to adjust your protocol or provide a full refund."}
                    </p>
                  </div>
                </div>
                
                <div className="w-full md:w-5/12 bg-gradient-to-br from-bright-orange to-sun-yellow p-6 md:p-8 text-white flex flex-col justify-center">
                  <div className="text-center">
                    <p className="text-2xl mb-1">{language === "de" ? "Spezieller Einführungspreis" : t("special.launch")}</p>
                    
                    <p style={{fontSize:"12px"}}>
                      ☑ Ich verlange die sofortige Bereitstellung digitaler Inhalte und verliere mein 14-tägiges Widerrufsrecht (§ 356 Abs 5 BGB).
                    </p>
                    
                    <Button 
                      onClick={() => window.open("https://buy.stripe.com/4gM00k7Ti9Yj2rya1jdZ601", "_blank")} 
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
                      <Link to="/garantie.html" className="text-white hover:underline">Ergebnis-Garantie</Link>
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
