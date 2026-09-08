// Five-question skill assessment for every supported tech role.
// `skill` on each question must match a skill name in that role's entry
// in `roles.js` so scoring and gap comparisons line up correctly.
export const quizData = {
  'ai-engineer': [
    { id: 'aie-1', question: 'Which language is most commonly used for building AI/ML models and pipelines?', options: ['Python', 'HTML', 'CSS', 'XML'], correctIndex: 0, skill: 'Python' },
    { id: 'aie-2', question: 'In supervised learning, a model learns from:', options: ['Labeled training examples', 'Only random noise', 'No input data at all', 'CSS selectors'], correctIndex: 0, skill: 'Machine Learning' },
    { id: 'aie-3', question: "Why is data preprocessing important before training an AI model?", options: ['It cleans and prepares data for reliable learning', 'It guarantees perfect predictions', 'It replaces the need for evaluation', 'It removes the need for testing'], correctIndex: 0, skill: 'Data Preprocessing' },
    { id: 'aie-4', question: 'Which metric is commonly used to evaluate a classification model?', options: ['F1 score', 'Font size', 'Page width', 'File name'], correctIndex: 0, skill: 'Model Evaluation' },
    { id: 'aie-5', question: 'Which practice helps safely ship a trained AI model into production?', options: ['Containerizing and monitoring it after deployment', 'Deleting the training data', 'Skipping testing entirely', 'Hardcoding all outputs'], correctIndex: 0, skill: 'Deployment' },
  ],
  'ml-engineer': [
    { id: 'mle-1', question: 'Which language is the primary tool for implementing most ML pipelines?', options: ['Python', 'CSS', 'HTML', 'SVG'], correctIndex: 0, skill: 'Python' },
    { id: 'mle-2', question: 'Which of these is a supervised learning algorithm?', options: ['Linear Regression', 'K-Means Clustering', 'PCA', 'DBSCAN'], correctIndex: 0, skill: 'ML Algorithms' },
    { id: 'mle-3', question: 'Feature engineering primarily involves:', options: ['Transforming raw data into inputs that improve model performance', 'Designing app icons', 'Writing marketing copy', 'Compressing videos'], correctIndex: 0, skill: 'Feature Engineering' },
    { id: 'mle-4', question: 'Cross-validation is used to:', options: ['Estimate how well a model generalizes to unseen data', 'Speed up website loading', 'Encrypt a database', 'Design a UI layout'], correctIndex: 0, skill: 'Model Evaluation' },
    { id: 'mle-5', question: 'MLOps practices primarily help teams:', options: ['Reliably build, deploy and monitor ML models in production', 'Design logos', 'Write legal contracts', 'Manage HR onboarding'], correctIndex: 0, skill: 'MLOps' },
  ],
  'data-scientist': [
    { id: 'ds-1', question: "Which combination of skills is core to a data scientist's toolkit?", options: ['Python and statistics', 'HTML and CSS only', 'Graphic design only', 'Sales scripts only'], correctIndex: 0, skill: 'Python & Statistics' },
    { id: 'ds-2', question: 'A dataset shows an unexpected spike in one metric. What should a data scientist do first?', options: ['Explore and segment the data to understand the pattern', 'Delete the spike', 'Ignore it', 'Assume the cause without checking'], correctIndex: 0, skill: 'Data Analysis' },
    { id: 'ds-3', question: 'Which of the following best describes machine learning?', options: ['Systems that learn patterns from data to make predictions', 'Manually written if-else rules only', 'A type of database', 'A design tool'], correctIndex: 0, skill: 'Machine Learning' },
    { id: 'ds-4', question: 'Which chart type is best for showing a trend over time?', options: ['Line chart', 'Pie chart with 20 slices', 'Unlabeled scatter plot', 'Blank table'], correctIndex: 0, skill: 'Data Visualization' },
    { id: 'ds-5', question: 'Good data storytelling primarily helps stakeholders:', options: ['Understand insights and make informed decisions', 'Ignore the data entirely', 'Memorize raw numbers', 'Avoid all context'], correctIndex: 0, skill: 'Data Storytelling' },
  ],
  'software-developer': [
    { id: 'sd-1', question: 'Which concept lets you reuse a block of code with different inputs?', options: ['Functions', 'CSS selectors', 'Fonts', 'Image compression'], correctIndex: 0, skill: 'Programming Fundamentals' },
    { id: 'sd-2', question: 'Which data structure is best suited for LIFO (last-in, first-out) operations?', options: ['Stack', 'Queue', 'Array only', 'Table'], correctIndex: 0, skill: 'Data Structures & Algorithms' },
    { id: 'sd-3', question: "What's usually the most effective first step when debugging a failing test?", options: ['Reproduce the issue and inspect the actual error', 'Rewrite the whole codebase', 'Ignore the error', 'Delete the test'], correctIndex: 0, skill: 'Debugging' },
    { id: 'sd-4', question: 'Which language is most commonly used to query relational databases?', options: ['SQL', 'CSS', 'Markdown', 'SVG'], correctIndex: 0, skill: 'Databases' },
    { id: 'sd-5', question: 'Version control systems like Git primarily help teams:', options: ['Track and coordinate changes to code over time', 'Design logos', 'Compress images', 'Send emails'], correctIndex: 0, skill: 'Software Engineering Practices' },
  ],
  'full-stack-developer': [
    { id: 'fsd-1', question: 'Which technology is primarily used to build interactive user interfaces in the browser?', options: ['JavaScript / React', 'SQL', 'Docker', 'YAML'], correctIndex: 0, skill: 'Frontend Development' },
    { id: 'fsd-2', question: 'A backend server typically handles:', options: ['Business logic, data storage and API requests', 'Only page colors', 'Only font rendering', 'Only image filters'], correctIndex: 0, skill: 'Backend Development' },
    { id: 'fsd-3', question: 'A REST API is commonly used to:', options: ['Allow a frontend and backend to exchange data over HTTP', 'Style a webpage', 'Compress video files', 'Replace a database entirely'], correctIndex: 0, skill: 'APIs & Databases' },
    { id: 'fsd-4', question: 'Which tool is most commonly used for tracking code changes across a team?', options: ['Git', 'Photoshop', 'Excel', 'PowerPoint'], correctIndex: 0, skill: 'Version Control' },
    { id: 'fsd-5', question: 'When designing a system to handle more users, which strategy commonly helps?', options: ['Scaling the application horizontally', 'Removing all logging', 'Hardcoding data', 'Disabling caching everywhere'], correctIndex: 0, skill: 'System Design' },
  ],
  'cybersecurity-analyst': [
    { id: 'csa-1', question: "Which principle focuses on limiting access to only what's needed for a job role?", options: ['Least privilege', 'Full public access', 'Shared admin passwords', 'No authentication'], correctIndex: 0, skill: 'Security Fundamentals' },
    { id: 'csa-2', question: "A firewall's primary purpose is to:", options: ['Control and filter network traffic based on rules', 'Design a website layout', 'Compress files', 'Manage payroll'], correctIndex: 0, skill: 'Network Security' },
    { id: 'csa-3', question: 'Which activity is a common indicator of a potential security threat?', options: ['Repeated failed logins from unusual locations', 'A user logging in once at their normal time', 'A scheduled backup completing successfully', 'A routine software update'], correctIndex: 0, skill: 'Threat Detection' },
    { id: 'csa-4', question: 'Vulnerability scanning is used to:', options: ['Identify known weaknesses in systems before attackers do', 'Design a logo', 'Improve font readability', 'Replace a database'], correctIndex: 0, skill: 'Vulnerability Assessment' },
    { id: 'csa-5', question: 'Security compliance frameworks primarily help organizations:', options: ['Meet defined security standards and reduce risk', 'Increase marketing reach', 'Choose office furniture', 'Avoid all documentation'], correctIndex: 0, skill: 'Security Tools & Compliance' },
  ],
  'cloud-devops-engineer': [
    { id: 'cde-1', question: 'Which of these is a major cloud computing platform?', options: ['AWS', 'Photoshop', 'Excel', 'Figma'], correctIndex: 0, skill: 'Cloud Platforms' },
    { id: 'cde-2', question: 'A CI/CD pipeline primarily helps teams:', options: ['Automatically build, test and deploy code changes', 'Design marketing graphics', 'Manage payroll', 'Edit videos'], correctIndex: 0, skill: 'CI/CD Pipelines' },
    { id: 'cde-3', question: 'Docker is primarily used to:', options: ['Package applications with their dependencies into portable containers', 'Design a database schema', 'Write legal documents', 'Manage social media'], correctIndex: 0, skill: 'Containers & Orchestration' },
    { id: 'cde-4', question: 'Infrastructure as Code allows teams to:', options: ['Define and provision infrastructure using version-controlled config files', 'Only design UI screens', 'Only write marketing copy', 'Only manage spreadsheets'], correctIndex: 0, skill: 'Infrastructure as Code' },
    { id: 'cde-5', question: 'Monitoring and alerting systems are used to:', options: ['Detect issues in running systems before they cause major outages', 'Replace all testing', 'Design app icons', 'Increase page load animations'], correctIndex: 0, skill: 'Monitoring & Reliability' },
  ],
};

export const getQuizForRole = (roleId) => quizData[roleId] || [];
