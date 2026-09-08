import { studentRoster } from './students.js';

export const academiaSummary = {
  totalStudents: studentRoster.length * 19, // representative of the full cohort
  industryReadyStudents: 86,
  studentsNeedingImprovement: 71,
  averageReadiness: 64,
};

export const skillDistribution = [
  { skill: 'Clinical Research', value: 82 },
  { skill: 'Research', value: 76 },
  { skill: 'Documentation', value: 71 },
  { skill: 'Digital Health', value: 54 },
  { skill: 'Data Analytics', value: 43 },
  { skill: 'Regulatory Knowledge', value: 58 },
];

export const areasRequiringAttention = [
  { skill: 'Data Analytics', reason: 'Below industry requirement across 4 of 8 target roles' },
  { skill: 'Digital Health', reason: 'Emerging requirement with limited current coursework coverage' },
  { skill: 'Research Methodology', reason: 'Consistently the largest single-skill gap among final-year students' },
];

export const skillGapsByRole = [
  { role: 'Clinical Research Associate', topGap: 'Data Analysis', avgGap: 22 },
  { role: 'Healthcare Data Analyst', topGap: 'Data Analysis', avgGap: 29 },
  { role: 'Pharmacovigilance Associate', topGap: 'Signal Detection', avgGap: 24 },
  { role: 'Medical Content Specialist', topGap: 'SEO for Health Content', avgGap: 19 },
  { role: 'Ayurveda Product Specialist', topGap: 'Market Understanding', avgGap: 17 },
];

export const industryDemandTrends = [
  { skill: 'Data Analysis', demandChange: '+18%', note: 'Rising fastest across research and analyst roles' },
  { skill: 'Regulatory Knowledge', demandChange: '+11%', note: 'Increasing due to expanding compliance requirements' },
  { skill: 'Digital Health', demandChange: '+9%', note: 'New requirement appearing in recent job postings' },
  { skill: 'Documentation', demandChange: '+4%', note: 'Stable but consistently required' },
  { skill: 'Panchakarma Procedures', demandChange: '+2%', note: 'Stable demand within clinical practice roles' },
];

export const programs = [
  {
    id: 'prog-1',
    name: 'BAMS (Bachelor of Ayurvedic Medicine and Surgery)',
    students: 412,
    avgReadiness: 69,
    strongestSkill: 'Clinical Research',
    weakestSkill: 'Data Analysis',
  },
  {
    id: 'prog-2',
    name: 'B.Pharm (Ayurveda)',
    students: 186,
    avgReadiness: 61,
    strongestSkill: 'Formulation Knowledge',
    weakestSkill: 'Market Understanding',
  },
  {
    id: 'prog-3',
    name: 'B.Sc Healthcare Informatics',
    students: 94,
    avgReadiness: 58,
    strongestSkill: 'Data Visualization',
    weakestSkill: 'Healthcare Data Standards',
  },
  {
    id: 'prog-4',
    name: 'MHA (Master of Hospital Administration)',
    students: 63,
    avgReadiness: 77,
    strongestSkill: 'Resource Management',
    weakestSkill: 'Policy & Compliance',
  },
];
