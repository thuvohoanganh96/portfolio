export interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  topics: string[];
}

export interface ExperienceProject {
  name: string;
  description: string[];
  role: string;
  technologies: string[];
  link?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  projects?: ExperienceProject[];
}

export interface Skill {
  name: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}