import {
  ProjectItem,
  ExperienceItem,
  SkillCategory,
  AchievementItem,
  SocialLink,
  StdraSpec,
} from '../types';

export const PERSONAL_INFO = {
  name: 'MD Mobasser Hasan Safi',
  shortName: 'Safi',
  designation: 'Web Developer, Digital Product Builder & Automation Creator',
  bioHeadline: 'Architecting High-Performance Web Apps, Immersive 3D Systems, and Intelligent Automations',
  bioDetail:
    'Based in Bangladesh and collaborating with clients and creators worldwide, I combine modern web engineering (React, TypeScript, Three.js) with scalable workflow automations. Passionate about tactile interfaces, procedural graphics, and deterministic task architecture.',
  status: 'Available for Select Projects & Collaborations',
  location: 'Bangladesh',
  email: 'safiop.com@gmail.com',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/md-mobasser-hasan-safi-541b7a357/',
    label: 'Connect with MD Mobasser Hasan Safi on LinkedIn',
    handle: 'md-mobasser-hasan-safi',
    icon: 'Linkedin',
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61588281444579',
    label: 'Follow MD Mobasser Hasan Safi on Facebook',
    handle: 'profile.php?id=61588281444579',
    icon: 'Facebook',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/mh_safi_69/',
    label: 'View MD Mobasser Hasan Safi on Instagram',
    handle: '@mh_safi_69',
    icon: 'Instagram',
  },
  {
    platform: 'Email',
    url: 'mailto:safiop.com@gmail.com',
    label: 'Email MD Mobasser Hasan Safi directly',
    handle: 'safiop.com@gmail.com',
    icon: 'Mail',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'neuron-portfolio',
    title: 'Neuron Website',
    tagline: 'Personal Digital Presence & Creative Showcase',
    description:
      'A sleek, responsive portfolio designed for Rakib Hasan Neuron. Crafted with modern responsive typography, dark-mode aesthetics, fluid section navigation, and clean cross-device layout optimization.',
    category: 'Full Stack',
    url: 'http://mdrakibhasanneuron.netlify.app/',
    featured: true,
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive UI', 'Netlify Deployment'],
    metrics: 'Production Deployed',
  },
  {
    id: 'sweb-weaver-3d',
    title: 'SWeb Weaver 3D Copy',
    tagline: 'Interactive 3D Digital Product Platform',
    description:
      'An interactive digital platform integrating 3D canvas rendering, user authentication flows, dynamic UI states, and responsive product viewports. Explores tactile spatial presentation on the web.',
    category: '3D Web',
    url: 'https://sweb-weaver-3-d-copy-dc94af24.base44.app/login?from_url=https%3A%2F%2Fsweb-weaver-3-d-copy-dc94af24.base44.app%2F',
    featured: true,
    technologies: ['Three.js', 'React', 'Interactive 3D', 'Auth Flow', 'Base44 Cloud'],
    metrics: 'Spatial Web App',
    isExternalAuth: true,
  },
  {
    id: 'sole-shift-style',
    title: 'Sole Shift Style',
    tagline: 'Contemporary Footwear & Lifestyle Product Experience',
    description:
      'A modern lifestyle product showcase engineered with high-impact visual hierarchy, curated product catalogs, responsive grid architectures, and refined micro-interactions for modern retail.',
    category: 'E-Commerce / Product',
    url: 'https://sole-shift-style.base44.app/',
    featured: true,
    technologies: ['React', 'CSS Architecture', 'UI/UX Design', 'Product Showcase', 'Base44 Cloud'],
    metrics: 'Live Commerce Experience',
  },
  {
    id: 'stdra-architecture',
    title: 'S.T.D.R.A. Core Framework',
    tagline: 'Strategic Task & Dynamic Reasoning Architecture',
    description:
      'The creator’s flagship personal AI-system architecture. Designed as an orchestration engine that decomposes multi-stage tasks, evaluates dynamic criteria, and executes automated pipelines with deterministic precision.',
    category: 'Automation & AI',
    url: '#stdra',
    featured: true,
    technologies: ['System Architecture', 'Decision Logic', 'Task Orchestration', 'Workflow Automation', 'Python / TS'],
    metrics: 'Flagship Architecture Project',
  },
  {
    id: 'bangladesh-local-automations',
    title: 'Local Business & Automation Pipelines',
    tagline: 'Custom Workflow Automations & Regional Client Portals',
    description:
      'Bespoke digital tooling and process automation workflows deployed for local entrepreneurs and businesses in Bangladesh. Covers automated client notifications, inventory updates, and CRM sync.',
    category: 'Automation & AI',
    url: '#contact',
    featured: false,
    technologies: ['Workflow Automation', 'Webhooks', 'REST APIs', 'Custom Scripting', 'Client Solutions'],
    metrics: 'Active Local Implementations',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Web Developer & Digital Product Builder',
    organization: 'Independent Practice',
    location: 'Bangladesh (Global Clients)',
    period: '2023 - Present',
    summary:
      'Directing end-to-end frontend and interactive web application engineering, translating client visions into high-converting digital products.',
    highlights: [
      'Engineered and deployed production web applications featuring interactive 3D elements, modern CSS architectures, and fast client-side routing.',
      'Developed modular, accessible component systems using React, TypeScript, and modern styling libraries.',
      'Optimized performance budgets, cross-browser rendering, and responsive viewports for desktop, tablet, and mobile devices.',
    ],
    skills: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Vite', 'UI/UX Engineering'],
  },
  {
    id: 'exp-2',
    role: 'Automation Creator & Systems Designer',
    organization: 'Proprietary Research & Client Pipelines',
    location: 'Bangladesh',
    period: '2023 - Present',
    summary:
      'Designing intelligent automation workflows, webhook triggers, and data processing routines to eliminate repetitive operational overhead.',
    highlights: [
      'Architected S.T.D.R.A. (Strategic Task & Dynamic Reasoning Architecture) to explore structured task evaluation and agentic task dispatching.',
      'Automated repetitive client data pipelines, communication triggers, and backend integration touchpoints.',
      'Implemented robust error handling, state tracking, and fallback routines for mission-critical automation jobs.',
    ],
    skills: ['Workflow Automation', 'API Integration', 'Data Processing', 'Process Architecture', 'S.T.D.R.A.'],
  },
  {
    id: 'exp-3',
    role: 'Local Digital Solutions Architect',
    organization: 'Regional Collaborations & Ventures',
    location: 'Bangladesh',
    period: '2022 - Present',
    summary:
      'Partnering with local entrepreneurs, brands, and creatives in Bangladesh to establish authoritative online identities and automated commerce channels.',
    highlights: [
      'Delivered custom web portals, product catalog showcases, and responsive web pages tailored to regional audience needs.',
      'Consulted on modern web best practices, digital presence scalability, and user conversion funnels.',
      'Provided end-to-end technical support, deployment management, and iterative performance tuning.',
    ],
    skills: ['Web Architecture', 'Client Consultation', 'Local Ecosystem Delivery', 'Performance Tuning'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & 3D Engineering',
    iconName: 'Code',
    skills: [
      { name: 'React', level: 'Advanced', tag: 'Core' },
      { name: 'TypeScript', level: 'Advanced', tag: 'Core' },
      { name: 'Three.js & R3F', level: 'Intermediate / Advanced', tag: '3D' },
      { name: 'Tailwind CSS', level: 'Advanced', tag: 'Styling' },
      { name: 'GSAP & ScrollTrigger', level: 'Proficient', tag: 'Motion' },
      { name: 'Framer Motion', level: 'Proficient', tag: 'Micro-interactions' },
      { name: 'HTML5 & Semantic Markup', level: 'Advanced', tag: 'Accessibility' },
    ],
  },
  {
    title: 'Automation & AI Architecture',
    iconName: 'Cpu',
    skills: [
      { name: 'S.T.D.R.A. System Design', level: 'Creator / Architect', tag: 'Flagship' },
      { name: 'Workflow Automation', level: 'Advanced', tag: 'Pipelines' },
      { name: 'API Integrations & Webhooks', level: 'Proficient', tag: 'Backend' },
      { name: 'Task Decomposition Logic', level: 'Advanced', tag: 'Reasoning' },
      { name: 'Scripting & Automation', level: 'Proficient', tag: 'Efficiency' },
      { name: 'State & Event Orchestration', level: 'Proficient', tag: 'Systems' },
    ],
  },
  {
    title: 'Tooling & Deployment Ecosystem',
    iconName: 'Layers',
    skills: [
      { name: 'Vite & Bundler Tooling', level: 'Advanced', tag: 'Build' },
      { name: 'Git & Version Control', level: 'Advanced', tag: 'DevOps' },
      { name: 'Netlify & Cloud Hosting', level: 'Proficient', tag: 'Deploy' },
      { name: 'Base44 Cloud Platform', level: 'Proficient', tag: 'Deploy' },
      { name: 'Responsive Design & Auditing', level: 'Advanced', tag: 'Quality' },
      { name: 'Performance Profiling', level: 'Proficient', tag: 'Speed' },
    ],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Production Web App Portfolio Launch',
    category: 'Web Engineering',
    description:
      'Engineered and published real-world production web platforms including Neuron Website, SWeb Weaver 3D Copy, and Sole Shift Style.',
    year: '2024',
    badge: 'Production Verified',
  },
  {
    id: 'ach-2',
    title: 'S.T.D.R.A. Architecture Conceptualization',
    category: 'System Architecture',
    description:
      'Designed and formulated the Strategic Task & Dynamic Reasoning Architecture, establishing modular blueprints for autonomous task orchestration.',
    year: '2024',
    badge: 'Proprietary Blueprint',
  },
  {
    id: 'ach-3',
    title: 'Local Business Digital Enablement in Bangladesh',
    category: 'Client Impact',
    description:
      'Empowered local brands and creators with tailored digital presences, web solutions, and automated communication pipelines.',
    year: '2023 - Present',
    badge: 'Ecosystem Impact',
  },
  {
    id: 'ach-4',
    title: 'Interactive 3D Web Graphics Implementation',
    category: 'Creative Tech',
    description:
      'Mastered procedural WebGL and Three.js techniques, marrying 60fps hardware-accelerated 3D graphics with lightweight React web architectures.',
    year: '2024',
    badge: 'Interactive 3D',
  },
];

export const STDRA_DATA: StdraSpec = {
  acronym: 'S.T.D.R.A.',
  fullName: 'Strategic Task & Dynamic Reasoning Architecture',
  tagline: "The Creator's Personal AI-System Project",
  overview:
    'S.T.D.R.A. is a proprietary architectural framework engineered by MD Mobasser Hasan Safi. It serves as a structured blueprint for dynamic task routing, multi-step problem decomposition, and deterministic automation pipelines. Instead of black-box outputs, S.T.D.R.A. emphasizes clear state transitions, verification loops, and context persistence.',
  pillars: [
    {
      title: 'Strategic Task Decomposition',
      description: 'Breaks complex goals into sequential, verifiable sub-objectives with strict execution criteria.',
      metric: 'Structured Flow',
    },
    {
      title: 'Dynamic Reasoning Loops',
      description: 'Continuously evaluates intermediary state against expected outcomes, recalibrating paths in real-time.',
      metric: 'Adaptive Routing',
    },
    {
      title: 'Deterministic Automation',
      description: 'Binds execution actions to verifiable APIs, webhooks, and local runtime triggers with zero guesswork.',
      metric: '100% Verifiable',
    },
  ],
  modules: [
    {
      code: 'MOD-01',
      name: 'Task Parsing & Context Ingestion',
      status: 'ACTIVE',
      detail: 'Isolates user intents and maps requirements to machine-readable execution trees.',
    },
    {
      code: 'MOD-02',
      name: 'Evaluation & Path Calibration',
      status: 'CALIBRATED',
      detail: 'Calculates optimal task sequence and balances resource budgets.',
    },
    {
      code: 'MOD-03',
      name: 'Execution & State Persistence',
      status: 'SYNCHRONIZED',
      detail: 'Commits state changes to persistent storage and dispatches automated actions.',
    },
    {
      code: 'MOD-04',
      name: 'Verification Gate & Telemetry',
      status: 'ACTIVE',
      detail: 'Runs automated validation checks before certifying task completion.',
    },
  ],
};
