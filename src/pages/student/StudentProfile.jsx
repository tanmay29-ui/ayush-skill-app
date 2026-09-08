import { useState } from 'react';
import { Pencil, Check, Plus } from 'lucide-react';
import { currentStudent } from '../../data/students.js';
import { getRoleById } from '../../data/roles.js';
import { mockAssessmentResult } from '../../data/studentAssessment.js';
import { getSavedAssessmentResult } from '../../services/progressService.js';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import SkillBar from '../../components/SkillBar.jsx';

export default function StudentProfile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState(currentStudent);
  const activeResult = getSavedAssessmentResult() || mockAssessmentResult;
  const role = getRoleById(activeResult.roleId);

  const update = (key) => (e) => setProfile((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="profile-page">
      <div className="profile-header-card">
        <div className="profile-avatar-large">
          {profile.name.split(' ').map((n) => n[0]).join('')}
        </div>
        <div className="profile-header-info">
          {editing ? (
            <Input label="Full name" value={profile.name} onChange={update('name')} />
          ) : (
            <h2 className="profile-name">{profile.name}</h2>
          )}
          <p className="profile-meta">{profile.education} · {profile.institution}</p>
          <p className="profile-meta">{profile.year}</p>
        </div>
        <Button
          variant={editing ? 'accent' : 'secondary'}
          icon={editing ? Check : Pencil}
          onClick={() => setEditing((e) => !e)}
        >
          {editing ? 'Save' : 'Edit profile'}
        </Button>
      </div>

      <div className="profile-two-col">
        <section className="dash-card">
          <h3 className="dash-card-title">Target role</h3>
          <p className="profile-target-role">{role?.title}</p>
          <p className="profile-target-desc">{role?.description}</p>
        </section>

        <section className="dash-card">
          <h3 className="dash-card-title">Readiness overview</h3>
          <div className="dash-skill-list">
            {activeResult.skillScores.map((s) => (
              <SkillBar key={s.skill} label={s.skill} value={s.score} size="sm" />
            ))}
          </div>
        </section>
      </div>

      <section className="dash-card">
        <h3 className="dash-card-title">Certifications</h3>
        <ul className="profile-list">
          {profile.certifications.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
        {editing && (
          <button className="profile-add-row">
            <Plus size={14} aria-hidden="true" /> Add certification
          </button>
        )}
      </section>

      <section className="dash-card">
        <h3 className="dash-card-title">Projects</h3>
        <div className="profile-project-list">
          {profile.projects.map((p, i) => (
            <div key={i} className="profile-project">
              <p className="profile-project-title">{p.title}</p>
              <p className="profile-project-desc">{p.description}</p>
            </div>
          ))}
        </div>
        {editing && (
          <button className="profile-add-row">
            <Plus size={14} aria-hidden="true" /> Add project
          </button>
        )}
      </section>

      <section className="dash-card">
        <h3 className="dash-card-title">Experience</h3>
        {profile.experience.length === 0 ? (
          <p className="profile-empty">No experience added yet.</p>
        ) : (
          <div className="profile-project-list">
            {profile.experience.map((exp, i) => (
              <div key={i} className="profile-project">
                <p className="profile-project-title">{exp.title} · {exp.organization}</p>
                <p className="profile-meta">{exp.duration}</p>
                <p className="profile-project-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        {editing && (
          <button className="profile-add-row">
            <Plus size={14} aria-hidden="true" /> Add experience
          </button>
        )}
      </section>
    </div>
  );
}
