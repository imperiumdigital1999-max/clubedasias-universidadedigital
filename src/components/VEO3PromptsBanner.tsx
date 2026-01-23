import React from 'react';
import { Video, Sparkles, ArrowRight } from 'lucide-react';

interface VEO3PromptsBannerProps {
  onClick: () => void;
}

export default function VEO3PromptsBanner({ onClick }: VEO3PromptsBannerProps) {
  return (
    <section className="mb-12">
      <div
        onClick={onClick}
        className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-cyan-900/40 border border-purple-500/30 cursor-pointer transition-all duration-300 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.01] transform group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-10">
            <div className="flex-shrink-0 mb-6 md:mb-0 flex items-center justify-center md:w-48">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-40 animate-pulse" />
                <div className="relative bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl p-8 shadow-2xl">
                  <Video className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
                  Exclusivo
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Prompts Exclusivos do VEO 3
              </h3>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                Crie vídeos hiper-realistas em segundos usando prompts prontos
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 group-hover:shadow-2xl"
              >
                <Video className="w-6 h-6" />
                <span>Acessar Prompts do VEO 3</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />
      </div>
    </section>
  );
}
