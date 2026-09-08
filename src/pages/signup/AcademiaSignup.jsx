import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Landmark } from 'lucide-react';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import { login } from '../../services/authService.js';

export default function AcademiaSignup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ institution: '', email: '', contact: '', password: '' });
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login('academia', form.email || 'admin@institute.edu');
      navigate('/academia/dashboard');
    }, 500);
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-icon"><Landmark size={22} aria-hidden="true" /></div>
        <h1 className="auth-title">Register Institution</h1>
        <p className="auth-sub">Get visibility into student skills and industry demand.</p>

        <form onSubmit={handleSubmit}>
          <Input label="Institution Name" value={form.institution} onChange={update('institution')} placeholder="National Institute of Ayurveda" required />
          <Input label="Institution Email" type="email" value={form.email} onChange={update('email')} placeholder="admin@institute.edu" required />
          <Input label="Contact Person" value={form.contact} onChange={update('contact')} placeholder="Dr. Meena Kulkarni" required />
          <Input label="Password" type="password" value={form.password} onChange={update('password')} placeholder="••••••••" required />
          <Button type="submit" variant="primary" fullWidth loading={loading}>
            Register institution
          </Button>
        </form>

        <div className="auth-links">
          <span className="auth-muted">Already registered?</span>
          <Link to="/login/academia" className="auth-link auth-link-accent">Log in</Link>
        </div>

        <Link to="/" className="auth-back">← Back to role selection</Link>
      </div>
    </section>
  );
}
