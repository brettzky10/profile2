import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Georgian College",
    description:
      "I graduated with a 3 year electrical engineering technology diploma",
    icon: React.createElement(LuGraduationCap),
    date: "2011",
  },
  {
    title: "Graduated University",
    location: "Ottawa University",
    description:
      "I graduated with a Civil Engineering Degree with a double major in Structural Engineering and Project Management",
    icon: React.createElement(CgWorkAlt),
    date: "2014",
  },
  {
    title: "Drone Technician and Operator",
    location: "Drone Unit",
    description:
      "With over 75 productions worked to date, ",
    icon: React.createElement(FaReact),
    date: "2014 - present",
  },
  {
    title: "Developer",
    location: "Drone Unit",
    description:
      "For the last 3 years, Ive accumilated hundreds of hours on udemy courses, and even more hours on youtube tutorials. I started with what I knew, C++ arduino code, moved to Javascript, then to Flutter, React and now NextJS",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "A developer friendly website",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;