
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PurchaseSection: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    t("feature1"),
    "Personalized Light Timing Recommendations",
    "Daily Implementation Guides",
    "Progress Tracking Templates",
    "Troubleshooting Resources",
    "Germany-Specific Light Recommendations",
    "Lifetime Access to All Materials"
  ];

  const handlePurchase = () => {
    // Using the provided Whop checkout link
    window.open("https://whop.com/checkout/plan_GwZw1m66mgm6Q/", "_blank");
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-light-yellow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-sun-yellow opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">{t("start.journey")}</h2>
        <p className="section-description">
          {t("invest.in")}
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-7/12 p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">{t("complete.system")}</h3>
                  <p className="text-gray-600 mb-6">
                    {t("everything.you.need")}
                  </p>
                  
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
                      <span className="font-semibold">Our Satisfaction Promise:</span> If you don't notice significant 
                      improvements in your energy and focus levels within 14 days, we'll work with you to adjust 
                      your protocol or provide a full refund.
                    </p>
                  </div>
                </div>
                
                <div className="w-full md:w-5/12 bg-gradient-to-br from-bright-orange to-sun-yellow p-6 md:p-8 text-white flex flex-col justify-center">
                  <div className="text-center">
                    <p className="text-2xl mb-1">{t("special.launch")}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">32 EUR</span>
                      <span className="text-sm"> {t("one.time")}</span>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm opacity-80 mb-1">{t("regular.price")} <span className="line-through">87 EUR</span></p>
                      <p className="inline-block bg-white text-bright-orange px-3 py-1 rounded-full text-sm font-semibold">
                        Save 55 EUR Today
                      </p>
                    </div>
                    
                    <Button 
                      onClick={handlePurchase} 
                      className="w-full bg-white text-bright-orange hover:bg-light-yellow hover:text-bright-orange text-lg py-6"
                    >
                      {t("start.your")}
                    </Button>
                    
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
