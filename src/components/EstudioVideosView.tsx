import React from 'react';
import { Bot, Clapperboard, ExternalLink } from 'lucide-react';

export default function EstudioVideosView() {
  const handleGrokClick = () => {
    window.open('https://x.com/i/grok', '_blank');
  };

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/studio', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Estúdio de Vídeos
          </h1>
          <p className="text-lg text-slate-500">
            Escolha uma plataforma para criar seus vídeos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div
            onClick={handleGrokClick}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-slate-200"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <Bot className="w-16 h-16 text-blue-600" />
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-blue-600">Grok</h3>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-slate-600 leading-relaxed">
                Crie vídeos com inteligência artificial usando o Grok
              </p>
            </div>
          </div>

          <div
            onClick={handleTikTokClick}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-slate-200"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <Clapperboard className="w-16 h-16 text-blue-600" />
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-blue-600">TikTok Studio</h3>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-slate-600 leading-relaxed">
                Estúdio criativo do TikTok para produção de vídeos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
