// A fixed, realistic mock assessment result for the demo student
// (Ananya Rao, targeting Full Stack Developer) so that every page —
// dashboard, skill gaps, roadmap, profile — shows consistent numbers
// before the student has taken a real assessment. This mirrors what
// `scoreAssessment` would produce for a real attempt, and is only used
// as a fallback until `progressService` has a saved real result.

export const mockAssessmentResult = {
  roleId: 'full-stack-developer',
  overallReadiness: 68,
  skillScores: [
    { skill: 'Frontend Development', score: 74 },
    { skill: 'Backend Development', score: 70 },
    { skill: 'APIs & Databases', score: 66 },
    { skill: 'Version Control', score: 78 },
    { skill: 'System Design', score: 54 },
  ],
  completedOn: '2026-08-25',
};
