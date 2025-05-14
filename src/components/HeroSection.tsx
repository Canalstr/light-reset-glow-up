
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, X } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const scrollToQuiz = () => {
    const quizSection = document.getElementById("quiz-section");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openTypeform = () => {
    window.open("https://form.typeform.com/to/dIDP5oRL", "_blank");
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsLoading(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  // Convert Google Drive link to embed format
  const videoId = "1UOwBGZ2XFlLpH_fm_nTk9Jo4X6BuZgvb";
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-light-yellow to-white pt-16">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-light-peach opacity-40 -z-10 rounded-bl-[30%]"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-sun-yellow rounded-full blur-3xl opacity-20 animate-pulse-light"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t("lose.weight").split("10kg")[0]}
            <span className="text-bright-orange">10kg</span> 
            {t("lose.weight").split("10kg")[1]}
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            {t("revolutionary.approach")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={openTypeform} className="btn-primary flex items-center gap-2 text-lg">
              {t("discover.protocol")}
              <ArrowDown size={18} />
            </Button>
            <Button variant="outline" className="border-bright-orange text-bright-orange hover:bg-light-peach" onClick={scrollToQuiz}>
              {t("learn.how")}
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in relative">
            {!isPlaying ? (
              <div 
                className="relative aspect-video bg-gray-100 flex items-center justify-center group cursor-pointer"
                onClick={handlePlayClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sun-yellow/20 to-light-orange/30 opacity-40"></div>
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1280" 
                  alt="Sunlight illuminating a beautiful landscape, representing the power of natural light on metabolism" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
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
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bright-orange"></div>
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
                  ></iframe>
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
          <div className="absolute -bottom-5 -right-5 bg-sun-yellow rounded-full p-4 shadow-lg">
            <p className="text-sm font-bold">{t("lose.weight").split("Using")[0]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
