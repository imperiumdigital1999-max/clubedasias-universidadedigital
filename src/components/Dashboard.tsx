import React, { useState, useRef } from 'react';
import {
  Video, PenTool, Image, Workflow, ChevronLeft, ChevronRight,
  Film, Languages, Sparkles, Subtitles, Copy as CopyIcon, Wand2,
  FileText, Share2, ImageIcon, Palette, Frame, Monitor, Cpu, TrendingUp, GitBranch, Settings, Lock
} from 'lucide-react';
import FloatingChat from './FloatingChat';

interface DashboardProps {
  onToolSelect?: (tool: any) => void;
  onViewChange?: (view: string) => void;
  onUpgradeClick?: () => void;
  userPlan?: 'free' | 'pro';
}

interface Agent {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  isPro?: boolean;
}

interface Nucleo {
  title: string;
  description: string;
  agents: Agent[];
}

export default function Dashboard({ onToolSelect, onViewChange, onUpgradeClick, userPlan = 'free' }: DashboardProps) {
  const nucleos: Nucleo[] = [
    {
      title: '🎬 Núcleo Vídeo & Conteúdo',
      description: 'Criação, edição, roteiro, tradução e automação de vídeos com IA.',
      agents: [
        {
          id: 'roteirista-video',
          name: 'Roteirista de Vídeo',
          description: 'Criação de roteiros envolventes',
          icon: Film,
          gradient: 'from-purple-500 to-pink-500'
        },
        {
          id: 'tradutor-multilingue',
          name: 'Tradutor Multilíngue',
          description: 'Tradução profissional de vídeos',
          icon: Languages,
          gradient: 'from-blue-500 to-purple-500'
        },
        {
          id: 'criador-videos-veo3',
          name: 'Criador de Vídeos (Flow Veo3)',
          description: 'Geração de vídeos com IA',
          icon: Sparkles,
          gradient: 'from-pink-500 to-purple-500',
          isPro: true
        },
        {
          id: 'agente-legendas',
          name: 'Gerador de Legendas',
          description: 'Legendas e closed captions',
          icon: Subtitles,
          gradient: 'from-cyan-500 to-blue-500'
        },
        {
          id: 'clonagem-videos-kinglia',
          name: 'Clonagem de Vídeos (Kinglia)',
          description: 'Clonagem inteligente de vídeos',
          icon: CopyIcon,
          gradient: 'from-purple-500 to-blue-500',
          isPro: true
        },
        {
          id: 'resumidor-youtube',
          name: 'Resumidor de Vídeos do YouTube',
          description: 'Resumos inteligentes de vídeos',
          icon: Video,
          gradient: 'from-red-500 to-pink-500'
        }
      ]
    },
    {
      title: '🧠 Núcleo Escrita & Vendas',
      description: 'Copy, páginas e textos estratégicos para vender todos os dias.',
      agents: [
        {
          id: 'mestre-copy',
          name: 'Agente Mestre de Copy',
          description: 'Copy persuasiva e estratégica',
          icon: Wand2,
          gradient: 'from-orange-500 to-red-500'
        },
        {
          id: 'pagina-vendas',
          name: 'Criador de Página de Vendas',
          description: 'Páginas que convertem',
          icon: FileText,
          gradient: 'from-green-500 to-emerald-500'
        },
        {
          id: 'textos-persuasivos',
          name: 'Gerador de Textos Persuasivos',
          description: 'Textos que vendem',
          icon: PenTool,
          gradient: 'from-blue-500 to-cyan-500'
        },
        {
          id: 'social-media',
          name: 'Social Media Estratégico',
          description: 'Conteúdo para redes sociais',
          icon: Share2,
          gradient: 'from-pink-500 to-purple-500'
        },
        {
          id: 'textos-prontos',
          name: 'Textos Prontos para Vender',
          description: 'Templates prontos para uso',
          icon: FileText,
          gradient: 'from-purple-500 to-blue-500'
        }
      ]
    },
    {
      title: '🎨 Núcleo Imagens & Design',
      description: 'Imagens realistas, criativos e materiais visuais profissionais.',
      agents: [
        {
          id: 'gerador-imagens',
          name: 'Gerador de Imagens',
          description: 'Imagens realistas com IA',
          icon: ImageIcon,
          gradient: 'from-purple-500 to-pink-500'
        },
        {
          id: 'gerador-imagens-pro',
          name: 'Imagens Profissionais',
          description: 'Imagens de alta qualidade',
          icon: Image,
          gradient: 'from-blue-500 to-purple-500'
        },
        {
          id: 'criador-banners',
          name: 'Criador de Banners',
          description: 'Banners profissionais',
          icon: Frame,
          gradient: 'from-cyan-500 to-blue-500'
        },
        {
          id: 'criador-thumbnails',
          name: 'Criador de Thumbnails',
          description: 'Thumbnails que atraem cliques',
          icon: Monitor,
          gradient: 'from-orange-500 to-red-500'
        },
        {
          id: 'mockups-produtos',
          name: 'Mockups de Produtos',
          description: 'Mockups realistas',
          icon: Palette,
          gradient: 'from-pink-500 to-purple-500'
        }
      ]
    },
    {
      title: '⚙️ Núcleo Automação & Tech',
      description: 'Automação inteligente e organização de sistemas digitais.',
      agents: [
        {
          id: 'agente-automacao-n8n',
          name: 'Automação com n8n',
          description: 'Automação de processos',
          icon: Workflow,
          gradient: 'from-green-500 to-emerald-500'
        },
        {
          id: 'estrategico-streaming',
          name: 'Estratégia de Streaming',
          description: 'Organização e monetização',
          icon: TrendingUp,
          gradient: 'from-blue-500 to-cyan-500'
        },
        {
          id: 'organizacao-processos',
          name: 'Organização de Processos',
          description: 'Estruturação inteligente',
          icon: GitBranch,
          gradient: 'from-purple-500 to-blue-500'
        },
        {
          id: 'estruturacao-fluxos',
          name: 'Estruturação de Fluxos',
          description: 'Fluxos automatizados',
          icon: Settings,
          gradient: 'from-cyan-500 to-blue-500'
        }
      ]
    }
  ];

  const handleAgentClick = (agent: Agent) => {
    if (agent.isPro && userPlan === 'free') {
      if (onUpgradeClick) {
        onUpgradeClick();
      }
      return;
    }

    if (onViewChange) {
      onViewChange(agent.id);
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

        <div className="text-center mb-20 pt-8 relative">
          <div className="absolute top-8 right-4 md:right-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50">
              Sistema Beta
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            CENTRO DE COMANDO
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Escolha o núcleo que deseja acessar e ative o agente ideal para executar sua tarefa.
          </p>
        </div>

        <div className="space-y-16">
          {nucleos.map((nucleo, nucleoIndex) => (
            <section key={nucleoIndex} className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
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
                  {nucleo.agents.map((agent, agentIndex) => (
                    <div
                      key={agentIndex}
                      className="flex-shrink-0 w-[280px] bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700/50 hover:bg-slate-900/60 transition-all hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 group/card"
                    >
                      <div className={`h-32 bg-gradient-to-br ${agent.gradient} flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <agent.icon className="w-16 h-16 text-white relative z-10" />
                        {agent.isPro && (
                          <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center space-x-1">
                            <Lock className="w-3 h-3" />
                            <span>PRO</span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1">
                          {agent.name}
                        </h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                          {agent.description}
                        </p>
                        <button
                          onClick={() => handleAgentClick(agent)}
                          className={`w-full font-medium py-2.5 px-4 rounded-lg transition-all shadow-lg ${
                            agent.isPro && userPlan === 'free'
                              ? 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white shadow-amber-500/20 hover:shadow-amber-500/30'
                              : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-purple-500/20 hover:shadow-purple-500/40'
                          }`}
                        >
                          {agent.isPro && userPlan === 'free' ? 'Fazer Upgrade' : 'Ativar'}
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
          ))}
        </div>

      </div>

      <FloatingChat />
    </div>
  );
}
