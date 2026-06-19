export type ProjectStatus = 'completed' | 'in-progress' | 'archived';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  status: ProjectStatus;
  highlights?: string[];
  startDate?: string;
  endDate?: string;
}

export interface ProjectCardProps {
  project: Project;
}
