import React, { useState } from 'react';
import { Home, CheckSquare, MoreHorizontal, MessageSquare, GraduationCap, X, Bot, Star, Database, HelpCircle, Video, Workflow, Palette, Wand2, Users, Clapperboard } from 'lucide-react';
import { ViewMode } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface BottomNavigationProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function BottomNavigation({ currentView, onViewChange }: BottomNavigationProps) {
  const [showOthersMenu, setShowOthersMenu] = useState(false);
  const { t } = useLanguage();

  const mainNavItems = [
    { id: 'inicio' as ViewMode, label: t('bottomNav.inicio'), icon: Home },
    { id: 'tasks' as ViewMode, label: t('bottomNav.tarefas'), icon: CheckSquare },
  ];

  const otherNavItems = [
    { id: 'app-prompts' as ViewMode, label: t('sidebar.appPrompts'), icon: Video },
    { id: 'gere-sua-arte' as ViewMode, label: t('sidebar.gereSuaArte'), icon: Palette },
    { id: 'anime-sua-imagem' as ViewMode, label: t('sidebar.animeSuaImagem'), icon: Wand2, isRedirect: true },
    { id: 'clone-com-ia' as ViewMode, label: t('sidebar.cloneComIA'), icon: Users, isRedirect: true },
    { id: 'estudio-videos' as ViewMode, label: t('sidebar.estudioVideos'), icon: Clapperboard },
    { id: 'destaques-da-semana' as ViewMode, label: t('sidebar.destaquesDaSemana'), icon: Star },
    { id: 'divider' as any, label: '', icon: null, isDivider: true },
    { id: 'prompts' as ViewMode, label: t('sidebar.bibliotecaPrompts'), icon: MessageSquare },
    { id: 'gpts-personalizados' as ViewMode, label: t('sidebar.agentesGpts'), icon: Bot },
    { id: 'app-automations' as ViewMode, label: t('sidebar.appAutomacoes'), icon: Workflow },
    { id: 'banco-digital' as ViewMode, label: t('sidebar.bancoDigital'), icon: Database },
    { id: 'cursos' as ViewMode, label: t('sidebar.treinamentos'), icon: GraduationCap },
    { id: 'suporte' as ViewMode, label: t('sidebar.suporte'), icon: HelpCircle },
  ];

  const handleOthersClick = () => {
    setShowOthersMenu(!showOthersMenu);
  };

  const handleOtherItemClick = (viewId: ViewMode) => {
    onViewChange(viewId);
    setShowOthersMenu(false);
  };

  const handleOverlayClick = () => {
    setShowOthersMenu(false);
  };

  const isOtherViewActive = otherNavItems.some(item => item.id === currentView);

  return (
    <>
      {/* Overlay para fechar o menu */}
      {showOthersMenu && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={handleOverlayClick}
        />
      )}

      {/* Menu "Outros" */}
      {showOthersMenu && (
        <div className="fixed bottom-20 left-4 right-4 bg-slate-800 rounded-2xl border border-slate-700 z-50 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <h3 className="text-white font-semibold">{t('bottomNav.outrasOpcoes')}</h3>
            <button
              onClick={() => setShowOthersMenu(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-2">
            {otherNavItems.map((item) => {
              if (item.isDivider) {
                return (
                  <div key={item.id} className="my-3 border-t border-slate-700" />
                );
              }

              const Icon = item.icon;
              const isActive = currentView === item.id;
              const isRedirect = item.isRedirect || false;

              return (
                <button
                  key={item.id}
                  onClick={() => handleOtherItemClick(item.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : isRedirect
                      ? 'text-slate-300 hover:text-white hover:bg-slate-700 shadow-inner bg-slate-900/30 border border-slate-700/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Barra de navegação inferior */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 md:hidden z-50">
        <div className="flex items-center justify-around py-3 px-4">
          {/* Ícones principais */}
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-300 min-w-0 flex-1 ${
                  isActive
                    ? 'text-blue-400 transform scale-105'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 mb-1 transition-colors ${isActive ? 'text-blue-400' : ''}`} />
                <span className={`text-xs font-medium transition-colors truncate ${isActive ? 'text-blue-400' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Botão "Outros" */}
          <button
            onClick={handleOthersClick}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-300 min-w-0 flex-1 ${
              isOtherViewActive || showOthersMenu
                ? 'text-blue-400 transform scale-105'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MoreHorizontal className={`w-5 h-5 mb-1 transition-colors ${isOtherViewActive || showOthersMenu ? 'text-blue-400' : ''}`} />
            <span className={`text-xs font-medium transition-colors truncate ${isOtherViewActive || showOthersMenu ? 'text-blue-400' : ''}`}>
              {t('bottomNav.mais')}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}