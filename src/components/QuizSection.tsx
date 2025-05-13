
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QuizSection: React.FC = () => {
  const openTypeform = () => {
    // Using the provided Typeform URL
    window.open("https://form.typeform.com/to/dIDP5oRL", "_blank");
  };

  return (
    <section id="quiz-section" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-light-yellow/50 to-light-peach/50 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-sun-yellow to-bright-orange p-8 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Discover Your Personal Light Reset Protocol
                </h2>
                <p className="text-lg md:text-xl mb-0">
                  Find out how much weight you could lose with your custom light protocol
                </p>
              </div>
              
              <div className="p-8 bg-white">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-light-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-bright-orange">1</span>
                    </div>
                    <p className="font-medium">Take the 60-second quiz</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-light-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-bright-orange">2</span>
                    </div>
                    <p className="font-medium">Get your personalized light protocol</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-light-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-bright-orange">3</span>
                    </div>
                    <p className="font-medium">Start losing weight in days</p>
                  </div>
                </div>
                
                <div className="text-center space-y-6">
                  <p className="text-gray-700">
                    Your body is unique. By answering a few quick questions about your lifestyle, sleep patterns, and daily routine, 
                    we'll create a personalized Light Reset Protocol specifically for you.
                  </p>
                  
                  <Button 
                    onClick={openTypeform} 
                    className="btn-primary animate-glow text-lg py-6 px-10"
                  >
                    Take the 60-Second Quiz
                  </Button>
                  
                  <p className="text-sm text-gray-500">
                    Takes less than a minute. No obligation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
