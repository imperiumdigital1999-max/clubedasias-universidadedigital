import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'chatgpt-mastery',
    name: 'ChatGPT Mastery',
    description: 'Domine o ChatGPT do básico ao avançado e multiplique sua produtividade',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    url: 'https://example.com/chatgpt-course',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    function: 'Este curso completo ensina como usar o ChatGPT de forma profissional para aumentar sua produtividade, criar conteúdos de qualidade e automatizar tarefas do dia a dia.',
    applications: [
      'Criação de conteúdo para redes sociais e blogs',
      'Automação de e-mails e comunicação profissional',
      'Geração de ideias e brainstorming criativo',
      'Análise e resumo de documentos extensos',
      'Criação de roteiros e scripts para vídeos',
      'Desenvolvimento de estratégias de marketing'
    ],
    videos: [
      {
        id: '1',
        title: 'Introdução ao ChatGPT',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        id: '2',
        title: 'Prompts Avançados',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        id: '3',
        title: 'Casos Práticos',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'midjourney-pro',
    name: 'Midjourney Pro',
    description: 'Crie imagens profissionais com IA e monetize sua criatividade',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop',
    url: 'https://example.com/midjourney-course',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=400&fit=crop',
    function: 'Aprenda a criar imagens impressionantes com Midjourney, desde conceitos básicos até técnicas avançadas para monetizar suas criações.',
    applications: [
      'Criação de artes para redes sociais',
      'Design de logos e identidade visual',
      'Ilustrações para livros e e-books',
      'Criação de NFTs e arte digital',
      'Mockups e protótipos visuais',
      'Conteúdo visual para marketing'
    ],
    videos: [
      {
        id: '1',
        title: 'Primeiros passos no Midjourney',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        id: '2',
        title: 'Técnicas avançadas de prompt',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'ia-para-negocios',
    name: 'IA para Negócios',
    description: 'Implemente IA na sua empresa e automatize processos',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    url: 'https://example.com/ia-negocios-course',
    new: true,
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    function: 'Curso estratégico para empresários e gestores que querem implementar inteligência artificial em seus negócios de forma prática e rentável.',
    applications: [
      'Automação de atendimento ao cliente',
      'Análise preditiva de vendas',
      'Otimização de processos internos',
      'Personalização de experiência do cliente',
      'Análise de dados e relatórios inteligentes',
      'Redução de custos operacionais'
    ],
    videos: [
      {
        id: '1',
        title: 'IA nos negócios: visão geral',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'automacao-zapier',
    name: 'Automação com Zapier + IA',
    description: 'Automatize tarefas repetitivas combinando Zapier com ferramentas de IA',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop',
    url: 'https://example.com/zapier-course',
    coverImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop',
    function: 'Aprenda a criar automações poderosas combinando Zapier com ferramentas de IA para eliminar tarefas repetitivas e aumentar sua eficiência.',
    applications: [
      'Automação de e-mail marketing',
      'Integração entre diferentes plataformas',
      'Processamento automático de dados',
      'Geração automática de relatórios',
      'Sincronização de informações',
      'Workflows personalizados'
    ],
    videos: [
      {
        id: '1',
        title: 'Introdução ao Zapier',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'renda-com-ia',
    name: 'Renda Extra com IA',
    description: 'Descubra como gerar renda usando ferramentas de inteligência artificial',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop',
    url: 'https://example.com/renda-ia-course',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop',
    function: 'Curso prático que ensina diferentes formas de monetizar o conhecimento em IA, desde freelances até criação de produtos digitais.',
    applications: [
      'Freelances em criação de conteúdo',
      'Venda de artes e designs criados com IA',
      'Consultoria em implementação de IA',
      'Criação de cursos e infoprodutos',
      'Automação de serviços para terceiros',
      'Desenvolvimento de chatbots personalizados'
    ],
    videos: [
      {
        id: '1',
        title: 'Oportunidades de renda com IA',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'video-ia',
    name: 'Criação de Vídeos com IA',
    description: 'Produza vídeos profissionais usando ferramentas de inteligência artificial',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop',
    url: 'https://example.com/video-ia-course',
    new: true,
    coverImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop',
    function: 'Aprenda a criar vídeos de alta qualidade usando ferramentas de IA para roteiro, edição, narração e efeitos visuais.',
    applications: [
      'Criação de conteúdo para YouTube',
      'Vídeos promocionais para empresas',
      'Conteúdo educacional e treinamentos',
      'Vídeos para redes sociais',
      'Animações e motion graphics',
      'Dublagem e narração automática'
    ],
    videos: [
      {
        id: '1',
        title: 'Ferramentas de vídeo com IA',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];