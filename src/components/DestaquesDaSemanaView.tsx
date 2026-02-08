import React from 'react';
import { Gift, Users, ArrowRight, Sparkles, Zap } from 'lucide-react';
import AnnouncementBanner from './AnnouncementBanner';
import ImportantNotice from './ImportantNotice';
import VEO3PromptsBanner from './VEO3PromptsBanner';

interface DestaquesDaSemanaViewProps {
  onViewChange?: (view: string) => void;
}

export default function DestaquesDaSemanaView({ onViewChange }: DestaquesDaSemanaViewProps) {
  const handleCommunityClick = () => {
    window.open('https://whatsapp.com/channel/0029Vb4Byv61noz5kQi01Y1Z', '_blank', 'noopener,noreferrer');
  };

  const handleQuizAccessClick = () => {
    window.open('https://inlead.digital/presente-de-natal-clube-das-ias', '_blank', 'noopener,noreferrer');
  };

  const handleViewCategories = () => {
    if (onViewChange) {
      onViewChange('ferramentas-ia');
    }
  };

  const handleViralEditClick = () => {
    if (onViewChange) {
      onViewChange('viral-edit-vo3');
    }
  };

  const handleVEO3PromptsClick = () => {
    if (onViewChange) {
      onViewChange('veo3');
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

          <section className="space-y-6">
            <ImportantNotice onBannerClick={handleViralEditClick} />
            <VEO3PromptsBanner onClick={handleVEO3PromptsClick} />
          </section>

          <section>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-green-600/10 to-red-600/10 border border-green-500/20 hover:border-green-500/30 transition-all">
              <div className="relative z-10 text-center py-10 px-6">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Gift className="w-9 h-9 text-green-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Presente de Natal do Clube das IAs</h2>
                </div>
                <p className="text-slate-300 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                  Responda a pesquisa oficial e libere o acesso à nova IA que cria vídeos profissionais
                </p>
                <button
                  onClick={handleQuizAccessClick}
                  className="bg-gradient-to-r from-green-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 mx-auto hover:from-green-600 hover:to-red-600 transition-all duration-300 hover:scale-105"
                >
                  <Gift className="w-5 h-5" />
                  <span>Responder e Liberar Acesso</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
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

          <section className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Recursos em Destaque</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
                <div className="text-slate-400 text-sm">Recursos</div>
              </div>
              <div className="bg-slate-900/50 border border-cyan-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20</div>
                <div className="text-slate-400 text-sm">Categorias</div>
              </div>
              <div className="bg-slate-900/50 border border-emerald-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                <div className="text-slate-400 text-sm">Operacional</div>
              </div>
              <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-slate-400 text-sm">Disponível</div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
