
import React from "react";
import { useEffect } from "react";

const ThankYou: React.FC = () => {
  // Add TikTok conversion tracking
  useEffect(() => {
    // Access the ttq object from the global window
    const ttq = (window as any).ttq;
    if (ttq) {
      ttq.track('CompletePayment');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-3xl font-bold">
          Payment Successful – تم الدفع بنجاح
        </h1>
        <p className="mt-4">
          Thank you for joining <strong>The Light Reset</strong>!<br />
          شكرًا لانضمامك!
        </p>
        
        <button 
          onClick={() => window.location.href = 'https://lightreset.net'}
          className="mt-8 px-7 py-3.5 bg-[#1E90FF] text-white text-lg rounded-md hover:bg-blue-500 transition-colors"
        >
          Start Now | ابدئي الآن
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
