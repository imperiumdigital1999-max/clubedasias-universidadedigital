import React, { useState, useEffect } from 'react';
import { Copy, Eye, EyeOff, Download, CheckSquare, HelpCircle } from 'lucide-react';

interface AtivacaoVideoViewProps {
  onConcluir: () => void;
}

export default function AtivacaoVideoView({ onConcluir }: AtivacaoVideoViewProps) {
  const [userName, setUserName] = useState('Usuário');
  const [showPassword, setShowPassword] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [tfaCode, setTfaCode] = useState<string | null>(null);
  const [generatingCode, setGeneratingCode] = useState(false);

  const userEmail = 'usuario@clubedasias.com';
  const userPassword = 'SenhaSegura2024!@#';

  useEffect(() => {
    const storedName = localStorage.getItem('clube_ias_user_name') || 'Usuário';
    setUserName(storedName);
  }, []);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const generateTFACode = () => {
    setGeneratingCode(true);
    setTimeout(() => {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setTfaCode(code);
      setGeneratingCode(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-y-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Tutorial em Vídeo
          </h1>
          <p className="text-slate-300 text-lg">
            Assista o passo a passo e use as credenciais abaixo
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-8">
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-slate-800/50 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Tutorial de Ativação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Baixar Diclok */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all duration-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                <Download className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold">Baixar Diclok</h3>
            </div>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              Baixe o aplicativo Diclok para acessar todas as ferramentas de IA com as credenciais fornecidas.
            </p>
            <button
              onClick={() => window.open('https://diclok.com/download', '_blank')}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-bold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20"
            >
              Baixar Agora
            </button>
          </div>

          {/* Credenciais */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4">Credenciais de Acesso</h3>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Usuário
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3">
                  <span className="text-white font-mono text-sm">{userEmail}</span>
                </div>
                <button
                  onClick={() => handleCopy(userEmail, 'email')}
                  className="bg-slate-700 hover:bg-slate-600 p-3 rounded-xl transition-colors duration-200"
                >
                  <Copy className={`w-5 h-5 ${copiedField === 'email' ? 'text-green-400' : 'text-slate-300'}`} />
                </button>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Senha
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 flex items-center justify-between">
                  <span className="text-white font-mono text-sm">
                    {showPassword ? userPassword : '••••••••••••••'}
                  </span>
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <button
                  onClick={() => handleCopy(userPassword, 'password')}
                  className="bg-slate-700 hover:bg-slate-600 p-3 rounded-xl transition-colors duration-200"
                >
                  <Copy className={`w-5 h-5 ${copiedField === 'password' ? 'text-green-400' : 'text-slate-300'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Código 2FA */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4">Código 2FA</h3>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              Clique no botão abaixo para gerar um código de autenticação de dois fatores válido por 30 segundos.
            </p>

            {tfaCode ? (
              <div className="mb-4">
                <div className="bg-slate-900/50 border border-green-500/50 rounded-xl px-4 py-4 text-center">
                  <span className="text-3xl font-bold text-green-400 font-mono tracking-wider">
                    {tfaCode}
                  </span>
                </div>
                <p className="text-xs text-slate-400 text-center mt-2">
                  Código válido por 30 segundos
                </p>
              </div>
            ) : null}

            <button
              onClick={generateTFACode}
              disabled={generatingCode}
              className={`w-full ${
                generatingCode
                  ? 'bg-slate-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/20'
              } text-white font-bold py-3 px-4 rounded-xl transition-all duration-200`}
            >
              {generatingCode ? 'Gerando...' : 'Gerar Código'}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <button
            onClick={onConcluir}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30"
          >
            <CheckSquare className="w-5 h-5" />
            <span>Concluí Ativação</span>
          </button>

          <button
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent hover:bg-slate-800/50 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 border-2 border-slate-700 hover:border-slate-600"
          >
            <HelpCircle className="w-5 h-5" />
            <span>Precisa de Ajuda?</span>
          </button>
        </div>
      </div>
    </div>
  );
}
