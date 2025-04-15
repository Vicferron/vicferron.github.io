import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Víctor Ferrón",
  EMAIL: "vicferron@hotmail.es",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A personal website to showcase my work and projects.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my thoughts and ideas on various topics.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "A showcase of my work, including projects and contributions.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my personal projects.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/Vicferron"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/victor-fa/",
  }
];
