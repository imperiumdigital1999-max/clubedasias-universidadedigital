import React, { useState, useEffect } from 'react';
import { Copy, Eye, EyeOff, Download, AlertTriangle, Info, CheckCircle2, Home, CheckSquare, HelpCircle } from 'lucide-react';

interface AtivacaoTextoViewProps {
  onBack: () => void;
  onConcluir: () => void;
}

export default function AtivacaoTextoView({ onBack, onConcluir }: AtivacaoTextoViewProps) {
  const [userName, setUserName] = useState('Usuário');
  const [activationDate, setActivationDate] = useState('');
  const [progress, setProgress] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [tfaLimit, setTfaLimit] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [step1Complete, setStep1Complete] = useState(false);

  const userEmail = 'usuario@clubedasias.com';
  const userPassword = 'SenhaSegura2024!@#';

  useEffect(() => {
    const storedName = localStorage.getItem('clube_ias_user_name') || 'Usuário';
    setUserName(storedName);

    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    setActivationDate(date.toLocaleDateString('pt-BR'));

    const savedProgress = localStorage.getItem('clube_ias_activation_progress');
    if (savedProgress) {
      setProgress(parseInt(savedProgress));
    }
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setTfaLimit(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const handleDownloadDiclok = () => {
    window.open('https://dicloak.com/pt/download', '_blank');
    setStep1Complete(true);
    updateProgress(1);
  };

  const handleGenerateTFA = () => {
    if (tfaLimit) return;

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`Seu código 2FA é: ${code}\n\nEste código é válido por 30 segundos.`);
    setTfaLimit(true);
    setCountdown(30);
    updateProgress(2);
  };

  const updateProgress = (step: number) => {
    setProgress(step);
    localStorage.setItem('clube_ias_activation_progress', step.toString());
  };

  const formatCountdown = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Bem-vindo, {userName}! 🎉
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Acesso ativo até {activationDate}
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Progresso da Ativação</h2>
            <span className="text-sm text-slate-400">{progress}/2 concluído</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-500"
              style={{ width: `${(progress / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="relative">
          {progress >= 1 && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Concluído</span>
              </div>
            </div>
          )}
          {progress === 0 && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-amber-500 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full">
                Próximo Passo
              </div>
            </div>
          )}
          <div className={`bg-slate-900/50 backdrop-blur-sm border rounded-2xl p-6 md:p-8 ${
            progress === 0 ? 'border-amber-500/50 shadow-lg shadow-amber-500/20' : 'border-slate-800'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Passo 1: Baixar o Diclok</h2>

            <p className="text-slate-300 mb-6 leading-relaxed">
O Dicloak é o programa que você vai usar no seu computador para acessar as ferramentas premium. É como um "navegador especial" que permite usar todas as funcionalidades com segurança.
            </p>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-blue-200 font-semibold mb-2">Como fazer:</p>
                  <p className="text-blue-200/80 text-sm leading-relaxed">
                    Clique no botão abaixo → Baixe e instale o programa → Volte para esta página
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-yellow-200 font-semibold mb-1">ATENÇÃO: Mantenha esta aba aberta!</p>
                  <p className="text-yellow-200/80 text-sm leading-relaxed">
                    O download abrirá em nova aba. Não feche esta página – você precisará voltar aqui para continuar a ativação.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleDownloadDiclok}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Baixar Diclok</span>
            </button>
          </div>
        </div>

        <div className="relative">
          {progress === 2 && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Concluído</span>
              </div>
            </div>
          )}
          <div className={`bg-slate-900/50 backdrop-blur-sm border rounded-2xl p-6 md:p-8 ${
            progress === 0 ? 'border-slate-800/50 opacity-60' : 'border-slate-800'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-6">Passo 2: Suas Credenciais</h2>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-blue-200 text-sm space-y-2">
                  <p className="font-semibold mb-2">Para fazer o login no Dicloak siga estas etapas:</p>
                  <ol className="list-decimal list-inside space-y-1 text-blue-200/80">
                    <li>Abra o programa Dicloak que você instalou</li>
                    <li>Copie o usuário abaixo</li>
                    <li>Cole no Diclok</li>
                    <li>Copie a senha abaixo</li>
                    <li>Gere o código 2FA no botão verde</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  🔑 Usuário
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={userEmail}
                    disabled
                    className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white"
                  />
                  <button
                    onClick={() => handleCopy(userEmail, 'usuario')}
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-white transition-colors flex items-center space-x-2"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">{copiedField === 'usuario' ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  🔐 Senha
                </label>
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={userPassword}
                      disabled
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 pr-12 text-white"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <button
                    onClick={() => handleCopy(userPassword, 'senha')}
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-white transition-colors flex items-center space-x-2"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">{copiedField === 'senha' ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mt-6">
                <h3 className="text-green-200 font-semibold mb-2">🟢 Código de Segurança (2FA)</h3>
                <p className="text-green-200/80 text-sm mb-4">
                  Código temporário de 6 números que muda a cada 30 segundos para máxima segurança.
                </p>

                {tfaLimit ? (
                  <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4">
                    <p className="text-red-200 font-semibold mb-2">⏱️ Limite de códigos atingido</p>
                    <p className="text-red-200/80 text-sm">
                      Próximo código disponível em: <span className="font-mono font-bold">{formatCountdown(countdown)}</span>
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={handleGenerateTFA}
                    disabled={progress < 1}
                    className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                      progress < 1
                        ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50'
                    }`}
                  >
                    <span>Gerar Código 2FA</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {progress === 2 && (
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 text-center animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Ativação Concluída! 🎉</h3>
            <p className="text-slate-300">
              Sua conta está totalmente configurada e protegida. Bem-vindo ao Clube das IAs!
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          <button
            onClick={onConcluir}
            className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 border border-slate-700"
          >
            <Home className="w-5 h-5" />
            <span>Início</span>
          </button>

          <button
            onClick={onConcluir}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30"
          >
            <CheckSquare className="w-5 h-5" />
            <span>Concluí Ativação</span>
          </button>

          <button
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="flex items-center justify-center space-x-2 bg-transparent hover:bg-slate-800/50 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 border-2 border-slate-700 hover:border-slate-600"
          >
            <HelpCircle className="w-5 h-5" />
            <span>Ajuda</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
