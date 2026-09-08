import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import { login } from '../../services/authService.js';

export default function IndustryLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login('industry', email || 'hr@organization.com');
      navigate('/industry/dashboard');
    }, 500);
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-icon"><Building2 size={22} aria-hidden="true" /></div>
        <h1 className="auth-title">Industry Login</h1>
        <p className="auth-sub">Find candidates based on the skills you need.</p>

        <form onSubmit={handleSubmit}>
          <Input
            label="Work Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@organization.com"
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
          <Button type="submit" variant="primary" fullWidth loading={loading}>
            Login
          </Button>
        </form>

        <div className="auth-links">
          <Link to="#" className="auth-link">Forgot password</Link>
          <Link to="/signup/industry" className="auth-link auth-link-accent">Register organization</Link>
        </div>

        <Link to="/" className="auth-back">← Back to role selection</Link>
      </div>
    </section>
  );
}
