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
  description: 'Estrategista Sênior para análise de KPIs, mapeamento de gargalos e criação de relatórios de alta performance.',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  fullPrompt: 'Você atuará como Estrategista Sênior de Marketing Digital, especialista em interpretação de dados e otimização de campanhas, aplicando técnicas de few-shot learning, refinamento iterativo e priming cognitivo para elaborar um relatório executivo de alta performance.\n\nDiretrizes de execução:\n\nMapeie os KPIs críticos e métricas de desempenho: {{indicadores_campanha}}.\n\nRealize uma análise crítica e holística dos resultados, apontando pontos fortes, gargalos operacionais e oportunidades latentes, sustentando a avaliação com exemplos práticos e contraexemplos para reforço argumentativo.\n\nDefina recomendações estratégicas: {{recomendacoes}}, priorizando-as por impacto potencial, viabilidade e ROI previsto.\n\nEstabeleça um cronograma estruturado para reavaliação periódica e monitoramento contínuo dos efeitos das ações implementadas.\n\nIncorpore representações visuais (gráficos comparativos, dashboards e tabelas sintéticas) para maximizar a clareza e acelerar o processo decisório.\n\nFormato final obrigatório do relatório:\n\nIntrodução – Contextualização e objetivos.\n\nAnálise de Dados – Interpretação aprofundada das métricas.\n\nRecomendações – Ações priorizadas com embasamento analítico.\n\nPlano de Ação – Cronograma, responsáveis e checkpoints de revisão.\n\nO relatório deve ser objetivo, assertivo e orientado à decisão, eliminando redundâncias e maximizando o valor estratégico das informações.'
},
    {
      id: '11',
      tag: 'COMANDOS GPT',
      title: 'Análise e Feedback',
      description: 'Prompt para análise crítica construtiva com sugestões de melhoria...',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      fullPrompt: 'Analise o seguinte conteúdo e forneça feedback detalhado e construtivo. Organize sua análise em: 1) Pontos fortes, 2) Áreas de melhoria, 3) Sugestões específicas, 4) Exemplos práticos de implementação. Seja objetivo, didático e mantenha um tom encorajador enquanto identifica oportunidades de aprimoramento.'
    },
{
    id: '34bcf023-0f28-4f08-84eb-4fe77f6c435b',
    tag: 'COMANDOS GPT',
    title: 'Otimização de Campanhas de PPC',
    description: 'Especialista em tráfego pago focado em estruturação de lances, segmentação de público e ROI.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?w=400&h=300&fit=crop',
    fullPrompt: 'Atue como um especialista em marketing digital focado em campanhas de PPC (pay-per-click). Seu desafio é estruturar e otimizar campanhas pagas para promoção de produtos ou serviços, levando em consideração orçamentos e segmentações específicas. Siga os passos abaixo:\n1. Defina qual é o objetivo da campanha, baseando-se na informação de {{objetivo_campanha}}.\n2. Identifique e segmente o público-alvo detalhadamente utilizando os dados fornecidos em {{segmento_publico}}.\n3. Elabore uma proposta de orçamento e distribuição de lances, conforme explicado em {{orcamento_disponivel}}.\n4. Utilize técnicas de few-shot learning e chain-of-thought para prever o comportamento dos cliques e otimizar as taxas de conversão.\n5. Estabeleça critérios de qualidade e métricas de sucesso, como CTR, CPC e ROI, e descreva os ajustes necessários caso os resultados não sejam satisfatórios.\nInclua exemplos práticos e considere possíveis exceções no processo, como sazonalidade e comportamentos atípicos. Garanta que a resposta siga um formato estruturado e claro, demonstrando todas as etapas do processo.'
  },
  {
    id: '12ff71e4-b4ed-4f03-bad5-e62790bd9bc2',
    tag: 'COMANDOS GPT',
    title: 'Definição de Persona e Segmentação de Público',
    description: 'Estrategista focado em análise de mercado e criação de perfis psicológicos detalhados para marcas.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    fullPrompt: 'Você assume o papel de um estrategista de marketing com foco em análise de público e definição de personas. Seu desafio é desenvolver uma segmentação de público detalhada e criar personas para a empresa {{empresa}}, visando a campanha de {{tipo_campanha}}. Siga os passos abaixo para elaborar uma estratégia robusta:\n1. Realize uma análise minuciosa do mercado e identifique segmentos com alto potencial para {{tipo_campanha}}.\n2. Utilize técnicas avançadas de contextualização de persona e few-shot learning para descrever perfis detalhados, incluindo comportamentos, interesses e necessidades de {{publico}}.\n3. Estruture cada persona com críticas específicas, utilizando bullet points para destacar atributos principais.\n4. Forneça exemplos de personas bem definidas e indique contraexemplos que possam prejudicar a segmentação.\n5. Estabeleça métricas de avaliação, como taxa de conversão e engajamento, e inclua um plano de ação para casos de exceções, como segmentação falha. O texto deve apresentar um mínimo de 150 palavras, demonstrando clareza, objetividade e robustez analítica.'
  },
  {
    id: 'c23d074e-db92-4d84-8a75-5a6cc44bb4bb',
    tag: 'COMANDOS GPT',
    title: 'Conteúdo para Redes Sociais',
    description: 'Criação de calendários estratégicos, storytelling e técnicas de engajamento para marcas digitais.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    fullPrompt: 'Você é um criador de conteúdo e estrategista de redes sociais com profundo conhecimento em storytelling e engajamento digital. Sua missão é desenvolver um calendário de conteúdo para as redes sociais da marca {{marca}}, abordando temas relevantes para o público-alvo de {{publico}}. Inicie seu trabalho com os seguintes passos:\n1. Defina a persona detalhadamente, orientando a criação de conteúdo que ressoe com as necessidades e aspirações de {{publico}}.\n2. Estruture o calendário de publicações considerando datas estratégicas, eventos e tendências do setor.\n3. Utilize técnicas de priming cognitivo no início de cada postagem para capturar a atenção do leitor.\n4. Apresente exemplos de postagens bem-sucedidas e contraexemplos para evitar erros comuns, reforçando a aplicação de técnicas de few-shot learning.\n5. Estabeleça critérios anatômicos como engajamento, compartilhamentos e feedback qualitativo. Descreva soluções para exceções, como baixa performance de posts, em um texto com no mínimo 150 palavras.'
  },
  {
    id: 'd8e68326-12dc-4d14-b6f1-de748afeaeb1',
    tag: 'COMANDOS GPT',
    title: 'Plano Avançado de Conteúdo para Blogs e SEO',
    description: 'Estrategista Sênior focado em autoridade de domínio, lacunas de conteúdo e ranking orgânico.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    fullPrompt: 'Atue como Estrategista Sênior de Marketing de Conteúdo, especialista em blogs, SEO e fortalecimento de autoridade de marca. Desenvolva um plano estratégico de conteúdo orientado a performance, seguindo as diretrizes abaixo:\n\nMapeamento de Temas e Tópicos-Chave – Identifique assuntos prioritários com base em {{temas_relevantes}} e análise de mercado, contemplando tendências, lacunas de conteúdo e oportunidades de posicionamento orgânico.\n\nPlanejamento Editorial Estratégico – Construa um calendário editorial estruturado, aplicando priming cognitivo para assegurar consistência narrativa, relevância e qualidade em cada publicação.\n\nDesenvolvimento de Conteúdo Premium – Defina um processo robusto de pesquisa e produção, utilizando cadeia de pensamento (chain-of-thought) para articular ideias de forma lógica e persuasiva, além de few-shot learning para gerar exemplos concretos e aplicáveis.\n\nFormatos e Canais de Distribuição – Estabeleça quais formatos (artigos longos, guias, estudos de caso, infográficos, vídeos) serão utilizados e determine os canais de distribuição, detalhando as otimizações de SEO e as estratégias de promoção em cada um.\n\nMétricas e Monitoramento de Performance – Defina indicadores claros como {{engajamento}}, {{autoridade_dominio}} e outros KPIs críticos. Explique protocolos de ajuste rápido para cenários em que os resultados fiquem abaixo do esperado.\n\nFormato final exigido:\n\nIntrodução – Contextualização e objetivo do plano.\n\nEstratégia – Abordagem macro e alinhamento com o posicionamento de marca.\n\nTáticas – Ações específicas, calendário e formatos.\n\nMétricas de Sucesso – Indicadores, métodos de acompanhamento e plano de ajustes.\n\nO relatório deve ser objetivo, orientado a dados e totalmente aplicável, com foco na escalabilidade e no ganho progressivo de autoridade.'
  },
  {
    id: '85cc168c-83ac-4b85-b68c-f728afd50037',
    tag: 'COMANDOS GPT',
    title: 'Planejamento e Execução de Conteúdo de Alto Impacto',
    description: 'Plano estratégico baseado em Metas SMART e análise SWOT para maximizar o ROI de conteúdo.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    fullPrompt: 'Atue como Estrategista Sênior de Marketing Digital, especialista em planejamento e execução de conteúdo de alto valor. Desenvolva um plano estratégico de conteúdo totalmente alinhado às demandas de {{empresa}} e capaz de gerar engajamento qualificado junto ao {{público_alvo}}.\n\nDiretrizes de execução:\n\nAnálise de Cenário – Conduza uma avaliação detalhada do mercado e das particularidades do setor de atuação, utilizando matriz SWOT para identificar oportunidades, ameaças, forças e fraquezas.\n\nDefinição de Metas SMART – Estabeleça objetivos claros, mensuráveis e temporalmente definidos (ex.: aumento de visitas em {{percentual_melhoria}}%, crescimento da taxa de conversão de leads, ampliação do tempo médio de permanência).\n\nCalendário Editorial Estratégico – Estruture um plano temático com tópicos de alto impacto, aplicando Few-Shot Learning para gerar ideias originais baseadas em padrões de sucesso, contemplando datas-chave e gatilhos sazonais.\n\nNarrativa Persuasiva – Utilize técnicas de cadeia de pensamento (chain-of-thought) para conectar ideias de forma lógica e criar narrativas que conduzam o público da conscientização à ação.\n\nIncorporação de Benchmarks e Exemplos Práticos – Ilustre recomendações com estudos de caso, boas práticas e contraexemplos que evidenciem erros a evitar.\n\nMétricas e Monitoramento – Defina indicadores de sucesso claros (ex.: tráfego orgânico, engajamento social, CTR, conversão) e crie instruções de revisão periódica para ajustes táticos.\n\nFormato final exigido:\n\nEstrutura em cláusulas numeradas.\n\nLinguagem clara, objetiva e livre de termos vagos.\n\nInclusão de insights de tendências atuais e movimentos emergentes no mercado.\n\nRecomendação de ferramentas e canais ideais para execução.\n\nO resultado final deve ser implementável, mensurável e orientado a maximizar ROI.'
  },
  {
    id: '232bc338-1960-4544-b13a-77703a15da95',
    tag: 'COMANDOS GPT',
    title: 'Arquitetura e Otimização de Funis de E-mail Marketing',
    description: 'Consultoria para criação de sequências persuasivas, CTAs e protocolos de contingência em e-mail.',
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
    },
    {
      id: '15',
      tag: 'IMAGENS ESTILO CARTOON',
      title: 'Personagem Cartoon',
      description: 'Ilustração cartoon vibrante com linhas expressivas e cores saturadas...',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop',
      fullPrompt: 'Design a vibrant cartoon character with bold outlines, exaggerated features, and saturated colors. Use clean vector-style lines, dynamic poses, and expressive facial features. Include characteristic cartoon elements like highlights, shadows, and simplified shapes. Make it fun, energetic, and visually appealing.'
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