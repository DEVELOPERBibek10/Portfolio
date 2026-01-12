import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { LuGithub } from "react-icons/lu";

import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";

export interface TechStack {
  frontend: string[];
  backend: string[];
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
  key: string | number;
}

const ProjectCard = ({
  image,
  title,
  techStack,
  liveUrl,
  description,
  githubUrl,
  className,
}: ProjectCardProps) => {
  return (
    <motion.div className="h-full">
      <Card
        className={cn(
          "group overflow-hidden transition-all duration-500 h-118 hover:asthetic-shadow hover:-translate-y-1",
          className
        )}
      >
        {/* Project Image */}
        <div className="relative h-40 w-full shrink-0 bg-muted/30">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <CardHeader>
          <CardTitle className="text-xl tracking-tight">{title}</CardTitle>
          <CardDescription className="leading-relaxed line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-300 group/link"
            >
              <FaExternalLinkAlt className="w-4 h-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              <span className="border-b border-transparent group-hover/link:border-foreground transition-all duration-300">
                Live Demo
              </span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-300 group/link"
            >
              <LuGithub className="w-4 h-4 transition-transform duration-300 group-hover/link:rotate-12" />
              <span className="border-b border-transparent group-hover/link:border-foreground transition-all duration-300">
                Source Code
              </span>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
