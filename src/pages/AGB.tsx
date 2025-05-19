
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const AGB: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">ALLGEMEINE GESCHÄFTSBEDINGUNGEN (AGB)</h1>
          
          <div className="prose max-w-full">
            <h2 className="text-xl font-bold mt-6 mb-2">1. Geltungsbereich</h2>
            <p>Diese AGB gelten für alle Verträge zwischen Canalstr Trading B.V. und Verbrauchern, die über die Website digitale Schlafcoaching-Produkte erwerben.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">2. Vertragsschluss und Preise</h2>
            <p>Mit Abschluss des Bestellvorgangs kommt ein Vertrag über die Nutzung des 7-tägigen digitalen Schlafcoachings zustande. Der Preis für die 7-Tage-Testphase beträgt 15 € und wird sofort bei Bestellung fällig.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">3. Abonnement und Verlängerung</h2>
            <p>Nach Ablauf der 7-tägigen Testphase verlängert sich das Abonnement automatisch um jeweils 3 Monate (Quartal) zum Preis von 199 € pro Quartal, sofern Sie nicht spätestens vor Ablauf der Testphase kündigen. Die Kündigung ist jederzeit mit einem Klick über den Stripe-Kundenportal-Link möglich, der Ihnen per E-Mail und im Footer der Website zur Verfügung steht.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">4. Zahlungsabwicklung</h2>
            <p>Die Zahlungsabwicklung erfolgt über Stripe. Sie erhalten nach Abschluss der Bestellung eine Bestätigung per E-Mail.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">5. Widerrufsrecht</h2>
            <p>Für digitale Inhalte, die nicht auf einem körperlichen Datenträger geliefert werden, erlischt das Widerrufsrecht gemäß § 356 Abs. 5 BGB, sobald mit der Ausführung des Vertrags begonnen wurde und Sie ausdrücklich zugestimmt haben. Checkbox-Text im Bestellprozess: „Ich verlange die sofortige Ausführung und verliere mein Widerrufsrecht."</p>
            <p>Für physische Waren gilt das gesetzliche 14-tägige Widerrufsrecht.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">6. Empfehlungsprogramm</h2>
            <p>Für jede erfolgreiche Empfehlung, die zu einem zahlenden Neukunden mit einem Bestellwert von mindestens 50 € führt, erhalten Sie einen 50 € Gutschein oder Store-Credit.</p>
            <p>Bedingungen:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Der geworbene Kunde muss ein gültiges Abonnement oder eine Einmalzahlung von mindestens 50 € tätigen.</li>
              <li>Die Gutschrift wird erst nach Ablauf der Widerrufsfrist des Neukunden gewährt.</li>
              <li>Barauszahlung ist ausgeschlossen.</li>
              <li>Der Gutschein ist 12 Monate gültig und kann für zukünftige Bestellungen eingelöst werden.</li>
            </ul>
            <p>Ausschluss:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Empfehlungen, die zu Bestellungen unter 50 € führen, berechtigen nicht zur Gutschrift.</li>
              <li>Missbrauch (z.B. Selbstempfehlung) führt zum Ausschluss aus dem Programm.</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-2">7. Haftung</h2>
            <p>Die Haftung für Schäden ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">8. Anwendbares Recht</h2>
            <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">9. Schlussbestimmungen</h2>
            <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AGB;
