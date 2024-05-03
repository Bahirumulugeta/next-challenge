type ISkill = {
  name: string;
  image: string;
};
type skill = {
  category: string;
  skills: ISkill[];
};
type IProject = {
  name: string;
  image: string;
  link?: string;
  techstack: string;
};
type project = {
  category: string;
  projects: IProject[];
};

type experience = {
  company: string;
  position: string;
  duration: string;
  desc: string[];
};

type education = {
  institute: string;
  degree: string;
  duration: string;
};

type main = {
  name: string;
  titles: string[];
  heroImage: string;
  shortDesc: string;
  techStackImages: string[];
};

type about = {
  aboutImage: string;
  aboutImageCaption: string;
  title: string;
  about: string;
  resumeUrl: string;
  callUrl: string;
};

type social = {
  icon: string;
  link: string;
};

type data = {
  main: main;
  about: about;
  skills: skill[];
  projects: project[];
  experiences: experience[];
  educations: education[];
  socials: social[];
};

export type {
  data,
  main,
  about,
  skill,
  project,
  experience,
  education,
  social,
  IProject,
  ISkill,
};
