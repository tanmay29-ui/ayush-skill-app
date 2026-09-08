import { TrendingUp } from 'lucide-react';
import { industryDemandTrends } from '../../data/academia.js';

export default function IndustryDemand() {
  return (
    <div className="demand-page">
      <p className="gaps-sub">
        Skill demand trends observed across recent opportunity postings from industry partners.
      </p>

      <div className="demand-list">
        {industryDemandTrends.map((d) => (
          <div key={d.skill} className="demand-card">
            <div className="demand-card-icon"><TrendingUp size={18} aria-hidden="true" /></div>
            <div className="demand-card-body">
              <div className="demand-card-top">
                <h3 className="demand-card-skill">{d.skill}</h3>
                <span className="demand-card-change">{d.demandChange}</span>
              </div>
              <p className="demand-card-note">{d.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
