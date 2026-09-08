import { getRoleById } from '../../data/roles.js';
import { mockAssessmentResult } from '../../data/studentAssessment.js';
import { getSavedAssessmentResult } from '../../services/progressService.js';
import { compareToIndustryRequirements } from '../../services/assessmentService.js';

const SKILL_CONTEXT = {
  'Python': 'Python is the primary language used to build, test and ship most of the work in this role.',
  'Machine Learning': 'Machine learning fundamentals underpin how you design and reason about models in this role.',
  'Model Evaluation': 'Being able to properly evaluate a model is essential before it ever reaches production.',
  'Deployment': 'Shipping models or features into production reliably is a core, non-negotiable skill here.',
  'Data Analysis': 'Data analysis is frequently required for interpreting real-world datasets in this role.',
  'System Design': 'System design skills matter as soon as an application needs to scale beyond a single user.',
  'Security Fundamentals': 'Security fundamentals underpin every decision made in this role — they are not optional.',
  'Cloud Platforms': 'Comfort with a major cloud platform is expected for provisioning and running infrastructure.',
};

export default function SkillGaps() {
  const result = getSavedAssessmentResult() || mockAssessmentResult;
  const role = getRoleById(result.roleId);
  const comparison = compareToIndustryRequirements(result.roleId, result.skillScores);
  const sorted = [...comparison].sort((a, b) => b.gap - a.gap);

  return (
    <div className="gaps-page">
      <p className="gaps-role">For {role?.title}</p>
      <h2 className="gaps-title">Where you need to improve</h2>
      <p className="gaps-sub">
        Every skill below is compared against what employers currently require for this role.
      </p>

      <div className="gaps-list">
        {sorted.map((item) => (
          <div key={item.skill} className="gap-card">
            <div className="gap-card-header">
              <h3 className="gap-card-skill">{item.skill}</h3>
              <span className={`priority-badge priority-${item.priority.split(' ')[0].toLowerCase()}`}>
                {item.priority}
              </span>
            </div>

            <div className="gap-card-metrics">
              <div>
                <p className="gap-metric-label">Your level</p>
                <p className="gap-metric-value">{item.level}%</p>
              </div>
              <div>
                <p className="gap-metric-label">Industry requirement</p>
                <p className="gap-metric-value">{item.requirement}%</p>
              </div>
              <div>
                <p className="gap-metric-label">Gap</p>
                <p className={`gap-metric-value ${item.gap > 0 ? 'gap-metric-negative' : 'gap-metric-positive'}`}>
                  {item.gap > 0 ? `${item.gap} points` : 'Met'}
                </p>
              </div>
            </div>

            <div className="gap-bar-track">
              <div className="gap-bar-fill" style={{ width: `${item.level}%` }} />
              <div className="gap-bar-marker" style={{ left: `${item.requirement}%` }} />
            </div>

            <p className="gap-card-context">
              {SKILL_CONTEXT[item.skill] || `${item.skill} is one of the core skills employers look for in this role.`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
