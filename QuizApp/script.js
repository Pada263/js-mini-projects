const quizData = [
  {
    question: "How old is Patrick?",
    a: "10",
    b: "25",
    c: "30",
    d: "44",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2020?",
    a: "Python",
    b: "java",
    c: "Javascript",
    d: "C++",
    correct: "c",
  },
  {
    question: "Who is the President of US?",
    a: "Patrick Klein",
    b: "Angela Merkel",
    c: "Gustav Gans",
    d: "Joe Bidden",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Appache AH-64 ",
    correct: "a",
  },
  {
    question: "Wich programming language is the oldest?",
    a: "Java",
    b: "Ruby",
    c: "Python",
    d: "PHP",
    correct: "c",
  },
];
const answerEl = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function getSelected() {
 

  let answer = undefined;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselectAnswer() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2> <button onclick={location.reload()}>Reload</button>`
    }
  }
});
