
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the context type
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key, // Default translation returns the key itself
});

// Define the language provider component
interface LanguageProviderProps {
  children: React.ReactNode;
}

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Add the new translations
  const translations: Translations = {
    en: {
      "light.reset": "Light Reset",
      "take.quiz": "Take the Quiz",
      "payment.successful": "Payment Successful",
      "thank.you.message": "Thank you for joining",
      "login.details.emailed": "Your login details have been emailed to you.",
      "start.now": "Start Now"
    },
    ar: {
      "light.reset": "لايت ريسِت",
      "take.quiz": "ابدأ الاختبار",
      "payment.successful": "تم الدفع بنجاح",
      "thank.you.message": "شكرًا لانضمامك إلى",
      "login.details.emailed": "تم إرسال بيانات الدخول إلى بريدك الإلكتروني.",
      "start.now": "ابدئي الآن"
    }
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  // Provide the context value
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
const useLanguage = () => {
  return useContext(LanguageContext);
};

export { LanguageProvider, useLanguage };
