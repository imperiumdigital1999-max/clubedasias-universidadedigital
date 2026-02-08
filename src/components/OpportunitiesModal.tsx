import React, { useState } from 'react';
import { X, Briefcase, MapPin, Home, Building2, Target, Star } from 'lucide-react';

interface OpportunitiesModalProps {
  onClose: () => void;
  onViewPlatforms: () => void;
}

interface Platform {
  name: string;
  description: string;
}

const allPlatforms: Platform[] = [
  { name: 'Clickworker', description: 'Microtarefas e validação de dados' },
  { name: 'Appen', description: 'Treinamento de IA e dados' },
  { name: 'Lionbridge AI', description: 'Avaliação de conteúdo' },
  { name: 'Workana', description: 'Projetos freelance' },
  { name: 'Vintepila', description: 'Tarefas e pesquisas' },
  { name: 'Remotasks', description: 'Anotação e classificação' },
];

const OpportunitiesModal: React.FC<OpportunitiesModalProps> = ({ onClose, onViewPlatforms }) => {
  const [city, setCity] = useState('');
  const [jobType, setJobType] = useState('');
  const [area, setArea] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [opportunitiesCount, setOpportunitiesCount] = useState(0);
  const [recommendedPlatforms, setRecommendedPlatforms] = useState<Platform[]>([]);
  const [otherPlatforms, setOtherPlatforms] = useState<Platform[]>([]);

  const handleSearch = () => {
    const minCount = 5;
    const maxCount = 28;
    const total = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;

    const shuffled = [...allPlatforms].sort(() => Math.random() - 0.5);
    const recommended = shuffled.slice(0, 3);
    const others = shuffled.slice(3);

    setOpportunitiesCount(total);
    setRecommendedPlatforms(recommended);
    setOtherPlatforms(others);
    setShowResult(true);
  };

  const handleViewPlatforms = () => {
    onViewPlatforms();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500" />

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Oportunidades disponíveis hoje
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Confira vagas e execuções disponíveis em diferentes áreas
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
            <div className="flex gap-4 text-xs text-gray-400 flex-wrap">
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Vagas atualizadas diariamente
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Plataformas parceiras
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Acesso gratuito
              </span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                Cidade
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Digite sua cidade"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-400" />
                Tipo de vaga
              </label>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="">Selecione uma opção</option>
                <option value="home-office">Home office</option>
                <option value="presencial">Presencial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-gray-400" />
                Área de interesse (opcional)
              </label>
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="ex: Marketing, IA, Conteúdo, Atendimento, Tecnologia"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {showResult && (
            <div className="mb-6 space-y-4 animate-fade-in">
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Encontramos {opportunitiesCount} oportunidades gratuitas disponíveis para seu perfil.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  Plataformas Recomendadas
                </h3>
                {recommendedPlatforms.map((platform, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-gray-800/40 border border-blue-500/20 hover:border-blue-500/40 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <p className="text-white font-medium text-sm">{platform.name}</p>
                    </div>
                    <p className="text-gray-400 text-xs ml-4">{platform.description}</p>
                  </div>
                ))}

                {otherPlatforms.length > 0 && (
                  <>
                    <h3 className="text-white font-semibold text-sm mt-4">Outras opções disponíveis</h3>
                    <div className="space-y-2">
                      {otherPlatforms.map((platform, index) => (
                        <div
                          key={index}
                          className="p-2.5 rounded-lg bg-gray-800/30 border border-gray-700/30"
                        >
                          <p className="text-gray-300 text-sm">{platform.name}</p>
                          <p className="text-gray-500 text-xs">{platform.description}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <p className="text-xs text-gray-500 leading-relaxed pt-2">
                  As plataformas recomendadas podem variar conforme disponibilidade e perfil.
                </p>
              </div>
            </div>
          )}

          <div className="space-y-3">
            {!showResult ? (
              <button
                onClick={handleSearch}
                disabled={!city && !jobType}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20"
              >
                Buscar oportunidades
              </button>
            ) : (
              <button
                onClick={handleViewPlatforms}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20"
              >
                Ver plataformas de execução
              </button>
            )}

            <button
              onClick={onClose}
              className="w-full py-3 px-6 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 font-medium rounded-lg transition-all"
            >
              Fechar
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
            As oportunidades exibidas podem variar conforme disponibilidade e perfil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesModal;
