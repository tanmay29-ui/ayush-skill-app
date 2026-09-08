import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import { login } from '../../services/authService.js';

export default function IndustrySignup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ organization: '', email: '', contact: '', password: '' });
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login('industry', form.email || 'hr@organization.com');
      navigate('/industry/dashboard');
    }, 500);
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-icon"><Building2 size={22} aria-hidden="true" /></div>
        <h1 className="auth-title">Register Organization</h1>
        <p className="auth-sub">Find candidates based on the skills you need.</p>

        <form onSubmit={handleSubmit}>
          <Input label="Organization Name" value={form.organization} onChange={update('organization')} placeholder="Vedic Life Sciences" required />
          <Input label="Work Email" type="email" value={form.email} onChange={update('email')} placeholder="you@organization.com" required />
          <Input label="Contact Person" value={form.contact} onChange={update('contact')} placeholder="Rahul Kapoor, HR Lead" required />
          <Input label="Password" type="password" value={form.password} onChange={update('password')} placeholder="••••••••" required />
          <Button type="submit" variant="primary" fullWidth loading={loading}>
            Register organization
          </Button>
        </form>

        <div className="auth-links">
          <span className="auth-muted">Already registered?</span>
          <Link to="/login/industry" className="auth-link auth-link-accent">Log in</Link>
        </div>

        <Link to="/" className="auth-back">← Back to role selection</Link>
      </div>
    </section>
  );
}
