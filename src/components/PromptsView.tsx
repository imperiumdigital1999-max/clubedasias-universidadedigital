import React from 'react';
import { MessageSquare, Copy, Star, Search } from 'lucide-react';

export default function PromptsView() {
  // Dados de exemplo para prompts
  const promptCategories = [
    {
      id: 'marketing',
      name: 'Marketing',
      description: 'Prompts para criação de conteúdo e campanhas',
      count: 25,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'escrita',
      name: 'Escrita',
      description: 'Prompts para redação e criação de textos',
      count: 30,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'negocios',
      name: 'Negócios',
      description: 'Prompts para estratégia e análise empresarial',
      count: 20,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'educacao',
      name: 'Educação',
      description: 'Prompts para ensino e aprendizado',
      count: 15,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const featuredPrompts = [
    {
      id: '1',
      title: 'Criador de Headlines Virais',
      description: 'Gere títulos irresistíveis para suas postagens',
      category: 'Marketing',
      likes: 234
    },
    {
      id: '2',
      title: 'Assistente de E-mail Profissional',
      description: 'Escreva e-mails profissionais em segundos',
      category: 'Negócios',
      likes: 189
    },
    {
      id: '3',
      title: 'Gerador de Roteiros para Vídeos',
      description: 'Crie roteiros envolventes para seus vídeos',
      category: 'Marketing',
      likes: 156
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <MessageSquare className="w-8 h-8 text-blue-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">Prompts</h1>
          <p className="text-slate-400 mt-1">Biblioteca completa de prompts testados e aprovados</p>
        </div>
      </div>

      {/* Barra de Pesquisa */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Pesquisar prompts..."
            className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Prompts em Destaque */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
          <Star className="w-6 h-6 text-yellow-500" />
          <span>Prompts em Destaque</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPrompts.map((prompt) => (
            <div key={prompt.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{prompt.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{prompt.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                    {prompt.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <Star className="w-4 h-4" />
                  <span>{prompt.likes}</span>
                </div>
                <button className="flex items-center space-x-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <Copy className="w-4 h-4" />
                  <span className="text-sm">Usar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorias de Prompts */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Categorias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promptCategories.map((category) => (
            <div key={category.id} className="group cursor-pointer bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {category.name}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{category.description}</p>
              <p className="text-slate-500 text-sm">
                {category.count} prompts
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}