import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';

const initialForm = {
  title: '',
  organization: '',
  description: '',
  location: '',
  type: 'Internship',
  requiredSkills: '',
  experience: '',
  education: '',
  deadline: '',
};

export default function PostOpportunity() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="post-success">
        <div className="post-success-icon"><CheckCircle2 size={32} aria-hidden="true" /></div>
        <h2 className="post-success-title">Opportunity posted</h2>
        <p className="post-success-sub">
          "{form.title}" is now visible to matching candidates on the platform.
        </p>
        <Button variant="primary" onClick={() => { setForm(initialForm); setSubmitted(false); }}>
          Post another opportunity
        </Button>
      </div>
    );
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="post-form-grid">
        <Input label="Opportunity title" value={form.title} onChange={update('title')} placeholder="Clinical Research Intern" required />
        <Input label="Organization" value={form.organization} onChange={update('organization')} placeholder="Ayush Research Foundation" required />
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor="description">Description<span className="input-required"> *</span></label>
        <textarea
          id="description"
          className="input-field"
          value={form.description}
          onChange={update('description')}
          placeholder="Describe the role, responsibilities and what the candidate will work on..."
          required
        />
      </div>

      <div className="post-form-grid">
        <Input label="Location" value={form.location} onChange={update('location')} placeholder="Pune, Maharashtra" required />
        <div className="input-group">
          <label className="input-label" htmlFor="type">Type</label>
          <select id="type" className="input-field" value={form.type} onChange={update('type')}>
            <option>Internship</option>
            <option>Full-time</option>
            <option>Contract</option>
            <option>Part-time</option>
          </select>
        </div>
      </div>

      <Input
        label="Required skills"
        value={form.requiredSkills}
        onChange={update('requiredSkills')}
        placeholder="e.g. Clinical Research, Documentation, Data Analysis"
        helperText="Separate multiple skills with commas"
        required
      />

      <div className="post-form-grid">
        <Input label="Experience required" value={form.experience} onChange={update('experience')} placeholder="0–1 years" />
        <Input label="Education required" value={form.education} onChange={update('education')} placeholder="BAMS or equivalent" />
      </div>

      <Input label="Application deadline" type="date" value={form.deadline} onChange={update('deadline')} required />

      <Button type="submit" variant="accent" size="lg">Post opportunity</Button>
    </form>
  );
}
