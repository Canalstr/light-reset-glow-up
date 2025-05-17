
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  
  const openTypeform = () => {
    window.open("https://form.typeform.com/to/jduH7cZ7#ref_id=xxxxx", "_blank");
  };

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm py-4 fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-sun-gradient rounded-full animate-pulse-light mr-2"></div>
            <span className="font-bold text-xl">{t("light.reset")}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Button 
            onClick={openTypeform}
            className="bg-bright-orange hover:bg-orange-600" 
            size="sm"
          >
            {t("take.quiz")}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
