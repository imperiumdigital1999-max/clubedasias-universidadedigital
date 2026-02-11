import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AgentData } from '../data/agentsData';

interface AgentLandingPageProps {
  agentData: AgentData;
  onAccessAgent: () => void;
}

export default function AgentLandingPage({ agentData, onAccessAgent }: AgentLandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {agentData.name}
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-xl mx-auto">
          {agentData.description}
        </p>

        <button
          onClick={onAccessAgent}
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg font-semibold px-10 py-5 rounded-xl transition-all shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 group"
        >
          <span>ACESSAR AGENTE</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
