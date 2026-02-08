import React, { useState } from 'react';
import { CheckSquare, Sparkles, TrendingUp } from 'lucide-react';
import { taskPlatforms } from '../data/taskPlatforms';
import TaskCard from './TaskCard';
import { TaskPlatform } from '../types';
import OpportunitiesModal from './OpportunitiesModal';

interface TasksViewProps {
  onPlatformSelect: (platform: TaskPlatform) => void;
}

export default function TasksView({ onPlatformSelect }: TasksViewProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <CheckSquare className="w-8 h-8 text-blue-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">Plataformas de Tarefas</h1>
          <p className="text-slate-400 mt-1">Ganhe dinheiro executando tarefas com inteligência artificial</p>
        </div>
      </div>

      <div
        onClick={() => setShowModal(true)}
        className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 border border-blue-500/30 cursor-pointer hover:border-blue-400/50 transition-all group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative flex items-center justify-between">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">Oportunidades disponíveis agora</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Ativo
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Descubra vagas e execuções gratuitas disponíveis para o seu perfil
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Atualizado hoje
                </span>
                <span>•</span>
                <span>Múltiplas áreas</span>
                <span>•</span>
                <span>Home office e presencial</span>
              </div>
            </div>
          </div>
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold transition-all transform group-hover:scale-105 shadow-lg shadow-blue-500/20">
            Ver oportunidades
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {taskPlatforms.map((platform) => (
          <TaskCard key={platform.id} platform={platform} onPlatformClick={onPlatformSelect} />
        ))}
      </div>

      {showModal && (
        <OpportunitiesModal
          onClose={() => setShowModal(false)}
          onViewPlatforms={() => setShowModal(false)}
        />
      )}
    </div>
  );
}