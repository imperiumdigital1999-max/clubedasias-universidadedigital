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
  id: 'a75eb24e-df35-4a5c-9dd2-6f1f7d46056e',
  tag: 'IMAGENS EM VIDRO',
  title: 'Maçã Translúcida',
  description: 'Arte em vidro de caramelo translúcido com iluminação cinematográfica e detalhes macro ultra-realistas.',
  image: 'https://img.freepik.com/fotos-premium/uma-maca-de-vidro-com-uma-folha_853177-1211.jpg',
  fullPrompt: 'High-detail candy apple made from translucent caramel glass with subtle golden undertones, soft backlight creating glowing edges that accentuate the delicate ripples and ridges on its surface, cinematic realism with deep shadows and luminous highlights, ultra HD resolution, macro photography capturing the intricate texture and sheen of the caramel glass, with a blurred background that emphasizes the subject\'s centrality and isolation, inviting the viewer to focus on the mesmerizing play of light and color on the candy apple\'s surface.'
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