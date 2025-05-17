
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
}

const translations = {
  // Navbar
  "light.reset": {
    en: "THE LIGHT RESET",
    de: "THE LIGHT RESET"
  },
  "take.quiz": {
    en: "Take the Quiz",
    de: "Quiz machen"
  },
  
  // Hero Section
  "nobel.science": {
    en: "Backed by Nobel-Prize Winning Circadian Science",
    de: "Basierend auf Nobelpreis-gekrönter Chronobiologie"
  },
  "sleep.faster": {
    en: "Sleep 30 Min Faster in 7 Days - Using Only 10 Minutes of Morning Sunlight",
    de: "Schlafe 30 Min schneller ein in 7 Tagen - mit nur 10 Minuten Morgensonne"
  },
  "no.pills": {
    en: "No pills. No gadgets. Just a science-backed light habit you can start right now",
    de: "Keine Pillen. Keine Geräte. Nur eine wissenschaftlich fundierte Lichtgewohnheit, die du sofort beginnen kannst"
  },
  "take.quiz.45": {
    en: "Take the 45-Second Sleep Quiz",
    de: "Starte das 45-Sekunden Schlaf-Quiz"
  },
  "lose.weight": {
    en: "Super-Charge Your Energy, Sleep & Focus in 5 Weeks",
    de: "Optimiere deine Energie, deinen Schlaf und deine Konzentration in 5 Wochen"
  },
  "revolutionary.approach": {
    en: "The Revolutionary Approach German Women Are Using to Reset Their Body Clock Without Drastic Lifestyle Changes",
    de: "Der revolutionäre Ansatz, mit dem deutsche Frauen ihre innere Uhr zurücksetzen, ohne drastische Änderungen des Lebensstils"
  },
  "discover.protocol": {
    en: "Discover Your Light Protocol",
    de: "Entdecke dein Licht-Protokoll"
  },
  "learn.how": {
    en: "Learn How It Works",
    de: "Erfahre wie es funktioniert"
  },
  "light.secret": {
    en: "The Light Secret: How Natural Light Patterns Transform Your Energy & Focus",
    de: "Das Licht-Geheimnis: Wie natürliche Lichtmuster deine Energie & Konzentration steigern"
  },
  
  // VSL Section
  "watch.how": {
    en: "Watch How The Light Reset Works",
    de: "Schau dir an, wie The Light Reset funktioniert"
  },
  "discover.patterns": {
    en: "Discover how natural light patterns can transform your energy, sleep quality, and mental focus",
    de: "Entdecke, wie natürliche Lichtmuster deine Energie, Schlafqualität und mentale Konzentration verbessern können"
  },
  "vsl.quote": {
    en: "Discover the revolutionary approach that's helping German women reset their body clock without drastic lifestyle changes. The Light Reset protocol works with your body's natural biology.",
    de: "Entdecke den revolutionären Ansatz, der deutschen Frauen hilft, ihre innere Uhr zurückzusetzen, ohne drastische Änderungen des Lebensstils. Das Light Reset Protokoll arbeitet mit der natürlichen Biologie deines Körpers."
  },
  
  // Problem Solution Section
  "why.fail": {
    en: "Why Traditional Energy & Sleep Solutions Fail",
    de: "Warum herkömmliche Schlaflösungen scheitern"
  },
  "modern.lighting": {
    en: "Modern lighting disrupts your natural circadian rhythm - but there's a solution",
    de: "Modernes Licht stört deinen natürlichen zirkadianen Rhythmus - aber es gibt eine Lösung"
  },
  "the.problem": {
    en: "The Problem",
    de: "Das Problem"
  },
  "the.solution": {
    en: "The Solution",
    de: "Die Lösung"
  },
  "problem1": {
    en: "Artificial lighting disrupts your circadian rhythm, the body's natural 24-hour cycle",
    de: "Künstliches Licht stört deinen zirkadianen Rhythmus, den natürlichen 24-Stunden-Zyklus des Körpers"
  },
  "problem2": {
    en: "Blue light from screens and LEDs triggers hormonal imbalances that cause energy crashes and poor sleep",
    de: "Blaues Licht von Bildschirmen und LEDs löst hormonelle Ungleichgewichte aus, die zu Energieabstürzen und schlechtem Schlaf führen"
  },
  "problem3": {
    en: "Poor light exposure decreases melatonin (the sleep hormone) and increases cortisol at the wrong times",
    de: "Schlechte Lichtexposition verringert Melatonin (das Schlafhormon) und erhöht Cortisol zu falschen Zeiten"
  },
  "problem4": {
    en: "Modern indoor lifestyle in Germany, especially during winter, limits natural light exposure, disrupting focus and energy",
    de: "Moderner Indoor-Lebensstil in Deutschland, besonders im Winter, begrenzt die natürliche Lichtexposition und stört Konzentration und Energie"
  },
  "solution1": {
    en: "The Light Reset protocol realigns your body with natural light patterns, resetting your circadian rhythm",
    de: "Das Light Reset-Protokoll richtet deinen Körper wieder an natürlichen Lichtmustern aus und setzt deinen zirkadianen Rhythmus zurück"
  },
  "solution2": {
    en: "Strategic light exposure activates your body's natural energy production throughout the day",
    de: "Strategische Lichtexposition aktiviert die natürliche Energieproduktion deines Körpers während des Tages"
  },
  "solution3": {
    en: "Light timing techniques balance your hormones, improving sleep quality and mental clarity",
    de: "Lichtzeitgebungstechniken balancieren deine Hormone und verbessern die Schlafqualität und geistige Klarheit"
  },
  "solution4": {
    en: "Customized to German climate and lifestyle, working with your daily routine rather than disrupting it",
    de: "Angepasst an das deutsche Klima und den Lebensstil, arbeitet mit deiner täglichen Routine, anstatt sie zu stören"
  },
  "how.affects": {
    en: "How Light Affects Your Body Clock",
    de: "Wie Licht deine innere Uhr beeinflusst"
  },
  "morning.light": {
    en: "Morning light signals your body to boost energy and focus, while avoiding artificial blue light in the evening helps your body produce melatonin for proper sleep and recovery.",
    de: "Morgenlicht signalisiert deinem Körper, Energie und Konzentration zu steigern, während das Vermeiden von künstlichem blauen Licht am Abend deinem Körper hilft, Melatonin für richtigen Schlaf und Erholung zu produzieren."
  },
  
  // Benefits Section
  "benefits.of": {
    en: "Benefits of The Light Reset",
    de: "Vorteile von The Light Reset"
  },
  "experience.benefits": {
    en: "Experience these transformative benefits without drastic lifestyle changes",
    de: "Erlebe diese transformativen Vorteile ohne drastische Änderungen des Lebensstils"
  },
  "benefit1.title": {
    en: "Optimized energy levels throughout the day",
    de: "Optimierte Energieniveaus den ganzen Tag über"
  },
  "benefit1.desc": {
    en: "The Light Reset protocol activates your body's natural energy production through precisely timed light exposure",
    de: "Das Light Reset-Protokoll aktiviert die natürliche Energieproduktion deines Körpers durch präzise getimte Lichtexposition"
  },
  "benefit2.title": {
    en: "Enhanced mental focus & clarity in 7-10 days",
    de: "Verbesserte mentale Konzentration & Klarheit in 7-10 Tagen"
  },
  "benefit2.desc": {
    en: "Experience noticeably sharper thinking and improved productivity as your light-regulated hormones normalize",
    de: "Erlebe spürbar schärferes Denken und verbesserte Produktivität, während sich deine lichtgesteuerten Hormone normalisieren"
  },
  "benefit3.title": {
    en: "Steady energy without afternoon slumps",
    de: "Gleichmäßige Energie ohne Nachmittagstiefs"
  },
  "benefit3.desc": {
    en: "Feel consistently energetic with naturally aligned circadian rhythms - no more afternoon slumps",
    de: "Fühle dich durchgehend energiegeladen mit natürlich ausgerichteten zirkadianen Rhythmen - keine Nachmittagstiefs mehr"
  },
  "benefit4.title": {
    en: "Enhanced sleep quality",
    de: "Verbesserte Schlafqualität"
  },
  "benefit4.desc": {
    en: "Wake up refreshed after deeper, more restorative sleep due to properly balanced melatonin production",
    de: "Wache erfrischt nach tieferem, erholsamerem Schlaf durch richtig ausbalancierte Melatoninproduktion auf"
  },
  "benefit5.title": {
    en: "Natural mental performance optimization",
    de: "Natürliche Optimierung der mentalen Leistungsfähigkeit"
  },
  "benefit5.desc": {
    en: "Help your body naturally optimize cognitive function without artificial supplements or stimulants",
    de: "Hilf deinem Körper, die kognitive Funktion auf natürliche Weise zu optimieren, ohne künstliche Nahrungsergänzungsmittel oder Stimulanzien"
  },
  "without.changing": {
    en: "All Without Major Lifestyle Changes",
    de: "Alles ohne große Änderungen des Lebensstils"
  },
  "light.reset.works": {
    en: "The Light Reset works with your current lifestyle and daily habits. It's about when you expose yourself to different types of light, not about restrictive diets or exhausting workouts.",
    de: "The Light Reset funktioniert mit deinem aktuellen Lebensstil und deinen täglichen Gewohnheiten. Es geht darum, wann du dich verschiedenen Lichttypen aussetzt, nicht um restriktive Diäten oder erschöpfende Workouts."
  },
  
  // Social Proof Section
  "hear.from": {
    en: "Hear From Women Just Like You",
    de: "Höre von Frauen wie dir"
  },
  "saudi.women": {
    en: "These German women discovered the power of The Light Reset protocol",
    de: "Diese deutschen Frauen haben die Kraft des Light Reset-Protokolls entdeckt"
  },
  "johanna.quote": {
    en: "Down 27 min sleep latency in 6 days",
    de: "27 Minuten schneller eingeschlafen in 6 Tagen"
  },
  "lisa.quote": {
    en: "Falling asleep 32 minutes faster after just 5 days",
    de: "32 Minuten schneller eingeschlafen nach nur 5 Tagen"
  },
  "nina.quote": {
    en: "Sleep quality improved by 24% in one week",
    de: "Schlafqualität um 24% verbessert in einer Woche"
  },
  "results.vary": {
    en: "*Results may vary from person to person based on individual factors.",
    de: "*Ergebnisse können von Person zu Person aufgrund individueller Faktoren variieren."
  },
  "scientific.background": {
    en: "Scientific Background",
    de: "Wissenschaftlicher Hintergrund"
  },
  "research1": {
    en: "Research published in the Journal of Clinical Endocrinology & Metabolism shows that light exposure timing directly affects hormone production. Morning light exposure increases cortisol awakening response, helping you feel energetic.",
    de: "Im Journal of Clinical Endocrinology & Metabolism veröffentlichte Forschung zeigt, dass der Zeitpunkt der Lichtexposition die Hormonproduktion direkt beeinflusst. Morgendliche Lichtexposition erhöht die Cortisol-Aufwachreaktion und hilft dir, dich energiegeladen zu fühlen."
  },
  "research2": {
    en: "A 2021 study in the Journal of Pineal Research demonstrated that controlling blue light exposure in the evening improved cognitive performance in participants, with 84% reporting better sleep quality within 2 weeks.",
    de: "Eine 2021 im Journal of Pineal Research veröffentlichte Studie zeigte, dass die Kontrolle der Blaulichtexposition am Abend die kognitive Leistung der Teilnehmer verbesserte, wobei 84% innerhalb von 2 Wochen über eine bessere Schlafqualität berichteten."
  },
  "research3": {
    en: "The Light Reset protocol is based on chronobiology principles, focusing on Germany's unique light patterns to optimize your body's natural circadian rhythm and cognitive performance.",
    de: "Das Light Reset-Protokoll basiert auf chronobiologischen Prinzipien und konzentriert sich auf Deutschlands einzigartige Lichtmuster, um den natürlichen zirkadianen Rhythmus und die kognitive Leistung deines Körpers zu optimieren."
  },
  
  // Quiz Section
  "discover.personal": {
    en: "Discover Your Personal Light Reset Protocol",
    de: "Entdecke dein persönliches Light Reset-Protokoll"
  },
  "find.out": {
    en: "Find out how much your energy and focus could improve with your custom light protocol",
    de: "Finde heraus, wie sehr sich deine Energie und Konzentration mit deinem individuellen Lichtprotokoll verbessern könnten"
  },
  "step1": {
    en: "Take the 45-second quiz",
    de: "Mache den 45-Sekunden-Quiz"
  },
  "step2": {
    en: "Get your personalized light protocol",
    de: "Erhalte dein personalisiertes Lichtprotokoll"
  },
  "step3": {
    en: "Start feeling better in days",
    de: "Beginne, dich innerhalb von Tagen besser zu fühlen"
  },
  "your.body": {
    en: "Your body is unique. By answering a few quick questions about your lifestyle, sleep patterns, and daily routine, we'll create a personalized Light Reset Protocol specifically for you.",
    de: "Dein Körper ist einzigartig. Indem du einige schnelle Fragen zu deinem Lebensstil, Schlafmustern und täglicher Routine beantwortest, erstellen wir ein personalisiertes Light Reset-Protokoll speziell für dich."
  },
  "takes.less": {
    en: "Takes less than a minute. No obligation.",
    de: "Dauert weniger als eine Minute. Keine Verpflichtung."
  },
  
  // FAQ Section
  "faq": {
    en: "Frequently Asked Questions",
    de: "Häufig gestellte Fragen"
  },
  "faq1.q": {
    en: "How exactly does the Light Reset protocol work?",
    de: "Wie funktioniert das Light Reset-Protokoll genau?"
  },
  "faq1.a": {
    en: "The Light Reset works by strategically exposing you to specific types of light at optimal times throughout the day. This resets your circadian rhythm, which controls your energy levels, stress hormones, and sleep-wake cycle. By aligning your light exposure with your body's natural rhythms, you can boost energy and mental clarity without medication or supplements.",
    de: "The Light Reset funktioniert, indem du strategisch zu optimalen Zeiten während des Tages bestimmten Lichttypen ausgesetzt wirst. Dies setzt deinen zirkadianen Rhythmus zurück, der deine Energieniveaus, Stresshormone und den Schlaf-Wach-Zyklus kontrolliert. Durch die Abstimmung deiner Lichtexposition mit den natürlichen Rhythmen deines Körpers kannst du Energie und geistige Klarheit ohne Medikamente oder Nahrungsergänzungsmittel steigern."
  },
  "faq2.q": {
    en: "Do I really not need to make major lifestyle changes?",
    de: "Muss ich wirklich keine großen Änderungen an meinem Lebensstil vornehmen?"
  },
  "faq2.a": {
    en: "Correct! The Light Reset protocol works by optimizing your existing routine through light exposure patterns. While healthy habits are always beneficial, this protocol focuses specifically on using light biology to reset your circadian rhythm. Many users find that their natural energy regulation improves, making healthier choices easier without feeling forced.",
    de: "Richtig! Das Light Reset-Protokoll funktioniert, indem es deine bestehende Routine durch Lichtexpositionsmuster optimiert. Während gesunde Gewohnheiten immer vorteilhaft sind, konzentriert sich dieses Protokoll speziell darauf, die Lichtbiologie zu nutzen, um deinen zirkadianen Rhythmus zurückzusetzen. Viele Benutzer stellen fest, dass sich ihre natürliche Energieregulierung verbessert, was gesündere Entscheidungen einfacher macht, ohne dass sie sich gezwungen fühlen."
  },
  
  // Purchase Section
  "start.journey": {
    en: "Start Your Light Sprint Journey Today",
    de: "Starte deinen Light Sprint"
  },
  "invest.in": {
    en: "Invest in a biological transformation that works with your body, not against it",
    de: "Gönn dir eine biologische Transformation, die mit deinem Körper arbeitet, nicht gegen ihn"
  },
  "complete.system": {
    en: "The Complete Light Reset Sprint",
    de: "Der komplette Light Reset Sprint"
  },
  "everything.you.need": {
    en: "Everything you need to reset your body clock using light biology",
    de: "Alles, was du brauchst, um deine innere Uhr mit Lichtbiologie zurückzusetzen"
  },
  "feature1": {
    en: "Complete 7-Day Light Reset Sprint",
    de: "Kompletter 7-Tage Licht-Sprint"
  },
  "special.launch": {
    en: "Special Launch Price",
    de: "Spezieller Einführungspreis"
  },
  "price": {
    en: "15 €",
    de: "15 €"
  },
  "one-time": {
    en: "one-time payment",
    de: "einmalige Zahlung"
  },
  "regular.price": {
    en: "Regular Price:",
    de: "Regulärer Preis:"
  },
  "save.today": {
    en: "Save 14 € Today",
    de: "Spare heute 14 €"
  },
  "start.your": {
    en: "Start Your Light Sprint",
    de: "Starte deinen Licht Sprint"
  },
  "secure.payment": {
    en: "Secure payment via credit card or Apple Pay",
    de: "Sichere Zahlung per Kreditkarte oder Apple Pay"
  },
  
  // Footer
  "privacy.policy": {
    en: "Privacy Policy",
    de: "Datenschutzrichtlinie"
  },
  "terms.of.service": {
    en: "Terms of Service",
    de: "Nutzungsbedingungen"
  },
  "contact": {
    en: "Contact",
    de: "Kontakt"
  },
  "copyright": {
    en: "© 2025 The Light Reset. All rights reserved.",
    de: "© 2025 The Light Reset. Alle Rechte vorbehalten."
  },
  "disclaimer": {
    en: "Results may vary. This program is not intended to diagnose, treat, cure or prevent any disease. Always consult with your physician before starting any new health program.",
    de: "Ergebnisse können variieren. Dieses Programm soll keine Krankheiten diagnostizieren, behandeln, heilen oder verhindern. Konsultieren Sie immer Ihren Arzt, bevor Sie ein neues Gesundheitsprogramm beginnen."
  },
  
  // Language Toggle
  "lang.toggle": {
    en: "English | Deutsch",
    de: "English | Deutsch"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: "de", // Changed default to German
  setLanguage: () => {},
  translations,
  t: () => ""
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get the language from localStorage or default to German
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage as Language) || "de";
  });

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem("language", language);
    
    // Add or remove the lang-de class to the body
    if (language === "de") {
      document.body.classList.add("lang-de");
      document.documentElement.setAttribute("dir", "ltr");
    } else {
      document.body.classList.remove("lang-de");
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
