import React, { useState } from 'react';
import {
  Video, PenTool, Image, Workflow, Search, ArrowRight, Info
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

  const nucleos = [
    {
      icon: Video,
      title: 'Núcleo Vídeo & Conteúdo',
      description: 'Criação, edição, roteiro, tradução e automação de vídeos com IA.',
      gradient: 'from-purple-500/10 to-blue-500/10',
      iconColor: 'text-purple-400',
      hoverShadow: 'hover:shadow-purple-500/20',
      view: 'nucleo-video'
    },
    {
      icon: PenTool,
      title: 'Núcleo Escrita & Vendas',
      description: 'Copy, páginas, textos persuasivos e conteúdo que converte.',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-400',
      hoverShadow: 'hover:shadow-blue-500/20',
      view: 'nucleo-escrita'
    },
    {
      icon: Image,
      title: 'Núcleo Imagens & Design',
      description: 'Imagens realistas, banners, thumbnails e criativos profissionais.',
      gradient: 'from-pink-500/10 to-purple-500/10',
      iconColor: 'text-pink-400',
      hoverShadow: 'hover:shadow-pink-500/20',
      view: 'nucleo-imagens'
    },
    {
      icon: Workflow,
      title: 'Núcleo Automação & Tech',
      description: 'Automação, sistemas e organização inteligente de processos.',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      iconColor: 'text-cyan-400',
      hoverShadow: 'hover:shadow-cyan-500/20',
      view: 'nucleo-automacao'
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

  const handleNucleoClick = (view: string) => {
    if (onViewChange) {
      onViewChange(view);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center mb-16 pt-8 relative">
          <div className="absolute top-8 right-4 md:right-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50">
              Sistema Beta
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            CENTRO DE COMANDO
          </h1>
          <p className="text-slate-500 text-sm mb-12">
            Sistema exclusivo para membros do Clube das IAs.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-8">
            Escolha o que você quer acessar:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {nucleos.map((nucleo, index) => (
            <button
              key={index}
              onClick={() => handleNucleoClick(nucleo.view)}
              className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 text-left hover:border-slate-700/50 hover:bg-slate-900/70 transition-all group hover:shadow-2xl ${nucleo.hoverShadow}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${nucleo.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <nucleo.icon className={`w-8 h-8 ${nucleo.iconColor}`} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{nucleo.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{nucleo.description}</p>
            </button>
          ))}
        </div>

        <section className="max-w-4xl mx-auto mt-16">
          <form onSubmit={handleAIExecute}>
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <input
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Pesquise aqui para tirar uma dúvida ou encontrar um conteúdo"
                  className="flex-1 bg-transparent border-none text-white text-base placeholder-slate-600 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!aiInput.trim()}
                  className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </section>

        {assistantResponse && (
          <section className="max-w-4xl mx-auto mt-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 shadow-xl">
              <div className="flex items-start space-x-4">
                <Info className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">Resultado da busca</h3>
                  <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-line mb-4">
                    {assistantResponse.message}
                  </div>

                  {assistantResponse.suggestedView && (
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleNavigateToResource(assistantResponse.suggestedView!)}
                        className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
                      >
                        <span>{assistantResponse.suggestedAction}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setAssistantResponse(null)}
                        className="text-slate-500 hover:text-white transition-colors text-sm"
                      >
                        Fazer outra busca
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

      </div>

      <FloatingChat />
    </div>
  );
}
