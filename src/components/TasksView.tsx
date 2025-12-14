import React from 'react';
import { CheckSquare } from 'lucide-react';

export default function TasksView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <CheckSquare className="w-8 h-8 text-blue-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">Tarefas</h1>
          <p className="text-slate-400 mt-1">Gerencie suas tarefas e projetos com IA</p>
        </div>
      </div>

      <div className="text-center py-12">
        <CheckSquare className="w-16 h-16 text-slate-600 mx-auto mb-4" />
        <div className="text-slate-500 text-lg mb-4">
          Em breve: Sistema de tarefas inteligente
        </div>
        <p className="text-slate-600">
          Funcionalidade em desenvolvimento
        </p>
      </div>
    </div>
  );
}