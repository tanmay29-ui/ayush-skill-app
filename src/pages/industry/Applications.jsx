import { industryApplications, statusColors } from '../../data/applications.js';

export default function IndustryApplicationsPage() {
  return (
    <div className="applications-page">
      <p className="gaps-sub">Review candidates who have applied to your posted opportunities.</p>

      <div className="applications-table-wrap">
        <table className="applications-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Opportunity</th>
              <th>Match</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {industryApplications.map((app) => (
              <tr key={app.id}>
                <td className="applications-title-cell">{app.candidateName}</td>
                <td>{app.opportunityTitle}</td>
                <td>{app.matchScore}%</td>
                <td>
                  <span className={`status-badge status-${statusColors[app.status]}`}>{app.status}</span>
                </td>
                <td>{app.appliedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
