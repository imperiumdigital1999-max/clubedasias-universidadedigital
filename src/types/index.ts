export interface AITool {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
  featured?: boolean;
  new?: boolean;
  coverImage?: string;
  function?: string;
  applications?: string[];
  videos?: {
    id: string;
    title: string;
    thumbnail: string;
    url: string;
  }[];
  prompts?: {
    id: string;
    title: string;
    content: string;
  }[];
  freeAccessVideo?: string;
}

export interface TaskPlatform {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  featured?: boolean;
  new?: boolean;
  coverImage?: string;
  function?: string;
  applications?: string[];
  videos?: {
    id: string;
    title: string;
    thumbnail: string;
    url: string;
  }[];
  freeAccessVideo?: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  featured?: boolean;
  new?: boolean;
  coverImage?: string;
  function?: string;
  applications?: string[];
  videos?: {
    id: string;
    title: string;
    thumbnail: string;
    url: string;
  }[];
  freeAccessVideo?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  toolCount: number;
}

export interface GPT {
  id: string;
  tag: string;
  name: string;
  description: string;
  url: string;
}

export type ViewMode = 'inicio' | 'category' | 'ferramentas-ia' | 'favorites' | 'tasks' | 'ias-pro' | 'cursos' | 'prompts' | 'gpts-personalizados' | 'tool-detail' | 'task-detail' | 'course-detail';