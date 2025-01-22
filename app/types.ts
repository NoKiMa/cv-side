export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  shortDescription: string;
  description: string;
  technologies: string;
  link?: string;
  additionalLinks?: {name: string, link: string}[];
};
export type Language = 'en' | 'he' | 'ru';
export type LocaleContent = {
  name: string;
  role: string;
  phone: string;
  email: string;
  residence: string;
  languages: string;
  summary: string;
  skills: {
    title: string;
    items: string[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    items: {
      period: string;
      institution: string;
      degree: string;
      location?: string;
    }[];
  };
  projects: {
    title: string;
    items: {
      period: string;
      name: string;
      description: string;
    }[];
  };
};
