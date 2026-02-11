import React from 'react';
import { Image, FileText, Type, Palette, Layout, Gift, ExternalLink } from 'lucide-react';

interface ResourceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  items: {
    name: string;
    description: string;
    url: string;
  }[];
}

export default function BancoDigitalView() {
  const categories: ResourceCategory[] = [
    {
      id: 'banco-imagens',
      name: 'Banco de Imagens',
      description: 'Imagens de alta qualidade para seus projetos',
      icon: Image,
      gradient: 'from-blue-500 to-purple-500',
      items: [
        {
          name: 'Pexels',
          description: 'Fotos e vídeos gratuitos em alta qualidade',
          url: 'https://www.pexels.com/pt-br/'
        },
        {
          name: 'Unsplash',
          description: 'Biblioteca com milhões de fotos gratuitas',
          url: 'https://unsplash.com/'
        },
        {
          name: 'Pixabay',
          description: 'Imagens, vídeos e músicas livres de direitos',
          url: 'https://pixabay.com/pt/'
        }
      ]
    },
    {
      id: 'paginas-vendas',
      name: 'Páginas de Vendas',
      description: 'Templates de páginas de vendas profissionais',
      icon: FileText,
      gradient: 'from-green-500 to-emerald-500',
      items: [
        {
          name: 'Página de Vendas Simples',
          description: 'Template limpo e direto ao ponto',
          url: '#'
        },
        {
          name: 'Página de Lançamento',
          description: 'Ideal para lançamentos e promoções',
          url: '#'
        },
        {
          name: 'Página VSL',
          description: 'Otimizada para Video Sales Letter',
          url: '#'
        }
      ]
    },
    {
      id: 'fontes',
      name: 'Fontes',
      description: 'Fontes tipográficas profissionais gratuitas',
      icon: Type,
      gradient: 'from-orange-500 to-red-500',
      items: [
        {
          name: 'Google Fonts',
          description: 'Biblioteca com centenas de fontes gratuitas',
          url: 'https://fonts.google.com/'
        },
        {
          name: 'DaFont',
          description: 'Fontes gratuitas para download',
          url: 'https://www.dafont.com/pt/'
        },
        {
          name: 'Font Squirrel',
          description: 'Fontes comerciais gratuitas',
          url: 'https://www.fontsquirrel.com/'
        }
      ]
    },
    {
      id: 'artes-editaveis',
      name: 'Artes Editáveis',
      description: 'Templates editáveis para suas criações',
      icon: Palette,
      gradient: 'from-pink-500 to-purple-500',
      items: [
        {
          name: 'Canva Templates',
          description: 'Templates prontos para edição',
          url: 'https://www.canva.com/templates/'
        },
        {
          name: 'Figma Community',
          description: 'Designs gratuitos da comunidade',
          url: 'https://www.figma.com/community'
        }
      ]
    },
    {
      id: 'modelos',
      name: 'Modelos',
      description: 'Modelos e templates para diversos usos',
      icon: Layout,
      gradient: 'from-cyan-500 to-blue-500',
      items: [
        {
          name: 'Modelos de E-mail',
          description: 'Templates para campanhas de e-mail',
          url: '#'
        },
        {
          name: 'Modelos de Apresentação',
          description: 'Slides profissionais prontos',
          url: '#'
        },
        {
          name: 'Modelos de Contratos',
          description: 'Documentos jurídicos básicos',
          url: '#'
        }
      ]
    },
    {
      id: 'recursos-extras',
      name: 'Recursos Extras',
      description: 'Ferramentas e recursos adicionais',
      icon: Gift,
      gradient: 'from-purple-500 to-blue-500',
      items: [
        {
          name: 'Ícones Gratuitos',
          description: 'Bibliotecas de ícones para seus projetos',
          url: 'https://www.flaticon.com/'
        },
        {
          name: 'Músicas Livres',
          description: 'Trilhas sonoras sem copyright',
          url: 'https://www.youtube.com/audiolibrary'
        },
        {
          name: 'Efeitos Sonoros',
          description: 'Sons e efeitos para vídeos',
          url: 'https://freesound.org/'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            🔵 Banco DIGITAL
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Recursos gratuitos e templates premium para turbinar seus projetos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700/50 transition-all hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className={`h-32 bg-gradient-to-br ${category.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <category.icon className="w-16 h-16 text-white relative z-10" />
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2">
                  {category.name}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-slate-800/50 hover:bg-slate-800 rounded-xl p-4 transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-purple-400 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-slate-400 text-xs">
                            {item.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors flex-shrink-0 ml-2" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
