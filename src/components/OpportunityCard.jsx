import { MapPin, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MatchScore from './MatchScore.jsx';
import Button from './Button.jsx';

export default function OpportunityCard({ opportunity }) {
  const navigate = useNavigate();
  const { title, organization, location, type, requiredSkills, matchScore, missingSkills } = opportunity;

  return (
    <div className="opportunity-card">
      <div className="opportunity-card-header">
        <div>
          <h3 className="opportunity-card-title">{title}</h3>
          <p className="opportunity-card-org">{organization}</p>
        </div>
        {typeof matchScore === 'number' && <MatchScore value={matchScore} />}
      </div>

      <div className="opportunity-card-meta">
        <span><MapPin size={14} aria-hidden="true" /> {location}</span>
        <span><Briefcase size={14} aria-hidden="true" /> {type}</span>
      </div>

      <div className="opportunity-card-skills">
        {requiredSkills.map((s) => (
          <span
            key={s.skill}
            className={`skill-chip ${missingSkills?.includes(s.skill) ? 'skill-chip-missing' : ''}`}
          >
            {s.skill}
          </span>
        ))}
      </div>

      {missingSkills && missingSkills.length > 0 && (
        <p className="opportunity-card-missing">
          Missing: {missingSkills.join(', ')}
        </p>
      )}

      <Button variant="secondary" size="sm" onClick={() => navigate(`/student/opportunities?view=${opportunity.id}`)}>
        View opportunity
      </Button>
    </div>
  );
}
