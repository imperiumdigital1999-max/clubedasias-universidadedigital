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

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  toolCount: number;
}

export type ViewMode = 'dashboard' | 'category' | 'categories' | 'favorites' | 'recent' | 'tasks' | 'ias-pro' | 'tool-detail' | 'task-detail';
export type ViewMode = 'dashboard' | 'category' | 'categories' | 'favorites' | 'recent' | 'tasks' | 'ias-pro' | 'cursos' | 'tool-detail' | 'task-detail';