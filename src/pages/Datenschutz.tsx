
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Datenschutz: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">DATENSCHUTZERKLÄRUNG</h1>
          
          <div className="prose max-w-full">
            <h2 className="text-xl font-bold mt-6 mb-2">1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
            Canalstr Trading B.V., Keurenplein 4, 1069CD Amsterdam, Niederlande<br />
            Geschäftsführer: Konstantin Weidner<br />
            E-Mail: canalstrtrading@gmail.com<br />
            Telefon: +49 151 51957091</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">2. Zwecke und Rechtsgrundlagen der Datenverarbeitung</h2>
            <p>Wir verarbeiten Ihre personenbezogenen Daten gemäß Art. 6 Abs. 1 DSGVO auf folgenden Rechtsgrundlagen:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO): Zur Durchführung und Abwicklung Ihrer Bestellung und Nutzung unseres digitalen Schlafcoachings.</li>
              <li>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO): Zur Erfüllung gesetzlicher Aufbewahrungspflichten.</li>
              <li>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO): Zur Verbesserung unseres Angebots und zur Betrugsprävention.</li>
              <li>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO): Für den Einsatz von Cookies und Marketingmaßnahmen, sofern Sie zustimmen.</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-2">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>Wir erheben folgende Daten:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Name, E-Mail-Adresse, Zahlungsdaten, Telefonnummer (bei Bestellung)</li>
              <li>Nutzungsdaten (z.B. besuchte Seiten, Interaktionen)</li>
              <li>Kommunikationsdaten (z.B. bei Kontaktaufnahme)</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-6 mb-2">4. Cookies und Tracking</h2>
            <p>Unsere Website verwendet Cookies, um die Nutzererfahrung zu verbessern und bestimmte Funktionen bereitzustellen. Sie können der Nutzung von Cookies beim ersten Besuch zustimmen oder widersprechen. Details finden Sie in unserem Cookie-Banner.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">5. Empfänger und Auftragsverarbeiter</h2>
            <p>Wir setzen folgende Dienstleister als Auftragsverarbeiter gemäß Art. 28 DSGVO ein:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Stripe, Inc. (Zahlungsabwicklung, USA)</li>
              <li>Typeform S.L. (Quiz- und Formular-Hosting, Spanien)</li>
              <li>Twilio Inc. (SMS-Versand, USA)</li>
              <li>HeyGen, Inc. (Video-Hosting, USA)</li>
              <li>Google Ireland Ltd. (Google Sheets, Datenspeicherung, Irland)</li>
            </ul>
            <p>Mit allen Dienstleistern bestehen Auftragsverarbeitungsverträge. Eine Übermittlung in Drittländer erfolgt nur bei Vorliegen geeigneter Garantien (z.B. EU-Standardvertragsklauseln).</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">6. Speicherdauer</h2>
            <p>Wir speichern Ihre Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">7. Rechte der betroffenen Person</h2>
            <p>Sie haben folgende Rechte:</p>
            <ol className="list-decimal ml-6 mb-4">
              <li>Auskunft (Art. 15 DSGVO): Sie können Auskunft über Ihre gespeicherten Daten verlangen.</li>
              <li>Berichtigung (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger Daten verlangen.</li>
              <li>Löschung (Art. 17 DSGVO): Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</li>
              <li>Einschränkung (Art. 18 DSGVO): Sie können die Einschränkung der Verarbeitung verlangen.</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO): Sie können die Übertragung Ihrer Daten verlangen.</li>
              <li>Widerspruch (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
              <li>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO): Sie können eine erteilte Einwilligung jederzeit widerrufen.</li>
            </ol>
            <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: canalstrtrading@gmail.com</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">8. Datenschutzbeauftragter</h2>
            <p>Ein Datenschutzbeauftragter ist nach aktueller Rechtslage nicht bestellt. Bei Fragen zum Datenschutz wenden Sie sich bitte an die oben genannte Kontaktadresse.</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">9. Beschwerderecht</h2>
            <p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;
