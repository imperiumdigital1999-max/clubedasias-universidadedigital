import React from 'react';
import { Home, MessageSquare, CheckSquare, Bot, Layers, Star, Database, HelpCircle, Video, Workflow, Palette, Wand2, Users, Clapperboard, Camera } from 'lucide-react';
import { ViewMode } from '../types';

interface SidebarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const primaryNavigationItems = [
    { id: 'inicio' as ViewMode, label: 'Início', icon: Home },
    { id: 'app-prompts' as ViewMode, label: 'App de Prompts', icon: Video },
    { id: 'gerador-prompts-ugc' as ViewMode, label: 'Gerador de Prompts UGC', icon: Camera },
    { id: 'gere-sua-arte' as ViewMode, label: 'Gere sua Arte', icon: Palette },
    { id: 'anime-sua-imagem' as ViewMode, label: 'Anime sua Imagem', icon: Wand2, isRedirect: true },
    { id: 'clone-com-ia' as ViewMode, label: 'Clone com IA', icon: Users, isRedirect: true },
    { id: 'estudio-videos' as ViewMode, label: 'Estúdio de Vídeos', icon: Clapperboard },
    { id: 'destaques-da-semana' as ViewMode, label: 'Destaques da Semana', icon: Star },
  ];

  const secondaryNavigationItems = [
    { id: 'prompts' as ViewMode, label: 'Biblioteca de Prompts', icon: MessageSquare },
    { id: 'gpts-personalizados' as ViewMode, label: 'Agentes GPTs', icon: Bot },
    { id: 'app-automations' as ViewMode, label: 'App de Automações', icon: Workflow },
    { id: 'tasks' as ViewMode, label: 'Clube das Tarefas Premium', icon: CheckSquare },
    { id: 'banco-digital' as ViewMode, label: '🔵 Banco DIGITAL', icon: Database },
    { id: 'cursos' as ViewMode, label: 'Treinamentos', icon: Layers },
    { id: 'suporte' as ViewMode, label: 'Suporte', icon: HelpCircle },
  ];

  return (
    <aside className="hidden md:flex md:flex-col md:w-64 md:bg-slate-950/95 md:backdrop-blur-lg md:border-r md:border-slate-800/50 md:fixed md:left-0 md:top-0 md:h-full md:z-30 md:pt-16">
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        {primaryNavigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          const isRedirect = item.isRedirect || false;

          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200 text-left ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/20'
                  : isRedirect
                  ? 'text-slate-400 hover:text-white hover:bg-slate-900/50 shadow-inner bg-slate-900/30 border border-slate-800/50'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}

        <div className="my-4 border-t border-slate-800/50" />

        {secondaryNavigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200 text-left ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}