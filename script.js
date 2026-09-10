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
  },
    {
    chapter: 2,
    concept: "High-Performance Work Practices",
    type: "Application",
    question:
      "A company hires carefully, trains employees, gives them authority to solve customer problems, rewards strong performance, and works to keep high performers. Which concept best describes this coordinated approach?",
    answers: [
      "High-performance work practices",
      "Task performance",
      "Organizational citizenship behavior",
      "Job analysis"
    ],
    correct: 0,
    explanation:
      "High-performance work practices are a coordinated system that builds employee capability, opportunity, motivation, and retention."
  },

  {
    chapter: 2,
    concept: "Resource-Based View",
    type: "Application",
    question:
      "A company has employees with specialized knowledge that creates customer value and is difficult for competitors to copy or replace. Which perspective best explains why these employees may create a lasting advantage?",
    answers: [
      "Resource-based view",
      "Efficiency model",
      "Withdrawal model",
      "Task-performance model"
    ],
    correct: 0,
    explanation:
      "The resource-based view argues that valuable, difficult-to-copy, and hard-to-replace resources can support lasting organizational advantage."
  },

  {
    chapter: 2,
    concept: "Effectiveness and Efficiency",
    type: "Distinction",
    question:
      "A department reaches its production target while using fewer labor hours and less material waste than before. Which statement best describes the result?",
    answers: [
      "The department is effective but not efficient",
      "The department is efficient but not effective",
      "The department is both effective and efficient",
      "The department demonstrates OCB"
    ],
    correct: 2,
    explanation:
      "Effectiveness means achieving the desired result, while efficiency means doing so with fewer resources, less time, or less waste."
  },

  {
    chapter: 2,
    concept: "Task Performance",
    type: "Recognition",
    question:
      "An accountant accurately completes required financial reports and submits them by the deadline. Which concept is most directly illustrated?",
    answers: [
      "Organizational citizenship behavior",
      "Task performance",
      "Work engagement",
      "Psychological withdrawal"
    ],
    correct: 1,
    explanation:
      "Task performance refers to how well an employee completes the central duties and results required by the job."
  },

  {
    chapter: 2,
    concept: "Organizational Citizenship Behavior",
    type: "Recognition",
    question:
      "An employee finishes her required work and then voluntarily helps a new coworker learn the department's systems, even though helping is not part of her assigned duties. Which concept best fits this behavior?",
    answers: [
      "Task performance",
      "Organizational citizenship behavior",
      "Counterproductive work behavior",
      "Turnover"
    ],
    correct: 1,
    explanation:
      "Organizational citizenship behavior is voluntary behavior that supports coworkers or the organization but is not a required core task."
  },

  {
    chapter: 2,
    concept: "Team Performance",
    type: "Application",
    question:
      "A project team completes its assignment on time, produces a high-quality result, and coordinates responsibilities effectively across members. Which concept best describes this outcome?",
    answers: [
      "Team performance",
      "Individual task performance",
      "Work engagement",
      "Social capital"
    ],
    correct: 0,
    explanation:
      "Team performance includes both the results a team produces and the quality of members' coordination and contribution."
  },

  {
    chapter: 2,
    concept: "Work Engagement",
    type: "Recognition",
    question:
      "An employee consistently approaches work with energy, focus, involvement, and strong dedication to completing assignments well. Which concept best describes this pattern?",
    answers: [
      "Work engagement",
      "Continuance commitment",
      "Psychological withdrawal",
      "Incivility"
    ],
    correct: 0,
    explanation:
      "Work engagement is the energy, involvement, dedication, and focus that people bring to their work."
  },

  {
    chapter: 2,
    concept: "Counterproductive Work Behavior",
    type: "Recognition",
    question:
      "An employee intentionally damages company equipment after becoming angry with a supervisor. Which concept best describes this behavior?",
    answers: [
      "Organizational citizenship behavior",
      "Counterproductive work behavior",
      "Psychological withdrawal",
      "Task performance"
    ],
    correct: 1,
    explanation:
      "Counterproductive work behavior is intentional behavior that harms the organization or its members."
  },

  {
    chapter: 2,
    concept: "Incivility",
    type: "Distinction",
    question:
      "A supervisor repeatedly interrupts employees, makes dismissive comments, and treats coworkers disrespectfully without directly threatening them. Which concept best fits this behavior?",
    answers: [
      "Incivility",
      "Turnover",
      "Organizational citizenship behavior",
      "Task performance"
    ],
    correct: 0,
    explanation:
      "Incivility is lower-intensity disrespectful behavior toward others at work."
  },

  {
    chapter: 2,
    concept: "Psychological Withdrawal",
    type: "Recognition",
    question:
      "An employee continues coming to work but stops contributing ideas, becomes mentally disengaged, and does only the minimum necessary. Which concept is most directly illustrated?",
    answers: [
      "Turnover",
      "Psychological withdrawal",
      "Work engagement",
      "Organizational citizenship behavior"
    ],
    correct: 1,
    explanation:
      "Psychological withdrawal occurs when an employee remains in the organization but mentally pulls back."
  },

  {
    chapter: 2,
    concept: "Turnover",
    type: "Recognition",
    question:
      "After months of dissatisfaction, an employee resigns and leaves the organization. Which concept best describes this outcome?",
    answers: [
      "Psychological withdrawal",
      "Turnover",
      "Incivility",
      "Work engagement"
    ],
    correct: 1,
    explanation:
      "Turnover occurs when an employee physically leaves the organization."
  },

  {
    chapter: 2,
    concept: "Measurement and Diagnosis",
    type: "Application",
    question:
      "A manager wants to determine whether employees are performing effectively. She reviews job requirements, performance results, supervisor observations, and employee experiences before making a decision. Which concept best describes this approach?",
    answers: [
      "Measurement and diagnosis",
      "Organizational citizenship behavior",
      "Turnover analysis",
      "Resource-based view"
    ],
    correct: 0,
    explanation:
      "Measurement and diagnosis use job analysis and performance evidence to define and assess effective work."
  },

  {
    chapter: 2,
    concept: "People-Practices Model",
    type: "Framework",
    question:
      "A company hires talented employees and provides strong training, but employees are given little authority to make decisions or contribute ideas. According to the people-practices model, which part of the system is most likely weak?",
    answers: [
      "Capability",
      "Opportunity",
      "Retention",
      "Measurement"
    ],
    correct: 1,
    explanation:
      "Selection and development build capability, while empowerment creates the opportunity for employees to contribute."
  },

  {
    chapter: 2,
    concept: "Task Performance and OCB Connection",
    type: "Framework",
    question:
      "An employee frequently volunteers to help coworkers, but the extra helping causes her to fall behind on required job duties. Which conclusion best reflects the relationship between task performance and OCB?",
    answers: [
      "OCB always improves task performance",
      "Task performance and OCB can reinforce each other, but they can also compete for time and attention",
      "Task performance and OCB are the same concept",
      "OCB only matters when task performance is low"
    ],
    correct: 1,
    explanation:
      "Task performance and OCB can support each other, but voluntary helping can sometimes compete with required work for time or attention."
  },

  {
    chapter: 2,
    concept: "Incivility, Withdrawal, and Turnover",
    type: "Framework",
    question:
      "Employees in a department experience repeated disrespect from a supervisor. Over time, some employees become mentally disengaged, and several eventually leave. Which pathway best fits the Chapter 2 connection?",
    answers: [
      "Incivility → psychological withdrawal → possible turnover",
      "Turnover → incivility → work engagement",
      "Task performance → withdrawal → OCB",
      "Efficiency → turnover → engagement"
    ],
    correct: 0,
    explanation:
      "Incivility may contribute to psychological withdrawal and, over time, may be associated with turnover, although managers should gather additional evidence before assuming the pathway."
  },

  {
    chapter: 2,
    concept: "Measurement and Decisions Framework",
    type: "Framework",
    question:
      "A team meets its sales target, but employee surveys show severe burnout and observations reveal poor cooperation. What is the best managerial conclusion?",
    answers: [
      "The sales result alone proves the team is performing well in every important way",
      "The employee surveys should be ignored because results are objective",
      "Multiple sources of evidence should be considered because each may reveal information the others miss",
      "Observations alone should determine the decision"
    ],
    correct: 2,
    explanation:
      "Results, observations, and employee or team experiences can reveal different parts of performance, so relying on only one source may miss important information."
  },
    {
    chapter: 3,
    concept: "Person and Situation",
    type: "Application",
    question:
      "Two employees with similar experience respond differently to a new workplace policy. One adapts quickly while the other becomes frustrated. Which explanation best reflects the person-and-situation perspective?",
    answers: [
      "Behavior is determined entirely by personality",
      "Behavior reflects both personal characteristics and situational cues or constraints",
      "The employee who struggles must have lower cognitive ability",
      "Strong situations make personal differences more important"
    ],
    correct: 1,
    explanation:
      "The person-and-situation perspective holds that behavior reflects both individual characteristics and the situation rather than either one alone."
  },

  {
    chapter: 3,
    concept: "Big Five",
    type: "Recognition",
    question:
      "An employee is consistently organized, dependable, careful about deadlines, and follows through on commitments. Which Big Five dimension is most strongly illustrated?",
    answers: [
      "Openness",
      "Conscientiousness",
      "Extraversion",
      "Agreeableness"
    ],
    correct: 1,
    explanation:
      "Conscientiousness reflects tendencies such as organization, dependability, responsibility, and persistence."
  },

  {
    chapter: 3,
    concept: "Work Values",
    type: "Application",
    question:
      "An employee says that the most important part of a job is having freedom to make decisions and determine how work should be completed. Which work value is most directly reflected?",
    answers: [
      "Recognition",
      "Relationships",
      "Independence",
      "Support"
    ],
    correct: 2,
    explanation:
      "Independence reflects the desire for autonomy and freedom in how work is performed."
  },

  {
    chapter: 3,
    concept: "Emotional Intelligence",
    type: "Application",
    question:
      "During a tense meeting, a manager notices that she is becoming angry, recognizes that her reaction could make the situation worse, and deliberately calms herself before responding. Which capability is most directly demonstrated?",
    answers: [
      "Self-awareness only",
      "Self-management",
      "Other-awareness",
      "Cognitive ability"
    ],
    correct: 1,
    explanation:
      "Self-management involves regulating one's own emotions and responses so that behavior remains effective."
  },

  {
    chapter: 3,
    concept: "Cognitive Ability",
    type: "Recognition",
    question:
      "An employee quickly learns a complicated new system, identifies patterns in unfamiliar information, and solves difficult problems with limited instruction. Which individual difference is most directly illustrated?",
    answers: [
      "Cognitive ability",
      "Affective commitment",
      "Agreeableness",
      "Work engagement"
    ],
    correct: 0,
    explanation:
      "Cognitive ability is the capacity to learn, reason, and solve problems."
  },

  {
    chapter: 3,
    concept: "Core Self-Evaluations and Self-Efficacy",
    type: "Distinction",
    question:
      "An employee generally feels capable and in control, but she is specifically unsure whether she can successfully give her first major presentation. Which concept best describes her confidence about that particular task?",
    answers: [
      "Core self-evaluations",
      "Self-efficacy",
      "Work values",
      "Normative commitment"
    ],
    correct: 1,
    explanation:
      "Self-efficacy is confidence about performing a particular task, while core self-evaluations are broader beliefs about worth, capability, control, and stability."
  },

  {
    chapter: 3,
    concept: "Job Attitudes",
    type: "Application",
    question:
      "An employee says, 'I don't really want to stay here, but leaving would mean losing benefits and financial security that I cannot easily replace.' Which form of commitment best describes why the employee stays?",
    answers: [
      "Affective commitment",
      "Normative commitment",
      "Continuance commitment",
      "Job satisfaction"
    ],
    correct: 2,
    explanation:
      "Continuance commitment means remaining because leaving would be costly. Affective commitment is wanting to stay, while normative commitment is feeling an obligation to stay."
  },

  {
    chapter: 3,
    concept: "Employee Insight Dashboard",
    type: "Application",
    question:
      "A manager reviews an employee's personality tendencies, emotional-intelligence capabilities, and work values. What should the manager do next?",
    answers: [
      "Use the information to permanently label the employee",
      "Assume the employee's motivation is now fully understood",
      "Form a hypothesis about motivation and verify it through conversation",
      "Assign the employee a role based only on personality"
    ],
    correct: 2,
    explanation:
      "The Employee Insight Dashboard is a development tool used to form hypotheses that should be verified through conversation rather than treated as fixed conclusions."
  },

  {
    chapter: 3,
    concept: "Person-Situation Model",
    type: "Framework",
    question:
      "Two employees have different personality tendencies but work in a job with strict procedures, close supervision, and very clear expectations. According to the person-situation model, what should the manager consider when predicting their behavior?",
    answers: [
      "Personality alone",
      "Job demands alone",
      "Personal traits and abilities together with the strength of the situation and job demands",
      "Only whether the employees are satisfied"
    ],
    correct: 2,
    explanation:
      "The person-situation model combines personal traits and abilities, the strength of the situation, and job demands when predicting likely behavior."
  },

  {
    chapter: 3,
    concept: "Emotional Intelligence Model",
    type: "Framework",
    question:
      "A supervisor notices that an employee becomes unusually quiet after receiving feedback. What response best follows the emotional-intelligence model?",
    answers: [
      "Ignore the reaction because emotions should not affect management decisions",
      "Recognize the employee's emotional reaction, manage the interaction carefully, and choose a constructive response",
      "Immediately assume the employee is dissatisfied with the job",
      "Tell the employee to become more emotionally stable"
    ],
    correct: 1,
    explanation:
      "The emotional-intelligence model involves noticing emotion in oneself or others, managing the response or relationship, and choosing a more effective action."
  },

  {
    chapter: 3,
    concept: "Employee Insight Dashboard Model",
    type: "Framework",
    question:
      "A manager believes an employee may value recognition because of information gathered through the Employee Insight Dashboard. What is the best next step?",
    answers: [
      "Immediately create a public recognition program for the employee",
      "Verify the motivation hypothesis through conversation before changing management practices",
      "Assume all employees with similar personality tendencies value the same rewards",
      "Use the dashboard as a final conclusion about the employee"
    ],
    correct: 1,
    explanation:
      "The dashboard should generate motivation hypotheses that managers verify through conversation before making choices about support, communication, or leadership."
  },

  {
    chapter: 3,
    concept: "Values and Motivation Connection",
    type: "Framework",
    question:
      "A manager learns that an employee may strongly value achievement. Which response best reflects the Chapter 3 approach?",
    answers: [
      "Immediately assign harder work because achievement always motivates employees",
      "Ask the employee what kinds of goals or opportunities are motivating before making assumptions",
      "Give the employee public recognition because achievement and recognition are the same value",
      "Assume the employee will be highly motivated in every situation"
    ],
    correct: 1,
    explanation:
      "Work values can suggest what may motivate someone, but managers should verify the person's preferences before assuming a particular condition will be motivating."
  },

  {
    chapter: 3,
    concept: "Ability, Confidence, and Performance",
    type: "Framework",
    question:
      "A new employee is capable of learning a complex task but does not believe she can perform it successfully yet. Which explanation best distinguishes cognitive ability from self-efficacy?",
    answers: [
      "Cognitive ability concerns the capacity to learn and solve problems, while self-efficacy concerns confidence about performing the specific task",
      "Cognitive ability and self-efficacy mean the same thing",
      "Self-efficacy determines whether the employee has the intellectual capacity to learn",
      "Cognitive ability measures whether the employee wants to remain with the organization"
    ],
    correct: 0,
    explanation:
      "Cognitive ability concerns learning, reasoning, and problem solving, while self-efficacy concerns confidence about successfully performing a particular task."
  },

  {
    chapter: 3,
    concept: "Attitudes and Behavior Connection",
    type: "Framework",
    question:
      "A manager learns that an employee has low job satisfaction and weak affective commitment. What is the best conclusion about whether the employee will quit?",
    answers: [
      "The employee will definitely quit",
      "The attitudes may provide useful clues about withdrawal or turnover, but they do not determine behavior by themselves",
      "The employee will stay because satisfaction does not matter",
      "Turnover can be predicted only from personality"
    ],
    correct: 1,
    explanation:
      "Job satisfaction and commitment can provide clues about withdrawal or turnover, but behavior also depends on other personal and situational factors."
  },
    {
    chapter: 4,
    concept: "Eustress and Strain",
    type: "Distinction",
    question:
      "An employee feels energized by a difficult assignment and believes the challenge will help her grow. Another employee experiences headaches, exhaustion, and declining concentration from sustained pressure. Which distinction best fits these two reactions?",
    answers: [
      "The first reflects eustress, while the second reflects strain",
      "The first reflects strain, while the second reflects eustress",
      "Both reflect role ambiguity",
      "Both reflect psychological withdrawal"
    ],
    correct: 0,
    explanation:
      "Eustress is beneficial, energizing stress, while strain is a harmful psychological, physical, or behavioral response to stress."
  },

  {
    chapter: 4,
    concept: "Challenge and Hindrance Stressors",
    type: "Application",
    question:
      "An employee is assigned a demanding project that provides a meaningful opportunity to develop new skills. Which type of stressor is most directly illustrated?",
    answers: [
      "Challenge stressor",
      "Hindrance stressor",
      "Role ambiguity",
      "Role conflict"
    ],
    correct: 0,
    explanation:
      "Challenge stressors are demands viewed as opportunities for growth or achievement, while hindrance stressors are unnecessary barriers or obstacles."
  },

  {
    chapter: 4,
    concept: "Role Ambiguity",
    type: "Recognition",
    question:
      "A new employee is unsure which tasks are most important, what standards will be used to evaluate performance, and who has final responsibility for several assignments. Which stressor is most directly illustrated?",
    answers: [
      "Role ambiguity",
      "Role conflict",
      "Role overload",
      "Eustress"
    ],
    correct: 0,
    explanation:
      "Role ambiguity occurs when job expectations, responsibilities, or performance standards are unclear."
  },

  {
    chapter: 4,
    concept: "Role Conflict",
    type: "Recognition",
    question:
      "An employee is told by one supervisor to prioritize customer speed while another supervisor requires the employee to spend additional time on detailed documentation, making it difficult to satisfy both expectations. Which stressor best fits?",
    answers: [
      "Role ambiguity",
      "Role conflict",
      "Role overload",
      "Challenge stress"
    ],
    correct: 1,
    explanation:
      "Role conflict occurs when an employee faces incompatible or competing expectations."
  },

  {
    chapter: 4,
    concept: "Role Overload",
    type: "Recognition",
    question:
      "An employee has clear responsibilities but is assigned more work than can reasonably be completed with the available time and resources. Which stressor is most directly illustrated?",
    answers: [
      "Role ambiguity",
      "Role conflict",
      "Role overload",
      "Incivility"
    ],
    correct: 2,
    explanation:
      "Role overload occurs when job demands exceed the employee's available time, resources, or capability."
  },

  {
    chapter: 4,
    concept: "Transactional Stress Theory",
    type: "Framework",
    question:
      "Two employees face the same demanding deadline. One sees it as manageable because she has strong support and sufficient skills, while the other sees it as threatening because he believes he lacks the resources to cope. Which theory best explains the different stress reactions?",
    answers: [
      "Transactional stress theory",
      "Resource-based view",
      "People-practices model",
      "Organizational citizenship model"
    ],
    correct: 0,
    explanation:
      "Transactional stress theory explains stress through how a person evaluates a demand and the resources available to cope with it."
  },

  {
    chapter: 4,
    concept: "Demand-Control Model",
    type: "Framework",
    question:
      "Which employee is most likely to experience the greatest strain according to the demand-control model?",
    answers: [
      "An employee with low demands and high control",
      "An employee with high demands and high control",
      "An employee with high demands and low control",
      "An employee with moderate demands and strong social support"
    ],
    correct: 2,
    explanation:
      "The demand-control model predicts the greatest strain when job demands are high and control is low."
  },

  {
    chapter: 4,
    concept: "Resources and Social Support",
    type: "Application",
    question:
      "A manager cannot reduce an upcoming workload, but gives employees clearer priorities, more decision authority, additional training, and help from coworkers. What is the manager primarily increasing?",
    answers: [
      "Hindrance stressors",
      "Resources and social support",
      "Role conflict",
      "Psychological withdrawal"
    ],
    correct: 1,
    explanation:
      "Resources include time, skill, clarity, autonomy, and help from others that employees can use to meet demands."
  },

  {
    chapter: 4,
    concept: "Psychological Hardiness",
    type: "Recognition",
    question:
      "An employee remains committed during a difficult period, focuses on what can be controlled, stays connected to others, and views difficulty as a challenge rather than only as a threat. Which concept best describes this orientation?",
    answers: [
      "Psychological hardiness",
      "Continuance commitment",
      "Role overload",
      "Incivility"
    ],
    correct: 0,
    explanation:
      "Psychological hardiness is a resilient orientation supported by commitment, control, connection, fitness, and viewing difficulty as a challenge."
  },

  {
    chapter: 4,
    concept: "Mindfulness and STOP",
    type: "Application",
    question:
      "A manager receives a frustrating message and feels an immediate urge to respond angrily. Which action best applies the STOP approach?",
    answers: [
      "Respond immediately before the emotion becomes stronger",
      "Pause, breathe, observe the situation and reaction, then respond intentionally",
      "Ignore the message permanently",
      "Ask another employee to respond instead"
    ],
    correct: 1,
    explanation:
      "STOP is used to interrupt an automatic stress reaction by stopping, taking a breath, observing, and proceeding intentionally."
  },

  {
    chapter: 4,
    concept: "Time, Energy, and Recovery",
    type: "Application",
    question:
      "An employee organizes priorities effectively but continues working late every night without meaningful breaks or recovery. Over time, attention and judgment begin to decline. Which Chapter 4 idea best explains the problem?",
    answers: [
      "Good time management eliminates the need for recovery",
      "Recovery is needed to restore depleted resources even when time is well organized",
      "The employee is experiencing only role ambiguity",
      "More work engagement will automatically solve the problem"
    ],
    correct: 1,
    explanation:
      "Time management organizes priorities, but recovery is still needed to restore depleted physical and psychological resources."
  },

  {
    chapter: 4,
    concept: "Organizational Responsibility",
    type: "Application",
    question:
      "Employees report chronic stress caused by unclear expectations, unnecessary approval steps, and insufficient staffing. Which response best reflects organizational responsibility?",
    answers: [
      "Tell employees to become more resilient",
      "Reduce unnecessary stressors and improve supportive work conditions",
      "Require employees to use STOP more often",
      "Assume stress is entirely an individual problem"
    ],
    correct: 1,
    explanation:
      "Organizations share responsibility for reducing unnecessary stressors and creating supportive working conditions."
  },

  {
    chapter: 4,
    concept: "Stress-Appraisal Model",
    type: "Framework",
    question:
      "An employee first asks, 'How serious is this deadline for me?' and then asks, 'Do I have enough time, skill, and support to handle it?' Which parts of the stress-appraisal model are being used?",
    answers: [
      "Primary appraisal followed by secondary appraisal",
      "Secondary appraisal followed by primary appraisal",
      "Role conflict followed by role overload",
      "Eustress followed by withdrawal"
    ],
    correct: 0,
    explanation:
      "Primary appraisal evaluates what the demand means, while secondary appraisal evaluates whether the person has sufficient resources to cope."
  },

  {
    chapter: 4,
    concept: "Demand-Control Comparison",
    type: "Framework",
    question:
      "Two teams face equally heavy workloads. Team A has clear priorities, autonomy, and access to support. Team B has little control over how work is completed and limited support. Which prediction best fits the demand-control comparison?",
    answers: [
      "Team A should experience greater strain because autonomy increases responsibility",
      "Team B should experience greater strain because high demands are combined with lower control and resources",
      "Both teams should experience identical strain because workload is the same",
      "Neither team should experience strain if the work is important"
    ],
    correct: 1,
    explanation:
      "High demands combined with low control or resources are expected to produce the greatest strain."
  },

  {
    chapter: 4,
    concept: "Demands and Recovery Connection",
    type: "Framework",
    question:
      "Two employees experience sustained high job demands. One regularly has adequate rest and recovery, while the other has almost no recovery time. What is the best prediction?",
    answers: [
      "Both should show identical outcomes because demand level is the same",
      "The employee with inadequate recovery is more likely to experience declines in attention, judgment, health, and performance",
      "The employee with adequate recovery is more likely to experience role conflict",
      "Recovery matters only when demands are low"
    ],
    correct: 1,
    explanation:
      "Sustained high demands combined with inadequate recovery can deplete resources and contribute to poorer attention, judgment, health, and performance."
  },

  {
    chapter: 4,
    concept: "Integrated Stress Management",
    type: "Framework",
    question:
      "An employee is overwhelmed by a heavy workload, has little control over scheduling, and lacks adequate support. Which response best reflects the overall Chapter 4 approach?",
    answers: [
      "Teach the employee mindfulness and leave the work system unchanged",
      "Reduce or clarify unnecessary demands, increase useful resources or control, support intentional coping, and allow adequate recovery",
      "Assume the employee lacks psychological hardiness",
      "Remove every difficult assignment because all stress is harmful"
    ],
    correct: 1,
    explanation:
      "Chapter 4 treats stress as a combination of demands, appraisal, resources, control, coping, recovery, and organizational conditions rather than as an individual problem alone."
  }
];
