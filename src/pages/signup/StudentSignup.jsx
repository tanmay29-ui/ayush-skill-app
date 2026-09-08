import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import { login } from '../../services/authService.js';

export default function StudentSignup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', institution: '', password: '' });
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login('student', form.email || 'demo.student@ayush.edu');
      navigate('/student/target-role');
    }, 500);
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-icon"><GraduationCap size={22} aria-hidden="true" /></div>
        <h1 className="auth-title">Create Student Account</h1>
        <p className="auth-sub">Start building your skill profile.</p>

        <form onSubmit={handleSubmit}>
          <Input label="Full Name" value={form.name} onChange={update('name')} placeholder="Ananya Rao" required />
          <Input label="Email" type="email" value={form.email} onChange={update('email')} placeholder="you@student.edu" required />
          <Input label="Institution" value={form.institution} onChange={update('institution')} placeholder="National Institute of Ayurveda" required />
          <Input label="Password" type="password" value={form.password} onChange={update('password')} placeholder="••••••••" required />
          <Button type="submit" variant="primary" fullWidth loading={loading}>
            Create account
          </Button>
        </form>

        <div className="auth-links">
          <span className="auth-muted">Already have an account?</span>
          <Link to="/login/student" className="auth-link auth-link-accent">Log in</Link>
        </div>

        <Link to="/" className="auth-back">← Back to role selection</Link>
      </div>
    </section>
  );
}
