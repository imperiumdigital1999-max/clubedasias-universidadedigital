import React, { useState } from 'react';
import { MessageSquare, ArrowLeft, Search, Copy, Eye, X } from 'lucide-react';
import VEO3View from './VEO3View';

export default function PromptsView() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<any | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // TAGs exatamente como especificado
  const promptTags = [
    'COMANDOS GPT',
    'ENSAIO FOTOGRÁFICO',
    'IMAGENS DESENHO AQUARELA',
    'IMAGENS EM VIDRO',
    'IMAGENS ESTILO CARTOON',
    'IMAGENS ESTILO PIXAR 3D',
    'IMAGENS FIGURINHAS / ADESIVOS',
    'IMAGENS GHIBLI',
    'IMAGENS LOGOS / NOMES',
    'IMAGENS MINIATURAS',
    'IMAGENS ÓLEO ACRÍLICO',
    'IMAGENS PARA CRIATIVOS DE ANÚNCIOS',
    'IMAGENS PRODUTOS',
    'IMAGENS SURREALISMO / FANTASIA',
    'IMAGENS TIRINHAS',
    'IMAGENS ULTRA REALISMO',
    'NANO AI STUDIO',
    'VÍDEOS CURTOS',
    'VÍDEOS VEO 3'
  ];

  const allPrompts = [
    {
      id: '1',
      tag: 'ENSAIO FOTOGRÁFICO',
      title: 'Retrato Editorial 8K',
      description: 'Crie um retrato fotográfico editorial em 8K ultra-realista, seguindo 100% o modelo da imagem de refe...',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      fullPrompt: 'Crie um retrato fotográfico editorial em 8K ultra-realista, seguindo 100% o modelo da imagem de referência. O modelo deve estar sentado em uma cadeira elegante, com iluminação profissional de estúdio, fundo neutro, pose confiante e expressão séria. Utilize equipamentos de iluminação visíveis no cenário, como softboxes e tripés. A composição deve ser centralizada, com foco nítido no modelo e ligeiro desfoque no fundo.'
    },
    {
      id: '2',
      tag: 'ENSAIO FOTOGRÁFICO',
      title: 'Fotografia PB Studio',
      description: 'Create an 8K ultra-realistic black-and-white studio photograph in 1080x1440 format, replicating 100%...',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop',
      fullPrompt: 'Create an 8K ultra-realistic black-and-white studio photograph in 1080x1440 format, replicating 100% the model from the reference image. The model should be standing in a confident pose, wearing a dark suit, with professional studio lighting creating dramatic shadows. The background should be clean and minimalist, with the model positioned slightly off-center for dynamic composition.'
    },
    {
      id: '3',
      tag: 'ENSAIO FOTOGRÁFICO',
      title: 'Editorial Cinematográfico',
      description: 'Create an 8K ultra-realistic cinematic editorial photo, 1080x1440, replicating 100% the model from t...',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop',
      fullPrompt: 'Create an 8K ultra-realistic cinematic editorial photo, 1080x1440, replicating 100% the model from the reference image. The scene should feature the model in an urban environment at golden hour, with a majestic eagle perched on their arm. The composition should be dramatic and cinematic, with the city skyline in the background and warm, natural lighting.'
    },
{
    id: 'ae3ca5db-9fac-4e4f-b69f-712ea6533674',
    tag: 'ENSAIO FOTOGRÁFICO',
    title: 'Retrato Editorial Minimalista',
    description: 'Retrato 8K ultra-realista em estúdio minimalista com iluminação suave e tons monocromáticos.',
    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1762569894868-generated-image-november-07-2025---11_44pm.png',
    fullPrompt: 'Crie um retrato fotográfico editorial em 8K ultra-realista, seguindo 100% o modelo da imagem de referência enviada — preservando fielmente rosto, cabelo, tom de pele, expressão e proporções corporais.\n\nComposição e pose: homem jovem sentado de forma descontraída em uma poltrona de design minimalista, pernas cruzadas com o tornozelo direito apoiado sobre o joelho esquerdo. Braço esquerdo apoiado no braço da poltrona, mão direita repousando na coxa, ombros relaxados. Olhar direto para a câmera com expressão firme, confiante e levemente desafiadora.\n\nVestuário e estilo: suéter de malha grossa com zíper em tom cinza-escuro, camiseta preta simples por baixo, calça preta de corte reto e sapatos sociais pretos com acabamento fosco.\n\nIluminação: esquema de iluminação de estúdio com dois refletores profissionais visíveis em cada lateral. A luz principal é suave e neutra, criando um efeito de preto e branco natural, com contrastes sutis e sombreamento elegante. Um leve halo de luz difusa no fundo reforça a profundidade e destaca a silhueta.\n\nCenário e atmosfera: estúdio minimalista com piso e paredes cinza claro, propositalmente vazio, exceto pelos dois refletores de tripé visíveis e cabos discretos. No alto, linhas sutis do teto industrial, trazendo sensação de espaço amplo e clean.\n\nSensação transmitida: elegância moderna, confiança urbana e estilo fashion editorial, com um toque de rebeldia minimalista.\n\nDetalhes técnicos: lente 85 mm f/1.4, profundidade de campo média, foco absoluto no modelo, textura realista de pele e tecido, gradação suave entre luz e sombra, acabamento em tons monocromáticos.\n\nEstilo final: fotografia editorial em preto e branco, estética de revista de alta moda, com clima contemporâneo e atemporal.'
  },
  {
    id: 'c3c3bcd0-37b0-43d0-80a1-ed4d4126436b',
    tag: 'ENSAIO FOTOGRÁFICO',
    title: 'Perfil Editorial de Luxo',
    description: 'Fotografia P&B em estúdio de alta moda, capturando elegância clássica em perfil total.',
    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1762569828627-generated-image-november-07-2025---11_43pm.png',
    fullPrompt: 'Create an 8K ultra-realistic black-and-white studio photograph in 1080×1440 format, replicating 100% the model from the provided reference photo — keeping identical facial features, hairstyle, skin tone (converted to monochrome), body proportions and expression.\n\nComposition & Pose: adult man standing in full profile, both hands in his suit pockets, right leg slightly lifted back as if taking a smooth step. Calm and confident facial expression, gazing straight ahead.\n\nClothing & Style: slim-cut black suit, crisp white dress shirt, polished black dress shoes. Classic and formal high-end fashion.\n\nScene & Lighting: minimalist studio with a seamless light-gray background. Large softbox positioned at the upper right, clearly visible in the frame, casting soft side lighting on the subject. Gentle and precise shadows create elegant contrast. A partial studio divider appears on the left edge, adding authentic studio context.\n\nMood: understated elegance, quiet introspection and professional refinement with a clean artistic touch.\n\nTechnical Details: 85 mm lens f/1.4, medium depth of field, extreme sharpness, natural skin and fabric microtextures, high dynamic range black-and-white with cinematic contrast.\n\nFinal Style: modern minimalist editorial photography, suitable for luxury magazine portraits.'
  },
  {
    id: '6773c3ec-5770-43ba-8f28-1cb879e6485f',
    tag: 'ENSAIO FOTOGRÁFICO',
    title: 'Editorial Skyscraper & Eagle',
    description: 'Cena épica em cobertura de arranha-céu com águia real, transmitindo poder e liderança.',
    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1762569788462-generated-image-november-07-2025---11_42pm-1.png',
    fullPrompt: 'Create an 8K ultra-realistic cinematic editorial photo, 1080×1440, replicating 100% the model from the reference (identical face, hair, beard, expression, proportions).\n\nComposition & Pose: man standing on top of a skyscraper, facing the camera with a slight 3/4 angle. His left arm is raised, wearing a black falconry glove, holding a large golden eagle perched firmly on his forearm. The bird is calm and alert, wings slightly open, staring forward. His right arm rests naturally by his side.\n\nExpression: intense and serious, slightly furrowed brows, strong jawline — conveys power and control.\n\nOutfit: all-black attire — dark shirt, black tailored pants, black boots, and a long black overcoat flowing dynamically in the wind, creating dramatic shapes. Minimalist and powerful look.\n\nEnvironment: rooftop of a skyscraper in a modern city. Urban skyline stretching into the distance, partially covered in soft morning/evening haze. Sun low on the horizon, creating warm cinematic light. Contrails in the sky add compositional depth.\n\nLighting: natural golden-hour backlight, forming a glowing rim around the man and the eagle. Soft reflected fill light illuminates the face. Warm sunlight contrasts beautifully with the dark outfit and the bird\'s feathers.\n\nColors: warm golden and orange sky tones mixed with neutral cool blacks of clothing and cityscape. Cinematic balanced contrast, deep blacks, rich golden light.\n\nMood: conveys power, leadership, freedom, strategic vision. The eagle symbolizes dominance and far-reaching sight. Wind adds movement to the coat and feathers.\n\nTechnical: 35–50 mm lens, f/2.8, medium depth of field, sharp focus on man and eagle, slightly blurred background. High detail on fabric, beard, and feathers. Low ISO, fast shutter (~1/1000 s) to freeze wind motion.\n\nFinal Style: high-end cinematic fashion/hero editorial, vertical format, epic presence, powerful human–nature symbolism.'
  },
  {
    id: '5bd46ead-e449-44d5-845e-c5551c8fa31b',
    tag: 'ENSAIO FOTOGRÁFICO',
    title: 'Ilusionista Editorial P&B',
    description: 'Retrato dramático focado em mistério e presença, com cartas suspensas e iluminação Rembrandt.',
    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1762569744169-generated-image-november-07-2025---11_42pm.png',
    fullPrompt: 'Create an 8K ultra-realistic cinematic editorial portrait, vertical 1080×1440, replicating 100% the model from the reference image — identical face, haircut, thin mustache, skin tone (converted to B&W), expression, hands and body proportions.\n\nFraming & Composition: chest-up vertical portrait, subject slightly right of center, looking straight at camera. Deep black background with a soft vignette.\n\nPose & Hands: right hand holding an Ace of Spades at sternum level; left hand performing a flourish/snap gesture with separated fingers. Subtle veins/tendons visible on hands.\n\nLook & Wardrobe: black turtleneck under a dark blazer with very fine plaid/tweed pattern; hair slicked back with a slight sheen; neat, thin mustache.\n\nFlying Cards (dynamic elements): multiple playing cards suspended around the subject in different depth planes — foreground cards out of focus, mid-plane cards partly sharp, background cards softly blurred.\n\nLighting (high-impact B&W): dramatic low-key setup. Soft key light from camera-right at ~45°, creating a short-lighting/Rembrandt feel. Strong blacks preserved without crushing blazer texture.\n\nTechnical: 85 mm (50–85 mm), f/2.0–f/2.8, critical focus on the eyes and the Ace of Spades; shallow DoF to layer the cards.'
  },
  {
    id: 'bfc68df8-37c2-48e1-b781-e49c8bd66cd5',
    tag: 'ENSAIO FOTOGRÁFICO',
    title: 'Mestre do Xadrez Editorial',
    description: 'Retrato cinematográfico de alta tensão focado em estratégia e domínio mental.',
    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1762569717143-generated-image-november-07-2025---11_41pm-1.png',
    fullPrompt: 'Create an 8K ultra-realistic cinematic editorial portrait, 1080×1440, replicating 100% the model from the reference image — identical face, hair, beard stubble, expression, sunglasses shape, outfit and proportions.\n\nComposition: medium-close shot from a slightly elevated angle (3/4 top), camera pointing slightly downward toward a chessboard. The subject’s face is centered in the upper half, while the chessboard occupies the lower third.\n\nExpression & Pose: intense, focused stare with furrowed brows and closed lips, leaning forward slightly, as if analyzing a decisive move.\n\nLook & Outfit: dark textured hair with volume, short groomed beard. Round dark sunglasses with thin frame. Thick black knit sweater under a dark blazer.\n\nLighting: low-key cinematic black and white. Soft top-left key light creates gentle shadow modeling on the face and chess pieces. Deep black background.\n\nTechnical: 85 mm (50–85), f/2.0–f/2.8, selective focus on face and central chess pieces; shallow depth of field blurs nearby and background pieces.'
  },
    
    {
      id: '4',
      tag: 'IMAGENS GHIBLI',
      title: 'Personagem Estilo Ghibli',
      description: 'Crie uma ilustração no estilo Studio Ghibli com personagem em ambiente mágico e natureza exuberante...',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=300&fit=crop',
      fullPrompt: 'Create a Studio Ghibli style illustration featuring a young character in a magical forest setting. Use soft watercolor textures, warm lighting, and the characteristic Ghibli aesthetic with attention to natural elements, flowing movement, and emotional depth. Include detailed background with lush vegetation, floating particles of light, and a dreamlike atmosphere.'
    },
    {
      id: '5',
      tag: 'IMAGENS GHIBLI',
      title: 'Paisagem Ghibli',
      description: 'Paisagem no estilo Studio Ghibli com campos verdejantes, céu dramático e elementos fantásticos...',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      fullPrompt: 'Create a breathtaking Studio Ghibli-style landscape illustration featuring rolling green hills, a dramatic cloudy sky with rays of sunlight breaking through, and a small cottage in the distance. Use the characteristic Ghibli color palette with vibrant greens, soft blues, and warm golden tones. Include details like wildflowers, a winding path, and birds in the sky.'
    },
    {
      id: '6',
      tag: 'IMAGENS ESTILO PIXAR 3D',
      title: 'Personagem Pixar 3D',
      description: 'Crie um personagem 3D no estilo Pixar com expressões carismáticas e detalhes realistas...',
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
      fullPrompt: 'Create a 3D character in Pixar animation style with exaggerated features, expressive eyes, and charming personality. Use vibrant colors, smooth textures, and proper lighting. The character should have appealing proportions, detailed clothing, and be positioned in a dynamic pose. Render in high quality with attention to subsurface scattering, realistic materials, and cinematic lighting.'
    },
    {
      id: '7',
      tag: 'IMAGENS ESTILO PIXAR 3D',
      title: 'Cenário Pixar',
      description: 'Ambiente 3D estilo Pixar com iluminação cinematográfica e detalhes ricos...',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop',
      fullPrompt: 'Design a Pixar-style 3D environment with rich details, vibrant colors, and cinematic lighting. Include architectural elements, natural features, and atmospheric effects. Use the characteristic Pixar rendering style with global illumination, volumetric lighting, and photorealistic materials balanced with stylized forms.'
    },
    {
      id: '8',
      tag: 'IMAGENS ULTRA REALISMO',
      title: 'Retrato Ultra Realista',
      description: 'Fotografia hiper-realista com detalhes perfeitos de pele, iluminação e textura...',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop',
      fullPrompt: 'Create a hyper-realistic portrait photograph with perfect skin detail, natural lighting, and professional retouching. Capture every detail including pores, fine lines, hair texture, and eye reflections. Use 8K resolution, professional color grading, and cinematic composition. The lighting should be natural and flattering, with proper exposure and dynamic range.'
    },
    {
      id: '9',
      tag: 'IMAGENS ULTRA REALISMO',
      title: 'Natureza Hiper-Realista',
      description: 'Fotografia de natureza com detalhes microscópicos e cores vibrantes ultra-reais...',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
      fullPrompt: 'Capture an ultra-realistic nature photograph with microscopic details, vibrant colors, and perfect clarity. Include elements like water droplets, intricate textures, and natural lighting. Use macro photography techniques, high dynamic range, and professional post-processing to achieve hyper-realistic results.'
    },{
  id: '45514b2e-1baf-4cce-b33d-58b0433576a8',
  tag: 'COMANDOS GPT',
  title: 'Análise e Otimização Estratégica de Campanhas Digitais',
  description: 'Você atuará como Estrategista Sênior de Marketing Digital, especialista em interpretação de dados e otimização de campanhas',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  fullPrompt: 'Você atuará como Estrategista Sênior de Marketing Digital, especialista em interpretação de dados e otimização de campanhas, aplicando técnicas de few-shot learning, refinamento iterativo e priming cognitivo para elaborar um relatório executivo de alta performance.\n\nDiretrizes de execução:\n\nMapeie os KPIs críticos e métricas de desempenho: {{indicadores_campanha}}.\n\nRealize uma análise crítica e holística dos resultados, apontando pontos fortes, gargalos operacionais e oportunidades latentes, sustentando a avaliação com exemplos práticos e contraexemplos para reforço argumentativo.\n\nDefina recomendações estratégicas: {{recomendacoes}}, priorizando-as por impacto potencial, viabilidade e ROI previsto.\n\nEstabeleça um cronograma estruturado para reavaliação periódica e monitoramento contínuo dos efeitos das ações implementadas.\n\nIncorpore representações visuais (gráficos comparativos, dashboards e tabelas sintéticas) para maximizar a clareza e acelerar o processo decisório.\n\nFormato final obrigatório do relatório:\n\nIntrodução – Contextualização e objetivos.\n\nAnálise de Dados – Interpretação aprofundada das métricas.\n\nRecomendações – Ações priorizadas com embasamento analítico.\n\nPlano de Ação – Cronograma, responsáveis e checkpoints de revisão.\n\nO relatório deve ser objetivo, assertivo e orientado à decisão, eliminando redundâncias e maximizando o valor estratégico das informações.'
},
    {
      id: '11',
      tag: 'COMANDOS GPT',
      title: 'Análise e Feedback',
      description: 'Analise o seguinte conteúdo e forneça feedback detalhado e construtivo....',
      image: 'https://clubpromptturbo.lovable.app/assets/example-portrait-B15RP1sB.jpg',
      fullPrompt: 'Analise o seguinte conteúdo e forneça feedback detalhado e construtivo. Organize sua análise em: 1) Pontos fortes, 2) Áreas de melhoria, 3) Sugestões específicas, 4) Exemplos práticos de implementação. Seja objetivo, didático e mantenha um tom encorajador enquanto identifica oportunidades de aprimoramento.'
    },
{
    id: '34bcf023-0f28-4f08-84eb-4fe77f6c435b',
    tag: 'COMANDOS GPT',
    title: 'Otimização de Campanhas de PPC',
    description: 'Atue como um especialista em marketing digital focado',
    image: 'https://www.valuehost.com.br/blog/wp-content/uploads/2024/03/pay-per-click.jpeg.webp',
    fullPrompt: 'Atue como um especialista em marketing digital focado em campanhas de PPC (pay-per-click). Seu desafio é estruturar e otimizar campanhas pagas para promoção de produtos ou serviços, levando em consideração orçamentos e segmentações específicas. Siga os passos abaixo:\n1. Defina qual é o objetivo da campanha, baseando-se na informação de {{objetivo_campanha}}.\n2. Identifique e segmente o público-alvo detalhadamente utilizando os dados fornecidos em {{segmento_publico}}.\n3. Elabore uma proposta de orçamento e distribuição de lances, conforme explicado em {{orcamento_disponivel}}.\n4. Utilize técnicas de few-shot learning e chain-of-thought para prever o comportamento dos cliques e otimizar as taxas de conversão.\n5. Estabeleça critérios de qualidade e métricas de sucesso, como CTR, CPC e ROI, e descreva os ajustes necessários caso os resultados não sejam satisfatórios.\nInclua exemplos práticos e considere possíveis exceções no processo, como sazonalidade e comportamentos atípicos. Garanta que a resposta siga um formato estruturado e claro, demonstrando todas as etapas do processo.'
  },
  {
    id: '12ff71e4-b4ed-4f03-bad5-e62790bd9bc2',
    tag: 'COMANDOS GPT',
    title: 'Definição de Persona e Segmentação de Público',
    description: 'Você assume o papel de um estrategista de marketing com foco',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    fullPrompt: 'Você assume o papel de um estrategista de marketing com foco em análise de público e definição de personas. Seu desafio é desenvolver uma segmentação de público detalhada e criar personas para a empresa {{empresa}}, visando a campanha de {{tipo_campanha}}. Siga os passos abaixo para elaborar uma estratégia robusta:\n1. Realize uma análise minuciosa do mercado e identifique segmentos com alto potencial para {{tipo_campanha}}.\n2. Utilize técnicas avançadas de contextualização de persona e few-shot learning para descrever perfis detalhados, incluindo comportamentos, interesses e necessidades de {{publico}}.\n3. Estruture cada persona com críticas específicas, utilizando bullet points para destacar atributos principais.\n4. Forneça exemplos de personas bem definidas e indique contraexemplos que possam prejudicar a segmentação.\n5. Estabeleça métricas de avaliação, como taxa de conversão e engajamento, e inclua um plano de ação para casos de exceções, como segmentação falha. O texto deve apresentar um mínimo de 150 palavras, demonstrando clareza, objetividade e robustez analítica.'
  },
  {
    id: 'c23d074e-db92-4d84-8a75-5a6cc44bb4bb',
    tag: 'COMANDOS GPT',
    title: 'Conteúdo para Redes Sociais',
    description: 'Você é um criador de conteúdo e estrategista de redes sociais com profundo conhecimento',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    fullPrompt: 'Você é um criador de conteúdo e estrategista de redes sociais com profundo conhecimento em storytelling e engajamento digital. Sua missão é desenvolver um calendário de conteúdo para as redes sociais da marca {{marca}}, abordando temas relevantes para o público-alvo de {{publico}}. Inicie seu trabalho com os seguintes passos:\n1. Defina a persona detalhadamente, orientando a criação de conteúdo que ressoe com as necessidades e aspirações de {{publico}}.\n2. Estruture o calendário de publicações considerando datas estratégicas, eventos e tendências do setor.\n3. Utilize técnicas de priming cognitivo no início de cada postagem para capturar a atenção do leitor.\n4. Apresente exemplos de postagens bem-sucedidas e contraexemplos para evitar erros comuns, reforçando a aplicação de técnicas de few-shot learning.\n5. Estabeleça critérios anatômicos como engajamento, compartilhamentos e feedback qualitativo. Descreva soluções para exceções, como baixa performance de posts, em um texto com no mínimo 150 palavras.'
  },
  {
    id: 'd8e68326-12dc-4d14-b6f1-de748afeaeb1',
    tag: 'COMANDOS GPT',
    title: 'Plano Avançado de Conteúdo para Blogs e SEO',
    description: 'Atue como Estrategista Sênior de Marketing de Conteúdo, especialista em blogs.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    fullPrompt: 'Atue como Estrategista Sênior de Marketing de Conteúdo, especialista em blogs, SEO e fortalecimento de autoridade de marca. Desenvolva um plano estratégico de conteúdo orientado a performance, seguindo as diretrizes abaixo:\n\nMapeamento de Temas e Tópicos-Chave – Identifique assuntos prioritários com base em {{temas_relevantes}} e análise de mercado, contemplando tendências, lacunas de conteúdo e oportunidades de posicionamento orgânico.\n\nPlanejamento Editorial Estratégico – Construa um calendário editorial estruturado, aplicando priming cognitivo para assegurar consistência narrativa, relevância e qualidade em cada publicação.\n\nDesenvolvimento de Conteúdo Premium – Defina um processo robusto de pesquisa e produção, utilizando cadeia de pensamento (chain-of-thought) para articular ideias de forma lógica e persuasiva, além de few-shot learning para gerar exemplos concretos e aplicáveis.\n\nFormatos e Canais de Distribuição – Estabeleça quais formatos (artigos longos, guias, estudos de caso, infográficos, vídeos) serão utilizados e determine os canais de distribuição, detalhando as otimizações de SEO e as estratégias de promoção em cada um.\n\nMétricas e Monitoramento de Performance – Defina indicadores claros como {{engajamento}}, {{autoridade_dominio}} e outros KPIs críticos. Explique protocolos de ajuste rápido para cenários em que os resultados fiquem abaixo do esperado.\n\nFormato final exigido:\n\nIntrodução – Contextualização e objetivo do plano.\n\nEstratégia – Abordagem macro e alinhamento com o posicionamento de marca.\n\nTáticas – Ações específicas, calendário e formatos.\n\nMétricas de Sucesso – Indicadores, métodos de acompanhamento e plano de ajustes.\n\nO relatório deve ser objetivo, orientado a dados e totalmente aplicável, com foco na escalabilidade e no ganho progressivo de autoridade.'
  },
  {
    id: '85cc168c-83ac-4b85-b68c-f728afd50037',
    tag: 'COMANDOS GPT',
    title: 'Planejamento e Execução de Conteúdo de Alto Impacto',
    description: 'tue como Estrategista Sênior de Marketing Digital, especialista em planejamento',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    fullPrompt: 'Atue como Estrategista Sênior de Marketing Digital, especialista em planejamento e execução de conteúdo de alto valor. Desenvolva um plano estratégico de conteúdo totalmente alinhado às demandas de {{empresa}} e capaz de gerar engajamento qualificado junto ao {{público_alvo}}.\n\nDiretrizes de execução:\n\nAnálise de Cenário – Conduza uma avaliação detalhada do mercado e das particularidades do setor de atuação, utilizando matriz SWOT para identificar oportunidades, ameaças, forças e fraquezas.\n\nDefinição de Metas SMART – Estabeleça objetivos claros, mensuráveis e temporalmente definidos (ex.: aumento de visitas em {{percentual_melhoria}}%, crescimento da taxa de conversão de leads, ampliação do tempo médio de permanência).\n\nCalendário Editorial Estratégico – Estruture um plano temático com tópicos de alto impacto, aplicando Few-Shot Learning para gerar ideias originais baseadas em padrões de sucesso, contemplando datas-chave e gatilhos sazonais.\n\nNarrativa Persuasiva – Utilize técnicas de cadeia de pensamento (chain-of-thought) para conectar ideias de forma lógica e criar narrativas que conduzam o público da conscientização à ação.\n\nIncorporação de Benchmarks e Exemplos Práticos – Ilustre recomendações com estudos de caso, boas práticas e contraexemplos que evidenciem erros a evitar.\n\nMétricas e Monitoramento – Defina indicadores de sucesso claros (ex.: tráfego orgânico, engajamento social, CTR, conversão) e crie instruções de revisão periódica para ajustes táticos.\n\nFormato final exigido:\n\nEstrutura em cláusulas numeradas.\n\nLinguagem clara, objetiva e livre de termos vagos.\n\nInclusão de insights de tendências atuais e movimentos emergentes no mercado.\n\nRecomendação de ferramentas e canais ideais para execução.\n\nO resultado final deve ser implementável, mensurável e orientado a maximizar ROI.'
  },
  {
    id: '232bc338-1960-4544-b13a-77703a15da95',
    tag: 'COMANDOS GPT',
    title: 'Arquitetura e Otimização de Funis de E-mail Marketing',
    description: 'Assuma o papel de Consultor Sênior em Marketing Digital, especialista em E-mail ',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
    fullPrompt: 'Assuma o papel de Consultor Sênior em Marketing Digital, especialista em E-mail Marketing de Alta Conversão. Aplique técnicas avançadas de chain-of-thought e contextualização estratégica para desenvolver um plano tático-operacional que maximize a conversão de leads.\n\nInstruções de execução:\n\nDefinir o perfil do público-alvo e a segmentação estratégica: {{segmento_email}}.\n\nArquitetar uma sequência de e-mails persuasiva, iniciando com boas-vindas impactante e evoluindo até oferta final de alto valor, incorporando conteúdo personalizado, gatilhos mentais e CTAs otimizados.\n\nReferenciar benchmarks de campanhas bem-sucedidas e apresentar contraexemplos que evidenciem erros críticos a serem evitados.\n\nEstabelecer KPIs e métricas de performance: {{métricas_email}}, incluindo taxa de abertura, CTR, conversão e engajamento. Definir sistema de monitoramento contínuo com checkpoints claros.\n\nIncluir protocolos de contingência para cenários de baixa entregabilidade ou interação insuficiente, detalhando ações corretivas de alto impacto.\n\nFormato final da resposta:\n\nAnálise e Segmentação – Mapeamento do público e critérios de filtragem.\n\nSequência Estratégica de E-mails – Estrutura, copywriting e cronograma.\n\nBenchmarks e Anti-Modelos – Lições de sucesso e falhas a evitar.\n\nKPIs e Monitoramento – Metodologia de mensuração e acompanhamento.\n\nPlano de Contingência – Resposta a problemas críticos e ajustes rápidos.\n\nA resposta deve ser detalhada, implementável e validada, garantindo consistência, escalabilidade e maximização do ROI.'
  },  
    {
      id: '12',
      tag: 'VÍDEOS CURTOS',
      title: 'Roteiro para Reels/TikTok',
      description: 'Estrutura completa para criar vídeos curtos virais com gancho, desenvolvimento e CTA...',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop',
      fullPrompt: 'Crie um roteiro para vídeo curto (30-60 segundos) sobre [TEMA]. Estruture da seguinte forma: GANCHO (3s): Frase impactante para parar o scroll | DESENVOLVIMENTO (20-40s): 3-5 pontos principais com transições dinâmicas | CTA (5s): Chamada para ação clara. Inclua sugestões de enquadramento, transições e texto em tela.'
    },
    {
      id: '13',
      tag: 'VÍDEOS CURTOS',
      title: 'Script para Stories',
      description: 'Template para criar stories envolventes com storytelling e interação...',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=300&fit=crop',
      fullPrompt: 'Desenvolva uma sequência de stories sobre [ASSUNTO] com 5-7 quadros. Inclua: Story 1: Gancho visual forte | Stories 2-5: Desenvolvimento com cards informativos | Story 6: Pergunta/Enquete para engajamento | Story 7: CTA e direcionamento. Sugira elementos visuais, stickers e música de fundo adequados.'
    },
    {
      id: '14',
      tag: 'IMAGENS DESENHO AQUARELA',
      title: 'Retrato Aquarela Delicada',
      description: 'Ilustração em aquarela com texturas suaves e cores fluidas...',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop',
      fullPrompt: 'Create a delicate watercolor portrait with soft, flowing colors and natural textures. Use traditional watercolor techniques with visible paper texture, color bleeding, and gradual transitions. Focus on light, airy composition with gentle brush strokes and a harmonious color palette of pastels and earth tones.'
    },  {

    id: '0d42f6bd-e0fa-4c6b-b2bc-7e4ccb074637',

    tag: 'IMAGENS DESENHO AQUARELA',

    title: 'Mario Graffiti Londres',

    description: 'Ilustração estilo street art do Mario fazendo graffiti em um muro de Londres com Bowser e Toad.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757000721299-assets_task_01k4amch2eftsvwdvdj13srmg7_1756998680_img_0.webp',

    fullPrompt: 'Mario fez um graffiti em um muro de Londres em seu gráfico. Foi escrito "Quando você quiser, Bo\'!". No gráfico na voit des Toad et Bowser no modo "de la rue". Mario a la casquete à l\'envers, un pantalon un peu large. Des bombas de pintura treinam um pouco. O grafite é magnífico. A coté de lui il ya bébé bowser que o considera justo com um ar de défi'

  },

  {

    id: '9b81e727-079e-44dd-802b-6c15c5d6f0bb',

    tag: 'IMAGENS DESENHO AQUARELA',

    title: 'Pesca Milagrosa Pixar Style',

    description: 'Cena vibrante de Pedro e André pescando ao amanhecer, com estilo de animação 3D Disney Pixar.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755038995157-assets_task_01k2g1hek4f33r697c852he85j_1755032740_img_0.webp',

    fullPrompt: 'Crie uma imagem com um Mar calmo ao amanhecer, com um barco de madeira simples balançando suavemente. Pedro e André, de roupa simples de pescadores, puxam uma rede cheia de peixes brilhantes e coloridos, enquanto o barco quase se inclina pelo peso. Ao fundo, a luz dourada do sol reflete na água. O rosto dos pescadores mostra surpresa e alegria. No estilo Disney pixar 3D.'

  },

  {

    id: '1dde7f3e-03fb-4041-af03-3ad91caaf60a',

    tag: 'IMAGENS DESENHO AQUARELA',

    title: 'Gatos do Basquete Streetwear',

    description: 'Cena urbana noturna com gatos estilosos usando hoodies em uma quadra de basquete.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755038858686-assets_task_01k2b27xq4eq89qrxavgpd410b_1754865707_img_0.webp',

    fullPrompt: 'Ultra-realistic, hyper-detailed extreme low-angle super-wide fisheye lens shot — camera placed almost on the ground, starting from the cats’ sneakers and shooting upward for maximum imposing effect. Scene set at night on an urban basketball court surrounded by rusty chain-link fences, graffiti-covered walls. Three scruffy, streetwise alley cats dressed in oversized premium Loomcore hoodies. Harsh, bright camera flash combined with warm firelight. Vintage VHS camcorder aesthetic.'

  },

  {

    id: '17d8a4fa-8b1e-469a-9867-e44f790ce3df',

    tag: 'IMAGENS DESENHO AQUARELA',

    title: 'Jesus e a Ovelha Perdida',

    description: 'Pintura em aquarela com vista aérea de Jesus e ovelhas negras caminhando pela praia.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755038822743-assets_task_01k2b6ptpze6e8cca992x7saqx_1754870372_img_1.webp',

    fullPrompt: 'create an image of Jesus and black sheep following behind him on the beach, watercolor style, birds eye view'

  },

  {

    id: '57ac5c25-e7c2-4c5d-8363-560f4d556c98',

    tag: 'IMAGENS DESENHO AQUARELA',

    title: 'Caricatura Digital CR7',

    description: 'Ilustração digital detalhada e humorística de Cristiano Ronaldo comemorando no estádio.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755038388986-assets_task_01k2fpfkszfe3te3rye9bzs8ve_1755021142_img_1.webp',

    fullPrompt: 'Hyper-realistic digital caricature illustration of Cristiano Ronaldo celebrating a goal, with exaggerated facial features and proportions, humorous yet highly detailed, vibrant colors, wearing his football uniform, in the middle of a football stadium full of cheering fans.'

  },

  {

    id: 'a6915664-d2ba-40b6-804d-03fa85a947b3',

    tag: 'IMAGENS DESENHO AQUARELA',

    title: 'Casa de Campo Encantada',

    description: 'Pintura de uma casa costeira atemporal cercada por jardins selvagens e floresta.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755029252958-assets_task_01k2d7a5taex1b7sgqqw4xeswr_1754938106_img_1.webp',

    fullPrompt: 'My dream house: a mix of the sea, the Baltic Sea, a thatched-roof house, and coastal architecture. Timeless. A beautiful, yet somewhat wild garden. Plenty of herbs, lavender, and fruit trees. Surrounded by forest, but with a lake. Somehow enchanted.'

  },

  {

    id: '0de0453e-6167-4b02-8617-eb014f8c6a15',

    tag: 'IMAGENS DESENHO AQUARELA',

    title: 'Raposa Mística Anime',

    description: 'Ilustração estilo anime de uma raposa com pelos iridescentes em um penhasco sob o luar.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755028732058-assets_task_01k2ddrqbhe0ztpch9t35rcrdf_1754944878_img_0.webp',

    fullPrompt: 'fox, with a necklace around it\'s neck with a charm that is a yellow circle that looks like it\'s glowing. the fox is anime style and it\'s fur has iridescent streaks. sitting on a cliff, with the moon, stars and a forrest in the background.'

  },

  {

    id: 'e419c35a-dfa7-4de4-9add-24ca6a06e900',

    tag: 'IMAGENS DESENHO AQUARELA',

    title: 'Oceano Cósmico',

    description: 'Pintura artística de uma garota na praia observando ondas oceânicas cósmicas.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755028522412-assets_task_01k2f52ec0ehtrdam2fk2ec5zn_1755002842_img_1.webp',

    fullPrompt: 'create an image of one beautiful girl nearby beach with beer glass and enjoying cosmic ocean waves'

  },

  {

    id: 'f6f38d3a-6942-4e5c-8b95-b64e05414c5e',

    tag: 'IMAGENS DESENHO AQUARELA',

    title: 'Pequenos Chefs e o Croissant',

    description: 'Ilustração lúdica de chefs minúsculos preparando um croissant gigante.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755027964682-assets_task_01k2drce68eh9by2t8enad2ky5_1754955999_img_0.webp',

    fullPrompt: 'whimsical illustration, a group of tiny chefs working together on a giant croissant. Each chef is dressed in a classic white chef\'s uniform. The croissant, golden and flaky, is placed on a wooden surface with a warm, cozy atmosphere.'

  },   {
      id: '15',
      tag: 'IMAGENS ESTILO CARTOON',
      title: 'Personagem Cartoon',
      description: 'Ilustração cartoon vibrante com linhas expressivas e cores saturadas...',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop',
      fullPrompt: 'Design a vibrant cartoon character with bold outlines, exaggerated features, and saturated colors. Use clean vector-style lines, dynamic poses, and expressive facial features. Include characteristic cartoon elements like highlights, shadows, and simplified shapes. Make it fun, energetic, and visually appealing.'
    },
  {

    id: '6925bde7-d18a-4f6f-afa9-1d11fae0fb86',

    tag: 'IMAGENS ESTILO CARTOON',

    title: 'Instagram 3D Boy',

    description: 'Personagem estilo Disney saindo de uma moldura do Instagram com detalhes personalizados e ícones sociais.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757111565982-assets_task_01k4cb2697ej1vedstznedfnjf_1757055985_img_0.webp',

    fullPrompt: 'Crie uma imagem 3D em estilo realista. A imagem mostra uma moldura branca de uma publicação do Instagram, da qual aparece um menino, estilo desenho animado da Disney, sentado na barra inferior da moldura, com as pernas penduradas. O menino na imagem é visível em toda a sua altura. A aparência do menino é a mesma da foto: - cabelo castanho curto e espetado, - shorts Nike pretos, - olhos azuis, - camisa de futebol do Messi. O fundo é branco. Na parte superior da moldura, estão o avatar e o nome do perfil do menino: HarryDaGoat. Adicione os ícones: - ícone vermelho de "curtir", - "comentário" e "enviar", no estilo do Instagram. Na parte inferior, sinal: 67 milhões de curtidas. Formato 9:16'

  },

  {

    id: 'e03c7548-0e44-42c7-9dda-57ff3a988dbd',

    tag: 'IMAGENS ESTILO CARTOON',

    title: 'Gatinho Chef 3D',

    description: 'Ilustração ultra-realista de um gatinho fofo cozinhando em uma cozinha moderna com luz cinematográfica.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755038720096-assets_task_01k2f8t2qvf1g9ks1sr3p1qnrd_1755006817_img_0.webp',

    fullPrompt: 'Create an ultra-realistic, adorable fluffy kitten in a cozy modern kitchen, standing on a small stool at the counter, cooking a traditional pilaf in a large cast-iron pot. The kitten wears a tiny chef’s hat and a white apron, carefully stirring rice with carrots, onions, and pieces of meat. Fresh herbs, garlic, and spices are on the counter nearby. Warm cinematic sunlight streams through the window, steam rising from the pot. 8K photorealistic quality.'

  },

  {

    id: '57aaeb20-3d6e-4044-85b2-dde91e15b833',

    tag: 'IMAGENS ESTILO CARTOON',

    title: 'Squad de Memes 3D',

    description: 'Panda, Tubarão, Pepe the Frog e Doge em pose de ataque épica com iluminação cinematográfica.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755028254592-assets_task_01k2f874pbewyby7kwh8kacg60_1755006336_img_0.webp',

    fullPrompt: 'An epic, cartoonish 3D Panda bear, a shark, Pepe the frog, and Doge the dog, in attack pose on a shattering rock, unleashing power-ups. Surrounded by a glowing energy aura, each is surrounded by dramatic, cinematic lighting. The background is black for contrast. Highly detailed textures. Dynamic perspective.'

  },

  {

    id: 'edc0acb3-d047-4c05-a08f-1c16e8a2d7db',

    tag: 'IMAGENS ESTILO CARTOON',

    title: 'Minion Peaky Blinder',

    description: 'Conceito artístico de um Minion reimaginado como membro da gangue Peaky Blinders em Birmingham.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755028203416-assets_task_01k2fbvvmce8jsfnf5gmhpg2jx_1755010122_img_0.webp',

    fullPrompt: 'Photorealistic character concept of a Minion reimagined as a gritty member of the Peaky Blinders. The Minion wears a meticulously tailored 1920s tweed suit and a flat cap, with a serious expression. He is walking down a wet, grimy cobblestone street in industrial Birmingham, fog and smoke filling the air. Cinematic, anamorphic shot, desaturated color palette.'

  },

  {

    id: '10a04666-1cc0-4105-ae1b-1f6ab22d9c6a',

    tag: 'IMAGENS ESTILO CARTOON',

    title: 'DreamWorks Girl Instagram',

    description: 'Personagem feminina estilo DreamWorks saindo de um post do Instagram em formato 9:16.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755024646530-5116128974316089141.jpg',

    fullPrompt: 'Crie uma ilustração 3D em estilo cartoon de DreamWorks, saindo de uma moldura de post do Instagram. Ela usa roupa cor de rosa e deve estar sentada na barra inferior da moldura, com as pernas penduradas para baixo. A expressão dela deve ser alegre, fofa, com olhos grandes e um sorriso. Dentro da moldura, insira o nome do perfil @crissantos.aoficial. adicione também os ícones de "curtir", "comentar" e "enviar". Formato 9:16.'

  },{
  id: 'a75eb24e-df35-4a5c-9dd2-6f1f7d46056e',
  tag: 'IMAGENS EM VIDRO',
  title: 'Maçã Translúcida',
  description: 'Arte em vidro de caramelo translúcido com iluminação cinematográfica e detalhes macro ultra-realistas.',
  image: 'https://img.freepik.com/fotos-premium/uma-maca-de-vidro-com-uma-folha_853177-1211.jpg',
  fullPrompt: 'High-detail candy apple made from translucent caramel glass with subtle golden undertones, soft backlight creating glowing edges that accentuate the delicate ripples and ridges on its surface, cinematic realism with deep shadows and luminous highlights, ultra HD resolution, macro photography capturing the intricate texture and sheen of the caramel glass, with a blurred background that emphasizes the subject\'s centrality and isolation, inviting the viewer to focus on the mesmerizing play of light and color on the candy apple\'s surface.'
},  {

    id: 'bc158839-a32e-4987-8d3d-ea2cc3e0437f',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Magia Cinematográfica',

    description: 'Cena emocional de alto impacto com iluminação vibrante e estilo de blockbuster 3D.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757330629519-assets_task_01k4mb3a62f1dbsf9nvnd77gd7_1757324483_img_1.webp',

    fullPrompt: 'Crie uma imagem cinematográfica hiper-realista que evoque fortes emoções. Assunto principal: Um humano com quem se identifica ou animal fofo em situação emocionante. Cores brilhantes, alto contraste, iluminação cinematográfica e profundidade de campo. Estilo Pixar vibrante com apelo global.'

  },

  {

    id: '66e702c2-8017-4eef-8659-1bdddb71f57b',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'O Avô e o Sanduíche Gigante',

    description: 'Contraste de escala surreal entre um avô em miniatura e um sanduíche colossal em um parque.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757330528583-assets_task_01k4f7q74nfmgb26et9dytesf7_1757153159_img_1.webp',

    fullPrompt: 'Pequeno avô em miniatura diante de um sanduíche gigante que parece um prédio. Iluminação fria e cinematográfica, sombras nítidas enfatizando o contraste de escala absurdo e o realismo surreal estilo Pixar.'

  },

  {

    id: '3c32462b-b48a-4b98-aa8a-538fac4b9b5d',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Gatinha na Cozinha',

    description: 'Personagem fofa inspirada em Masha em uma cozinha aconchegante prestes a usar um liquidificador.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757000665541-assets_task_01k49f6wt6ewwrzd4h60rr63bs_1756959684_img_0.webp',

    fullPrompt: 'Gatinha antropomórfica, estilo Pixar/Netflix, olhos grandes e expressivos, usando vestido listrado em uma cozinha aconchegante. Iluminação de janela criando atmosfera cinematográfica.'

  },

  {

    id: '30c63b45-c4c3-4390-8797-c1d7a2bdcd9f',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'O Fazendeiro',

    description: 'Cena rústica de um fazendeiro idoso em seu celeiro cercado por animais sob luz dourada.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755558989898-a-3d-pixar-style-illustration-of-an-elde_BhqZ7v2ZSGShvPWvOXXf-Q_F_e1rTkJSMSg7Edwde0dqA.jpeg',

    fullPrompt: 'A 3D Pixar-style illustration of an elderly farmer standing at a wooden barn. Kind face, white beard, tipping his hat while chickens and cows graze in the golden morning light.'

  },

  {

    id: '8298dcc9-f38f-4345-9d7e-b2ca11f65a06',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Cartão de Aniversário 3D',

    description: 'Ursinho de pelúcia fofo com bolo de chocolate e corações dourados flutuantes.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755558951924-a-charming-3d-birthday-greeting-card-fea_fJoiDtqfQ9K_FdxLNK9TTQ_EuKABqWySS-YWWOLf041hA.jpeg',

    fullPrompt: '3D greeting card with a fluffy teddy bear holding a three-tiered chocolate cake. Gold hearts and "Feliz Cumpleaños" in rounded 3D typography. Warm beige bokeh background.'

  },

  {

    id: '07bff554-b64e-4bd6-a95b-c60018ac6202',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Gratidão Estilizada',

    description: 'Estilo pop art 3D anime de uma jovem mulher em um cenário etéreo e detalhado.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755098794195-at-the-top-of-the-image-a-bright-clear-c_RNA1CuGvTc2NYp28QEJ4Mw_H4NztbMTS4elUr-9VVtBkw.jpeg',

    fullPrompt: 'Pop art 3D manga style image of a stunning woman with dark wavy hair and pink meshes. Standing next to a tree, highly detailed 8k quality with watercolor painting effects.'

  },

  {

    id: '42f90f63-0975-4244-b386-619572fbf57f',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Pesca Milagrosa 3D',

    description: 'Pedro e André em um barco de madeira puxando redes cheias de peixes ao amanhecer.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755038940471-assets_task_01k2g20wfvfmxv7nmhby7exjhz_1755033240_img_0.webp',

    fullPrompt: 'Mar calmo ao amanhecer, barco de madeira. Pedro e André puxam rede cheia de peixes coloridos. Luz dourada e estilo Disney Pixar 3D.'

  },

  {

    id: 'faa2c01e-b57f-4e78-96ea-54f81e9f4164',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Super Students',

    description: 'Equipe de crianças heróis relaxando no sofá da base secreta assistindo filme.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755038465613-assets_task_01k2ffsh58fzeaphk7dzjp9y4n_1755014182_img_0.webp',

    fullPrompt: '3D Pixar-style illustration of Brooklyn, Sean and Justin sitting on a big couch in their high-tech lair. Vibrant lighting, watching TV with popcorn. Warm atmosphere of friendship.'

  },

  {

    id: '929ecef7-691c-489d-8ddf-c1f063c986d4',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Jesus sobre as Águas',

    description: 'Cena sagrada impactante de Jesus caminhando sobre o mar agitado com iluminação divina.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755027317560-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_35_01.png',

    fullPrompt: 'Jesus andando sobre águas agitadas com expressão serena. Estilo Pixar 3D hiper realista. Ondas com reflexos dourados e luz divina atravessando as nuvens dramáticas.'

  },

  {

    id: 'a09b10f7-ccde-4a20-b937-789829809516',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'O Tablet Mágico',

    description: 'Criança ruiva empolgada vendo personagens 3D saltarem da tela de um tablet.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755027271638-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_34_13.png',

    fullPrompt: 'Criança de 8 anos segurando tablet de onde um personagem Pixar salta para fora com luzes e brilho. Ambiente de quarto infantil criativo e iluminação vibrante.'

  },

  {

    id: '27bfca33-ad44-47a1-b327-9ebf4082047c',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Bloqueio Criativo',

    description: 'Expressão de exaustão e frustração de um designer em frente ao computador em um quarto escuro.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755027195270-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_32_49.png',

    fullPrompt: 'Male character 35yo, Pixar 3D style, expressive tired eyes. Sitting at a cluttered desk with a glowing monitor. Dramatic lighting, cold color palette, showing burnout and isolation.'

  },

  {

    id: 'b4b4e5f9-2c3a-440b-8cfd-45d6c48d7eca',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'O Criador IA',

    description: 'Jovem negro empolgado criando animações com inteligência artificial em seu estúdio futurista.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755026983116-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_29_20.png',

    fullPrompt: 'Jovem de 28 anos com dreadlocks usando notebook holográfico. Estilo Pixar 3D ultra realista. Ambiente tecnológico com luzes azul e laranja, transmitindo futuro e acessibilidade.'

  },

  {

    id: 'e3bda772-80b2-435b-afc3-16b08e0ba199',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Motion Design Show',

    description: 'Mulher negra profissional apresentando uma plataforma holográfica de animação em miniatura.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755026944898-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_28_47.png',

    fullPrompt: 'Mulher negra 38 anos, cabelo black power, segurando plataforma holográfica. Cenário clean e sofisticado. Iluminação mágica dourada e azul refletindo no rosto, estilo Pixar 3D.'

  },

  {

    id: 'f2faea5c-a516-40f4-88b9-480f1bd6177a',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'O Baú do Tesouro Digital',

    description: 'Holograma de um baú de tesouro luxuoso saindo de um celular em um estúdio moderno.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755026818964-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_26_32.png',

    fullPrompt: 'Jovem com cabelo castanho curto segurando celular de onde emerge holograma de baú com ouro e pedras preciosas. Iluminação cinematográfica ouro e roxa, estilo Pixar 3D.'

  },

  {

    id: '61a3b7fe-c0d6-4789-bcd3-70d9f1e188c0',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Faturamento em Casa',

    description: 'Dona de casa alegre recebendo lucros digitais representados por uma moeda dourada holográfica.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755026779740-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_25_56.png',

    fullPrompt: 'Mulher 45 anos na cozinha segurando celular com holograma de moeda gigante. Ambiente familiar e acolhedor, iluminação solar e estilo Pixar 3D realista.'

  },

  {

    id: '4834aaaf-55cf-4378-a9e7-17101c1ce742',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Dois Mundos',

    description: 'Contraste entre desânimo financeiro e a vitória da primeira venda digital no mesmo personagem.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755026608603-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_23_11.png',

    fullPrompt: 'Ilustração dividida: esquerda azul frio/desânimo, direita vibrante/comemoração de venda no notebook. Personagem masculino 35 anos, estilo Pixar 3D ultra realista.'

  },

  {

    id: '78237fbd-69a0-4e35-b98d-b22806a063f8',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Universo Revelado',

    description: 'Personagem Pixar emergindo como holograma do celular de uma jovem em um ambiente neon.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755026584263-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_22_35.png',

    fullPrompt: 'Mulher entre 28-35 anos segurando smartphone com holograma 3D impactante. Tons roxo, rosa e azul vibrantes. Sensação de descoberta mágica estilo Pixar 3D.'

  },

  {

    id: '28e54147-9864-40d0-ad79-a59755a71e0b',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Facilidade Digital',

    description: 'Mulher confiante demonstrando ferramentas de IA flutuantes em um escritório moderno.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755026538803-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_21_52.png',

    fullPrompt: 'Mulher jovem com hologramas de ferramentas de IA flutuando. Gesto de explicação amigável. Estilo Pixar 3D vibrante, cores azul e lilás, atmosfera de empoderamento.'

  },

  {

    id: '16ba4a80-3e3b-4406-bf4b-31542d9abc63',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Empreendedora no Lar',

    description: 'Mulher radiante em sala de estar moderna mostrando o sucesso do seu trabalho digital.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755025912522-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_11_05.png',

    fullPrompt: 'Personagem feminina 34 anos em vestido vinho acetinado. Sala de estar nítida com notebook e pagamentos sobre a mesa. Renderização cinematográfica 8K estilo Pixar 3D.'

  },

  {

    id: '01127ee8-1e4c-46d7-a26a-0b456892203a',

    tag: 'IMAGENS ESTILO PIXAR 3D',

    title: 'Times Square Futurista',

    description: 'Homem carismático em terno de luxo em uma Times Square do futuro com carros voadores.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755027195270-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_32_49.png',

    fullPrompt: 'Homem 38 anos em terno azul marinho. Cenário Times Square 2150 com hologramas, carros voadores e chuva de luz dourada. Render PBR ultra detalhado estilo Pixar 3D.'

  },
  {

    id: '5c0149ef-0031-4330-be58-f161b5140d9d',

    tag: 'IMAGENS GHIBLI',

    title: 'Supergirl Samus',

    description: 'Fotografia editorial cinematográfica da Supergirl reimaginada com a armadura de Samus Aran ao pôr do sol.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755029763479-assets_task_01k2fv01ejeyj8pg9ywccztq1n_1755025885_img_1.webp',

    fullPrompt: 'High-resolution cinematic editorial photograph of Supergirl reimagined as Samus Aran, standing in a heroic full-body pose on a windswept plateau at sunset. She has long, flowing blonde hair, model-like face. Sunlight catches on the textures of her power suit, highlighting her powerful, athletic, slim build. Her gun-arm is slightly raised with a slight afterglow.'

  },

  {

    id: '89eeaee3-494c-483a-acef-82e01f18f733',

    tag: 'IMAGENS GHIBLI',

    title: 'Mapa Diorama Romênia',

    description: 'Miniatura detalhada em 3D da Romênia emergindo de um mapa real com castelos e paisagens icônicas.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755029105688-assets_task_01k2f5q6zxfnw8bs23jfrbb91k_1755003601_img_0.webp',

    fullPrompt: 'A realistic map of Romania lying on a surface, country name "ROMANIA" clearly visible. Emerging from the map is a highly detailed miniature landscape with Castle Peles, Transfăgărășan and cultural elements as a 3D diorama. Soft studio lighting, cinematic composition. Square 1:1 format.'

  },

  {

    id: 'c1b16a6b-8651-4039-b257-56df74dcd6c8',

    tag: 'IMAGENS GHIBLI',

    title: 'Noite de Verão Obon',

    description: 'Ilustração em estilo anime japonês de uma jovem em um ambiente sofisticado com vista para Hakodate.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755029064698-assets_task_01k2fqgfm6fa3r8z13212dvenq_1755022236_img_0.webp',

    fullPrompt: 'A beautiful young woman with long golden hair and blue eyes, drawn in Japanese anime style. Sitting gracefully at a desk with a glowing "mukaebi" fire. Hakodate night view through the window. Warm summer evening tones, blending lantern light with cool city illumination, 7000K temperature.'

  },

  {

    id: 'd2cf2db7-7173-4da4-b2fd-4945d11be712',

    tag: 'IMAGENS GHIBLI',

    title: 'Bar de Rua Japonês',

    description: 'Cena noturna em estilo anime de um bar de rua com luzes quentes, pavimento molhado e atmosfera acolhedora.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755027869244-assets_task_01k2be5hnefdpabvfbfefc6gcv_1754878210_img_0.webp',

    fullPrompt: 'Estilo anime de un bar callejero Japones al aire libre por la noche, carpa de vinilo naranja, luz cálida sobre pavimento mojado. Meiko y Mengurine Luka charlando felices, letreros de neón reflejados en la calle por la lluvia, fondo de callejón con bicicletas y scooters.'

  },

  {

    id: '98e42096-7389-48f9-9d5c-01d49c43a1c2',

    tag: 'IMAGENS GHIBLI',

    title: 'Sonho em Anime',

    description: 'Ilustração artística e onírica com iluminação cinematográfica e detalhes ultra-definidos.',

    image: 'https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755027842478-assets_task_01k2cfzczmfj5srkk5g0gga32z_1754913745_img_1.webp',

    fullPrompt: 'A beautiful and dreamy anime-style illustration. Dynamic composition, ultra-high definition, delicate details, and cinematic lighting stand out.'

  },[
  {
    id: "a7611f8d-36c7-4484-a292-7ee9d694b807",
    tag: "IMAGENS LOGOS / NOMES",
    title: "LOGOTIPO FLUFFY 3D",
    description: "Transformação de imagem em objeto 3D coberto por pelo denso e macio com iluminação cinematográfica.",
    image: "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755023535710-4920315724459782152.jpg",
    fullPrompt: "Transform the uploaded image into a soft, 3D object fully covered in thick, fluffy fur. Preserve exact shape and proportions. Cinematic lighting from behind, glowing edges, black background. Render in ultra high-resolution."
  },
  {
    id: "a51005e0-7730-496a-8424-bec2bb86e8df",
    tag: "IMAGENS LOGOS / NOMES",
    title: "ROAR & FLY LOGO",
    description: "Design moderno de logotipo com cabeça de leoa estilizada e silhueta de avião em moldura circular.",
    image: "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755042765531-a-modern-logo-design-featuring-a-stylize_k2Y_y9o0Sgq2xL-vpCKruA_2TWLShMvSP6gii9HB1Tk_g.jpeg",
    fullPrompt: "Modern logo design featuring a stylized lioness's head in a circular frame. Amber eyes, flowing mane in gold/brown. Sleek silver airplane silhouette integrated. Bold sans-serif font 'Roar & Fly' below."
  },
  {
    id: "f357466c-f1cd-4a30-8ea7-b64882364c64",
    tag: "IMAGENS LOGOS / NOMES",
    title: "COMUNIDADE TURBOGPT",
    description: "Logo 3D futurista e impactante com texturas premium (metal/vidro) e iluminação de estúdio.",
    image: "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755027449934-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_37_02.png",
    fullPrompt: "Crie uma logo 3D futurista, elegante e clean para COMUNIDADE TURBOGPT. Elementos tridimensionais, profundidade realista, texturas de metal polido e vidro fosco. Paleta de tons vibrantes com contraste profissional."
  },
  {
    id: "96ac43c9-62ef-4653-bbf7-3d0195656d63",
    tag: "IMAGENS LOGOS / NOMES",
    title: "SPLASH LETTER S",
    description: "Wallpaper dinâmico com a letra 'S' formada por respingos de água e gotas refletindo tons de azul.",
    image: "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755039883564-a-vibrant-and-dynamic-wallpaper-design-s_M4zQbJ2pTWKSzHf-numF9Q_LVL_gb1zSZCrIvl7wZB9KA.jpeg",
    fullPrompt: "Vibrant wallpaper design showcasing the letter 'S' formed by a dramatic water splash. Fluid art style, droplets reflecting spectrum of blues and greens. Gradient background from ocean blue to turquoise."
  },
  {
    id: "5a0c0a40-f54f-4f40-b37f-784d75e8f63c",
    tag: "IMAGENS LOGOS / NOMES",
    title: "ZALAND FLAME",
    description: "Logo com tipografia inspirada em chamas e gradiente arco-íris sobre fundo preto.",
    image: "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755040016685-a-modern-logo-design-featuring-the-styli_v6DPo0blTcKDffNsijUf2w_QIHWohjZSGKq7URJ3xZJEA.jpeg",
    fullPrompt: "Modern logo design with 'Zaland' in flame-inspired font. Rainbow gradient letters against black backdrop. Encapsulated within a glowing turquoise circle with subtle blue outer glow."
  },
  {
    id: "24e17d72-cc8e-4236-8b4c-d169a39d59fe",
    tag: "IMAGENS LOGOS / NOMES",
    title: "TRUTH RETRO 90S",
    description: "Ilustração retrô dos anos 90 com a palavra 'TRUTH' em letras bolha neon e elementos de circuito.",
    image: "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755040167993-a-vibrant-90s-retro-style-illustration-s_Tt4XIT9ySImbaLcIh7H0HA_V6zTjLcAQ6K07fz40u65xA.jpeg",
    fullPrompt: "90s retro-style illustration of the word 'TRUTH' in red bubble letters within electric blue frame. Technological theme with circuit board elements, neon colors on deep space black background."
  },
  {
    id: "53e6d23e-f519-4f18-a942-c5f8840d4b7b",
    tag: "IMAGENS LOGOS / NOMES",
    title: "ALEXA QUILLING ART",
    description: "Arte detalhada em papel enrolado (quilling) do nome Alexa com flores e corações coloridos.",
    image: "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755041110284-a-stunning-and-intricate-quilled-paper-a_4xUHWdCOQJu78RiflypLZg_c9NSEIltRu2Fd6nGV826nA%20(1).jpeg",
    fullPrompt: "Intricate quilled paper art of 'Alexa' from multicolored strips. Script arrangement with swirling lines and tiny paper flowers. Soft clear background, diffused lighting highlighting textures."
  },
  {
    id: "27e2bec2-4cf4-40ab-967e-95f287f844c6",
    tag: "IMAGENS LOGOS / NOMES",
    title: "PETER COSMIC NEBULA",
    description: "Retrato artístico surreal do nome Peter com cores fluidas de nebulosa e poeira estelar.",
    image: "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755042198295-a-surreal-digital-art-portrait-showcases__AzwdH4WTAGF5gHzpuH2yA_qqwcaxrcRHu3tppbOvmM8A.jpeg",
    fullPrompt: "Surreal digital art of 'Peter' in nebula colors (crimson, gold, azure). Letters refract light with ethereal movement against an indigo space backdrop with constellations."
  },
  {
    id: "ce4fbe22-4a7e-4e44-80d0-b1c78a238b43",
    tag: "IMAGENS LOGOS / NOMES",
    title: "AVI RAMB NEON TYPO",
    description: "Arte vanguardista com tipografia estilo jornal empilhado e cores neon pulsantes.",
    image: "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755098974273-a-captivating-digital-art-piece-showcase_ZYVzqyvuRXyakCApzR6_kg_fUTuw6M_TK2WZUv1JSDzlg.jpeg",
    fullPrompt: "Avant-garde typographic style for 'Avi Ramb'. Letters crafted from horizontal newspaper-like lines with luminous neon palette. Floating effect against black background with silver grains."
  },
  {
    id: "3eac71b7-58b9-4fe8-ba03-c0a55664a19c",
    tag: "IMAGENS LOGOS / NOMES",
    title: "ALANIE FLORAL 3D",
    description: "Render 3D do nome Alanie entrelaçado em design floral com letras iridescentes e rosa de cristal.",
    image: "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755099170235-a-stunning-3d-render-showcasing-the-eleg_pQB2pyxfTUGI9R4AJ8iWfQ_AbeaSVYiSS2TnUelUZcuyg.jpeg",
    fullPrompt: "3D render of 'Alanie' within vibrant floral design. Iridescent letters in blue/pink/gold with delicate crowns and vines. Luminous crystal rose to the right, dreamy bokeh background."
  },
  {
    id: "aa7bebab-3701-4e7f-8b87-14d135960a4d",
    tag: "IMAGENS LOGOS/NOMES",
    title: "JOSYE ALVES GLASS",
    description: "Tipografia 3D em vidro/resina com gradiente de cores e efeito de partículas brilhantes internas.",
    image: "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755310616718-7B32B4F2-F772-41AB-91D6-9E88D7364928.png",
    fullPrompt: "3D typographic render of 'Josye Alves' in elaborate cursive. Translucent glass material with embedded colorful particles. Multi-directional studio lighting, high saturation gradient."
  }



  ];

  const getPromptsForTag = (tag: string) => {
    return allPrompts.filter(prompt => prompt.tag === tag);
  };

  const filteredPrompts = selectedTag 
    ? getPromptsForTag(selectedTag).filter(prompt => 
        prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleCopyPrompt = async (prompt: string, promptId: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedId(promptId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar prompt:', err);
    }
  };

  const handleViewFullPrompt = (prompt: any) => {
    setSelectedPrompt(prompt);
  };

  const handleCloseModal = () => {
    setSelectedPrompt(null);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setSearchTerm('');
  };

  const handleBackToTags = () => {
    setSelectedTag(null);
    setSearchTerm('');
  };

  if (selectedTag === 'VÍDEOS VEO 3') {
    return <VEO3View onBack={handleBackToTags} />;
  }

  if (selectedTag) {
    // Página da categoria da TAG
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header com botão voltar */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={handleBackToTags}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
        </div>

        {/* Título da categoria */}
        <h1 className="text-4xl font-bold text-white mb-8">{selectedTag}</h1>

        {/* Campo de busca */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar prompts nesta categoria..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Seção Geral */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">Geral</h2>
          
          {/* Grid de prompts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <div key={prompt.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300">
                {/* Header do card */}
                <div className="p-4 border-b border-slate-700">
                  <h3 className="text-white font-semibold text-lg">{prompt.title}</h3>
                </div>

                {/* Imagem */}
                <div className="relative">
                  <img
                    src={prompt.image}
                    alt={prompt.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Conteúdo do card */}
                <div className="p-4">
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {prompt.description}
                  </p>

                  {/* Botões de ação */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handleViewFullPrompt(prompt)}
                      className="w-full flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors py-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">Ver prompt completo</span>
                    </button>

                    <button
                      onClick={() => handleCopyPrompt(prompt.fullPrompt, prompt.id)}
                      className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {copiedId === prompt.id ? 'Copiado!' : 'Copiar Prompt'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal para exibir prompt completo */}
        {selectedPrompt && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={handleCloseModal}>
            <div className="bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden border border-slate-700" onClick={(e) => e.stopPropagation()}>
              {/* Header do modal */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <h2 className="text-2xl font-bold text-white">{selectedPrompt.title}</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Conteúdo do modal */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-160px)]">
                <div className="mb-4">
                  <img
                    src={selectedPrompt.image}
                    alt={selectedPrompt.title}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="bg-slate-800 rounded-lg p-4 mb-4">
                  <h3 className="text-white font-semibold mb-2">Prompt Completo:</h3>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {selectedPrompt.fullPrompt}
                  </p>
                </div>
              </div>

              {/* Footer do modal */}
              <div className="p-6 border-t border-slate-700">
                <button
                  onClick={() => handleCopyPrompt(selectedPrompt.fullPrompt, selectedPrompt.id)}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
                >
                  <Copy className="w-5 h-5" />
                  <span className="font-medium">
                    {copiedId === selectedPrompt.id ? 'Copiado!' : 'Copiar Prompt'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Visualização principal - Grid de TAGs
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Título e descrição */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Prompts por TAG</h1>
        <p className="text-slate-400 text-lg">
          Escolha um tópico principal (TAG) para ver os subtópicos e seus prompts. - PÁGINA EM ATUALIZAÇÃO!!!!
        </p>
      </div>

      {/* Grid de TAGs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {promptTags.map((tag) => (
          <div
            key={tag}
            onClick={() => handleTagClick(tag)}
            className="group cursor-pointer bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            {/* Barra azul no topo */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-blue-400 transition-colors">
                {tag}
              </h3>
            </div>

            {/* Efeito hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Informação adicional */}
      <div className="mt-12 text-center">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <MessageSquare className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Biblioteca Completa de Prompts</h3>
          <p className="text-slate-400">
            Mais de 500 prompts organizados por categorias para maximizar seus resultados com IA
          </p>
        </div>
      </div>
    </div>
  );
}