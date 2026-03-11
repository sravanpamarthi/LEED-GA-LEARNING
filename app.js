const STORAGE_KEY = "leed-ga-coach-progress-v2";
const DEFAULT_SPRINT_DAYS = 14;

const state = {
  activeDayId: window.STUDY_DATA.days[0].id,
  progress: loadProgress(),
};

const dayList = document.querySelector("#dayList");
const metrics = document.querySelector("#metrics");
const analytics = document.querySelector("#analytics");
const countdownCard = document.querySelector("#countdownCard");
const examDateInput = document.querySelector("#examDateInput");
const saveExamDateButton = document.querySelector("#saveExamDateButton");
const lessonEyebrow = document.querySelector("#lessonEyebrow");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonTheme = document.querySelector("#lessonTheme");
const lessonContent = document.querySelector("#lessonContent");
const quizTitle = document.querySelector("#quizTitle");
const quizIntro = document.querySelector("#quizIntro");
const quizForm = document.querySelector("#quizForm");
const quizResult = document.querySelector("#quizResult");
const assessmentGrid = document.querySelector("#assessmentGrid");
const resumeButton = document.querySelector("#resumeButton");
const resetProgressButton = document.querySelector("#resetProgressButton");
const submitQuizButton = document.querySelector("#submitQuizButton");

bootstrap();

function bootstrap() {
  wireEvents();
  state.activeDayId = getNextIncompleteDay().id;
  render();
}

function wireEvents() {
  resumeButton.addEventListener("click", () => {
    state.activeDayId = getNextIncompleteDay().id;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  resetProgressButton.addEventListener("click", () => {
    if (!window.confirm("Reset all saved quiz, countdown, and mock progress for this LEED app?")) {
      return;
    }

    state.progress = createEmptyProgress();
    persistProgress();
    state.activeDayId = window.STUDY_DATA.days[0].id;
    render();
  });

  saveExamDateButton.addEventListener("click", () => {
    if (!examDateInput.value) {
      window.alert("Pick your target exam date first.");
      return;
    }

    state.progress.targetExamDate = examDateInput.value;
    persistProgress();
    renderCountdown();
    renderMetrics();
  });

  submitQuizButton.addEventListener("click", submitDailyQuiz);
}

function render() {
  renderCountdown();
  renderMetrics();
  renderAnalytics();
  renderDayList();
  renderDayContent();
  renderAssessments();
}

function renderCountdown() {
  examDateInput.value = state.progress.targetExamDate;
  const countdown = getCountdownData();

  countdownCard.innerHTML = `
    <div class="countdown-main ${countdown.daysLeft < 4 ? "is-urgent" : ""}">
      <span>${countdown.label}</span>
      <strong>${countdown.primaryValue}</strong>
      <small>${countdown.secondaryValue}</small>
    </div>
    <div class="countdown-meta">
      <article class="mini-stat">
        <span>Exam day</span>
        <strong>${escapeHtml(countdown.formattedDate)}</strong>
      </article>
      <article class="mini-stat">
        <span>Plan pace</span>
        <strong>${escapeHtml(countdown.paceMessage)}</strong>
      </article>
    </div>
  `;
}

function renderMetrics() {
  const completedDays = getCompletedDays().length;
  const dailyScores = Object.values(state.progress.dailyQuizzes).filter((entry) => entry.completed).map((entry) => entry.percent);
  const assessmentScores = Object.values(state.progress.assessments).filter((entry) => entry.completed).map((entry) => entry.percent);
  const nextDay = getNextIncompleteDay();
  const completionRate = (completedDays / window.STUDY_DATA.days.length) * 100;

  metrics.innerHTML = `
    <article class="metric-card">
      <span>Days done</span>
      <strong>${completedDays}/${window.STUDY_DATA.days.length}</strong>
      <small>${formatPercent(completionRate)} of the sprint complete</small>
    </article>
    <article class="metric-card">
      <span>Daily avg</span>
      <strong>${formatPercent(average(dailyScores))}</strong>
      <small>Across daily quizzes</small>
    </article>
    <article class="metric-card">
      <span>Big tests avg</span>
      <strong>${formatPercent(average(assessmentScores))}</strong>
      <small>Checkpoints + mocks</small>
    </article>
    <article class="metric-card">
      <span>Next step</span>
      <strong>Day ${nextDay.day}</strong>
      <small>${escapeHtml(nextDay.title)}</small>
    </article>
  `;
}

function renderAnalytics() {
  const readiness = getReadinessSummary();
  const focusBreakdown = getFocusBreakdown();

  analytics.innerHTML = `
    <article class="readiness-card readiness-${readiness.tierClass}">
      <span>${escapeHtml(readiness.label)}</span>
      <strong>${formatPercent(readiness.score)}</strong>
      <small>${escapeHtml(readiness.message)}</small>
    </article>
    <div class="insight-grid">
      <article class="insight-card">
        <span>Strongest</span>
        <strong>${escapeHtml(focusBreakdown.strongest.name)}</strong>
        <small>${formatPercent(focusBreakdown.strongest.score)}</small>
      </article>
      <article class="insight-card">
        <span>Needs work</span>
        <strong>${escapeHtml(focusBreakdown.weakest.name)}</strong>
        <small>${formatPercent(focusBreakdown.weakest.score)}</small>
      </article>
    </div>
    <div class="focus-stack">
      ${focusBreakdown.items.map((item) => `
        <article class="focus-row">
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <small>${item.count} scored day${item.count === 1 ? "" : "s"}</small>
          </div>
          <div class="focus-score">
            <span>${formatPercent(item.score)}</span>
            <div class="focus-bar"><div style="width:${Math.max(item.score, 6)}%"></div></div>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderDayList() {
  const unlockedDay = getUnlockedDayNumber();

  dayList.innerHTML = window.STUDY_DATA.days.map((day) => {
    const attempt = state.progress.dailyQuizzes[day.id];
    const isDone = Boolean(attempt && attempt.completed);
    const isActive = day.id === state.activeDayId;
    const isLocked = day.day > unlockedDay && !isDone;
    const secondary = isDone
      ? `Quiz ${attempt.correct}/${attempt.total}`
      : isLocked
        ? `Unlock after Day ${day.day - 1} quiz`
        : day.theme;

    return `
      <button class="day-card ${isDone ? "is-done" : ""} ${isActive ? "is-active" : ""} ${isLocked ? "is-locked" : ""}" type="button" data-day-id="${day.id}" ${isLocked ? "disabled" : ""}>
        <span class="day-number">Day ${day.day}</span>
        <strong>${escapeHtml(day.title)}</strong>
        <small>${escapeHtml(secondary)}</small>
      </button>
    `;
  }).join("");

  dayList.querySelectorAll("[data-day-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDayId = button.dataset.dayId;
      render();
    });
  });
}

function renderDayContent() {
  const day = getActiveDay();
  const attempt = state.progress.dailyQuizzes[day.id];
  const previousCompleted = day.day === 1 || isDayCompletedByNumber(day.day - 1);

  lessonEyebrow.textContent = `Day ${day.day}`;
  lessonTitle.textContent = day.title;
  lessonTheme.textContent = previousCompleted
    ? day.theme
    : `Finish Day ${day.day - 1} first to unlock this study block.`;

  lessonContent.innerHTML = previousCompleted
    ? `
      <div class="lesson-grid">
        ${day.lessons.map((lesson) => `
          <article class="lesson-card">
            <h3>${escapeHtml(lesson.heading)}</h3>
            <p>${escapeHtml(lesson.body)}</p>
          </article>
        `).join("")}
      </div>
      <section class="subsection">
        <div class="subsection-header">
          <h3>Fast Memory Stack</h3>
          <p>These are the terms worth being able to define quickly.</p>
        </div>
        <div class="flash-grid">
          ${day.flashcards.map(([term, meaning]) => `
            <article class="flash-card">
              <span>${escapeHtml(term)}</span>
              <strong>${escapeHtml(meaning)}</strong>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="subsection action-strip">
        <h3>Today's move</h3>
        <p>${escapeHtml(day.action)}</p>
      </section>
    `
    : `
      <section class="subsection action-strip">
        <h3>Locked for focus</h3>
        <p>To keep the 14-day sprint realistic, each new day unlocks after you finish the previous day's quiz.</p>
      </section>
    `;

  quizTitle.textContent = `Day ${day.day} Quiz`;
  quizIntro.textContent = previousCompleted
    ? `Small test for ${day.title}. Aim for 80%+ before moving on.`
    : `This quiz unlocks when Day ${day.day - 1} is completed.`;

  if (!previousCompleted) {
    quizForm.innerHTML = "";
    submitQuizButton.disabled = true;
    quizResult.classList.add("hidden");
    quizResult.innerHTML = "";
    return;
  }

  submitQuizButton.disabled = false;
  quizForm.innerHTML = day.quiz.map((question, index) => {
    const selected = attempt ? attempt.answers[index] : undefined;
    return `
      <fieldset class="question-card">
        <legend>${index + 1}. ${escapeHtml(question.prompt)}</legend>
        ${question.choices.map((choice, choiceIndex) => `
          <label class="choice-row">
            <input type="radio" name="daily-${index}" value="${choiceIndex}" ${String(selected) === String(choiceIndex) ? "checked" : ""}>
            <span>${escapeHtml(choice)}</span>
          </label>
        `).join("")}
      </fieldset>
    `;
  }).join("");

  if (attempt && attempt.completed) {
    quizResult.classList.remove("hidden");
    quizResult.innerHTML = renderResultMarkup(attempt, day.quiz);
  } else {
    quizResult.classList.add("hidden");
    quizResult.innerHTML = "";
  }
}

function renderAssessments() {
  assessmentGrid.innerHTML = window.STUDY_DATA.assessments.map((assessment) => {
    const result = state.progress.assessments[assessment.id];
    const unlocked = isAssessmentUnlocked(assessment);
    const statusText = result && result.completed
      ? formatPercent(result.percent)
      : unlocked
        ? "Ready"
        : `Locked until day ${assessment.recommendedDay}`;

    return `
      <article class="assessment-card ${unlocked ? "" : "is-locked"}">
        <div>
          <p class="assessment-type">${escapeHtml(assessment.type)}</p>
          <h3>${escapeHtml(assessment.title)}</h3>
          <p>${escapeHtml(assessment.description)}</p>
          <small>${unlocked ? `Recommended after day ${assessment.recommendedDay}` : `Complete through day ${assessment.recommendedDay} to unlock`}</small>
        </div>
        <div class="assessment-meta">
          <strong>${result && result.completed ? `${result.correct}/${result.total}` : `${assessment.questions.length} questions`}</strong>
          <span>${statusText}</span>
        </div>
        <button class="button button-secondary assessment-launch" type="button" data-assessment-id="${assessment.id}" ${unlocked ? "" : "disabled"}>
          ${result && result.completed ? "Retake" : "Start"}
        </button>
      </article>
    `;
  }).join("");

  assessmentGrid.querySelectorAll("[data-assessment-id]").forEach((button) => {
    button.addEventListener("click", () => openAssessment(button.dataset.assessmentId));
  });
}

function submitDailyQuiz() {
  const day = getActiveDay();
  const answers = readAnswers("daily-", day.quiz.length);

  if (answers.some((answer) => answer === null)) {
    window.alert("Answer every question before submitting today's quiz.");
    return;
  }

  const attempt = gradeAttempt(day.quiz, answers);
  state.progress.dailyQuizzes[day.id] = {
    ...attempt,
    completed: true,
    submittedAt: new Date().toISOString(),
  };

  persistProgress();
  render();
}

function openAssessment(assessmentId) {
  const assessment = window.STUDY_DATA.assessments.find((item) => item.id === assessmentId);
  if (!isAssessmentUnlocked(assessment)) {
    return;
  }

  const previous = state.progress.assessments[assessmentId];
  const wrapper = document.createElement("div");
  wrapper.className = "modal-backdrop";
  wrapper.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true" aria-label="${escapeHtml(assessment.title)}">
      <div class="modal-header">
        <div>
          <p class="eyebrow">${escapeHtml(assessment.type)}</p>
          <h2>${escapeHtml(assessment.title)}</h2>
          <p>${escapeHtml(assessment.description)}</p>
        </div>
        <button class="icon-button" type="button" data-close-modal="true">Close</button>
      </div>
      <form class="modal-form">
        ${assessment.questions.map((question, index) => {
          const selected = previous ? previous.answers[index] : undefined;
          return `
            <fieldset class="question-card">
              <legend>${index + 1}. ${escapeHtml(question.prompt)}</legend>
              ${question.choices.map((choice, choiceIndex) => `
                <label class="choice-row">
                  <input type="radio" name="assessment-${assessmentId}-${index}" value="${choiceIndex}" ${String(selected) === String(choiceIndex) ? "checked" : ""}>
                  <span>${escapeHtml(choice)}</span>
                </label>
              `).join("")}
            </fieldset>
          `;
        }).join("")}
        <div class="modal-actions">
          <button class="button button-primary" type="button" data-submit-assessment="true">Submit ${escapeHtml(assessment.title)}</button>
        </div>
        <div class="result-box ${previous && previous.completed ? "" : "hidden"}" id="modalResult">
          ${previous && previous.completed ? renderResultMarkup(previous, assessment.questions) : ""}
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(wrapper);
  wrapper.addEventListener("click", (event) => {
    if (event.target === wrapper || event.target.dataset.closeModal === "true") {
      wrapper.remove();
    }
  });

  wrapper.querySelector("[data-submit-assessment='true']").addEventListener("click", () => {
    const answers = readAssessmentAnswers(assessmentId, assessment.questions.length);
    if (answers.some((answer) => answer === null)) {
      window.alert("Answer every question before submitting this assessment.");
      return;
    }

    const attempt = gradeAttempt(assessment.questions, answers);
    state.progress.assessments[assessmentId] = {
      ...attempt,
      completed: true,
      submittedAt: new Date().toISOString(),
    };

    persistProgress();
    wrapper.querySelector("#modalResult").classList.remove("hidden");
    wrapper.querySelector("#modalResult").innerHTML = renderResultMarkup(attempt, assessment.questions);
    render();
  });
}

function gradeAttempt(questions, answers) {
  let correct = 0;
  questions.forEach((question, index) => {
    if (Number(answers[index]) === question.answer) {
      correct += 1;
    }
  });

  return {
    answers,
    correct,
    total: questions.length,
    percent: questions.length ? (correct / questions.length) * 100 : 0,
  };
}

function renderResultMarkup(result, questions) {
  return `
    <div class="result-summary">
      <strong>${result.correct}/${result.total}</strong>
      <span>${formatPercent(result.percent)}</span>
      <small>${result.percent >= 80 ? "Solid pace. Keep going." : "Review the explanation cards before moving on."}</small>
    </div>
    <div class="review-list">
      ${questions.map((question, index) => {
        const selected = result.answers[index];
        const isCorrect = Number(selected) === question.answer;
        return `
          <article class="review-row ${isCorrect ? "is-correct" : "is-wrong"}">
            <strong>Q${index + 1}: ${isCorrect ? "Correct" : "Review"}</strong>
            <p>${escapeHtml(question.explanation)}</p>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function readAnswers(prefix, count) {
  const answers = [];
  for (let index = 0; index < count; index += 1) {
    const checked = document.querySelector(`input[name='${prefix}${index}']:checked`);
    answers.push(checked ? Number(checked.value) : null);
  }
  return answers;
}

function readAssessmentAnswers(assessmentId, count) {
  const answers = [];
  for (let index = 0; index < count; index += 1) {
    const checked = document.querySelector(`input[name='assessment-${assessmentId}-${index}']:checked`);
    answers.push(checked ? Number(checked.value) : null);
  }
  return answers;
}

function getActiveDay() {
  return window.STUDY_DATA.days.find((day) => day.id === state.activeDayId) || window.STUDY_DATA.days[0];
}

function getCompletedDays() {
  return window.STUDY_DATA.days.filter((day) => {
    const attempt = state.progress.dailyQuizzes[day.id];
    return attempt && attempt.completed;
  });
}

function getNextIncompleteDay() {
  return window.STUDY_DATA.days.find((day) => {
    const attempt = state.progress.dailyQuizzes[day.id];
    return !(attempt && attempt.completed);
  }) || window.STUDY_DATA.days[window.STUDY_DATA.days.length - 1];
}

function getUnlockedDayNumber() {
  const nextDay = getNextIncompleteDay();
  const allDone = getCompletedDays().length === window.STUDY_DATA.days.length;
  return allDone ? window.STUDY_DATA.days.length : nextDay.day;
}

function isDayCompletedByNumber(dayNumber) {
  const day = window.STUDY_DATA.days.find((item) => item.day === dayNumber);
  if (!day) {
    return false;
  }
  const attempt = state.progress.dailyQuizzes[day.id];
  return Boolean(attempt && attempt.completed);
}

function isAssessmentUnlocked(assessment) {
  for (let dayNumber = 1; dayNumber <= assessment.recommendedDay; dayNumber += 1) {
    if (!isDayCompletedByNumber(dayNumber)) {
      return false;
    }
  }

  if (assessment.type === "mock") {
    return ["week-1-checkpoint", "week-2-checkpoint"].every((id) => {
      const result = state.progress.assessments[id];
      return Boolean(result && result.completed);
    });
  }

  return true;
}

function getCountdownData() {
  const today = new Date();
  const examDate = new Date(`${state.progress.targetExamDate}T09:00:00`);
  const diffMs = examDate - today;
  const daysLeft = Math.ceil(diffMs / 86400000);
  const completedDays = getCompletedDays().length;
  const remainingStudyDays = Math.max(window.STUDY_DATA.days.length - completedDays, 0);
  const pace = daysLeft > 0 ? remainingStudyDays / Math.max(daysLeft, 1) : remainingStudyDays;

  let label = "Days left";
  let primaryValue = String(daysLeft);
  let secondaryValue = daysLeft > 1 ? "Days until exam" : "Final review window";

  if (daysLeft < 0) {
    label = "Exam status";
    primaryValue = "Done";
    secondaryValue = "Your target date has passed";
  } else if (daysLeft === 0) {
    label = "Exam day";
    primaryValue = "Today";
    secondaryValue = "Keep review light and stay calm";
  }

  let paceMessage = "On pace";
  if (pace > 1.05) {
    paceMessage = "You need more than one study day per calendar day";
  } else if (pace > 0.7) {
    paceMessage = "Stay steady each day";
  } else if (remainingStudyDays === 0) {
    paceMessage = "Study plan complete";
  }

  return {
    daysLeft,
    label,
    primaryValue,
    secondaryValue,
    formattedDate: examDate.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }),
    paceMessage,
  };
}

function getFocusBreakdown() {
  const focusScores = {};

  window.STUDY_DATA.days.forEach((day) => {
    const attempt = state.progress.dailyQuizzes[day.id];
    if (!(attempt && attempt.completed)) {
      return;
    }

    day.focus.forEach((focus) => {
      if (!focusScores[focus]) {
        focusScores[focus] = [];
      }
      focusScores[focus].push(attempt.percent);
    });
  });

  const items = Object.keys(focusScores).map((name) => ({
    name: titleCase(name.replaceAll("-", " ")),
    score: average(focusScores[name]),
    count: focusScores[name].length,
  })).sort((a, b) => b.score - a.score);

  if (!items.length) {
    return {
      strongest: { name: "No data yet", score: 0 },
      weakest: { name: "No data yet", score: 0 },
      items: [{ name: "Start Day 1", score: 0, count: 0 }],
    };
  }

  return {
    strongest: items[0],
    weakest: items[items.length - 1],
    items,
  };
}

function getReadinessSummary() {
  const dailyScores = Object.values(state.progress.dailyQuizzes).filter((entry) => entry.completed).map((entry) => entry.percent);
  const assessmentScores = Object.values(state.progress.assessments).filter((entry) => entry.completed).map((entry) => entry.percent);
  const combined = average([...dailyScores, ...assessmentScores]);
  const completedDays = getCompletedDays().length;

  if (!dailyScores.length) {
    return {
      label: "Building momentum",
      score: 0,
      tierClass: "early",
      message: "Start Day 1 and your readiness signal will begin to build.",
    };
  }

  if (combined >= 85 && completedDays >= 10) {
    return {
      label: "Exam-ready trend",
      score: combined,
      tierClass: "strong",
      message: "Your scores are trending like a confident final-week candidate.",
    };
  }

  if (combined >= 75) {
    return {
      label: "Nearly there",
      score: combined,
      tierClass: "steady",
      message: "Good base. Tighten weak areas and keep checkpoints clean.",
    };
  }

  return {
    label: "Rebuild weak spots",
    score: combined,
    tierClass: "warning",
    message: "Stay with the sequence, review wrong answers, and retake checkpoints.",
  };
}

function loadProgress() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const progress = stored ? { ...createEmptyProgress(), ...JSON.parse(stored) } : createEmptyProgress();
    if (!progress.targetExamDate) {
      progress.targetExamDate = getDefaultExamDate();
    }
    return progress;
  } catch (error) {
    console.error(error);
    return createEmptyProgress();
  }
}

function persistProgress() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function createEmptyProgress() {
  return {
    targetExamDate: getDefaultExamDate(),
    dailyQuizzes: {},
    assessments: {},
  };
}

function getDefaultExamDate() {
  const target = new Date();
  target.setDate(target.getDate() + DEFAULT_SPRINT_DAYS);
  return target.toISOString().slice(0, 10);
}

function average(values) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function formatPercent(value) {
  return `${Math.round(value)}%`;
}

function titleCase(value) {
  return value.split(" ").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
