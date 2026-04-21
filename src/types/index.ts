export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceFrom: string;
  duration: string;
  features: string[];
  highlighted?: boolean;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  duration: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
