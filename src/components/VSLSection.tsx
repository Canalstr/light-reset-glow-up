
import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VSLSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-2">Watch How The Light Reset Works</h2>
        <p className="section-description mb-10">
          Discover how natural light patterns can transform your metabolism and help you lose weight
        </p>
        
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          {/* Video placeholder - replace with actual video embed */}
          <div className="relative aspect-video bg-gray-100 flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-light-peach to-light-orange opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=1280" 
              alt="Video thumbnail showing light concept" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity"></div>
            <Button className="bg-white text-bright-orange rounded-full w-16 h-16 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
              <Play size={30} fill="currentColor" />
            </Button>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <h3 className="text-xl md:text-2xl font-semibold">The Light Secret: How Natural Light Patterns Transform Your Metabolism</h3>
            </div>
          </div>
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
