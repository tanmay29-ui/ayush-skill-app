import { useSearchParams, useNavigate } from 'react-router-dom';
import { MapPin, Briefcase, Calendar, ArrowLeft } from 'lucide-react';
import { mockAssessmentResult } from '../../data/studentAssessment.js';
import { opportunities, getOpportunityById } from '../../data/opportunities.js';
import { rankOpportunities } from '../../services/matchingService.js';
import OpportunityCard from '../../components/OpportunityCard.jsx';
import MatchScore from '../../components/MatchScore.jsx';
import Button from '../../components/Button.jsx';

export default function Opportunities() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const viewId = searchParams.get('view');

  const candidateSkills = mockAssessmentResult.skillScores.map((s) => ({ skill: s.skill, level: s.score }));
  const ranked = rankOpportunities(candidateSkills, opportunities);

  if (viewId) {
    const opp = getOpportunityById(viewId);
    const matched = ranked.find((o) => o.id === viewId);
    if (!opp) return <p>Opportunity not found.</p>;

    return (
      <div className="opp-detail-page">
        <button className="opp-detail-back" onClick={() => navigate('/student/opportunities')}>
          <ArrowLeft size={16} aria-hidden="true" /> Back to opportunities
        </button>

        <div className="opp-detail-card">
          <div className="opp-detail-header">
            <div>
              <h2 className="opp-detail-title">{opp.title}</h2>
              <p className="opp-detail-org">{opp.organization}</p>
            </div>
            <MatchScore value={matched.matchScore} />
          </div>

          <div className="opportunity-card-meta opp-detail-meta">
            <span><MapPin size={14} aria-hidden="true" /> {opp.location}</span>
            <span><Briefcase size={14} aria-hidden="true" /> {opp.type}</span>
            <span><Calendar size={14} aria-hidden="true" /> Apply by {opp.deadline}</span>
          </div>

          <p className="opp-detail-desc">{opp.description}</p>

          <h3 className="dash-card-title">Required skills</h3>
          <div className="opportunity-card-skills opp-detail-skills">
            {opp.requiredSkills.map((s) => (
              <span key={s.skill} className={`skill-chip ${matched.missingSkills.includes(s.skill) ? 'skill-chip-missing' : ''}`}>
                {s.skill} · {s.required}% required
              </span>
            ))}
          </div>

          <Button variant="accent" size="lg">Apply now</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="opportunities-page">
      <p className="gaps-sub">
        Ranked by how well your current skills match each opportunity's requirements.
      </p>
      <div className="opportunities-grid">
        {ranked.map((opp) => (
          <OpportunityCard key={opp.id} opportunity={opp} />
        ))}
      </div>
    </div>
  );
}
