// MOCK SERVICE
// -----------------------------------------------------------------------
// Today this computes a deterministic mock score from quiz answers.
// Later, `scoreAssessment` will call a backend ML scoring model instead
// of this local calculation. The function signature is designed to stay
// stable across that swap: (roleId, answers) -> per-skill result.
// -----------------------------------------------------------------------

import { quizData } from '../data/quizData.js';
import { getRoleById } from '../data/roles.js';

// small deterministic hash so repeated runs feel realistic but stable
function hashToRange(seed, min, max) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  const normalized = Math.abs(hash % 1000) / 1000;
  return Math.round(min + normalized * (max - min));
}

/**
 * @param {string} roleId
 * @param {Array<{questionId: string, selectedIndex: number}>} answers
 * @returns {{
 *   roleId: string,
 *   overallReadiness: number,
 *   skillScores: Array<{skill: string, score: number}>
 * }}
 */
export function scoreAssessment(roleId, answers) {
  const questions = quizData[roleId] || [];

  const skillScores = questions.map((q) => {
    const answer = answers.find((a) => a.questionId === q.id);
    const isCorrect = answer && answer.selectedIndex === q.correctIndex;
    const range = isCorrect ? [72, 94] : [28, 58];
    const score = hashToRange(q.id + roleId, range[0], range[1]);
    return { skill: q.skill, score };
  });

  const overallReadiness = Math.round(
    skillScores.reduce((sum, s) => sum + s.score, 0) / (skillScores.length || 1)
  );

  return { roleId, overallReadiness, skillScores };
}

/**
 * Compares a student's skill scores against the industry requirement
 * thresholds defined for the role, and classifies each skill.
 */
export function compareToIndustryRequirements(roleId, skillScores) {
  const role = getRoleById(roleId);
  if (!role) return [];

  return role.skills.map((reqSkill) => {
    const studentSkill = skillScores.find((s) => s.skill === reqSkill.name);
    const level = studentSkill ? studentSkill.score : 0;
    const gap = Math.max(0, reqSkill.requirement - level);

    let status = 'strong';
    if (gap > 20) status = 'major-gap';
    else if (gap > 0) status = 'close';

    let priority = 'LOW PRIORITY';
    if (gap > 20) priority = 'HIGH PRIORITY';
    else if (gap > 8) priority = 'MEDIUM PRIORITY';

    return {
      skill: reqSkill.name,
      level,
      requirement: reqSkill.requirement,
      gap,
      status,
      priority,
    };
  });
}

// Roadmap step templates for specific skills that come up often across
// roles, plus a generic fallback so every skill gets a sensible path.
const ROADMAP_LIBRARY = {
  'Python': [
    'Complete a core Python fundamentals course (syntax, data structures, functions)',
    'Practice with 15-20 small coding exercises',
    'Build a script that reads, cleans and transforms a real dataset',
    'Refactor the script following clean-code practices',
    'Reassess this skill',
  ],
  'Machine Learning': [
    'Review core ML concepts: supervised vs. unsupervised learning',
    'Implement 2-3 classic algorithms from scratch or with scikit-learn',
    'Train and tune a model on a public dataset',
    'Document your approach, results and trade-offs',
    'Reassess this skill',
  ],
  'ML Algorithms': [
    'Study the major algorithm families (linear, tree-based, clustering)',
    'Compare 3 algorithms on the same dataset and note trade-offs',
    'Tune hyperparameters on one algorithm and measure the impact',
    'Explain your algorithm choice for a sample use case',
    'Reassess this skill',
  ],
  'Data Preprocessing': [
    'Learn common cleaning techniques: missing values, outliers, scaling',
    'Practice preprocessing 2-3 messy public datasets',
    'Build a repeatable preprocessing pipeline',
    'Validate that preprocessing improves downstream model results',
    'Reassess this skill',
  ],
  'Feature Engineering': [
    'Study common feature engineering techniques for tabular and text data',
    'Practice creating new features from a raw dataset',
    'Measure how new features change model performance',
    'Document which features mattered most and why',
    'Reassess this skill',
  ],
  'Model Evaluation': [
    'Learn key metrics (accuracy, precision, recall, F1, ROC-AUC)',
    'Practice evaluating a model with cross-validation',
    'Compare two models using the same evaluation metrics',
    'Write a short evaluation report with your conclusions',
    'Reassess this skill',
  ],
  'Deployment': [
    'Learn the basics of packaging an app or model as a container',
    'Deploy a small project to a free-tier cloud host',
    'Add basic logging and health checks to the deployment',
    'Document the deployment steps so they are repeatable',
    'Reassess this skill',
  ],
  'MLOps': [
    'Learn the ML lifecycle: training, versioning, deployment, monitoring',
    'Set up experiment tracking for a small ML project',
    'Automate retraining or redeployment with a simple pipeline',
    'Add monitoring for model performance drift',
    'Reassess this skill',
  ],
  'Python & Statistics': [
    'Review core statistics: distributions, hypothesis testing, correlation',
    'Practice statistical analysis in Python (pandas, scipy)',
    'Apply statistical reasoning to a real dataset\'s findings',
    'Present your findings with clear statistical justification',
    'Reassess this skill',
  ],
  'Data Analysis': [
    'Learn spreadsheet and Python/SQL tools for exploring data',
    'Practice structuring and cleaning a real dataset',
    'Complete a small end-to-end data analysis project',
    'Document the project with clear, actionable findings',
    'Reassess this skill',
  ],
  'Data Visualization': [
    'Learn charting fundamentals: when to use which chart type',
    'Practice building charts with a library like matplotlib or Plotly',
    'Build a small dashboard summarizing a real dataset',
    'Get feedback on clarity from a peer or mentor',
    'Reassess this skill',
  ],
  'Data Storytelling': [
    'Study how to structure a data-driven narrative for stakeholders',
    'Practice turning one analysis into a 3-slide summary',
    'Present findings to a peer and gather feedback',
    'Revise the story based on what confused your audience',
    'Reassess this skill',
  ],
  'Programming Fundamentals': [
    'Review core concepts: variables, control flow, functions, OOP basics',
    'Solve 20-30 beginner-to-intermediate coding problems',
    'Build one small program end-to-end',
    'Get your code reviewed by a peer or mentor',
    'Reassess this skill',
  ],
  'Data Structures & Algorithms': [
    'Review core structures (arrays, stacks, queues, trees, hash maps)',
    'Practice implementing each structure from scratch',
    'Solve algorithm problems focused on time/space complexity',
    'Time yourself on a mock coding interview set',
    'Reassess this skill',
  ],
  'Debugging': [
    'Learn to use a debugger and read stack traces effectively',
    'Practice reproducing and isolating bugs in sample projects',
    'Fix 5-10 real bugs in an open-source or personal project',
    'Write a short post-mortem for one tricky bug you solved',
    'Reassess this skill',
  ],
  'Databases': [
    'Learn core SQL: joins, aggregations, indexes',
    'Design a simple relational schema for a sample app',
    'Write and optimize queries against a real dataset',
    'Practice basic database performance troubleshooting',
    'Reassess this skill',
  ],
  'Software Engineering Practices': [
    'Learn Git fundamentals: branching, merging, pull requests',
    'Practice writing clear commit messages and PR descriptions',
    'Contribute to or simulate a small collaborative project',
    'Add tests and documentation to an existing project',
    'Reassess this skill',
  ],
  'Frontend Development': [
    'Learn HTML, CSS and modern JavaScript/React fundamentals',
    'Build 2-3 small interactive UI components',
    'Build one complete page consuming a real or mock API',
    'Get feedback on usability and code structure',
    'Reassess this skill',
  ],
  'Backend Development': [
    'Learn server fundamentals: routing, requests, middleware',
    'Build a small REST API with basic CRUD endpoints',
    'Add authentication and input validation',
    'Write tests for your API endpoints',
    'Reassess this skill',
  ],
  'APIs & Databases': [
    'Learn REST API design principles and database integration',
    'Build an API that reads and writes to a real database',
    'Add error handling and pagination to your endpoints',
    'Document the API for other developers',
    'Reassess this skill',
  ],
  'Version Control': [
    'Learn Git fundamentals beyond the basics: rebasing, resolving conflicts',
    'Practice a full feature-branch workflow on a sample repo',
    'Collaborate with a peer using pull requests and code review',
    'Set up a simple CI check that runs on every push',
    'Reassess this skill',
  ],
  'System Design': [
    'Learn core concepts: scaling, caching, load balancing, databases',
    'Practice sketching the architecture for a familiar app',
    'Study 2-3 real-world system design case studies',
    'Do a mock system design interview with a peer',
    'Reassess this skill',
  ],
  'Security Fundamentals': [
    'Learn core principles: least privilege, defense in depth, CIA triad',
    'Study the OWASP Top 10 common vulnerabilities',
    'Practice identifying weaknesses in a sample application',
    'Write a short security checklist for a project',
    'Reassess this skill',
  ],
  'Network Security': [
    'Learn networking fundamentals: TCP/IP, firewalls, VPNs',
    'Practice configuring firewall and access rules in a lab environment',
    'Analyze sample network traffic for suspicious patterns',
    'Document a basic network security policy',
    'Reassess this skill',
  ],
  'Threat Detection': [
    'Learn common attack patterns and indicators of compromise',
    'Practice with a security monitoring tool in a sandbox',
    'Investigate a simulated security incident end-to-end',
    'Write an incident summary with recommended actions',
    'Reassess this skill',
  ],
  'Vulnerability Assessment': [
    'Learn how vulnerability scanners work and what they report',
    'Run a scan against a deliberately vulnerable practice app',
    'Prioritize findings by severity and exploitability',
    'Write a remediation plan for the top findings',
    'Reassess this skill',
  ],
  'Security Tools & Compliance': [
    'Learn the basics of a common compliance framework (e.g. ISO 27001)',
    'Practice mapping controls to a sample organization\'s risks',
    'Use a security tool to audit a sample environment',
    'Summarize gaps and next steps in a short report',
    'Reassess this skill',
  ],
  'Cloud Platforms': [
    'Learn the fundamentals of a major cloud provider (AWS/Azure/GCP)',
    'Deploy a simple app using core compute and storage services',
    'Practice configuring IAM roles and permissions safely',
    'Estimate and optimize the cost of your setup',
    'Reassess this skill',
  ],
  'CI/CD Pipelines': [
    'Learn the stages of a CI/CD pipeline: build, test, deploy',
    'Set up a pipeline for a small project using GitHub Actions or similar',
    'Add automated tests that run on every commit',
    'Add an automated deployment step to staging',
    'Reassess this skill',
  ],
  'Containers & Orchestration': [
    'Learn Docker fundamentals: images, containers, volumes',
    'Containerize a small application end-to-end',
    'Learn the basics of Kubernetes or a similar orchestrator',
    'Deploy your containerized app to a managed cluster or sandbox',
    'Reassess this skill',
  ],
  'Infrastructure as Code': [
    'Learn a tool like Terraform or CloudFormation',
    'Write configuration to provision a simple environment',
    'Practice safely updating and versioning your infrastructure code',
    'Add a review step before infrastructure changes apply',
    'Reassess this skill',
  ],
  'Monitoring & Reliability': [
    'Learn core concepts: metrics, logs, traces, alerting',
    'Set up basic monitoring for a sample application',
    'Configure an alert for a meaningful failure condition',
    'Run a simple incident response drill',
    'Reassess this skill',
  ],
};

const GENERIC_ROADMAP = (skill) => [
  `Learn the fundamentals of ${skill}`,
  `Study 2-3 real examples relevant to your target role`,
  `Practice applying ${skill} on a small project`,
  `Get feedback from a mentor, peer or academic advisor`,
  'Reassess this skill',
];

export function getRoadmapForSkill(skillName) {
  const steps = ROADMAP_LIBRARY[skillName] || GENERIC_ROADMAP(skillName);
  return steps.map((text, index) => ({
    step: index + 1,
    text,
  }));
}
