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
    },
    {
      id: '10',
      tag: 'COMANDOS GPT',
      title: 'Assistente Especializado',
      description: 'Comando para criar um assistente GPT especializado em uma área específica com contexto detalhado...',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
      fullPrompt: 'Você é um assistente especializado em [ÁREA DE ESPECIALIZAÇÃO]. Seu papel é fornecer informações precisas, detalhadas e práticas sobre [TÓPICO]. Mantenha um tom profissional, seja didático e sempre forneça exemplos quando apropriado. Adapte suas respostas ao nível de conhecimento do usuário e faça perguntas esclarecedoras quando necessário.'
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