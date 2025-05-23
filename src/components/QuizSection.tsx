
import React, { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const QuizSection: React.FC = () => {
  const { t } = useLanguage();
  
  const openQuiz = () => {
    // Open quiz in a new tab with preload hint
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/quiz/styles.css';
    link.as = 'style';
    document.head.appendChild(link);
    
    window.open("/quiz", "_blank");
  };

  return (
    <section id="quiz-section" className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-light-yellow/50 to-light-peach/50 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-sun-yellow to-bright-orange p-6 md:p-8 text-white text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  {t("discover.personal")}
                </h2>
                <p className="text-base md:text-lg lg:text-xl mb-0">
                  {t("find.out")}
                </p>
              </div>
              
              <div className="p-6 md:p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-light-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl md:text-2xl font-bold text-bright-orange">1</span>
                    </div>
                    <p className="font-medium">{t("step1")}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-light-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl md:text-2xl font-bold text-bright-orange">2</span>
                    </div>
                    <p className="font-medium">{t("step2")}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-light-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl md:text-2xl font-bold text-bright-orange">3</span>
                    </div>
                    <p className="font-medium">{t("step3")}</p>
                  </div>
                </div>
                
                <div className="text-center space-y-6">
                  <p className="text-gray-700">
                    {t("your.body")}
                  </p>
                  
                  <Button 
                    onClick={openQuiz} 
                    className="btn-primary animate-glow text-lg py-6 px-6 md:px-10"
                    onMouseOver={() => {
                      // Preload quiz assets on hover
                      const preloadLink = document.createElement('link');
                      preloadLink.rel = 'preload';
                      preloadLink.href = '/quiz/quiz-data.js';
                      preloadLink.as = 'script';
                      document.head.appendChild(preloadLink);
                    }}
                  >
                    {t("take.quiz.45").replace("den", "das")}
                  </Button>
                  
                  <p className="text-sm text-gray-500">
                    {t("takes.less")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
