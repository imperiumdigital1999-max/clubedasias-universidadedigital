import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';

export default function GereSuaArteView() {
  const handleComputerClick = () => {
    window.open('https://openai.com/sora/', '_blank');
  };

  const handleMobileClick = () => {
    window.open('https://app.reve.com/', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-12">
          Você está usando computador ou celular?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={handleComputerClick}
            className="group relative bg-slate-900/50 border-2 border-slate-700 hover:border-blue-500 rounded-2xl p-12 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center space-y-4">
              <Monitor className="w-20 h-20 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold text-white">Computador</span>
            </div>
          </button>

          <button
            onClick={handleMobileClick}
            className="group relative bg-slate-900/50 border-2 border-slate-700 hover:border-cyan-500 rounded-2xl p-12 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center space-y-4">
              <Smartphone className="w-20 h-20 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold text-white">Celular</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
