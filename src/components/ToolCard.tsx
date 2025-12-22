import React from 'react';
import { ExternalLink } from 'lucide-react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
  onToolClick?: (tool: AITool) => void;
}

export default function ToolCard({ tool, onToolClick }: ToolCardProps) {
  const handleCardClick = () => {
    if (onToolClick) {
      onToolClick(tool);
    }
  };

  const handleDirectAccess = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={tool.image}
          alt={tool.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        
        {tool.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            ⭐ Destaque
          </div>
        )}
        
        {tool.new && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-2 py-1 rounded-full text-xs font-medium">
            🆕 Novo
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {tool.name}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {tool.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div></div>
          <button
            onClick={handleCardClick}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="text-sm font-medium">Acessar</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}