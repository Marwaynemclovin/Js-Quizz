var questionTitle = document.querySelector('#question');
var choiceOne = document.querySelector('.choiceOne');
var choiceTwo = document.querySelector('.choiceTwo');
var choiceThree = document.querySelector('.choiceThree');
var choiceFour = document.querySelector('.choiceFour');
var currentQuestionIndex = 0;

var timerElement = document.querySelector('#timer');
var timeLeft = 60;
var timePassed = 0;
var timer;

var scoreElement = document.querySelector('#score');
var score = 0;
var scoreContainer = document.querySelector('.scoreContainer')
var submitElement = document.querySelector("#submit");

var questions = [
    {
        question: "Singe line comments start with:",
        responses: ["<>", "//","\\\\", "<!-->"],
        answer: "//"
    },
    {
        question: "What is used to declare a JavaScript Value?",
        responses: ["var", "variable", "iable", "function"],
        answer: "var"
    },
    {
        question: "If a variable is decleared with no value, what happens?",
        responses: ["Nothing will happen", "0 will pop up", "Variable will have an undefined value", "A change within HTML will occur"],
        answer: "Variable will have an undefined value"
    },
    {
        question: "What does + mean in JavaScript?",
        responses: ["Multiplication", "Increment", "Subtraction", "Addition"], 
        answer: "Addition"
    },
    {
        question: "What does ++ mean in JavaScript?",
        responses: ["Decrement", "Increment", "Subtraction", "Addition"],
        answer: "Increment",
    },
    {
        question: "What does * mean in JavaScript?",
        responses: ["Multiplication", "Increment", "Subtraction", "Division"],
        answer: "Increment"
    },
    {
        question: "What does + mean in JavaScript?",
        responses: ["Multiplication", "Increment", "Subtraction", "Addition"],
        answer: "Addition"
    },
    {
        question: "How do we find out the length of an array?",
        responses: [".length",  ".width", "length.size", "size.array"], 
        answer: "length" 
    },
    {
        question: "Where does <script> go?",
        responses: ["Within README", "Anywhere in CSS", "Body of HTML", "Inside script.js"],
        answer: "Body of HTML",
    },
    {
        question: "What operators do we use to store within arrays?",
        responses: ["!!", "//", "{}", "[]"],
        answer: "[]"
    }
]

window.onload = function (){
    scoreContainer.style.display = "none";
    submitElement.addEventListener('click', saveScores); 
}

// Starting the Game
function startGame(){
    renderQuestion();
    startTimer();
}

// Rendering Question on Screen
function renderQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    choiceOne.textContent = questions[currentQuestionIndex].responses[0];
    choiceTwo.textContent = questions[currentQuestionIndex].responses[1];
    choiceThree.textContent = questions[currentQuestionIndex].responses[2];
    choiceFour.textContent = questions[currentQuestionIndex].responses[3];

    choiceOne.addEventListener('click', handleChoiceSelection);
    choiceTwo.addEventListener('click', handleChoiceSelection);
    choiceThree.addEventListener('click', handleChoiceSelection);
    choiceFour.addEventListener('click', handleChoiceSelection);
}


function handleChoiceSelection(event){
    checkAnswer(event.target);

    currentQuestionIndex ++
    renderQuestion();
}

// Timer Functions
function startTimer() {
    timerElement.textContent = timeLeft;
    interval = setInterval(function () {
        timePassed++;
        timerElement.textContent = timeLeft - timePassed;
        if (timeLeft - timePassed <= 0){
            timerStop();
            finishGame();
        }
    }, 1000);
}

function timerStop(){
    clearInterval(interval);
}

// Checking Answer, adding points if correct, subtracting if incorrect.
function checkAnswer(answer) {
    if (currentQuestionIndex == 9){
        finishGame();
        return;
    }    
    if (questions[currentQuestionIndex].answer == answer.textContent) {
        score += 5;
        scoreElement.textContent = score;
    }
    else {
        timePassed += 5;
    }

    if (timeLeft <= 0){
        timerStop();
        finishGame();
    }
};

// Game Completetion
function finishGame (){
    timerStop();
    hideElement(questionTitle);
    hideElement(choiceOne);
    hideElement(choiceTwo);
    hideElement(choiceThree);
    hideElement(choiceFour);
    displayElement(scoreContainer);
    saveScores();
}


function saveScores() {
    var fullNameInput = document.querySelector('.fullName')
    fullNameInput
        var player = {
            fullName: fullNameInput.value,
            score: score
        };
    localStorage.setItem('player', JSON.stringify(player));
}

function hideElement (hide){
    hide.style.display = "none";
}

function displayElement (show){
    show.style.display = "block";
}


startGame();