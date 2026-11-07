export interface HeroProof {
  value: string;
  label: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  badge: string;
  proofs: HeroProof[];
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
}

export interface ExternalLink {
  label: string;
  href: string;
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
  links?: ExternalLink[];
  videoSrc?: string;
  imageSrc?: string;
  mediaNote: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  stack: string[];
  href?: string;
  links?: ExternalLink[];
  previewImageSrc?: string;
}

export interface ContactEntry {
  label: string;
  href: string;
}
