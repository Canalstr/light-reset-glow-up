
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection: React.FC = () => {
  const { t, language } = useLanguage();
  
  const faqs = language === "de" ? [
    {
      question: "Wie funktioniert das Light Reset-Protokoll genau?",
      answer: "The Light Reset funktioniert, indem du dich zu bestimmten Zeiten des Tages strategisch bestimmten Lichtarten aussetzt. Dies setzt deinen zirkadianen Rhythmus zurück, der deine Energielevel, Stresshormone und den Schlaf-Wach-Zyklus kontrolliert. Indem du deine Lichtexposition mit den natürlichen Rhythmen deines Körpers abstimmst, kannst du Energie und mentale Klarheit ohne Medikamente oder Nahrungsergänzungsmittel steigern."
    },
    {
      question: "Muss ich wirklich keine großen Änderungen an meinem Lebensstil vornehmen?",
      answer: "Richtig! Das Light Reset-Protokoll funktioniert, indem es deine bestehende Routine durch Lichtexpositionsmuster optimiert. Während gesunde Gewohnheiten immer vorteilhaft sind, konzentriert sich dieses Protokoll speziell darauf, die Lichtbiologie zu nutzen, um deinen zirkadianen Rhythmus zurückzusetzen. Viele Benutzer stellen fest, dass sich ihre natürliche Energieregulierung verbessert, was gesündere Entscheidungen einfacher macht, ohne dass sie sich gezwungen fühlen."
    },
    {
      question: "Wie viel Zeit muss ich jeden Tag investieren?",
      answer: "Das Protokoll erfordert nur minimalen Zeitaufwand - nur etwa 15 Minuten konzentrierte Aufmerksamkeit täglich. Die meisten Techniken integrieren sich nahtlos in deine bestehende Routine, wie das Anpassen, wann du deine Vorhänge öffnest oder wann du bestimmte Lichter in deinem Zuhause verwendest."
    },
    {
      question: "Ist dieser Ansatz für das deutsche Klima und den Lebensstil geeignet?",
      answer: "Absolut! Das Light Reset-Protokoll wurde speziell für deutsche Frauen angepasst und berücksichtigt das einzigartige Klima, saisonale Lichtvariationen und den überwiegend drinnen verbrachten Lebensstil während der Wintermonate. Es funktioniert innerhalb deiner bestehenden täglichen Routine und bietet spezifische Anleitungen für den Umgang mit Lichtexposition trotz begrenztem natürlichen Licht in bestimmten Jahreszeiten."
    },
    {
      question: "Wie schnell werde ich Ergebnisse sehen?",
      answer: "Viele Frauen bemerken Veränderungen in ihrem Energieniveau und Schlafmuster innerhalb von 7-10 Tagen nach Beginn des Protokolls. Die signifikantesten Verbesserungen treten typischerweise zwischen Woche 3-5 auf, wenn sich die metabolischen Systeme deines Körpers vollständig zurücksetzen und an optimierte Lichtexpositionsmuster anpassen."
    },
    {
      question: "Muss ich zusätzliches Gear kaufen?",
      answer: "Keine teure Ausrüstung ist erforderlich. Das Protokoll funktioniert mit einfachen Anpassungen an deine bestehende Umgebung. Wir empfehlen einige kostengünstige Artikel wie spezifische Glühbirnen für den Abendgebrauch, aber diese sind optional und es werden erschwingliche Alternativen vorgeschlagen."
    },
    {
      question: "Was passiert nach Ende des 12-Wochen-Programms?",
      answer: "Nach Abschluss des 12-Wochen-Resets wirst du zu einem einfachen Wartungsprotokoll übergehen, das nur wenige Minuten pro Tag in Anspruch nimmt. Du wirst über alles Wissen verfügen, das du brauchst, um deine Ergebnisse langfristig mit minimalem laufenden Aufwand aufrechtzuerhalten."
    }
  ] : [
    {
      question: t("faq1.q"),
      answer: t("faq1.a")
    },
    {
      question: t("faq2.q"),
      answer: t("faq2.a")
    },
    {
      question: "How much time will I need to commit each day?",
      answer: "The protocol requires minimal time commitment—just about 15 minutes of focused attention daily. Most of the techniques integrate seamlessly into your existing routine, like adjusting when you open your curtains or when you use certain lights in your home."
    },
    {
      question: "Is this approach suitable for the German climate and lifestyle?",
      answer: "Absolutely! The Light Reset protocol has been specifically adapted for German women, taking into account the unique climate, seasonal light variations, and predominantly indoor lifestyle during winter months. It works within your existing daily routine and provides specific guidance for managing light exposure despite limited natural light during certain seasons."
    },
    {
      question: "How quickly will I see results?",
      answer: "Many women notice changes in their energy levels and sleep patterns within 7-10 days of starting the protocol. The most significant improvements typically occur between weeks 3-5 as your body's metabolic systems fully reset and adapt to optimized light exposure patterns."
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
          <h2 className="text-3xl md:text-4xl font-bold">{t("faq")}</h2>
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
