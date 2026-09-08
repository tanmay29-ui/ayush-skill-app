// Tech career roles supported by the platform. These are the target roles
// students can choose before taking their skill assessment. Each role's
// `skills` list defines the industry requirement (%) for every skill
// measured in that role's quiz, matched by name against `quizData.js`.
export const roles = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    icon: '🤖',
    category: 'AI & Machine Learning',
    description: 'Builds and ships AI-powered systems, from model integration to production deployment.',
    skills: [
      { name: 'Python', requirement: 82 },
      { name: 'Machine Learning', requirement: 85 },
      { name: 'Data Preprocessing', requirement: 75 },
      { name: 'Model Evaluation', requirement: 78 },
      { name: 'Deployment', requirement: 70 },
    ],
  },
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    icon: '🧠',
    category: 'AI & Machine Learning',
    description: 'Designs, trains and productionizes machine learning models at scale.',
    skills: [
      { name: 'Python', requirement: 84 },
      { name: 'ML Algorithms', requirement: 82 },
      { name: 'Feature Engineering', requirement: 76 },
      { name: 'Model Evaluation', requirement: 78 },
      { name: 'MLOps', requirement: 68 },
    ],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: '📊',
    category: 'Data & Analytics',
    description: 'Turns raw data into insights and predictive models that drive decisions.',
    skills: [
      { name: 'Python & Statistics', requirement: 80 },
      { name: 'Data Analysis', requirement: 78 },
      { name: 'Machine Learning', requirement: 74 },
      { name: 'Data Visualization', requirement: 70 },
      { name: 'Data Storytelling', requirement: 66 },
    ],
  },
  {
    id: 'software-developer',
    title: 'Software Developer',
    icon: '💻',
    category: 'Software Engineering',
    description: 'Designs, builds and maintains reliable software using solid engineering fundamentals.',
    skills: [
      { name: 'Programming Fundamentals', requirement: 82 },
      { name: 'Data Structures & Algorithms', requirement: 78 },
      { name: 'Debugging', requirement: 74 },
      { name: 'Databases', requirement: 70 },
      { name: 'Software Engineering Practices', requirement: 72 },
    ],
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    icon: '🌐',
    category: 'Software Engineering',
    description: 'Builds complete web applications end-to-end, across frontend, backend and infrastructure.',
    skills: [
      { name: 'Frontend Development', requirement: 78 },
      { name: 'Backend Development', requirement: 78 },
      { name: 'APIs & Databases', requirement: 76 },
      { name: 'Version Control', requirement: 68 },
      { name: 'System Design', requirement: 70 },
    ],
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    icon: '🔐',
    category: 'Cybersecurity',
    description: 'Protects systems and data by detecting threats, closing vulnerabilities and enforcing controls.',
    skills: [
      { name: 'Security Fundamentals', requirement: 80 },
      { name: 'Network Security', requirement: 76 },
      { name: 'Threat Detection', requirement: 74 },
      { name: 'Vulnerability Assessment', requirement: 72 },
      { name: 'Security Tools & Compliance', requirement: 68 },
    ],
  },
  {
    id: 'cloud-devops-engineer',
    title: 'Cloud / DevOps Engineer',
    icon: '☁️',
    category: 'Cloud & Infrastructure',
    description: 'Builds and operates the cloud infrastructure and pipelines that ship software reliably.',
    skills: [
      { name: 'Cloud Platforms', requirement: 80 },
      { name: 'CI/CD Pipelines', requirement: 76 },
      { name: 'Containers & Orchestration', requirement: 74 },
      { name: 'Infrastructure as Code', requirement: 70 },
      { name: 'Monitoring & Reliability', requirement: 68 },
    ],
  },
];

export const getRoleById = (id) => roles.find((r) => r.id === id);
