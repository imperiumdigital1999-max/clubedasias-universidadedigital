import React, { useState } from 'react';
import { ArrowLeft, Copy, FileText, Sparkles } from 'lucide-react';

interface TextSummaryAgentProps {
  onBack: () => void;
}

export default function TextSummaryAgent({ onBack }: TextSummaryAgentProps) {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleGenerateSummary = () => {
    if (!inputText.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
      setSummary(
        'Este é um resumo demonstrativo. A funcionalidade completa de resumo de texto será implementada em breve com algoritmos avançados de processamento de linguagem natural.'
      );
      setIsLoading(false);
    }, 1500);
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const wordCount = inputText.trim().split(/\s+/).length;
  const summaryWordCount = summary.trim().split(/\s+/).length;
  const reductionPercentage =
    wordCount > 0 ? Math.round(((wordCount - summaryWordCount) / wordCount) * 100) : 0;

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
            <div className="p-2 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Resumo de Texto</h1>
          </div>
          <p className="text-slate-400 text-lg">
            Cole um texto longo e receba um resumo claro e objetivo em segundos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <label className="block text-white font-semibold">Texto Original</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Cole seu texto aqui... (mínimo 50 caracteres)"
              className="w-full h-64 bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 resize-none"
            />
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Caracteres: {inputText.length}</span>
              <span>Palavras: {wordCount}</span>
            </div>
            <button
              onClick={handleGenerateSummary}
              disabled={inputText.trim().length < 50 || isLoading}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>{isLoading ? 'Gerando resumo...' : 'Gerar Resumo'}</span>
            </button>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <label className="block text-white font-semibold">Resumo Gerado</label>
            <div className="relative">
              <textarea
                value={summary}
                readOnly
                placeholder="O resumo aparecerá aqui..."
                className="w-full h-64 bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-white placeholder-slate-400 resize-none focus:outline-none"
              />
              {summary && (
                <button
                  onClick={() => handleCopyText(summary, 'summary')}
                  className="absolute top-3 right-3 p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-400 hover:text-white transition-colors"
                  title="Copiar resumo"
                >
                  <Copy className="w-5 h-5" />
                </button>
              )}
            </div>
            {summary && (
              <div className="flex items-center justify-between text-sm text-slate-400 bg-slate-800/50 p-3 rounded-lg">
                <span>Redução: {reductionPercentage}%</span>
                <span className="text-green-400 font-semibold">
                  {copiedId === 'summary' ? '✓ Copiado!' : 'Resumo pronto'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50">
          <h2 className="text-xl font-semibold text-white mb-4">Dicas para melhores resultados</h2>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Use textos com no mínimo 50 caracteres para resultados otimizados</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Quanto mais estruturado o texto, melhor o resumo gerado</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>O resumo mantém os pontos principais do texto original</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
