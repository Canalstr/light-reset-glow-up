
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, X } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openTypeform = () =>
    window.open("https://form.typeform.com/to/dIDP5oRL", "_blank");

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsLoading(true);
  };
  const handleCloseVideo = () => setIsPlaying(false);
  const handleVideoLoad = () => setIsLoading(false);

  /* Google-Drive preview embed */
  const videoId = "1UOwBGZ2XFlLpH_fm_nTk9Jo4X6BuZgvb";
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

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
              {t("sleep.faster")}
            </h1>

            {/* New subheadline */}
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              {t("no.pills")}
            </p>

            {/* Updated CTA */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
              <Button onClick={openTypeform} className="btn-primary flex items-center gap-2 text-lg px-6 py-4">
                {t("take.quiz.45")}
                <ArrowDown size={18} />
              </Button>
            </div>
          </div>

          {/* right column – video */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in relative">
              {!isPlaying ? (
                <div
                  className="relative aspect-video bg-gray-100 flex items-center justify-center group cursor-pointer"
                  onClick={handlePlayClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sun-yellow/20 to-light-orange/30 opacity-40" />
                  <img
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1280"
                    alt="Sunlight passing through trees, representing the power of natural light on energy and focus"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                  <Button className="bg-white text-bright-orange rounded-full w-16 h-16 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    <Play size={30} fill="currentColor" />
                  </Button>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold">{t("light.secret")}</h3>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bright-orange" />
                    </div>
                  )}
                  <AspectRatio ratio={16 / 9} className="bg-black">
                    <iframe
                      src={embedUrl}
                      title="The Light Reset VSL"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      onLoad={handleVideoLoad}
                    />
                  </AspectRatio>
                  <Button
                    onClick={handleCloseVideo}
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full w-8 h-8 p-0 flex items-center justify-center"
                  >
                    <X size={16} />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
