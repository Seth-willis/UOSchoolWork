const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What do most cat's dislike most?",
        choice1: "pickles",
        choice2: "rope",
        choice3: "catnip",
        choice4: "trees",
        answer: "1"
    },
    {
        question: "What is the most famous cat meme of all time?",
        choice1: "image-1",
        choice2: "image-2",
        choice3: "image-3",
        choice4: "image-4",
        answer: "3"
    },
    {
        question: "What cat is larger?",
        choice1: "image-1",
        choice2: "image-2",
        choice3: "image-3",
        choice4: "image-4",
        answer: "2"
    },
    {
        question: "Which is the smallest?",
        choice1: "image-1",
        choice2: "image-2",
        choice3: "image-3",
        choice4: "image-4",
        answer: "1"
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
    return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question

    choices.forEach( choice =>{
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];

    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;
    };

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
console.log(selectedAnswer);
getNewQuestion();
});
});

startGame();