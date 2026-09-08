import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Landmark } from 'lucide-react';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import { login } from '../../services/authService.js';

export default function AcademiaLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login('academia', email || 'admin@institute.edu');
      navigate('/academia/dashboard');
    }, 500);
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-icon"><Landmark size={22} aria-hidden="true" /></div>
        <h1 className="auth-title">Academia Login</h1>
        <p className="auth-sub">Understand student capability and industry demand.</p>

        <form onSubmit={handleSubmit}>
          <Input
            label="Institution Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@institute.edu"
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
          <Link to="/signup/academia" className="auth-link auth-link-accent">Register institution</Link>
        </div>

        <Link to="/" className="auth-back">← Back to role selection</Link>
      </div>
    </section>
  );
}
