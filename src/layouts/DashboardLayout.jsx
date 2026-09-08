import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar.jsx';
import Chatbot from '../components/Chatbot.jsx';
import { getRoleById } from '../data/roles.js';
import { mockAssessmentResult } from '../data/studentAssessment.js';
import { getSavedAssessmentResult } from '../services/progressService.js';

const PAGE_TITLES = {
  '/student/dashboard': 'Dashboard',
  '/student/profile': 'My Profile',
  '/student/skill-gaps': 'Skill Gaps',
  '/student/roadmap': 'Roadmap',
  '/student/opportunities': 'Opportunities',
  '/student/applications': 'Applications',
  '/academia/dashboard': 'Dashboard',
  '/academia/students': 'Students',
  '/academia/skill-analytics': 'Skill Analytics',
  '/academia/industry-demand': 'Industry Demand',
  '/academia/programs': 'Programs',
  '/industry/dashboard': 'Dashboard',
  '/industry/talent': 'Find Talent',
  '/industry/post-opportunity': 'Post Opportunity',
  '/industry/applications': 'Applications',
};

export default function DashboardLayout({ role }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const title =
    PAGE_TITLES[location.pathname] ||
    (location.pathname.startsWith('/industry/candidate') ? 'Candidate Profile' : 'Ayush Skill Intelligence');

  let chatContext = {};
  if (role === 'student') {
    const activeResult = getSavedAssessmentResult() || mockAssessmentResult;
    const role_ = getRoleById(activeResult.roleId);
    const sorted = [...activeResult.skillScores].sort((a, b) => b.score - a.score);
    chatContext = {
      targetRole: role_?.title,
      readiness: activeResult.overallReadiness,
      strongestSkill: sorted[0]?.skill,
      weakestSkill: sorted[sorted.length - 1]?.skill,
    };
  }

  return (
    <div className="dashboard-layout">
      <Sidebar role={role} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="dashboard-main">
        <header className="dashboard-header">
          <button
            className="dashboard-menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
          <h1 className="dashboard-header-title">{title}</h1>
          <div className="dashboard-header-user" aria-hidden="true">
            <span className="dashboard-avatar">
              {role === 'student' ? 'AR' : role === 'academia' ? 'AC' : 'IN'}
            </span>
          </div>
        </header>

        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>

      <Chatbot role={role} context={chatContext} />
    </div>
  );
}
