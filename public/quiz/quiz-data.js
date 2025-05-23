
// Quiz data storage
const quizData = {
  answers: [null, null, null],
  email: '',
  phone: '',
  outcome: '',
  score: 0,
  refID: ''
};

// Questions and their options
const questions = [
  {
    id: "q1",
    question: "Wann wachst du an Arbeitstagen normalerweise auf?",
    options: [
      { value: 0, text: "05–06 Uhr" },
      { value: 1, text: "06–07 Uhr" },
      { value: 2, text: "07–08 Uhr" },
      { value: 3, text: "Nach 08 Uhr" }
    ]
  },
  {
    id: "q2",
    question: "Wie lange brauchst du aktuell, um einzuschlafen?",
    options: [
      { value: 0, text: "<10 Min" },
      { value: 1, text: "10–20 Min" },
      { value: 2, text: "20–40 Min" },
      { value: 3, text: ">40 Min" }
    ]
  },
  {
    id: "q3",
    question: "Wie viele Kaffees / Colas / Energy-Drinks trinkst du täglich NACH 14 Uhr?",
    options: [
      { value: 0, text: "0" },
      { value: 1, text: "1" },
      { value: 2, text: "2–3" },
      { value: 3, text: ">3" }
    ]
  }
];

// Results for different user profiles
const results = {
  early_bird: {
    title: "Frühaufsteher",
    description: `
      <p>Früh wach, trotzdem schlapp? Hol dir +15 Minuten Tiefschlaf* – jede Nacht!</p>
      <p>Mit drei Mikro-Tweaks aus dem Licht-Sprint System steigern Frühaufsteher ihren Tiefschlaf um 10–15 Minuten ab der ersten Anwendung.</p>
      
      <h3 style="margin-top:20px;font-size:18px;">Dein 5-Minuten Setup</h3>
      <ul>
        <li>Lichtfenster-Hack: programmier deine innere Uhr neu</li>
        <li>Sunrise-Switch: reduziere Cortisol-Spitzen am Morgen</li>
        <li>Sleep-Shield: blockiere störendes Blaulicht ab 20 Uhr</li>
      </ul>
      
      <p style="margin-top:20px;font-weight:600;">Ergebnis: Mehr Fokus, bessere Laune, weniger Kaffee-Crash – garantiert oder Geld zurück.</p>
    `
  },
  night_owl: {
    title: "Späte Eule",
    description: `
      <p>⚠️ SCHLAF-ALARM: Deine Nacht-Eulen-Gene rauben dir bis zu 3,5 Stunden Schlaf pro Woche!</p>
      <p>Aktiviere jetzt das Licht-Sprint System und verkürze deine Einschlafzeit im Schnitt um 27–30 Minuten – 100 % natürlich, ohne Pillen.</p>
      
      <h3 style="margin-top:20px;font-size:18px;">Was dich heute Nacht erwartet</h3>
      <ul>
        <li>Wirkt ab Minute 1: Richtige Lichtfrequenz = sofort weniger Grübeln</li>
        <li>Mehr Energie am Morgen: +18 % höherer Wachheits-Score bei Testern*</li>
        <li>Null Risiko: 14-Tage-Geld-zurück-Versprechen</li>
      </ul>
      
      <p style="margin-top:20px;">2 374 „Eulen" haben den Hack bereits freigeschaltet. 92 % würden ihn ihrem besten Freund empfehlen.*</p>
    `
  },
  intermediate: {
    title: "Goldene Mitte",
    description: `
      <p>Glückwunsch! Dein Chronotyp bietet das höchste Upgrade-Potenzial.</p>
      <p>Tester mit deinem Profil schliefen 23 Minuten schneller ein* – nach nur 7 Tagen mit dem Licht-Sprint System.</p>
      
      <h3 style="margin-top:20px;font-size:18px;">Stell dir das in 1 Woche vor</h3>
      <ul>
        <li>⏳ 23 Minuten schneller wegdämmern = +2,7 Stunden Extra-Schlaf/Woche*</li>
        <li>💡 100 % natürlich, nur mit gezieltem Lichteinsatz</li>
        <li>💰 Einmal zahlen, lebenslang nutzen – Updates inklusive</li>
      </ul>
      
      <p style="margin-top:20px;font-style:italic;">"Ich hätte nie gedacht, dass Licht SO einen Unterschied macht." – Laura, 34</p>
    `
  }
};

// Disclaimer text
const disclaimerText = "*Ergebnisse können individuell variieren. Kein medizinischer Rat; bei ernsthaften Schlafstörungen bitte Arzt konsultieren.";
