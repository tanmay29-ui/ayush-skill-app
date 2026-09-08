// MOCK SERVICE
// -----------------------------------------------------------------------
// Computes a simple overlap-based match score between a set of skills a
// student/candidate has and a set of skills an opportunity requires.
// Later, `computeMatchScore` will be replaced by a call to a backend
// ML matching model. Callers should not need to change.
// -----------------------------------------------------------------------

/**
 * @param {Array<{skill: string, level: number}>} candidateSkills
 * @param {Array<{skill: string, required: number}>} requiredSkills
 */
export function computeMatchScore(candidateSkills, requiredSkills) {
  if (!requiredSkills || requiredSkills.length === 0) return 0;

  let totalWeight = 0;
  let achievedWeight = 0;
  const missing = [];

  requiredSkills.forEach((req) => {
    totalWeight += req.required;
    const candidate = candidateSkills.find((c) => c.skill === req.skill);
    const level = candidate ? candidate.level : 0;
    achievedWeight += Math.min(level, req.required);
    if (!candidate || candidate.level < req.required * 0.7) {
      missing.push(req.skill);
    }
  });

  const score = totalWeight > 0 ? Math.round((achievedWeight / totalWeight) * 100) : 0;
  return { score: Math.min(score, 99), missing };
}

export function rankOpportunities(candidateSkills, opportunities) {
  return opportunities
    .map((opp) => {
      const { score, missing } = computeMatchScore(candidateSkills, opp.requiredSkills);
      return { ...opp, matchScore: score, missingSkills: missing };
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}

export function rankCandidates(candidates, requiredSkills) {
  return candidates
    .map((c) => {
      const { score, missing } = computeMatchScore(c.skills, requiredSkills);
      return { ...c, matchScore: score, missingSkills: missing };
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}
