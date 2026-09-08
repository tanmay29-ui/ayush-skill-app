import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { skillDistribution, skillGapsByRole, academiaSummary } from '../../data/academia.js';
import StatCard from '../../components/StatCard.jsx';

const sorted = [...skillDistribution].sort((a, b) => b.value - a.value);
const strongest = sorted.slice(0, 2);
const weakest = sorted.slice(-2);

export default function SkillAnalytics() {
  return (
    <div className="dash-grid">
      <div className="stat-grid">
        <StatCard label="Average student readiness" value={`${academiaSummary.averageReadiness}%`} />
        <StatCard label="Strongest skill" value={strongest[0]?.skill} sublabel={`${strongest[0]?.value}% average`} />
        <StatCard label="Weakest skill" value={weakest[0]?.skill} sublabel={`${weakest[0]?.value}% average`} />
      </div>

      <section className="dash-card">
        <h3 className="dash-card-title">Skill distribution across students</h3>
        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={skillDistribution} margin={{ top: 4, right: 8, left: -16, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
              <XAxis dataKey="skill" tick={{ fontSize: 11, fill: '#545454' }} interval={0} angle={-20} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 11, fill: '#545454' }} domain={[0, 100]} />
              <Tooltip cursor={{ fill: '#f6f6f6' }} contentStyle={{ borderRadius: 8, border: '1px solid #e5e5e5', fontSize: 13 }} />
              <Bar dataKey="value" fill="#06c167" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="dash-card">
        <h3 className="dash-card-title">Skill gaps by target role</h3>
        <div className="applications-table-wrap">
          <table className="applications-table">
            <thead>
              <tr>
                <th>Target Role</th>
                <th>Top Gap</th>
                <th>Average Gap</th>
              </tr>
            </thead>
            <tbody>
              {skillGapsByRole.map((r) => (
                <tr key={r.role}>
                  <td className="applications-title-cell">{r.role}</td>
                  <td>{r.topGap}</td>
                  <td>{r.avgGap} points</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
