import React from 'react';
import { ArrowLeft, Play, Download, FileText, Newspaper, ExternalLink } from 'lucide-react';

interface AulasViralEditViewProps {
  onBack?: () => void;
}

interface VideoAula {
  id: string;
  titulo: string;
  descricao: string;
  videoUrl: string;
  thumbnail: string;
  duracao: string;
}

interface Ebook {
  id: string;
  titulo: string;
  descricao: string;
  ebookUrl: string;
  thumbnail: string;
  paginas: string;
}

export default function AulasViralEditView({ onBack }: AulasViralEditViewProps) {
  const videoAulas: VideoAula[] = [
    {
      id: 'v1',
      titulo: 'Como usar o VEO3 GRÁTIS e criar vídeos SEM LIMITE!',
      descricao: 'Aprenda os fundamentos da plataforma e como começar a criar vídeos profissionais com IA',
      videoUrl: 'https://www.youtube.com/watch?v=Mbhdi9VdsiU',
      thumbnail: 'https://img.youtube.com/vi/Mbhdi9VdsiU/maxresdefault.jpg',
      duracao: '15:30'
    },
    {
      id: 'v2',
      titulo: 'Técnicas Avançadas de Edição',
      descricao: 'Descubra técnicas avançadas para criar vídeos virais que engajam sua audiência',
      videoUrl: 'https://www.youtube.com/watch?v=exemplo2',
      thumbnail: 'https://img.youtube.com/vi/ABC123XYZ/maxresdefault.jpg',
      duracao: '22:15'
    },
    {
      id: 'v3',
      titulo: 'Otimização e Publicação',
      descricao: 'Aprenda a otimizar seus vídeos para diferentes plataformas e maximizar o alcance',
      videoUrl: 'https://www.youtube.com/watch?v=exemplo3',
      thumbnail: 'https://img.youtube.com/vi/ABC123XYZ/maxresdefault.jpg',
      duracao: '18:45'
    }
  ];

  const ebooks: Ebook[] = [
    {
      id: 'e1',
      titulo: 'Guia Completo de Prompts para VEO3',
      descricao: 'Material completo com os melhores prompts para criar vídeos impressionantes',
      ebookUrl: 'https://drive.google.com/file/d/138YpAsEjzISoVHemiHn8TwippKHjdMdy/view?usp=sharing',
      thumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=450&fit=crop',
      paginas: '45 páginas'
    },
    {
      id: 'e2',
      titulo: 'Técnicas Avançadas de Edição com Veo 3',
      descricao: 'Aprenda as estratégias usadas por criadores profissionais para viralizar conteúdo',
      ebookUrl: 'https://drive.google.com/file/d/1xgZMOrLNdQ8teXx-VWQbUqVMReZlpCGP/view?usp=sharing',
      thumbnail: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&h=450&fit=crop',
      paginas: '32 páginas'
    },
    {
      id: 'e3',
      titulo: 'Veo 3 Expert Mode',
      descricao: 'Direção, edição invisível e controle total de vídeos com IA',
      ebookUrl: 'https://drive.google.com/file/d/1ZzkgH55Hy4Ls_VCvE-1zZYQTMLk-sGKz/view?usp=sharing',
      thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop',
      paginas: '12 páginas'
    }
  ];

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEbookClick = (ebookUrl: string) => {
    window.open(ebookUrl, '_blank', 'noopener,noreferrer');
  };

  const handleBlogClick = () => {
    window.open('https://nespol.com.br/blog/veo-3-gratis-para-todos-liberado-veja-como-acessar/', '_blank', 'noopener,noreferrer');
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

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
            <Play className="w-7 h-7 mr-3 text-red-500" />
            Vídeo Aulas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoAulas.map((video, index) => (
              <div
                key={video.id}
                onClick={() => handleVideoClick(video.videoUrl)}
                className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02] transform cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.titulo}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                      Aula {index + 1}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {video.duracao}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {video.titulo}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {video.descricao}
                  </p>
                  <div className="flex items-center text-red-400 font-semibold text-sm group-hover:text-red-300 transition-colors">
                    <Play className="w-4 h-4 mr-2" />
                    <span>Assistir Agora</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
            <FileText className="w-7 h-7 mr-3 text-green-500" />
            Material em PDF
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ebooks.map((ebook, index) => (
              <div
                key={ebook.id}
                className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02] transform"
              >
                <div className="relative">
                  <img
                    src={ebook.thumbnail}
                    alt={ebook.titulo}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                      Ebook {index + 1}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 text-white">
                      <FileText className="w-5 h-5" />
                      <span className="text-sm font-semibold">{ebook.paginas}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {ebook.titulo}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {ebook.descricao}
                  </p>
                  <button
                    onClick={() => handleEbookClick(ebook.ebookUrl)}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    <span>Baixar Ebook</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div
            onClick={handleBlogClick}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80 border-2 border-slate-600 hover:border-orange-500/60 p-8 md:p-10 cursor-pointer transition-all duration-300 hover:scale-[1.02] transform group shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />

            <div className="relative z-10">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Newspaper className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-2">
                    <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Notícia em Destaque
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                    Fique por dentro: O maior portal de notícias sobre IA
                  </h3>

                  <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">
                    VEO 3 Grátis para todos liberado! Veja como acessar
                  </p>

                  <div className="flex items-center space-x-2 text-orange-400 font-semibold text-base group-hover:space-x-3 transition-all duration-300">
                    <span>Ler Matéria Completa</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/30 p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Materiais Complementares
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Acesso completo a vídeo aulas e ebooks exclusivos para dominar a criação de vídeos com IA
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Vídeos HD</h3>
                <p className="text-slate-400 text-sm">Aulas em alta definição com exemplos práticos</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Ebooks Práticos</h3>
                <p className="text-slate-400 text-sm">Guias completos em PDF para acompanhar as aulas</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Newspaper className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Notícias em Tempo Real</h3>
                <p className="text-slate-400 text-sm">Fique atualizado com as últimas novidades sobre IA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
