import React, { useState } from 'react';
import { Bot, ArrowLeft, Search, ExternalLink } from 'lucide-react';
import { gptTags, allGPTs } from '../data/gpts';

export default function GPTsPersonalizadosView() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const getGPTsForTag = (tag: string) => {
    return allGPTs.filter(gpt => gpt.tag === tag);
  };

  const filteredGPTs = selectedTag
    ? getGPTsForTag(selectedTag).filter(gpt =>
        gpt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gpt.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setSearchTerm('');
  };

  const handleBackToTags = () => {
    setSelectedTag(null);
    setSearchTerm('');
  };

  const handleAccessGPT = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (selectedTag) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={handleBackToTags}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">{selectedTag}</h1>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar GPTs nesta categoria..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">Geral</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGPTs.map((gpt) => (
              <div key={gpt.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <div className="p-4 border-b border-slate-700">
                  <h3 className="text-white font-semibold text-lg">{gpt.name}</h3>
                </div>

                <div className="p-4">
                  <p className="text-slate-400 text-sm mb-4">
                    {gpt.description}
                  </p>

                  <button
                    onClick={() => handleAccessGPT(gpt.url)}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    <span className="text-sm font-medium">Acessar GPT</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredGPTs.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              Nenhum GPT encontrado nesta categoria.
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">GPTs por TAG</h1>
        <p className="text-slate-400 text-lg">
          Explore GPTs organizados por TAG e filtre por função.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {gptTags.map((tag) => (
          <div
            key={tag}
            onClick={() => handleTagClick(tag)}
            className="group cursor-pointer bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>

            <div className="relative z-10">
              <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-blue-400 transition-colors">
                {tag}
              </h3>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <Bot className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Biblioteca Completa de GPTs</h3>
          <p className="text-slate-400">
            GPTs personalizados organizados por categorias para acelerar seu trabalho com IA
          </p>
        </div>
      </div>
    </div>
  );
}