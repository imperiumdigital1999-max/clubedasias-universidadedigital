import React, { useState } from 'react';
import {
  Sparkles, Cpu, BookOpen, Layers, Crown
} from 'lucide-react';

interface DashboardProps {
  onToolSelect?: (tool: any) => void;
  onViewChange?: (view: string) => void;
}

export default function Dashboard({ onToolSelect, onViewChange }: DashboardProps) {
  const [aiInput, setAiInput] = useState('');

  const handleAIAgentsClick = () => {
    if (onViewChange) {
      onViewChange('agentes-ia');
    }
  };

  const handleViewCategories = () => {
    if (onViewChange) {
      onViewChange('ferramentas-ia');
    }
  };

  const handlePromptsClick = () => {
    if (onViewChange) {
      onViewChange('prompts');
    }
  };

  const handleGPTsClick = () => {
    if (onViewChange) {
      onViewChange('gpts');
    }
  };

  const quickAccessCards = [
    {
      icon: Cpu,
      title: 'Agentes de IA',
      description: 'Assistentes especializados',
      count: '5 agentes',
      onClick: handleAIAgentsClick
    },
    {
      icon: Layers,
      title: 'Ferramentas',
      description: 'Explore 150+ recursos',
      count: '20 categorias',
      onClick: handleViewCategories
    },
    {
      icon: BookOpen,
      title: 'Biblioteca de Prompts',
      description: 'Templates prontos para uso',
      count: '100+ prompts',
      onClick: handlePromptsClick
    },
    {
      icon: Crown,
      title: 'GPTs Personalizados',
      description: 'Assistentes customizados',
      count: '30+ GPTs',
      onClick: handleGPTsClick
    }
  ];

  const handleAIExecute = (e: React.FormEvent) => {
    e.preventDefault();
    if (aiInput.trim()) {
      handleAIAgentsClick();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        <section className="text-center pt-8 pb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            O que você quer executar agora?
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Escolha uma função abaixo ou utilize a IA diretamente
          </p>
        </section>

        <section className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Assistente de IA</h2>
          </div>

          <form onSubmit={handleAIExecute} className="space-y-4">
            <div className="relative">
              <textarea
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Descreva o que você quer executar com a IA..."
                rows={4}
                className="w-full px-6 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all resize-none"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                Este ambiente utiliza modelos de IA integrados para execução prática de tarefas. Limites podem ser aplicados para manter a estabilidade do sistema.
              </p>
              <button
                type="submit"
                disabled={!aiInput.trim()}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 whitespace-nowrap"
              >
                <span>Executar com IA</span>
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </form>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickAccessCards.map((card, index) => (
            <button
              key={index}
              onClick={card.onClick}
              className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 text-left hover:border-slate-700 hover:bg-slate-900/50 transition-all group"
            >
              <card.icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-1">{card.title}</h3>
              <p className="text-slate-400 text-sm mb-2">{card.description}</p>
              <span className="text-xs text-blue-400 font-medium">{card.count}</span>
            </button>
          ))}
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 mt-8">
          <div className="bg-slate-900/30 border border-blue-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
            <div className="text-slate-400 text-sm">Recursos</div>
          </div>
          <div className="bg-slate-900/30 border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">20</div>
            <div className="text-slate-400 text-sm">Categorias</div>
          </div>
          <div className="bg-slate-900/30 border border-emerald-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-slate-400 text-sm">Operacional</div>
          </div>
          <div className="bg-slate-900/30 border border-purple-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-slate-400 text-sm">Disponível</div>
          </div>
        </section>

      </div>
    </div>
  );
}
