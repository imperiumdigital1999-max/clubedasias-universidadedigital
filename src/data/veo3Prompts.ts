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

  },
  
  {

    id: '6c718da2-ffe2-46c6-8a6a-569b3316a01f',

    category: 'Comédia',

    title: 'GORILA PODCAST',

    prompt: '{"title": "Street Gorilla – Popular Podcast", "description": "Casual podcast set with graffiti walls. Gorilla sits relaxed with humor.", "character": {"species": "gorilla", "clothing": "white t-shirt, flat cap", "speech": "Os caras so falam besteira por ai... eu quero saber e de dinheiro no meu bolso."}, "technical": "Veo 3, urban style, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761103543396-video-veta-ia_-_2025-10-22T002516.330.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761103546593.jpg'

  },

  {

    id: '4981285a-10c3-4f5e-8090-628133e6826e',

    category: 'Comédia',

    title: 'GORILA MOTIVACIONAL',

    prompt: '{"title": "Motivational Gorilla", "description": "Minimalist studio with neon sign SELVA CAST. Gorilla leans toward mic with intense expression.", "character": {"species": "gorilla", "clothing": "black t-shirt", "speech": "Voce nao precisa ser o rei da selva... so precisa acordar antes do leao."}, "technical": "Veo 3, inspirational, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761102929921-video-veta-ia_-_2025-10-22T001446.257.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761102932529.jpg'

  },

  {

    id: '6f035ab6-c5ea-4f16-8798-714ba228ee9b',

    category: 'Comédia',

    title: 'GORILA TRAP',

    prompt: '{"title": "Trap Gorilla", "description": "Neon-lit studio with golden microphone. Gorilla with gold chains leans back in chair.", "character": {"species": "gorilla", "clothing": "leather jacket, gold chains", "speech": "Os humanos fogem da selva do boleto todo mes. Chorando igual crianca mimada."}, "technical": "Veo 3, urban trap, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761102723298-video-veta-ia_-_2025-10-22T001133.017.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761102727067.jpg'

  },

  {

    id: '665c5721-31fe-4b52-999e-4ccb8a0902ea',

    category: 'Comédia',

    title: 'GORILA CEO',

    prompt: '{"title": "Gorilla CEO", "description": "Corporate podcast studio, warm lighting. Gorilla in suit and tie speaks with conviction.", "character": {"species": "gorilla", "clothing": "gray suit, blue tie", "speech": "Eu comecei vendendo bananas na feira... hoje sou dono da floresta."}, "technical": "Veo 3, cinematic business, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761102529990-video-veta-ia_-_2025-10-22T000825.654.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761102535619.jpg'

  },

  {

    id: 'd4577c79-9e5e-4967-8384-dcd99ac446d5',

    category: 'Comercial',

    title: 'CORRETOR QUINTAL',

    prompt: '{"title": "Realtor Backyard Tour", "description": "Realtor in a small backyard with plants. Enthusiastic presentation of the barbecue area.", "character": {"gender": "male", "speech": "Pra quem gosta de espaco, esse quintal aqui e perfeito - cabe churrasqueira e ate rede."}, "technical": "Veo 3, handheld daylight, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761102034461-video-veta-ia_-_2025-10-22T000018.939.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761102043451.jpg'

  },

  {

    id: 'e8b137cd-0dc9-46ad-b18b-1475b574ff78',

    category: 'Comercial',

    title: 'CORRETOR INTERIOR',

    prompt: '{"title": "Cozy House Interior", "description": "Realtor walks through a warm living room, showing homely details and natural light.", "character": {"gender": "male", "clothing": "checkered shirt", "speech": "Essa e aquela casa gostosa, sabe? Bem iluminada e com espaco pra reunir a familia."}, "technical": "Veo 3, tracking shot, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761101904352-video-veta-ia_-_2025-10-21T235805.522.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761101907232.jpg'

  },

  {

    id: 'd19d06a0-0d64-4611-bed9-1a072318c20d',

    category: 'Comercial',

    title: 'CORRETORA APARTAMENTO',

    prompt: '{"title": "Affordable Apartment", "description": "Female realtor in vlog style in front of an apartment complex, smiling and energetic.", "character": {"gender": "female", "speech": "Gente, olha que oportunidade! Apartamento com lazer e financiamento facilitado."}, "technical": "Veo 3, vlog style, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761101703398-video-veta-ia_-_2025-10-21T235436.103.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761101706173.jpg'

  },

  {

    id: '8bed31ca-734a-4be2-9910-6edd8fbb804c',

    category: 'Comercial',

    title: 'CORRETOR LUXO',

    prompt: '{"title": "Luxury Detail Review", "description": "Influencer realtor inside a decorated suite showing high-end finishes and marble details.", "character": {"gender": "male", "speech": "Olha esse acabamento, esses detalhes... e o tipo de imovel que vende sozinho."}, "technical": "Veo 3, dynamic close-up, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761101070293-video-veta-ia_-_2025-10-21T234409.124.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761101073522.jpg'

  },
  {

    id: '3b4a191c-0850-4f79-8b18-8c5f7a5a294d',

    category: 'Influencer',

    title: 'INFLUENCER LOJA DE ÓCULOS',

    prompt: '{"title": "Eyewear Influencer", "description": "Brazilian street scene, young woman in stylish sunglasses holding phone in selfie mode.", "character": {"name": "Bruna", "speech": "Olha esse estilo, gente! Esses modelos tao bombando aqui na Otica Visao Popular!"}, "technical": "Veo 3, handheld selfie, duration 6s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761074861684-video-veta-ia_-_2025-10-21T162714.217.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761074864702.jpg'

  },

  {

    id: 'ddfc498d-e526-45fe-aee2-04644abc69dc',

    category: 'Comercial',

    title: 'PROPAGANDA ÓTICA PROMO',

    prompt: '{"title": "Flash Sale Optical", "description": "Store interior with salesman holding a microphone. Flashing lights and colorful banners.", "character": {"name": "Carlos", "speech": "Ta valendo hoje so! Lente fotossensivel com 50% off na Otica Real! Corre, Brasil!"}, "technical": "Veo 3, sales announcer style, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761074656563-video-veta-ia_-_2025-10-21T162350.770.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761074659702.jpg'

  },

  {

    id: '585c3336-ca2d-4c99-86f4-09b542706626',

    category: 'Comercial',

    title: 'TESTE DE VISÃO ÓTICA',

    prompt: '{"title": "Optical Test Challenge", "description": "Sidewalk storefront. Saleswoman playfully approaches camera holding a Free Vision Test sign.", "character": {"name": "Camila", "speech": "Sera que voce ta enxergando bem mesmo? Vem fazer o teste e ganhar armacao gratis!"}, "technical": "Veo 3, inviting vibe, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761074451537-video-veta-ia_-_2025-10-21T162004.269.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761074456171.jpg'

  },

  {

    id: '2cd292ba-be1f-4480-8108-ebfced489b0b',

    category: 'Comercial',

    title: 'BALCÃO DE ÓTICA',

    prompt: '{"title": "Optical Counter Deal", "description": "Store counter with mirrors. Charismatic vendor leans forward gesturing toward the showcase.", "character": {"name": "Marcos", "speech": "Ta esperando o que? Aqui na Otica Nacional tem lente e armacao com desconto de verdade!"}, "technical": "Veo 3, realistic retail, duration 6s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761074245779-video-veta-ia_-_2025-10-21T161642.431.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761074249481.jpg'

  },

  {

    id: '1f66000f-30eb-43c5-8c66-89e3280660ee',

    category: 'Comercial',

    title: 'SELFIE NA ÓTICA',

    prompt: '{"title": "Optical Store Selfie", "description": "Saleswoman walks through aisles full of frames in selfie-style greeting the viewers.", "character": {"name": "Vanessa", "speech": "Aqui na Otica do Povo o atendimento e nota dez e o preco e de amigo! Vem conferir!"}, "technical": "Veo 3, casual reel style, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761074052362-video-veta-ia_-_2025-10-21T161342.242.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761074057814.jpg'

  },

  {

    id: '572555c0-ca3f-4606-b017-e494bd85343b',

    category: 'Comercial',

    title: 'PROMOÇÃO FACHADA ÓTICA',

    prompt: '{"title": "Street Promo Salesman", "description": "Busy sidewalk storefront with banners. Lively salesman shouts excitedly to the camera.", "character": {"name": "Joao", "speech": "Promocao ta pegando fogo! Armacoes a partir de 99 reais, corre que e so hoje!"}, "technical": "Veo 3, dynamic handheld, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761073846652-video-veta-ia_-_2025-10-21T161001.981.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761073851127.jpg'

  },

  {

    id: '261c12f1-db34-43a2-a273-1414875df33b',

    category: 'Comercial',

    title: 'ÓTICA MODERNA',

    prompt: '{"title": "Elegant Optical Store", "description": "Modern store with glass shelves. Saleswoman in white blouse gestures toward designer frames.", "character": {"name": "Carla", "speech": "Aqui voce sai enxergando melhor e ainda mais estiloso. Vem escolher o seu!"}, "technical": "Veo 3, cinematic lighting, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761072890603-video-veta-ia_-_2025-10-21T155407.997.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761072895039.jpg'

  },

  {

    id: '980b66a4-5797-498d-a923-8d71de792b2a',

    category: 'Bebê',

    title: 'BEBÊ CEO',

    prompt: '{"title": "Baby Mini CEO", "description": "Baby in oversized suit in a modern office. Serious focus contrasting with adorable voice.", "character": {"name": "Pequeno Empresario", "speech": "Eu so copiei o prompt, colei no VEO3 e em menos de 1 minuto o video tava pronto."}, "technical": "Veo 3, humorous cinematic, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761011730679-video-veta-ia_-_2025-10-20T225521.389.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761011734551.jpg'

  },

  {

    id: '0debb3ef-9a1c-44c2-b635-77d2f8bfdb67',

    category: 'Bebê',

    title: 'CRIANÇA NO PÔNEI',

    prompt: '{"title": "Baby on Pony Expert", "description": "Baby sitting on a small pony in a sunny backyard. Confident and playful posture.", "character": {"name": "Pequeno Genio", "speech": "No Prompt Viral tem mais de 800 prompts assim, tudo testado pra funcionar."}, "technical": "Veo 3, warm natural light, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761011493048-video-veta-ia_-_2025-10-20T225100.292.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761011496052.jpg'

  },

  {

    id: '87b83704-622f-4308-8b2c-111e78f9b205',

    category: 'Influencer',

    title: 'REPÓRTER SUPER-HEROÍNA',

    prompt: '{"title": "Superhero Reporter", "description": "Busy city street. Reporter dressed as Wonder Woman holding a microphone and gesturing.", "character": {"name": "Reporter Camila", "speech": "Esse e o aplicativo de prompts mais poderoso que eu ja testei pro VEO 3."}, "technical": "Veo 3, urban energetic, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1761011295668-video-veta-ia_-_2025-10-20T224752.342.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1761011467771.jpg'

  },
  
  {

    id: '3eec5b43-cde1-4290-b122-45caf82ae347',

    category: 'Bebê',

    title: 'BEBÊ NO PORSCHE',

    prompt: '{"title": "Baby Test Drives Porsche", "description": "Baby in oversized sunglasses sitting in the driver seat of a luxury Porsche.", "character": {"name": "Enzo", "speech": "Rapaz, carrinho aqui e rapido mesmo em, pode comprar pra mim papai que eu vou voar!"}, "technical": "Veo 3, internal car shot, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760469033656-_title_baby_202510141610_6du7l.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760469036463.jpg'

  },

  {

    id: 'c1245c42-e18f-4654-87e7-3b1dbc9f2030',

    category: 'Bebê',

    title: 'BEBÊ EM REUNIÃO',

    prompt: '{"title": "Baby on Serious Call", "description": "Baby lying on a playmat with sunglasses holding a toy phone to his ear.", "character": {"name": "Caio", "speech": "Alo? Num posso agora, to em reuniao! Manda uma mensagem no zap que eu retorno."}, "technical": "Veo 3, playful low angle, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760468319932-_title_baby_202510141558_vft7n.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760468321954.jpg'

  },

  {

    id: '07b6f25d-e94a-4763-b48b-917bb1c26298',

    category: 'Bebê',

    title: 'BEBÊ JUIZ',

    prompt: '{"title": "Baby Judge Courtroom", "description": "Cardboard courtroom scene. Baby in a towel robe slams a plastic gavel.", "character": {"name": "Juiz Theo", "speech": "Ta preso! O papai nao deixou eu comer doce no almoco, agora vai ficar preso!"}, "technical": "Veo 3, dramatic zoom-in, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760468289645-_title_baby_202510141557_wt18x.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760468293358.jpg'

  },

  {

    id: 'ab5060ee-a2c3-407d-ba54-6842556b9596',

    category: 'Comédia',

    title: 'SENHORA NO SUPERMERCADO',

    prompt: '{"title": "Grocery Store Complaint", "description": "Elderly woman in a supermarket line shaking her head at light shopping bags.", "character": {"name": "Dona Neide", "speech": "Com 100 reais na minha epoca eu levava o mercado inteiro, hoje so duas sacolinha."}, "technical": "Veo 3, relatable humor, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760467134752-_title_grocery_202510141538_1d7cc.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760467138279.jpg'

  },

  {

    id: '61668500-deb9-4fcb-9323-47fc908bb0d9',

    category: 'Influencer',

    title: 'SENHORA NO FOGÃO A LENHA',

    prompt: '{"title": "Mineira Wood Stove", "description": "Rustic kitchen in Minas Gerais. Elderly woman stirring a pot on a wood-burning stove.", "character": {"name": "Dona Geralda", "speech": "Aqui e tudo feito no tempo certo, com lenha, fe e muito amor. Comida de verdade!"}, "technical": "Veo 3, warm nostalgic lighting, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760467092121-_title_mineira_202510141537_kl5sb.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760467095669.jpg'

  },

  {

    id: 'ccbb1cea-5a52-4e77-bff6-e3120c999821',

    category: 'Comédia',

    title: 'SENHORA LIMPANDO CHÃO',

    prompt: '{"title": "Dona Cida Cleaning", "description": "Cozy living room. Woman energetically mopping the floor and pausing to talk.", "character": {"name": "Dona Cida", "speech": "Aqui e forca no braco e fe no coracao! Pra limpar essa sujeira so tendo forca!"}, "technical": "Veo 3, spirited forro rhythm, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760467047021-_title_dona_202510141537_umgs2.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760467052409.jpg'

  },

  {

    id: '84a9b277-88b1-46f4-9286-ebd94bf1252d',

    category: 'Comédia',

    title: 'SENHORA CONSELHEIRA',

    prompt: '{"title": "Homemaker Advice", "description": "Clean cozy kitchen. Cheerful woman in a colorful apron with hands on her waist.", "character": {"name": "Dona Cida", "speech": "Se a vida da limao, a gente tempera o feijao e segue em frente, ne meu filho?"}, "technical": "Veo 3, authentic homey vibe, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760466714521-_title_everyday_202510141531_3hh0v.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760466717887.jpg'

  },

  {

    id: 'e5b66cac-5dd9-405f-99f0-aedf89176777',

    category: 'Comercial',

    title: 'MENSAGEM PROFESSORA',

    prompt: '{"title": "Elementary Teacher", "description": "Colorful classroom. Passionate teacher stands in front of smiling students.", "character": {"name": "Professora Camila", "speech": "Ensinar e mais que falar, e conectar, inspirar e transformar a vida desses pequenos."}, "technical": "Veo 3, inspiring atmosphere, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760466548288-_title_elementary_202510141528_akxqx.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760466551544.jpg'

  },
  
  {

    id: 'ca20e7d7-d80d-46b6-8c43-7092d9dbd6cd',

    category: 'Animação',

    title: 'ANIMAÇÃO PIXAR TESOURO',

    prompt: '{"title": "Pixar Adventure Treasure", "description": "3D animated character in Pixar style standing in a lush jungle opening a glowing treasure chest.", "character": {"name": "Explorer", "speech": "Achei o ouro, agora sei como ganhar dinheiro com esses videos"}, "technical": "Veo 3, Pixar 3D style, 4K resolution"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1757095297148-ouo0391kn8p.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-ca20e7d7-d80d-46b6-8c43-7092d9dbd6cd.jpg'

  },

  {

    id: '2a78010b-5d1e-43af-a801-e262ad2cd3df',

    category: 'Comédia',

    title: 'BEBÊ ROBÔ SARCÁSTICO',

    prompt: '{"title": "Mischievous Baby Robot Pajamas", "description": "Realistic newborn lying in a crib with robot pajamas delivering a sarcastic line with lip-sync.", "character": {"name": "Baby", "speech": "Eu gosto de chorar a noite toda so pra minha mamae ficar acordada aqui comigo"}, "technical": "Veo 3, precise lip-sync, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1757095139811-iy7g2myw8yr.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-2a78010b-5d1e-43af-a801-e262ad2cd3df.jpg'

  },

  {

    id: '58321f8c-ef87-47ea-abdd-16fca159fb4c',

    category: 'Animação',

    title: 'ANIMAÇÃO PIXAR ROOFTOP',

    prompt: '{"title": "Lucas Pixar Rooftop", "description": "Pixar-style man on a realistic rooftop at sunset. Modern city skyline in the background.", "character": {"name": "Lucas", "speech": "Hoje eu vou conversar com alguem que largou tudo pra viver de animacoes 3D!"}, "technical": "Veo 3, golden hour lighting, duration 8s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1757095026872-kg8tiv8vda.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-58321f8c-ef87-47ea-abdd-16fca159fb4c.jpg'

  },

  {

    id: '9957865e-57da-4f85-b4b2-df7fac7cdcee',

    category: 'Tutorial',

    title: 'NATAL PAPAI NOEL CORREDOR',

    prompt: '{"title": "Santa Quiet Delivery", "description": "Apartment hallway at night. Santa kneels to place a red gift by a door and whispers to camera.", "character": {"name": "Papai Noel", "speech": "O melhor presente e aquele que vem com carinho, nao com preco."}, "technical": "Veo 3, warm cinematic whisper, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760967882916-video-veta-ia_-_2025-10-20T104404.313.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760967885658.jpg'

  },

  {

    id: 'd1a19852-065d-433d-975a-9bc9626d7510',

    category: 'Tutorial',

    title: 'NATAL PAPAI NOEL POLTRONA',

    prompt: '{"title": "Santa at Home", "description": "Santa sitting in a large armchair near a fireplace reading letters and speaking warmly.", "character": {"name": "Papai Noel", "speech": "Todo ano eu recebo milhoes de pedidos... mas o mais bonito e o desejo de estar junto."}, "technical": "Veo 3, cozy fireplace lighting, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760926040294-video-veta-ia_-_2025-10-19T230632.936.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760926043360.jpg'

  },

  {

    id: 'aa6d0d8a-9a5b-4a2b-a70d-da6c957a0c99',

    category: 'Tutorial',

    title: 'NATAL PAPAI NOEL RUA',

    prompt: '{"title": "Urban Santa Christmas", "description": "Busy city street with Christmas lights. Santa rings a bell and talks to the camera with joy.", "character": {"name": "Papai Noel", "speech": "Olha ao redor... o Natal ta por toda parte! O melhor presente e o sorriso das pessoas."}, "technical": "Veo 3, authentic urban festive, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760925760219-video-veta-ia_-_2025-10-19T230221.850.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760925763740.jpg'

  },

  {

    id: '68944552-e5aa-4d80-ab0c-c64edc939a1c',

    category: 'Tutorial',

    title: 'NATAL PAPAI NOEL SHOPPING',

    prompt: '{"title": "Mall Santa Cheer", "description": "Bright shopping mall with large tree. Santa waves and speaks happily to families.", "character": {"name": "Papai Noel", "speech": "O Natal ta chegando! Que tal espalhar um pouquinho de alegria por ai tambem?"}, "technical": "Veo 3, smooth lateral tracking, duration 7s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1760925592261-video-veta-ia_-_2025-10-19T225940.499.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1760925596775.jpg'

  }






  




  


  
];
