import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Task } from '../data/taskAgents';

interface TaskAgentsViewProps {
  task: Task;
  onBack: () => void;
}

export default function TaskAgentsView({ task, onBack }: TaskAgentsViewProps) {
  const handleAccessAgent = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>
      </div>

      <h1 className="text-4xl font-bold mb-4">
        <span className="text-white">Tarefa: </span>
        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {task.name}
        </span>
      </h1>

      <p className="text-slate-400 text-lg mb-12">
        {task.description}
      </p>

      <div className="space-y-6">
        {task.agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-slate-900/50 rounded-xl p-4 sm:p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 relative group"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex items-start gap-3 md:gap-4 flex-1 min-w-0">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="text-white font-semibold text-base sm:text-lg">{agent.name}</h3>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded uppercase">
                      Agente IA
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {agent.description}
                  </p>

                  {agent.rating && (
                    <div className="flex items-center gap-1 text-yellow-500 mb-3 md:mb-0">
                      <span className="text-base sm:text-lg">⭐</span>
                      <span className="text-white font-semibold text-sm">{agent.rating}</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleAccessAgent(agent.url)}
                className="flex items-center justify-center gap-2 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors w-full md:w-auto md:flex-shrink-0 md:self-start"
              >
                <span className="text-sm font-medium">Visitar</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {task.agents.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            Nenhum agente disponível para esta tarefa.
          </div>
        )}
      </div>
    </div>
  );
}
