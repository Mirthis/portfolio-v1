import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPageTitle(title?: string) {
  const baseTitle = "Andrea Cardinale - Full-Stack Engineer";
  return title ? `${baseTitle} | ${title}` : baseTitle;
}

// TODO: update description

export const getMetaDescription = (description?: string) => {
  const baseDescription =
    "Andrea Cardinale is a full-stack engineer and web developer specializing in React, NextJs, TypeScript and Node.js.";
  return description ? description : baseDescription;
};

export const getMetaKeywords = () => {
  return [
    "Full Stack Development",
    "Web Development",
    "Front-end",
    "Back-end",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Redux",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Daily UI",
    "Material UI",
    "Docker",
    "Git",
    "T3 Stack",
    "SQL",
    "NoSQL",
    "Artificial Intelligence (AI)",
    "Responsive Design",
    "User Experience (UX)",
    "User Interface (UI)",
    "API Integration",
    "RESTful APIs",
    "Database Management",
    "Server-side scripting",
    "Agile Development",
    "Software Architecture",
    "Code Optimization",
    "Cross-browser Compatibility",
    "Problem-solving",
    "Debugging",
    "Mobile Development",
    "Progressive Web Apps (PWAs)",
    "AWS",
    "DevOps",
    "Continuous Integration/Continuous Deployment (CI/CD)",
    "Test-Driven Development (TDD)",
    "Collaboration",
    "Innovation",
    "Scalability",
    "Security",
    "Code Reviews",
    "Automation",
    "Serverless Architecture",
    "GraphQL",
    "Microservices",
    "Software Development Life Cycle (SDLC)",
    "Performance Optimization",
    "Mobile-First Development",
  ];
};

export const getPageMetadata = (title?: string, description?: string) => {
  return {
    title: getPageTitle(title),
    description: getMetaDescription(description),
    keywords: getMetaKeywords(),
  };
};
