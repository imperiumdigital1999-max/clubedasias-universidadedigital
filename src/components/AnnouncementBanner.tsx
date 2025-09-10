import React from 'react';
import { Megaphone, ArrowRight } from 'lucide-react';

interface AnnouncementBannerProps {
  onViewCategories?: () => void;
}

export default function AnnouncementBanner({ onViewCategories }: AnnouncementBannerProps) {
  const handleViewCategories = () => {
    if (onViewCategories) {
      onViewCategories();
    }
  };

  return (
    <section>
      <div 
        className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
        }}
      >
        <div className="relative z-10 text-center py-12 px-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-400/30">
              <Megaphone className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">🚀 Novas IAs foram adicionadas hoje!</h2>
          </div>
          <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
            Confira agora as ferramentas PRO que acabaram de chegar no Clube das IAs na área de categorias!
          </p>
          <button
            onClick={handleViewCategories}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 mx-auto hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            <Megaphone className="w-6 h-6" />
            <span>Ver Novas Ferramentas</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}