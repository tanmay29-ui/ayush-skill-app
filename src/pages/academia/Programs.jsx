import { programs } from '../../data/academia.js';

export default function Programs() {
  return (
    <div className="programs-page">
      <p className="gaps-sub">Readiness and skill trends by academic program.</p>

      <div className="programs-grid">
        {programs.map((p) => (
          <div key={p.id} className="program-card">
            <h3 className="program-card-title">{p.name}</h3>
            <div className="program-card-stats">
              <div>
                <p className="gap-metric-label">Students</p>
                <p className="gap-metric-value">{p.students}</p>
              </div>
              <div>
                <p className="gap-metric-label">Avg readiness</p>
                <p className="gap-metric-value">{p.avgReadiness}%</p>
              </div>
            </div>
            <div className="program-card-skills">
              <span className="skill-chip">Strongest: {p.strongestSkill}</span>
              <span className="skill-chip skill-chip-missing">Weakest: {p.weakestSkill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
