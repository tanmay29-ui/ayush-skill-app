// MOCK SERVICE
// -----------------------------------------------------------------------
// Chatbot.jsx calls getChatResponse() instead of hardcoding replies.
// Later this function will call a backend endpoint that runs an
// AI/RAG pipeline over the platform's live data. The signature -
// (message, context) -> Promise<string> - is designed to stay the
// same after that swap.
// -----------------------------------------------------------------------

const STUDENT_RESPONSES = (context) => [
  {
    match: ['skill', 'analyze', 'readiness'],
    reply: `Your current readiness for ${context.targetRole || 'your target role'} is ${
      context.readiness ?? 68
    }%. Your strongest area is ${context.strongestSkill || 'Documentation'}, and the biggest gap is in ${
      context.weakestSkill || 'Data Analysis'
    }.`,
  },
  {
    match: ['opportunit', 'job', 'internship'],
    reply: `Based on your skill profile, you have a strong match with a few open opportunities. Check the Opportunities page — your top match is currently around 91%.`,
  },
  {
    match: ['gap', 'weak', 'improve'],
    reply: `Your most important skill gap right now is ${
      context.weakestSkill || 'Data Analysis'
    }. I'd recommend starting with the roadmap step for that skill — it's on your Roadmap page.`,
  },
  {
    match: ['career', 'guidance', 'advice'],
    reply: `For ${context.targetRole || 'your target role'}, focus on closing your highest-priority skill gaps first, then apply to opportunities with a match score above 70%. Small, consistent progress compounds quickly.`,
  },
];

const ACADEMIA_RESPONSES = () => [
  {
    match: ['student', 'gap', 'skill'],
    reply: 'You currently have 228 students with identified skill gaps, mostly concentrated in Data Analytics and Digital Health.',
  },
  {
    match: ['ready', 'readiness'],
    reply: 'Average student readiness across programs is 61%. Clinical Research and BAMS-aligned programs are performing above average.',
  },
  {
    match: ['industry', 'demand'],
    reply: 'Industry demand this quarter is highest for Data Analysis, Regulatory Knowledge and Digital Health skills.',
  },
];

const INDUSTRY_RESPONSES = () => [
  {
    match: ['candidate', 'talent', 'match'],
    reply: 'There are 24 candidates matching your selected criteria, with an average match score of 78%.',
  },
  {
    match: ['opportunit', 'posting'],
    reply: 'Your open opportunities are receiving strong interest — Clinical Research Intern has the highest application volume this week.',
  },
  {
    match: ['applicat'],
    reply: 'You have 12 applications awaiting review, 4 of which have a match score above 85%.',
  },
];

function pickResponse(message, responses, fallback) {
  const lower = message.toLowerCase();
  const found = responses.find((r) => r.match.some((keyword) => lower.includes(keyword)));
  return found ? found.reply : fallback;
}

/**
 * @param {string} message - the user's chat message
 * @param {{role: 'student'|'academia'|'industry', targetRole?: string, readiness?: number, strongestSkill?: string, weakestSkill?: string}} context
 * @returns {Promise<string>}
 */
export function getChatResponse(message, context = {}) {
  const fallback =
    "I can help you understand your skills, explore opportunities, and navigate the platform. Try asking about your readiness, skill gaps, or opportunities.";

  let reply = fallback;

  if (context.role === 'academia') {
    reply = pickResponse(message, ACADEMIA_RESPONSES(), fallback);
  } else if (context.role === 'industry') {
    reply = pickResponse(message, INDUSTRY_RESPONSES(), fallback);
  } else {
    reply = pickResponse(message, STUDENT_RESPONSES(context), fallback);
  }

  // simulate network latency for a realistic feel
  return new Promise((resolve) => setTimeout(() => resolve(reply), 500));
}

export const QUICK_ACTIONS = {
  student: [
    'Analyze my skills',
    'Find opportunities',
    'Explain my skill gaps',
    'Career guidance',
  ],
  academia: [
    'Show student skill gaps',
    'Average readiness',
    'Industry demand this quarter',
  ],
  industry: [
    'Find matching candidates',
    'Opportunity performance',
    'Review applications',
  ],
};
