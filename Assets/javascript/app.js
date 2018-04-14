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
       //console.log(gamerTimer);
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
      correctAnswer: '1926' },

    { Question: "In Frank Herbert's Dune, what are the Shai Hulud?",
    Answers: {
        a: "Desert Nomads",
        b: "A group of witches",
        c: "Giant sandworms",
        d: "A guild of merchants" },

    correctAnswer: 'c' },

    { Question: "How many stories make up Boccaccio's Decameron?",
    Answers: {
        a: "Ten stories and one framing story",
        b: "One hundred stories and one framing story",
        c: "Twenty stories and one framing story",
        d: "One thousand and one stories"
    },
    correctAnswer: 'b' },

    { Question: "Japanese author Kimitake Hiraoka went by which pen name?",
    Answers: {
        a: "Yukio Mishima",
        b: "Yasunari Kawabata",
        c: "Ryunosuke Akutugawa",
        d: "Junichiro Tanizaki"
    },
    correctAnswer: 'a' },

    { Question: "Eric Arthur Blair is the real name of which British author?",
    Answers: {
        a: "Lewis Carroll",
        b: "George Eliot",
        c: "George Sand",
        d: "George Orwell"
    },
    correctAnswer: 'd' },

    { Question: "Which novel is argued to be the first work of science fiction?",
    Answers: {
        a: "Frankenstein",
        b: "War of the Worlds",
        c: "The Invisible Man",
        d: "20,000 Leagues Under the Sea"
    },
    correctAnswer: 'a' },

    { Question: "Which American author was admitted to Columbia University on a football scholarship?",
    Answers: {
        a: "Jack Kerouac",
        b: "Ernest Hemingway",
        c: "Philip K. Dick",
        d: "Allen Ginsberg"
    },
    correctAnswer: 'a' },

    { Question: "Which author's life has been the target of a death threat since February 14, 1989?",
    Answers: {
        a: "Salman Rushdie",
        b: "Naguib Mahfouz",
        c: "Gao Xingjian",
        d: "Nicholas Sparks"
    },
    correctAnswer: 'a' },

    { Question: "Which author owned a jazz bar before pursuing writing?",
    Answers: {
        a: "J. K. Rowling",
        b: "Anne Rice",
        c: "Haruki Murakami",
        d: "Kazuo Ishiguro"
    },
    correctAnswer: 'c' },

    { Question: "Which two authors are NOT related?",
    Answers: {
        a: "Stephen King and Joe Hill",
        b: "Haruki Murakami and Ryu Murakami",
        c: "Alice Walker and Rebecca Walker",
        d: "H. G. Wells and Anthony West"
    },
    correctAnswer: 'b' },
];
console.log(quizQuestions[0].Question);
console.log(quizQuestions[0].Answers);
console.log(quizQuestions[0].correctAnswer);

//append first question and answers to DOM when begin button clicked


$('#begin').click(function() {
    $('#quiz').append("Question:" + " " + quizQuestions[0].Question).append("<br>");
    $('#quiz').append("<br>");
    $('#quiz').append("<div>Answers:</div>").append("<br>");
    $('#quiz').append("<input type='radio' value='" + quizQuestions[0].Answers.a + "'> A: " + quizQuestions[0].Answers.a).append("<br>");

    //$('#quiz').append("<input type='radio' data-value=''>" + "<div>A:" + quizQuestions[0].Answers.a+"</div>").append("<br>");
    $('#quiz').append("<input type='radio' data-value=''>" + "<div>B:" + quizQuestions[0].Answers.b+"</div>").append("<br>");
    $('#quiz').append("<input type='radio' data-value=''>" + "<div>C:" + quizQuestions[0].Answers.c+"</div>").append("<br>");
    $('#quiz').append("<input type='radio' data-value=''>" + "<div>D:" + quizQuestions[0].Answers.d+"</div>").append("<br>");
});

//display other questions

$('#quiz').click(function() {
    $(this).slideUp();
    $('#quiz1').append("Question:" + " " + quizQuestions[1].Question).append("<br>");
    $('#quiz1').append("<br>");
    $('#quiz1').append("<div>Answers:</div>").append("<br>");
    $('#quiz1').append("<input type='radio' data-value=''>" + "<div>A:" + quizQuestions[1].Answers.a+"</div>").append("<br>");
    $('#quiz1').append("<input type='radio' data-value=''>" + "<div>B:" + quizQuestions[1].Answers.b+"</div>").append("<br>");
    $('#quiz1').append("<input type='radio' data-value=''>" + "<div>C:" + quizQuestions[1].Answers.c+"</div>").append("<br>");
    $('#quiz1').append("<input type='radio' data-value=''>" + "<div>D:" + quizQuestions[1].Answers.d+"</div>").append("<br>");
});

$('#quiz1').click(function() {
    $(this).slideUp();
    $('#quiz2').append("Question:" + " " + quizQuestions[2].Question).append("<br>");
    $('#quiz2').append("<br>");
    $('#quiz2').append("<div>Answers:</div>").append("<br>");
    $('#quiz2').append("<input type='radio' data-value=''>" + "<div>A:" + quizQuestions[2].Answers.a+"</div>").append("<br>");
    $('#quiz2').append("<input type='radio' data-value=''>" + "<div>B:" + quizQuestions[2].Answers.b+"</div>").append("<br>");
    $('#quiz2').append("<input type='radio' data-value=''>" + "<div>C:" + quizQuestions[2].Answers.c+"</div>").append("<br>");
    $('#quiz2').append("<input type='radio' data-value=''>" + "<div>D:" + quizQuestions[2].Answers.d+"</div>").append("<br>");
});

$('#quiz2').click(function() {
    $(this).slideUp();
    $('#quiz3').append("Question:" + " " + quizQuestions[3].Question).append("<br>");
    $('#quiz3').append("<br>");
    $('#quiz3').append("<div>Answers:</div>").append("<br>");
    $('#quiz3').append("<input type='radio' data-value=''>" + "<div>A:" + quizQuestions[3].Answers.a+"</div>").append("<br>");
    $('#quiz3').append("<input type='radio' data-value=''>" + "<div>B:" + quizQuestions[3].Answers.b+"</div>").append("<br>");
    $('#quiz3').append("<input type='radio' data-value=''>" + "<div>C:" + quizQuestions[3].Answers.c+"</div>").append("<br>");
    $('#quiz3').append("<input type='radio' data-value=''>" + "<div>D:" + quizQuestions[3].Answers.d+"</div>").append("<br>");
});

$('#quiz3').click(function() {
    $(this).slideUp();
    $('#quiz4').append("Question:" + " " + quizQuestions[4].Question).append("<br>");
    $('#quiz4').append("<br>");
    $('#quiz4').append("<div>Answers:</div>").append("<br>");
    $('#quiz4').append("<input type='radio' data-value=''>" + "<div>A:" + quizQuestions[4].Answers.a+"</div>").append("<br>");
    $('#quiz4').append("<input type='radio' data-value=''>" + "<div>B:" + quizQuestions[4].Answers.b+"</div>").append("<br>");
    $('#quiz4').append("<input type='radio' data-value=''>" + "<div>C:" + quizQuestions[4].Answers.c+"</div>").append("<br>");
    $('#quiz4').append("<input type='radio' data-value=''>" + "<div>D:" + quizQuestions[4].Answers.d+"</div>").append("<br>");
});

$('#quiz4').click(function() {
    $(this).slideUp();
    $('#quiz5').append("Question:" + " " + quizQuestions[5].Question).append("<br>");
    $('#quiz5').append("<br>");
    $('#quiz5').append("<div>Answers:</div>").append("<br>");
    $('#quiz5').append("<input type='radio' data-value=''>" + "<div>A:" + quizQuestions[5].Answers.a+"</div>").append("<br>");
    $('#quiz5').append("<input type='radio' data-value=''>" + "<div>B:" + quizQuestions[5].Answers.b+"</div>").append("<br>");
    $('#quiz5').append("<input type='radio' data-value=''>" + "<div>C:" + quizQuestions[5].Answers.c+"</div>").append("<br>");
    $('#quiz5').append("<input type='radio' data-value=''>" + "<div>D:" + quizQuestions[5].Answers.d+"</div>").append("<br>");
});

$('#quiz5').click(function() {
    $(this).slideUp();
    $('#quiz6').append("Question:" + " " + quizQuestions[6].Question).append("<br>");
    $('#quiz6').append("<br>");
    $('#quiz6').append("<div>Answers:</div>").append("<br>");
    $('#quiz6').append("<input type='radio' data-value=''>" + "<div>A:" + quizQuestions[6].Answers.a+"</div>").append("<br>");
    $('#quiz6').append("<input type='radio' data-value=''>" + "<div>B:" + quizQuestions[6].Answers.b+"</div>").append("<br>");
    $('#quiz6').append("<input type='radio' data-value=''>" + "<div>C:" + quizQuestions[6].Answers.c+"</div>").append("<br>");
    $('#quiz6').append("<input type='radio' data-value=''>" + "<div>D:" + quizQuestions[6].Answers.d+"</div>").append("<br>");
});

$('#quiz6').click(function() {
    $(this).slideUp();
    $('#quiz7').append("Question:" + " " + quizQuestions[7].Question).append("<br>");
    $('#quiz7').append("<br>");
    $('#quiz7').append("<div>Answers:</div>").append("<br>");
    $('#quiz7').append("<input type='radio' data-value=''>" + "<div>A:" + quizQuestions[7].Answers.a+"</div>").append("<br>");
    $('#quiz7').append("<input type='radio' data-value=''>" + "<div>B:" + quizQuestions[7].Answers.b+"</div>").append("<br>");
    $('#quiz7').append("<input type='radio' data-value=''>" + "<div>C:" + quizQuestions[7].Answers.c+"</div>").append("<br>");
    $('#quiz7').append("<input type='radio' data-value=''>" + "<div>D:" + quizQuestions[7].Answers.d+"</div>").append("<br>");
});

$('#quiz7').click(function() {
    $(this).slideUp();
    $('#quiz8').append("Question:" + " " + quizQuestions[8].Question).append("<br>");
    $('#quiz8').append("<br>");
    $('#quiz8').append("<div>Answers:</div>").append("<br>");
    $('#quiz8').append("<input type='radio' data-value=''>" + "<div>A:" + quizQuestions[8].Answers.a+"</div>").append("<br>");
    $('#quiz8').append("<input type='radio' data-value=''>" + "<div>B:" + quizQuestions[8].Answers.b+"</div>").append("<br>");
    $('#quiz8').append("<input type='radio' data-value=''>" + "<div>C:" + quizQuestions[8].Answers.c+"</div>").append("<br>");
    $('#quiz8').append("<input type='radio' data-value=''>" + "<div>D:" + quizQuestions[8].Answers.d+"</div>").append("<br>");
});

$('#quiz8').click(function() {
    $(this).slideUp();
    $('#quiz9').append("Question:" + " " + quizQuestions[9].Question).append("<br>");
    $('#quiz9').append("<br>");
    $('#quiz9').append("<div>Answers:</div>").append("<br>");
    $('#quiz9').append("<input type='radio' data-value=''>" + "<div>A:" + quizQuestions[9].Answers.a+"</div>").append("<br>");
    $('#quiz9').append("<input type='radio' data-value=''>" + "<div>B:" + quizQuestions[9].Answers.b+"</div>").append("<br>");
    $('#quiz9').append("<input type='radio' data-value=''>" + "<div>C:" + quizQuestions[9].Answers.c+"</div>").append("<br>");
    $('#quiz9').append("<input type='radio' data-value=''>" + "<div>D:" + quizQuestions[9].Answers.d+"</div>").append("<br>");
});

//collect players answers

let playerAnswers = [];

/*$('radio').click(function(){
    $(this).append(playerAnswers);
});*/

//console.log(playerAnswers);

//submit button

$('#submit').click(function() {
    //$(this).slideUp();
    $('#quiz9').slideUp();
    $('#timer').stop(timeRemaining);
    
    getResults();
    
    $('#results').append("<div>Results:</div>").append("<br>");
    $('#results').append("<div>Correct:0</div>").append("<br>");
    $('#results').append("<div>Incorrect:0</div>").append("<br>");
    $('#results').append("<div>Unanswered:0</div>").append("<br>");
});

//function to determine correct answers and display results

function getResults() {

let numberCorrect = 0;
let numberWrong = 0;
let unanswered = 0;

$('#questions').children('div').each(function(index, div){
    //console.log(elem);
    //console.log(index);

    $(div).children('input').each(function(index, input){
        //console.log(input);
        if (input.checked === true){
            playerAnswers.push($(input).val());
        }
    });
});

//loop through player answers and compare them to correct answers

/*if (playerAnswers === quizQuestions.correctAnswer) {
    numberCorrect++
    $('#results').text(numberCorrect);
} else if (playerAnswers !== quizQuestions.correctAnswer) {
    numberWrong++
    $('#results').text(numberWrong);
} else if (playerAnswers !== quizQuestions.correctAnswer && playerAnswers !== quizQuestions.correctAnswer) {
    unanswered++
    $('#results').text(unanswered);
}*/

console.log(numberCorrect);
console.log(numberWrong);
console.log(unanswered);

}

