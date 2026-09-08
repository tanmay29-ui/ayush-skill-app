import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getRoleById } from '../../data/roles.js';
import { scoreAssessment } from '../../services/assessmentService.js';
import { mockAssessmentResult } from '../../data/studentAssessment.js';
import { saveAssessmentResult, getSavedAssessmentResult } from '../../services/progressService.js';
import ProgressRing from '../../components/ProgressRing.jsx';
import SkillBar from '../../components/SkillBar.jsx';
import Button from '../../components/Button.jsx';

export default function AssessmentResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const answers = location.state?.answers;
  const roleId = location.state?.roleId || getSavedAssessmentResult()?.roleId || mockAssessmentResult.roleId;

  // A real submission carries `answers` in router state — score it live.
  // Otherwise show the last saved result, falling back to demo data.
  const result = answers
    ? scoreAssessment(roleId, answers)
    : getSavedAssessmentResult() || mockAssessmentResult;
  const role = getRoleById(roleId);

  // Persist a freshly-scored, real submission so the rest of the
  // dashboard (skill gaps, roadmap, profile) reflects it too.
  useEffect(() => {
    if (answers) {
      saveAssessmentResult({ ...result, completedOn: new Date().toISOString().slice(0, 10) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="onboarding-page">
      <div className="onboarding-inner result-inner">
        <h1 className="onboarding-title">Your Skill Assessment</h1>

        <div className="result-role-row">
          <span className="result-role-label">Target Role</span>
          <span className="result-role-value">{role?.icon} {role?.title}</span>
        </div>

        <div className="result-ring-row">
          <ProgressRing value={result.overallReadiness} label="Overall readiness" size={140} strokeWidth={12} />
          <p className="result-ring-caption">
            {result.overallReadiness >= 75
              ? "You're close to industry-ready for this role."
              : result.overallReadiness >= 50
              ? 'You have a solid foundation with a few key gaps to close.'
              : "You're early in your journey toward this role — that's a good place to start from."}
          </p>
        </div>

        <div className="result-skills">
          {result.skillScores.map((s) => (
            <SkillBar key={s.skill} label={s.skill} value={s.score} />
          ))}
        </div>

        <Button
          variant="accent"
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
          onClick={() => navigate('/student/skill-gaps')}
        >
          See your skill gaps
        </Button>
      </div>
    </section>
  );
}
