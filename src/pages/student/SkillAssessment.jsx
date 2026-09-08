import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getRoleById } from '../../data/roles.js';
import { getQuizForRole } from '../../data/quizData.js';
import Button from '../../components/Button.jsx';
import {
  saveInProgressAssessment,
  getInProgressAssessment,
  clearInProgressAssessment,
} from '../../services/progressService.js';

export default function SkillAssessment() {
  const location = useLocation();
  const navigate = useNavigate();

  // A fresh navigation from Target Role carries roleId in router state.
  // If that's missing (e.g. the page was refreshed mid-assessment), fall
  // back to whatever role was last in progress so the student doesn't
  // silently lose their assessment.
  const inProgress = !location.state?.roleId ? getInProgressAssessment() : null;
  const roleId = location.state?.roleId || inProgress?.roleId || 'full-stack-developer';
  const role = getRoleById(roleId);
  const questions = getQuizForRole(roleId);

  const [current, setCurrent] = useState(inProgress?.current ?? 0);
  const [answers, setAnswers] = useState(inProgress?.answers ?? {});
  const [started, setStarted] = useState(Boolean(inProgress));

  useEffect(() => {
    if (!started) return;
    saveInProgressAssessment({ roleId, current, answers });
  }, [roleId, current, answers, started]);

  if (!role || questions.length === 0) {
    return (
      <section className="onboarding-page">
        <div className="onboarding-inner">
          <h1 className="onboarding-title">No assessment available</h1>
          <p className="onboarding-sub">Please choose a role from our list to take a tailored assessment.</p>
          <Button variant="primary" onClick={() => navigate('/student/target-role')}>Choose target role</Button>
        </div>
      </section>
    );
  }

  const question = questions[current];
  const selectedIndex = answers[question.id];
  const progress = ((current + 1) / questions.length) * 100;

  const handleSelect = (index) => {
    setAnswers((prev) => ({ ...prev, [question.id]: index }));
  };

  const handleSubmit = () => {
    const formattedAnswers = questions.map((q) => ({
      questionId: q.id,
      selectedIndex: answers[q.id],
    }));
    clearInProgressAssessment();
    navigate('/student/assessment/result', { state: { roleId, answers: formattedAnswers } });
  };

  if (!started) {
    return (
      <section className="onboarding-page">
        <div className="onboarding-inner">
          <p className="onboarding-eyebrow">Step 2 · Skill assessment</p>
          <h1 className="onboarding-title">Let's assess where you stand.</h1>
          <p className="onboarding-sub">
            This assessment contains 5 questions designed specifically around {role.title}. It takes about
            3 minutes. Answer honestly — this shapes your personalized roadmap.
          </p>
          <Button variant="accent" size="lg" onClick={() => setStarted(true)}>
            Start assessment
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="quiz-page">
      <div className="quiz-inner">
        <div className="quiz-top">
          <span className="quiz-progress-label">Question {current + 1} of {questions.length}</span>
          <span className="quiz-role-label">{role.icon} {role.title}</span>
        </div>
        <div className="quiz-progress-track">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <h2 className="quiz-question">{question.question}</h2>

        <div className="quiz-options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`quiz-option ${selectedIndex === index ? 'quiz-option-selected' : ''}`}
              onClick={() => handleSelect(index)}
            >
              <span className="quiz-option-marker">{String.fromCharCode(65 + index)}</span>
              <span>{option}</span>
            </button>
          ))}
        </div>

        <div className="quiz-nav">
          <Button
            variant="ghost"
            icon={ChevronLeft}
            disabled={current === 0}
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          >
            Previous
          </Button>

          {current < questions.length - 1 ? (
            <Button
              variant="primary"
              icon={ChevronRight}
              iconPosition="right"
              disabled={selectedIndex === undefined}
              onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="accent"
              disabled={Object.keys(answers).length < questions.length}
              onClick={handleSubmit}
            >
              Submit Assessment
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
