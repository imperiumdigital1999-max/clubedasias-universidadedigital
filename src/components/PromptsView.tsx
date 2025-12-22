import React, { useState } from 'react';
import { MessageSquare, ArrowLeft } from 'lucide-react';

export default function PromptsView() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

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

  // Prompts de exemplo para cada categoria
  const getPromptsForTag = (tag: string) => {
    // Dados de exemplo - podem ser expandidos futuramente
    return [
      {
        id: '1',
        title: `Prompt Premium ${tag}`,
        content: `Este é um prompt especializado para ${tag.toLowerCase()}. Aqui você encontrará instruções detalhadas e otimizadas para obter os melhores resultados.`,
        category: tag
      },
      {
        id: '2',
        title: `Prompt Avançado ${tag}`,
        content: `Prompt avançado para ${tag.toLowerCase()} com técnicas profissionais e parâmetros específicos para resultados excepcionais.`,
        category: tag
      },
      {
        id: '3',
        title: `Prompt Criativo ${tag}`,
        content: `Explore sua criatividade com este prompt especializado em ${tag.toLowerCase()}, desenvolvido por especialistas.`,
        category: tag
      }
    ];
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleBackToTags = () => {
    setSelectedTag(null);
  };

  if (selectedTag) {
    // Visualização dos prompts da TAG selecionada
    const prompts = getPromptsForTag(selectedTag);
    
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header com botão voltar */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={handleBackToTags}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div>
            <h1 className="text-3xl font-bold text-white">{selectedTag}</h1>
            <p className="text-slate-400 mt-1">Prompts especializados para {selectedTag.toLowerCase()}</p>
          </div>
        </div>

        {/* Lista de prompts */}
        <div className="space-y-6">
          {prompts.map((prompt) => (
            <div key={prompt.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{prompt.title}</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                  Copiar
                </button>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                <code className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {prompt.content}
                </code>
              </div>
            </div>
          ))}
        </div>
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
          Escolha um tópico principal (TAG) para ver os subtópicos e seus prompts.
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