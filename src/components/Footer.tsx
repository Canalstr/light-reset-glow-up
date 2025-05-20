
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Lock } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const handleCancelSubscription = () => {
    window.open("https://billing.stripe.com/p/login/3cIfZigpO6M7fekc9rdZ600", "_blank");
  };
  
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-sun-gradient rounded-full animate-pulse-light mr-2"></div>
              <span className="font-bold text-xl">{t("light.reset")}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://lightreset.net" className="text-gray-600 hover:text-bright-orange transition-colors">Home</a>
            <Link to="/impressum" className="text-gray-600 hover:text-bright-orange transition-colors">Impressum</Link>
            <Link to="/agb" className="text-gray-600 hover:text-bright-orange transition-colors">AGB</Link>
            <Link to="/widerruf" className="text-gray-600 hover:text-bright-orange transition-colors">Widerruf</Link>
            <Link to="/datenschutz" className="text-gray-600 hover:text-bright-orange transition-colors">Datenschutz</Link>
            <a href="#" className="text-gray-600 hover:text-bright-orange transition-colors">{t("contact")}</a>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-2 mb-4 text-sm">
          <span className="flex items-center text-gray-600">
            <Lock className="h-4 w-4 mr-1" /> Sicher bezahlen
          </span>
          <span className="text-gray-400">·</span>
          <Button 
            variant="link" 
            onClick={handleCancelSubscription}
            className="text-gray-600 hover:text-bright-orange p-0 h-auto"
          >
            hier kündigen <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
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
