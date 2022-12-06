const quizData = [
  {
    question:
      "Which member of the spice girls abruptly left the group in 1998?",
    src: "photos/spice-girls.jpg",
    a: "Ginger Spice (Geraldine Estelle)",
    b: "Posh Spice (Victoria Beckham)",
    c: "Scary Spice (Melanie Janine Brown)",
    d: "Baby Spice (Emma Lee Bunton)",
    correct: "a",
  },
  {
    question:
      "NBA superstar Shaquille O'Neal began his career with which team?",
    src: "photos/shaq-rainbow.jpeg",
    a: "Los Angeles Lakers",
    b: "Orlando Magic",
    c: "Chicago Bulls",
    d: "Boston Celtics",
    correct: "b",
  },
  {
    question: "How many Harry Potter books and movies are there?",
    src: "photos/harry-potter.jpg",
    a: "5 books and 8 movies",
    b: "10 books and 6 movies",
    c: "7 books and 8 movies",
    d: "9 books and 7 movies",
    correct: "c",
  },
  {
    question:
      "Actress Gabrielle Union starred in what 2003 film with rapper/actor LL Cool J as an arrogant health inspector?",
    src: "photos/gabrielle-union.jpg",
    a: "Two Can Play That Game",
    b: "Breakin' All The Rules",
    c: "10 Things I Hate About You",
    d: "Deliver Us From Eva",
    correct: "d",
  },
  {
    question: "What are the names of the Sanderson sisters from Hocus Pocus",
    src: "photos/Hocus-Pocus.jpg",
    a: "Mary, Penelope and Carly",
    b: "Sarah, Charlotte and Sophia",
    c: "Mia, Winifred and Isabella",
    d: "Mary, Sarah and Winifred",
    correct: "d",
  },
  {
    question:
      "The hit TV Show 'Girlfriends' produced which of these shows as its spin-off?",
    src: "photos/girlfriends.jpg",
    a: "The Game",
    b: "Cuts",
    c: "One-On-One",
    d: "For Your Love",
    correct: "a",
  },
  {
    question: "Which star accidentally set fire to her home gym with candles?",
    src: "photos/disaster-girl.jpg",
    a: "Left Eye",
    b: "Britney Spears",
    c: "Drew Barrymore",
    d: "Sean Penn",
    correct: "b",
  },
];
const startBtn = document.querySelector(".jumbotron button");
const questionText = document.querySelector("#quiz .card-title");
const card = document.querySelector(".card");
const cardImage = document.querySelector(".card-img");
const endScore = document.getElementById("result");
const answers = document.querySelectorAll(".answer");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const submitBtn = document.querySelector(".submitBtn");
const scoreText = document.querySelector("#result span");
const retryBtn = document.querySelector("#result button");
let currentQuiz = 0;
let currentScore = 0;

/** Objects*/
function loadQuiz() {
  const quizQuestion = quizData[currentQuiz].question;
  questionText.innerText = quizQuestion;
  cardImage.src = quizData[currentQuiz].src;
  aText.innerText = quizData[currentQuiz].a;
  bText.innerText = quizData[currentQuiz].b;
  cText.innerText = quizData[currentQuiz].c;
  dText.innerText = quizData[currentQuiz].d;
  answers.forEach((answer) => {
    answer.checked = false;
  });
}

/**Event Delegation */
startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  questionText.scrollIntoView();
  card.style.opacity = "1";
  loadQuiz();
});

/** */
function getSelectedAnswer() {
  let result;
  answers.forEach((answer) => {
    if (answer.checked) {
      result = answer.id;
    }
  });
  console.log(result);
  return result;
}

/**Manipulating elements */
submitBtn.addEventListener("click", () => {
  let answer = getSelectedAnswer();
  if (answer === quizData[currentQuiz].correct) {
    currentScore++;
  }
  if (currentQuiz !== quizData.length - 1) {
    currentQuiz++;
    loadQuiz();
  } else {
    card.style.display = "none";
    endScore.style.opacity = 1;
    scoreText.innerText += ` ${currentScore}/${quizData.length}`;
  }
});

retryBtn.addEventListener("click", () => {
  card.style.removeProperty("display");
  endScore.style.opacity = 0;
  currentScore = 0;
  currentQuiz = 0;
  loadQuiz();
  questionText.scrollIntoView();
});
