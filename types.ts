
export interface Achievement {
  title: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  gpa?: string;
  achievements?: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string[];
  awards?: string[];
}

export interface AwardItem {
  title: string;
  category: string;
  date: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
