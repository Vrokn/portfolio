export type WorkTab = 'projects' | 'experience';

export interface HeroContent {
  title: string;
  subtitle: string;
  badge: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
}

export interface SkillCategory {
  title: string;
  badges: string[];
}

export interface ProjectEntry {
  name: string;
  period: string;
  summary: string;
  stack: string[];
  href: string;
  mediaNote: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  stack: string[];
}

export interface ContactEntry {
  label: string;
  href: string;
}
