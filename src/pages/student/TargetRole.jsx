import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { roles } from '../../data/roles.js';
import Button from '../../components/Button.jsx';

export default function TargetRole() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const canContinue = Boolean(selected);

  const handleContinue = () => {
    navigate('/student/assessment', { state: { roleId: selected } });
  };

  return (
    <section className="onboarding-page">
      <div className="onboarding-inner">
        <p className="onboarding-eyebrow">Step 1 · Choose a tech track</p>
        <h1 className="onboarding-title">What role are you targeting?</h1>
        <p className="onboarding-sub">
          Pick a technology-focused role. Your 5-question skill assessment and roadmap will adapt to it.
        </p>

        <div className="assessment-preview-strip" aria-label="Assessment details">
          <span><strong>05</strong> questions</span>
          <span><strong>03</strong> min</span>
          <span><strong>01</strong> personalized roadmap</span>
        </div>

        <div className="role-select-grid">
          {roles.map((role) => (
            <button
              key={role.id}
              className={`role-select-card ${selected === role.id ? 'role-select-card-active' : ''}`}
              onClick={() => setSelected(role.id)}
            >
              <span className="role-select-icon" aria-hidden="true">{role.icon}</span>
              <span className="role-select-title">{role.title}</span>
              <span className="role-select-category">{role.category}</span>
              {selected === role.id && <CheckCircle2 size={18} className="role-select-check" aria-hidden="true" />}
            </button>
          ))}


        </div>

        <Button variant="accent" size="lg" icon={ArrowRight} iconPosition="right" disabled={!canContinue} onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </section>
  );
}
