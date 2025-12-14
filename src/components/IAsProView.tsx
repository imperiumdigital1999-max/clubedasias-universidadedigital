import React from 'react';
import { Crown } from 'lucide-react';

export default function IAsProView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Crown className="w-8 h-8 text-yellow-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">IAs Pro</h1>
          <p className="text-slate-400 mt-1">Ferramentas premium de inteligência artificial</p>
        </div>
      </div>

      <div className="text-center py-12">
        <Crown className="w-16 h-16 text-slate-600 mx-auto mb-4" />
        <div className="text-slate-500 text-lg mb-4">
          Em breve: Acesso às IAs Premium
        </div>
        <p className="text-slate-600">
          Funcionalidade em desenvolvimento
        </p>
      </div>
    </div>
  );
}