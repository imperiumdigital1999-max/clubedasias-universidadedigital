import React, { useState } from 'react';
import { ArrowLeft, Copy, Image, Sparkles, Zap } from 'lucide-react';

interface ImageGeneratorAgentProps {
  onBack: () => void;
}

const styles = [
  { id: 'realistic', label: 'Realista', icon: '🎬' },
  { id: 'artistic', label: 'Artístico', icon: '🎨' },
  { id: 'cartoon', label: 'Cartoon', icon: '🎭' },
  { id: 'scifi', label: 'Ficção Científica', icon: '🚀' },
  { id: 'vintage', label: 'Vintage', icon: '📽️' },
  { id: 'minimalist', label: 'Minimalista', icon: '⬜' },
];

export default function ImageGeneratorAgent({ onBack }: ImageGeneratorAgentProps) {
  const [selectedStyle, setSelectedStyle] = useState('realistic');
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateImage = () => {
    if (!prompt.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
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
            <div className="p-2 bg-gradient-to-br from-orange-600 to-rose-600 rounded-lg">
              <Image className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Gerador de Imagens</h1>
          </div>
          <p className="text-slate-400 text-lg">
            Crie imagens de alta qualidade a partir de descrições em texto
          </p>
        </div>

        {/* Style Selection */}
        <div className="mb-8">
          <label className="block text-white font-semibold mb-4">Estilo</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`p-4 rounded-xl font-medium transition-all duration-300 text-left flex items-center space-x-2 ${
                  selectedStyle === style.id
                    ? 'bg-gradient-to-r from-orange-600 to-rose-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <span>{style.icon}</span>
                <span className="text-sm">{style.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Input Section */}
          <div className="space-y-4">
            <label className="block text-white font-semibold">Descrição da Imagem</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Descreva a imagem que deseja criar... Por exemplo: uma paisagem montanhosa ao pôr do sol com um lago cristalino"
              className="w-full h-32 bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 resize-none"
            />
            <div className="text-sm text-slate-400">
              Caracteres: {prompt.length}
            </div>
            <button
              onClick={handleGenerateImage}
              disabled={prompt.trim().length < 10 || isLoading}
              className="w-full bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>{isLoading ? 'Gerando imagem...' : 'Gerar Imagem'}</span>
            </button>
          </div>

          {/* Image Preview Area */}
          <div>
            <label className="block text-white font-semibold mb-4">Visualização</label>
            <div className="w-full aspect-square bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-dashed border-slate-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {isLoading ? (
                <div className="text-center space-y-4">
                  <div className="animate-spin">
                    <Sparkles className="w-12 h-12 text-orange-500 mx-auto" />
                  </div>
                  <p className="text-slate-400">Gerando imagem...</p>
                </div>
              ) : (
                <div className="text-center">
                  <Image className="w-16 h-16 text-slate-600 mx-auto mb-3" />
                  <p className="text-slate-500">A imagem será exibida aqui</p>
                  <p className="text-xs text-slate-600 mt-2">Máximo: 1024x1024px</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span>Dicas para melhores resultados</span>
          </h2>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start space-x-3">
              <span className="text-orange-400 mt-1">→</span>
              <span>Seja detalhado na descrição: cores, objetos, composição, iluminação</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-orange-400 mt-1">→</span>
              <span>Use palavras-chave específicas para melhor qualidade</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-orange-400 mt-1">→</span>
              <span>Mencione referências artísticas se desejar um estilo similar</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-orange-400 mt-1">→</span>
              <span>Experimente diferentes estilos para encontrar o que mais gosta</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
