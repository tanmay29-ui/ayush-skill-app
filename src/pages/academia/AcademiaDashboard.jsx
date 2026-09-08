import { Users, CheckCircle2, AlertTriangle, Gauge } from 'lucide-react';
import { academiaSummary, skillDistribution, areasRequiringAttention } from '../../data/academia.js';
import StatCard from '../../components/StatCard.jsx';
import SkillBar from '../../components/SkillBar.jsx';

export default function AcademiaDashboard() {
  return (
    <div className="dash-grid">
      <div className="stat-grid">
        <StatCard label="Total students" value={academiaSummary.totalStudents} icon={Users} />
        <StatCard label="Industry-ready students" value={academiaSummary.industryReadyStudents} icon={CheckCircle2} />
        <StatCard label="Students needing improvement" value={academiaSummary.studentsNeedingImprovement} icon={AlertTriangle} />
        <StatCard label="Average readiness" value={`${academiaSummary.averageReadiness}%`} icon={Gauge} />
      </div>

      <div className="dash-two-col">
        <section className="dash-card">
          <h3 className="dash-card-title">Skill distribution</h3>
          <div className="dash-skill-list">
            {skillDistribution.map((s) => (
              <SkillBar key={s.skill} label={s.skill} value={s.value} size="sm" />
            ))}
          </div>
        </section>

        <section className="dash-card">
          <h3 className="dash-card-title">Areas requiring attention</h3>
          <div className="attention-list">
            {areasRequiringAttention.map((a) => (
              <div key={a.skill} className="attention-item">
                <span className="attention-dot" />
                <div>
                  <p className="attention-skill">{a.skill}</p>
                  <p className="attention-reason">{a.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
