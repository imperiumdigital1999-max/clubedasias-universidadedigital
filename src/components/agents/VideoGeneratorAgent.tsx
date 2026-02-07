import React, { useState } from 'react';
import { ArrowLeft, Copy, Video, Sparkles, Zap } from 'lucide-react';
import { VideoGeneratorService } from '../../utils/aiAgentServices';

interface VideoGeneratorAgentProps {
  onBack: () => void;
}

const videoTypes = [
  { id: 'explainer', label: 'Vídeo Explicativo', icon: '📚' },
  { id: 'marketing', label: 'Marketing', icon: '📢' },
  { id: 'animation', label: 'Animação', icon: '✨' },
  { id: 'tutorial', label: 'Tutorial', icon: '🎓' },
  { id: 'storytelling', label: 'Storytelling', icon: '📖' },
  { id: 'social', label: 'Redes Sociais', icon: '📱' },
];

export default function VideoGeneratorAgent({ onBack }: VideoGeneratorAgentProps) {
  const [selectedType, setSelectedType] = useState('explainer');
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState('30');
  const [generatedScript, setGeneratedScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleGenerateVideo = () => {
    if (!prompt.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
      const script = VideoGeneratorService.generateVideoScript(prompt, selectedType);
      setGeneratedScript(script);
      setIsLoading(false);
    }, 2000);
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
            <div className="p-2 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg">
              <Video className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Gerador de Vídeos</h1>
          </div>
          <p className="text-slate-400 text-lg">
            Gere vídeos profissionais a partir de ideias, textos ou comandos simples
          </p>
        </div>

        {/* Type Selection */}
        <div className="mb-8">
          <label className="block text-white font-semibold mb-4">Tipo de Vídeo</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {videoTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 rounded-xl font-medium transition-all duration-300 text-left flex items-center space-x-2 ${
                  selectedType === type.id
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <span>{type.icon}</span>
                <span className="text-sm">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Input Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <label className="block text-white font-semibold">Descrição do Vídeo</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Descreva o vídeo que deseja criar... Por exemplo: um tutorial mostrando como usar um aplicativo de edição de fotos"
                className="w-full h-40 bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 resize-none"
              />
              <div className="text-sm text-slate-400">
                Caracteres: {prompt.length}
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-white font-semibold">Duração (segundos)</label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              >
                <option value="15">15 segundos</option>
                <option value="30">30 segundos</option>
                <option value="60">1 minuto</option>
                <option value="120">2 minutos</option>
                <option value="300">5 minutos</option>
              </select>
              <button
                onClick={handleGenerateVideo}
                disabled={prompt.trim().length < 10 || isLoading}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>{isLoading ? 'Gerando...' : 'Gerar Vídeo'}</span>
              </button>
            </div>
          </div>

          {/* Generated Script */}
          {generatedScript && (
            <div>
              <label className="block text-white font-semibold mb-4">Roteiro do Vídeo</label>
              <div className="relative">
                <textarea
                  value={generatedScript}
                  readOnly
                  className="w-full h-80 bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-white placeholder-slate-400 resize-none focus:outline-none whitespace-pre-wrap overflow-y-auto text-sm leading-relaxed"
                />
                <button
                  onClick={() => handleCopyText(generatedScript, 'script')}
                  className="absolute top-3 right-3 p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-400 hover:text-white transition-colors"
                  title="Copiar roteiro"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-green-400 font-semibold mt-2">
                {copiedId === 'script' ? '✓ Roteiro copiado!' : '✓ Roteiro pronto para produção'}
              </p>
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-red-400" />
            <span>Dicas para criar vídeos melhores</span>
          </h2>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start space-x-3">
              <span className="text-red-400 mt-1">→</span>
              <span>Estruture sua descrição: começar, meio e fim da narrativa</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-red-400 mt-1">→</span>
              <span>Seja claro sobre o tom desejado: profissional, casual, entusiasmado</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-red-400 mt-1">→</span>
              <span>Mencione elementos visuais específicos: cores, objetos, cenários</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-red-400 mt-1">→</span>
              <span>Vídeos mais curtos (15-30s) geram resultados mais rápidos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
