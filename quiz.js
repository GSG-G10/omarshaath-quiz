const questions = [
  {
    question: " hello, who are you???",
    answers: ["a monkey", "an ape", "a human like alian", "nothing"],
    correctAnswer: "nothing",
  },
  {
    question: " hello, how old are you?",
    answers: ["1", "50", "14", "30"],
    correctAnswer: "50",
  },
  {
    question: " hssaaaaad you?",
    answers: ["jjdd", "50", "14", "30"],
    correctAnswer: "50",
  },
  {
    question: " hello, how old are you?",
    answers: ["1", "50", "14", "30"],
    correctAnswer: "50",
  },
  {
    question: " hello, how old are you?",
    answers: ["1", "50", "14", "30"],
    correctAnswer: "50",
  },
  {
    question: " hello, how old are you?",
    answers: ["1", "50", "14", "30"],
    correctAnswer: "50",
  },
  {
    question: " hello, how old are you?",
    answers: ["1", "50", "14", "30"],
    correctAnswer: "50",
  },
  {
    question: " hello, how old are you?",
    answers: ["1", "50", "14", "30"],
    correctAnswer: "50",
  },
  {
    question: " hello, how old are you?",
    answers: ["1", "50", "14", "30"],
    correctAnswer: "50",
  },
  {
    question: " hello, how old are you?",
    answers: ["1", "50", "14", "30"],
    correctAnswer: "50",
  },
];
const radioButtons = Array.from(document.querySelectorAll(".answers-style"));
const labels = Array.from(
  document.querySelectorAll(".answers-container label")
);

const nextBtn = document.querySelector(".button-style");

nextBtn.addEventListener("click", function () {
  displayNextQuestion();
});

let step = -1;
function displayNextQuestion() {
  step++;
  const currentQuestion = questions[step];

  currentQuestion.answers.forEach((answer, index) => {
    radioButtons[index].value = answer;
    labels[index].textContent = answer;
    console.log(answer, index);
  });
}
displayNextQuestion();
