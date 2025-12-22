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

        <h1 className="text-4xl font-bold mb-12">
          <span className="text-white">{selectedTag.split(' ')[0]} </span>
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {selectedTag.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        <div className="space-y-6">
          {filteredGPTs.map((gpt) => (
            <div
              key={gpt.id}
              className="bg-slate-900/50 rounded-xl p-4 sm:p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 relative group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-start gap-3 md:gap-4 flex-1 min-w-0">
                  <img
                    src={gpt.image}
                    alt={gpt.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="text-white font-semibold text-base sm:text-lg">{gpt.name}</h3>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded uppercase">
                        GPT
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                      {gpt.description}
                    </p>

                    {gpt.rating && (
                      <div className="flex items-center gap-1 text-yellow-500 mb-3 md:mb-0">
                        <span className="text-base sm:text-lg">⭐</span>
                        <span className="text-white font-semibold text-sm">{gpt.rating}</span>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleAccessGPT(gpt.url)}
                  className="flex items-center justify-center gap-2 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors w-full md:w-auto md:flex-shrink-0 md:self-start"
                >
                  <span className="text-sm font-medium">Visitar</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

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