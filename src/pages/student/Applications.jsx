import { studentApplications, statusColors } from '../../data/applications.js';

export default function Applications() {
  return (
    <div className="applications-page">
      <p className="gaps-sub">Track the status of every opportunity you've applied to.</p>

      <div className="applications-table-wrap">
        <table className="applications-table">
          <thead>
            <tr>
              <th>Opportunity</th>
              <th>Organization</th>
              <th>Match</th>
              <th>Status</th>
              <th>Applied on</th>
            </tr>
          </thead>
          <tbody>
            {studentApplications.map((app) => (
              <tr key={app.id}>
                <td className="applications-title-cell">{app.opportunityTitle}</td>
                <td>{app.organization}</td>
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
