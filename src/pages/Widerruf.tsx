
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Widerruf: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">WIDERRUFSBELEHRUNG & RÜCKERSTATTUNG</h1>
          
          <div className="prose max-w-full">
            <h2 className="text-xl font-bold mt-6 mb-2">1. Widerrufsrecht für digitale Inhalte</h2>
            <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Das Widerrufsrecht erlischt jedoch, wenn Sie ausdrücklich zustimmen, dass wir vor Ablauf der Widerrufsfrist mit der Ausführung des Vertrags beginnen und Sie zur Kenntnis genommen haben, dass Sie mit Beginn der Ausführung Ihr Widerrufsrecht verlieren (§ 356 Abs. 5 BGB).</p>
            <p>Checkbox-Text im Bestellprozess: „Ich verlange die sofortige Ausführung und verliere mein Widerrufsrecht."</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">2. Muster-Widerrufsformular</h2>
            <p>Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es zurück an:</p>
            <p>Canalstr Trading B.V.<br />
            Keurenplein 4<br />
            1069CD Amsterdam<br />
            Niederlande<br />
            E-Mail: canalstrtrading@gmail.com</p>
            
            <p className="mt-4">Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über den Kauf der folgenden digitalen Inhalte:</p>
            <p>Bestellt am: __________<br />
            Name des Verbrauchers: __________<br />
            Anschrift des Verbrauchers: __________<br />
            Unterschrift des Verbrauchers (nur bei Mitteilung auf Papier): __________<br />
            Datum: __________</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">3. Rückerstattungsbedingungen</h2>
            <p>Der Betrag von 15 € für die 7-tägige Testphase ist nicht erstattungsfähig, sobald Sie mit dem Streaming oder der Nutzung des digitalen Schlafcoachings begonnen haben.</p>
            <p>Das Abonnement kann jederzeit vor dem nächsten Abrechnungszeitraum über den Kundenportal-Button im Footer der Website gekündigt werden. Bereits gezahlte Abonnementgebühren für begonnene Abrechnungszeiträume werden nicht erstattet.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Widerruf;
