import React, { useState } from 'react';
import {
  Plus, Sparkles, Cpu, BookOpen, Layers, Crown, ArrowRight, Bot
} from 'lucide-react';
import { processUserQuery } from '../utils/clubeAssistant';
import FloatingChat from './FloatingChat';

interface DashboardProps {
  onToolSelect?: (tool: any) => void;
  onViewChange?: (view: string) => void;
}

interface AssistantResponse {
  message: string;
  suggestedView?: string;
  suggestedAction?: string;
}

export default function Dashboard({ onToolSelect, onViewChange }: DashboardProps) {
  const [aiInput, setAiInput] = useState('');
  const [assistantResponse, setAssistantResponse] = useState<AssistantResponse | null>(null);

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
      onViewChange('gpts-personalizados');
    }
  };

  const quickAccessCards = [
    {
      icon: Cpu,
      title: 'Agentes de IA',
      description: 'Assistentes especializados',
      onClick: handleAIAgentsClick
    },
    {
      icon: Layers,
      title: 'Ferramentas',
      description: 'Explore 150+ recursos',
      onClick: handleViewCategories
    },
    {
      icon: BookOpen,
      title: 'Biblioteca de Prompts',
      description: 'Templates prontos para uso',
      onClick: handlePromptsClick
    },
    {
      icon: Crown,
      title: 'GPTs Personalizados',
      description: 'Assistentes customizados',
      onClick: handleGPTsClick
    }
  ];

  const handleAIExecute = (e: React.FormEvent) => {
    e.preventDefault();
    if (aiInput.trim()) {
      const response = processUserQuery(aiInput);
      setAssistantResponse(response);
    }
  };

  const handleNavigateToResource = (view: string) => {
    if (onViewChange) {
      onViewChange(view);
      setAiInput('');
      setAssistantResponse(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section className="text-center pt-12 pb-8 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Clube das IAs
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            Execute tarefas com inteligência artificial em um único lugar. Crie, transforme e automatize com as melhores ferramentas de IA.
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <form onSubmit={handleAIExecute}>
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Plus className="w-6 h-6 text-slate-400" />
                </div>
                <textarea
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Descreva o que você quer criar ou resolver..."
                  rows={3}
                  className="flex-1 bg-transparent border-none text-white text-lg placeholder-slate-500 focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    className="px-4 py-2 bg-slate-800/50 hover:bg-slate-800 text-slate-300 text-sm rounded-lg transition-all"
                  >
                    Modo IA
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-slate-800/50 hover:bg-slate-800 text-slate-300 text-sm rounded-lg transition-all"
                  >
                    Configurações
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={!aiInput.trim()}
                  className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Executar</span>
                </button>
              </div>
            </div>
          </form>
        </section>

        {assistantResponse && (
          <section className="max-w-4xl mx-auto">
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-3 text-lg">Assistente do Clube das IAs</h3>
                  <div className="text-slate-300 leading-relaxed whitespace-pre-line mb-6">
                    {assistantResponse.message}
                  </div>

                  {assistantResponse.suggestedView && (
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleNavigateToResource(assistantResponse.suggestedView!)}
                        className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
                      >
                        <span>{assistantResponse.suggestedAction}</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setAssistantResponse(null)}
                        className="text-slate-400 hover:text-white transition-colors text-sm"
                      >
                        Fazer outra pergunta
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8">
          {quickAccessCards.map((card, index) => (
            <button
              key={index}
              onClick={card.onClick}
              className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 text-left hover:border-slate-700/50 hover:bg-slate-900/50 transition-all group"
            >
              <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-800 transition-all">
                <card.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-base">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
            </button>
          ))}
        </section>

      </div>

      <FloatingChat />
    </div>
  );
}
