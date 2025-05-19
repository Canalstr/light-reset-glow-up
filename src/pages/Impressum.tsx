
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Impressum: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">IMPRESSUM</h1>
          
          <div className="prose max-w-full">
            <p>Canalstr Trading B.V.<br />Keurenplein 4<br />1069CD Amsterdam<br />Niederlande</p>
            
            <p>Geschäftsführer: Konstantin Weidner<br />
            Handelsregister: Registergericht Amsterdam, KvK Nr. 85921866<br />
            Umsatzsteuer-ID: NL863787356B01</p>
            
            <p>Kontakt:<br />
            Telefon: +49 151 51957091<br />
            E-Mail: canalstrtrading@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
