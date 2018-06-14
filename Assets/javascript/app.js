'use strict';

const quizPanel = $("#quizBody");
let timeRemaining = 180;

//questions
//1
const quizQuestions = [
    {
        Question: "In what year was Ernest Hemingway's The Sun Also Rises published?",
        Answers: [
            "1925",
            "1926",
            "1927",
            "1928"
        ],
        correctAnswer: 1
    },
    //2
    {
        Question: "In Frank Herbert's Dune, what are the Shai Hulud?",
        Answers: [
            "Desert Nomads",
            "A group of witches",
            "Giant sandworms",
            "A guild of merchants"
        ],
        correctAnswer: 2
    },
    //3
    {
        Question: "How many stories make up Boccaccio's Decameron?",
        Answers: [
            "Ten stories and one framing story",
            "One hundred stories and one framing story",
            "Twenty stories and one framing story",
            "One thousand and one stories"
        ],
        correctAnswer: 1
    },
    //4
    {
        Question: "Japanese author Kimitake Hiraoka went by which pen name?",
        Answers: [
            "Yukio Mishima",
            "Yasunari Kawabata",
            "Ryunosuke Akutugawa",
            "Junichiro Tanizaki"
        ],
        correctAnswer: 0
    },
    //5
    {
        Question: "Eric Arthur Blair is the real name of which British author?",
        Answers: [
            "Lewis Carroll",
            "George Eliot",
            "George Sand",
            "George Orwell"
        ],
        correctAnswer: 3
    },
    //6
    {
        Question: "Which novel is argued to be the first work of science fiction?",
        Answers: [
            "Frankenstein",
            "War of the Worlds",
            "The Invisible Man",
            "20,000 Leagues Under the Sea"
        ],
        correctAnswer: 0
    },
    //7
    {
        Question: "Which American author was admitted to Columbia University on a football scholarship?",
        Answers: [
            "Jack Kerouac",
            "Ernest Hemingway",
            "Philip K. Dick",
            "Allen Ginsberg"
        ],
        correctAnswer: 0
    },
    //8
    {
        Question: "Which author's life has been the target of a death threat since February 14, 1989?",
        Answers: [
            "Salman Rushdie",
            "Naguib Mahfouz",
            "Gao Xingjian",
            "Nicholas Sparks"
        ],
        correctAnswer: 0
    },
    //9
    {
        Question: "Which author owned a jazz bar before pursuing writing?",
        Answers: [
            "J. K. Rowling",
            "Anne Rice",
            "Haruki Murakami",
            "Kazuo Ishiguro"
        ],
        correctAnswer: 2
    },
    //10
    {
        Question: "Which two authors are NOT related?",
        Answers: [
            "Stephen King and Joe Hill",
            "Haruki Murakami and Ryu Murakami",
            "Alice Walker and Rebecca Walker",
            "H. G. Wells and Anthony West"
        ],
        correctAnswer: 1
    },
];

let timer;

let triviaGame = {

    questions: quizQuestions,
    presentQuestion: 0,
    timeLeft: timeRemaining,
    correct: 0,
    wrong: 0,

    countdown: function() {
        triviaGame.timeLeft--;
        $('#number-counter').text(triviaGame.timeLeft);
        if (triviaGame.timeLeft === 0) {
            console.log("Time's up. You lose!");
            game.timesOver();
        }
    },

    loadQuestions: function() {
        time = setInterval(triviaGame.timeLeft, 1000);
        quizPanel.html("<h2>" + this.questions[this.presentQuestion].Question + "</h2>");
        for (let i = 0; i < questions[this.presentQuestion].Answers.length; i++) {
            quizPanel.append("<button class='answer-button' id='button' data-name='" + questions[this.presentQuestion].Answers[i]
        + "'>" + questions[this.presentQuestion].Answers[i] + "</button>");
        }
    },

    onToNextQuestion: function() {
        this.timeLeft = window.timeRemaining;
        $("#counter-number").text(this.timeLeft);
        this.presentQuestion++;
        this.loadQuestions.bind(this)();
    },

    outOfTime: function() {
        clearInterval(window.time);
        $("#counter-number").text(this.timeLeft);
        quizPanel.html("<h2>Time's up.</h2>");
        quizPanel.append("<h3>The right answer was: " + quizQuestions[this.presentQuestion].correctAnswer);

        if (this.presentQuestion === questions.length -1) {
            setTimeout(this.getResults, 18 * 1000);
        } else {
            setTimeout(this.onToNextQuestion, 18 * 1000);
        }
    },

    getResults: function() {
        clearInterval(window.time);
        quizPanel.html("<h2>It's all over. Here's how you fared!</h2>");
        $("#counter-number").text(this.countdown);

        quizPanel.append("<h3>Correct Answers: " + this.correct + "</h3>");
        quizPanel.append("<h3>Wrong Answers: " + this.wrong + "</h3>");
        quizPanel.append("<h3>Unanswered: " + (questions.length - (this.wrong + this.wrong)) + "</h3>");
    }

//end of trivia game variable
}