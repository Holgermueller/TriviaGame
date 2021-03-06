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
        correctAnswer: "1926"
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
        correctAnswer: "Giant sandworms"
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
        correctAnswer: "One hundred stories and one framing story"
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
        correctAnswer: "Yukio Mishima"
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
        correctAnswer: "George Orwell"
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
        correctAnswer: "Frankenstein"
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
        correctAnswer: "Jack Kerouac"
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
        correctAnswer: "Salman Rushdie"
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
        correctAnswer: "Haruki Murakami"
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
        correctAnswer: "Haruki Murakami and Ryu Murakami"
    },
];

let timer;

let triviaGame = {

    quizQuestions: quizQuestions,
    presentQuestion: 0,
    timeLeft: timeRemaining,
    correct: 0,
    wrong: 0,

    countdown: function () {
        triviaGame.timeLeft--;
        $('#number-counter').text(this.timeLeft);
        if (this.timeLeft === 0) {
            console.log("Time's up. You lose!");
            this.timesOver();
        }
    },

    loadQuestions: function () {
        let time = setInterval(this.countdown.bind(this), 1000);
        quizPanel.html("<h2>" + quizQuestions[this.presentQuestion].Question + "</h2>");
        for (let i = 0; i < quizQuestions[this.presentQuestion].Answers.length; i++) {
            quizPanel.append("<button class='answer-button' id='button' data-name='" + quizQuestions[this.presentQuestion].Answers[i]
                + "'>" + quizQuestions[this.presentQuestion].Answers[i] + "</button>");
        }
    },

    onToNextQuestion: function () {
        this.timeLeft = window.timeRemaining;
        $("#counter-number").text(this.timeLeft);
        this.presentQuestion++;
        this.loadQuestions.bind(this)();
    },

    outOfTime: function () {
        clearInterval(window.time);
        $("#counter-number").text(this.timeLeft);
        quizPanel.html("<h2>Time's up.</h2>");
        quizPanel.append("<h3>The right answer was: " + quizQuestions[this.presentQuestion].correctAnswer);

        if (this.presentQuestion === quizQuestions.length - 1) {
            setTimeout(this.getResults, 3 * 1000);
        } else {
            setTimeout(this.onToNextQuestion, 3 * 1000);
        }
    },

    getResults: function () {
        clearInterval(window.time);
        quizPanel.html("<h2>It's all over. Here's how you fared!</h2>");
        $("#counter-number").text(this.countdown);

        quizPanel.append("<h3>Correct Answers: " + this.correct + "</h3>");
        quizPanel.append("<h3>Wrong Answers: " + this.wrong + "</h3>");
        quizPanel.append("<h3>Unanswered: " + (quizQuestions.length - (this.wrong + this.correct)) + "</h3>");
    },

    answered: function (e) {
        clearInterval(window.time);
        if ($(e.target).attr("data-name") === quizQuestions[this.presentQuestion].correctAnswer) {
            this.answeredRight();
        } else {
            this.answeredWrong();
        }
    },

    answeredWrong: function () {
        this.wrong++;
        clearInterval(window.time);
        quizPanel.html("<h2 class='wrong'>WRONG!!</h2>");
        quizPanel.append("<h3> The correct answer was: " + quizQuestions[this.presentQuestion].correctAnswer + "</h3>");
        if (this.presentQuestion === quizQuestions.length - 1) {
            setTimeout(this.getResults.bind(this), 3 * 1000);
        } else {
            setTimeout(this.onToNextQuestion.bind(this), 3 * 1000);
        }
    },

    answeredRight: function () {
        clearInterval(window.time);
        this.correct++;
        quizPanel.html("<h2 class='correct'>Correct!!!</h2>");

        if (this.presentQuestion === quizQuestions.length - 1) {
            setTimeout(this.getResults.bind(this), 3 * 1000);
        } else {
            setTimeout(this.onToNextQuestion.bind(this), 3 * 1000);
        }
    },

    reset: function () {
        this.presentQuestion = 0;
        this.timeLeft = timeRemaining;
        this.correct = 0;
        this.wrong = 0;
        this.loadQuestions();
    }
    //end of trivia game variable
};

//click handlers
$(document).on("click", "#start-over", triviaGame.reset.bind(triviaGame));

$(document).on("click", ".answer-button", function (e) {
    triviaGame.answered.bind(triviaGame, e)();
});

$(document).on("click", "#start", function () {
    $("#wrapperTwo").prepend("<h2 class='timer'>Time Left: <span id='counter-number'>180</span> Seconds</h2>");
    triviaGame.loadQuestions.bind(triviaGame)();
});