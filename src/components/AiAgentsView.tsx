import React from 'react';
import { ArrowLeft, MessageCircle, FileText, PenTool, Image, Video, ArrowRight, Sparkles, Play, Film } from 'lucide-react';
import { aiAgents } from '../data/aiAgents';

interface AiAgentsViewProps {
  onBack: () => void;
  onAgentSelect: (agentId: string) => void;
  onViewChange?: (view: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  FileText,
  PenTool,
  Image,
  Video,
};

export default function AiAgentsView({ onBack, onAgentSelect, onViewChange }: AiAgentsViewProps) {
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

        {/* Video Creator Banner */}
        <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Criador de Vídeos com IA
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                Crie vídeos com inteligência artificial a partir de prompts prontos e estruturas otimizadas.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3 mr-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform rotate-6">
                  <Film className="w-7 h-7 text-white" />
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform -rotate-6">
                  <Play className="w-7 h-7 text-white" />
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center transform rotate-12">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
              </div>

              <button
                onClick={() => onViewChange?.('veo3')}
                className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
              >
                <span>Usar Agente</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
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
