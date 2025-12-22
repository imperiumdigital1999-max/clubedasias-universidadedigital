import React from 'react';
import { ArrowLeft, Play, Download } from 'lucide-react';

interface AulasViralEditViewProps {
  onBack?: () => void;
}

interface Aula {
  id: string;
  titulo: string;
  descricao: string;
  videoUrl: string;
  ebookUrl: string;
  thumbnail: string;
}

export default function AulasViralEditView({ onBack }: AulasViralEditViewProps) {
  const aulas: Aula[] = [
    {
      id: '1',
      titulo: 'Introdução ao Viral Edit + VO3 AI',
      descricao: 'Aprenda os fundamentos da plataforma e como começar a criar vídeos profissionais com IA',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      ebookUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop'
    },
    {
      id: '2',
      titulo: 'Técnicas Avançadas de Edição',
      descricao: 'Descubra técnicas avançadas para criar vídeos virais que engajam sua audiência',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      ebookUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&fit=crop'
    },
    {
      id: '3',
      titulo: 'Otimização e Publicação',
      descricao: 'Aprenda a otimizar seus vídeos para diferentes plataformas e maximizar o alcance',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      ebookUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=450&fit=crop'
    }
  ];

  const handleDownloadEbook = (aulaId: string) => {
    console.log('Baixar ebook da aula:', aulaId);
  };

  return (
    <div className="min-h-screen bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Voltar</span>
          </button>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Aulas - Acesso Guiado à IA
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
            Aprenda passo a passo como usar o Viral Edit + VO3 AI para criar vídeos profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {aulas.map((aula, index) => (
            <div
              key={aula.id}
              className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] transform"
            >
              <div className="relative group">
                <img
                  src={aula.thumbnail}
                  alt={aula.titulo}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                    Aula {index + 1}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {aula.titulo}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  {aula.descricao}
                </p>

                <button
                  onClick={() => handleDownloadEbook(aula.id)}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>Baixar Ebook</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/30 p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Materiais Complementares
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Além das vídeo aulas, você terá acesso a ebooks exclusivos com conteúdo adicional e exercícios práticos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Ebooks Práticos</h3>
                <p className="text-slate-400 text-sm">Guias completos em PDF para acompanhar as aulas</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Vídeos HD</h3>
                <p className="text-slate-400 text-sm">Aulas em alta definição com exemplos práticos</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <ArrowLeft className="w-6 h-6 text-purple-400 rotate-180" />
                </div>
                <h3 className="text-white font-semibold mb-2">Suporte Total</h3>
                <p className="text-slate-400 text-sm">Tire dúvidas com nossa equipe especializada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
