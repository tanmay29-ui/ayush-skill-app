import { ArrowDown } from 'lucide-react';
import { getRoleById } from '../../data/roles.js';
import { mockAssessmentResult } from '../../data/studentAssessment.js';
import { getSavedAssessmentResult } from '../../services/progressService.js';
import { compareToIndustryRequirements, getRoadmapForSkill } from '../../services/assessmentService.js';

export default function Roadmap() {
  const result = getSavedAssessmentResult() || mockAssessmentResult;
  const role = getRoleById(result.roleId);
  const comparison = compareToIndustryRequirements(result.roleId, result.skillScores);
  const priorityGaps = comparison
    .filter((c) => c.gap > 0)
    .sort((a, b) => b.gap - a.gap)
    .slice(0, 3);

  return (
    <div className="roadmap-page">
      <p className="gaps-role">For {role?.title}</p>
      <h2 className="gaps-title">Your path to the role</h2>
      <p className="gaps-sub">
        A focused sequence to close your highest-priority skill gaps, starting with the largest first.
      </p>

      <div className="roadmap-list">
        {priorityGaps.map((gap) => {
          const steps = getRoadmapForSkill(gap.skill);
          return (
            <div key={gap.skill} className="roadmap-block">
              <div className="roadmap-block-header">
                <h3 className="roadmap-block-title">{gap.skill}</h3>
                <span className="roadmap-block-gap">{gap.gap} point gap</span>
              </div>

              <div className="roadmap-steps">
                {steps.map((s, i) => (
                  <div key={s.step} className="roadmap-step-wrap">
                    <div className="roadmap-step">
                      <span className="roadmap-step-number">{String(s.step).padStart(2, '0')}</span>
                      <p className="roadmap-step-text">{s.text}</p>
                    </div>
                    {i < steps.length - 1 && <ArrowDown size={16} className="roadmap-arrow" aria-hidden="true" />}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {priorityGaps.length === 0 && (
        <p className="profile-empty">You're meeting the industry requirement on every measured skill. Nice work.</p>
      )}
    </div>
  );
}
