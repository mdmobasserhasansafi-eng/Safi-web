export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: '3D Web' | 'Full Stack' | 'Automation & AI' | 'E-Commerce / Product';
  url: string;
  featured: boolean;
  technologies: string[];
  metrics?: string;
  isExternalAuth?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    tag?: string;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  badge?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  handle: string;
  icon: string;
}

export interface StdraSpec {
  acronym: string;
  fullName: string;
  tagline: string;
  overview: string;
  pillars: {
    title: string;
    description: string;
    metric: string;
  }[];
  modules: {
    code: string;
    name: string;
    status: 'ACTIVE' | 'CALIBRATED' | 'SYNCHRONIZED';
    detail: string;
  }[];
}
