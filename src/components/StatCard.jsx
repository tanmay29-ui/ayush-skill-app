export default function StatCard({ label, value, sublabel, icon: Icon, trend }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span className="stat-card-label">{label}</span>
        {Icon && <Icon size={18} className="stat-card-icon" aria-hidden="true" />}
      </div>
      <div className="stat-card-value">{value}</div>
      {sublabel && <div className="stat-card-sublabel">{sublabel}</div>}
      {trend && <div className={`stat-card-trend stat-card-trend-${trend.direction}`}>{trend.text}</div>}
    </div>
  );
}
