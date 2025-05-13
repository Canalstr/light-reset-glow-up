
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToQuiz = () => {
    const quizSection = document.getElementById("quiz-section");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openTypeform = () => {
    window.open("https://form.typeform.com/to/dIDP5oRL", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-light-yellow to-white pt-16">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-light-peach opacity-40 -z-10 rounded-bl-[30%]"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-sun-yellow rounded-full blur-3xl opacity-20 animate-pulse-light"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Lose Up To <span className="text-bright-orange">10kg in 5 Weeks</span> Using Light Biology
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            The Revolutionary Approach Saudi Women Are Using to Reset Their Metabolism Without Changing Diet or Exercise
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={openTypeform} className="btn-primary flex items-center gap-2 text-lg">
              Discover Your Light Protocol
              <ArrowDown size={18} />
            </Button>
            <Button variant="outline" className="border-bright-orange text-bright-orange hover:bg-light-peach" onClick={scrollToQuiz}>
              Learn How It Works
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in relative">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800" 
              alt="Sun rays illuminating a landscape, representing natural light's effects on metabolism" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-bright-orange/20 to-transparent"></div>
          </div>
          <div className="absolute -bottom-5 -right-5 bg-sun-yellow rounded-full p-4 shadow-lg">
            <p className="text-sm font-bold">Up to 10kg in 5 weeks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
