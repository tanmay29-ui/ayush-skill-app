import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import { login } from '../../services/authService.js';

export default function StudentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login('student', email || 'demo.student@ayush.edu');
      navigate('/student/target-role');
    }, 500);
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-icon"><GraduationCap size={22} aria-hidden="true" /></div>
        <h1 className="auth-title">Student Login</h1>
        <p className="auth-sub">Access your skill profile and career roadmap.</p>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email / Student ID"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@student.edu"
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
          <Link to="/signup/student" className="auth-link auth-link-accent">Create student account</Link>
        </div>

        <Link to="/" className="auth-back">← Back to role selection</Link>
      </div>
    </section>
  );
}
