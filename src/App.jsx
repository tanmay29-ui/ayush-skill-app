import { Routes, Route } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';

import RoleSelection from './pages/RoleSelection.jsx';
import NotFound from './pages/NotFound.jsx';
import Settings from './pages/Settings.jsx';

import StudentLogin from './pages/login/StudentLogin.jsx';
import AcademiaLogin from './pages/login/AcademiaLogin.jsx';
import IndustryLogin from './pages/login/IndustryLogin.jsx';

import StudentSignup from './pages/signup/StudentSignup.jsx';
import AcademiaSignup from './pages/signup/AcademiaSignup.jsx';
import IndustrySignup from './pages/signup/IndustrySignup.jsx';

import StudentDashboard from './pages/student/StudentDashboard.jsx';
import StudentProfile from './pages/student/StudentProfile.jsx';
import TargetRole from './pages/student/TargetRole.jsx';
import SkillAssessment from './pages/student/SkillAssessment.jsx';
import AssessmentResult from './pages/student/AssessmentResult.jsx';
import SkillGaps from './pages/student/SkillGaps.jsx';
import Roadmap from './pages/student/Roadmap.jsx';
import Opportunities from './pages/student/Opportunities.jsx';
import StudentApplications from './pages/student/Applications.jsx';

import AcademiaDashboard from './pages/academia/AcademiaDashboard.jsx';
import Students from './pages/academia/Students.jsx';
import SkillAnalytics from './pages/academia/SkillAnalytics.jsx';
import IndustryDemand from './pages/academia/IndustryDemand.jsx';
import Programs from './pages/academia/Programs.jsx';

import IndustryDashboard from './pages/industry/IndustryDashboard.jsx';
import FindTalent from './pages/industry/FindTalent.jsx';
import CandidateProfile from './pages/industry/CandidateProfile.jsx';
import PostOpportunity from './pages/industry/PostOpportunity.jsx';
import IndustryApplications from './pages/industry/Applications.jsx';

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<RoleSelection />} />

        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/academia" element={<AcademiaLogin />} />
        <Route path="/login/industry" element={<IndustryLogin />} />

        <Route path="/signup/student" element={<StudentSignup />} />
        <Route path="/signup/academia" element={<AcademiaSignup />} />
        <Route path="/signup/industry" element={<IndustrySignup />} />

        {/* Onboarding funnel lives outside the dashboard chrome */}
        <Route path="/student/target-role" element={<TargetRole />} />
        <Route path="/student/assessment" element={<SkillAssessment />} />
        <Route path="/student/assessment/result" element={<AssessmentResult />} />

        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Student dashboard */}
      <Route path="/student" element={<DashboardLayout role="student" />}>
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="profile" element={<StudentProfile />} />
        <Route path="skill-gaps" element={<SkillGaps />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="opportunities" element={<Opportunities />} />
        <Route path="applications" element={<StudentApplications />} />
      </Route>

      {/* Academia dashboard */}
      <Route path="/academia" element={<DashboardLayout role="academia" />}>
        <Route path="dashboard" element={<AcademiaDashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="skill-analytics" element={<SkillAnalytics />} />
        <Route path="industry-demand" element={<IndustryDemand />} />
        <Route path="programs" element={<Programs />} />
      </Route>

      {/* Industry dashboard */}
      <Route path="/industry" element={<DashboardLayout role="industry" />}>
        <Route path="dashboard" element={<IndustryDashboard />} />
        <Route path="talent" element={<FindTalent />} />
        <Route path="candidate/:id" element={<CandidateProfile />} />
        <Route path="post-opportunity" element={<PostOpportunity />} />
        <Route path="applications" element={<IndustryApplications />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
