
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Upgrade: React.FC = () => {
  useEffect(() => {
    // Script to replace placeholders
    const p = new URLSearchParams(location.search);
    document.querySelectorAll('a[data-dynamic]').forEach((a) => {
      if (a instanceof HTMLAnchorElement) {
        a.href = a.href
          .replace('{{email}}', encodeURIComponent(p.get('email') || ''))
          .replace('{{refID}}', encodeURIComponent(p.get('refID') || ''));
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10 px-4">
      <div className="max-w-md w-full">
        <section style={{background:"#fff8e1",padding:"24px",borderRadius:"12px",marginBottom:"24px"}}>
          <h3>⚙️ 24-h DFY Chrono-Lab <span style={{color:"#ff6600",fontWeight:700}}>€749</span></h3>
          <p>Wir bauen deinen exakten Licht-Zeit-Plan. PDF + Kalender-ICS in 48 h.</p>
          <button className="btn bg-bright-orange hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg block mb-4 transition-colors" onClick={() => location.href='https://buy.stripe.com/cNifZib5udav4zGflDdZ607'}>
            Ja, will ich →
          </button>
        </section>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">🚀 Upgrade auf die Light-Reset Masterclass</h1>
          <p className="text-lg mb-6">6 Tiefen-Module · Experten-Talks · Excel-Routinen</p>
          
          <div className="text-3xl font-bold text-bright-orange mb-8">
            Einmalig €97 – lebenslanger Zugriff
          </div>
          
          <a 
            href="https://buy.stripe.com/5kQcN60qQ1rN3vC2yRdZ602?prefilled_email={{email}}&client_reference_id={{refID}}"
            data-dynamic
            className="btn bg-bright-orange hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg block mb-4 transition-colors"
          >
            ✅ Ja, Upgrade sichern
          </a>
          
          <a 
            href="https://lightreset.net/thanks?email={{email}}&refID={{refID}}&session_id={{session_id}}"
            data-dynamic
            className="text-gray-500 hover:text-gray-700 inline-block mb-10"
          >
            Nein danke - Ich bleibe beim Basis-Abo
          </a>
          
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
    </div>
  );
};

export default Upgrade;
