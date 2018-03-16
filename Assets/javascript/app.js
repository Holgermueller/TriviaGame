'use strict';

const quizBody = document.getElementById('quiz');
const resultHolder = document.getElementById('results');
const submitButton = document.getElementById('results');

//function loadQuiz();
//function displayResults();

//button to begin quiz

$('#begin').click(function() {
    $('#quiz').text(`you've entered some text!`); //test works!!
    //$('#quiz').
    //$('#timer').
}); //end of click function

//set up timer

let timeRemaining = 180;
let gamerTimer = setInterval (function() {
    timeRemaining--;
    document.getElementById('#timer').textContent = timeRemaining;
    if(timeRemaining <= 0)
       $('#timer').html(`<p>You Lose</p>`)
},1000);
    $('#timer').html(timeRemaining);

console.log(timeRemaining);
//questions

const quizQuestions = [ 
    { Question: "In what year was Ernest Hemingway's The Sun Also Rises published?",
      Answers: {
          a: "1925",
          b: "1926",
          c: "1927",
          d: "1928"
      },
      correctAnswer: "b" },

    { Question: "In Frank Herbert's Dune, what are the Shai Hulud?",
    Answers: {
        a: "Desert Nomads",
        b: "A group of witches",
        c: "Giant sandworms",
        d: "A guild of merchants" },

    correctAnswer: "c" },

    { Question: "How many stories make up Boccaccio's Decameron?",
    Answers: {
        a: "Ten stories and one framing story",
        b: "One hundred stories and one framing story",
        c: "Twenty stories and one framing story",
        d: "One thousand and one stories"
    },
    correctAnswer: "b" },

    { Question: "Japanese author Kimitake Hiraoka went by which pen name?",
    Answers: {
        a: "Yukio Mishima",
        b: "Yasunari Kawabata",
        c: "Ryunosuke Akutugawa",
        d: "Junichiro Tanizaki"
    },
    correctAnswer: "a" },

    { Question: "Eric Arthur Blair is the real name of which British author?",
    Answers: {
        a: "Lewis Carroll",
        b: "George Eliot",
        c: "George Sand",
        d: "George Orwell"
    },
    correctAnswer: "d" },

    { Question: "Which novel is argued to be the first work of science fiction?",
    Answers: {
        a: "Frankenstein",
        b: "War of the Worlds",
        c: "The Invisible Man",
        d: "20,000 Leagues Under the Sea"
    },
    correctAnswer: "a" },

    { Question: "Which American author was admitted to Columbia University on a football scholarship?",
    Answers: {
        a: "Jack Kerouac",
        b: "Ernest Hemingway",
        c: "Philip K. Dick",
        d: "Allen Ginsberg"
    },
    correctAnswer: "a" },

    { Question: "Which author's life has been the target of a death threat since February 14, 1989?",
    Answers: {
        a: "Salman Rushdie",
        b: "Naguib Mahfouz",
        c: "Gao Xingjian",
        d: "Nicholas Sparks"
    },
    correctAnswer: "a" },

    { Question: "Which author owned a jazz bar before pursuing writing?",
    Answers: {
        a: "J. K. Rowling",
        b: "Anne Rice",
        c: "Haruki Murakami",
        d: "Kazuo Ishiguro"
    },
    correctAnswer: "c" },

    { Question: "Which two authors are NOT related?",
    Answers: {
        a: "Stephen King and Joe Hill",
        b: "Haruki Murakami and Ryu Murakami",
        c: "Alice Walker and Rebecca Walker",
        d: "H. G. Wells and Anthony West"
    },
    correctAnswer: "b" },

];



//submit button

//function to determine correct answers

//display results

let numberCorrect = 0;
let numberWrong = 0;
let unanswered = 0;

