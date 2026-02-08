import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onMenuToggle: () => void;
}

export default function Header({ currentView, onViewChange, onMenuToggle }: HeaderProps) {
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

  return (
    <header className="bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <img
                src="/chatgpt_image_8_de_fev._de_2026,_02_01_19.png"
                alt="Clube das IAs"
                className="h-8 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-slate-900/50 border border-slate-700/50 rounded-lg">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-400 font-medium">Sistema operacional</span>
            </div>

            <div className="hidden md:flex items-center">
              <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs font-semibold text-blue-400 uppercase tracking-wider">
                Beta
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
          </div>
        </div>
      </div>
    </header>
  );
}