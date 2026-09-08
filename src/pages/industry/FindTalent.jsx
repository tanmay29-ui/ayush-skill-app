import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { candidates } from '../../data/industry.js';
import MatchScore from '../../components/MatchScore.jsx';
import Button from '../../components/Button.jsx';

export default function FindTalent() {
  const navigate = useNavigate();
  const [roleFilter, setRoleFilter] = useState('all');
  const [educationFilter, setEducationFilter] = useState('all');
  const [locationQuery, setLocationQuery] = useState('');
  const [minExperience, setMinExperience] = useState('all');

  const educationOptions = useMemo(
    () => Array.from(new Set(candidates.map((c) => c.education))),
    []
  );

  // Built from the candidates themselves so the filter always matches
  // real target-role values, regardless of what roles the student side
  // currently supports.
  const roleOptions = useMemo(
    () => Array.from(new Set(candidates.map((c) => c.targetRole))),
    []
  );

  const filtered = candidates.filter((c) => {
    const matchesRole = roleFilter === 'all' || c.targetRole === roleFilter;
    const matchesEducation = educationFilter === 'all' || c.education === educationFilter;
    const matchesLocation = c.location.toLowerCase().includes(locationQuery.toLowerCase());
    const matchesExperience =
      minExperience === 'all' ||
      (minExperience === '0' ? true : c.experienceYears >= Number(minExperience));
    return matchesRole && matchesEducation && matchesLocation && matchesExperience;
  });

  return (
    <div className="talent-page">
      <div className="talent-filters">
        <select className="input-field" value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} aria-label="Filter by target role">
          <option value="all">All target roles</option>
          {roleOptions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <select className="input-field" value={educationFilter} onChange={(e) => setEducationFilter(e.target.value)} aria-label="Filter by education">
          <option value="all">All education</option>
          {educationOptions.map((e) => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
        <input
          className="input-field"
          placeholder="Filter by location"
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
          aria-label="Filter by location"
        />
        <select className="input-field" value={minExperience} onChange={(e) => setMinExperience(e.target.value)} aria-label="Filter by minimum experience">
          <option value="all">Any experience</option>
          <option value="0">0+ years</option>
          <option value="1">1+ years</option>
          <option value="2">2+ years</option>
        </select>
      </div>

      <p className="gaps-sub">{filtered.length} candidate{filtered.length !== 1 ? 's' : ''} found</p>

      <div className="candidate-grid">
        {filtered.map((c) => (
          <div key={c.id} className="candidate-card">
            <div className="candidate-card-header">
              <div>
                <p className="candidate-card-name">{c.name}</p>
                <p className="candidate-card-meta">{c.education} · {c.targetRole}</p>
              </div>
              <MatchScore value={Math.round(c.skills.reduce((a, s) => a + s.level, 0) / c.skills.length)} />
            </div>

            <div className="candidate-card-skills">
              {c.skills.slice(0, 3).map((s) => (
                <div key={s.skill} className="candidate-skill-row">
                  <span>{s.skill}</span>
                  <span>{s.level}%</span>
                </div>
              ))}
            </div>

            <Button variant="secondary" size="sm" fullWidth onClick={() => navigate(`/industry/candidate/${c.id}`)}>
              View Profile
            </Button>
          </div>
        ))}

        {filtered.length === 0 && <p className="students-empty">No candidates match your filters.</p>}
      </div>
    </div>
  );
}
