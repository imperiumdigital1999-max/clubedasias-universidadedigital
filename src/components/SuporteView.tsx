import React from 'react';
import { MessageCircle, Mail, Clock, HelpCircle } from 'lucide-react';

export default function SuporteView() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            🟣 Suporte
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Estamos aqui para ajudar você. Entre em contato através dos canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="https://api.whatsapp.com/send/?phone=5571981634836"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-green-500/50 transition-all hover:shadow-2xl hover:shadow-green-500/10 group"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-white font-bold text-2xl mb-3 text-center">
              WhatsApp
            </h3>
            <p className="text-slate-400 text-center mb-4">
              Atendimento rápido e direto pelo WhatsApp
            </p>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center">
              <p className="text-white font-mono text-lg">
                +55 71 981634836
              </p>
            </div>
          </a>

          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-white font-bold text-2xl mb-3 text-center">
              E-mail
            </h3>
            <p className="text-slate-400 text-center mb-4">
              Envie suas dúvidas por e-mail
            </p>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center">
              <a
                href="mailto:grupopestana.suporte01@gmail.com"
                className="text-white font-mono text-lg hover:text-cyan-400 transition-colors"
              >
                grupopestana.suporte01@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Clock className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-white font-bold text-2xl mb-4 text-center">
            Horário de Atendimento
          </h3>
          <div className="bg-slate-800/50 rounded-xl p-6 text-center">
            <p className="text-white text-lg mb-2">
              Segunda a Sexta: 9h às 18h
            </p>
            <p className="text-slate-400 text-sm">
              Sábados, domingos e feriados: Sem atendimento
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <HelpCircle className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Dicas para um atendimento mais rápido
              </h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Informe seu nome completo e e-mail cadastrado</li>
                <li>• Descreva sua dúvida ou problema de forma clara</li>
                <li>• Se possível, envie prints ou vídeos explicativos</li>
                <li>• Aguarde nosso retorno no prazo de até 24 horas úteis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
