const questions = [
  {
    chapter: 1,
    question: "Sample Chapter 1 question?",
    answers: [
      "Answer A",
      "Answer B",
      "Answer C",
      "Answer D"
    ],
    correct: 1,
    explanation: "Short explanation for why the correct answer is right."
  },

  {
    chapter: 2,
    question: "Sample Chapter 2 question?",
    answers: [
      "Answer A",
      "Answer B",
      "Answer C",
      "Answer D"
    ],
    correct: 2,
    explanation: "Short explanation for why the correct answer is right."
  },

  {
    chapter: 3,
    question: "Sample Chapter 3 question?",
    answers: [
      "Answer A",
      "Answer B",
      "Answer C",
      "Answer D"
    ],
    correct: 0,
    explanation: "Short explanation for why the correct answer is right."
  },

  {
    chapter: 4,
    question: "Sample Chapter 4 question?",
    answers: [
      "Answer A",
      "Answer B",
      "Answer C",
      "Answer D"
    ],
    correct: 3,
    explanation: "Short explanation for why the correct answer is right."
  }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];
let answeredQuestions = [];

function startChapter(chapter) {
  currentQuestions = questions.filter(
    question => question.chapter === chapter
  );

  startQuiz(`Chapter ${chapter}`);
}

function startQuizOne() {
  currentQuestions = questions.filter(
    question => [1, 2, 3, 4].includes(question.chapter)
  );

  shuffleArray(currentQuestions);

  startQuiz("Quiz 1 — Mixed Practice");
}

function startQuiz(title) {
  if (currentQuestions.length === 0) {
    alert("No questions have been added yet.");
    return;
  }

  currentQuestionIndex = 0;
  score = 0;
  wrongAnswers = [];
  answeredQuestions = [];

  document
    .getElementById("menu")
    .classList.add("hidden");

  document
    .getElementById("results")
    .classList.add("hidden");

  document
    .getElementById("quiz")
    .classList.remove("hidden");

  document.getElementById("chapterTitle").textContent =
    title;

  document.getElementById("reviewArea").innerHTML = "";

  showQuestion();
}

function showQuestion() {
  const question =
    currentQuestions[currentQuestionIndex];

  document.getElementById("progress").textContent =
    `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

  document.getElementById("questionText").textContent =
    question.question;

  const answersDiv =
    document.getElementById("answers");

  answersDiv.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button =
      document.createElement("button");

    button.textContent = answer;

    button.onclick = () =>
      selectAnswer(index);

    answersDiv.appendChild(button);
  });

  document
    .getElementById("feedbackBox")
    .classList.add("hidden");

  document
    .getElementById("nextButton")
    .classList.add("hidden");
}

function selectAnswer(selectedIndex) {
  const question =
    currentQuestions[currentQuestionIndex];

  const feedbackBox =
    document.getElementById("feedbackBox");

  const isCorrect =
    selectedIndex === question.correct;

  answeredQuestions.push({
    ...question,
    selectedIndex,
    isCorrect
  });

  if (isCorrect) {
    score++;

    feedbackBox.innerHTML = `
      <strong>Correct</strong>
      <br><br>
      ${question.explanation}
    `;
  } else {
    wrongAnswers.push(question);

    feedbackBox.innerHTML = `
      <strong>Incorrect</strong>
      <br><br>

      Correct Answer:
      ${question.answers[question.correct]}

      <br><br>

      ${question.explanation}
    `;
  }

  feedbackBox.classList.remove("hidden");

  document
    .getElementById("nextButton")
    .classList.remove("hidden");

  document
    .querySelectorAll("#answers button")
    .forEach(button => {
      button.disabled = true;
    });
}

function nextQuestion() {
  currentQuestionIndex++;

  if (
    currentQuestionIndex <
    currentQuestions.length
  ) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document
    .getElementById("quiz")
    .classList.add("hidden");

  document
    .getElementById("results")
    .classList.remove("hidden");

  const percentage =
    Math.round(
      (score / currentQuestions.length) * 100
    );

  document.getElementById("scoreText").textContent =
    `Score: ${score} / ${currentQuestions.length} (${percentage}%)`;

  showChapterBreakdown();
}

function showChapterBreakdown() {
  const breakdown =
    document.getElementById("chapterBreakdown");

  const chapters = [1, 2, 3, 4];

  let html = "<h3>Chapter Performance</h3>";

  chapters.forEach(chapter => {
    const chapterQuestions =
      answeredQuestions.filter(
        question =>
          question.chapter === chapter
      );

    if (chapterQuestions.length === 0) {
      return;
    }

    const correct =
      chapterQuestions.filter(
        question =>
          question.isCorrect
      ).length;

    const percentage =
      Math.round(
        (correct /
          chapterQuestions.length) *
          100
      );

    html += `
      <p>
        Chapter ${chapter}:
        ${correct} /
        ${chapterQuestions.length}
        (${percentage}%)
      </p>
    `;
  });

  breakdown.innerHTML = html;
}

function retakeWrong() {
  if (wrongAnswers.length === 0) {
    alert(
      "You have no wrong answers to retake."
    );
    return;
  }

  currentQuestions = [...wrongAnswers];

  shuffleArray(currentQuestions);

  startQuiz("Retake Wrong Answers");
}

function reviewAnswers() {
  const reviewArea =
    document.getElementById("reviewArea");

  let html =
    "<h3>Answer Review</h3>";

  answeredQuestions.forEach(
    (question, index) => {

      html += `
        <div class="feedback-box">

          <strong>
            ${index + 1}.
            ${question.question}
          </strong>

          <br><br>

          Your Answer:
          ${question.answers[
            question.selectedIndex
          ]}

          <br>

          Correct Answer:
          ${question.answers[
            question.correct
          ]}

          <br><br>

          ${question.explanation}

        </div>
      `;
    }
  );

  reviewArea.innerHTML = html;
}

function backToMenu() {
  document
    .getElementById("quiz")
    .classList.add("hidden");

  document
    .getElementById("results")
    .classList.add("hidden");

  document
    .getElementById("menu")
    .classList.remove("hidden");

  document.getElementById("reviewArea").innerHTML =
    "";
}

function shuffleArray(array) {
  for (
    let i = array.length - 1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() *
        (i + 1)
      );

    [array[i], array[j]] =
      [array[j], array[i]];
  }
}
