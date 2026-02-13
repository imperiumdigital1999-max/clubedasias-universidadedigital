import React, { useEffect, useState } from 'react';
import { LogOut } from 'lucide-react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onMenuToggle: () => void;
  onLogoutClick?: () => void;
}

export default function Header({ currentView, onViewChange, onMenuToggle, onLogoutClick }: HeaderProps) {
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    const email = localStorage.getItem('clube_ias_email') || '';
    setUserEmail(email);
  }, []);

  const getInitials = (email: string) => {
    if (!email) return 'U';
    const name = email.split('@')[0];
    return name.substring(0, 2).toUpperCase();
  };

  const getUserName = (email: string) => {
    if (!email) return 'Usuário';
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <header className="bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-full mx-auto px-6 md:ml-64">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                <img
                  src="https://acessocompleto.site/wp-content/uploads/2026/02/d6e04999-06b7-4615-b52c-09d5e3684592.png"
                  alt="Clube das IAs"
                  className="w-full h-full object-contain pointer-events-none select-none"
                  draggable="false"
                />
              </div>
              <h1 className="text-lg font-semibold text-white tracking-tight">Clube das IAs</h1>
            </div>

            <div className="hidden lg:flex items-center">
              <span className="text-sm text-slate-400">
                Bem-vindo, <span className="text-white font-medium">{getUserName(userEmail)}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3 px-3 py-2 bg-slate-900/50 border border-slate-700/50 rounded-lg hover:border-slate-600/50 transition-colors cursor-pointer">
              <div className="w-7 h-7 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center">
                <span className="text-xs font-semibold text-white">{getInitials(userEmail)}</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-slate-400 leading-tight max-w-[150px] truncate">{userEmail || 'Usuário'}</p>
              </div>
            </div>

            <button
              onClick={onLogoutClick}
              className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800/50 rounded-lg transition-all group"
              title="Sair da Conta"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}