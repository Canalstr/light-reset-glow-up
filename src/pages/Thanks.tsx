
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Thanks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-yellow to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
            Vielen Dank!
          </h1>
          
          <div className="mb-8 text-xl text-gray-700 text-center">
            <p>
              Willkommen in deinem Light Reset Mitgliederbereich.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <Button 
              onClick={() => window.location.href = 'https://lightreset.net'}
              className="bg-bright-orange hover:bg-orange-600 text-white"
            >
              Zurück zur Startseite
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Thanks;
