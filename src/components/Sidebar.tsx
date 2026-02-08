import React from 'react';
import { Home, Sparkles, Wrench, Award, MessageSquare, CheckSquare, Bot, Crown, Layers, Brain, Star } from 'lucide-react';
import { ViewMode } from '../types';

interface SidebarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navigationItems = [
    { id: 'inicio' as ViewMode, label: 'Centro de Comando', icon: Home },
    { id: 'agentes-ia' as ViewMode, label: 'Agentes de IA', icon: Brain },
    { id: 'ferramentas-ia' as ViewMode, label: 'Recursos de IA', icon: Wrench },
    { id: 'destaques-da-semana' as ViewMode, label: 'Destaques da Semana', icon: Star },
    { id: 'favorites' as ViewMode, label: 'Em Destaque', icon: Award },
    { id: 'ias-pro' as ViewMode, label: 'Ferramentas Pro', icon: Crown },
    { id: 'cursos' as ViewMode, label: 'Treinamentos', icon: Layers },
    { id: 'prompts' as ViewMode, label: 'Biblioteca', icon: MessageSquare },
    { id: 'tasks' as ViewMode, label: 'Clube das Tarefas Premium', icon: CheckSquare },
    { id: 'gpts-personalizados' as ViewMode, label: 'GPTs', icon: Bot },
  ];

  return (
    <aside className="hidden md:flex md:flex-col md:w-64 md:bg-slate-950/95 md:backdrop-blur-lg md:border-r md:border-slate-800/50 md:fixed md:left-0 md:top-0 md:h-full md:z-40">
      <div className="p-6 border-b border-slate-800/50">
        <div className="flex flex-col items-center space-y-2">
          <img
            src="/chatgpt_image_8_de_fev._de_2026,_02_01_19.png"
            alt="Clube das IAs"
            className="h-16 w-auto"
          />
          <p className="text-xs text-slate-500">Centro de Operações</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        {navigationItems.map((item) => {
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

      <div className="p-4 border-t border-slate-800/50">
        <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-4 text-center">
          <div className="w-2 h-2 bg-emerald-400 rounded-full mx-auto mb-2 animate-pulse" />
          <p className="text-xs text-slate-500 font-medium">
            Sistema operacional
          </p>
        </div>
      </div>
    </aside>
  );
}