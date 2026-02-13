import React, { useState, useRef } from 'react';
import {
  Video, PenTool, Image, Workflow, ChevronLeft, ChevronRight, Lock, Sparkles, ArrowRight, AlertTriangle
} from 'lucide-react';
import FloatingChat from './FloatingChat';
import { aiTools } from '../data/tools';
import { AITool } from '../types';

interface DashboardProps {
  onToolSelect?: (tool: any) => void;
  onViewChange?: (view: string) => void;
}

interface Nucleo {
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  gradient: string;
}

export default function Dashboard({ onToolSelect, onViewChange }: DashboardProps) {
  const nucleos: Nucleo[] = [
    {
      title: '🎬 Núcleo Vídeo & Conteúdo',
      description: 'Criação, edição, roteiro, tradução e automação de vídeos com IA.',
      category: 'video',
      icon: Video,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: '🧠 Núcleo Escrita & Vendas',
      description: 'Copy, páginas e textos estratégicos para vender todos os dias.',
      category: 'texto',
      icon: PenTool,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: '🎨 Núcleo Imagens & Design',
      description: 'Imagens realistas, criativos e materiais visuais profissionais.',
      category: 'imagem',
      icon: Image,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: '⚙️ Núcleo Automação & Tech',
      description: 'Automação inteligente e organização de sistemas digitais.',
      category: 'automacao',
      icon: Workflow,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const getToolsByCategory = (category: string): AITool[] => {
    return aiTools.filter(tool => tool.category === category && tool.category !== 'pro');
  };

  const handleToolClick = (tool: AITool) => {
    if (onToolSelect) {
      onToolSelect(tool);
    }
  };

  const scrollContainer = (direction: 'left' | 'right', containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">

        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">

      Clube das IAs
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
    O maior Clube de acesso a IAs do Brasil! 
          </p>
        </div>

        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-400/50 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 backdrop-blur-sm">
          <div className="p-6 md:p-10">
            <div className="mb-6 flex justify-center">
              <img
                src="/UNIVERSIDADE.png"
                alt="Universidade Clube das IAs"
                className="w-full max-w-4xl rounded-2xl shadow-lg"
              />
            </div>

            <div className="text-center px-4">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
                ⚠️ Assista Todas as Aulas Antes de Usar
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Devido a nossa última atualização do dia (13/02/2026) É fundamental que, antes de utilizar o aplicativo do Clube das IAs, você assista às aulas para entender exatamente como o sistema funciona.<br />
                A maioria dos erros e dúvidas já foram explicados no treinamento.
              </p>
              <a
                href="https://hotmart.com/pt-br/club/clube-avancy-digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                🎓 Acessar as Aulas Agora
              </a>
            </div>
          </div>
        </div>

        <div
          onClick={() => onViewChange && onViewChange('viral-edit-vo3')}
          className="mb-16 relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border-2 border-blue-500/40 hover:border-blue-400/60 p-8 md:p-12 cursor-pointer transition-all duration-300 hover:scale-[1.02] transform group shadow-2xl hover:shadow-blue-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <img
                  src="https://static-media.hotmart.com/rpcnJ1gXq6x2ZXYsMmsHNe-gMMI=/300x300/filters:quality(100)/hotmart/product_pictures/e20d0223-005f-4ee6-ab11-b223621d78d8/ChatGPTImage21dedezde202519_11_37.png"
                  alt="Viral Edit + VO3 AI"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl border-4 border-blue-500/40 group-hover:border-blue-400/60 transition-all duration-300 shadow-xl"
                />
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider">Destaque Especial</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  Viral Edit + VO3 AI
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                  Acesse todas as funcionalidades e recursos da plataforma de criação de vídeos com IA. Tutoriais, prompts personalizados, créditos gratuitos e muito mais.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-blue-500/50">
                <span>Acessar Agora</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-20">
          {nucleos.map((nucleo, nucleoIndex) => {
            const tools = getToolsByCategory(nucleo.category);

            return (
              <section
                key={nucleoIndex}
                className={`relative rounded-3xl p-8 md:p-10 ${
                  nucleoIndex % 2 === 0
                    ? 'bg-slate-900/30 shadow-inner'
                    : 'bg-slate-950/50 shadow-inner'
                }`}
                style={{
                  boxShadow: nucleoIndex % 2 === 0
                    ? 'inset 0 2px 20px rgba(0, 0, 0, 0.3)'
                    : 'inset 0 2px 20px rgba(0, 0, 0, 0.5)'
                }}
              >
                {nucleoIndex > 0 && (
                  <div className="absolute -top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
                )}

                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {nucleo.title}
                  </h2>
                  <p className="text-slate-400 text-base">
                    {nucleo.description}
                  </p>
                </div>

                <div className="relative group">
                  <button
                    onClick={() => scrollContainer('left', `carousel-${nucleoIndex}`)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-900/90 hover:bg-slate-800 text-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-4"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <div
                    id={`carousel-${nucleoIndex}`}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        onClick={() => handleToolClick(tool)}
                        className="flex-shrink-0 w-[280px] bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700/50 hover:bg-slate-900/60 transition-all hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 cursor-pointer group/card"
                      >
                        <div className="h-40 overflow-hidden relative">
                          <img
                            src={tool.image}
                            alt={tool.name}
                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                          {tool.new && (
                            <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                              NOVO
                            </div>
                          )}
                          {tool.featured && (
                            <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-md">
                              DESTAQUE
                            </div>
                          )}
                        </div>

                        <div className="p-6">
                          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1">
                            {tool.name}
                          </h3>
                          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                            {tool.description}
                          </p>
                          <button
                            className="w-full font-medium py-2.5 px-4 rounded-lg transition-all shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-purple-500/20 hover:shadow-purple-500/40"
                          >
                            Ver Detalhes
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollContainer('right', `carousel-${nucleoIndex}`)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-900/90 hover:bg-slate-800 text-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-4"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </section>
            );
          })}
        </div>

      </div>

      <FloatingChat shouldShow={true} />
    </div>
  );
}
