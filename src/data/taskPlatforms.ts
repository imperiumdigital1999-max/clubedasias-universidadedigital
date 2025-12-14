import { TaskPlatform } from '../types';

export const taskPlatforms: TaskPlatform[] = [
  {
    id: 'clickworker',
    name: 'Clickworker',
    description: 'Plataforma global para microtarefas e trabalhos de IA',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    url: 'https://www.clickworker.com',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    function: 'Clickworker é uma plataforma que conecta empresas com freelancers para executar microtarefas que envolvem inteligência artificial, como treinamento de dados, moderação de conteúdo e validação de informações.',
    applications: [
      'Treinamento de modelos de IA através de classificação de dados',
      'Moderação e revisão de conteúdo gerado por IA',
      'Transcrição e legendagem de áudios e vídeos',
      'Pesquisa e coleta de dados para alimentar sistemas de IA',
      'Validação e correção de resultados de algoritmos',
      'Criação de datasets para machine learning'
    ],
    videos: [
      {
        id: '1',
        title: 'Como começar no Clickworker',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        id: '2',
        title: 'Melhores tarefas para iniciantes',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'appen',
    name: 'Appen',
    description: 'Líder mundial em dados de treinamento para IA',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    url: 'https://appen.com',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    function: 'Appen é uma das maiores plataformas do mundo para criação de dados de treinamento para inteligência artificial. Oferece projetos de alta qualidade para freelancers especializados em IA.',
    applications: [
      'Anotação de imagens para visão computacional',
      'Avaliação de qualidade de respostas de chatbots',
      'Coleta e classificação de dados de fala',
      'Tradução e localização assistida por IA',
      'Teste de algoritmos de busca e recomendação',
      'Criação de datasets para processamento de linguagem natural'
    ],
    videos: [
      {
        id: '1',
        title: 'Primeiros passos na Appen',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'lionbridge',
    name: 'Lionbridge AI',
    description: 'Plataforma premium para trabalhos de IA e machine learning',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
    url: 'https://www.lionbridge.com/ai-training-data',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop',
    function: 'Lionbridge AI oferece oportunidades premium para profissionais que querem trabalhar com projetos de inteligência artificial de grandes empresas de tecnologia.',
    applications: [
      'Avaliação de resultados de busca e mapas',
      'Teste de assistentes virtuais e chatbots',
      'Análise de sentimento em redes sociais',
      'Moderação de conteúdo em plataformas digitais',
      'Criação de conteúdo para treinamento de IA',
      'Validação de traduções automáticas'
    ],
    videos: [
      {
        id: '1',
        title: 'Oportunidades na Lionbridge AI',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'workana',
    name: 'Workana',
    description: 'Plataforma de freelancers com projetos envolvendo IA, automação e criação de conteúdo',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
    url: 'https://www.workana.com',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop',
    function: 'Workana conecta empresas e freelancers para projetos que envolvem inteligência artificial, automações, criação de conteúdo, análise de dados e suporte digital.',
    applications: [
      'Criação de textos com apoio de IA',
      'Automação de processos com IA',
      'Gestão de chatbots e assistentes virtuais',
      'Criação de conteúdos para marketing com IA',
      'Projetos de análise e organização de dados',
      'Serviços digitais otimizados com IA'
    ],
    videos: [
      {
        id: '1',
        title: 'Como conseguir trabalhos usando IA na Workana',
        thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
  },
  {
    id: 'vintepila',
    name: 'VintePila',
    description: 'Marketplace brasileiro de serviços rápidos com forte uso de IA',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
    url: 'https://www.vintepila.com.br',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop',
    function: 'VintePila permite vender serviços digitais simples e rápidos, muitos deles potencializados por inteligência artificial.',
    applications: [
      'Criação de textos e copies com IA',
      'Geração de imagens e artes com IA',
      'Edição de vídeos automatizada',
      'Criação de legendas e roteiros',
      'Serviços rápidos usando ChatGPT e similares'
    ],
    videos: [
      {
        id: '1',
        title: 'Como vender serviços com IA no VintePila',
        thumbnail: 'https://img.youtube.com/vi/3tmd-ClpJxA/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=3tmd-ClpJxA'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=3tmd-ClpJxA'
  },
  {
    id: 'remotasks',
    name: 'Remotasks',
    description: 'Trabalhe remotamente em tarefas de IA e machine learning',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    url: 'https://www.remotasks.com',
    new: true,
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    function: 'Remotasks oferece uma variedade de tarefas remotas relacionadas ao treinamento e desenvolvimento de sistemas de inteligência artificial, com foco em flexibilidade e aprendizado.',
    applications: [
      'Transcrição de áudios e vídeos',
      'Moderação de conteúdo online',
      'Anotação de imagens médicas',
      'Classificação de dados de e-commerce',
      'Teste de chatbots e assistentes virtuais',
      'Criação de datasets para pesquisa acadêmica'
    ],
    videos: [
      {
        id: '1',
        title: 'Começando na Remotasks',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];