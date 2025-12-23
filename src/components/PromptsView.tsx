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

  },
  {

    "id": "a7611f8d-36c7-4484-a292-7ee9d694b807",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "LOGOTIPO FLUFFY",

    "description": "Transformação de imagem em objeto 3D coberto por pelos densos e macios com iluminação Octane Render.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755023535710-4920315724459782152.jpg",

    "fullPrompt": "Transform the uploaded image into a soft, 3D object fully covered in thick, fluffy fur. Preserve exact shape and proportions. Cinematic lighting from behind, glowing edges, black background."

  },

  {

    "id": "a51005e0-7730-496a-8424-bec2bb86e8df",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "ROAR & FLY",

    "description": "Logo moderno com cabeça de leoa e silhueta de avião em moldura circular prateada.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755042765531-a-modern-logo-design-featuring-a-stylize_k2Y_y9o0Sgq2xL-vpCKruA_2TWLShMvSP6gii9HB1Tk_g.jpeg",

    "fullPrompt": "Modern logo design featuring a stylized lioness's head in a circular frame. Amber eyes, silver airplane silhouette integrated. Text 'Roar & Fly' in bold sans-serif."

  },

  {

    "id": "f357466c-f1cd-4a30-8ea7-b64882364c64",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "TURBOGPT 3D",

    "description": "Logo 3D de alto padrão para comunidade, com texturas de metal polido e vidro fosco.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755027449934-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_37_02.png",

    "fullPrompt": "Logo 3D impactante para COMUNIDADE TURBOGPT. Estilo futurista, elegante e clean. Profundidade realista, iluminação de estúdio e acabamento premium."

  },

  {

    "id": "96ac43c9-62ef-4653-bbf7-3d0195656d63",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "SPLASH S",

    "description": "Letra 'S' dinâmica formada por respingos de água translúcida em tons de azul e turquesa.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755039883564-a-vibrant-and-dynamic-wallpaper-design-s_M4zQbJ2pTWKSzHf-numF9Q_LVL_gb1zSZCrIvl7wZB9KA.jpeg",

    "fullPrompt": "Dynamic wallpaper design showcasing the letter 'S' formed by a dramatic water splash. Fluid art style, reflective droplets, deep ocean blue background."

  },

  {

    "id": "5a0c0a40-f54f-4f40-b37f-784d75e8f63c",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "ZALAND LOGO",

    "description": "Texto estilizado com fonte de chamas em gradiente arco-íris dentro de um círculo turquesa neon.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755040016685-a-modern-logo-design-featuring-the-styli_v6DPo0blTcKDffNsijUf2w_QIHWohjZSGKq7URJ3xZJEA.jpeg",

    "fullPrompt": "Modern logo for 'Zaland' in flame-inspired font. Asymmetrical flame shapes, rainbow gradient, glowing turquoise circle on black backdrop."

  },

  {

    "id": "24e17d72-cc8e-4236-8b4c-d169a39d59fe",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "TRUTH RETRO",

    "description": "Estilo retrô anos 90 com letras bolha vermelhas e circuitos tecnológicos em moldura azul neon.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755040167993-a-vibrant-90s-retro-style-illustration-s_Tt4XIT9ySImbaLcIh7H0HA_V6zTjLcAQ6K07fz40u65xA.jpeg",

    "fullPrompt": "Vibrant 90s retro illustration of 'TRUTH'. Bubble letters, electric blue frame, circuit board elements, neon colors on space black background."

  },

  {

    "id": "53e6d23e-f519-4f18-a942-c5f8840d4b7b",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "ALEXA QUILLING",

    "description": "Arte em papel enrolado (quilling) multicolorido com flores e corações em estilo script fluído.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755041110284-a-stunning-and-intricate-quilled-paper-a_4xUHWdCOQJu78RiflypLZg_c9NSEIltRu2Fd6nGV826nA%20(1).jpeg",

    "fullPrompt": "Quilled paper art of the name 'Alexa'. Multicolored paper strips, swirling lines, paper flowers, warm and inviting artistic lighting."

  },

  {

    "id": "06114f73-5d64-4c14-a363-b628b45ffff0",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "MERAKI NAILS",

    "description": "Logo de spa de unhas elegante em preto e dourado com isotipo geométrico em espaço negativo.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755042129043-logo-la-marca-es-un-spa-de-unas-nombre-m_9F8RJVx-Q6WAoyhkJnNW8g_faOXj3ouSzScumhTafKXxg.jpeg",

    "fullPrompt": "Luxury logo for 'MERAKI NAILS'. Colors: black, coffee, gold. Geometric isotype with negative space nail shape. Modern serif typography."

  },

  {

    "id": "27e2bec2-4cf4-40ab-967e-95f287f844c6",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "PETER COSMIC",

    "description": "Arte digital surreal do nome Peter em cores de nebulosa fluindo como energia cósmica.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755042198295-a-surreal-digital-art-portrait-showcases__AzwdH4WTAGF5gHzpuH2yA_qqwcaxrcRHu3tppbOvmM8A.jpeg",

    "fullPrompt": "Surreal digital portrait of 'Peter' in vibrant nebula colors. Swirling hues of crimson, gold and emerald against an indigo space backdrop."

  },

  {

    "id": "ce4fbe22-4a7e-4e44-80d0-b1c78a238b43",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "AVI RAMB NEON",

    "description": "Tipografia de vanguarda inspirada em impressão calcográfica com linhas horizontais e cores neon vibrantes.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755098974273-a-captivating-digital-art-piece-showcase_ZYVzqyvuRXyakCApzR6_kg_fUTuw6M_TK2WZUv1JSDzlg.jpeg",

    "fullPrompt": "Avant-garde typography 'Avi Ramb'. Stacked newspaper lines style, neon palette, floating over black background with silver grains."

  },

  {

    "id": "3eac71b7-58b9-4fe8-ba03-c0a55664a19c",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "ALANIE FLORAL",

    "description": "Render 3D delicado com letras iridescentes e uma rosa de cristal multicolorida com corações.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755099170235-a-stunning-3d-render-showcasing-the-eleg_pQB2pyxfTUGI9R4AJ8iWfQ_AbeaSVYiSS2TnUelUZcuyg.jpeg",

    "fullPrompt": "3D render of 'Alanie' woven in floral design. Iridescent blue/pink/gold letters, 3D crystal rose, yellow hearts, bokeh background."

  },

  {

    "id": "7a7260a6-8aeb-4a89-bc75-195591c986af",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "CLARISSE LUXURY",

    "description": "Design de logo em caixa de presente luxuosa com filigrana dourada sobre mármore Carrara.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755102890798-a-3d-render-showcases-a-luxurious-gift-b_GnDKLtFiSPCAE1K3lMXWKg_a0w6cbOUSHCD4RMrRwyQQg.jpeg",

    "fullPrompt": "3D luxury gift box logo 'Clarisse'. Blush pink, gold filigree, satin ribbon, polished marble surface, studio lighting."

  },

  {

    "id": "aa7bebab-3701-4e7f-8b87-14d135960a4d",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "JOSYE ALVES",

    "description": "Render tipográfico 3D em vidro translúcido com gradiente multicolorido e brilho especular.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755310616718-7B32B4F2-F772-41AB-91D6-9E88D7364928.png",

    "fullPrompt": "3D typographic render of 'Josye Alves' in cursive. Multicolor gradient, glass material with colorful particles, studio lighting."

  },

  {

    "id": "7254037c-1c69-4ecd-8c53-c76348561a8e",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "JW.ORG GOLD",

    "description": "Render luxuoso com letras em gradiente dourado e azul pastel, emoldurado por flores de hibisco.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755558855037-a-luxurious-3d-render-showcases-the-eleg_m0MjoheXQted1m9bwj-fDw_AGS5Q4SSRZG03VPPXR0Rew.jpeg",

    "fullPrompt": "Luxurious 3D render of 'JW.ORG'. Gold and pastel blue gradient, embossed text, white background with golden sparkles."

  },

  {

    "id": "4ca2984c-0d88-48fc-950d-4cc5b7c47466",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "IMPÉRIO STRONG",

    "description": "Logo abstrato inspirado em fortaleza com acentos dourados e tipografia sans-serif moderna.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755558900339-a-photograph-showcasing-the-abstract-sym_yign1X0jREOn9_9XmX5kuA_D1BFs6SZRAiMtdzonJmhMQ.jpeg",

    "fullPrompt": "Abstract symbol logo 'Império Strong'. Matte black, geometric fortress structure, golden crown accents, minimalist studio background."

  },

  {

    "id": "88452d2e-e723-4c72-9ed1-f718d58fae3c",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "MAGGIE WATER",

    "description": "Render 3D ultra-realista com o nome formado por respingos de água e fumaça dinâmica em fundo preto.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755559058990-a-stunning-ultra-realistic-3d-rendering-_FoObFvW1T32mYs06X2nURQ_HdSVANOJTGyoNYOiasRTVA.jpeg",

    "fullPrompt": "Ultra-realistic 3D rendering of 'Maggie'. Letters formed by water splashes and smoke, cinematic effect, black background."

  },

  {

    "id": "f9ca6b11-f2fd-4da4-a9bd-d32620216764",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "ROSI ICE",

    "description": "Escultura monumental de gelo do nome Rosi em um campo de neve sob o sol poente.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755563703047-a-breathtaking-3d-render-showcases-a-mon_RrEypc1jQcCStoMPVYrvsg_Oab-T2j1QfS4yil2lsapuA.jpeg",

    "fullPrompt": "3D render of a monumental ice sculpture 'ROSI'. Ornate serif lettering, silver floral patterns, snowfield and pine tree background."

  },

  {

    "id": "341e5418-82b0-4891-a3b5-4c049c44141c",

    "tag": "IMAGENS LOGOS / NOMES",

    "title": "ESSENTIA",

    "description": "Frasco de perfume de luxo com gotas de água e líquido dourado sobre superfície reflexiva preta.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755563861364-a-photorealistic-3d-render-depicts-the-a_pfPrIpPsTwGCS9ngcC9Cbg_TzGyhvZIQGaxCtrsPoq7YA.jpeg",

    "fullPrompt": "Perfume bottle labeled 'ESSENTIA'. Clear glass, golden liquid, water droplets, beam of warm light, minimalist luxury setting."

  },
  {

    "id": "7e5dcac2-7128-4dec-9c77-8f1fd466b031",

    "tag": "IMAGENS MINIATURAS",

    "title": "BATULA COLLECTIBLE",

    "description": "Figura colecionável de vinil detalhada de um gato morcego em um diorama de beco com iluminação neon.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757001126096-assets_task_01k4ajw1xweg7rjmhtx8s9scsr_1756997054_img_0.webp",

    "fullPrompt": "Uma figura colecionável de vinil altamente detalhada, design arrojado e realista. Aparência de vinil de veludo. Batula — paródia de gato preto com olhos amarelos e pequenas asas. Foto de ação com capa esvoaçante saltando para a frente. Diorama de beco com lixeira e poste de luz, iluminação de estúdio realista e barras de luz neon ao fundo."

  },

  {

    "id": "22dc27fe-81ca-41c1-a8cf-c5670016b147",

    "tag": "IMAGENS MINIATURAS",

    "title": "HORTIFRUTTI DIORAMA",

    "description": "Trabalhadores em miniatura processando frutas gigantes com ferramentas de construção em uma cozinha hiper-realista.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755254422264-IMG_6575.jpeg",

    "fullPrompt": "Top-down view of miniature workers cutting and processing enormous fruits with construction tools. Giant oranges, watermelons, and strawberries with rich saturated colors. Workers wearing safety helmets using saws, chisels, and cranes. Hyperrealistic style, high-end product photography, crisp sharp details."

  },
      {

    "id": "a703c460-12c8-4ec6-b7fe-7949cb4271be",

    "tag": "IMAGENS ÓLEO ACRÍLICO",

    "title": "Panda Despenteado",

    "description": "Pintura em estilo óleo acrílico de um bebê panda com cabelo bagunçado e uma careta engraçada.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755036057845-5033299782688419612.jpg",

    "fullPrompt": "Female panda baby with crooked tuft and disheveled hair, one eye half-closed and her mouth twisted in a funny grimace, looking like she just got out of a funny nightmare. Acrylic oil painting style, capricious, light background, with total focus on the animal."

  },
    
  {

    "id": "5da7a8e2-5254-435e-82ac-88ac6726468d",

    "tag": "IMAGENS PARA CRIATIVOS DE ANÚNCIOS",

    "title": "AL SHAIBANI RESTAURANT",

    "description": "Anúncio vibrante de fachada de restaurante do Oriente Médio com ilustrações de pratos e estilo vintage.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755563610339-a-vibrant-exterior-product-advertisement_jLlmOZqgTxabZ-YTjQXSYw_LTOUOCspQgG7YfYylweGtQ.jpeg",

    "fullPrompt": "Vibrant exterior product advertisement for 'Al-Shaibani Super Deluxe Restaurant'. Hand-painted signs with whimsical illustrations of grilled meats and salads. Golden late afternoon light, textured stucco walls, nostalgic and appetizing aesthetic."

  },

  {

    "id": "61e303fd-8848-47d8-9b1c-67706ff16e61",

    "tag": "IMAGENS PARA CRIATIVOS DE ANÚNCIOS",

    "title": "SOCIAL LISTENING INSIGHTS",

    "description": "Ilustração digital de post carrossel para Instagram em um smartphone comparando marcas famosas de café.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755563545943-a-vibrant-digital-illustration-depicting_JDQDm5u5RUu56K2ejeCZtA_K2imareeSkWd3I8Q_WYA9g.jpeg",

    "fullPrompt": "Vibrant digital illustration of an Instagram carousel post on a smartphone screen. Slides comparing Starbucks vs Tim Hortons with data icons, sentiment analysis charts, and minimalist design."

  },

  {

    "id": "19a25c32-4c7d-4b56-a2b8-6bf6cd1247d1",

    "tag": "IMAGENS PARA CRIATIVOS DE ANÚNCIOS",

    "title": "CAMPANHA HYUNDAI 5%",

    "description": "Visão aérea criativa de estacionamento onde os carros formam o número '5' com símbolo de porcentagem no asfalto.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755265587972-6D17B6CC-C08E-4767-8F18-75762E97188D.png",

    "fullPrompt": "Creative advertising top-down view of a parking lot. Silver cars parked forming the number '5'. White '%' symbol painted on asphalt. Hyundai logo and text 'Ative sua viagem com 5%'. Realistic photographic style."

  },

  {

    "id": "13b73b02-c145-423f-92f6-9a88d57d1285",

    "tag": "IMAGENS PARA CRIATIVOS DE ANÚNCIOS",

    "title": "SALE LOVELY CALÇADOS",

    "description": "Anúncio minimalista de moda com tiras de sapato vermelho formando a palavra 'SALE'.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755264813949-1272AB1E-E7F7-4BBB-A2D6-5838BD8132E5.png",

    "fullPrompt": "Minimalist advertising of red high heels where straps form the word 'SALE'. Beige background, sophisticated style. Text 'Descontaço 50%' and 'LOVELY CALÇADOS & BOLSAS' at the bottom."

  },

  {

    "id": "7a7260a6-8aeb-4a89-bc75-195591c986af",

    "tag": "IMAGENS PARA CRIATIVOS DE ANÚNCIOS",

    "title": "CLARISSE LUXURY GIFT",

    "description": "Render 3D de caixa de presente luxuosa rosa com dourado para lojas de presentes personalizados.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755102890798-a-3d-render-showcases-a-luxurious-gift-b_GnDKLtFiSPCAE1K3lMXWKg_a0w6cbOUSHCD4RMrRwyQQg.jpeg",

    "fullPrompt": "3D render of a luxurious blush pink gift box with gold filigree and satin ribbon. Initials 'C' in golden crest. Polished marble surface, studio lighting, refined luxury aesthetic."

  },

  {

    "id": "0f556b87-901c-45de-a98c-034100893198",

    "tag": "IMAGENS PARA CRIATIVOS DE ANÚNCIOS",

    "title": "CAPRICCIO PIZZARIA",

    "description": "Anúncio de pizzaria com foco em pizza artesanal e ambiente aconchegante ao fundo.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755099080387-a-vibrant-product-shot-advertisement-for_WKc3yvm7SNmJaHdUK3O9jQ_tIMS9BXjQHaAmg0ae-4qjA.jpeg",

    "fullPrompt": "Vibrant product shot for Capriccio Pizzaria. Wood-fired pizza with mozzarella and basil on checkered tablecloth. Rustic brick wall, blurred restaurant interior with bokeh lights."

  },

  {

    "id": "66d85da2-72d0-4d3f-bbce-c0c911601a7e",

    "tag": "IMAGENS PARA CRIATIVOS DE ANÚNCIOS",

    "title": "MYSTERIOUS RIDDLES",

    "description": "Design de embalagem em pixel art estilo retrô para jogos de cartas com temática misteriosa.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755039772112-a-detailed-pixel-art-design-for-a-playin_vmWi5R7BRsGjmcGo-zg1-w_JbmXprh8Tk6zxXzVWn5W3A.jpeg",

    "fullPrompt": "Detailed pixel art design for playing card box. 'THE MYSTERIOUS RIDDLES' text, large red question mark, 8-bit calathea leaves. Black background, SNES graphics aesthetic."

  },

  {

    "id": "f6cf91d0-b85d-4181-bea1-6e8b8fa0763f",

    "tag": "IMAGENS PARA CRIATIVOS DE ANÚNCIOS",

    "title": "CURSO DE ANIMAÇÃO IA",

    "description": "Criativo estilo Pixar/Disney para anúncio de ferramentas gratuitas de animação digital.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755027128054-ChatGPT%20Image%2012%20de%20ago.%20de%202025,%2016_31_26.png",

    "fullPrompt": "Ilustração estilo Pixar/cartoon vibrante. Personagem sorridente apontando para tela com animações saindo dela. Texto integrado: 'Você Não Precisa Pagar por Ferramenta pra criar Animações de Alta Qualidade'. Ambiente criativo digital."

  },
  {

    "id": "bbbc38a8-5a58-4c90-9fe4-2b90d1047bb9",

    "tag": "IMAGENS PRODUTOS",

    "title": "COCA-COLA REFRESH",

    "description": "Arte digital dinâmica de lata de Coca-Cola em segmentos flutuantes com gelo e respingos realistas.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1758248987691-assets_task_01k5bngxetf43azh31btfrxx24_1758107125_img_3.webp",

    "fullPrompt": "Arte digital dinâmica de uma lata de Coca-Cola cortada em segmentos flutuantes. Cubos de gelo realistas, respingos e condensação. Fundo gradiente vermelho vibrante, estilo publicitário hiper-realista e comercial."

  },

  {

    "id": "32a0a3b8-a480-4ba0-ad3e-c695bb7b9f47",

    "tag": "IMAGENS PRODUTOS",

    "title": "M. ROSA CHAMPAGNE",

    "description": "Garrafa de champagne premium em areia branca tropical com flores de hibisco e luz dourada.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755564128280-a-luxurious-product-shot-advertisement-s_Vvc-E9SvTWSzRax7hDreGw_XUEuMouETtSvpFf0qmcQGA.jpeg",

    "fullPrompt": "Luxurious product shot of 'M. ROSA' champagne on white sand. Radiant tropical sun, condensation droplets, hibiscus and plumeria flowers. Pink champagne hue, shallow depth of field, exotic elegance."

  },

  {

    "id": "8b31b7a6-fc13-48b1-a61f-e37c2f2ba48f",

    "tag": "IMAGENS PRODUTOS",

    "title": "LACTAOTEA TROPICAL",

    "description": "Lata de chá gelado em areia de praia tropical com cubos de gelo e clima de verão.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755568649208-a-vibrant-sun-drenched-photograph-showca_-REjHqyTSi21T6mTmOJrHQ_VASq_uqkTsO9t9uonmPB1w.jpeg",

    "fullPrompt": "Vibrant photograph of 'LACTAOTEA' can in golden sand. Moss green and white label, ice cubes, blurred beach umbrella and towel. Late afternoon sun, tranquil summery atmosphere."

  },

  {

    "id": "5141d2f1-12e3-4269-b92b-ea7464aefe17",

    "tag": "IMAGENS PRODUTOS",

    "title": "ESSENTIA PERFUME",

    "description": "Frasco de perfume luxuoso sobre superfície preta reflexiva com gotas d'água em cascata.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755563831772-a-photograph-of-a-perfume-bottle-labeled_XXYjMHRERX6lbqP0bQ06Kg_S-8jbInQQ722DLfnjM2lfw.jpeg",

    "fullPrompt": "Perfume bottle 'ESSENTIA' on reflective black surface. Golden liquid, water droplets cascading down glass. Single beam of warm yellow light, charcoal gray background, minimalist luxury."

  },

  {

    "id": "15faec03-64d4-495f-8116-e3b3bda2b865",

    "tag": "IMAGENS PRODUTOS",

    "title": "JBL TUNE BLACK",

    "description": "Fones de ouvido JBL pretos em superfície de concreto polido com design minimalista.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755563797917-a-photograph-of-a-sleek-black-jbl-tune-5_qhjem6RMSIaFUqFMrjSvfg_S2UkGOWaSFO1-V6lNe2oiA.jpeg",

    "fullPrompt": "Black JBL Tune 520BT headphones on polished concrete. Minimalist design, silver accents, soft diffused light. Subtle succulent plant in bokeh background."

  },

  {

    "id": "a18887be-4a7c-4e01-a5bf-477c1feedc89",

    "tag": "IMAGENS PRODUTOS",

    "title": "COCA-COLA CHERRIES",

    "description": "Lata de Coca-Cola personalizada com cerejas sobre musgo e fundo de montanhas ao pôr do sol.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755103462504-a-photograph-of-a-vibrant-red-coca-cola-_CIwNxnc_Q-awSVH1WVPvEQ_wdRnT5wmSKKGtx2vQInZpw.jpeg",

    "fullPrompt": "Coca-Cola can 'Angela & Paco' on emerald green moss. Five red cherries at base, snow-capped mountain backdrop, pastel sunset sky, diffused lighting."

  },

  {

    "id": "355ce52c-affe-4c7d-b36c-eb82c25ea626",

    "tag": "IMAGENS PRODUTOS",

    "title": "SKINCARE SAKURA",

    "description": "Conjunto de cosméticos minimalistas com flores de sakura sobre lenço de seda.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755103408199-a-close-up-photograph-of-an-iconic-luxur_-QARcGscRnG_OZ_YKPZ5EA_sQTEvsyiTw2qHeONXPJobA.jpeg",

    "fullPrompt": "Luxury skincare set, minimalist bottles without labels. Delicate sakura blossoms, colorful silk scarf background. Soft natural light, high-end cosmetic photography."

  },

  {

    "id": "ccdcb6e2-40a4-43c3-93a8-b0c0f0e4427b",

    "tag": "IMAGENS PRODUTOS",

    "title": "FOREST BLOOM HAIR",

    "description": "Elixir capilar em frasco de vidro sobre musgo em uma selva tropical com luz filtrada.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755103344554-a-photograph-showcasing-a-bottle-of-fore_a7sdTZp-SRqX5GIeD6J0iw_qzezg0XqSLq7mC148W_IYg.jpeg",

    "fullPrompt": "Bottle of 'Forest Bloom Hair Elixir' on green moss in a jungle. Mango illustration on label, vibrant orchids and ferns around. Dappled sunlight through canopy."

  },

  {

    "id": "d2a2e8c3-c3a6-41f6-ba27-efa60c61d668",

    "tag": "IMAGENS PRODUTOS",

    "title": "NECLAR SKIN MIST",

    "description": "Spray facial de Aloe Vera sobre folhas frescas com estética de beleza clean.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755103075152-a-photograph-of-a-neclar-cica-aloe-boost_GHf3URW_TnGcqF_nb7znRw_fvwjxYrQRviS62Rqvx-2HQ.jpeg",

    "fullPrompt": "NECLAR Skin Mist bottle on aloe vera and centella leaves. Translucent green bottle, white sans-serif font. Diffused studio lighting, wellness and clean beauty aesthetic."

  },

  {

    "id": "31719ee4-7d6a-4999-9e79-874158b18da7",

    "tag": "IMAGENS PRODUTOS",

    "title": "JARRAH HONEY",

    "description": "Pote de mel premium sobre pedra vulcânica em cenário de dunas de areia.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755102964574-a-photograph-of-a-500g-jarrah-honey-jar-_g-tOtZawSjK31_DarcVgxg_dHMWsiHdRu-7Kj7Qr85EIg.jpeg",

    "fullPrompt": "Jarrah Honey jar on black volcanic stone. Wooden dipper with dripping honey, desert sand dunes background, luxury amber gradient, cinematic studio lighting."

  },
  {

    "id": "470cb6e3-f106-4884-85db-57c256cb4996",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "DESIGNER DIORAMA",

    "description": "Miniatura colecionável 3D hiper-detalhada de um workspace de designer com iluminação Octane.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757508741168-assets_task_01k4ssmkn1f4rakz3edn1s8nt2_1757507482_img_1.webp",

    "fullPrompt": "Diorama colecionável modelado em 3D, estilo isométrico, espaço de trabalho de designer em base de acrílico preto. Inclui MacBook, letreiro neon 'Malshan Graphics', AirPods e café. Renderizado em Octane/Blender, iluminação cinematográfica e texturas hiper-realistas."

  },

  {

    "id": "7501b024-765f-421c-8eec-ce27e057669d",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "MINECRAFT DREAD",

    "description": "Cena atmosférica de Minecraft em uma caverna sombria com a figura lendária de Herobrine.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755564294122-a-photograph-of-a-lone-player-character-_ExiiOqn1Q0GTwP-N6hPyIA_ZOmKO-ISQiiI8fSGh8tQQA.jpeg",

    "fullPrompt": "Photograph of a lone player in a dimly lit Minecraft cave. Worn leather armor, fearing the shadowy figure of Herobrine. Stalactites, flickering torchlight, and eerie shadows on blocky stone walls."

  },

  {

    "id": "daa636e8-958e-4fe8-9a87-e6a4f9c9f7f6",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "COSMIC DOG MOUNTAIN",

    "description": "Pintura surrealista de um cão translúcido em uma montanha mística multicolorida.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755564091204-a-captivating-surrealistic-painting-feat_zmqSI1RrQG6_jNBR4I3Plw_W9t4KadiQEKv0nk0_zhaBQ.jpeg",

    "fullPrompt": "Surrealistic painting of a graceful dog atop a fantastical mountain with purple, blue, and green hues. Translucent fur shimmering with otherworldly light, mystical aura, dreamlike world."

  },

  {

    "id": "969ec09e-32f5-464a-aece-1ae0e498049a",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "VALE DA LUA VERMELHA",

    "description": "Paisagem de fantasia sombria com uma lua carmesim gigante e rio brilhante.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755253427855-IMG_6570.jpeg",

    "fullPrompt": "Ultra-detailed dark fantasy landscape at night. Massive glowing crimson moon, jagged mountain peaks, glowing river reflecting red light. Deep mist, silhouettes of birds, 8K cinematic composition."

  },

  {

    "id": "5334abc4-3090-4c30-a836-9ef83ad7819b",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "JAPANESE ZEN PANORAMA",

    "description": "Panorama onírico unindo oceano, neve, deserto e uma árvore de bordo japonesa central.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755103240707-a-photograph-of-a-solitary-ancient-japan_xee_2EOkT4CZi_sniVHdug_gqETDybBSsWyQUI6UN3bVg.jpeg",

    "fullPrompt": "Ancient Japanese maple tree in a dreamlike panorama. Blend of turquoise ocean, snow mountains, aurora sky, and golden desert dunes. Wide-angle lens, meditative calm, ethereal lighting."

  },

  {

    "id": "0da6f274-8fd5-4cca-8f0c-66130d30038c",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "CLOCKWORK FAIRY",

    "description": "Fada mecânica construída com engrenagens de prata dançando sobre uma moeda de bronze.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755099332659-a-captivating-analog-vintage-photograph-_Z7q833KbS3CRw14baNzggA_NGt9HXspSx6jbpmclVlYEw.jpeg",

    "fullPrompt": "Analog vintage photograph of a minuscule fairy made of silver gears and springs. Dancing on a bronze coin, wings made of aged book pages. Steampunk aesthetic, dreamlike diffused light."

  },

  {

    "id": "affc242a-eb00-4dff-9dd4-fb50d2835be4",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "CLOUD FACE OCEAN",

    "description": "Perspectiva Fisheye de um rosto gigante nas nuvens soprando ondas no mar cristalino.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755038292923-assets_task_01k2g2v3vqfb09pnxb3sn4nze5_1755034030_img_2.webp",

    "fullPrompt": "PHOTO FISHEYE huge face from clouds blowing and making big waves crystal clear sea. Surreal fantasy perspective."

  },

  {

    "id": "b5ee9f99-3f31-4316-844f-0100c622325a",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "ÁRVORE DO CONHECIMENTO",

    "description": "Floresta futurista onde figuras humanas absorvem palavras holográficas das raízes das árvores.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755037266311-5024267354795781727.jpg",

    "fullPrompt": "Futuristic forest with bioluminescent plants. Human figure absorbing holographic words from tree roots in soft golden light. Sci-fi fantasy atmosphere."

  },

  {

    "id": "cd02ea95-21af-42bf-a239-6a67684f1516",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "LEÃO DE FUMAÇA",

    "description": "Depreciação abstrata de uma cabeça de leão feita de fumaça e fluidos coloridos.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755037072566-5026018236868701873.jpg",

    "fullPrompt": "Abstract smoke ripple of a lion’s head statue. Wispy strokes, fluid forms, soft blue, purple, and orange tones on a white background."

  },

  {

    "id": "0097ef44-9b71-40a0-b36f-bb9e1ee9f333",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "GALAXY COFFEE CUP",

    "description": "Xícara de café transbordando para uma galáxia com fumaça formando constelações.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755036988881-5024141026922704802.jpg",

    "fullPrompt": "A cup of coffee overflowing into a surreal galaxy. Liquid becomes a starry night sky, steam as glowing constellations. Magical realism, cinematic lighting, 8K."

  },

  {

    "id": "479c15c3-6a1d-4f84-8d2e-8212a302ef1a",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "ZEN TEA GARDEN",

    "description": "Xícara de chá verde que abriga um jardim japonês com pontes e bonsais em miniatura.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755036936809-5024141026922704788.jpg",

    "fullPrompt": "Teacup forming a tranquil Japanese garden. Green tea as a river, tiny bridges and bonsai trees. Misty atmosphere, zen composition, soft lighting."

  },

  {

    "id": "3d7308f5-b19d-4d2e-8b3b-ca54a1d7c6ef",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "BUTTERFLY STEAM",

    "description": "Xícara de café onde o vapor se transforma em borboletas de luz em um amanhecer onírico.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755036829645-5024141026922704766.jpg",

    "fullPrompt": "Coffee cup on a saucer with steam rising and forming butterflies made of light. Sunrise sky background, fantasy realism, elegant 8K composition."

  },

  {

    "id": "b70a2b27-ff29-4b39-b629-e334021fb30d",

    "tag": "IMAGENS SURREALISMO / FANTASIA",

    "title": "STRAWBERRY DEER",

    "description": "Cervo bebê feito inteiramente de morango em um campo mágico de frutas gigantes.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755036696822-5028270036682387166.jpg",

    "fullPrompt": "Magical baby deer made of strawberry texture. Antlers as fresh leaves, red skin with seeds. Pixar 3D style, field of glowing oversized strawberries, fairytale lighting."

  },
    {
    "id": "0f0c7c19-cb4f-4595-9472-2acac39ea8f5",
    "tag": "IMAGENS TIRINHAS",
    "title": "TIRINHA PERSONALIZADA",
    "description": "Estrutura de tirinha com 4 quadros para narrativas sequenciais, adaptável a diferentes estilos como Comics ou Anime.",
    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755023091483-IMG_7307.jpeg",
    "fullPrompt": "Uma tirinha com 4 quadros no estilo cartoon vintage/comics, com contornos grossos e textura de papel. Personagem consistente baseado em foto de referência. Quadro 1: Personagem estressado no notebook. Quadro 2: Sorrindo e explicando algo. Quadro 3: Confiante dando uma dica. Quadro 4: Apontando para o leitor. Inclui balões de fala personalizáveis e estilo visual consistente em todos os painéis."
  },
    
  {

    "id": "cc390bac-622c-4b10-b332-c456ceb0e2f8",

    "tag": "IMAGENS ULTRA REALISMO",

    "title": "RIO EM UMA MALA",

    "description": "Mundo em miniatura do Rio de Janeiro transbordando de uma mala de viagem moderna.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757766814928-assets_task_01k513gdq7fzqrkhyn303bx4ne_1757752667_img_0.webp",

    "fullPrompt": "Create a hyper-realistic poster depicting a miniature world representing Rio de Janeiro, Brazil, inside an open modern rolling suitcase. Iconic landmarks like Christ the Redeemer, Sugarloaf, and Maracanã. Photorealistic, ultra-detailed textures of stone, sand, and water. 2:3 ratio, portrait."

  },

  {

    "id": "42344b51-5d08-4799-9271-3ece847ebb67",

    "tag": "IMAGENS ULTRA REALISMO",

    "title": "CONSTRUÇÃO DIGITAL",

    "description": "Homem sendo construído por engenheiros em miniatura com estrutura holográfica.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757330482814-assets_task_01k4m561t3evfsfndmpdk3we2x_1757318276_img_1.webp",

    "fullPrompt": "Ilustração 3D hiper-realista. Homem metade humano e metade estrutura holográfica azul. Trabalhadores em miniatura com coletes e capacetes construindo o corpo. Fundo com monitor exibindo software 3D. Iluminação cinematográfica."

  },

  {

    "id": "aa624e0f-e5b0-48cf-af38-0ced7f6b65c8",

    "tag": "IMAGENS ULTRA REALISMO",

    "title": "NEYMAR DOUBLE EXPOSURE",

    "description": "Obra-prima de dupla exposição com Neymar Jr e cenas de jogo em estádio moderno.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757111174884-assets_task_01k4cdmsfsf1ctwcp0awzrwk66_1757058675_img_0.webp",

    "fullPrompt": "Double Exposure Cinematic Artwork. Silhouette of Neymar Jr. inside which a dramatic football match unfolds. Rain, stadium lights, motion blur. Hyper-realistic, IMAX 4K style, tropical green and neon blue tones."

  },

  {

    "id": "21edafef-c0e3-4012-995e-6eb5e6c1f494",

    "tag": "IMAGENS ULTRA REALISMO",

    "title": "ACTION FIGURE MESSI",

    "description": "Figura de ação realista em escala 1/7 sobre mesa de trabalho profissional.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757110914414-assets_task_01k4djwearfz7tgj70sk1wrq4p_1757097787_img_1.webp",

    "fullPrompt": "Hyper-detailed 1/7 scale action figure on a computer desk. Monitor showing ZBrush 3D model. Bandai style window box in the background. Premium lighting, extreme attention to detail, cinematic depth of field."

  },

  {

    "id": "5668a8e8-2bd8-4de9-b608-7f2ec65a7366",

    "tag": "IMAGENS ULTRA REALISMO",

    "title": "STATUE OF LIBERTY SELFIE",

    "description": "Estátua da Liberdade com óculos de sol e smartphone tirando uma selfie.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757000997038-assets_task_01k4a9p1n4eghs7bwzwwpap5x2_1756987426_img_0.webp",

    "fullPrompt": "Hiper-realista, Estátua da Liberdade tirando selfie. Detalhes modernos: óculos refletindo Manhattan, batom vermelho, smartphone. Skyline de Nova York ao fundo, cores vibrantes, ângulo grande angular."

  },

  {

    "id": "3899d4a4-5cd2-4d20-aff6-7663cf1607f3",

    "tag": "IMAGENS ULTRA REALISMO",

    "title": "FOX BOXER",

    "description": "Retrato cinematográfico de uma raposa lutadora de boxe em um ringue profissional.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757000942077-assets_task_01k4a70kekf7ht6w6sqqre2zs0_1756984640_img_0.webp",

    "fullPrompt": "Ultrarrealistic portrait of an anthropomorphic fox as a professional boxer. Satin shorts, red gloves, sweat on fur. Arena with crowd and spotlights. Intense, dynamic mood, 8K resolution."

  },

  {

    "id": "cf37e29d-201c-4c46-b465-3c068be4391a",

    "tag": "IMAGENS ULTRA REALISMO",

    "title": "TRUMP PENGUIN",

    "description": "Donald Trump estilizado como o vilão Pinguim em uma Gotham City caótica.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1757000550803-assets_task_01k49s14dxejab0m43fvjyv512_1756969985_img_0.webp",

    "fullPrompt": "Double Exposure Artwork. Donald Trump as The Penguin (tuxedo, monocle, hat). Overlay of Gotham City at night in chaos. High contrast, film noir vibe, photorealistic cinematic sharpness."

  },

  {

    "id": "0e2d349d-3dea-4bfd-9927-33ae54712c3a",

    "tag": "IMAGENS ULTRA REALISMO",

    "title": "SELFIE ESPONTÂNEA",

    "description": "Selfie noturna casual com aparência de foto real de iPhone.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1756899375575-20250903_113326_result_b1209597-0523-4d0c-ad37-ef406a3d1dbc.jpeg",

    "fullPrompt": "Extremamente comum e banal selfie de iPhone. Iluminação irregular de postes, ângulo estranho, vibe autêntica. Momento noturno espontâneo capturando rostos com realismo cru."

  },

  {

    "id": "ad83caee-4dc5-49a8-96e3-e5f76bd053da",

    "tag": "IMAGENS ULTRA REALISMO",

    "title": "EXPLODED BURGER",

    "description": "Visão explodida hiper-realista de um hambúrguer gourmet flutuando no ar.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755571427188-a_hyper-realistic_mid-air_exploded_view_of_a_towering_veggie_burger_with_multigrain_bun_sharp_chedd_bq1wc47ic8orpmqp2ebs_0.png",

    "fullPrompt": "Hyper-realistic mid-air exploded view of a veggie burger. Ingredients floating in dynamic suspension. Warm directional lighting, extreme depth of field, vibrant organic colors."

  },

  {

    "id": "e7afbc15-89f3-477a-9207-d9f5b7cea35b",

    "tag": "IMAGENS ULTRA REALISMO",

    "title": "VIDEO CALL CAT",

    "description": "Gato e criança participando de uma videochamada com texturas fotorrealistas.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/195a276e-af54-4c20-b5ce-e34c157372ed/1755039082680-assets_task_01k2fs97wsfjrrgdms1dj6n41y_1755024080_img_1.webp",

    "fullPrompt": "Extremely realistic scene of a fluffy cat and child side by side at a table with a smartphone. Detailed fur, skin pores, natural eye reflections. Medium close-up, cinematic color grading, 4K."

  },
  {

    "id": "94f05cf4-9eb5-4f8a-8d31-04de3f8e6b25",

    "tag": "NANO AI STUDIO",

    "title": "PERFIL URBAN REFLECTION",

    "description": "Retrato close-up fotorrealista com reflexos detalhados de uma metrópole tecnológica nas lentes dos óculos.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1758885380254-IMG_7686.png",

    "fullPrompt": "Ultra high quality 8K photorealistic close-up portrait. Subject wearing thick-framed black sunglasses in profile view. Lenses reflect a dynamic urban landscape with glowing yellow and orange lights. Natural skin textures, freckles, cinematic volumetric lighting, and soft bokeh background. Dark knitted beanie for texture."

  },

  {

    "id": "6492545f-96f8-4dd1-82e1-e3a9b95e4b76",

    "tag": "NANO AI STUDIO",

    "title": "PREMIUM OFFICE LOGO",

    "description": "Transforma sua logo em um letreiro metálico 3D premium em uma parede de recepção moderna.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1758623469509-IMG_7650.png",

    "fullPrompt": "Ultra-realistic 3D render of the uploaded logo on an indoor office wall. Metallic silver finish with brushed texture, sharp clean edges, and realistic depth. Soft warm spotlights, modern wooden reception desk, professional office atmosphere, cinematic lighting, 3:4 ratio."

  },

  {

    "id": "ba8b64e5-3167-4a84-a595-30207a78b10f",

    "tag": "NANO AI STUDIO",

    "title": "LOGO CORPORATIVO 3D",

    "description": "Renderização realista de logomarca aplicada em ambiente de lobby com iluminação de estúdio.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1758623293531-IMG_7650.png",

    "fullPrompt": "Ultra-realistic 3D render of the uploaded logo. Premium silver metallic finish on lobby wall. Perfect proportions, no distortion, realistic depth. Background features a well-lit office space with plants and subtle furniture. Extreme texture detail and shallow depth of field."

  },
  {

    "id": "36146c29-bee4-4a3c-b2c8-2956be6ff3b7",

    "tag": "VÍDEOS CURTOS",

    "title": "LAGARTA DE LÃ",

    "description": "Movimento macro detalhado de uma lagarta verde rastejando em uma planta de abóbora.",

    "image": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/89979645-37b3-4681-971e-c0b77a3bf2a9/1755253855913-IMG_6573.jpeg",

    "fullPrompt": "A green caterpillar, inching across a vibrant squash plant's branch, crawls towards a plump, ripe orange squash. Handheld camera follows its slow, deliberate movement, showcasing the plant's detailed textures and the caterpillar's tiny legs. Focus shifts between the caterpillar and the squash as it nears its destination. Bright, natural lighting."

  },
 {
    "id": "2779c513-e909-4f94-a120-b8b05b81a960",
    "titulo": "LOJA DE NATURAIS SEM AÇUCAR",
    "prompt_texto": "{ \"scene\": \"4K cinematic scene inside a modern natural products store. Shelves with colorful healthy snacks, bright labels and clean organization. A wooden counter displays zero-sugar items with a soft, natural lighting environment.\", \"characters\": [ { \"name\": \"Natural Products Seller\", \"description\": \"Brazilian woman in her late 20s, wearing a green apron, friendly and confident.\", \"actions\": [ \"Holds a jar of zero sugar jam and shows the label to the camera.\", \"Opens the lid and displays the texture with a small wooden spoon.\", \"Points to the ‘Zero Açúcar’ seal while smiling.\", \"Makes a confident gesture with her hand as she speaks.\" ], \"speech\": \"Cliente vem atrás de saúde, e aqui ele encontra opções gostosas, leves e totalmente sem açúcar.\", \"voice\": \"Brazilian Portuguese voice, natural, happy and persuasive.\" } ], \"environment\": { \"location\": \"Modern natural products store.\", \"details\": \"Glass shelves, wooden counter, eco-friendly packaging, green plants, warm ambient lighting.\" }, \"camera\": { \"angle\": \"Medium close-up focused on the seller and the jar she is presenting.\", \"movement\": \"Smooth dolly-in as she reveals the texture, then subtle tilt up to her face.\", \"focus\": \"Sharp on product and hand gestures, soft blur on the background.\" }, \"audio\": { \"dialogue\": \"Cliente vem atrás de saúde, e aqui ele encontra opções gostosas, leves e totalmente sem açúcar.\", \"ambient\": \"Soft store ambience, faint background music, slight rustling of packaging.\" }, \"technical\": { \"resolution\": \"4K\", \"model\": \"Veo 3\", \"style\": \"Cinematic healthy-products advertisement\", \"frame_rate\": \"24fps\", \"duration\": \"10–12 seconds\" }, \"negative_prompts\": [ \"no cluttered shelves\", \"no harsh neon lighting\", \"no unrealistic colors\", \"no subtitles\" ], \"mood\": \"Fresh, clean, healthy, persuasive.\" }",
    "video_exemplo_url": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764368976806-_scene_4k_202511281929_2w63y.mp4",
    "gif_url": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-gifs/1764368976806-_scene_4k_202511281929_2w63y.gif",
    "thumbnail_url": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764368979524.jpg",
    "sub_topico": "Comercial"
  },
  {
    "id": "3369058f-1742-4b91-a046-836d9357913a",
    "titulo": "LOJA DE PRODUTOS NATURAIS",
    "prompt_texto": "{ \"scene\": \"4K cinematic scene showing a natural products counter where custom fitness baskets are assembled. Healthy snacks, teas, supplements and zero-whatever products are neatly arranged as the seller builds a personalized basket.\", \"characters\": [ { \"name\": \"Healthy Lifestyle Consultant\", \"description\": \"Brazilian woman in her late 20s, friendly smile, energetic and charismatic.\", \"actions\": [ \"Selects different natural items and places them carefully inside the basket.\", \"Wraps the basket with transparent film and ties a ribbon.\", \"Raises the finished basket proudly toward the camera.\", \"Nods with satisfaction while speaking.\" ], \"speech\": \"Cada cliente tem um objetivo. Aqui a gente monta a cesta perfeita pra sua rotina saudável.\", \"voice\": \"Brazilian Portuguese voice, warm, energetic and uplifting.\" } ], \"environment\": { \"location\": \"Counter area of a natural products store.\", \"details\": \"Woven baskets, supplements, snacks, teas, small plants, warm lighting.\" }, \"camera\": { \"angle\": \"Overhead shot of items being placed into the basket, then medium shot of the seller presenting it.\", \"movement\": \"Gentle downward dolly toward the basket, then tilt up for the reveal.\", \"focus\": \"Strong detail on products, shallow depth-of-field around her face.\" }, \"audio\": { \"dialogue\": \"Cada cliente tem um objetivo. Aqui a gente monta a cesta perfeita pra sua rotina saudável.\", \"ambient\": \"Soft ambient music, slight rustling from packaging, store background noise.\" }, \"technical\": { \"resolution\": \"4K\", \"model\": \"Veo 3\", \"style\": \"Cinematic healthy-lifestyle basket promo\", \"frame_rate\": \"24fps\", \"duration\": \"10–12 seconds\" }, \"negative_prompts\": [ \"no disorganized items\", \"no dirty counter\", \"no harsh light reflections\", \"no subtitles\" ], \"mood\": \"Happy, healthy, personalized, premium.\" }",
    "video_exemplo_url": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764368930051-_scene_4k_202511281928_e5y58.mp4",
    "gif_url": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-gifs/1764368930051-_scene_4k_202511281928_e5y58.gif",
    "thumbnail_url": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764368956556.jpg",
    "sub_topico": "Comercial"
  },
  {
    "id": "7e242e06-8fc4-4de0-9cea-bef3737de1b0",
    "titulo": "LOJA DE TEMPEROS NATURAIS",
    "prompt_texto": "{ \"scene\": \"4K cinematic scene in a spices and natural seasonings section. Transparent jars filled with colorful spices line wooden shelves, creating a visually rich and aromatic environment.\", \"characters\": [ { \"name\": \"Herb & Spice Seller\", \"description\": \"Brazilian woman in her late 20s, expressive and warm, wearing earthy-toned clothing.\", \"actions\": [ \"Opens a jar of turmeric and lifts it gently to smell the aroma.\", \"Tilts the jar forward to display texture and color.\", \"Points to the label '100% Natural – Sem Corantes'.\", \"Smiles at the camera as she explains the quality.\" ], \"speech\": \"Nossos temperos são naturais de verdade. Sem corante, sem química, só sabor puro pra sua comida ficar incrível.\", \"voice\": \"Brazilian Portuguese voice, passionate, clean and authentic.\" } ], \"environment\": { \"location\": \"Natural spice and seasoning aisle.\", \"details\": \"Wooden jars, chalk labels, scoop utensils, aromatic colors, warm soft light.\" }, \"camera\": { \"angle\": \"Close-up of the spice jar, then medium shot capturing the seller and the shelf.\", \"movement\": \"Slow side-pan following her hand as she lifts the jar.\", \"focus\": \"Strong depth of field on the vibrant spices.\" }, \"audio\": { \"dialogue\": \"Nossos temperos são naturais de verdade. Sem corante, sem química, só sabor puro pra sua comida ficar incrível.\", \"ambient\": \"Soft rustling of jars, warm ambience, faint relaxing music.\" }, \"technical\": { \"resolution\": \"4K\", \"model\": \"Veo 3\", \"style\": \"Cinematic spices and natural-products promo\", \"frame_rate\": \"24fps\", \"duration\": \"10–11 seconds\" }, \"negative_prompts\": [ \"no artificial neon colors\", \"no messy shelves\", \"no dust on jars\", \"no subtitles\" ], \"mood\": \"Aromatic, natural, authentic.\" }",
    "video_exemplo_url": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-videos/1764368874607-_scene_4k_202511281927_96re9.mp4",
    "gif_url": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/veo3-gifs/1764368874607-_scene_4k_202511281927_96re9.gif",
    "thumbnail_url": "https://zxhpvxjtxtjydexjnfjj.supabase.co/storage/v1/object/public/media/thumbnails/prompt-1764368916873.jpg",
    "sub_topico": "Comercial"
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