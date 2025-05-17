
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const VSLSection: React.FC = () => {
  const { t } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openTypeform = () =>
    window.open("https://form.typeform.com/to/jduH7cZ7#ref_id=xxxxx", "_blank");

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-2">{t("watch.how")}</h2>
        <p className="section-description mb-10">
          {t("discover.patterns")}
        </p>
        
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative aspect-[9/16] md:aspect-video bg-black">
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
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 p-0 flex items-center justify-center shadow-md"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </Button>

            {/* Quiz button below video */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <Button 
                onClick={openTypeform} 
                className="bg-bright-orange hover:bg-orange-600 text-white shadow-lg"
              >
                {t("take.quiz")}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-700 italic">
            {t("vsl.quote")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
