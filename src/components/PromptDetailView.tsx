import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import { AgentData, AgentPrompt } from '../data/agentsData';

interface PromptDetailViewProps {
  agentData: AgentData;
  promptId: string;
  onBack: () => void;
}

export default function PromptDetailView({ agentData, promptId, onBack }: PromptDetailViewProps) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const prompt = agentData.prompts.find(p => p.id === promptId);

  if (!prompt) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white text-center">
          <p>Prompt não encontrado</p>
          <button onClick={onBack} className="mt-4 text-blue-400 hover:text-blue-300">
            Voltar
          </button>
        </div>
      </div>
    );
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {prompt.title}
              </h1>
              {prompt.category && (
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded uppercase">
                  {prompt.category}
                </span>
              )}
            </div>
          </div>
          <p className="text-slate-400 text-lg">
            {agentData.description}
          </p>
        </div>

        <div className="space-y-6">
          {agentData.steps && agentData.steps.length > 0 && (
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-blue-400" />
                Como Usar Este Prompt
              </h2>
              <ol className="space-y-4">
                {agentData.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-slate-300 text-base pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Seu Prompt</h2>
              <button
                onClick={handleCopyPrompt}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  copiedPrompt
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                }`}
              >
                {copiedPrompt ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm font-medium">Copiar Prompt</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
              <pre className="text-slate-300 text-sm whitespace-pre-wrap font-mono">
                {prompt.prompt}
              </pre>
            </div>
          </div>

          {agentData.externalLink && (
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Pronto para usar?
                  </h3>
                  <p className="text-slate-300">
                    Acesse a ferramenta recomendada para este prompt
                  </p>
                </div>
                <a
                  href={agentData.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg transition-all shadow-lg shadow-blue-500/20 font-medium whitespace-nowrap"
                >
                  <span>{agentData.externalLinkText || 'Acessar Ferramenta'}</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
