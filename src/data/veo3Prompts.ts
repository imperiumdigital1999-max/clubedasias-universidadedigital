export interface VEO3Prompt {
  id: string;
  category: string;
  title: string;
  prompt: string;
  videoUrl?: string;
  thumbnailUrl: string;
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
    id: 'v1',
    category: 'Comercial',
    title: 'VENDEDORA PRODUTOS ZERO LACTOSE',
    prompt: '{"scene": "4K cinematic tasting table in a natural store. A small wooden counter displays lactose-free products - milk cartons, yogurt cups, and cheese blocks with clear "Zero Lactose" labels. Soft window light. A blonde woman in casual earth tones stands behind the counter, gesturing naturally at products while speaking to camera. Warm, inviting commercial style."',
    thumbnailUrl: 'https://images.pexels.com/photos/7620842/pexels-photo-7620842.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v2',
    category: 'Comercial',
    title: 'LOJA DE NATURAIS SEM AÇÚCAR',
    prompt: '{"scene": "4K cinematic scene inside a modern natural products store. Shelves with neatly arranged sugar-free products - snack bars, cookies, granola, with visible "Sugar-Free" labels. A woman in a green apron stands among the aisles, demonstrating products with natural hand gestures. Bright overhead lights mixed with natural window light. Clean, professional commercial aesthetic."',
    thumbnailUrl: 'https://images.pexels.com/photos/6740743/pexels-photo-6740743.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v3',
    category: 'Comercial',
    title: 'LOJA DE PRODUTOS NATURAIS',
    prompt: '{"scene": "4K cinematic scene showing a natural products counter where custom formulations are made. Wide wooden counter with jars of herbs, powders, and natural ingredients organized on shelves behind. A woman in an apron carefully measures and mixes ingredients into small containers. Warm pendant lights overhead. Natural, organic aesthetic with earth tones and wooden textures."',
    thumbnailUrl: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v4',
    category: 'Comercial',
    title: 'LOJA DE ESPECIARIAS E TEMPEROS',
    prompt: '{"scene": "4K cinematic scene in a specialty spice shop. Glass jars filled with colorful spices and herbs line wooden shelves - reds, yellows, greens, browns. A woman in dark clothing holds up a jar, examining it in the warm amber light. Cozy, intimate atmosphere with rich colors and aromatic visual texture. Professional commercial lighting."',
    thumbnailUrl: 'https://images.pexels.com/photos/6310909/pexels-photo-6310909.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v5',
    category: 'Comercial',
    title: 'SUPERMERCADO PRODUTOS ORGÂNICOS',
    prompt: '{"scene": "4K cinematic scene in a bright, modern organic grocery store. A woman in casual attire walks through aisles filled with colorful organic produce and packaged goods. She picks up items, reading labels. Natural daylight floods through large windows. Clean, fresh atmosphere with vibrant colors. Wide aisles, organized shelving, professional retail environment."',
    thumbnailUrl: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v6',
    category: 'Comercial',
    title: 'FUNCIONÁRIA LIMPEZA HOTEL',
    prompt: '{"scene": "4K cinematic hotel hallway scene. A woman in a blue cleaning uniform uses a white cloth to carefully clean a dark doorframe. Professional housekeeping cart visible nearby with folded linens and supplies. Soft hallway lighting with beige walls and neutral carpet. Clean, professional service industry aesthetic. Focus on attention to detail and quality work."',
    thumbnailUrl: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v7',
    category: 'Entrevista',
    title: 'ENTREVISTA EMPRESÁRIO CORPORATIVO',
    prompt: '{"scene": "4K cinematic interview setup in modern office. Professional businessman in dark suit sits in ergonomic chair against minimalist background with soft bokeh lights. Natural window light from side creates subtle rim lighting. He speaks directly to camera with confident, relaxed posture. Shallow depth of field. Corporate interview aesthetic with warm color grading."',
    thumbnailUrl: 'https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v8',
    category: 'Entrevista',
    title: 'ENTREVISTA PROFISSIONAL CRIATIVO',
    prompt: '{"scene": "4K cinematic interview in industrial-modern space. Young professional in casual blazer sits on contemporary chair against exposed brick wall with warm Edison bulbs. Natural conversation stance, hands gesturing naturally. Soft three-point lighting creates dimension. Urban-chic aesthetic with balanced natural and artificial light. Warm, inviting tone."',
    thumbnailUrl: 'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v9',
    category: 'Tutorial',
    title: 'TUTORIAL DE MAQUIAGEM',
    prompt: '{"scene": "4K top-down view of beauty station. Hands apply makeup using professional brushes on a face, with organized makeup products, palettes, and tools arranged around the workspace. Bright, even lighting eliminates shadows. Clean white or marble surface. Professional beauty tutorial aesthetic with focus on technique and product."',
    thumbnailUrl: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v10',
    category: 'Tutorial',
    title: 'TUTORIAL CULINÁRIA PASSO A PASSO',
    prompt: '{"scene": "4K overhead shot of cooking tutorial. Hands chop fresh vegetables on wooden cutting board, with ingredients arranged around - colorful produce, olive oil, spices, chef\'s knife. Rustic wooden table surface. Bright, natural kitchen lighting. Focus on knife technique and ingredient preparation. Clean, professional food tutorial aesthetic."',
    thumbnailUrl: 'https://images.pexels.com/photos/4252136/pexels-photo-4252136.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v11',
    category: 'Vlog',
    title: 'VLOG DIÁRIO CASUAL',
    prompt: '{"scene": "4K handheld vlog style in cozy bedroom. Young person sits on bed holding camera at arm\'s length, speaking directly to lens with animated expressions. Soft natural window light creates warm atmosphere. Casual home environment with personal items visible in soft background blur. Authentic, relatable vlog aesthetic with slight camera movement."',
    thumbnailUrl: 'https://images.pexels.com/photos/6942005/pexels-photo-6942005.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v12',
    category: 'Vlog',
    title: 'VLOG DE VIAGEM',
    prompt: '{"scene": "4K travel vlog in scenic outdoor location. Person walks toward camera with landscape behind them, gesturing and talking enthusiastically. Golden hour lighting creates warm glow. Camera stabilization gives smooth, cinematic movement. Beautiful natural background with mountains/water/architecture. Adventurous, inspiring travel content aesthetic."',
    thumbnailUrl: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v13',
    category: 'Produto',
    title: 'PRODUTO TECNOLOGIA PREMIUM',
    prompt: '{"scene": "4K product showcase on minimalist white surface. Sleek tech device (smartphone/tablet/gadget) slowly rotates on turntable with dramatic lighting creating highlights and shadows. Clean white background with subtle gradient. Professional studio lighting emphasizes premium materials and design details. High-end commercial product photography aesthetic."',
    thumbnailUrl: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v14',
    category: 'Produto',
    title: 'PRODUTO COSMÉTICOS',
    prompt: '{"scene": "4K beauty product scene on marble surface. Cosmetic bottles and jars arranged artistically with fresh flowers, green leaves, and natural elements. Soft, diffused lighting creates elegant highlights on glass and packaging. Pastel color palette with white, blush, and gold accents. Luxury beauty commercial aesthetic."',
    thumbnailUrl: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v15',
    category: 'Influencer',
    title: 'INFLUENCER MODA URBANA',
    prompt: '{"scene": "4K fashion content in urban setting. Stylish influencer poses confidently against colorful graffiti wall, wearing trendy outfit. Natural afternoon light. Camera circles slowly around subject. Dynamic poses with attitude. Street style photography aesthetic with vibrant colors and urban edge. Instagram-ready fashion content."',
    thumbnailUrl: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v16',
    category: 'Influencer',
    title: 'INFLUENCER LIFESTYLE CAFÉ',
    prompt: '{"scene": "4K lifestyle content in trendy café. Influencer sits at aesthetic table with latte art coffee, pastry, and laptop. Soft natural window light creates dreamy atmosphere. Casual, candid interaction with environment - sipping coffee, typing, looking out window. Warm, cozy tones. Instagram lifestyle aesthetic with bokeh background."',
    thumbnailUrl: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v17',
    category: 'Bebê',
    title: 'BEBÊ PRIMEIRA EXPLORAÇÃO',
    prompt: '{"scene": "4K intimate home scene on soft carpet. Baby in colorful onesie sits exploring toys with curious expressions - reaching, grabbing, tasting. Soft natural window light creates gentle, warm atmosphere. Parent\'s hands visible offering toys or steady support. Close-up shots capture tiny fingers and expressions of discovery. Sweet, documentary-style family content."',
    thumbnailUrl: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v18',
    category: 'Bebê',
    title: 'BEBÊ APRENDENDO A ANDAR',
    prompt: '{"scene": "4K heartwarming scene in bright living room. Toddler takes wobbly first steps with arms outstretched for balance, moving from furniture toward parent\'s waiting arms. Natural home lighting creates bright, happy atmosphere. Slow motion captures the precious moment. Pure joy and achievement on child\'s face. Authentic family milestone documentation."',
    thumbnailUrl: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v19',
    category: 'Animação',
    title: 'PERSONAGEM 3D EXPLORANDO CIDADE',
    prompt: '{"scene": "4K stylized 3D animation. Cute character with large expressive eyes walks through vibrant cartoon city. Exaggerated proportions, bright saturated colors. Smooth animation with characteristic bounce and stretch. Whimsical architecture with rounded edges. Pixar-style rendering with subsurface scattering and global illumination. Cheerful, family-friendly aesthetic."',
    thumbnailUrl: 'https://images.pexels.com/photos/7862381/pexels-photo-7862381.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v20',
    category: 'Animação',
    title: 'MOTION GRAPHICS LOGO',
    prompt: '{"scene": "4K motion graphics animation on black background. Company logo assembles from geometric shapes - circles, triangles, lines - with smooth, satisfying animations. Bright accent colors (blue, green, orange) against dark. Modern, tech-forward aesthetic with clean transitions, particle effects, and light streaks. Professional corporate animation style."',
    thumbnailUrl: 'https://images.pexels.com/photos/7431654/pexels-photo-7431654.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v21',
    category: 'Comédia',
    title: 'SKETCH REAÇÃO EXAGERADA',
    prompt: '{"scene": "4K comedy sketch in home setting. Person reacts with hilariously exaggerated facial expressions and body language to mundane situation - burnt toast, empty fridge, etc. Quick cuts between reactions. Bright, slightly oversaturated colors. Comedic timing with dramatic zoom-ins on face. Fast-paced, meme-worthy content aesthetic."',
    thumbnailUrl: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v22',
    category: 'Comédia',
    title: 'PARÓDIA EXPECTATIVA VS REALIDADE',
    prompt: '{"scene": "4K split-screen comedy format. Left side: glamorous, perfectly lit version with smooth movements and professional setup. Right side: messy, chaotic reality with bad lighting and comedy mishaps. Same action performed differently. Quick cuts between sides emphasize the contrast. Relatable, self-aware humor. Social media comedy aesthetic."',
    thumbnailUrl: 'https://images.pexels.com/photos/6931815/pexels-photo-6931815.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];
