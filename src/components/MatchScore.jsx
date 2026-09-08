export default function MatchScore({ value, size = 'md' }) {
  let tier = 'low';
  if (value >= 80) tier = 'high';
  else if (value >= 60) tier = 'mid';

  return (
    <div className={`match-score match-score-${size} match-score-${tier}`}>
      <span className="match-score-value">{value}%</span>
      <span className="match-score-label">match</span>
    </div>
  );
}
