import { useNavigate } from 'react-router-dom';
import { Briefcase, Users, ClipboardList, Gauge, ArrowRight } from 'lucide-react';
import { industrySummary, candidates } from '../../data/industry.js';
import { opportunities } from '../../data/opportunities.js';
import { rankCandidates } from '../../services/matchingService.js';
import StatCard from '../../components/StatCard.jsx';
import MatchScore from '../../components/MatchScore.jsx';
import Button from '../../components/Button.jsx';

export default function IndustryDashboard() {
  const navigate = useNavigate();
  const featuredOpportunity = opportunities[0];
  const topCandidates = rankCandidates(candidates, featuredOpportunity.requiredSkills).slice(0, 4);

  return (
    <div className="dash-grid">
      <div className="stat-grid">
        <StatCard label="Open opportunities" value={industrySummary.openOpportunities} icon={Briefcase} />
        <StatCard label="Candidates matched" value={industrySummary.candidatesMatched} icon={Users} />
        <StatCard label="Applications" value={industrySummary.applications} icon={ClipboardList} />
        <StatCard label="Average candidate match" value={`${industrySummary.averageCandidateMatch}%`} icon={Gauge} />
      </div>

      <section className="dash-card">
        <div className="dash-section-header">
          <div>
            <h3 className="dash-card-title" style={{ marginBottom: 4 }}>Candidate preview</h3>
            <p className="gaps-sub" style={{ marginBottom: 0 }}>Top matches for "{featuredOpportunity.title}"</p>
          </div>
          <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right" onClick={() => navigate('/industry/talent')}>
            Find talent
          </Button>
        </div>

        <div className="candidate-preview-grid">
          {topCandidates.map((c) => (
            <button key={c.id} className="candidate-preview-card" onClick={() => navigate(`/industry/candidate/${c.id}`)}>
              <div className="candidate-preview-top">
                <span className="profile-avatar-large candidate-preview-avatar">
                  {c.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <MatchScore value={c.matchScore} size="sm" />
              </div>
              <p className="candidate-preview-name">{c.name}</p>
              <p className="candidate-preview-meta">{c.education} · {c.targetRole}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
