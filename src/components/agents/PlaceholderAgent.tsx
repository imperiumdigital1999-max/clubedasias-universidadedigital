import React from 'react';
import { ArrowLeft, Construction } from 'lucide-react';

interface PlaceholderAgentProps {
  onBack: () => void;
  title: string;
  description: string;
}

export default function PlaceholderAgent({ onBack, title, description }: PlaceholderAgentProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>

        <div className="text-center py-16">
          <div className="w-24 h-24 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Construction className="w-12 h-12 text-slate-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 max-w-md mx-auto">
            <p className="text-slate-300 text-sm">
              Este agente está em desenvolvimento e estará disponível em breve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
