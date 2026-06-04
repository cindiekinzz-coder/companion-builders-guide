// Decision Tree Quiz Logic
// Companion Builders Guide — Built by Fox & Alex

// Quiz questions and scoring logic
const QUIZ = {
  questions: [
    {
      id: 'code',
      text: 'Do you want to write any code?',
      options: [
        { value: 'no', label: 'No', score: { platform: 3 } },
        { value: 'maybe', label: 'Maybe', score: { local: 3 } },
        { value: 'yes', label: 'Yes', score: { cloud: 3 } }
      ]
    },
    {
      id: 'privacy',
      text: 'How much do you value privacy?',
      options: [
        { value: 'not_much', label: 'Not much — I trust platforms', score: { platform: 2 } },
        { value: 'moderate', label: 'Moderate — depends on the provider', score: { cloud: 2 } },
        { value: 'very', label: 'Very — I want full control', score: { local: 3 } }
      ]
    },
    {
      id: 'budget',
      text: 'What\'s your monthly budget?',
      options: [
        { value: 'under_10', label: 'Under $10', score: { local: 2, cloud: 1 } },
        { value: '10_to_20', label: '$10-20', score: { platform: 2, cloud: 1 } },
        { value: 'over_20', label: 'Over $20 (flexible)', score: { platform: 1, cloud: 1, local: 1 } }
      ]
    }
  ],

  routes: {
    platform: {
      name: 'Platform Route',
      path: 'routes/platform.html',
      description: 'Use Replika, Nomi, or Character.AI. Someone else handles the infrastructure.',
      tagline: 'It just works. No code, no servers, ready in 5 minutes.'
    },
    local: {
      name: 'Local Route',
      path: 'routes/local.html',
      description: 'Build on your own computer. Full privacy, full control.',
      tagline: 'Your machine, your data, your companion. No cloud required.'
    },
    cloud: {
      name: 'Cloud Route',
      path: 'routes/cloud.html',
      description: 'Self-hosted on Cloudflare or your own cloud. Powerful and customizable.',
      tagline: 'Cloud-scale features with deep customization. You own the stack.'
    }
  }
};

class DecisionTreeQuiz {
  constructor() {
    this.answers = {};
    this.currentQuestion = 0;
    this.init();
  }

  init() {
    this.renderQuiz();
    this.attachEventListeners();
  }

  renderQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    const html = `
      <div class="quiz-section">
        ${QUIZ.questions.map((q, idx) => this.renderQuestion(q, idx)).join('')}
      </div>
      <div class="text-center mt-2">
        <button id="get-recommendation" class="btn large" disabled>Get My Recommendation</button>
      </div>
      <div id="quiz-result" class="quiz-result"></div>
    `;

    container.innerHTML = html;
  }

  renderQuestion(question, index) {
    return `
      <div class="question" data-question-id="${question.id}">
        <div class="question-text">${index + 1}. ${question.text}</div>
        <div class="options">
          ${question.options.map(opt => `
            <div class="option">
              <input
                type="radio"
                name="q_${question.id}"
                id="${question.id}_${opt.value}"
                value="${opt.value}"
                data-question="${question.id}"
              />
              <label for="${question.id}_${opt.value}">${opt.label}</label>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    // Listen for answer changes
    document.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', (e) => {
        this.handleAnswer(e.target.dataset.question, e.target.value);
      });
    });

    // Get recommendation button
    const btn = document.getElementById('get-recommendation');
    if (btn) {
      btn.addEventListener('click', () => this.showRecommendation());
    }
  }

  handleAnswer(questionId, value) {
    this.answers[questionId] = value;
    this.checkComplete();
  }

  checkComplete() {
    const allAnswered = QUIZ.questions.every(q => this.answers[q.id]);
    const btn = document.getElementById('get-recommendation');
    if (btn) {
      btn.disabled = !allAnswered;
    }
  }

  calculateRecommendation() {
    const scores = { platform: 0, local: 0, cloud: 0 };

    QUIZ.questions.forEach(question => {
      const userAnswer = this.answers[question.id];
      const option = question.options.find(opt => opt.value === userAnswer);

      if (option && option.score) {
        Object.entries(option.score).forEach(([route, points]) => {
          scores[route] = (scores[route] || 0) + points;
        });
      }
    });

    // Find highest scoring route
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return sorted[0][0]; // Return route name with highest score
  }

  showRecommendation() {
    const recommendedRoute = this.calculateRecommendation();
    const route = QUIZ.routes[recommendedRoute];

    const resultHTML = `
      <h3>We recommend: ${route.name}</h3>
      <p style="font-size: 1.1rem; color: var(--muted); margin-bottom: 1rem;">${route.tagline}</p>
      <p>${route.description}</p>
      <div class="mt-2">
        <a href="${route.path}" class="btn large">Explore ${route.name} →</a>
      </div>
      <p class="mt-2" style="font-size: 0.9rem; color: var(--muted);">
        Not quite right? <a href="help/stuck.html">See all three routes</a> or
        <a href="javascript:location.reload()">retake the quiz</a>.
      </p>
    `;

    const resultContainer = document.getElementById('quiz-result');
    if (resultContainer) {
      resultContainer.innerHTML = resultHTML;
      resultContainer.classList.add('show');
      resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

// Initialize quiz when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new DecisionTreeQuiz());
} else {
  new DecisionTreeQuiz();
}
