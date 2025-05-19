
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const EliteKit: React.FC = () => {
  useEffect(() => {
    // Script to replace placeholders
    const p = new URLSearchParams(location.search);
    document.querySelectorAll('a[data-dynamic]').forEach(a => {
      a.href = a.href
        .replace('{{email}}', encodeURIComponent(p.get('email') || ''))
        .replace('{{refID}}', encodeURIComponent(p.get('refID') || ''));
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">🛠️ Hol dir das Elite Biohacker Kit</h1>
        
        <ul className="text-left inline-block mb-6 mx-auto">
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            <span>200 Lux Tageslichtlampe</span>
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            <span>Blue-Blocker Clip-On</span>
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">•</span>
            <span>Lux-Meter & 90-Tage Coaching-Chat</span>
          </li>
        </ul>
        
        <div className="text-3xl font-bold text-center mb-8">
          Nur €297 – Versand in 3 Tagen
        </div>
        
        <div className="text-center">
          <a 
            href="https://buy.stripe.com/bJe6oIehG8Uf4zG2yRdZ603?prefilled_email={{email}}&client_reference_id={{refID}}"
            data-dynamic
            className="btn bg-[#e96d2c] hover:bg-[#d85d1c] text-white font-bold py-4 px-6 rounded-lg block mb-4 transition-colors"
          >
            🚚 Ja, Kit hinzufügen
          </a>
          
          <Link 
            to="/thanks"
            className="text-gray-500 hover:text-gray-700 inline-block mb-10"
          >
            Vielleicht später – weiter zum Mitgliederbereich
          </Link>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-center space-x-4 text-sm text-gray-500">
            <a 
              href="https://billing.stripe.com/p/login/3cIfZigpO6M7fekc9rdZ600" 
              target="_blank" 
              rel="nofollow"
              className="hover:text-bright-orange"
            >
              Abonnement verwalten
            </a>
            <span>·</span>
            <Link to="/impressum" className="hover:text-bright-orange">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EliteKit;
