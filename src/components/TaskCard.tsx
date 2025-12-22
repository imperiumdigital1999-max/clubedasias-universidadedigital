import React from 'react';
import { CheckSquare, Target, Briefcase, ArrowRight } from 'lucide-react';
import { TaskPlatform } from '../types';

interface TaskCardProps {
  platform: TaskPlatform;
  onPlatformClick?: (platform: TaskPlatform) => void;
}

export default function TaskCard({ platform, onPlatformClick }: TaskCardProps) {
  const handleCardClick = () => {
    if (onPlatformClick) {
      onPlatformClick(platform);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-slate-800/60 rounded-lg border-2 border-slate-700 hover:border-blue-500 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-40 h-32 sm:h-auto flex-shrink-0 bg-slate-700/50">
          <img
            src={platform.image}
            alt={platform.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>

        <div className="flex-1 p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {platform.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {platform.featured && (
                  <span className="inline-flex items-center gap-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 px-2 py-0.5 rounded text-xs font-medium">
                    <Target className="w-3 h-3" />
                    Recomendado
                  </span>
                )}

                {platform.new && (
                  <span className="inline-flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded text-xs font-medium">
                    <CheckSquare className="w-3 h-3" />
                    Novo
                  </span>
                )}
              </div>
            </div>
          </div>

          <p className="text-slate-300 text-sm mb-4 line-clamp-2">
            {platform.description}
          </p>

          <button
            onClick={handleCardClick}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium text-sm transition-colors"
          >
            <span>Acessar Plataforma</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}