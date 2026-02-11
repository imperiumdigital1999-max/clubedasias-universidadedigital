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
  nivel?: 'Iniciante' | 'Intermediário' | 'Avançado';
  cargaHoraria?: string;
  status?: 'Disponível' | 'Em andamento' | 'Concluído';
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
  image: string;
  rating?: number;
}

export type ViewMode = 'inicio' | 'tool-detail' | 'task-detail' | 'course-detail' | 'destaques-da-semana' | 'cursos' | 'prompts' | 'gpts-personalizados' | 'tasks' | 'banco-digital' | 'suporte';