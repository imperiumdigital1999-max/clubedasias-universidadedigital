import React, { useState } from 'react';
import { Search, Copy, ArrowLeft } from 'lucide-react';
import { veo3Prompts, veo3Categories, VEO3Prompt } from '../data/veo3Prompts';

interface VEO3ViewProps {
  onBack: () => void;
}

export default function VEO3View({ onBack }: VEO3ViewProps) {
  const [selectedCategory, setSelectedCategory] = useState('Ver Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPrompts = veo3Prompts.filter(prompt => {
    const matchesCategory = selectedCategory === 'Ver Todos' || prompt.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

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
            Mostrando {filteredPrompts.length} de {veo3Prompts.length} prompts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="relative">
                <img
                  src={prompt.thumbnailUrl}
                  alt={prompt.title}
                  className="w-full h-56 object-cover"
                />
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
          ))}
        </div>

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
      </div>
    </div>
  );
}
