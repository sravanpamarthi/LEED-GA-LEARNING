const STORAGE_KEY = "leed-ga-coach-progress-v1";

const state = {
  activeDayId: window.STUDY_DATA.days[0].id,
  progress: loadProgress(),
};

const dayList = document.querySelector("#dayList");
const metrics = document.querySelector("#metrics");
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
    if (!window.confirm("Reset all saved quiz and mock progress for this LEED app?")) {
      return;
    }

    state.progress = createEmptyProgress();
    persistProgress();
    state.activeDayId = window.STUDY_DATA.days[0].id;
    render();
  });

  submitQuizButton.addEventListener("click", submitDailyQuiz);
}

function render() {
  renderMetrics();
  renderDayList();
  renderDayContent();
  renderAssessments();
}

function renderMetrics() {
  const completedDays = window.STUDY_DATA.days.filter((day) => {
    const attempt = state.progress.dailyQuizzes[day.id];
    return attempt && attempt.completed;
  }).length;

  const dailyScores = Object.values(state.progress.dailyQuizzes).filter((entry) => entry.completed).map((entry) => entry.percent);
  const assessmentScores = Object.values(state.progress.assessments).filter((entry) => entry.completed).map((entry) => entry.percent);
  const nextDay = getNextIncompleteDay();

  metrics.innerHTML = `
    <article class="metric-card">
      <span>Days done</span>
      <strong>${completedDays}/${window.STUDY_DATA.days.length}</strong>
      <small>Daily quizzes completed</small>
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

function renderDayList() {
  dayList.innerHTML = window.STUDY_DATA.days.map((day) => {
    const attempt = state.progress.dailyQuizzes[day.id];
    const isDone = attempt && attempt.completed;
    const isActive = day.id === state.activeDayId;
    return `
      <button class="day-card ${isDone ? "is-done" : ""} ${isActive ? "is-active" : ""}" type="button" data-day-id="${day.id}">
        <span class="day-number">Day ${day.day}</span>
        <strong>${escapeHtml(day.title)}</strong>
        <small>${isDone ? `Quiz ${attempt.correct}/${attempt.total}` : escapeHtml(day.theme)}</small>
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

  lessonEyebrow.textContent = `Day ${day.day}`;
  lessonTitle.textContent = day.title;
  lessonTheme.textContent = day.theme;

  lessonContent.innerHTML = `
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
  `;

  quizTitle.textContent = `Day ${day.day} Quiz`;
  quizIntro.textContent = `Small test for ${day.title}. Aim for 80%+ before moving on.`;
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
    return `
      <article class="assessment-card">
        <div>
          <p class="assessment-type">${escapeHtml(assessment.type)}</p>
          <h3>${escapeHtml(assessment.title)}</h3>
          <p>${escapeHtml(assessment.description)}</p>
          <small>Recommended after day ${assessment.recommendedDay}</small>
        </div>
        <div class="assessment-meta">
          <strong>${result && result.completed ? `${result.correct}/${result.total}` : `${assessment.questions.length} questions`}</strong>
          <span>${result && result.completed ? formatPercent(result.percent) : "Not started"}</span>
        </div>
        <button class="button button-secondary assessment-launch" type="button" data-assessment-id="${assessment.id}">
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
    const attempt = gradeAttempt(assessment.questions, answers);

    state.progress.assessments[assessmentId] = {
      ...attempt,
      completed: true,
      submittedAt: new Date().toISOString(),
    };

    persistProgress();
    wrapper.querySelector("#modalResult").classList.remove("hidden");
    wrapper.querySelector("#modalResult").innerHTML = renderResultMarkup(attempt, assessment.questions);
    renderMetrics();
    renderAssessments();
    renderDayList();
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

function getNextIncompleteDay() {
  return window.STUDY_DATA.days.find((day) => {
    const attempt = state.progress.dailyQuizzes[day.id];
    return !(attempt && attempt.completed);
  }) || window.STUDY_DATA.days[window.STUDY_DATA.days.length - 1];
}

function loadProgress() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? { ...createEmptyProgress(), ...JSON.parse(stored) } : createEmptyProgress();
  } catch (error) {
    console.error(error);
    return createEmptyProgress();
  }
}

function persistProgress() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function createEmptyProgress() {
  return { dailyQuizzes: {}, assessments: {} };
}

function average(values) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function formatPercent(value) {
  return `${Math.round(value)}%`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
