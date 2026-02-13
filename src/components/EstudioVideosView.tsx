import React from 'react';
import { Rocket, Video } from 'lucide-react';

export default function EstudioVideosView() {
  const handleGrokClick = () => {
    window.open('https://x.com/i/grok', '_blank');
  };

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/studio', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-12">
          Qual plataforma você deseja usar?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={handleGrokClick}
            className="group relative bg-slate-900/50 border-2 border-slate-700 hover:border-blue-500 rounded-2xl p-12 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center space-y-4">
              <Rocket className="w-20 h-20 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold text-white">Grok</span>
            </div>
          </button>

          <button
            onClick={handleTikTokClick}
            className="group relative bg-slate-900/50 border-2 border-slate-700 hover:border-cyan-500 rounded-2xl p-12 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center space-y-4">
              <Video className="w-20 h-20 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold text-white">TikTok Studio</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
