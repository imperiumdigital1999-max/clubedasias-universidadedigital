import React, { useState } from 'react';
import { Sparkles, Mail, Lock } from 'lucide-react';

interface LoginViewProps {
  onLogin: () => void;
}

export default function LoginView({ onLogin }: LoginViewProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem('clube_ias_email', email);
      localStorage.setItem('clube_ias_logged_in', 'true');
      onLogin();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-8">
            <img
              src="/chatgpt_image_8_de_fev._de_2026,_02_01_19.png"
              alt="Clube das IAs"
              className="w-64 h-auto"
            />
          </div>

          <p className="text-slate-400 text-lg">
            Acesso exclusivo para membros
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <Lock className="w-4 h-4 text-slate-500" />
              <p className="text-sm text-slate-500 font-medium">Área Exclusiva</p>
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Entre no Clube
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Seu e-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-slate-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Acessando...</span>
                </>
              ) : (
                <>
                  <span>Entrar no Clube</span>
                  <Sparkles className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-800">
            <p className="text-xs text-slate-500 text-center leading-relaxed">
              O acesso é liberado automaticamente após inserir seu e-mail.
              <br />
              Aproveite todas as ferramentas e recursos exclusivos.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-600 text-sm">
            Plataforma premium de ferramentas de IA
          </p>
        </div>
      </div>
    </div>
  );
}
