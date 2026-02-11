import React from 'react';
import { X, Crown, Check, Sparkles, Zap, Shield, Headphones } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade?: () => void;
}

export default function UpgradeModal({ isOpen, onClose, onUpgrade }: UpgradeModalProps) {
  if (!isOpen) return null;

  const benefits = [
    {
      icon: Sparkles,
      text: 'Acesso a todos os agentes'
    },
    {
      icon: Zap,
      text: 'Créditos ilimitados'
    },
    {
      icon: Crown,
      text: 'Agentes exclusivos PRO'
    },
    {
      icon: Shield,
      text: 'Atualizações prioritárias'
    },
    {
      icon: Headphones,
      text: 'Suporte avançado'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl max-w-md w-full p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Desbloqueie o Plano PRO
          </h2>
          <p className="text-slate-400">
            Acesso total ao arsenal de IAs profissionais
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <benefit.icon className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-slate-300 font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onUpgrade}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02]"
        >
          Quero ser PRO
        </button>

        <p className="text-center text-slate-500 text-sm mt-6">
          Cancele quando quiser. Sem compromisso.
        </p>
      </div>
    </div>
  );
}
