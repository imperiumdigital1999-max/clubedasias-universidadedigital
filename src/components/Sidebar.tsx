import React from 'react';
import { Home, Wrench, Award, MessageSquare, CheckSquare, Bot, Crown, GraduationCap } from 'lucide-react';
import { ViewMode } from '../types';

interface SidebarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navigationItems = [
    { id: 'inicio' as ViewMode, label: 'Início', icon: Home },
    { id: 'ferramentas-ia' as ViewMode, label: 'Ferramentas de IA', icon: Wrench },
    { id: 'favorites' as ViewMode, label: 'Em Destaque', icon: Award },
    { id: 'ias-pro' as ViewMode, label: 'IAs Pro', icon: Crown },
    { id: 'cursos' as ViewMode, label: 'Cursos', icon: GraduationCap },
    { id: 'prompts' as ViewMode, label: 'Prompts', icon: MessageSquare },
    { id: 'tasks' as ViewMode, label: 'Tarefas', icon: CheckSquare },
    { id: 'gpts-personalizados' as ViewMode, label: 'GPTs', icon: Bot },
  ];

  return (
    <aside className="hidden md:flex md:flex-col md:w-64 md:bg-slate-900 md:border-r md:border-slate-800 md:fixed md:left-0 md:top-0 md:h-full md:z-40">
      {/* Logo/Header da Sidebar */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CI</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Clube das IAs</h1>
            <p className="text-xs text-slate-400">Hub Premium</p>
          </div>
        </div>
      </div>

      {/* Navegação */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                isActive
                  ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer da Sidebar */}
      <div className="p-4 border-t border-slate-800">
        <div className="text-center">
          <p className="text-xs text-slate-500">
            © 2024 Clube das IAs
          </p>
        </div>
      </div>
    </aside>
  );
}