import React from 'react';
import { Crown } from 'lucide-react';
import { aiTools } from '../data/tools';
import ToolCard from './ToolCard';
import { AITool } from '../types';

interface IAsProViewProps {
  onToolSelect: (tool: AITool) => void;
}

export default function IAsProView({ onToolSelect }: IAsProViewProps) {
  // Filtrar ferramentas da categoria "pro"
  const proTools = aiTools.filter(tool => tool.category === 'pro');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Crown className="w-8 h-8 text-yellow-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">IAs Pro</h1>
          <p className="text-slate-400 mt-1">Ferramentas premium de inteligência artificial</p>
        </div>
      </div>

      {proTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onToolClick={onToolSelect} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Crown className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <div className="text-slate-500 text-lg mb-4">
            Nenhuma IA Pro encontrada
          </div>
          <p className="text-slate-600">
            IAs Pro serão exibidas aqui quando estiverem disponíveis
          </p>
        </div>
      )}
    </div>
  );
}