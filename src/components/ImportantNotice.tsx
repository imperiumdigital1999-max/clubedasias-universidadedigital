import React, { useState } from 'react';
import { Info, CheckCircle2 } from 'lucide-react';

interface ImportantNoticeProps {
  onBannerClick?: () => void;
}

export default function ImportantNotice({ onBannerClick }: ImportantNoticeProps) {
  const [isActivated, setIsActivated] = useState(false);

  const handleActivation = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActivated(true);
  };

  return (
    <section className="mb-12">
      <div
        onClick={onBannerClick}
        className={`relative rounded-2xl overflow-hidden backdrop-blur-sm cursor-pointer transition-all duration-500 transform ${
          isActivated
            ? 'bg-green-900/30 border-green-500 hover:bg-green-900/40 hover:border-green-400 shadow-lg shadow-green-500/20'
            : 'bg-slate-800/50 border border-slate-600/50 hover:bg-slate-800/70 hover:border-blue-500/50'
        } hover:scale-[1.02]`}
      >
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:w-64">
              <img
                src="https://static-media.hotmart.com/rpcnJ1gXq6x2ZXYsMmsHNe-gMMI=/300x300/filters:quality(100)/hotmart/product_pictures/e20d0223-005f-4ee6-ab11-b223621d78d8/ChatGPTImage21dedezde202519_11_37.png"
                alt="Viral Edit + VO3 AI"
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-start space-x-3 mb-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-1 transition-all duration-500 ${
                  isActivated ? 'bg-green-500/30' : 'bg-blue-500/20'
                }`}>
                  {isActivated ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400 animate-pulse" />
                  ) : (
                    <Info className="w-5 h-5 text-blue-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-all duration-500 ${
                    isActivated
                      ? 'text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]'
                      : 'text-white'
                  }`}>
                    {isActivated ? 'AI LIBERADA!' : 'CLIQUE E LIBERE A AI'}
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold text-blue-400 mb-3">
                    Acesso Viral Edit + VO3 AI
                  </h4>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4">
                    {isActivated ? (
                      <>
                        Seu acesso foi ativado com sucesso!<br />
                        Você já pode começar a usar todas as ferramentas de IA disponíveis.
                      </>
                    ) : (
                      <>
                       Clique aqui e verifique se seu acesso foi liberado.<br />
                      </>
                    )}
                  </p>
                  {!isActivated && (
                    <button
                      onClick={handleActivation}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                    >
                      Liberar Acesso
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
