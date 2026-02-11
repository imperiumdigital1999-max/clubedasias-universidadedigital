import React, { useState } from 'react';
import { FileText, Play } from 'lucide-react';

interface OnboardingChoiceProps {
  onComplete: () => void;
}

export default function OnboardingChoice({ onComplete }: OnboardingChoiceProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleChoice = (choice: 'text' | 'video') => {
    localStorage.setItem('clube_ias_onboarding_choice', choice);
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 overflow-y-auto">
      <div className="w-full max-w-5xl py-8 md:py-12">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Como quer começar?
          </h1>
          <p className="text-slate-400 text-base md:text-lg">
            Escolha como deseja ver o processo de ativação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-slide-up">
          <div
            className={`relative group cursor-pointer transition-all duration-300 ${
              hoveredCard === 'text' ? 'transform scale-105' : ''
            }`}
            onMouseEnter={() => setHoveredCard('text')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleChoice('text')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 md:p-10 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-300">
                  <FileText className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                Passo a Passo em Texto
              </h2>

              <p className="text-slate-400 text-sm md:text-base text-center mb-8 leading-relaxed">
                Instruções claras e diretas para seguir no seu ritmo
              </p>

              <div className="flex justify-center">
                <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-400 text-sm font-semibold">
                  ✨ Recomendado
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>

          <div
            className={`relative group cursor-pointer transition-all duration-300 ${
              hoveredCard === 'video' ? 'transform scale-105' : ''
            }`}
            onMouseEnter={() => setHoveredCard('video')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleChoice('video')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 md:p-10 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-300">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                Tutorial em Vídeo
              </h2>

              <p className="text-slate-400 text-sm md:text-base text-center mb-8 leading-relaxed">
                Assista e acompanhe visualmente cada etapa
              </p>

              <div className="flex justify-center">
                <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-400 text-sm font-semibold">
                  🎬 Visual e interativo
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={onComplete}
            className="text-slate-500 hover:text-slate-400 text-sm transition-colors"
          >
            Pular esta etapa
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s backwards;
        }
      `}</style>
    </div>
  );
}
