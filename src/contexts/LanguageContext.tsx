
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
}

const translations = {
  // Navbar
  "light.reset": {
    en: "The Light Reset",
    ar: "إعادة ضبط الضوء"
  },
  "take.quiz": {
    en: "Take the Quiz",
    ar: "خذ الاختبار"
  },
  
  // Hero Section
  "lose.weight": {
    en: "Lose Up To 10kg in 5 Weeks Using Light Biology",
    ar: "فقدان ما يصل إلى 10 كجم في 5 أسابيع باستخدام بيولوجيا الضوء"
  },
  "revolutionary.approach": {
    en: "The Revolutionary Approach Saudi Women Are Using to Reset Their Metabolism Without Changing Diet or Exercise",
    ar: "النهج الثوري الذي تستخدمه النساء السعوديات لإعادة ضبط التمثيل الغذائي دون تغيير النظام الغذائي أو التمارين"
  },
  "discover.protocol": {
    en: "Discover Your Light Protocol",
    ar: "اكتشف بروتوكول الضوء الخاص بك"
  },
  "learn.how": {
    en: "Learn How It Works",
    ar: "تعرف على كيفية عمله"
  },
  "light.secret": {
    en: "The Light Secret: How Natural Light Patterns Transform Your Metabolism",
    ar: "سر الضوء: كيف تحول أنماط الضوء الطبيعي عملية التمثيل الغذائي لديك"
  },
  
  // VSL Section
  "watch.how": {
    en: "Watch How The Light Reset Works",
    ar: "شاهد كيف يعمل إعادة ضبط الضوء"
  },
  "discover.patterns": {
    en: "Discover how natural light patterns can transform your metabolism and help you lose weight",
    ar: "اكتشف كيف يمكن لأنماط الضوء الطبيعي أن تحول عملية التمثيل الغذائي لديك وتساعدك على إنقاص الوزن"
  },
  "vsl.quote": {
    en: "Discover the revolutionary approach that's helping Saudi women reset their metabolism without changing diet or exercise. The Light Reset protocol works with your body's natural biology.",
    ar: "اكتشف النهج الثوري الذي يساعد النساء السعوديات على إعادة ضبط التمثيل الغذائي دون تغيير النظام الغذائي أو ممارسة الرياضة. يعمل بروتوكول إعادة ضبط الضوء مع بيولوجيا جسمك الطبيعية."
  },
  
  // Problem Solution Section
  "why.fail": {
    en: "Why Traditional Weight Loss Methods Fail",
    ar: "لماذا تفشل طرق فقدان الوزن التقليدية"
  },
  "modern.lighting": {
    en: "Modern lighting disrupts your natural metabolism - but there's a solution",
    ar: "الإضاءة الحديثة تعطل عملية التمثيل الغذائي الطبيعية - ولكن هناك حل"
  },
  "the.problem": {
    en: "The Problem",
    ar: "المشكلة"
  },
  "the.solution": {
    en: "The Solution",
    ar: "الحل"
  },
  "problem1": {
    en: "Artificial lighting disrupts your circadian rhythm, the body's natural 24-hour cycle",
    ar: "الإضاءة الاصطناعية تعطل إيقاعك اليومي، الدورة الطبيعية للجسم على مدار 24 ساعة"
  },
  "problem2": {
    en: "Blue light from screens and LEDs triggers hormonal imbalances that cause fat storage",
    ar: "الضوء الأزرق من الشاشات ومصابيح LED يسبب اختلالات هرمونية تؤدي إلى تخزين الدهون"
  },
  "problem3": {
    en: "Poor light exposure decreases leptin (the fullness hormone) and increases ghrelin (hunger hormone)",
    ar: "التعرض السيء للضوء يقلل من اللبتين (هرمون الشبع) ويزيد من الجريلين (هرمون الجوع)"
  },
  "problem4": {
    en: "Modern indoor lifestyle in Saudi Arabia limits natural light exposure, disrupting metabolism",
    ar: "نمط الحياة الداخلي الحديث في المملكة العربية السعودية يحد من التعرض للضوء الطبيعي، مما يعطل عملية التمثيل الغذائي"
  },
  "solution1": {
    en: "The Light Reset protocol realigns your body with natural light patterns, resetting your metabolism",
    ar: "يعيد بروتوكول إعادة ضبط الضوء مواءمة جسمك مع أنماط الضوء الطبيعية، مما يعيد ضبط التمثيل الغذائي لديك"
  },
  "solution2": {
    en: "Strategic light exposure activates your body's natural fat-burning mechanisms throughout the day",
    ar: "التعرض الاستراتيجي للضوء ينشط آليات حرق الدهون الطبيعية في جسمك طوال اليوم"
  },
  "solution3": {
    en: "Light timing techniques balance your hunger hormones, reducing cravings without changing your diet",
    ar: "تقنيات توقيت الضوء توازن هرمونات الجوع لديك، مما يقلل من الرغبة الشديدة دون تغيير نظامك الغذائي"
  },
  "solution4": {
    en: "Customized to Saudi climate and lifestyle, working with your daily routine rather than disrupting it",
    ar: "مخصص للمناخ ونمط الحياة السعودي، يعمل مع روتينك اليومي بدلاً من تعطيله"
  },
  "how.affects": {
    en: "How Light Affects Your Metabolism",
    ar: "كيف يؤثر الضوء على عملية التمثيل الغذائي لديك"
  },
  "morning.light": {
    en: "Morning light signals your body to activate metabolism, while avoiding artificial blue light in the evening helps your body produce melatonin for proper fat-burning during sleep.",
    ar: "ضوء الصباح يشير لجسمك لتنشيط عملية التمثيل الغذائي، بينما تجنب الضوء الأزرق الاصطناعي في المساء يساعد جسمك على إنتاج الميلاتونين لحرق الدهون بشكل صحيح أثناء النوم."
  },
  
  // Benefits Section
  "benefits.of": {
    en: "Benefits of The Light Reset",
    ar: "فوائد إعادة ضبط الضوء"
  },
  "experience.benefits": {
    en: "Experience these transformative benefits without changing your diet or exercise routine",
    ar: "جرب هذه الفوائد التحويلية دون تغيير نظامك الغذائي أو روتين التمارين الخاص بك"
  },
  "benefit1.title": {
    en: "Lose up to 10kg in 5 weeks",
    ar: "فقدان ما يصل إلى 10 كجم في 5 أسابيع"
  },
  "benefit1.desc": {
    en: "The Light Reset protocol activates your body's natural fat-burning processes through precisely timed light exposure",
    ar: "بروتوكول إعادة ضبط الضوء ينشط عمليات حرق الدهون الطبيعية في جسمك من خلال التعرض للضوء في أوقات محددة بدقة"
  },
  "benefit2.title": {
    en: "Reduced hunger & cravings in 7-10 days",
    ar: "تقليل الجوع والرغبة الشديدة في 7-10 أيام"
  },
  "benefit2.desc": {
    en: "Experience noticeably fewer cravings as your light-regulated hormones restore natural hunger signals",
    ar: "اختبر رغبات شديدة أقل بشكل ملحوظ حيث تستعيد هرموناتك المنظمة بالضوء إشارات الجوع الطبيعية"
  },
  "benefit3.title": {
    en: "Improved energy throughout the day",
    ar: "تحسين الطاقة طوال اليوم"
  },
  "benefit3.desc": {
    en: "Feel consistently energetic with naturally aligned circadian rhythms - no more afternoon slumps",
    ar: "اشعر بالنشاط باستمرار مع إيقاعات يومية متناسقة بشكل طبيعي - لا مزيد من الانخفاضات بعد الظهر"
  },
  "benefit4.title": {
    en: "Enhanced sleep quality",
    ar: "تعزيز جودة النوم"
  },
  "benefit4.desc": {
    en: "Wake up refreshed after deeper, more restorative sleep due to properly balanced melatonin production",
    ar: "استيقظ منتعشًا بعد نوم أعمق وأكثر تجديدًا بسبب إنتاج الميلاتونين المتوازن بشكل صحيح"
  },
  "benefit5.title": {
    en: "Natural metabolism regulation",
    ar: "تنظيم التمثيل الغذائي الطبيعي"
  },
  "benefit5.desc": {
    en: "Help your body naturally optimize fat-burning without artificial supplements or extreme diets",
    ar: "ساعد جسمك على تحسين حرق الدهون بشكل طبيعي دون مكملات اصطناعية أو أنظمة غذائية قاسية"
  },
  "without.changing": {
    en: "All Without Changing Your Diet or Exercise Routine",
    ar: "كل ذلك دون تغيير نظامك الغذائي أو روتين التمارين الرياضية"
  },
  "light.reset.works": {
    en: "The Light Reset works with your current lifestyle and daily habits. It's about when you expose yourself to different types of light, not about restrictive diets or exhausting workouts.",
    ar: "يعمل إعادة ضبط الضوء مع نمط حياتك الحالي وعاداتك اليومية. الأمر يتعلق بوقت تعرضك لأنواع مختلفة من الضوء، وليس بالأنظمة الغذائية المقيدة أو التمارين المرهقة."
  },
  
  // Social Proof Section
  "hear.from": {
    en: "Hear From Women Just Like You",
    ar: "اسمع من نساء مثلك تمامًا"
  },
  "saudi.women": {
    en: "These Saudi women discovered the power of The Light Reset protocol",
    ar: "اكتشفت هؤلاء النساء السعوديات قوة بروتوكول إعادة ضبط الضوء"
  },
  "fatima.quote": {
    en: "I was skeptical at first, but after 4 weeks I lost 8kg without changing my diet. The afternoon energy boost was unexpected but so welcome!",
    ar: "كنت متشككة في البداية، ولكن بعد 4 أسابيع فقدت 8 كجم دون تغيير نظامي الغذائي. كانت زيادة الطاقة بعد الظهر غير متوقعة ولكنها كانت مرحب بها!"
  },
  "layla.quote": {
    en: "As a busy mother, I don't have time for complicated diets. The Light Reset was simple to follow and I lost 6kg. My cravings disappeared within days.",
    ar: "كأم مشغولة، ليس لدي وقت لأنظمة غذائية معقدة. كان إعادة ضبط الضوء بسيطًا للمتابعة وفقدت 6 كجم. اختفت رغباتي الشديدة في غضون أيام."
  },
  "nour.quote": {
    en: "My metabolism had completely stalled due to years of dieting. This approach reset everything - I'm down 7kg and finally sleeping through the night.",
    ar: "توقفت عملية التمثيل الغذائي لدي تمامًا بسبب سنوات من الحمية. أعاد هذا النهج ضبط كل شيء - فقدت 7 كجم وأخيرًا أنام طوال الليل."
  },
  "results.vary": {
    en: "*Results may vary from person to person based on individual factors.",
    ar: "*قد تختلف النتائج من شخص لآخر بناءً على عوامل فردية."
  },
  "scientific.background": {
    en: "Scientific Background",
    ar: "الخلفية العلمية"
  },
  "research1": {
    en: "Research published in the International Journal of Obesity shows that light exposure timing directly affects metabolic function. Morning light exposure increases leptin sensitivity, helping you feel full longer.",
    ar: "أظهرت الأبحاث المنشورة في المجلة الدولية للسمنة أن توقيت التعرض للضوء يؤثر بشكل مباشر على وظيفة التمثيل الغذائي. يزيد التعرض لضوء الصباح من حساسية اللبتين، مما يساعدك على الشعور بالشبع لفترة أطول."
  },
  "research2": {
    en: "A 2019 study in the Journal of Pineal Research demonstrated that controlling blue light exposure in the evening improved metabolic markers in participants, with an average weight loss of 7% over 8 weeks without dietary changes.",
    ar: "أظهرت دراسة أجريت عام 2019 في مجلة أبحاث الغدة الصنوبرية أن التحكم في التعرض للضوء الأزرق في المساء حسّن علامات التمثيل الغذائي لدى المشاركين، مع متوسط ​​فقدان الوزن بنسبة 7٪ على مدى 8 أسابيع دون تغييرات غذائية."
  },
  "research3": {
    en: "The Light Reset protocol is based on chronobiology principles, focusing on Saudi Arabia's unique light patterns to optimize your body's natural circadian rhythm and metabolism.",
    ar: "يعتمد بروتوكول إعادة ضبط الضوء على مبادئ البيولوجيا الزمنية، مع التركيز على أنماط الضوء الفريدة في المملكة العربية السعودية لتحسين إيقاع الساعة البيولوجية الطبيعية للجسم وعملية التمثيل الغذائي."
  },
  
  // Quiz Section
  "discover.personal": {
    en: "Discover Your Personal Light Reset Protocol",
    ar: "اكتشف بروتوكول إعادة ضبط الضوء الشخصي الخاص بك"
  },
  "find.out": {
    en: "Find out how much weight you could lose with your custom light protocol",
    ar: "اكتشف مقدار الوزن الذي يمكنك فقدانه مع بروتوكول الضوء المخصص لك"
  },
  "step1": {
    en: "Take the 60-second quiz",
    ar: "خذ الاختبار لمدة 60 ثانية"
  },
  "step2": {
    en: "Get your personalized light protocol",
    ar: "احصل على بروتوكول الضوء المخصص لك"
  },
  "step3": {
    en: "Start losing weight in days",
    ar: "ابدأ في فقدان الوزن في أيام"
  },
  "your.body": {
    en: "Your body is unique. By answering a few quick questions about your lifestyle, sleep patterns, and daily routine, we'll create a personalized Light Reset Protocol specifically for you.",
    ar: "جسمك فريد من نوعه. من خلال الإجابة على بعض الأسئلة السريعة حول نمط حياتك وأنماط نومك وروتينك اليومي، سننشئ بروتوكول إعادة ضبط الضوء مخصصًا خصيصًا لك."
  },
  "take.60second": {
    en: "Take the 60-Second Quiz",
    ar: "خذ الاختبار لمدة 60 ثانية"
  },
  "takes.less": {
    en: "Takes less than a minute. No obligation.",
    ar: "يستغرق أقل من دقيقة. لا التزام."
  },
  
  // FAQ Section
  "faq": {
    en: "Frequently Asked Questions",
    ar: "الأسئلة الشائعة"
  },
  "faq1.q": {
    en: "How exactly does the Light Reset protocol work?",
    ar: "كيف يعمل بروتوكول إعادة ضبط الضوء بالضبط؟"
  },
  "faq1.a": {
    en: "The Light Reset works by strategically exposing you to specific types of light at optimal times throughout the day. This resets your circadian rhythm, which controls your metabolism, hunger hormones, and fat-burning processes. By aligning your light exposure with your body's natural rhythms, you can boost metabolism without changing diet or exercise.",
    ar: "يعمل إعادة ضبط الضوء من خلال تعريضك استراتيجيًا لأنواع محددة من الضوء في أوقات مثالية طوال اليوم. هذا يعيد ضبط إيقاعك اليومي، الذي يتحكم في عملية التمثيل الغذائي وهرمونات الجوع وعمليات حرق الدهون. من خلال مواءمة تعرضك للضوء مع إيقاعات جسمك الطبيعية، يمكنك تعزيز عملية التمثيل الغذائي دون تغيير النظام الغذائي أو التمارين."
  },
  "faq2.q": {
    en: "Do I really not need to change my diet or exercise routine?",
    ar: "هل حقًا لا أحتاج إلى تغيير نظامي الغذائي أو روتين التمارين الخاص بي؟"
  },
  "faq2.a": {
    en: "Correct! The Light Reset protocol works independently of diet and exercise by optimizing your body's natural metabolic processes through light exposure. While healthy eating and movement are always beneficial, this protocol focuses specifically on using light biology to reset your metabolism. Many users find that their natural appetite regulation improves, making healthier food choices easier.",
    ar: "صحيح! يعمل بروتوكول إعادة ضبط الضوء بشكل مستقل عن النظام الغذائي والتمارين من خلال تحسين عمليات التمثيل الغذائي الطبيعية في جسمك من خلال التعرض للضوء. في حين أن الأكل الصحي والحركة مفيدان دائمًا، يركز هذا البروتوكول بشكل خاص على استخدام بيولوجيا الضوء لإعادة ضبط التمثيل الغذائي لديك. يجد العديد من المستخدمين أن تنظيم شهيتهم الطبيعية يتحسن، مما يجعل اختيارات الطعام الصحية أسهل."
  },
  
  // Purchase Section
  "start.journey": {
    en: "Start Your Light Reset Journey Today",
    ar: "ابدأ رحلة إعادة ضبط الضوء اليوم"
  },
  "invest.in": {
    en: "Invest in a metabolic transformation that works with your body, not against it",
    ar: "استثمر في تحول التمثيل الغذائي الذي يعمل مع جسمك، وليس ضده"
  },
  "complete.system": {
    en: "The Complete Light Reset System",
    ar: "نظام إعادة ضبط الضوء الكامل"
  },
  "everything.you.need": {
    en: "Everything you need to reset your metabolism using light biology",
    ar: "كل ما تحتاجه لإعادة ضبط التمثيل الغذائي باستخدام بيولوجيا الضوء"
  },
  "feature1": {
    en: "Complete 5-Week Light Reset Protocol",
    ar: "بروتوكول إعادة ضبط الضوء الكامل لمدة 5 أسابيع"
  },
  "special.launch": {
    en: "Special Launch Price",
    ar: "سعر الإطلاق الخاص"
  },
  "price": {
    en: "99 SAR",
    ar: "٩٩ ريال سعودي"
  },
  "one.time": {
    en: "one-time payment",
    ar: "دفعة واحدة"
  },
  "regular.price": {
    en: "Regular Price:",
    ar: "السعر العادي:"
  },
  "save.today": {
    en: "Save 50 SAR Today",
    ar: "وفر 50 ريال اليوم"
  },
  "start.your": {
    en: "Start Your Light Reset Journey",
    ar: "ابدأ رحلة إعادة ضبط الضوء الخاصة بك"
  },
  "secure.payment": {
    en: "Secure payment via credit card or Apple Pay",
    ar: "دفع آمن عبر بطاقة الائتمان أو Apple Pay"
  },
  
  // Footer
  "privacy.policy": {
    en: "Privacy Policy",
    ar: "سياسة الخصوصية"
  },
  "terms.of.service": {
    en: "Terms of Service",
    ar: "شروط الخدمة"
  },
  "contact": {
    en: "Contact",
    ar: "اتصل بنا"
  },
  "copyright": {
    en: "© 2025 The Light Reset. All rights reserved.",
    ar: "© ٢٠٢٥ إعادة ضبط الضوء. جميع الحقوق محفوظة."
  },
  "disclaimer": {
    en: "Results may vary. This program is not intended to diagnose, treat, cure or prevent any disease. Always consult with your physician before starting any new health program.",
    ar: "قد تختلف النتائج. هذا البرنامج ليس المقصود منه تشخيص أو علاج أو شفاء أو منع أي مرض. استشر طبيبك دائمًا قبل البدء في أي برنامج صحي جديد."
  },
  
  // Language Toggle
  "lang.toggle": {
    en: "English | العربية",
    ar: "English | العربية"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  translations,
  t: () => ""
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get the language from localStorage or default to English
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage as Language) || "en";
  });

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem("language", language);
    
    // Add or remove the lang-ar class to the body
    if (language === "ar") {
      document.body.classList.add("lang-ar");
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.body.classList.remove("lang-ar");
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
