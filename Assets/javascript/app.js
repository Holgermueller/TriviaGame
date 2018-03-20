'use strict';

const quizBody = document.getElementById('quiz');
const resultHolder = document.getElementById('results');
const submitButton = document.getElementById('submit');
let timeRemaining = 180;

//function loadQuiz();
//function displayResults();

//button to begin quiz

$('#begin').click(function() {
    $(this).slideUp();
    $('#timer').text(timeRemaining);
    //$('#quiz').text(`you've entered some text!`); //test works!!
    //$('#quiz').
    //$('#timer').
}); //end of click function
//set up timer

$('#begin').click(function() {
let gamerTimer = setInterval(function() {
    timeRemaining--;
    if (timeRemaining >= 0) {
        $('#timer').text(timeRemaining);
    }
    if(timeRemaining === 0) {
       $('#timer').html(`<div>Time's up! You Lose!</div>`)}
       console.log(gamerTimer);
},1000);
})

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
console.log(quizQuestions[0].Question);
console.log(quizQuestions[0].Answers);

//append first question and answers to DOM when begin button clicked


$('#begin').click(function() {
    $('#quiz').append("Question:" + " " + quizQuestions[0].Question).append("<br>");
    $('#answersHead').append("<div>Answers:</div>").append("<br>");
    $('#answers').append("<div>A:" + quizQuestions[0].Answers.a+"</div>").append("<br>");
    $('#answers').append("<div>B:" + quizQuestions[0].Answers.b+"</div>").append("<br>");
    $('#answers').append("<div>C:" + quizQuestions[0].Answers.c+"</div>").append("<br>");
    $('#answers').append("<div>D:" + quizQuestions[0].Answers.d+"</div>").append("<br>");
});

//display other questions

function displayQuiz(){
    const output = [];
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}"
                    value="${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class"question> ${currentQuestion.question} </div>
                <div class = "answers"> ${answers.join('')} </div>`
            )
        }
    );
    quizBody.innerHTML = output.join('');
}


//collect players answers



//submit button

$('#submit').click(function() {
    $(this).slideUp();
    $('#results').append("<div>Results:</div>").append("<br>");
    $('#results').append("<div>Correct:0</div>").append("<br>");
    $('#results').append("<div>Incorrect:0</div>").append("<br>");
    $('#results').append("<div>Unanswered:0</div>").append("<br>");
});

//function to determine correct answers



//display results

let numberCorrect = 0;
let numberWrong = 0;
let unanswered = 0;

