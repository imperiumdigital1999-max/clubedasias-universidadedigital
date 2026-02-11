import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, ExternalLink, Crown, Sparkles, Play } from 'lucide-react';
import { AgentData } from '../data/agentsData';

interface AgentePageProps {
  agentData: AgentData;
  onBack: () => void;
  onUpgradeClick?: () => void;
  userPlan?: 'free' | 'pro';
}

export default function AgentePage({ agentData, onBack, onUpgradeClick, userPlan = 'free' }: AgentePageProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [personalizedPrompt, setPersonalizedPrompt] = useState<string>('');
  const [personalizationData, setPersonalizationData] = useState<Record<string, string>>({});
  const [showVideo, setShowVideo] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePersonalizationChange = (fieldId: string, value: string) => {
    setPersonalizationData(prev => ({ ...prev, [fieldId]: value }));
  };

  const generatePersonalizedPrompt = () => {
    let prompt = agentData.personalizationInstructions + '\n\n';
    agentData.personalizationFields.forEach(field => {
      const value = personalizationData[field.id] || '[NÃO INFORMADO]';
      prompt += `${field.label}: ${value}\n`;
    });
    setPersonalizedPrompt(prompt);
  };

  const isProFeature = agentData.id === 'criador-videos-veo3' || agentData.id === 'clonagem-videos-kinglia';
  const isLocked = isProFeature && userPlan === 'free';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar</span>
        </button>

        {isLocked && (
          <div className="mb-8 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Crown className="w-6 h-6 text-amber-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Recurso Exclusivo PRO</h3>
                  <p className="text-sm text-slate-400">Faça upgrade para acessar este agente</p>
                </div>
              </div>
              <button
                onClick={onUpgradeClick}
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg"
              >
                Fazer Upgrade
              </button>
            </div>
          </div>
        )}

        <div className={`${isLocked ? 'opacity-50 pointer-events-none' : ''}`}>
          <div className="bg-slate-900/50 backdrop-blur-lg border border-slate-800/50 rounded-2xl p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white">{agentData.name}</h1>
                    {isProFeature && (
                      <span className="inline-flex items-center space-x-1 text-xs text-amber-400 font-semibold">
                        <Crown className="w-3 h-3" />
                        <span>PRO</span>
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-slate-400 text-lg">{agentData.description}</p>
              </div>
            </div>

            {agentData.videoUrl && (
              <div className="mb-6">
                {!showVideo ? (
                  <div
                    onClick={() => setShowVideo(true)}
                    className="relative bg-slate-800/50 rounded-xl overflow-hidden cursor-pointer group h-64 flex items-center justify-center"
                    style={agentData.videoThumbnail ? {
                      backgroundImage: `url(${agentData.videoThumbnail})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    } : {}}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <div className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-slate-900 ml-1" />
                    </div>
                  </div>
                ) : (
                  <div className="relative rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={agentData.videoUrl}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            )}

            {agentData.externalLink && (
              <a
                href={agentData.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                <span>{agentData.externalLinkText || 'Acessar Ferramenta'}</span>
              </a>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-900/50 backdrop-blur-lg border border-slate-800/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Como Usar</h2>
              <ol className="space-y-4">
                {agentData.steps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-slate-300 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-lg border border-slate-800/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Personalize Seu Prompt</h2>
              <div className="space-y-4 mb-6">
                {agentData.personalizationFields.map(field => (
                  <div key={field.id}>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        value={personalizationData[field.id] || ''}
                        onChange={(e) => handlePersonalizationChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={3}
                      />
                    ) : (
                      <input
                        type="text"
                        value={personalizationData[field.id] || ''}
                        onChange={(e) => handlePersonalizationChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={generatePersonalizedPrompt}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Gerar Prompt Personalizado
              </button>

              {personalizedPrompt && (
                <div className="mt-6 bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-slate-300">Seu Prompt</span>
                    <button
                      onClick={() => handleCopy(personalizedPrompt, 'personalized')}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {copiedId === 'personalized' ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-sm">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-slate-400 text-sm whitespace-pre-wrap">{personalizedPrompt}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-lg border border-slate-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Prompts Prontos</h2>
            <div className="grid gap-6">
              {agentData.prompts.map(prompt => (
                <div
                  key={prompt.id}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{prompt.title}</h3>
                        {prompt.category && (
                          <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-xs text-blue-400 font-medium">
                            {prompt.category}
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(prompt.prompt, prompt.id)}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      {copiedId === prompt.id ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-sm">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-slate-400 text-sm whitespace-pre-wrap leading-relaxed">
                    {prompt.prompt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
