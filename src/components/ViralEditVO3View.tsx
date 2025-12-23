import React, { useState } from 'react';
import { BookOpen, Terminal, Sliders, Zap, ArrowLeft } from 'lucide-react';
import VEO3ImageGeneratorView from './VEO3ImageGeneratorView';

interface ViralEditVO3ViewProps {
  onBack?: () => void;
  onViewChange?: (view: string) => void;
}

interface Card {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  borderColor: string;
  iconBg: string;
}

export default function ViralEditVO3View({ onBack, onViewChange }: ViralEditVO3ViewProps) {
  const [showGenerator, setShowGenerator] = useState(false);
  const cards: Card[] = [
    {
      id: 'acesso-guiado',
      title: 'Acesso guiado a IA',
      description: 'Tutorial completo para começar a usar as ferramentas de IA do Viral Edit + VO3',
      icon: <BookOpen className="w-8 h-8" />,
      gradient: 'from-blue-600/20 to-cyan-600/20',
      borderColor: 'border-blue-500/30 hover:border-blue-400/60',
      iconBg: 'bg-blue-500/20'
    },
    {
      id: 'seus-prompts',
      title: 'Acesse seus prompts',
      description: 'Biblioteca de prompts personalizados e prontos para usar em seus projetos',
      icon: <Terminal className="w-8 h-8" />,
      gradient: 'from-green-600/20 to-emerald-600/20',
      borderColor: 'border-green-500/30 hover:border-green-400/60',
      iconBg: 'bg-green-500/20'
    },
    {
      id: 'personalizacao',
      title: 'Personalização de prompt',
      description: 'Customize e ajuste seus prompts para resultados ainda melhores',
      icon: <Sliders className="w-8 h-8" />,
      gradient: 'from-orange-600/20 to-amber-600/20',
      borderColor: 'border-orange-500/30 hover:border-orange-400/60',
      iconBg: 'bg-orange-500/20'
    },
    {
      id: 'creditos',
      title: 'Créditos gratuitos para usar na IA',
      description: 'Receba créditos gratuitos para testar e criar com as ferramentas de IA',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-yellow-600/20 to-orange-600/20',
      borderColor: 'border-yellow-500/30 hover:border-yellow-400/60',
      iconBg: 'bg-yellow-500/20'
    }
  ];

  const handleCardClick = (cardId: string) => {
    switch (cardId) {
      case 'acesso-guiado':
        if (onViewChange) onViewChange('aulas-viral-edit');
        break;
      case 'seus-prompts':
        if (onViewChange) onViewChange('prompts');
        break;
      case 'creditos':
        if (onViewChange) onViewChange('creditos-gratuitos');
        break;
      case 'personalizacao':
        setShowGenerator(true);
        break;
      default:
        break;
    }
  };

  const handleBackToCards = () => {
    setShowGenerator(false);
  };

  if (showGenerator) {
    return <VEO3ImageGeneratorView onBack={handleBackToCards} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Voltar ao Início</span>
          </button>
        </div>

        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src="https://static-media.hotmart.com/rpcnJ1gXq6x2ZXYsMmsHNe-gMMI=/300x300/filters:quality(100)/hotmart/product_pictures/e20d0223-005f-4ee6-ab11-b223621d78d8/ChatGPTImage21dedezde202519_11_37.png"
              alt="Viral Edit + VO3 AI"
              className="w-32 h-32 object-cover rounded-2xl border-4 border-blue-500/30"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Viral Edit + VO3 AI
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
            Acesse todas as funcionalidades e recursos da plataforma de criação de vídeos com IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${card.gradient} border ${card.borderColor} cursor-pointer transition-all duration-300 hover:scale-[1.02] transform group`}
            >
              <div className="relative z-10 p-8">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-16 h-16 ${card.iconBg} rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {card.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-slate-300 text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end">
                  <div className="text-blue-400 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                    <span>Acessar</span>
                    <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/50 border border-slate-600/50 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              Precisa de ajuda?
            </h2>
            <p className="text-slate-300 text-lg mb-6">
              Entre em contato com nossa equipe de suporte para qualquer dúvida sobre o acesso
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              Falar com Suporte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
