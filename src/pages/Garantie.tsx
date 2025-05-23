
import React from "react";
import { Link } from "react-router-dom";

const Garantie: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">💡 7-Tage-Ergebnis-Versprechen</h1>
      <p>Erfülle ALLE 5 Schritte:</p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>Jeden Tag bis 30 Min nach Sonnenaufgang Lux-Screenshot in Telegram posten.</li>
        <li>Oura/Fitbit CSV-Export hochladen (spätestens an Tag 8).</li>
        <li>Workbook komplett ausgefüllt (PDF prüft Felder) einsenden (spätestens an Tag 8).</li>
        <li>30-Sek Video-Selfie Check-in per Upload an Tag 5.</li>
        <li>Claim-Mail mit allen Nachweisen binnen 12 Stunden nach Ablauf von Tag 7 senden.</li>
      </ol>
      <p className="mb-4">Dann erhältst du gratis einen 20-Min 1-zu-1 Analyse-Call (Wert €297).</p>
      <p className="mb-4 text-sm text-gray-600">Versäumst du auch nur einen Punkt oder eine Frist, erlischt dein Anspruch auf den Call.</p>
      <p><Link to="/" className="text-bright-orange hover:underline">Zurück zur Startseite</Link></p>
    </div>
  );
};

export default Garantie;
