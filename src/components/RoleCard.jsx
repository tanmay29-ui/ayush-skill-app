import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RoleCard({ icon: Icon, title, description, to, number }) {
  const navigate = useNavigate();

  return (
    <button className="role-card" onClick={() => navigate(to)}>
      <div className="role-card-top">
        <span className="role-card-number">{number}</span>
        <span className="role-card-icon">
          <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
        </span>
      </div>
      <div className="role-card-content">
        <h3 className="role-card-title">{title}</h3>
        <p className="role-card-desc">{description}</p>
      </div>
      <span className="role-card-action">
        Enter workspace <ArrowRight size={17} aria-hidden="true" />
      </span>
    </button>
  );
}
