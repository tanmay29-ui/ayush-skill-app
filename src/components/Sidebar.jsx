import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  BarChart3,
  Map,
  Briefcase,
  FileText,
  Users,
  TrendingUp,
  GraduationCap,
  Search,
  PlusCircle,
  ClipboardList,
  Settings,
  LogOut,
  X,
} from 'lucide-react';
import { logout } from '../services/authService.js';

const NAV_ITEMS = {
  student: [
    { to: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/student/profile', label: 'My Profile', icon: User },
    { to: '/student/skill-gaps', label: 'Skill Gaps', icon: BarChart3 },
    { to: '/student/roadmap', label: 'Roadmap', icon: Map },
    { to: '/student/opportunities', label: 'Opportunities', icon: Briefcase },
    { to: '/student/applications', label: 'Applications', icon: FileText },
  ],
  academia: [
    { to: '/academia/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/academia/students', label: 'Students', icon: Users },
    { to: '/academia/skill-analytics', label: 'Skill Analytics', icon: BarChart3 },
    { to: '/academia/industry-demand', label: 'Industry Demand', icon: TrendingUp },
    { to: '/academia/programs', label: 'Programs', icon: GraduationCap },
  ],
  industry: [
    { to: '/industry/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/industry/talent', label: 'Find Talent', icon: Search },
    { to: '/industry/post-opportunity', label: 'Post Opportunity', icon: PlusCircle },
    { to: '/industry/applications', label: 'Applications', icon: ClipboardList },
  ],
};

export default function Sidebar({ role, mobileOpen, onClose }) {
  const navigate = useNavigate();
  const items = NAV_ITEMS[role] || [];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {mobileOpen && <div className="sidebar-backdrop" onClick={onClose} />}
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-brand">Ayush Skill Intelligence</span>
          <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav className="sidebar-nav" aria-label="Primary">
          {items.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="sidebar-link" onClick={() => navigate('/settings')}>
            <Settings size={18} aria-hidden="true" />
            <span>Settings</span>
          </button>
          <button className="sidebar-link sidebar-logout" onClick={handleLogout}>
            <LogOut size={18} aria-hidden="true" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
