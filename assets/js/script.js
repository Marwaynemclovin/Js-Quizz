
// var highScoresBtn = document.querySelector('#highscores');
var questionTitle = document.querySelector('#question');
var timerElement = document.querySelector('#timer');
var scoreElement = document.querySelector('#score');
var currentQuestionIndex = 0;
var timeLeft = 60;
var timePassed = 0;
var timer;

var questions = [
    {
        question: "Singe line comments start with:",
        responses: ["<>", "//","\\", "<!-->"],
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
        answer: "[]",
    }
]

// Starting the Game
function startGame(){
    renderQuestion();
    renderChoices();
    startTimer();
}

// Rendering Question on Screen
function renderQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    // var choices = document.querySelector('#choices');
    // for (questions i)
}

function renderChoices(){
    var testing = document.querySelector('#test')
    testing.textContent = "test"
}

function handleChoiceSelection(event){
        currentQuestionIndex ++
        renderQuestion();
}

// Timer Functions
function startTimer() {
    timerElement.textContent = timeLeft;
    interval = setInterval(function () {
        timePassed++;
        timerElement.textContent = timeLeft - timePassed;
    }, 1000);
}

function timerStop(){
    clearInterval(interval);
}

function checkChoice(event){
    var userChoice = event.target.textContent
    if (userChoice = answer){
        console.log('right')
    }
}

startGame();