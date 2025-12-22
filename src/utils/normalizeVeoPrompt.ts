import { VEO3Prompt } from '../data/veo3Prompts';

interface RawVeoPrompt {
  id?: string;
  titulo: string;
  prompt_texto: string;
  sub_topico: string;
  video_exemplo_url?: string;
  gif_url?: string;
  thumbnail_url?: string;
}

export function normalizeVeoPrompt(raw: RawVeoPrompt): VEO3Prompt {
  const normalizedPrompt = normalizePromptString(raw.prompt_texto);

  return {
    id: raw.id || generateId(raw.titulo),
    category: raw.sub_topico || 'Geral',
    title: raw.titulo?.trim() || 'Sem título',
    prompt: normalizedPrompt,
    video_exemplo_url: raw.video_exemplo_url || undefined,
    gif_url: raw.gif_url || undefined,
    thumbnail_url: raw.thumbnail_url || 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600'
  };
}

function normalizePromptString(promptText: string): string {
  if (!promptText) return '';

  let normalized = promptText
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\t/g, ' ')
    .trim();

  normalized = normalized
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'");

  if (normalized.startsWith('"') && normalized.endsWith('"')) {
    normalized = normalized.slice(1, -1);
  }
  if (normalized.startsWith("'") && normalized.endsWith("'")) {
    normalized = normalized.slice(1, -1);
  }

  return normalized;
}

function generateId(title: string): string {
  const clean = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const timestamp = Date.now().toString(36).slice(-4);
  return `${clean.slice(0, 20)}-${timestamp}`;
}

export function normalizeVeoPrompts(rawPrompts: RawVeoPrompt[]): VEO3Prompt[] {
  return rawPrompts.map(normalizeVeoPrompt);
}
