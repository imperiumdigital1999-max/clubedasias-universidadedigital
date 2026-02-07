import React from 'react';
import { ArrowLeft, MessageCircle, FileText, PenTool, Image, Video, ArrowRight } from 'lucide-react';
import { aiAgents } from '../data/aiAgents';

interface AiAgentsViewProps {
  onBack: () => void;
  onAgentSelect: (agentId: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  FileText,
  PenTool,
  Image,
  Video,
};

export default function AiAgentsView({ onBack, onAgentSelect }: AiAgentsViewProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-12">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agentes de IA
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Explore nossos sistemas inteligentes especializados. Cada agente é projetado para uma tarefa específica, proporcionando resultados rápidos e precisos.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {aiAgents.map((agent) => {
            const Icon = iconMap[agent.icon] || MessageCircle;
            const colorClasses = `from-${agent.accent}-600 to-${agent.accent}-400`;

            return (
              <div
                key={agent.id}
                onClick={() => onAgentSelect(agent.id)}
                className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 cursor-pointer transition-all duration-300 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-1"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-white to-transparent" />

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon Container */}
                  <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 group-hover:shadow-lg group-hover:shadow-slate-600/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-slate-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {agent.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {agent.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAgentSelect(agent.id);
                    }}
                    className="w-full flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg transition-all duration-300 font-medium group-hover:shadow-lg"
                  >
                    <span>Usar Agente</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${agent.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50">
          <h2 className="text-xl font-semibold text-white mb-4">
            Como funcionam os Agentes de IA?
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Cada agente é um sistema independente e especializado. Selecione o agente que atende sua necessidade, e você será direcionado para uma interface dedicada onde pode interagir com ele. Os agentes aprendem com suas preferências e entregam resultados cada vez mais precisos.
          </p>
        </div>
      </div>
    </div>
  );
}
