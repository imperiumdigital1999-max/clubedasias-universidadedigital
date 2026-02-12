import React from 'react';
import { Download, FileUp, Settings, AlertCircle, Sparkles } from 'lucide-react';
import { automationCategories, getTotalAutomations, getTotalCategories } from '../data/automations';

export default function AppAutomationsView() {
  const userName = "Gabriel Pereira";
  const totalAutomations = getTotalAutomations();
  const totalCategories = getTotalCategories();

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 via-orange-900/10 to-slate-900/20 border-2 border-yellow-600/30 p-8 mb-10">
          <div className="absolute top-4 left-8">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center border border-yellow-500/30">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
          </div>

          <div className="pl-20">
            <h1 className="text-2xl font-bold text-white mb-2">
              Bem-vindo, {userName}!
            </h1>
            <p className="text-slate-300 text-sm mb-6 max-w-3xl">
              Como membro Ouro Master, você tem acesso exclusivo ao nosso pack completo de automações N8N. Economize horas de trabalho com workflows profissionais prontos para usar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4">
                <div className="text-yellow-400 text-3xl font-bold mb-1">{totalAutomations}+</div>
                <div className="text-slate-400 text-sm">Automações Disponíveis</div>
              </div>

              <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4">
                <div className="text-yellow-400 text-3xl font-bold mb-1">{totalCategories}</div>
                <div className="text-slate-400 text-sm">Categorias</div>
              </div>

              <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4">
                <div className="text-yellow-400 text-3xl font-bold mb-1">∞</div>
                <div className="text-slate-400 text-sm">Atualizações Grátis</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Categorias de Automações N8N</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {automationCategories.map((category) => (
              <div
                key={category.id}
                className="group relative bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                    {category.automationCount} automações
                  </span>
                </div>

                <div className={`w-14 h-14 ${category.iconBg} rounded-xl flex items-center justify-center mb-4 text-3xl`}>
                  {category.icon}
                </div>

                <h3 className={`text-lg font-bold ${category.iconColor} mb-2 group-hover:text-white transition-colors`}>
                  {category.name}
                </h3>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>

                <button className="w-full bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50 text-slate-300 hover:text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 group-hover:border-slate-600/70">
                  <Download className="w-4 h-4" />
                  <span>Ver Automações</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 border-2 border-yellow-600/20 p-8">
          <div className="flex items-start space-x-3 mb-6">
            <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Como Usar as Automações</h2>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30">
                <span className="text-yellow-400 font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Faça o Download</h3>
                <p className="text-slate-400 text-sm">
                  Clique na categoria desejada e baixe os arquivos das automações
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30">
                <span className="text-yellow-400 font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Importe na N8N</h3>
                <p className="text-slate-400 text-sm">
                  Vá ao N8N e importe o arquivo através de Settings → Import from File
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30">
                <span className="text-yellow-400 font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Configure e Ative</h3>
                <p className="text-slate-400 text-sm">
                  Adicione suas credenciais, personalize conforme necessário e ative o workflow
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-yellow-900/30 via-orange-900/20 to-yellow-900/30 border border-yellow-600/30 p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-yellow-400 font-semibold text-base mb-2">Dica Master</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Sempre faça backup das automações em ambiente de desenvolvimento antes de usar em produção. Faça backup das suas configurações atuais da N8N antes de importar novas workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
