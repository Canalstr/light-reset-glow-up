
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-light-yellow">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Traditional Weight Loss Methods Fail</h2>
        <p className="section-description">
          Modern lighting disrupts your natural metabolism - but there's a solution
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem Card */}
          <Card className="border-none shadow-lg bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gray-100 p-6">
                <h3 className="text-2xl font-bold text-red-600 mb-4">The Problem</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Artificial lighting disrupts your circadian rhythm, the body's natural 24-hour cycle</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Blue light from screens and LEDs triggers hormonal imbalances that cause fat storage</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Poor light exposure decreases leptin (the fullness hormone) and increases ghrelin (hunger hormone)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Modern indoor lifestyle in Saudi Arabia limits natural light exposure, disrupting metabolism</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Solution Card */}
          <Card className="border-none shadow-lg bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-light-peach p-6">
                <h3 className="text-2xl font-bold text-bright-orange mb-4">The Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-orange" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>The Light Reset protocol realigns your body with natural light patterns, resetting your metabolism</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-orange" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Strategic light exposure activates your body's natural fat-burning mechanisms throughout the day</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-orange" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Light timing techniques balance your hunger hormones, reducing cravings without changing your diet</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-orange" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Customized to Saudi climate and lifestyle, working with your daily routine rather than disrupting it</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">How Light Affects Your Metabolism</h3>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800"
              alt="Light affecting hormones visualization" 
              className="w-full h-auto rounded-lg opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-md text-center">
                <p className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg text-sm md:text-base">
                  <span className="font-bold">Morning light</span> signals your body to 
                  <span className="text-bright-orange font-semibold"> activate metabolism</span>, while avoiding 
                  <span className="text-red-500 font-semibold"> artificial blue light</span> in the evening helps your body 
                  <span className="text-bright-orange font-semibold"> produce melatonin</span> for proper fat-burning during sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
