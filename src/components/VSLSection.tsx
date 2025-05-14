
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const VSLSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-2">Watch How The Light Reset Works</h2>
        <p className="section-description mb-10">
          Discover how natural light patterns can transform your metabolism and help you lose weight
        </p>
        
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <div 
              className="relative aspect-video bg-gray-100 flex items-center justify-center group cursor-pointer"
              onClick={handlePlayClick}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sun-yellow/30 to-light-orange/20"></div>
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
                <h3 className="text-xl md:text-2xl font-semibold">The Light Secret: How Natural Light Patterns Transform Your Metabolism</h3>
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
        
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-700 italic">
            "Discover the revolutionary approach that's helping Saudi women reset their metabolism without changing diet or exercise. The Light Reset protocol works with your body's natural biology."
          </p>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
