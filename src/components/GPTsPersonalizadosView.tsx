import React from 'react';
import { Bot, Star, Users, Zap, ExternalLink } from 'lucide-react';

export default function GPTsPersonalizadosView() {
  // Dados de exemplo para GPTs
  const gptCategories = [
    {
      id: 'produtividade',
      name: 'Produtividade',
      description: 'GPTs para otimizar seu trabalho diário',
      count: 12,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'criativo',
      name: 'Criativo',
      description: 'GPTs para criação de conteúdo e arte',
      count: 18,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'analise',
      name: 'Análise',
      description: 'GPTs para análise de dados e insights',
      count: 8,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'educacao',
      name: 'Educação',
      description: 'GPTs para ensino e aprendizado',
      count: 15,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const featuredGPTs = [
    {
      id: '1',
      name: 'Assistente de Marketing Digital',
      description: 'GPT especializado em estratégias de marketing e criação de campanhas',
      category: 'Produtividade',
      users: 1234,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      name: 'Criador de Conteúdo Visual',
      description: 'GPT para gerar ideias e conceitos para designs e artes visuais',
      category: 'Criativo',
      users: 892,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      name: 'Analista de Dados Inteligente',
      description: 'GPT para análise avançada de dados e geração de relatórios',
      category: 'Análise',
      users: 567,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Bot className="w-8 h-8 text-purple-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">GPTs Personalizados</h1>
          <p className="text-slate-400 mt-1">Assistentes de IA especializados para suas necessidades específicas</p>
        </div>
      </div>

      {/* GPTs em Destaque */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
          <Star className="w-6 h-6 text-yellow-500" />
          <span>GPTs em Destaque</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGPTs.map((gpt) => (
            <div key={gpt.id} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={gpt.image}
                  alt={gpt.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute top-3 left-3 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-400 px-2 py-1 rounded-full text-xs font-medium">
                  ⭐ Destaque
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {gpt.name}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {gpt.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                    {gpt.category}
                  </span>
                  <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{gpt.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-slate-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{gpt.users.toLocaleString()} usuários</span>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                    <span className="text-sm font-medium">Usar</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorias de GPTs */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Categorias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gptCategories.map((category) => (
            <div key={category.id} className="group cursor-pointer bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {category.name}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{category.description}</p>
              <p className="text-slate-500 text-sm">
                {category.count} GPTs
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 text-center">
          <Bot className="w-16 h-16 text-purple-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Crie seu próprio GPT</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Desenvolva assistentes de IA personalizados para suas necessidades específicas e compartilhe com a comunidade
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 mx-auto hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
            <Zap className="w-6 h-6" />
            <span>Criar GPT Personalizado</span>
          </button>
        </div>
      </section>
    </div>
  );
}