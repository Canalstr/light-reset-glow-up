
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-sun-gradient rounded-full animate-pulse-light mr-2"></div>
              <span className="font-bold text-xl">{t("light.reset")}</span>
            </div>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-bright-orange transition-colors">{t("privacy.policy")}</a>
            <a href="#" className="text-gray-600 hover:text-bright-orange transition-colors">{t("terms.of.service")}</a>
            <a href="#" className="text-gray-600 hover:text-bright-orange transition-colors">{t("contact")}</a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>{t("copyright").replace("2025", currentYear.toString())}</p>
          <p className="mt-2">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
