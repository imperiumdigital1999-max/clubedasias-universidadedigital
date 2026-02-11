export interface TaskAgent {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  rating?: string;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  agents: TaskAgent[];
}

export const tasksData: Record<string, Task> = {
  'roteirista-video': {
    id: 'roteirista-video',
    name: 'Roteirista de Vídeo',
    description: 'Criação de roteiros envolventes e estruturados para vídeos profissionais',
    agents: [
      {
        id: 'roteirista-video-agent-1',
        name: 'Script Master AI',
        description: 'Crie roteiros cinematográficos profissionais com estrutura narrativa completa',
        image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://chatgpt.com',
        rating: '4.9'
      },
      {
        id: 'roteirista-video-agent-2',
        name: 'Viral Script Pro',
        description: 'Roteiros otimizados para engajamento máximo em redes sociais',
        image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://claude.ai',
        rating: '4.8'
      }
    ]
  },
  'tradutor-multilingue': {
    id: 'tradutor-multilingue',
    name: 'Tradutor Multilíngue',
    description: 'Tradução profissional de vídeos e conteúdos mantendo contexto e naturalidade',
    agents: [
      {
        id: 'tradutor-multilingue-agent-1',
        name: 'Global Translate AI',
        description: 'Traduções profissionais em mais de 100 idiomas com contexto cultural',
        image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://chatgpt.com',
        rating: '4.9'
      },
      {
        id: 'tradutor-multilingue-agent-2',
        name: 'Subtitle Master',
        description: 'Especializado em tradução e adaptação de legendas para vídeos',
        image: 'https://images.pexels.com/photos/6936453/pexels-photo-6936453.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://claude.ai',
        rating: '4.8'
      }
    ]
  },
  'criador-videos-veo3': {
    id: 'criador-videos-veo3',
    name: 'Criador de Vídeos (Flow Veo3)',
    description: 'Geração automática de vídeos profissionais usando IA avançada',
    agents: [
      {
        id: 'criador-videos-veo3-agent-1',
        name: 'Veo3 Video Master',
        description: 'Crie vídeos profissionais automaticamente com IA de última geração',
        image: 'https://images.pexels.com/photos/7991160/pexels-photo-7991160.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://veo3.clube-das-ias.com',
        rating: '5.0'
      },
      {
        id: 'criador-videos-veo3-agent-2',
        name: 'AI Cinema Pro',
        description: 'Gere vídeos cinematográficos com qualidade de estúdio',
        image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://veo3.clube-das-ias.com',
        rating: '4.9'
      }
    ]
  },
  'agente-legendas': {
    id: 'agente-legendas',
    name: 'Gerador de Legendas',
    description: 'Criação de legendas e closed captions profissionais para vídeos',
    agents: [
      {
        id: 'agente-legendas-agent-1',
        name: 'Caption Master AI',
        description: 'Gere legendas precisas e sincronizadas automaticamente',
        image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://chatgpt.com',
        rating: '4.8'
      },
      {
        id: 'agente-legendas-agent-2',
        name: 'Subtitle Sync Pro',
        description: 'Crie legendas acessíveis com timing perfeito para qualquer plataforma',
        image: 'https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://claude.ai',
        rating: '4.7'
      }
    ]
  },
  'clonagem-videos-kinglia': {
    id: 'clonagem-videos-kinglia',
    name: 'Clonagem de Vídeos (Kinglia)',
    description: 'Clone e recrie vídeos virais com inteligência artificial',
    agents: [
      {
        id: 'clonagem-videos-kinglia-agent-1',
        name: 'Viral Clone Master',
        description: 'Clone estruturas de vídeos virais e adapte para seu nicho',
        image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://kinglia.com',
        rating: '4.9'
      },
      {
        id: 'clonagem-videos-kinglia-agent-2',
        name: 'Content Replicator AI',
        description: 'Recrie conteúdos de sucesso mantendo sua identidade única',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://kinglia.com',
        rating: '4.8'
      }
    ]
  },
  'resumidor-youtube': {
    id: 'resumidor-youtube',
    name: 'Resumidor de Vídeos do YouTube',
    description: 'Extraia insights e crie resumos inteligentes de qualquer vídeo',
    agents: [
      {
        id: 'resumidor-youtube-agent-1',
        name: 'YouTube Summary AI',
        description: 'Transforme vídeos longos em resumos executivos em segundos',
        image: 'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://chatgpt.com',
        rating: '4.9'
      },
      {
        id: 'resumidor-youtube-agent-2',
        name: 'Video Insight Extractor',
        description: 'Extraia os insights mais valiosos de qualquer vídeo do YouTube',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://claude.ai',
        rating: '4.8'
      }
    ]
  },
  'mestre-copy': {
    id: 'mestre-copy',
    name: 'Agente Mestre de Copy',
    description: 'Criação de textos persuasivos e copy estratégica que converte',
    agents: [
      {
        id: 'mestre-copy-agent-1',
        name: 'Copywriting Master AI',
        description: 'Crie copies de alta conversão usando frameworks comprovados',
        image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://chatgpt.com',
        rating: '5.0'
      },
      {
        id: 'mestre-copy-agent-2',
        name: 'Sales Copy Pro',
        description: 'Textos persuasivos que vendem e geram resultados imediatos',
        image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://claude.ai',
        rating: '4.9'
      }
    ]
  },
  'pagina-vendas': {
    id: 'pagina-vendas',
    name: 'Criador de Página de Vendas',
    description: 'Estruturação completa de páginas de vendas que convertem',
    agents: [
      {
        id: 'pagina-vendas-agent-1',
        name: 'Landing Page Master',
        description: 'Crie páginas de vendas de alta conversão com estrutura completa',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://chatgpt.com',
        rating: '4.9'
      },
      {
        id: 'pagina-vendas-agent-2',
        name: 'VSL Builder AI',
        description: 'Estruture Video Sales Letters completas que convertem visitantes',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://claude.ai',
        rating: '4.8'
      }
    ]
  },
  'gerador-imagens': {
    id: 'gerador-imagens',
    name: 'Gerador de Imagens',
    description: 'Criação de prompts para geração de imagens realistas com IA',
    agents: [
      {
        id: 'gerador-imagens-agent-1',
        name: 'Image Master AI',
        description: 'Gere imagens realistas e cinematográficas com prompts avançados',
        image: 'https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://chatgpt.com',
        rating: '5.0'
      },
      {
        id: 'gerador-imagens-agent-2',
        name: 'Visual Pro Studio',
        description: 'Crie banners, thumbnails e artes profissionais em segundos',
        image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://chatgpt.com',
        rating: '4.9'
      }
    ]
  },
  'agente-automacao-n8n': {
    id: 'agente-automacao-n8n',
    name: 'Automação com n8n',
    description: 'Criação de automações inteligentes e workflows com n8n',
    agents: [
      {
        id: 'agente-automacao-n8n-agent-1',
        name: 'Automation Master',
        description: 'Crie automações complexas e workflows inteligentes com n8n',
        image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://n8n.io',
        rating: '4.9'
      },
      {
        id: 'agente-automacao-n8n-agent-2',
        name: 'Workflow Architect AI',
        description: 'Estruture processos automatizados que economizam horas de trabalho',
        image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=200',
        url: 'https://n8n.io',
        rating: '4.8'
      }
    ]
  }
};

export const getTaskData = (taskId: string): Task | null => {
  return tasksData[taskId] || null;
};
