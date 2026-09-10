const questions = [
  {
    chapter: 1,
    concept: "Organizational Behavior",
    type: "Recognition",
    question:
      "A manager notices that employee cooperation has fallen after a departmental restructuring. Instead of immediately changing the incentive system, she begins examining how employees, teams, and workplace conditions are influencing behavior. What is she primarily applying?",
    answers: [
      "Financial capital analysis",
      "Organizational behavior",
      "Efficiency management",
      "Job analysis"
    ],
    correct: 1,
    explanation:
      "Organizational behavior focuses on understanding and predicting behavior within organizations."
  },

  {
    chapter: 1,
    concept: "Levels of Analysis",
    type: "Application",
    question:
      "Several employees in one department begin missing deadlines. Interviews show that each employee performs well independently, but responsibilities overlap and team members are unclear about who owns specific tasks. Which level should the manager investigate most directly?",
    answers: [
      "Individual level",
      "Team level",
      "Financial level",
      "Industry level"
    ],
    correct: 1,
    explanation:
      "The problem centers on coordination and responsibilities within the team rather than one employee's individual ability."
  },

  {
    chapter: 1,
    concept: "Forms of Capital",
    type: "Application",
    question:
      "A company has highly skilled engineers, but they rarely share knowledge and do not trust employees in other departments. Projects frequently stall because employees cannot obtain help from people outside their own teams. Which form of capital appears weakest?",
    answers: [
      "Human capital",
      "Physical capital",
      "Social capital",
      "Financial capital"
    ],
    correct: 2,
    explanation:
      "The employees possess knowledge and skill, but relationships, trust, and access to support are weak."
  },

  {
    chapter: 1,
    concept: "People Skills",
    type: "Recognition",
    question:
      "A supervisor has strong technical knowledge but repeatedly creates conflict because employees feel ignored, misunderstood, and poorly informed. Which capability should the supervisor most directly develop?",
    answers: [
      "Financial capital",
      "People skills",
      "Physical capital",
      "Technical specialization"
    ],
    correct: 1,
    explanation:
      "The issue involves communication, empathy, judgment, and working effectively with others."
  },

  {
    chapter: 1,
    concept: "Changing Work",
    type: "Recognition",
    question:
      "A company introduces remote work, begins hiring employees across several countries, and adopts new AI-based collaboration tools. What Chapter 1 idea best explains why managers may need to reconsider how they lead employees?",
    answers: [
      "Changing work",
      "Knowing-doing gap",
      "Social capital",
      "Little-e evidence"
    ],
    correct: 0,
    explanation:
      "Technology, work arrangements, globalization, and workforce diversity are examples of forces changing how organizations operate."
  },

  {
    chapter: 1,
    concept: "Big-E and Little-e Evidence",
    type: "Application",
    question:
      "Research suggests that flexible scheduling often improves employee outcomes. Before adopting it, a manager also examines employee surveys, staffing patterns, and customer-service requirements inside her own company. Which approach is the manager using?",
    answers: [
      "Big-E evidence only",
      "Little-e evidence only",
      "Both Big-E and little-e evidence",
      "No evidence because the decision is situational"
    ],
    correct: 2,
    explanation:
      "The manager combines broader research evidence with local information from her own organization."
  },

  {
    chapter: 1,
    concept: "Contingency Thinking",
    type: "Application",
    question:
      "A company copies a team-management practice that produced excellent results at another organization. The same practice performs poorly in its own workplace. Which explanation best reflects contingency thinking?",
    answers: [
      "The original research must have been incorrect",
      "Effective practices always produce the same results",
      "Differences in the people, tasks, team, or situation may change the practice's effectiveness",
      "Managers should avoid using practices developed by other organizations"
    ],
    correct: 2,
    explanation:
      "Contingency thinking holds that the effectiveness of a practice depends on the person, task, team, and situation."
  },

  {
    chapter: 1,
    concept: "Evidence and Contingency Framework",
    type: "Framework",
    question:
      "Research strongly supports a new employee-selection method. However, local evidence shows that the method does not measure several skills required for this company's specialized jobs. What is the best managerial response?",
    answers: [
      "Copy the method exactly because research supports it",
      "Reject all outside research",
      "Adapt the practice to fit the organization's situation",
      "Continue the current approach without examining evidence"
    ],
    correct: 2,
    explanation:
      "The manager should combine broader evidence with local conditions and adapt the practice when the situation requires it."
  },

  {
    chapter: 1,
    concept: "Human Capital and the Work System",
    type: "Application",
    question:
      "A company hires highly capable employees, but they lack needed information, cannot make routine decisions without several approvals, and frequently wait for required resources. What is the best explanation for weak performance?",
    answers: [
      "The employees necessarily lack human capital",
      "The work system may be preventing human capital from becoming performance",
      "High human capital guarantees high performance",
      "The employees need more financial capital"
    ],
    correct: 1,
    explanation:
      "Capable employees may still perform poorly when the work system prevents them from applying their knowledge and skills."
  },

  {
    chapter: 1,
    concept: "Decision Model",
    type: "Framework",
    question:
      "A team begins missing deadlines. The manager has already clearly identified improved on-time completion as the desired outcome. What should the manager do next according to the Chapter 1 decision model?",
    answers: [
      "Immediately discipline the lowest-performing employee",
      "Examine possible causes and relevant evidence",
      "Evaluate whether the solution worked",
      "Copy the policy used by another company"
    ],
    correct: 1,
    explanation:
      "After defining the desired outcome, the manager should understand causes and evidence before predicting results and evaluating actions."
  },

  {
    chapter: 1,
    concept: "Knowing-Doing Gap",
    type: "Application",
    question:
      "A manager can accurately explain that difficult conversations should involve listening, clear communication, and calm judgment. During an actual conflict, however, he becomes defensive and interrupts the employee repeatedly. Which concept best describes this situation?",
    answers: [
      "Contingency thinking",
      "Knowing-doing gap",
      "Social capital",
      "Little-e evidence"
    ],
    correct: 1,
    explanation:
      "The manager knows what effective management behavior should look like but struggles to perform it under pressure."
  },

  {
    chapter: 1,
    concept: "Integrated Chapter 1 Reasoning",
    type: "Framework",
    question:
      "Employee turnover increases after a new scheduling policy is introduced. A manager wants to reverse the trend. Which approach best reflects the overall reasoning emphasized in Chapter 1?",
    answers: [
      "Remove the policy immediately because turnover increased",
      "Determine the desired outcome, examine evidence and possible causes, consider the situation, predict the effects of alternatives, then evaluate the selected action",
      "Find another successful company and copy its scheduling policy exactly",
      "Ask employees what they want and implement the most popular suggestion immediately"
    ],
    correct: 1,
    explanation:
      "Chapter 1 emphasizes defining the outcome, understanding causes and evidence, considering contingencies, predicting results, and evaluating what happens."
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
    alert("No questions have been added for this chapter yet.");
    return;
  }

  currentQuestionIndex = 0;
  score = 0;
  wrongAnswers = [];
  answeredQuestions = [];

  document.getElementById("menu").classList.add("hidden");
  document.getElementById("results").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  document.getElementById("chapterTitle").textContent = title;
  document.getElementById("reviewArea").innerHTML = "";

  showQuestion();
}

function showQuestion() {
  const question = currentQuestions[currentQuestionIndex];

  document.getElementById("progress").textContent =
    `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

  document.getElementById("questionText").textContent =
    question.question;

  const answersDiv = document.getElementById("answers");

  answersDiv.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.textContent = answer;

    button.onclick = () => selectAnswer(index);

    answersDiv.appendChild(button);
  });

  document.getElementById("feedbackBox").classList.add("hidden");
  document.getElementById("nextButton").classList.add("hidden");
}

function selectAnswer(selectedIndex) {
  const question = currentQuestions[currentQuestionIndex];

  const feedbackBox = document.getElementById("feedbackBox");

  const isCorrect = selectedIndex === question.correct;

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
  document.getElementById("nextButton").classList.remove("hidden");

  document
    .querySelectorAll("#answers button")
    .forEach(button => {
      button.disabled = true;
    });
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");

  const percentage = Math.round(
    (score / currentQuestions.length) * 100
  );

  document.getElementById("scoreText").textContent =
    `Score: ${score} / ${currentQuestions.length} (${percentage}%)`;

  showChapterBreakdown();
}

function showChapterBreakdown() {
  const breakdown = document.getElementById("chapterBreakdown");

  const chapters = [1, 2, 3, 4];

  let html = "<h3>Chapter Performance</h3>";

  chapters.forEach(chapter => {
    const chapterQuestions = answeredQuestions.filter(
      question => question.chapter === chapter
    );

    if (chapterQuestions.length === 0) {
      return;
    }

    const correct = chapterQuestions.filter(
      question => question.isCorrect
    ).length;

    const percentage = Math.round(
      (correct / chapterQuestions.length) * 100
    );

    html += `
      <p>
        Chapter ${chapter}:
        ${correct} / ${chapterQuestions.length}
        (${percentage}%)
      </p>
    `;
  });

  breakdown.innerHTML = html;
}

function retakeWrong() {
  if (wrongAnswers.length === 0) {
    alert("You have no wrong answers to retake.");
    return;
  }

  currentQuestions = [...wrongAnswers];

  shuffleArray(currentQuestions);

  startQuiz("Retake Wrong Answers");
}

function reviewAnswers() {
  const reviewArea = document.getElementById("reviewArea");

  let html = "<h3>Answer Review</h3>";

  answeredQuestions.forEach((question, index) => {
    html += `
      <div class="feedback-box">

        <strong>
          ${index + 1}. ${question.question}
        </strong>

        <br><br>

        Your Answer:
        ${question.answers[question.selectedIndex]}

        <br>

        Correct Answer:
        ${question.answers[question.correct]}

        <br><br>

        ${question.explanation}

      </div>
    `;
  });

  reviewArea.innerHTML = html;
}

function backToMenu() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("results").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");

  document.getElementById("reviewArea").innerHTML = "";
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [array[i], array[j]] = [array[j], array[i]];
  }
}
