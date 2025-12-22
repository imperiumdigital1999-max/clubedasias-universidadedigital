import React, { useState, useEffect } from 'react';
import { Search, Copy, ArrowLeft, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { veo3Prompts, veo3Categories, VEO3Prompt } from '../data/veo3Prompts';

interface VEO3ViewProps {
  onBack: () => void;
}

const ITEMS_PER_PAGE = 12;

export default function VEO3View({ onBack }: VEO3ViewProps) {
  const [selectedCategory, setSelectedCategory] = useState('Ver Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<VEO3Prompt | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPrompts = veo3Prompts.filter(prompt => {
    const matchesCategory = selectedCategory === 'Ver Todos' || prompt.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredPrompts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedPrompts = filteredPrompts.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCopyPrompt = async (prompt: string, promptId: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedId(promptId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar prompt:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Prompts de VEO 3
          </h1>
          <p className="text-slate-400 text-lg">
            Biblioteca completa de prompts para geração de vídeos com exemplos práticos
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {veo3Categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar prompts por palavra-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
          </div>
        </div>

        <div className="mb-6 text-center">
          <p className="text-slate-500 text-sm">
            Mostrando {startIndex + 1}-{Math.min(endIndex, filteredPrompts.length)} de {filteredPrompts.length} prompts
            {filteredPrompts.length !== veo3Prompts.length && ` (filtrado de ${veo3Prompts.length})`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="relative">
                {prompt.video_exemplo_url ? (
                  <video
                    src={prompt.video_exemplo_url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-56 object-cover"
                  />
                ) : prompt.gif_url ? (
                  <img
                    src={prompt.gif_url}
                    alt={prompt.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <img
                    src={prompt.thumbnail_url}
                    alt={prompt.title}
                    className="w-full h-56 object-cover"
                  />
                )}
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {prompt.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                  {prompt.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {prompt.prompt.substring(0, 100)}...
                </p>

                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedPrompt(prompt)}
                    className="w-full flex items-center justify-center space-x-2 text-purple-400 hover:text-purple-300 py-2 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">Ver prompt completo</span>
                  </button>

                  <button
                    onClick={() => handleCopyPrompt(prompt.prompt, prompt.id)}
                    className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-all duration-200 font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                  >
                    <Copy className="w-4 h-4" />
                    <span>
                      {copiedId === prompt.id ? 'Copiado!' : 'Copiar Prompt'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPrompts.length > 0 && totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 1
                  ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-700'
                  : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Anterior</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="text-slate-400 text-sm">
                Página
              </span>
              <span className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold min-w-[3rem] text-center">
                {currentPage}
              </span>
              <span className="text-slate-400 text-sm">
                de {totalPages}
              </span>
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentPage === totalPages
                  ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-700'
                  : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50'
              }`}
            >
              <span>Próxima</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {filteredPrompts.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
              <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Nenhum prompt encontrado
              </h3>
              <p className="text-slate-400">
                Tente ajustar sua pesquisa ou selecione outra categoria
              </p>
            </div>
          </div>
        )}

        {selectedPrompt && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPrompt(null)}
          >
            <div
              className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {selectedPrompt.title}
                  </h2>
                  <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedPrompt.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPrompt(null)}
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                <div className="mb-6">
                  {selectedPrompt.video_exemplo_url ? (
                    <video
                      src={selectedPrompt.video_exemplo_url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full rounded-lg"
                    />
                  ) : selectedPrompt.gif_url ? (
                    <img
                      src={selectedPrompt.gif_url}
                      alt={selectedPrompt.title}
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <img
                      src={selectedPrompt.thumbnail_url}
                      alt={selectedPrompt.title}
                      className="w-full rounded-lg"
                    />
                  )}
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <span>Prompt Completo (JSON):</span>
                  </h3>
                  <pre className="text-slate-300 text-sm font-mono leading-relaxed whitespace-pre-wrap break-words bg-slate-900/50 p-4 rounded border border-slate-700 max-h-96 overflow-y-auto">
                    {selectedPrompt.prompt}
                  </pre>
                </div>
              </div>

              <div className="p-6 border-t border-slate-700 bg-slate-900/50">
                <button
                  onClick={() => handleCopyPrompt(selectedPrompt.prompt, selectedPrompt.id)}
                  className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-all duration-200 font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                >
                  <Copy className="w-5 h-5" />
                  <span>
                    {copiedId === selectedPrompt.id ? 'Copiado!' : 'Copiar Prompt'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
