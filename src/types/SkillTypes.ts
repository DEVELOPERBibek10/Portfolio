import type { IconType } from "react-icons";

export type SkillLevel = "Basic" | "Intermediate" | "Experienced";

export interface Skill {
  name: string;
  icon: IconType;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
