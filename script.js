var quizDiv = document.getElementById('quiz');
var resultsDiv = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start');
var myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "<js>",
      b: "<javascript>",
      c: "<script>"
    },
    correctAnswer: "c"
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
      a: "The <body> section",
      b: "Both the <head> section and the <body> section are correct",
      c: "The <head> section",
      d: "ESLint"
    },
    correctAnswer: "a"
  }
];


function buildQuiz(){
    var output = [];
  
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        var answers = [];
  
        for(letter in currentQuestion.answers){
  
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  };

function Quiz(){};
function showResults(){};
buildQuiz();

startButton.addEventListener("click", Quiz)
submitButton.addEventListener('click', showResults);



  

  
