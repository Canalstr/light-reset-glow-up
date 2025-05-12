
import React from "react";
import { Check } from "lucide-react";

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Lose up to 10kg in 5 weeks",
      description: "The Light Reset protocol activates your body's natural fat-burning processes through precisely timed light exposure",
      icon: "scale"
    },
    {
      title: "Reduced hunger & cravings in 7-10 days",
      description: "Experience noticeably fewer cravings as your light-regulated hormones restore natural hunger signals",
      icon: "clock"
    },
    {
      title: "Improved energy throughout the day",
      description: "Feel consistently energetic with naturally aligned circadian rhythms - no more afternoon slumps",
      icon: "energy"
    },
    {
      title: "Enhanced sleep quality",
      description: "Wake up refreshed after deeper, more restorative sleep due to properly balanced melatonin production",
      icon: "sleep"
    },
    {
      title: "Natural metabolism regulation",
      description: "Help your body naturally optimize fat-burning without artificial supplements or extreme diets",
      icon: "metabolism"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-light-yellow rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-light-peach rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Benefits of The Light Reset</h2>
        <p className="section-description">
          Experience these transformative benefits without changing your diet or exercise routine
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-light-orange rounded-full flex items-center justify-center mr-3">
                  <Check className="h-5 w-5 text-bright-orange" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto bg-light-yellow rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">All Without Changing Your Diet or Exercise Routine</h3>
          <p className="text-gray-700">
            The Light Reset works with your current lifestyle and daily habits. It's about when you expose 
            yourself to different types of light, not about restrictive diets or exhausting workouts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
