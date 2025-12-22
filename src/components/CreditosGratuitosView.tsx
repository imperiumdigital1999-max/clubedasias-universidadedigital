import React from 'react';
import { ArrowLeft, Gift, Zap, Play, CheckCircle } from 'lucide-react';

interface CreditosGratuitosViewProps {
  onBack?: () => void;
}

interface VideoAula {
  id: string;
  titulo: string;
  descricao: string;
  duracao: string;
  thumbnail: string;
  videoUrl: string;
}

export default function CreditosGratuitosView({ onBack }: CreditosGratuitosViewProps) {
  const videoAulas: VideoAula[] = [
    {
      id: '1',
      titulo: 'GOOGLE VEO 3 GRÁTIS: COMO CRIAR VÍDEOS ABSURDAMENTE REALISTAS SEM PAGAR NADA!',
      descricao: 'Passo a passo completo para criar sua conta e receber créditos iniciais gratuitos',
      duracao: '12:34',
      thumbnail: 'https://img.youtube.com/vi/tjXdqoWamtc/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=tjXdqoWamtc&t=156s'
    },
    {
      id: '2',
      titulo: 'GOOGLE VEO 3 GRÁTIS e ILIMITADO',
      descricao: 'Dicas e estratégias para usar seus créditos de forma eficiente e criar mais vídeos',
      duracao: '04:20',
      thumbnail: 'https://img.youtube.com/vi/QaR-PQID2nE/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=QaR-PQID2nE'
    },
    {
      id: '3',
      titulo: 'Crie Vídeos LONGOS com VEO3 e SORA 2 GRÁTIS',
      descricao: 'Aprenda como criar vídeos ilimitados com SORA 2 e o Google VEO 3.1, de graça, sem pagar nada! ',
      duracao: '13:58',
      thumbnail: 'https://img.youtube.com/vi/cEPzrM2bGzA/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=cEPzrM2bGzA'
    }
  ];

  const passos = [
    {
      numero: 1,
      titulo: 'Acesse o Google Labs',
      descricao: 'Entre em: labs.google e procure pela ferramenta Flow.'
    },
    {
      numero: 2,
      titulo: 'Clique em “Create with Flow”',
      descricao: 'Ao entrar no Flow, clique no botão Create with Flow para iniciar.'
    },
    {
      numero: 3,
      titulo: 'Faça login com sua conta Google (Gmail)',
      descricao: 'Use sua conta Google normalmente (não precisa cadastrar cartão).'
    },
    {
      numero: 4,
      titulo: 'Receba seus créditos e Comece a criar',
      descricao: 'Após o login, você já terá créditos gratuitos para gerar vídeos com o Veo 3 dentro do Flow. Use seus créditos para gerar vídeos profissionais com inteligência artificial'
    }
  ];

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
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <Gift className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Créditos Gratuitos para IA
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
            Aprenda como obter e usar créditos gratuitos no VEO3 para criar vídeos incríveis com IA
          </p>
        </div>

        <div className="mb-16 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl border border-yellow-500/30 p-8 md:p-12">
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Como Funciona o Sistema de Créditos?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                O Clube das IAs em parceria com o VEO3 conseguiu garantir créditos gratuitos para novos usuários testarem a plataforma. Cada crédito pode ser usado para gerar vídeos com IA, aplicar efeitos especiais, ou acessar recursos premium. Siga os passos abaixo para começar:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {passos.map((passo) => (
                  <div
                    key={passo.numero}
                    className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {passo.numero}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">
                          {passo.titulo}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {passo.descricao}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Vídeo Aulas - Passo a Passo
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videoAulas.map((video, index) => (
              <div
                key={video.id}
                className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:scale-[1.02] transform"
              >
                <div className="relative group cursor-pointer">
                  <img
                    src={video.thumbnail}
                    alt={video.titulo}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-600 text-white px-4 py-2 rounded-full font-bold text-sm">
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
                  <h3 className="text-xl font-bold text-white mb-3">
                    {video.titulo}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    {video.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/30 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Benefícios dos Créditos Gratuitos
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Com os créditos gratuitos você pode testar todas as funcionalidades da plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Sem Compromisso</h3>
              <p className="text-slate-400 text-sm">Teste gratuitamente sem precisar de cartão de crédito</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Acesso Completo</h3>
              <p className="text-slate-400 text-sm">Use todos os recursos premium durante o período de teste</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Bônus Inicial</h3>
              <p className="text-slate-400 text-sm">Receba créditos extras ao completar seu cadastro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
