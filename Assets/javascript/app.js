'use strict';

const quizBody = document.getElementById('quiz');
const resultHolder = document.getElementById('results');
const submitButton = document.getElementById('results');

function buildQuiz();
function displayResults();

//button to begin quiz

//set up timer

//questions

const myQuestions = [ 
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

];



//submit button

//function to determine correct answers

//display results

