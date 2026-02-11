import React from 'react';
import { Users, ArrowRight, Sparkles } from 'lucide-react';
import AnnouncementBanner from './AnnouncementBanner';
import VEO3PromptsBanner from './VEO3PromptsBanner';

interface DestaquesDaSemanaViewProps {
  onViewChange?: (view: string) => void;
}

export default function DestaquesDaSemanaView({ onViewChange }: DestaquesDaSemanaViewProps) {
  const handleCommunityClick = () => {
    window.open('https://whatsapp.com/channel/0029Vb4Byv61noz5kQi01Y1Z', '_blank', 'noopener,noreferrer');
  };

  const handleViewCategories = () => {
    if (onViewChange) {
      onViewChange('ferramentas-ia');
    }
  };

  const handleVEO3PromptsClick = () => {
    if (onViewChange) {
      onViewChange('prompts');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        <section className="text-center pb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="w-10 h-10 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Destaques da Semana
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Novidades, recursos exclusivos e atualizações importantes do Clube das IAs
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6">

          <section>
            <VEO3PromptsBanner onClick={handleVEO3PromptsClick} />
          </section>

          <section>
            <AnnouncementBanner onViewCategories={handleViewCategories} />
          </section>

          <section>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 hover:border-blue-500/30 transition-all">
              <div className="relative z-10 text-center py-10 px-6">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Users className="w-9 h-9 text-blue-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Comunidade dos Gestores de IA</h2>
                </div>
                <p className="text-slate-300 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                  Conecte-se com outros profissionais e compartilhe experiências
                </p>
                <button
                  onClick={handleCommunityClick}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 mx-auto hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
                >
                  <Users className="w-5 h-5" />
                  <span>Entrar na Comunidade</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
