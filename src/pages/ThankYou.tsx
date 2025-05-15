
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light-yellow to-white">
      <div className="text-center max-w-lg px-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Payment Successful – Zahlung erfolgreich</h1>
        <p className="text-xl mb-8 text-gray-700">
          Thank you for joining <strong>The Light Reset</strong>!<br />
          Vielen Dank für deine Anmeldung!
        </p>
        <Button 
          onClick={() => window.location.href = 'https://lightreset.net'}
          className="btn-primary text-lg py-6 px-10"
        >
          Start Now | Jetzt starten
        </Button>
      </div>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          if (typeof ttq !== 'undefined') {
            ttq.track('CompletePayment');
          }
        `
      }} />
    </div>
  );
};

export default ThankYou;
