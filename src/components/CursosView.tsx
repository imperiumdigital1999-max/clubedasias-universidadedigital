import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function CursosView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <GraduationCap className="w-8 h-8 text-green-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">Cursos</h1>
          <p className="text-slate-400 mt-1">Aprenda a dominar as ferramentas de IA</p>
        </div>
      </div>

      <div className="text-center py-12">
        <GraduationCap className="w-16 h-16 text-slate-600 mx-auto mb-4" />
        <div className="text-slate-500 text-lg mb-4">
          Cursos em desenvolvimento
        </div>
        <p className="text-slate-600">
          Em breve você terá acesso aos melhores cursos de IA
        </p>
      </div>
    </div>
  );
}