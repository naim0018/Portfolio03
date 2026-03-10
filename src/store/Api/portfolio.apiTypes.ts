export interface SocialLink {
  logo: string;
  name: string;
  description: string;
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  coverImage?: string;
  images: string[];
  link?: string;
  tags: string[];
  repositoryLink?: string;
  notes?: string;
}

export interface Experience {
  title: string;
  description: string;
  logo: string;
  link?: string;
  startDate: string;
  endDate?: string;
  location: string;
}

export interface Education {
  title: string;
  degree: string;
  description: string;
  logo: string;
  link?: string;
  startDate: string;
  endDate?: string;
  location: string;
}

export interface Skill {
  name: string;
  logo: string;
  progress: number;
  category: string;
}

export interface Portfolio {
  _id: string; // Aggregate uses the portfolio ID as _id
  userId: string;
  name: string;
  email: string;
  shortDescription: string;
  longDescription: string;
  profilePicture?: string;
  resume?: string;
  status: 'draft' | 'published';
  socialLinks: SocialLink[];
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
}

export interface GetPortfolioResponse {
  success: boolean;
  data: Portfolio;
  message: string;
}
