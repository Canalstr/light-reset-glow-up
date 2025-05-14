
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const ThankYou: React.FC = () => {
  const { t } = useLanguage();
  
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
          {t("payment.successful")} – تم الدفع بنجاح
        </h1>
        <p className="mt-4">
          {t("thank.you.message")} <strong>{t("light.reset")}</strong>!<br />
          {t("login.details.emailed")}<br /><br />
          شكرًا لانضمامك إلى <strong>برنامج لايت ريسِت</strong>!<br />
          تم إرسال بيانات الدخول إلى بريدك الإلكتروني.
        </p>
        
        <button 
          onClick={() => window.location.href = 'https://lightreset.net'}
          className="mt-8 px-7 py-3.5 bg-[#1E90FF] text-white text-lg rounded-md hover:bg-blue-500 transition-colors"
        >
          {t("start.now")} | ابدئي الآن
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
