import React, { useState } from 'react';
import { ArrowLeft, Copy, PenTool, Sparkles, Zap } from 'lucide-react';
import { AutomaticWritingService } from '../../utils/aiAgentServices';

interface AutomaticWritingAgentProps {
  onBack: () => void;
}

const writingTypes = [
  { id: 'conteudo', label: 'Conteúdo para Blog', icon: '📝' },
  { id: 'social', label: 'Postagem em Redes Sociais', icon: '📱' },
  { id: 'email', label: 'Email Profissional', icon: '✉️' },
  { id: 'descricao', label: 'Descrição de Produto', icon: '🛍️' },
  { id: 'ideias', label: 'Geração de Ideias', icon: '💡' },
  { id: 'explicacao', label: 'Explicação de Conceitos', icon: '🎓' },
];

export default function AutomaticWritingAgent({ onBack }: AutomaticWritingAgentProps) {
  const [selectedType, setSelectedType] = useState('conteudo');
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleGenerateText = () => {
    if (!prompt.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
      const text = AutomaticWritingService.generateText(prompt, selectedType);
      setGeneratedText(text);
      setIsLoading(false);
    }, 1500);
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
        </div>

        {/* Title */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
              <PenTool className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Escrita Automática</h1>
          </div>
          <p className="text-slate-400 text-lg">
            Gere textos profissionais para seus conteúdos, mensagens e ideias
          </p>
        </div>

        {/* Type Selection */}
        <div className="mb-8">
          <label className="block text-white font-semibold mb-4">Tipo de Texto</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {writingTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 rounded-xl font-medium transition-all duration-300 text-left flex items-center space-x-2 ${
                  selectedType === type.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <span>{type.icon}</span>
                <span className="text-sm">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <label className="block text-white font-semibold">Descrição/Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Descreva o que você quer gerar... Por exemplo: um artigo sobre inteligência artificial para iniciantes"
              className="w-full h-64 bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none"
            />
            <div className="text-sm text-slate-400">
              Caracteres: {prompt.length}
            </div>
            <button
              onClick={handleGenerateText}
              disabled={prompt.trim().length < 10 || isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>{isLoading ? 'Gerando texto...' : 'Gerar Texto'}</span>
            </button>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <label className="block text-white font-semibold">Texto Gerado</label>
            <div className="relative">
              <textarea
                value={generatedText}
                readOnly
                placeholder="O texto será exibido aqui..."
                className="w-full h-64 bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-white placeholder-slate-400 resize-none focus:outline-none whitespace-pre-wrap overflow-y-auto"
              />
              {generatedText && (
                <button
                  onClick={() => handleCopyText(generatedText, 'generated')}
                  className="absolute top-3 right-3 p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-400 hover:text-white transition-colors"
                  title="Copiar texto"
                >
                  <Copy className="w-5 h-5" />
                </button>
              )}
            </div>
            {generatedText && (
              <div className="text-sm text-green-400 font-semibold">
                {copiedId === 'generated' ? '✓ Copiado para área de transferência!' : '✓ Texto pronto'}
              </div>
            )}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span>Dicas para melhorar seus prompts</span>
          </h2>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start space-x-3">
              <span className="text-purple-400 mt-1">→</span>
              <span>Seja específico: quanto mais detalhes, melhor o resultado</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-purple-400 mt-1">→</span>
              <span>Mencione o tom desejado: profissional, casual, criativo, etc.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-purple-400 mt-1">→</span>
              <span>Indique o público alvo para textos mais direcionados</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-purple-400 mt-1">→</span>
              <span>Use exemplos: "similar a..." para melhorar os resultados</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
