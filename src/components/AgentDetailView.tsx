import React, { useState } from 'react';
import { ArrowLeft, Play, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';

interface AgentPrompt {
  id: string;
  title: string;
  prompt: string;
  category?: string;
}

interface PersonalizationField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'textarea';
}

interface AgentData {
  id: string;
  name: string;
  description: string;
  videoUrl?: string;
  videoThumbnail?: string;
  steps: string[];
  externalLink?: string;
  externalLinkText?: string;
  prompts: AgentPrompt[];
  personalizationFields: PersonalizationField[];
  personalizationInstructions: string;
}

interface AgentDetailViewProps {
  agentData: AgentData;
  onBack: () => void;
  userPlan?: 'free' | 'pro';
  onUpgradeClick?: () => void;
}

export default function AgentDetailView({ agentData, onBack, userPlan = 'free', onUpgradeClick }: AgentDetailViewProps) {
  const [activeSection, setActiveSection] = useState<'guiado' | 'prompts' | 'personalizar' | 'creditos'>('guiado');
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [personalizationValues, setPersonalizationValues] = useState<Record<string, string>>({});
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [copiedGenerated, setCopiedGenerated] = useState(false);

  const sections = [
    { id: 'guiado' as const, label: 'Acesso Guiado à IA' },
    { id: 'prompts' as const, label: 'Acesse Seus Prompts' },
    { id: 'personalizar' as const, label: 'Personalização de Prompt' },
    { id: 'creditos' as const, label: 'Créditos Gratuitos' }
  ];

  const handleCopyPrompt = (promptId: string, promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptId(promptId);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const handlePersonalizationChange = (fieldId: string, value: string) => {
    setPersonalizationValues(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleGeneratePersonalizedPrompt = () => {
    const values = personalizationValues;
    const prompt = `${agentData.personalizationInstructions}

Objetivo: ${values.objetivo || '[não especificado]'}
Nicho: ${values.nicho || '[não especificado]'}
Público-Alvo: ${values.publico || '[não especificado]'}
Tom de Voz: ${values.tom || '[não especificado]'}

Por favor, gere o conteúdo seguindo essas especificações.`;

    setGeneratedPrompt(prompt);
  };

  const handleCopyGeneratedPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopiedGenerated(true);
    setTimeout(() => setCopiedGenerated(false), 2000);
  };

  const creditsUsed = 3;
  const creditsTotal = 10;
  const creditsPercentage = (creditsUsed / creditsTotal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar ao Início</span>
        </button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {agentData.name}
          </h1>
          <p className="text-slate-400 text-lg">
            {agentData.description}
          </p>
        </div>

        <div className="mb-8 border-b border-slate-800/50 overflow-x-auto">
          <div className="flex space-x-1 min-w-max">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 text-sm font-medium transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'text-white border-b-2 border-blue-500'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        <div className="animate-fade-in">
          {activeSection === 'guiado' && (
            <div className="space-y-8">
              {agentData.videoUrl && (
                <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-slate-800/50 flex items-center justify-center relative">
                    {agentData.videoThumbnail ? (
                      <img src={agentData.videoThumbnail} alt="Video thumbnail" className="w-full h-full object-cover" />
                    ) : (
                      <Play className="w-16 h-16 text-slate-600" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110">
                        <Play className="w-8 h-8 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Como Usar Este Agente</h2>
                <div className="space-y-4">
                  {agentData.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-slate-300 pt-1">{step}</p>
                    </div>
                  ))}
                </div>

                {agentData.externalLink && (
                  <div className="mt-8">
                    <a
                      href={agentData.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20"
                    >
                      <span>{agentData.externalLinkText || 'Acessar Ferramenta'}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeSection === 'prompts' && (
            <div className="space-y-4">
              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Prompts Prontos para Usar</h2>
                <p className="text-slate-400 mb-8">
                  Selecione um prompt abaixo e copie para usar diretamente na IA.
                </p>

                <div className="space-y-4">
                  {agentData.prompts.map((prompt) => (
                    <div
                      key={prompt.id}
                      className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-semibold text-lg">{prompt.title}</h3>
                        {prompt.category && (
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                            {prompt.category}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm mb-4 whitespace-pre-line">
                        {prompt.prompt}
                      </p>
                      <button
                        onClick={() => handleCopyPrompt(prompt.id, prompt.prompt)}
                        className="inline-flex items-center space-x-2 bg-slate-700/50 hover:bg-slate-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
                      >
                        {copiedPromptId === prompt.id ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copiar Prompt</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'personalizar' && (
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Personalize Seu Prompt</h2>
              <p className="text-slate-400 mb-8">
                Preencha os campos abaixo para gerar um prompt personalizado para suas necessidades específicas.
              </p>

              <div className="space-y-6 mb-8">
                {agentData.personalizationFields.map((field) => (
                  <div key={field.id}>
                    <label className="block text-white font-medium mb-2">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        value={personalizationValues[field.id] || ''}
                        onChange={(e) => handlePersonalizationChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        rows={4}
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    ) : (
                      <input
                        type="text"
                        value={personalizationValues[field.id] || ''}
                        onChange={(e) => handlePersonalizationChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={handleGeneratePersonalizedPrompt}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20 mb-8"
              >
                <Sparkles className="w-5 h-5" />
                <span>Gerar Prompt Personalizado</span>
              </button>

              {generatedPrompt && (
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Seu Prompt Personalizado</h3>
                    <button
                      onClick={handleCopyGeneratedPrompt}
                      className="inline-flex items-center space-x-2 bg-slate-700/50 hover:bg-slate-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
                    >
                      {copiedGenerated ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-slate-300 text-sm whitespace-pre-line">
                    {generatedPrompt}
                  </p>
                </div>
              )}
            </div>
          )}

          {activeSection === 'creditos' && (
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {userPlan === 'pro' ? 'Créditos Ilimitados PRO' : 'Créditos Gratuitos'}
              </h2>

              {userPlan === 'free' ? (
                <>
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-slate-400">Créditos Disponíveis</span>
                      <span className="text-2xl font-bold text-white">
                        {creditsUsed} / {creditsTotal}
                      </span>
                    </div>
                    <div className="h-3 bg-slate-800/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
                        style={{ width: `${creditsPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-8">
                    <h3 className="text-white font-semibold mb-4">Como Funcionam os Créditos</h3>
                    <ul className="space-y-3 text-slate-400">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Cada uso do agente consome 1 crédito</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Membros gratuitos recebem 10 créditos por dia</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Membros PRO têm créditos ilimitados</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Os créditos são renovados diariamente às 00h</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={onUpgradeClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-4 px-6 rounded-lg transition-all shadow-lg shadow-blue-500/20"
                  >
                    Upgrade para PRO - Créditos Ilimitados
                  </button>
                </>
              ) : (
                <>
                  <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-xl p-8 mb-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl mb-4">
                      <span className="text-3xl">∞</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Créditos Ilimitados</h3>
                    <p className="text-amber-400">
                      Como membro PRO, você tem acesso ilimitado a todos os agentes
                    </p>
                  </div>

                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-4">Benefícios PRO Ativos</h3>
                    <ul className="space-y-3 text-slate-400">
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Créditos ilimitados em todos os agentes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Acesso a agentes exclusivos PRO</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Suporte prioritário</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-400 mr-2">✓</span>
                        <span>Atualizações e novos agentes primeiro</span>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
