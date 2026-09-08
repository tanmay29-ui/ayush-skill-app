import { ArrowUpRight, GraduationCap, Landmark, Building2 } from 'lucide-react';
import RoleCard from '../components/RoleCard.jsx';

export default function RoleSelection() {
  return (
    <section className="role-selection">
      <div className="role-selection-gridline" aria-hidden="true" />
      <div className="container role-selection-inner">
        <div className="role-selection-hero">
          <div className="role-selection-copy">
            <div className="role-selection-kicker">
              <span className="kicker-line" aria-hidden="true" />
              <span>Ayush talent infrastructure</span>
            </div>
            <h1 className="role-selection-headline">
              Build skills that<br />
              <span>move the ecosystem.</span>
            </h1>
            <p className="role-selection-sub">
              One connected platform for students, institutions and employers —
              turning skill data into better learning, hiring and career decisions.
            </p>
          </div>

          <div className="role-selection-intro-note">
            <span>01</span>
            <p>Choose your workspace<br />to get started.</p>
            <ArrowUpRight size={19} strokeWidth={1.7} aria-hidden="true" />
          </div>
        </div>

        <div className="role-selection-divider" aria-hidden="true">
          <span>ACCESS BY ROLE</span>
          <span>AYUSH · INDIA</span>
        </div>

        <div className="role-selection-cards">
          <RoleCard
            icon={GraduationCap}
            title="Student"
            description="Map your skills, close the gaps and find opportunities built around your profile."
            to="/login/student"
            number="01"
          />
          <RoleCard
            icon={Landmark}
            title="Academia"
            description="See capability trends, identify gaps and align programmes with industry demand."
            to="/login/academia"
            number="02"
          />
          <RoleCard
            icon={Building2}
            title="Industry"
            description="Discover talent by verified skills and build a stronger Ayush hiring pipeline."
            to="/login/industry"
            number="03"
          />
        </div>

        <div className="role-selection-footer">
          <span>SKILL-FIRST · DATA-LED · CONNECTED</span>
          <span>© AYUSH SKILL INTELLIGENCE</span>
        </div>
      </div>
    </section>
  );
}
