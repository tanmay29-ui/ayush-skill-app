// The "current student" profile used throughout the student experience.
export const currentStudent = {
  id: 'stu-001',
  name: 'Ananya Rao',
  email: 'ananya.rao@student.edu',
  education: 'BAMS (Bachelor of Ayurvedic Medicine and Surgery)',
  institution: 'National Institute of Ayurveda',
  year: 'Final Year',
  targetRoleId: 'full-stack-developer',
  certifications: ['Good Clinical Practice (GCP) — Basic', 'Medical Terminology Fundamentals'],
  projects: [
    {
      title: 'Herbal Formulation Efficacy Study',
      description: 'Assisted in documenting a comparative study of two herbal formulations for joint mobility.',
    },
    {
      title: 'Patient Case Documentation Archive',
      description: 'Digitized and structured 120+ patient case records for a college research archive.',
    },
  ],
  experience: [
    {
      title: 'Research Intern',
      organization: 'Ayush Research Foundation',
      duration: 'Jun 2025 – Aug 2025',
      description: 'Supported literature review and data entry for an ongoing observational study.',
    },
  ],
};

// Roster shown to academia users on the Students page.
export const studentRoster = [
  { id: 'stu-001', name: 'Ananya Rao', program: 'BAMS', targetRole: 'Full Stack Developer', readiness: 68, topGap: 'System Design', status: 'On Track' },
  { id: 'stu-002', name: 'Priya Sharma', program: 'BAMS', targetRole: 'AI Engineer', readiness: 74, topGap: 'Deployment', status: 'On Track' },
  { id: 'stu-003', name: 'Rohan Mehta', program: 'BAMS', targetRole: 'Machine Learning Engineer', readiness: 81, topGap: 'MLOps', status: 'Industry Ready' },
  { id: 'stu-004', name: 'Kavya Nair', program: 'BPharm (Ayurveda)', targetRole: 'Cybersecurity Analyst', readiness: 55, topGap: 'Threat Detection', status: 'Needs Improvement' },
  { id: 'stu-005', name: 'Arjun Iyer', program: 'BAMS', targetRole: 'Cloud / DevOps Engineer', readiness: 62, topGap: 'Infrastructure as Code', status: 'On Track' },
  { id: 'stu-006', name: 'Sneha Reddy', program: 'B.Sc Healthcare Informatics', targetRole: 'Data Scientist', readiness: 47, topGap: 'Data Visualization', status: 'Needs Improvement' },
  { id: 'stu-007', name: 'Vikram Singh', program: 'B.Pharm', targetRole: 'Software Developer', readiness: 71, topGap: 'Data Structures & Algorithms', status: 'On Track' },
  { id: 'stu-008', name: 'Meera Pillai', program: 'MHA', targetRole: 'Cloud / DevOps Engineer', readiness: 85, topGap: 'Monitoring & Reliability', status: 'Industry Ready' },
  { id: 'stu-009', name: 'Aditya Kulkarni', program: 'BAMS', targetRole: 'Data Scientist', readiness: 58, topGap: 'Data Storytelling', status: 'Needs Improvement' },
  { id: 'stu-010', name: 'Divya Menon', program: 'BAMS', targetRole: 'Machine Learning Engineer', readiness: 76, topGap: 'Feature Engineering', status: 'On Track' },
  { id: 'stu-011', name: 'Karan Malhotra', program: 'B.Sc Healthcare Informatics', targetRole: 'Full Stack Developer', readiness: 66, topGap: 'APIs & Databases', status: 'On Track' },
  { id: 'stu-012', name: 'Isha Verma', program: 'BAMS', targetRole: 'Cybersecurity Analyst', readiness: 52, topGap: 'Vulnerability Assessment', status: 'Needs Improvement' },
];
