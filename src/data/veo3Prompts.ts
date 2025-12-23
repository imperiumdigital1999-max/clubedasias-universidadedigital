export interface VEO3Prompt {
  id: string;
  category: string;
  title: string;
  prompt: string;
  video_exemplo_url?: string;
  gif_url?: string;
  thumbnail_url: string;
}

export const veo3Categories = [
  'Ver Todos',
  'Entrevista',
  'Comédia',
  'Influencer',
  'Bebê',
  'Animação',
  'Comercial',
  'Tutorial',
  'Vlog',
  'Produto'
];

export const veo3Prompts: VEO3Prompt[] = [
 {

    id: '2779c513-e909-4f94-a120-b8b05b81a960',

    category: 'Comercial',

    title: 'LOJA DE NATURAIS SEM AÇUCAR',

    prompt: '{"scene": "4K cinematic scene inside a modern natural products store. A wooden counter displays zero-sugar items with soft natural lighting. Seller holds a jar of zero sugar jam and smiles.", "characters": "Brazilian woman in her late 20s, green apron, friendly.", "technical": "4K, Veo 3, 24fps, duration 11s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764368976806-_scene_4k_202511281929_2w63y.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764368979524.jpg'

  },

  {

    id: '3369058f-1742-4b91-a046-836d9357913a',

    category: 'Comercial',

    title: 'LOJA DE PRODUTOS NATURAIS',

    prompt: '{"scene": "4K cinematic scene showing a natural products counter. A healthy lifestyle consultant builds a personalized fitness basket with teas and supplements.", "characters": "Brazilian woman, late 20s, energetic and charismatic.", "technical": "4K, Veo 3, 24fps, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764368930051-_scene_4k_202511281928_e5y58.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764368956556.jpg'

  },

  {

    id: '7e242e06-8fc4-4de0-9cea-bef3737de1b0',

    category: 'Comercial',

    title: 'LOJA DE TEMPEROS NATURAIS',

    prompt: '{"scene": "4K cinematic scene in a spices section. Transparent jars with colorful spices on wooden shelves. Seller opens a jar of turmeric to show texture.", "characters": "Brazilian woman, late 20s, expressive and warm.", "technical": "4K, Veo 3, 24fps, duration 11s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764368874607-_scene_4k_202511281927_96re9.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764368916873.jpg'

  },

  {

    id: 'b3cb1e1c-1a2e-4974-b9d5-bbe4a8c8f029',

    category: 'Comercial',

    title: 'VENDEDORA ZERO GLUTEN',

    prompt: '{"scene": "4K cinematic shot in a natural products aisle. Seller compares two gluten-free products side-by-side and smiles at the camera.", "characters": "Brazilian woman mid-30s, store apron, friendly.", "technical": "4K, Veo 3, 24fps, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764368821264-_scene_4k_202511281926_yo6or.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764368824439.jpg'

  },

  {

    id: '5828f182-6171-41e0-866b-619a79ef73af',

    category: 'Comercial',

    title: 'HIGIENIZAÇÃO CORTINA',

    prompt: '{"scene": "4K cinematic cleaning scene in a cozy living room. Technician uses vertical steam cleaner on long blackout curtains.", "characters": "Female technician, uniform, precise and efficient.", "technical": "4K, Veo 3, 24fps, duration 12s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764367909216-_scene_4k_202511281911_48lhm.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764367912629.jpg'

  },

  {

    id: '0a02159f-b1b5-4ed4-ba33-dd571f75f8cc',

    category: 'Comercial',

    title: 'LAVAGEM DE ESTOFADOS',

    prompt: '{"scene": "4K cinematic service scene. A baby stroller is deep cleaned with hot steam and extraction machine.", "characters": "Female technician, meticulous and careful.", "technical": "4K, Veo 3, 24fps, duration 12s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764367696487-_scene_4k_202511281907_xyjxo.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764367700119.jpg'

  },

  {

    id: '18f945e8-2dcb-4acc-a4aa-5295734336e1',

    category: 'Comercial',

    title: 'HIGIENIZAÇÃO OFFICE',

    prompt: '{"scene": "4K cinematic scene in a home office. A fabric office chair is deep cleaned with steam to remove stains.", "characters": "Cleaning professional, efficient and calm.", "technical": "4K, Veo 3, 24fps, duration 12s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764367640484-_scene_4k_202511281906_4bkl6.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764367681664.jpg'

  },

  {

    id: 'ee855d47-9b30-4899-a54d-7607100d85cd',

    category: 'Comercial',

    title: 'CURSO ROBOTICA',

    prompt: '{"scene": "4K cinematic classroom. Instructor demonstrates robot arm assembly to students using MacBooks.", "characters": "Female instructor, energetic, early 30s.", "technical": "4K, Veo 3, 24fps, duration 12s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764366643221-_scene_4k_202511281850_4f97n.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764366656306.jpg'

  },

  {

    id: '94fbbde7-49f6-475b-af65-5310e086cfa1',

    category: 'Comercial',

    title: 'CURSO DESIGN',

    prompt: '{"scene": "4K cinematic design classroom. Student uses MacBook to adjust color gradients on a flyer layout.", "characters": "Young Brazilian woman student, creative.", "technical": "4K, Veo 3, 24fps, duration 12s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764366166861-_scene_4k_202511281842_xtjxx.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764366170827.jpg'

  },

  {

    id: 'd6d92a0d-b645-4bf2-a284-fca5941958b3',

    category: 'Comercial',

    title: 'CURSO EXCEL',

    prompt: '{"scene": "4K cinematic professional training. Instructor points to Excel dashboards on a projector screen while students use MacBooks.", "characters": "Brazilian man instructor, early 40s, business-casual.", "technical": "4K, Veo 3, 24fps, duration 12s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764366116318-_scene_4k_202511281841_3f68r.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764366119787.jpg'

  },
  {

    id: 'cf49ce17-4ffc-495b-b99a-bd4584ebf09e',

    category: 'Entrevista',

    title: 'PODCAST MÉDICO',

    prompt: '{"title": "Podcast Interview – Doctor", "description": "A professional doctor sits in a brightly lit talk show-style studio. Logo behind says Health in Focus. Gestures while explaining prevention.", "character": {"name": "Dr. Gustavo Lima", "speech": "Prevencao e o melhor remedio. A gente precisa comecar a cuidar do corpo todos os dias."}, "technical": "4K, medical tones, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761796290939-video-veta-fast-1761796267090.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761796441423.jpg'

  },

  {

    id: 'd66cecff-156f-44b0-9072-77c6b524dbd1',

    category: 'Entrevista',

    title: 'PODCAST PSICOLOGIA',

    prompt: '{"title": "Podcast Interview – Psychologist", "description": "Minimalist studio with purple LED lights. Psychologist sits with good posture, smiling gently and speaking with empathy.", "character": {"name": "Dra. Helena Monteiro", "speech": "Saude mental nao e sobre eliminar emocoes ruins. E sobre aprender a lidar com elas."}, "technical": "4K, neon wall sign, duration 11s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761796095227-video-veta-fast-1761796074990.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761796097681.jpg'

  },

  {

    id: '2227e032-b6c2-49cc-8951-fe92480637f8',

    category: 'Entrevista',

    title: 'PODCAST FISIOTERAPEUTA',

    prompt: '{"title": "Podcast Interview – Physical Therapist", "description": "Interview set up inside a physical therapy clinic. Exercise equipment in background. Doctor speaks with clarity and authority.", "character": {"name": "Dr. Rodrigo Paes", "speech": "A dor nao e o inimigo, ela e o sinal de que algo precisa de atencao."}, "technical": "4K, clinical realism, duration 9s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761795316463-video-veta-fast-1761795290602.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761796080578.jpg'

  },

  {

    id: 'b74ba124-737a-4183-9e73-601fc8dfdc16',

    category: 'Entrevista',

    title: 'PODCAST NUTRICIONISTA',

    prompt: '{"title": "Podcast Interview – Nutrition Expert", "description": "Modern studio with wooden panels and green plants. Nutritionist sits at a round wooden table speaking calmly.", "character": {"name": "Dra. Camila Andrade", "speech": "Se alimentar bem e sobre equilibrio. Comer se torna um ato de autocuidado."}, "technical": "4K, acoustic walls, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761795103833-video-veta-fast-1761795061661.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761795106343.jpg'

  },

  {

    id: '6bb39ab6-fd98-425c-b655-c6777d6f3fb0',

    category: 'Influencer',

    title: 'INFLUENCER FITNESS',

    prompt: '{"title": "UGC Influencer – Gym Mirror", "description": "Dimly lit gym with colored LED strips. Influencer holds supplement container near lens, flexing arm and speaking directly to camera.", "character": {"name": "Felipe", "speech": "Quer treinar com mais foco e energia? Clica aqui e garante o teu agora."}, "technical": "4K, motivational trap beat, duration 8s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761794129251-video-veta-fast-1761794106863.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761794132265.jpg'

  },

  {

    id: '161d7531-fe01-4f7d-bbfe-fc30e814102a',

    category: 'Produto',

    title: 'INFLUENCER FITNESS SUPLEMENTO',

    prompt: '{"title": "UGC Influencer – Product Education", "description": "Modern apartment kitchen. Influencer sits at wooden table with supplement tub beside laptop, explaining product benefits.", "character": {"name": "Andre", "speech": "Esse aqui tem absorcao rapida e ingredientes limpos. Nao e todo suplemento que e igual."}, "technical": "4K, natural light, duration 11s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761793952898-video-veta-fast-1761793921216.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761794113285.jpg'

  },

  {

    id: 'bf8f6f8c-d984-4495-b753-8e8e2d48e91f',

    category: 'Influencer',

    title: 'INFLUENCER FITNESS',

    prompt: '{"title": "UGC Influencer – Outdoor Energy", "description": "Fit man jogging in a sunny park. Stops holding a bottle of supplement capsules, talking while cooling down.", "character": {"name": "Thiago", "speech": "Galera, esse suplemento virou meu parceiro de treino. Me da energia e concentracao."}, "technical": "4K, natural daylight, duration 9s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761793757704-video-veta-fast-1761793722845.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761793763565.jpg'

  },

  {

    id: '76018a1a-f4b5-4dbf-99db-bbdb6b17147e',

    category: 'Produto',

    title: 'INFLUENCER FITNESS PRÉ TREINO',

    prompt: '{"title": "UGC Influencer – Gym Routine", "description": "Gym locker room with neon-blue lighting. Man holding shaker and pre-workout tub, filming in selfie mode.", "character": {"name": "Rafael", "speech": "Antes de treinar nao pode faltar meu pre treino. Esse aqui me da uma energia absurda!"}, "technical": "4K, vlogging style, duration 9s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761793399315-video-veta-fast-1761793372412.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761793402102.jpg'

  },

  {

    id: '5349f907-3968-483e-b048-ee7d43cf7803',

    category: 'Produto',

    title: 'INFLUENCER FURADEIRA',

    prompt: '{"title": "UGC Influencer – Power Screwdriver", "description": "Outdoor demonstration beside hardware store. Customer tests cordless screwdriver on wooden board.", "character": {"name": "Rogerio", "speech": "Rapaz, que potencia! Bateria leve, pratica e carregador rapido. Pode confiar!"}, "technical": "4K, natural daylight, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761792902208-video-veta-fast-1761792879122.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761792906607.jpg'

  },

  {

    id: '21f540e4-b15e-454d-9e06-26dbf29807ae',

    category: 'Produto',

    title: 'INFLUENCER CAIXA FERRAMENTA',

    prompt: '{"title": "UGC Influencer – Toolbox", "description": "Home workshop with wooden walls. Influencer opens red toolbox showing wrenches and screwdrivers.", "character": {"name": "Carlos", "speech": "Boa ferramenta faz toda a diferenca. Essa caixa aqui tem tudo o que voce precisa."}, "technical": "4K, home workshop, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761792471748-_title_ugc_202510292347_lstbb.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761792476243.jpg'

  },

  {

    id: '65b6611d-0082-4411-be0b-78dade358e0a',

    category: 'Produto',

    title: 'INFLUENCER FURADEIRA 2',

    prompt: '{"title": "UGC Influencer – Power Drill", "description": "Construction store aisle. Female influencer holds yellow cordless power drill, demonstrating quality.", "character": {"name": "Leticia", "speech": "Essa furadeira e um espetaculo! Leve, potente e a bateria dura muito."}, "technical": "4K, hardware store vibe, duration 9s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761792243507-_title_ugc_202510292343_suiyk.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761792453672.jpg'

  }


  


  
];
