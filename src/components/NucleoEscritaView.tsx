import React from 'react';
import { ArrowLeft, PenTool, FileText } from 'lucide-react';

interface NucleoEscritaViewProps {
  onBack: () => void;
  onAgentSelect: (agentId: string) => void;
}

export default function NucleoEscritaView({ onBack, onAgentSelect }: NucleoEscritaViewProps) {
  const agents = [
    {
      id: 'mestre-copy',
      name: 'Agente Mestre de Copy',
      description: 'Copy persuasiva com múltiplos modos: Persuasivo, Vendedor, Social Media e Textos Prontos',
      icon: PenTool
    },
    {
      id: 'pagina-vendas',
      name: 'Agente Criador de Página de Vendas',
      description: 'Criação completa de páginas de vendas que convertem',
      icon: FileText
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
            🧠 Núcleo Escrita & Vendas
          </h1>
          <p className="text-slate-400 text-lg">
            Copy, páginas, textos persuasivos e conteúdo que converte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => onAgentSelect(agent.id)}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 text-left hover:border-slate-700/50 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <agent.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">{agent.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{agent.description}</p>
              <span className="inline-flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                Acessar Agente →
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
