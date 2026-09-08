import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { studentRoster } from '../../data/students.js';

const STATUS_CLASS = {
  'Industry Ready': 'status-green',
  'On Track': 'status-warn',
  'Needs Improvement': 'status-danger',
};

export default function Students() {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = useMemo(() => {
    return studentRoster.filter((s) => {
      const matchesQuery =
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.targetRole.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === 'all' || s.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [query, statusFilter]);

  return (
    <div className="students-page">
      <div className="students-toolbar">
        <div className="students-search">
          <Search size={16} aria-hidden="true" />
          <input
            type="text"
            placeholder="Search by name or target role..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search students"
          />
        </div>
        <select
          className="input-field students-filter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          aria-label="Filter by status"
        >
          <option value="all">All statuses</option>
          <option value="Industry Ready">Industry Ready</option>
          <option value="On Track">On Track</option>
          <option value="Needs Improvement">Needs Improvement</option>
        </select>
      </div>

      <div className="applications-table-wrap">
        <table className="applications-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Program</th>
              <th>Target Role</th>
              <th>Readiness</th>
              <th>Top Gap</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id}>
                <td className="applications-title-cell">{s.name}</td>
                <td>{s.program}</td>
                <td>{s.targetRole}</td>
                <td>{s.readiness}%</td>
                <td>{s.topGap}</td>
                <td>
                  <span className={`status-badge ${STATUS_CLASS[s.status]}`}>{s.status}</span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="students-empty">No students match your filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
