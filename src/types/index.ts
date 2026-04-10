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
