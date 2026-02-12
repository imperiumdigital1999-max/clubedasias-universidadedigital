import React from 'react';
import { ArrowLeft, Download, FileText, Lightbulb } from 'lucide-react';
import { automationCategories } from '../data/automations';
import { getAutomationsByCategory } from '../data/automationsList';

interface AutomationCategoryViewProps {
  categoryId: string;
  onBack: () => void;
}

export default function AutomationCategoryView({ categoryId, onBack }: AutomationCategoryViewProps) {
  const category = automationCategories.find(cat => cat.id === categoryId);
  const automations = getAutomationsByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-white">Categoria não encontrada</p>
      </div>
    );
  }

  const handleDownloadAll = () => {
    console.log('Baixar todas as automações da categoria:', categoryId);
  };

  const handleDownloadAutomation = (automationId: string) => {
    console.log('Baixar automação:', automationId);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para App de Automações</span>
        </button>

        <div className="mb-10">
          <div className="flex items-center space-x-4 mb-4">
            <div className={`w-16 h-16 ${category.iconBg} rounded-xl flex items-center justify-center text-4xl`}>
              {category.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">{category.name}</h1>
              <p className="text-slate-400">Automações N8N prontas para usar</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6">
              <div>
                <span className="text-2xl font-bold text-yellow-400">{automations.length}</span>
                <span className="text-slate-400 text-sm ml-2">Automações Disponíveis</span>
              </div>
            </div>
            <button
              onClick={handleDownloadAll}
              className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Baixar Todas</span>
            </button>
          </div>

          <p className="text-slate-300 mb-8 leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="space-y-3 mb-10">
          {automations.map((automation) => (
            <div
              key={automation.id}
              className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-5 flex items-center justify-between hover:border-slate-700/80 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1 group-hover:text-yellow-400 transition-colors">
                    {automation.name}
                  </h3>
                  <p className="text-slate-500 text-sm">{automation.fileType}</p>
                </div>
              </div>
              <button
                onClick={() => handleDownloadAutomation(automation.id)}
                className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors flex-shrink-0 ml-4"
              >
                <Download className="w-4 h-4" />
                <span className="font-medium">Baixar</span>
              </button>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 via-orange-900/10 to-slate-900/20 border-2 border-yellow-600/20 p-8">
          <div className="flex items-start space-x-3 mb-6">
            <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Como usar</h2>
          </div>

          <div className="space-y-4 text-slate-300">
            <div className="flex items-start space-x-3">
              <div className="w-7 h-7 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 font-bold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium mb-1">Baixe o arquivo .txt da automação desejada</p>
                <p className="text-slate-400 text-sm">Clique no botão "Baixar" ao lado de qualquer automação</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-7 h-7 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 font-bold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium mb-1">Abra o arquivo .txt e copie todo o conteúdo</p>
                <p className="text-slate-400 text-sm">Abra com qualquer editor de texto e selecione todo o conteúdo</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-7 h-7 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 font-bold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium mb-1">No N8N, vá em Settings → Import from JSON</p>
                <p className="text-slate-400 text-sm">Cole o conteúdo copiado na área de importação</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-7 h-7 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 font-bold text-sm">4</span>
              </div>
              <div>
                <p className="font-medium mb-1">Cole o conteúdo e clique em Import</p>
                <p className="text-slate-400 text-sm">O workflow será importado automaticamente</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-7 h-7 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 font-bold text-sm">5</span>
              </div>
              <div>
                <p className="font-medium mb-1">Configure suas credenciais, personalize conforme necessário e ative o workflow</p>
                <p className="text-slate-400 text-sm">Adicione suas chaves de API e ajuste os parâmetros conforme sua necessidade</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
