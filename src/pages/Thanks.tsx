
import React, { useEffect } from "react";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Thanks: React.FC = () => {
  // Ensure TikTok pixel fires on component mount
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('CompletePayment');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-yellow to-white">
      <Navbar />
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-light-peach opacity-40 -z-10 rounded-bl-[30%]" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-sun-yellow rounded-full blur-3xl opacity-20 animate-pulse-light" />
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-light-orange rounded-full blur-2xl opacity-30 animate-pulse-light" />

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
          {/* Success icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-sun-yellow to-bright-orange rounded-full flex items-center justify-center">
              <Star size={40} className="text-white fill-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 text-center">
            Zahlung erfolgreich
          </h1>
          
          <div className="mb-8 text-xl text-gray-700 text-center">
            <p className="mb-2">
              Vielen Dank für deine Anmeldung bei <strong className="text-bright-orange">The Light Reset</strong>!
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            {/* Replace button with download link */}
            <a id="download-btn" href="#" className="btn-primary text-lg py-6 px-10 animate-glow inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90" download>
              Download your personalised workbook
            </a>
            
            <script dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  const sid = new URLSearchParams(location.search).get('session_id');
                  const btn = document.getElementById('download-btn');
                  if (sid) {
                    btn.href =
                      '/.netlify/functions/download?session_id=' + encodeURIComponent(sid);
                  } else {
                    btn.style.display = 'none';   // hides button if page opened without payment
                  }
                })();
              `
            }} />
          </div>
          
          {/* Lifetime Pass section */}
          <section style={{background:"#ffeef0",padding:"28px",borderRadius:"12px",marginBottom:"28px"}}>
            <h2 className="text-2xl font-bold mb-2">🎖️ Founder Lifetime Pass – 100 Seats</h2>
            <p className="mb-4">Nie wieder Gebühren – alle künftigen Updates gratis.</p>
            <button 
              className="btn-primary py-3 px-6 rounded-lg" 
              onClick={() => location.href='https://buy.stripe.com/3cI3cw8Xm0nJfek5L3dZ606'}
            >
              Seat sichern €4 999 →
            </button>
          </section>
          
          {/* Additional benefits reminder */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "7-Tage Licht Sprint", desc: "Umfassendes Protokoll, zugeschnitten auf deine Bedürfnisse" },
              { title: "Experten-Unterstützung", desc: "Erhalte Anleitung während deiner gesamten Reise" },
              { title: "Wissenschaftlich fundiert", desc: "Basierend auf moderner Lichtbiologieforschung" }
            ].map((item, i) => (
              <div key={i} className="bg-light-yellow/30 p-5 rounded-lg text-center">
                <h3 className="font-semibold mb-2 text-bright-orange">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Thanks;
