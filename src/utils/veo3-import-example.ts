import { normalizeVeoPrompt, normalizeVeoPrompts } from './normalizeVeoPrompt';

const rawPromptFromExternalSite = {
  id: 'v101',
  titulo: 'TUTORIAL DE FOTOGRAFIA',
  prompt_texto: `{
    "scene": "4K cinematic tutorial showing photography techniques.
    Professional photographer demonstrates camera settings with clear hand movements.
    Bright studio lighting with neutral backdrop."
  }`,
  sub_topico: 'Tutorial',
  video_exemplo_url: 'https://videos.pexels.com/video-files/12345/12345-uhd.mp4',
  thumbnail_url: 'https://images.pexels.com/photos/12345/photo.jpeg'
};

const normalizedPrompt = normalizeVeoPrompt(rawPromptFromExternalSite);

const rawPrompts = [
  {
    titulo: 'VÍDEO 1',
    prompt_texto: '{"scene": "Descrição do vídeo 1"}',
    sub_topico: 'Categoria 1',
    video_exemplo_url: 'https://example.com/video1.mp4',
    thumbnail_url: 'https://example.com/thumb1.jpg'
  },
  {
    titulo: 'VÍDEO 2',
    prompt_texto: '{"scene": "Descrição do vídeo 2"}',
    sub_topico: 'Categoria 2',
    video_exemplo_url: 'https://example.com/video2.mp4',
    thumbnail_url: 'https://example.com/thumb2.jpg'
  }
];

const normalizedPrompts = normalizeVeoPrompts(rawPrompts);
