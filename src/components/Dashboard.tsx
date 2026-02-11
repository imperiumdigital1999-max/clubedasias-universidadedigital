import React, { useState, useRef } from 'react';
import {
  Video, PenTool, Image, Workflow, ChevronLeft, ChevronRight, Lock
} from 'lucide-react';
import FloatingChat from './FloatingChat';
import { aiTools } from '../data/tools';
import { AITool } from '../types';

interface DashboardProps {
  onToolSelect?: (tool: any) => void;
  onViewChange?: (view: string) => void;
  onUpgradeClick?: () => void;
  userPlan?: 'free' | 'pro';
}

interface Nucleo {
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  gradient: string;
}

export default function Dashboard({ onToolSelect, onViewChange, onUpgradeClick, userPlan = 'free' }: DashboardProps) {
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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            PAINEL DE ACESSO
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Escolha o núcleo que deseja acessar e ative a IA para o que precisa.
          </p>
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
