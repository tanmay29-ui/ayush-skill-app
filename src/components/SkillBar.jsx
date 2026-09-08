export default function SkillBar({ label, value, target, size = 'md' }) {
  const clamped = Math.max(0, Math.min(100, value));
  const showTarget = typeof target === 'number';
  const targetClamped = showTarget ? Math.max(0, Math.min(100, target)) : null;
  const meetsTarget = showTarget ? value >= target : true;

  return (
    <div className={`skillbar skillbar-${size}`}>
      <div className="skillbar-top">
        <span className="skillbar-label">{label}</span>
        <span className="skillbar-value">{clamped}%</span>
      </div>
      <div className="skillbar-track" role="img" aria-label={`${label}: ${clamped}%${showTarget ? `, requirement ${targetClamped}%` : ''}`}>
        <div
          className={`skillbar-fill ${meetsTarget ? 'skillbar-fill-good' : 'skillbar-fill-gap'}`}
          style={{ width: `${clamped}%` }}
        />
        {showTarget && (
          <div className="skillbar-target" style={{ left: `${targetClamped}%` }} title={`Industry requirement: ${targetClamped}%`} />
        )}
      </div>
    </div>
  );
}
