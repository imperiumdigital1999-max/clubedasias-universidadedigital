import React from 'react';
import { Home, MessageSquare, CheckSquare, Bot, Crown, Layers, Star, Database, HelpCircle } from 'lucide-react';
import { ViewMode } from '../types';

interface SidebarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onUpgradeClick?: () => void;
  userPlan?: 'free' | 'pro';
}

export default function Sidebar({ currentView, onViewChange, onUpgradeClick, userPlan = 'free' }: SidebarProps) {
  const navigationItems = [
    { id: 'inicio' as ViewMode, label: 'Início', icon: Home },
    { id: 'destaques-da-semana' as ViewMode, label: 'Destaques da Semana', icon: Star },
    { id: 'cursos' as ViewMode, label: 'Treinamentos', icon: Layers },
    { id: 'prompts' as ViewMode, label: 'Biblioteca de Prompts', icon: MessageSquare },
    { id: 'gpts-personalizados' as ViewMode, label: 'Agentes GPTs', icon: Bot },
    { id: 'tasks' as ViewMode, label: 'Clube das Tarefas Premium', icon: CheckSquare },
    { id: 'banco-digital' as ViewMode, label: '🔵 Banco DIGITAL', icon: Database },
    { id: 'suporte' as ViewMode, label: '🟣 Suporte', icon: HelpCircle },
  ];

  return (
    <aside className="hidden md:flex md:flex-col md:w-64 md:bg-slate-950/95 md:backdrop-blur-lg md:border-r md:border-slate-800/50 md:fixed md:left-0 md:top-0 md:h-full md:z-30 md:pt-16">
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

      {userPlan === 'free' && (
        <div className="p-4 border-t border-slate-800/50">
          <button
            onClick={onUpgradeClick}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold px-4 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
          >
            <Crown className="w-5 h-5" />
            <span>Upgrade para PRO</span>
          </button>
        </div>
      )}
    </aside>
  );
}