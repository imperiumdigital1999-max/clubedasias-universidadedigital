import React, { useEffect, useState } from 'react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

export default function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center px-4 animate-welcome-fade">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full animate-pulse"></div>
            <div className="relative w-40 h-40 flex items-center justify-center p-4 flex-shrink-0">
              <img
                src="/d6e04999-06b7-4615-b52c-09d5e3684592.png"
                alt="Clube das IAs"
                className="w-full h-full object-contain pointer-events-none select-none"
                draggable="false"
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-welcome-text">
          Seja Bem-Vindo ao{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow">
            Clube das IAs
          </span>
        </h1>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes welcome-fade {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          20% {
            opacity: 1;
            transform: scale(1);
          }
          80% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes welcome-text {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          30% {
            opacity: 0;
            transform: translateY(10px);
          }
          60% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.5),
                         0 0 20px rgba(59, 130, 246, 0.3),
                         0 0 30px rgba(59, 130, 246, 0.2);
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.8),
                         0 0 30px rgba(59, 130, 246, 0.5),
                         0 0 40px rgba(59, 130, 246, 0.3);
          }
        }

        .animate-welcome-fade {
          animation: welcome-fade 3s ease-in-out;
        }

        .animate-welcome-text {
          animation: welcome-text 3s ease-in-out;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
