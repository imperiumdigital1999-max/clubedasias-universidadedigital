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
  id: 'f5f59405-b01f-4581-ba31-67aee723cf77',
  category: 'Comercial',
  title: 'VENDEDORA PRODUTOS ZERO LACTOSE',
  prompt: '{ "scene": "4K cinematic tasting table in a natural store. A small wooden counter displays zero-lactose cheeses and yogurts. The lighting is warm and inviting with clean product placement.", "characters": [ { "name": "Natural Foods Specialist", "description": "Brazilian woman in her early 30s, friendly, wearing a light-beige apron.", "actions": [ "Slices a piece of zero-lactose cheese and offers it forward.", "Shows packaging details emphasizing benefits.", "Laughs lightly as she interacts with a customer off-frame.", "Faces the camera to deliver her line with sincerity." ], "speech": "Quem tem intolerância sabe o sofrimento. Por isso escolhemos produtos zero lactose que realmente entregam sabor e leveza.", "voice": "Brazilian Portuguese voice, empathic, soft and genuine." } ], "environment": { "location": "Tasting corner of a natural products store.", "details": "Cheese board, samples, eco packaging, small plants, rustic wood textures." }, "camera": { "angle": "Close-up on the cheese being served, then tilt up to the seller’s face.", "movement": "Soft push-in toward the tasting table for a welcoming feel.", "focus": "Sharp on product, soft on background shelves." }, "audio": { "dialogue": "Quem tem intolerância sabe o sofrimento. Por isso escolhemos produtos zero lactose que realmente entregam sabor e leveza.", "ambient": "Light acoustic music, soft talking in background, utensil sounds." }, "technical": { "resolution": "4K", "model": "Veo 3", "style": "Cinematic zero-lactose tasting scene", "frame_rate": "24fps", "duration": "10–11 seconds" }, "negative_prompts": [ "no exaggerated mess", "no harsh shadows", "no dirty table", "no subtitles" ], "mood": "Calm, warm, healthy." }',
  video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764369016159-_scene_4k_202511281929_g20wk.mp4',
  thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764369018585.jpg'
},
  {
    id: 'v2',
    category: 'Comercial',
    title: 'LOJA DE NATURAIS SEM AÇÚCAR',
    prompt: '{"scene": "4K cinematic scene inside a modern natural products store. Shelves with neatly arranged sugar-free products - snack bars, cookies, granola, with visible "Sugar-Free" labels. A woman in a green apron stands among the aisles, demonstrating products with natural hand gestures. Bright overhead lights mixed with natural window light. Clean, professional commercial aesthetic."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/5207208/5207208-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/6740743/pexels-photo-6740743.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v3',
    category: 'Comercial',
    title: 'LOJA DE PRODUTOS NATURAIS',
    prompt: '{"scene": "4K cinematic scene showing a natural products counter where custom formulations are made. Wide wooden counter with jars of herbs, powders, and natural ingredients organized on shelves behind. A woman in an apron carefully measures and mixes ingredients into small containers. Warm pendant lights overhead. Natural, organic aesthetic with earth tones and wooden textures."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/6894187/6894187-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v4',
    category: 'Comercial',
    title: 'LOJA DE ESPECIARIAS E TEMPEROS',
    prompt: '{"scene": "4K cinematic scene in a specialty spice shop. Glass jars filled with colorful spices and herbs line wooden shelves - reds, yellows, greens, browns. A woman in dark clothing holds up a jar, examining it in the warm amber light. Cozy, intimate atmosphere with rich colors and aromatic visual texture. Professional commercial lighting."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/6893882/6893882-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/6310909/pexels-photo-6310909.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v5',
    category: 'Comercial',
    title: 'SUPERMERCADO PRODUTOS ORGÂNICOS',
    prompt: '{"scene": "4K cinematic scene in a bright, modern organic grocery store. A woman in casual attire walks through aisles filled with colorful organic produce and packaged goods. She picks up items, reading labels. Natural daylight floods through large windows. Clean, fresh atmosphere with vibrant colors. Wide aisles, organized shelving, professional retail environment."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v6',
    category: 'Comercial',
    title: 'FUNCIONÁRIA LIMPEZA HOTEL',
    prompt: '{"scene": "4K cinematic hotel hallway scene. A woman in a blue cleaning uniform uses a white cloth to carefully clean a dark doorframe. Professional housekeeping cart visible nearby with folded linens and supplies. Soft hallway lighting with beige walls and neutral carpet. Clean, professional service industry aesthetic. Focus on attention to detail and quality work."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/6195393/6195393-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v7',
    category: 'Entrevista',
    title: 'ENTREVISTA EMPRESÁRIO CORPORATIVO',
    prompt: '{"scene": "4K cinematic interview setup in modern office. Professional businessman in dark suit sits in ergonomic chair against minimalist background with soft bokeh lights. Natural window light from side creates subtle rim lighting. He speaks directly to camera with confident, relaxed posture. Shallow depth of field. Corporate interview aesthetic with warm color grading."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/5989925/5989925-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v8',
    category: 'Entrevista',
    title: 'ENTREVISTA PROFISSIONAL CRIATIVO',
    prompt: '{"scene": "4K cinematic interview in industrial-modern space. Young professional in casual blazer sits on contemporary chair against exposed brick wall with warm Edison bulbs. Natural conversation stance, hands gesturing naturally. Soft three-point lighting creates dimension. Urban-chic aesthetic with balanced natural and artificial light. Warm, inviting tone."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/7579475/7579475-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v9',
    category: 'Tutorial',
    title: 'TUTORIAL DE MAQUIAGEM',
    prompt: '{"scene": "4K top-down view of beauty station. Hands apply makeup using professional brushes on a face, with organized makeup products, palettes, and tools arranged around the workspace. Bright, even lighting eliminates shadows. Clean white or marble surface. Professional beauty tutorial aesthetic with focus on technique and product."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/3997991/3997991-uhd_2560_1440_24fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v10',
    category: 'Tutorial',
    title: 'TUTORIAL CULINÁRIA PASSO A PASSO',
    prompt: '{"scene": "4K overhead shot of cooking tutorial. Hands chop fresh vegetables on wooden cutting board, with ingredients arranged around - colorful produce, olive oil, spices, chef\'s knife. Rustic wooden table surface. Bright, natural kitchen lighting. Focus on knife technique and ingredient preparation. Clean, professional food tutorial aesthetic."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/4252138/4252138-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/4252136/pexels-photo-4252136.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v11',
    category: 'Vlog',
    title: 'VLOG DIÁRIO CASUAL',
    prompt: '{"scene": "4K handheld vlog style in cozy bedroom. Young person sits on bed holding camera at arm\'s length, speaking directly to lens with animated expressions. Soft natural window light creates warm atmosphere. Casual home environment with personal items visible in soft background blur. Authentic, relatable vlog aesthetic with slight camera movement."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/5532782/5532782-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/6942005/pexels-photo-6942005.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v12',
    category: 'Vlog',
    title: 'VLOG DE VIAGEM',
    prompt: '{"scene": "4K travel vlog in scenic outdoor location. Person walks toward camera with landscape behind them, gesturing and talking enthusiastically. Golden hour lighting creates warm glow. Camera stabilization gives smooth, cinematic movement. Beautiful natural background with mountains/water/architecture. Adventurous, inspiring travel content aesthetic."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/3196036/3196036-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v13',
    category: 'Produto',
    title: 'PRODUTO TECNOLOGIA PREMIUM',
    prompt: '{"scene": "4K product showcase on minimalist white surface. Sleek tech device (smartphone/tablet/gadget) slowly rotates on turntable with dramatic lighting creating highlights and shadows. Clean white background with subtle gradient. Professional studio lighting emphasizes premium materials and design details. High-end commercial product photography aesthetic."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/3945007/3945007-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v14',
    category: 'Produto',
    title: 'PRODUTO COSMÉTICOS',
    prompt: '{"scene": "4K beauty product scene on marble surface. Cosmetic bottles and jars arranged artistically with fresh flowers, green leaves, and natural elements. Soft, diffused lighting creates elegant highlights on glass and packaging. Pastel color palette with white, blush, and gold accents. Luxury beauty commercial aesthetic."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/7755216/7755216-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v15',
    category: 'Influencer',
    title: 'INFLUENCER MODA URBANA',
    prompt: '{"scene": "4K fashion content in urban setting. Stylish influencer poses confidently against colorful graffiti wall, wearing trendy outfit. Natural afternoon light. Camera circles slowly around subject. Dynamic poses with attitude. Street style photography aesthetic with vibrant colors and urban edge. Instagram-ready fashion content."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/3196599/3196599-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v16',
    category: 'Influencer',
    title: 'INFLUENCER LIFESTYLE CAFÉ',
    prompt: '{"scene": "4K lifestyle content in trendy café. Influencer sits at aesthetic table with latte art coffee, pastry, and laptop. Soft natural window light creates dreamy atmosphere. Casual, candid interaction with environment - sipping coffee, typing, looking out window. Warm, cozy tones. Instagram lifestyle aesthetic with bokeh background."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/3740393/3740393-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v17',
    category: 'Bebê',
    title: 'BEBÊ PRIMEIRA EXPLORAÇÃO',
    prompt: '{"scene": "4K intimate home scene on soft carpet. Baby in colorful onesie sits exploring toys with curious expressions - reaching, grabbing, tasting. Soft natural window light creates gentle, warm atmosphere. Parent\'s hands visible offering toys or steady support. Close-up shots capture tiny fingers and expressions of discovery. Sweet, documentary-style family content."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/6895034/6895034-uhd_2560_1440_30fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v18',
    category: 'Bebê',
    title: 'BEBÊ APRENDENDO A ANDAR',
    prompt: '{"scene": "4K heartwarming scene in bright living room. Toddler takes wobbly first steps with arms outstretched for balance, moving from furniture toward parent\'s waiting arms. Natural home lighting creates bright, happy atmosphere. Slow motion captures the precious moment. Pure joy and achievement on child\'s face. Authentic family milestone documentation."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/3196085/3196085-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v19',
    category: 'Animação',
    title: 'PERSONAGEM 3D EXPLORANDO CIDADE',
    prompt: '{"scene": "4K stylized 3D animation. Cute character with large expressive eyes walks through vibrant cartoon city. Exaggerated proportions, bright saturated colors. Smooth animation with characteristic bounce and stretch. Whimsical architecture with rounded edges. Pixar-style rendering with subsurface scattering and global illumination. Cheerful, family-friendly aesthetic."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/7534193/7534193-uhd_2560_1440_24fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/7862381/pexels-photo-7862381.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v20',
    category: 'Animação',
    title: 'MOTION GRAPHICS LOGO',
    prompt: '{"scene": "4K motion graphics animation on black background. Company logo assembles from geometric shapes - circles, triangles, lines - with smooth, satisfying animations. Bright accent colors (blue, green, orange) against dark. Modern, tech-forward aesthetic with clean transitions, particle effects, and light streaks. Professional corporate animation style."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/7431654/pexels-photo-7431654.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v21',
    category: 'Comédia',
    title: 'SKETCH REAÇÃO EXAGERADA',
    prompt: '{"scene": "4K comedy sketch in home setting. Person reacts with hilariously exaggerated facial expressions and body language to mundane situation - burnt toast, empty fridge, etc. Quick cuts between reactions. Bright, slightly oversaturated colors. Comedic timing with dramatic zoom-ins on face. Fast-paced, meme-worthy content aesthetic."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/4587955/4587955-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v22',
    category: 'Comédia',
    title: 'PARÓDIA EXPECTATIVA VS REALIDADE',
    prompt: '{"scene": "4K split-screen comedy format. Left side: glamorous, perfectly lit version with smooth movements and professional setup. Right side: messy, chaotic reality with bad lighting and comedy mishaps. Same action performed differently. Quick cuts between sides emphasize the contrast. Relatable, self-aware humor. Social media comedy aesthetic."',
    video_exemplo_url: 'https://videos.pexels.com/video-files/5699463/5699463-uhd_2560_1440_25fps.mp4',
    thumbnail_url: 'https://images.pexels.com/photos/6931815/pexels-photo-6931815.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {

    id: 'f5f59405-b01f-4581-ba31-67aee723cf77',

    category: 'Comercial',

    title: 'VENDEDORA PRODUTOS ZERO LACTOSE',

    prompt: '{"scene": "4K cinematic tasting table in a natural store. A small wooden counter displays zero-lactose cheeses and yogurts. The lighting is warm and inviting with clean product placement. A friendly specialist offers samples and smiles.", "characters": "Brazilian woman specialist, friendly, wearing a light-beige apron.", "technical": "4K, Veo 3, 24fps, duration 10s"}',

    video_exemplo_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764369016159-_scene_4k_202511281929_g20wk.mp4',

    thumbnail_url: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764369018585.jpg'

  },

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
