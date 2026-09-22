
  // Romantic & Impressive Birthday Quiz Data
const quizData = [
    {
        question: "Is it true that the moon gets a little jealous of your smile?",
        answer: true,
        gif: "./gif/Cute blushing.gif", // Cute blushing/smile GIF
        correctFeedback: "I knew it! Even the stars can't compete with you tonight. ✨",
        incorrectFeedback: "Don't be modest! You light up every room you walk into. 🌙"
    },
    {
        question: "Are you ready to be treated like an absolute queen today?",
        answer: true,
        gif: "./gif/Bowing down.gif", // Bowing down/queen GIF
        correctFeedback: "Your wish is my command! The royal treatment awaits. 👑",
        incorrectFeedback: "Too bad! I've already planned to spoil you unconditionally. 💖"
    },
    {
        question: "If I played your favorite romantic song right now, would you smile for me?",
        answer: true,
        gif: "./gif/listening.gif", // Listening to music/vibing GIF
        correctFeedback: "That smile is my absolute favorite melody. 🎶🥰",
        incorrectFeedback: "I'd just have to play it on repeat until you do! 🎧😉"
    },
    {
        question: "Is there any limit to how many times I can tell you how amazing you are today?",
        answer: false, 
        gif: "./gif/Saying no.gif", // Saying no/shaking head GIF
        correctFeedback: "Exactly! I plan to celebrate you all day long. 🎉",
        incorrectFeedback: "No limits today! You deserve all the attention in the world. 🌍"
    }
];


let currentQuestion = 0;
let userAnswers = new Array(quizData.length).fill(null); 

const questionTextElement = document.getElementById('question-text');
const gifImageElement = document.getElementById('quiz-gif');
const yesNoButtons = document.getElementById('yes-no-buttons');
const navButtons = document.getElementById('nav-buttons');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const quizAppElement = document.getElementById('quiz-app');
const resultContainerElement = document.getElementById('result-container');
const finalScoreElement = document.getElementById('final-score');

// Load the current question
function loadQuestion() {
    // Reset buttons
    yesNoButtons.style.display = 'flex';
    navButtons.style.display = 'none';
    
    // Fade out to change text
    questionTextElement.style.opacity = 0;
    
    setTimeout(() => {
        const currentData = quizData[currentQuestion];
        questionTextElement.innerText = currentData.question;
        questionTextElement.classList.remove('answer-mode'); // Reset to default color
        gifImageElement.src = currentData.gif;
        questionTextElement.style.opacity = 1;
    }, 300);
}

// Handle yes/no clicks
function handleAnswer(userAnswer) {
    const currentData = quizData[currentQuestion];
    userAnswers[currentQuestion] = userAnswer;
    
    let feedbackText = "";
    if (userAnswer === currentData.answer) {
        feedbackText = currentData.correctFeedback;
    } else {
        feedbackText = currentData.incorrectFeedback;
    }

    // Fade out question, fade in answer inside the same box
    questionTextElement.style.opacity = 0;

    setTimeout(() => {
        questionTextElement.innerText = feedbackText;
        questionTextElement.classList.add('answer-mode'); // Make answer pink
        questionTextElement.style.opacity = 1;

        // Swap buttons
        yesNoButtons.style.display = 'none';
        navButtons.style.display = 'flex';

        // Manage previous button visibility
        if (currentQuestion === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'inline-block';
        }

        // Manage next/finish button text
        if (currentQuestion === quizData.length - 1) {
            nextBtn.innerText = "[Finish]";
        } else {
            nextBtn.innerText = "[Next]";
        }
    }, 300);
}

// Navigational functions
function goNext() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

function goPrevious() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Display final results
function showResults() {
    quizAppElement.style.display = 'none';
    resultContainerElement.style.display = 'block';
    
    let score = 0;
    for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].answer) {
            score++;
        }
    }
    
   
}

// Initialize on load
window.onload = loadQuestion;