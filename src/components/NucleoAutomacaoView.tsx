import React from 'react';
import { ArrowLeft, Workflow, TrendingUp } from 'lucide-react';

interface NucleoAutomacaoViewProps {
  onBack: () => void;
  onAgentSelect: (agentId: string) => void;
}

export default function NucleoAutomacaoView({ onBack, onAgentSelect }: NucleoAutomacaoViewProps) {
  const agents = [
    {
      id: 'agente-automacao-n8n',
      name: 'Agente de Automação (n8n)',
      description: 'Automação avançada de processos e workflows',
      icon: Workflow
    },
    {
      id: 'estrategico-streaming',
      name: 'Agente Estratégico de Streaming',
      description: 'Organização e monetização legal de streaming',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar ao Início</span>
        </button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ⚙️ Núcleo Automação & Tech
          </h1>
          <p className="text-slate-400 text-lg">
            Automação, sistemas e organização inteligente de processos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => onAgentSelect(agent.id)}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 text-left hover:border-slate-700/50 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <agent.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">{agent.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{agent.description}</p>
              <span className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                Acessar Agente →
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
