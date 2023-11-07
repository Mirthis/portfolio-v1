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
    "Andrea Cardinale is a full-stack engineer specializing in React, TypeScript, and Node.js.";
  return description ? description : baseDescription;
};
