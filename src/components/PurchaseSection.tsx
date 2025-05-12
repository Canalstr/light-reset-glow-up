
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const PurchaseSection: React.FC = () => {
  const features = [
    "Complete 5-Week Light Reset Protocol",
    "Personalized Light Timing Recommendations",
    "Daily Implementation Guides",
    "Progress Tracking Templates",
    "Troubleshooting Resources",
    "Saudi-Specific Light Recommendations",
    "Lifetime Access to All Materials"
  ];

  const handlePurchase = () => {
    // Replace with actual Whop integration link when available
    window.open("https://whop.com/checkout/your-product-id", "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-light-yellow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-sun-yellow opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Start Your Light Reset Journey Today</h2>
        <p className="section-description">
          Invest in a metabolic transformation that works with your body, not against it
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-7/12 p-8">
                  <h3 className="text-2xl font-bold mb-2">The Complete Light Reset System</h3>
                  <p className="text-gray-600 mb-6">
                    Everything you need to reset your metabolism using light biology
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-bright-orange mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-light-peach p-4 rounded-lg text-center mb-6">
                    <p className="text-sm">
                      <span className="font-semibold">Our Satisfaction Promise:</span> If you don't notice significant 
                      improvements in your energy and hunger levels within 14 days, we'll work with you to adjust 
                      your protocol or provide a full refund.
                    </p>
                  </div>
                </div>
                
                <div className="md:w-5/12 bg-gradient-to-br from-bright-orange to-sun-yellow p-8 text-white flex flex-col justify-center">
                  <div className="text-center">
                    <p className="text-2xl mb-1">Special Launch Price</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">997 SAR</span>
                      <span className="text-sm"> one-time payment</span>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm opacity-80 mb-1">Regular Price: <span className="line-through">1,497 SAR</span></p>
                      <p className="inline-block bg-white text-bright-orange px-3 py-1 rounded-full text-sm font-semibold">
                        Save 500 SAR Today
                      </p>
                    </div>
                    
                    <Button 
                      onClick={handlePurchase} 
                      className="w-full bg-white text-bright-orange hover:bg-light-yellow hover:text-bright-orange text-lg py-6"
                    >
                      Start Your Light Reset Journey
                    </Button>
                    
                    <p className="mt-4 text-sm opacity-80">
                      Secure payment via credit card or Apple Pay
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
