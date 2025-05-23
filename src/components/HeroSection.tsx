
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openQuiz = () =>
    window.open("/quiz", "_blank");

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    // Ensure video starts playing when it's ready
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-light-yellow to-white pt-16">
      {/* background blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-light-peach opacity-40 -z-10 rounded-bl-[30%]" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-sun-yellow rounded-full blur-3xl opacity-20 animate-pulse-light" />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start">
          {/* left column */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            {/* Pre-headline */}
            <p className="text-bright-orange font-semibold mb-2 text-sm md:text-base">
              {t("nobel.science")}
            </p>
            
            {/* Updated headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Schlafe 30 Min schneller ein in 7 Tagen - mit nur 10 Minuten Morgensonne
            </h1>

            <ul id="benefits" style={{margin: "18px 0 24px 0", fontWeight: 600, lineHeight: 1.4}}>
              <li>–60 % Coffee-Cravings in 48 h</li>
              <li>+30 min REM-Schlaf Ø</li>
              <li>Erprobt an 3 274 Bio-Hackern</li>
            </ul>
            
            {/* Legal disclaimer */}
            <p className="text-sm text-gray-600 mb-4 italic">
              Kein Heilversprechen; Bildungsangebot ab 18 Jahren
            </p>

            {/* Updated CTA */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
              <Button onClick={openQuiz} className="btn-primary flex items-center gap-2 text-lg px-6 py-4">
                {t("take.quiz.45").replace("den", "das")}
                <ArrowDown size={18} />
              </Button>
            </div>
          </div>

          {/* right column – video */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in relative">
              <div className="relative aspect-[9/16] bg-gray-100">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="auto"
                >
                  <source src="/Schlaf-Quiz.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Sound toggle button */}
                <Button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 p-0 flex items-center justify-center shadow-md"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </Button>

                {/* Quiz button below video */}
                <div className="absolute bottom-16 left-0 right-0 flex justify-center">
                  <Button 
                    onClick={openQuiz} 
                    className="bg-bright-orange hover:bg-orange-600 text-white shadow-lg"
                  >
                    {t("take.quiz")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
