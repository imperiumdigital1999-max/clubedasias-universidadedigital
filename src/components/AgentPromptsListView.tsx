import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { AgentData, AgentPrompt } from '../data/agentsData';

interface AgentPromptsListViewProps {
  agentData: AgentData;
  onBack: () => void;
  onPromptSelect: (promptId: string) => void;
}

export default function AgentPromptsListView({ agentData, onBack, onPromptSelect }: AgentPromptsListViewProps) {
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
        <span className="text-white">{agentData.name.split(' ')[0]} </span>
        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {agentData.name.split(' ').slice(1).join(' ')}
        </span>
      </h1>

      <p className="text-slate-400 text-lg mb-12">
        {agentData.description}
      </p>

      <div className="space-y-6">
        {agentData.prompts.map((prompt: AgentPrompt) => (
          <div
            key={prompt.id}
            className="bg-slate-900/50 rounded-xl p-4 sm:p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 relative group"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex items-start gap-3 md:gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="text-white font-semibold text-base sm:text-lg">{prompt.title}</h3>
                    {prompt.category && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded uppercase">
                        {prompt.category}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {prompt.prompt.substring(0, 150)}...
                  </p>
                </div>
              </div>

              <button
                onClick={() => onPromptSelect(prompt.id)}
                className="flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg transition-all shadow-lg shadow-blue-500/20 w-full md:w-auto md:flex-shrink-0 md:self-start"
              >
                <span className="text-sm font-medium">Acessar</span>
              </button>
            </div>
          </div>
        ))}

        {agentData.prompts.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            Nenhum prompt disponível para este agente.
          </div>
        )}
      </div>
    </div>
  );
}
