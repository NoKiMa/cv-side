export type Language = 'en' | 'ru' | 'he';

export interface LocaleContent {
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
    items: Array<{
      period: string;
      role: string;
      company: string;
      location: string;
      description: string;
      technologies: string;
    }>;
  };
  education: {
    title: string;
    items: Array<{
      period: string;
      degree: string;
      institution: string;
    }>;
  };
  projects: {
    title: string;
    items: Array<{
      period: string;
      name: string;
      description: string;
    }>;
  };
}