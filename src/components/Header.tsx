import React, { useEffect, useState } from 'react';
import { Sparkles, Crown, Bell } from 'lucide-react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onMenuToggle: () => void;
  onUpgradeClick?: () => void;
  userPlan?: 'free' | 'pro';
}

export default function Header({ currentView, onViewChange, onMenuToggle, onUpgradeClick, userPlan = 'free' }: HeaderProps) {
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
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 md:ml-64">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white tracking-tight">Clube das IAs</h1>
              </div>
            </div>

            <div className="hidden lg:flex items-center">
              <span className="text-sm text-slate-400">
                Bem-vindo, <span className="text-white font-medium">{getUserName(userEmail)}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {userPlan === 'free' && (
              <button
                onClick={onUpgradeClick}
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium px-4 py-2 rounded-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
              >
                <Crown className="w-4 h-4" />
                <span className="text-sm">Upgrade para PRO</span>
              </button>
            )}

            {userPlan === 'pro' && (
              <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 text-amber-400 font-medium px-4 py-2 rounded-lg">
                <Crown className="w-4 h-4" />
                <span className="text-sm">Plano PRO</span>
              </div>
            )}

            <button className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
            </button>

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