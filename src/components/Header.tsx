import React from 'react';
import { Menu, Star, Clock, Folder, CheckSquare, Crown } from 'lucide-react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onMenuToggle: () => void;
}

export default function Header({ currentView, onViewChange, onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 md:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Clube das IAs</h1>
                <p className="text-xs text-slate-400 hidden sm:block">Hub Premium de Ferramentas</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2"></div>
        </div>
      </div>
    </header>
  );
}