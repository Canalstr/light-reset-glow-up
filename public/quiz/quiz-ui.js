
// Initialize the quiz UI
function initQuizUI() {
  console.log("Initializing quiz UI");
  const quizContent = document.getElementById('quiz-content');
  if (!quizContent) {
    console.error("Quiz content element not found");
    return;
  }
  
  // Create question cards
  questions.forEach((q, index) => {
    const card = createQuestionCard(q, index);
    quizContent.appendChild(card);
  });
  
  // Create lead collection cards
  const emailCard = createEmailCard();
  const phoneCard = createPhoneCard();
  quizContent.appendChild(emailCard);
  quizContent.appendChild(phoneCard);
  
  // Create result card
  const resultCard = createResultCard();
  quizContent.appendChild(resultCard);
  
  // Set first question as active
  document.getElementById('q1').classList.add('active');
  
  // Initialize progress bar
  updateProgressBar(1);

  console.log("Quiz UI initialized successfully");
}

// Create a question card
function createQuestionCard(questionData, index) {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = questionData.id;
  
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.textContent = questionData.question;
  
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'options';
  
  questionData.options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.textContent = option.text;
    optionElement.setAttribute('data-value', option.value);
    optionElement.onclick = function() { selectOption(this, index); };
    optionsContainer.appendChild(optionElement);
  });
  
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';
  
  if (index > 0) {
    const backBtn = document.createElement('button');
    backBtn.className = 'btn btn-back';
    backBtn.textContent = 'Zurück';
    backBtn.onclick = function() { prevQuestion(index + 1, index); };
    btnContainer.appendChild(backBtn);
  } else {
    const spacer = document.createElement('div');
    btnContainer.appendChild(spacer);
  }
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn';
  nextBtn.id = `q${index + 1}-next`;
  nextBtn.textContent = 'Weiter';
  nextBtn.disabled = true;
  
  const nextIndex = index + 1;
  const nextQuestionId = nextIndex < questions.length ? questions[nextIndex].id : 'qLead';
  nextBtn.onclick = function() { nextQuestion(index + 1, nextQuestionId === 'qLead' ? 6 : nextIndex + 1); };
  
  btnContainer.appendChild(nextBtn);
  
  card.appendChild(questionElement);
  card.appendChild(optionsContainer);
  card.appendChild(btnContainer);
  
  return card;
}

// Create email collection card
function createEmailCard() {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = 'qLead';
  
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.textContent = 'Wohin dürfen wir deinen Schlaf-Report schicken?';
  
  const inputContainer = document.createElement('div');
  inputContainer.style = 'padding: 0 24px;';
  
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.placeholder = 'deine@email.de';
  emailInput.required = true;
  
  inputContainer.appendChild(emailInput);
  
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';
  
  const backBtn = document.createElement('button');
  backBtn.className = 'btn btn-back';
  backBtn.textContent = 'Zurück';
  backBtn.onclick = function() { prevQuestion(6, questions.length); };
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn';
  nextBtn.id = 'q6-next';
  nextBtn.textContent = 'Weiter';
  nextBtn.onclick = validateEmail;
  
  btnContainer.appendChild(backBtn);
  btnContainer.appendChild(nextBtn);
  
  card.appendChild(questionElement);
  card.appendChild(inputContainer);
  card.appendChild(btnContainer);
  
  return card;
}

// Create phone collection card
function createPhoneCard() {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = 'q7';
  
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.textContent = 'Optional: Handy-Nr. für SMS-Reminder?';
  
  const inputContainer = document.createElement('div');
  inputContainer.style = 'padding: 0 24px;';
  
  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.id = 'leadPhone';
  phoneInput.placeholder = '+49 123 4567890';
  
  inputContainer.appendChild(phoneInput);
  
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';
  
  const backBtn = document.createElement('button');
  backBtn.className = 'btn btn-back';
  backBtn.textContent = 'Zurück';
  backBtn.onclick = function() { prevQuestion(7, 6); };
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn';
  nextBtn.textContent = 'Ergebnisse anzeigen';
  nextBtn.onclick = completeQuiz;
  
  btnContainer.appendChild(backBtn);
  btnContainer.appendChild(nextBtn);
  
  card.appendChild(questionElement);
  card.appendChild(inputContainer);
  card.appendChild(btnContainer);
  
  return card;
}

// Create result card
function createResultCard() {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = 'result';
  
  const resultContainer = document.createElement('div');
  resultContainer.className = 'result';
  
  const title = document.createElement('h2');
  title.id = 'result-title';
  
  const description = document.createElement('div');
  description.id = 'result-description';
  
  // Add terms checkbox container
  const termsContainer = document.createElement('div');
  termsContainer.className = 'terms-container';
  termsContainer.style = 'display: flex; align-items: start; margin: 20px 0; gap: 10px; background: rgba(255,138,61,0.1); padding: 12px; border-radius: 8px;';
  
  // Add checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'terms-checkbox';
  checkbox.style = 'margin-top: 3px;';
  
  // Add terms text
  const termsLabel = document.createElement('label');
  termsLabel.htmlFor = 'terms-checkbox';
  termsLabel.style = 'font-size: 14px; display: block;';
  termsLabel.textContent = 'Ich verlange die sofortige Bereitstellung digitaler Inhalte und verliere mein 14-tägiges Widerrufsrecht (§ 356 Abs 5 BGB).';
  
  termsContainer.appendChild(checkbox);
  termsContainer.appendChild(termsLabel);
  
  const payButton = document.createElement('button');
  payButton.className = 'btn';
  payButton.id = 'btnPay';
  payButton.textContent = 'Starte jetzt für 15 €';
  payButton.disabled = true;
  payButton.style.opacity = '0.5';
  payButton.style.cursor = 'not-allowed';
  payButton.onclick = proceedToPayment; // Add the onclick handler
  
  // Add event listener to the checkbox to enable/disable the button
  checkbox.addEventListener('change', function() {
    payButton.disabled = !this.checked;
    payButton.style.opacity = this.checked ? '1' : '0.5';
    payButton.style.cursor = this.checked ? 'pointer' : 'not-allowed';
  });
  
  // Add pricing text below button
  const pricingText = document.createElement('p');
  pricingText.style = 'font-size: 12px; margin-top: 8px; text-align: center; opacity: 0.8;';
  pricingText.textContent = '€15 heute → €199 pro Quartal nach 7 Tagen, + 19% MwSt';
  
  const disclaimer = document.createElement('p');
  disclaimer.className = 'disclaimer';
  disclaimer.id = 'result-disclaimer';
  
  resultContainer.appendChild(title);
  resultContainer.appendChild(description);
  resultContainer.appendChild(termsContainer);
  resultContainer.appendChild(payButton);
  resultContainer.appendChild(pricingText);
  resultContainer.appendChild(disclaimer);
  
  card.appendChild(resultContainer);
  
  return card;
}
