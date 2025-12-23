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

  }


  
];
