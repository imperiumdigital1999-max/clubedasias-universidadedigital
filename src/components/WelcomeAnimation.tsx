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
            <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <svg
                className="w-20 h-20 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
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
