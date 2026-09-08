export const opportunities = [
  {
    id: 'opp-1',
    title: 'Clinical Research Intern',
    organization: 'Ayush Research Foundation',
    location: 'Pune, Maharashtra',
    type: 'Internship',
    description:
      'Support ongoing clinical trials for Ayurvedic formulations, including site monitoring documentation and data quality checks.',
    requiredSkills: [
      { skill: 'Clinical Research', required: 75 },
      { skill: 'Documentation', required: 68 },
      { skill: 'Data Analysis', required: 60 },
    ],
    deadline: '2026-10-15',
  },
  {
    id: 'opp-2',
    title: 'Pharmacovigilance Associate (Entry Level)',
    organization: 'Vedic Life Sciences',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    description:
      'Monitor and document adverse event reports for a portfolio of Ayurvedic and herbal wellness products.',
    requiredSkills: [
      { skill: 'Adverse Event Reporting', required: 70 },
      { skill: 'Case Documentation', required: 65 },
      { skill: 'Regulatory Compliance', required: 65 },
    ],
    deadline: '2026-09-30',
  },
  {
    id: 'opp-3',
    title: 'Healthcare Data Analyst',
    organization: 'Sanjeevani Health Analytics',
    location: 'Bengaluru, Karnataka (Remote)',
    type: 'Full-time',
    description:
      'Analyze operational and clinical data across partner Ayush clinics to identify care-delivery improvements.',
    requiredSkills: [
      { skill: 'Data Analysis', required: 75 },
      { skill: 'Data Visualization', required: 65 },
      { skill: 'Statistical Tools', required: 65 },
    ],
    deadline: '2026-10-01',
  },
  {
    id: 'opp-4',
    title: 'Medical Content Writer',
    organization: 'HerbWell Digital Health',
    location: 'Remote',
    type: 'Contract',
    description:
      'Create accurate, engaging health content on Ayurvedic wellness topics for a growing digital health platform.',
    requiredSkills: [
      { skill: 'Medical Writing', required: 68 },
      { skill: 'Content Accuracy Review', required: 65 },
      { skill: 'SEO for Health Content', required: 50 },
    ],
    deadline: '2026-09-20',
  },
  {
    id: 'opp-5',
    title: 'Ayurvedic Practitioner — Junior Consultant',
    organization: 'Prakriti Wellness Clinic',
    location: 'Jaipur, Rajasthan',
    type: 'Full-time',
    description:
      'Provide consultations and treatment plans under senior practitioner supervision at a multi-specialty Ayush clinic.',
    requiredSkills: [
      { skill: 'Ayurvedic Diagnosis', required: 75 },
      { skill: 'Patient Consultation', required: 70 },
      { skill: 'Herbal Formulation', required: 65 },
    ],
    deadline: '2026-11-05',
  },
  {
    id: 'opp-6',
    title: 'Research Assistant — Observational Studies',
    organization: 'National Institute of Ayurveda',
    location: 'Jaipur, Rajasthan',
    type: 'Internship',
    description:
      'Support data collection and literature review for an ongoing multi-site observational study.',
    requiredSkills: [
      { skill: 'Literature Review', required: 60 },
      { skill: 'Data Collection', required: 60 },
      { skill: 'Research Ethics', required: 55 },
    ],
    deadline: '2026-09-25',
  },
  {
    id: 'opp-7',
    title: 'Product Quality Associate',
    organization: 'Himalaya Botanicals',
    location: 'Dehradun, Uttarakhand',
    type: 'Full-time',
    description:
      'Support quality compliance and formulation review for a growing line of Ayurvedic wellness products.',
    requiredSkills: [
      { skill: 'Quality Standards (GMP)', required: 65 },
      { skill: 'Formulation Knowledge', required: 65 },
      { skill: 'Product Compliance', required: 60 },
    ],
    deadline: '2026-10-10',
  },
  {
    id: 'opp-8',
    title: 'Hospital Administration Trainee',
    organization: 'Arogya Ayush Hospital',
    location: 'Kochi, Kerala',
    type: 'Internship',
    description:
      'Rotate across operations, records management and resource planning at a 120-bed Ayush hospital.',
    requiredSkills: [
      { skill: 'Healthcare Operations', required: 60 },
      { skill: 'Health Records Management', required: 55 },
      { skill: 'Stakeholder Communication', required: 55 },
    ],
    deadline: '2026-11-01',
  },
];

export const getOpportunityById = (id) => opportunities.find((o) => o.id === id);
