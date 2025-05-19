
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const ThankYou: React.FC = () => {
  // Ensure TikTok pixel fires on component mount
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('CompletePayment');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-yellow to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-light-peach opacity-40 -z-10 rounded-bl-[30%]" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-sun-yellow rounded-full blur-3xl opacity-20 animate-pulse-light" />
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-light-orange rounded-full blur-2xl opacity-30 animate-pulse-light" />

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
          {/* Success icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-sun-yellow to-bright-orange rounded-full flex items-center justify-center">
              <Star size={40} className="text-white fill-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 text-center">
            Zahlung erfolgreich
          </h1>
          
          <div className="mb-8 text-xl text-gray-700 text-center">
            <p className="mb-2">
              Vielen Dank für deine Anmeldung bei <strong className="text-bright-orange">The Light Reset</strong>!
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <Button 
              onClick={() => window.location.href = 'https://lightreset.net'}
              className="btn-primary text-lg py-6 px-10 animate-glow"
            >
              Jetzt starten
            </Button>
          </div>
          
          {/* Additional benefits reminder */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "7-Tage Licht Sprint", desc: "Umfassendes Protokoll, zugeschnitten auf deine Bedürfnisse" },
              { title: "Experten-Unterstützung", desc: "Erhalte Anleitung während deiner gesamten Reise" },
              { title: "Wissenschaftlich fundiert", desc: "Basierend auf moderner Lichtbiologieforschung" }
            ].map((item, i) => (
              <div key={i} className="bg-light-yellow/30 p-5 rounded-lg text-center">
                <h3 className="font-semibold mb-2 text-bright-orange">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
