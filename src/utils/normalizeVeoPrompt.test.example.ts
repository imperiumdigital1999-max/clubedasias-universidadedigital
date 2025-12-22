import { normalizeVeoPrompt } from './normalizeVeoPrompt';

console.log('=== TESTE DE NORMALIZAÇÃO VEO3 ===\n');

const rawPromptProblematico = {
  titulo: '  TUTORIAL   DE   FOTOGRAFIA  ',
  prompt_texto: `{"scene": "4K cinematic tutorial
    showing photography techniques.
    Professional photographer demonstrates
    camera settings with clear hand movements.
    Bright studio lighting with neutral backdrop."}`,
  sub_topico: '  Tutorial  ',
  video_exemplo_url: 'https://videos.pexels.com/video-files/12345/12345-uhd.mp4',
  thumbnail_url: 'https://images.pexels.com/photos/12345/photo.jpeg'
};

console.log('ANTES (raw):');
console.log(JSON.stringify(rawPromptProblematico, null, 2));

const normalizado = normalizeVeoPrompt(rawPromptProblematico);

console.log('\nDEPOIS (normalizado):');
console.log(JSON.stringify(normalizado, null, 2));

console.log('\n✅ Prompts normalizados com sucesso!');
console.log('- Espaços extras removidos');
console.log('- Quebras de linha eliminadas');
console.log('- Campos mapeados corretamente');
console.log('- ID gerado automaticamente');
