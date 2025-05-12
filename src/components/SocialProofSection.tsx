
import React from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      name: "Fatima A.",
      location: "Riyadh",
      quote: "I was skeptical at first, but after 4 weeks I lost 8kg without changing my diet. The afternoon energy boost was unexpected but so welcome!",
      stars: 5,
      result: "Lost 8kg in 4 weeks"
    },
    {
      name: "Layla M.",
      location: "Jeddah",
      quote: "As a busy mother, I don't have time for complicated diets. The Light Reset was simple to follow and I lost 6kg. My cravings disappeared within days.",
      stars: 5,
      result: "Lost 6kg in 5 weeks"
    },
    {
      name: "Nour S.",
      location: "Dammam",
      quote: "My metabolism had completely stalled due to years of dieting. This approach reset everything - I'm down 7kg and finally sleeping through the night.",
      stars: 4,
      result: "Lost 7kg in 5 weeks"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-light-peach">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Hear From Women Just Like You</h2>
        <p className="section-description">
          These Saudi women discovered the power of The Light Reset protocol
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="bg-white p-6">
                <div className="flex mb-2">
                  {Array(testimonial.stars).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sun-yellow text-sun-yellow" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="bg-light-orange px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-4 text-sm text-gray-500">
          <p>*Results may vary from person to person based on individual factors.</p>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Scientific Background</h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              Research published in the International Journal of Obesity shows that light exposure timing directly affects 
              metabolic function. Morning light exposure increases leptin sensitivity, helping you feel full longer.
            </p>
            <p className="text-gray-700">
              A 2019 study in the Journal of Pineal Research demonstrated that controlling blue light exposure in the evening 
              improved metabolic markers in participants, with an average weight loss of 7% over 8 weeks without dietary changes.
            </p>
            <p className="text-gray-700">
              The Light Reset protocol is based on chronobiology principles, focusing on Saudi Arabia's unique light patterns 
              to optimize your body's natural circadian rhythm and metabolism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
