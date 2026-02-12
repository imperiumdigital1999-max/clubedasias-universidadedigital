import React, { useState, useEffect } from 'react';
import { Search, Copy, Eye, X, ChevronLeft, ChevronRight, Sparkles, Settings } from 'lucide-react';
import { veo3Prompts, veo3Categories, VEO3Prompt } from '../data/veo3Prompts';

const ITEMS_PER_PAGE = 12;

interface PromptCustomization {
  videoType: string;
  characters: string;
  mainCharacter: string;
  age: string;
  appearance: string;
  clothing: string;
  action: string;
  dialogue: string;
  scenario: string;
  lighting: string;
  style: string;
  duration: string;
  format: string;
}

export default function AppPromptsView() {
  const [selectedCategory, setSelectedCategory] = useState('Ver Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<VEO3Prompt | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copiedGenerated, setCopiedGenerated] = useState(false);

  const [customization, setCustomization] = useState<PromptCustomization>({
    videoType: 'Comercial',
    characters: '1',
    mainCharacter: '',
    age: '',
    appearance: '',
    clothing: '',
    action: '',
    dialogue: '',
    scenario: '',
    lighting: 'Natural',
    style: 'Realista',
    duration: '10',
    format: '16:9'
  });

  const filteredPrompts = veo3Prompts.filter(prompt => {
    const matchesCategory = selectedCategory === 'Ver Todos' || prompt.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredPrompts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedPrompts = filteredPrompts.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCopyPrompt = async (prompt: string, promptId: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedId(promptId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar prompt:', err);
    }
  };

  const handleGeneratePrompt = () => {
    const characterDesc = customization.mainCharacter
      ? `${customization.mainCharacter}${customization.age ? `, ${customization.age} anos` : ''}${customization.appearance ? `, ${customization.appearance}` : ''}`
      : 'personagem principal';

    const prompt = {
      scene: `Cena em 4K ${customization.style.toLowerCase()}. ${customization.scenario || 'Local definido'}. ${customization.lighting} lighting. ${customization.action || 'Ação dinâmica'}.`,
      characters: `${customization.characters} personagem(s). ${characterDesc}${customization.clothing ? `, vestindo ${customization.clothing}` : ''}.`,
      dialogue: customization.dialogue || 'Diálogo a ser definido',
      technical: `Veo 3, 4K, ${customization.format}, ${customization.duration}s, ${customization.style.toLowerCase()} style`
    };

    const promptString = JSON.stringify(prompt, null, 2);
    setGeneratedPrompt(promptString);
  };

  const handleCopyGeneratedPrompt = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopiedGenerated(true);
      setTimeout(() => setCopiedGenerated(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar prompt:', err);
    }
  };

  const updateCustomization = (field: keyof PromptCustomization, value: string) => {
    setCustomization(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            App de Prompts VEO 3
          </h1>
          <p className="text-slate-400 text-lg">
            Biblioteca completa de prompts para geração de vídeos com exemplos práticos
          </p>
        </div>

        <div className="mb-8">
          <button
            onClick={() => setShowCustomizer(!showCustomizer)}
            className="w-full max-w-3xl mx-auto flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-6 rounded-xl transition-all duration-200 font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            <Sparkles className="w-5 h-5" />
            <span>{showCustomizer ? 'Ocultar Personalizador' : 'Criar Prompt Personalizado'}</span>
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {showCustomizer && (
          <div className="mb-12 bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 max-w-7xl mx-auto shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Settings className="w-6 h-6 text-purple-400" />
              Personalizador de Prompts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Tipo de Vídeo
                </label>
                <select
                  value={customization.videoType}
                  onChange={(e) => updateCustomization('videoType', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                >
                  {veo3Categories.filter(cat => cat !== 'Ver Todos').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Quantidade de Personagens
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={customization.characters}
                  onChange={(e) => updateCustomization('characters', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Nome do Personagem Principal
                </label>
                <input
                  type="text"
                  value={customization.mainCharacter}
                  onChange={(e) => updateCustomization('mainCharacter', e.target.value)}
                  placeholder="Ex: João Silva"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Idade
                </label>
                <input
                  type="text"
                  value={customization.age}
                  onChange={(e) => updateCustomization('age', e.target.value)}
                  placeholder="Ex: 30"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Aparência Física
                </label>
                <input
                  type="text"
                  value={customization.appearance}
                  onChange={(e) => updateCustomization('appearance', e.target.value)}
                  placeholder="Ex: cabelos castanhos, olhos verdes, barba"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Roupa / Vestimenta
                </label>
                <input
                  type="text"
                  value={customization.clothing}
                  onChange={(e) => updateCustomization('clothing', e.target.value)}
                  placeholder="Ex: camisa social branca e calça jeans"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Ação / O que está fazendo
                </label>
                <input
                  type="text"
                  value={customization.action}
                  onChange={(e) => updateCustomization('action', e.target.value)}
                  placeholder="Ex: apresentando produto para câmera com entusiasmo"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Fala / Diálogo
                </label>
                <textarea
                  value={customization.dialogue}
                  onChange={(e) => updateCustomization('dialogue', e.target.value)}
                  placeholder="Ex: Olha que incrível! Este produto vai mudar sua vida"
                  rows={3}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Cenário / Local
                </label>
                <input
                  type="text"
                  value={customization.scenario}
                  onChange={(e) => updateCustomization('scenario', e.target.value)}
                  placeholder="Ex: loja moderna com prateleiras iluminadas"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Iluminação
                </label>
                <select
                  value={customization.lighting}
                  onChange={(e) => updateCustomization('lighting', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                >
                  <option value="Natural">Natural</option>
                  <option value="Soft">Suave</option>
                  <option value="Dramatic">Dramática</option>
                  <option value="Golden hour">Golden Hour</option>
                  <option value="Studio">Estúdio</option>
                  <option value="Neon">Neon</option>
                  <option value="Cinematic">Cinemática</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Estilo do Vídeo
                </label>
                <select
                  value={customization.style}
                  onChange={(e) => updateCustomization('style', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                >
                  <option value="Realista">Realista</option>
                  <option value="Cinematic">Cinemático</option>
                  <option value="Documentary">Documentário</option>
                  <option value="Commercial">Comercial</option>
                  <option value="Vlog">Vlog</option>
                  <option value="Professional">Profissional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Duração (segundos)
                </label>
                <input
                  type="number"
                  min="5"
                  max="60"
                  value={customization.duration}
                  onChange={(e) => updateCustomization('duration', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Formato
                </label>
                <select
                  value={customization.format}
                  onChange={(e) => updateCustomization('format', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                >
                  <option value="16:9">16:9 (Horizontal)</option>
                  <option value="9:16">9:16 (Vertical)</option>
                  <option value="1:1">1:1 (Quadrado)</option>
                  <option value="4:3">4:3 (Clássico)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <button
                onClick={handleGeneratePrompt}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-6 rounded-lg transition-all duration-200 font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
              >
                <Sparkles className="w-5 h-5" />
                Gerar Prompt Personalizado
              </button>
            </div>

            {generatedPrompt && (
              <div className="space-y-4">
                <div className="bg-slate-900/70 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Prompt Final Gerado
                  </h3>
                  <pre className="text-slate-300 text-sm font-mono leading-relaxed whitespace-pre-wrap break-words bg-slate-950/50 p-4 rounded border border-slate-700 max-h-96 overflow-y-auto">
                    {generatedPrompt}
                  </pre>
                </div>

                <button
                  onClick={handleCopyGeneratedPrompt}
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg transition-all duration-200 font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                >
                  <Copy className="w-5 h-5" />
                  <span>{copiedGenerated ? 'Copiado!' : 'Copiar Prompt Final'}</span>
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {veo3Categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar prompts por palavra-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
          </div>
        </div>

        <div className="mb-6 text-center">
          <p className="text-slate-500 text-sm">
            Mostrando {startIndex + 1}-{Math.min(endIndex, filteredPrompts.length)} de {filteredPrompts.length} prompts
            {filteredPrompts.length !== veo3Prompts.length && ` (filtrado de ${veo3Prompts.length})`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="relative">
                {prompt.video_exemplo_url ? (
                  <video
                    src={prompt.video_exemplo_url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-56 object-cover"
                  />
                ) : prompt.gif_url ? (
                  <img
                    src={prompt.gif_url}
                    alt={prompt.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <img
                    src={prompt.thumbnail_url}
                    alt={prompt.title}
                    className="w-full h-56 object-cover"
                  />
                )}
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {prompt.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                  {prompt.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {prompt.prompt.substring(0, 100)}...
                </p>

                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedPrompt(prompt)}
                    className="w-full flex items-center justify-center space-x-2 text-purple-400 hover:text-purple-300 py-2 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">Ver prompt completo</span>
                  </button>

                  <button
                    onClick={() => handleCopyPrompt(prompt.prompt, prompt.id)}
                    className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-all duration-200 font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                  >
                    <Copy className="w-4 h-4" />
                    <span>
                      {copiedId === prompt.id ? 'Copiado!' : 'Copiar Prompt'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPrompts.length > 0 && totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 1
                  ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-700'
                  : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Anterior</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="text-slate-400 text-sm">
                Página
              </span>
              <span className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold min-w-[3rem] text-center">
                {currentPage}
              </span>
              <span className="text-slate-400 text-sm">
                de {totalPages}
              </span>
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentPage === totalPages
                  ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-700'
                  : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50'
              }`}
            >
              <span>Próxima</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {filteredPrompts.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
              <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Nenhum prompt encontrado
              </h3>
              <p className="text-slate-400">
                Tente ajustar sua pesquisa ou selecione outra categoria
              </p>
            </div>
          </div>
        )}

        {selectedPrompt && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPrompt(null)}
          >
            <div
              className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {selectedPrompt.title}
                  </h2>
                  <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedPrompt.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPrompt(null)}
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                <div className="mb-6">
                  {selectedPrompt.video_exemplo_url ? (
                    <video
                      src={selectedPrompt.video_exemplo_url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full rounded-lg"
                    />
                  ) : selectedPrompt.gif_url ? (
                    <img
                      src={selectedPrompt.gif_url}
                      alt={selectedPrompt.title}
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <img
                      src={selectedPrompt.thumbnail_url}
                      alt={selectedPrompt.title}
                      className="w-full rounded-lg"
                    />
                  )}
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <span>Prompt Completo (JSON):</span>
                  </h3>
                  <pre className="text-slate-300 text-sm font-mono leading-relaxed whitespace-pre-wrap break-words bg-slate-900/50 p-4 rounded border border-slate-700 max-h-96 overflow-y-auto">
                    {selectedPrompt.prompt}
                  </pre>
                </div>
              </div>

              <div className="p-6 border-t border-slate-700 bg-slate-900/50">
                <button
                  onClick={() => handleCopyPrompt(selectedPrompt.prompt, selectedPrompt.id)}
                  className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-all duration-200 font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                >
                  <Copy className="w-5 h-5" />
                  <span>
                    {copiedId === selectedPrompt.id ? 'Copiado!' : 'Copiar Prompt'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
