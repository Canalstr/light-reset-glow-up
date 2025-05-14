
import React from "react";
import { Card } from "@/components/ui/card";
import { Clock, Book } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CourseOverviewSection: React.FC = () => {
  const { t } = useLanguage();
  
  const weeklyContent = [
    {
      week: "Week 1",
      focus: "Reset & Foundation",
      description: "Reset your light exposure patterns and establish your foundational protocol."
    },
    {
      week: "Week 2",
      focus: "Hormonal Balance",
      description: "Fine-tune your timing to optimize hormone production and reduce hunger signals."
    },
    {
      week: "Week 3",
      focus: "Metabolism Activation",
      description: "Enhance fat burning through strategic light exposure techniques."
    },
    {
      week: "Week 4",
      focus: "Sleep Optimization",
      description: "Perfect your evening routine for maximum metabolic benefits during sleep."
    },
    {
      week: "Week 5",
      focus: "Lifestyle Integration",
      description: "Seamlessly integrate your Light Reset protocol into your long-term lifestyle."
    }
  ];

  const included = [
    {
      title: "Daily Light Protocol",
      description: "Step-by-step guide for exactly when to get specific types of light exposure",
      icon: <Clock className="h-6 w-6 text-bright-orange" />
    },
    {
      title: "Tracking Templates",
      description: "Simple tools to monitor your progress and optimize your results",
      icon: <Book className="h-6 w-6 text-bright-orange" />
    },
    {
      title: "Troubleshooting Guide",
      description: "Solutions for common challenges specific to Saudi climate and lifestyle",
      icon: <Clock className="h-6 w-6 text-bright-orange" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-light-peach to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">The Light Reset: 5-Week Program</h2>
        <p className="section-description">
          A simple, step-by-step approach that fits effortlessly into your daily life
        </p>
        
        <div className="max-w-5xl mx-auto">
          {/* Weekly Program */}
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {weeklyContent.map((week, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-4 text-center h-full flex flex-col">
                    <div className="bg-light-yellow rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-bright-orange">{index + 1}</span>
                    </div>
                    <h3 className="font-semibold mb-1 text-bright-orange">{week.week}</h3>
                    <h4 className="font-medium text-gray-900 mb-2">{week.focus}</h4>
                    <p className="text-sm text-gray-600 mt-auto">{week.description}</p>
                  </div>
                </Card>
                {index < weeklyContent.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-1 bg-light-orange -z-10 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* What's Included */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">What's Included</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {included.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-light-peach p-4 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-light-yellow p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Minimal Time Commitment</h4>
              <p className="text-gray-700">
                The Light Reset protocol requires just 15 minutes of your attention per day,
                with most techniques integrating seamlessly into your existing routine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;
