import { useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target } from 'lucide-react';
import { getRoleById } from '../../data/roles.js';
import { mockAssessmentResult } from '../../data/studentAssessment.js';
import { getSavedAssessmentResult } from '../../services/progressService.js';
import { compareToIndustryRequirements } from '../../services/assessmentService.js';
import { rankOpportunities } from '../../services/matchingService.js';
import { opportunities } from '../../data/opportunities.js';
import ProgressRing from '../../components/ProgressRing.jsx';
import SkillBar from '../../components/SkillBar.jsx';
import OpportunityCard from '../../components/OpportunityCard.jsx';
import Button from '../../components/Button.jsx';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const activeResult = getSavedAssessmentResult() || mockAssessmentResult;
  const role = getRoleById(activeResult.roleId);
  const { overallReadiness, skillScores } = activeResult;

  const sorted = [...skillScores].sort((a, b) => b.score - a.score);
  const strongest = sorted.slice(0, 2);
  const weakest = sorted.slice(-2).reverse();

  const comparison = compareToIndustryRequirements(activeResult.roleId, skillScores);
  const topGap = [...comparison].sort((a, b) => b.gap - a.gap)[0];

  const candidateSkills = skillScores.map((s) => ({ skill: s.skill, level: s.score }));
  const topOpportunity = rankOpportunities(candidateSkills, opportunities)[0];

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning.' : hour < 18 ? 'Good afternoon.' : 'Good evening.';

  return (
    <div className="dash-grid">
      <section className="dash-hero">
        <p className="dash-greeting">{greeting}</p>
        <div className="dash-hero-row">
          <div>
            <p className="dash-hero-label">Your target role</p>
            <h2 className="dash-hero-role">{role?.title}</h2>
            <Button
              variant="accent"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => navigate('/student/target-role')}
            >
              Take assessment
            </Button>
          </div>
          <ProgressRing value={overallReadiness} label="Career readiness" size={100} strokeWidth={9} />
        </div>
      </section>

      <div className="dash-two-col">
        <section className="dash-card">
          <h3 className="dash-card-title">Your strongest skills</h3>
          <div className="dash-skill-list">
            {strongest.map((s) => (
              <SkillBar key={s.skill} label={s.skill} value={s.score} size="sm" />
            ))}
          </div>
        </section>

        <section className="dash-card">
          <h3 className="dash-card-title">Skills to improve</h3>
          <div className="dash-skill-list">
            {weakest.map((s) => (
              <SkillBar key={s.skill} label={s.skill} value={s.score} size="sm" />
            ))}
          </div>
        </section>
      </div>

      <div className="dash-two-col">
        <section className="dash-card dash-card-action">
          <div className="dash-card-action-icon"><Target size={18} aria-hidden="true" /></div>
          <p className="dash-card-action-label">Recommended next step</p>
          <p className="dash-card-action-value">Improve {topGap?.skill}</p>
          <Button variant="secondary" size="sm" icon={ArrowRight} iconPosition="right" onClick={() => navigate('/student/skill-gaps')}>
            View skill gaps
          </Button>
        </section>

        <section className="dash-card dash-card-action">
          <div className="dash-card-action-icon"><TrendingUp size={18} aria-hidden="true" /></div>
          <p className="dash-card-action-label">Recommended opportunity</p>
          <p className="dash-card-action-value">{topOpportunity?.title}</p>
          <p className="dash-card-action-sub">Skill match: {topOpportunity?.matchScore}%</p>
          <Button variant="secondary" size="sm" icon={ArrowRight} iconPosition="right" onClick={() => navigate('/student/opportunities')}>
            View opportunities
          </Button>
        </section>
      </div>

      <section>
        <div className="dash-section-header">
          <h3 className="dash-card-title">Recommended opportunities</h3>
          <Button variant="ghost" size="sm" onClick={() => navigate('/student/opportunities')}>See all</Button>
        </div>
        <div className="dash-opportunities">
          {rankOpportunities(candidateSkills, opportunities).slice(0, 2).map((opp) => (
            <OpportunityCard key={opp.id} opportunity={opp} />
          ))}
        </div>
      </section>

      <section className="dash-card">
        <h3 className="dash-card-title">Recent activity</h3>
        <ul className="dash-activity-list">
          <li><span className="dash-activity-dot" /> Completed skill assessment for {role?.title} <span className="dash-activity-time">3 days ago</span></li>
          <li><span className="dash-activity-dot" /> Applied to Clinical Research Intern <span className="dash-activity-time">5 days ago</span></li>
          <li><span className="dash-activity-dot" /> Updated profile with a new project <span className="dash-activity-time">1 week ago</span></li>
        </ul>
      </section>
    </div>
  );
}
