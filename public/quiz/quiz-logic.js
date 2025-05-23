
// Get refID from URL parameter
document.addEventListener('DOMContentLoaded', function() {
  console.log("Quiz loading...");
  
  const urlParams = new URLSearchParams(window.location.search);
  const refID = urlParams.get('refID') || '';
  document.getElementById('refID').value = refID;
  quizData.refID = refID;
  
  // Initialize the UI
  initQuizUI();
  console.log("Quiz ready");
});

// Current question tracking
let currentQuestion = 1;

// Option selection handler
function selectOption(element, questionIndex) {
  console.log(`Option selected for question ${questionIndex + 1}:`, element.textContent);
  
  // Remove selected class from all siblings
  const parent = element.parentElement;
  const options = parent.querySelectorAll('.option');
  options.forEach(opt => opt.classList.remove('selected'));
  
  // Add selected class to clicked option
  element.classList.add('selected');
  
  // Store value
  quizData.answers[questionIndex] = parseInt(element.getAttribute('data-value'));
  console.log(`Answer stored for Q${questionIndex + 1}:`, quizData.answers[questionIndex]);
  
  // Enable next button
  const nextButton = document.getElementById(`q${questionIndex + 1}-next`);
  if (nextButton) {
    nextButton.disabled = false;
  }
  
  // Auto progress after a brief delay
  setTimeout(() => {
    const nextBtn = document.getElementById(`q${questionIndex + 1}-next`);
    if (nextBtn && !nextBtn.disabled) {
      console.log(`Auto-progressing from question ${questionIndex + 1}`);
      nextBtn.click();
    }
  }, 800);
}

// Email validation
function validateEmail() {
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  
  if (!emailRegex.test(email)) {
    alert('Bitte gib eine gültige E-Mail-Adresse ein.');
    console.log("Email validation failed");
    return;
  }
  
  console.log("Email validation passed:", email);
  quizData.email = email;
  nextQuestion(6, 7);
}

// Navigation functions
function nextQuestion(current, next) {
  console.log(`Navigating from question ${current} to ${next}`);
  
  const currentElement = document.getElementById(`q${current}`);
  if (currentElement) {
    currentElement.classList.remove('active');
  } else if (document.getElementById('qLead') && current === 6) {
    document.getElementById('qLead').classList.remove('active');
  } else {
    console.warn(`Current element q${current} not found`);
  }
  
  if (next === 6) {
    const leadElement = document.getElementById('qLead');
    if (leadElement) {
      leadElement.classList.add('active');
    } else {
      console.error("Email input card (qLead) not found");
    }
  } else {
    const nextElement = document.getElementById(`q${next}`);
    if (nextElement) {
      nextElement.classList.add('active');
    } else {
      console.error(`Next element q${next} not found`);
    }
  }
  
  currentQuestion = next;
  updateProgressBar();
}

function prevQuestion(current, prev) {
  console.log(`Going back from ${current} to ${prev}`);
  
  if (current === 7) {
    document.getElementById('q7').classList.remove('active');
    document.getElementById('qLead').classList.add('active');
    currentQuestion = 6;
  } else if (current === 6) {
    document.getElementById('qLead').classList.remove('active');
    document.getElementById(`q${prev}`).classList.add('active');
    currentQuestion = prev;
  } else {
    document.getElementById(`q${current}`).classList.remove('active');
    document.getElementById(`q${prev}`).classList.add('active');
    currentQuestion = prev;
  }
  
  updateProgressBar();
}

// Update progress bar
function updateProgressBar() {
  const totalQuestions = 5; // Total number of steps including email and phone
  const progressPercent = ((currentQuestion - 1) / totalQuestions) * 100;
  document.getElementById('progress').style.width = `${progressPercent}%`;
  console.log(`Progress updated: ${progressPercent}%`);
}

// Complete quiz and show results
function completeQuiz() {
  console.log("Completing quiz and calculating results...");
  
  try {
    // Get phone number if provided
    quizData.phone = document.getElementById('leadPhone').value.trim();
    console.log("Phone collected:", quizData.phone);
    
    // Calculate score (only using Q1-Q3 now)
    quizData.score = quizData.answers.reduce((a, b) => a + (b || 0), 0);
    console.log("Final score calculated:", quizData.score);
    
    // Determine outcome
    let outcome;
    
    if (quizData.score <= 3) {
      outcome = 'early_bird';
    } else if (quizData.score >= 6) {
      outcome = 'night_owl';
    } else {
      outcome = 'intermediate';
    }
    
    quizData.outcome = outcome;
    console.log("Determined outcome:", outcome);
    
    // Update result screen content
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');
    const resultDisclaimer = document.getElementById('result-disclaimer');
    
    if (!resultTitle || !resultDescription || !resultDisclaimer) {
      console.error("Result elements not found");
      return;
    }
    
    // Set content
    resultTitle.textContent = results[outcome].title;
    resultDescription.innerHTML = results[outcome].description;
    resultDisclaimer.textContent = disclaimerText;
    console.log("Result content updated");
    
    // Hide current card and show results
    document.getElementById('q7').classList.remove('active');
    
    const resultElement = document.getElementById('result');
    if (resultElement) {
      resultElement.classList.add('active');
      console.log("Result card activated");
    } else {
      console.error("Result card not found!");
    }
    
    // Update progress to 100%
    document.getElementById('progress').style.width = '100%';
    
    // Send lead data to Google script
    console.log("Sending data to Google script...");
    try {
      fetch('https://script.google.com/macros/s/AKfycbwcC9MwWaDkfDMQ82Y1kg6MuG-GJyHP7nWCKbXD99uZuEWiUUIPT34HyV7NDBuY81As/exec', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: quizData.email, 
          phone: quizData.phone, 
          score: quizData.score, 
          outcome: quizData.outcome
        })
      })
      .then(response => {
        console.log("Data sent successfully");
      })
      .catch(error => {
        console.error("Error sending data:", error);
        // Still continue to show results even if data sending fails
      });
    } catch (fetchError) {
      console.error("Fetch error:", fetchError);
      // Continue showing results despite data sending error
    }
  } catch (error) {
    console.error("Error in completeQuiz:", error);
    alert("Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
  }
}

// Handle payment
function proceedToPayment() {
  console.log("Proceeding to payment");
  
  // Redirect to Stripe with updated price and email
  const stripeUrl = `https://buy.stripe.com/4gM00k7Ti9Yj2rya1jdZ601?prefilled_email=${encodeURIComponent(quizData.email)}&client_reference_id=${encodeURIComponent(quizData.refID)}`;
  console.log("Redirecting to:", stripeUrl);
  window.location.href = stripeUrl;
}
