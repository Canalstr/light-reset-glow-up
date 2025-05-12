
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How exactly does the Light Reset protocol work?",
      answer: "The Light Reset works by strategically exposing you to specific types of light at optimal times throughout the day. This resets your circadian rhythm, which controls your metabolism, hunger hormones, and fat-burning processes. By aligning your light exposure with your body's natural rhythms, you can boost metabolism without changing diet or exercise."
    },
    {
      question: "Do I really not need to change my diet or exercise routine?",
      answer: "Correct! The Light Reset protocol works independently of diet and exercise by optimizing your body's natural metabolic processes through light exposure. While healthy eating and movement are always beneficial, this protocol focuses specifically on using light biology to reset your metabolism. Many users find that their natural appetite regulation improves, making healthier food choices easier."
    },
    {
      question: "How much time will I need to commit each day?",
      answer: "The protocol requires minimal time commitment—just about 15 minutes of focused attention daily. Most of the techniques integrate seamlessly into your existing routine, like adjusting when you open your curtains or when you use certain lights in your home."
    },
    {
      question: "Is this approach suitable for the Saudi climate and lifestyle?",
      answer: "Absolutely! The Light Reset protocol has been specifically adapted for Saudi women, taking into account the unique climate, indoor lifestyle, and cultural considerations. It works within your existing daily routine and provides specific guidance for managing light exposure despite high outdoor temperatures and predominantly indoor living."
    },
    {
      question: "How quickly will I see results?",
      answer: "Many women notice changes in their energy levels and hunger patterns within 7-10 days of starting the protocol. Weight loss typically begins within the first two weeks, with the most dramatic results occurring between weeks 3-5 as your body's metabolic systems fully reset."
    },
    {
      question: "Will I need to purchase special equipment?",
      answer: "No expensive equipment is required. The protocol works with simple adjustments to your existing environment. We do recommend a few inexpensive items like specific light bulbs for evening use, but these are optional and affordable alternatives are suggested."
    },
    {
      question: "What happens after the 5-week program ends?",
      answer: "After completing the 5-week reset, you'll transition to a simple maintenance protocol that takes just minutes per day. You'll have all the knowledge needed to maintain your results long-term with minimal ongoing effort."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <HelpCircle className="h-8 w-8 text-bright-orange mr-2" />
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
