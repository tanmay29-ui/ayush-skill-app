import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getCandidateById } from '../../data/industry.js';
import SkillBar from '../../components/SkillBar.jsx';
import MatchScore from '../../components/MatchScore.jsx';
import Button from '../../components/Button.jsx';

export default function CandidateProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const candidate = getCandidateById(id);

  if (!candidate) {
    return (
      <div>
        <p>Candidate not found.</p>
        <Button variant="secondary" onClick={() => navigate('/industry/talent')}>Back to Find Talent</Button>
      </div>
    );
  }

  const overallMatch = Math.round(candidate.skills.reduce((a, s) => a + s.level, 0) / candidate.skills.length);

  return (
    <div className="profile-page">
      <button className="opp-detail-back" onClick={() => navigate('/industry/talent')}>
        <ArrowLeft size={16} aria-hidden="true" /> Back to Find Talent
      </button>

      <div className="profile-header-card">
        <div className="profile-avatar-large">
          {candidate.name.split(' ').map((n) => n[0]).join('')}
        </div>
        <div className="profile-header-info">
          <h2 className="profile-name">{candidate.name}</h2>
          <p className="profile-meta">{candidate.education} · {candidate.institution}</p>
          <p className="profile-meta">{candidate.location} · Targeting {candidate.targetRole}</p>
        </div>
        <MatchScore value={overallMatch} />
      </div>

      <section className="dash-card">
        <h3 className="dash-card-title">Assessment overview</h3>
        <div className="dash-skill-list">
          {candidate.skills.map((s) => (
            <SkillBar key={s.skill} label={s.skill} value={s.level} />
          ))}
        </div>
      </section>

      <div className="profile-two-col">
        <section className="dash-card">
          <h3 className="dash-card-title">Projects</h3>
          {candidate.projects.length === 0 ? (
            <p className="profile-empty">No projects listed.</p>
          ) : (
            <ul className="profile-list">
              {candidate.projects.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          )}
        </section>

        <section className="dash-card">
          <h3 className="dash-card-title">Experience</h3>
          {candidate.experience.length === 0 ? (
            <p className="profile-empty">No experience listed.</p>
          ) : (
            <ul className="profile-list">
              {candidate.experience.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          )}
        </section>
      </div>

      <Button variant="accent" size="lg">Contact candidate</Button>
    </div>
  );
}
