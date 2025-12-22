import { normalizeVeoPrompts } from './normalizeVeoPrompt';

const novosPromptsCopiados = [
  {
    titulo: 'VLOG DE FITNESS',
    prompt_texto: '{"scene": "4K fitness vlog in modern gym. Person demonstrates workout routine with proper form. Bright overhead lighting with motivational atmosphere. Camera follows movements smoothly."}',
    sub_topico: 'Vlog',
    video_exemplo_url: 'https://videos.pexels.com/video-files/99999/99999-uhd.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/99999/photo.jpeg'
  },
  {
    titulo: 'COMERCIAL RESTAURANTE',
    prompt_texto: '{"scene": "4K cinematic scene inside upscale restaurant. Chef prepares dish with precision. Warm ambient lighting creates inviting atmosphere. Close-up shots of food presentation."}',
    sub_topico: 'Comercial',
    video_exemplo_url: 'https://videos.pexels.com/video-files/88888/88888-uhd.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/88888/photo.jpeg'
  }
];

const promptsNormalizados = normalizeVeoPrompts(novosPromptsCopiados);

export { promptsNormalizados };
