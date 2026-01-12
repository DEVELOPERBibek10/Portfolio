export interface TechStack {
  frontend: string[];
  backend: string[];
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: TechStack;
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}
