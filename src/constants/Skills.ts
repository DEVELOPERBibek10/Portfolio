import type { SkillCategory } from "@/types/SkillTypes";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
} from "react-icons/io";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiExpress } from "react-icons/si";

export const SkillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: IoLogoHtml5, level: "Experienced" },
      { name: "CSS", icon: IoLogoCss3, level: "Experienced" },
      { name: "Tailwind", icon: RiTailwindCssFill, level: "Intermediate" },
      { name: "JavaScript", icon: IoLogoJavascript, level: "Intermediate" },
      { name: "TypeScript", icon: SiTypescript, level: "Intermediate" },
      { name: "React JS", icon: RiReactjsFill, level: "Intermediate" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: "Intermediate" },
      { name: "PostgreSQL", icon: BiLogoPostgresql, level: "Basic" },
      { name: "Node JS", icon: IoLogoNodejs, level: "Basic" },
      { name: "Express JS", icon: SiExpress, level: "Basic" },
    ],
  },
];
