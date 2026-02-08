interface AssistantResponse {
  message: string;
  suggestedView?: string;
  suggestedAction?: string;
}

interface ResourceMapping {
  keywords: string[];
  view: string;
  resourceName: string;
  description: string;
}

const aiAccessKeywords = [
  'chatgpt', 'chat gpt', 'gpt', 'claude', 'gemini', 'lovable',
  'midjourney', 'dalle', 'dall-e', 'copilot', 'perplexity',
  'deepseek', 'llama', 'mistral', 'bard', 'bing', 'notion ai'
];

const accessVerbs = [
  'acessar', 'usar', 'abrir', 'entrar', 'ir para', 'quero usar',
  'quero acessar', 'quero abrir', 'quero entrar', 'utilizar'
];

const genericAIPatterns = [
  'qual ia', 'alguma ia', 'uma ia', 'usar ia', 'acessar ia',
  'qual inteligencia', 'alguma inteligencia', 'usar inteligencia'
];

function detectAIAccessIntent(query: string): boolean {
  const lowerQuery = query.toLowerCase();

  for (const pattern of genericAIPatterns) {
    if (lowerQuery.includes(pattern)) {
      return true;
    }
  }

  for (const verb of accessVerbs) {
    if (lowerQuery.includes(verb)) {
      for (const aiName of aiAccessKeywords) {
        if (lowerQuery.includes(aiName)) {
          return true;
        }
      }
    }
  }

  for (const aiName of aiAccessKeywords) {
    const hasAIName = lowerQuery.includes(aiName);
    const hasAccessIntent = accessVerbs.some(verb => lowerQuery.includes(verb));

    if (hasAIName && hasAccessIntent) {
      return true;
    }
  }

  return false;
}

const resourceMappings: ResourceMapping[] = [
  {
    keywords: ['vídeo', 'video', 'criar vídeo', 'gerar vídeo', 'vídeos', 'videos', 'veo', 'veo3'],
    view: 'veo3',
    resourceName: 'Criador de Vídeos com IA',
    description: 'Use prompts prontos para criar vídeos com inteligência artificial'
  },
  {
    keywords: ['imagem', 'foto', 'gerar imagem', 'criar imagem', 'ilustração', 'ilustracao', 'desenho'],
    view: 'gerador-imagens',
    resourceName: 'Gerador de Imagens',
    description: 'Crie imagens profissionais com IA'
  },
  {
    keywords: ['escrever', 'texto', 'redação', 'redacao', 'artigo', 'conteúdo', 'conteudo', 'escrita'],
    view: 'escrita-automatica',
    resourceName: 'Escrita Automática',
    description: 'Gere textos e conteúdos com IA'
  },
  {
    keywords: ['resumir', 'resumo', 'sintetizar', 'síntese', 'sintese'],
    view: 'resumo-texto',
    resourceName: 'Resumo de Texto',
    description: 'Resuma documentos e textos longos automaticamente'
  },
  {
    keywords: ['conversar', 'chat', 'perguntar', 'pergunta', 'dúvida', 'duvida', 'ajuda'],
    view: 'chat-ia',
    resourceName: 'Chat de IA',
    description: 'Converse com a inteligência artificial'
  },
  {
    keywords: ['prompt', 'prompts', 'templates', 'modelos'],
    view: 'prompts',
    resourceName: 'Biblioteca de Prompts',
    description: 'Acesse templates prontos para diversas tarefas'
  },
  {
    keywords: ['gpt', 'gpts', 'personalizado', 'customizado', 'assistente'],
    view: 'gpts-personalizados',
    resourceName: 'GPTs Personalizados',
    description: 'Use assistentes especializados e customizados'
  },
  {
    keywords: ['ferramenta', 'ferramentas', 'recurso', 'recursos', 'ia'],
    view: 'ferramentas-ia',
    resourceName: 'Ferramentas de IA',
    description: 'Explore mais de 150 ferramentas disponíveis'
  },
  {
    keywords: ['agente', 'agentes', 'especializado', 'sistema'],
    view: 'agentes-ia',
    resourceName: 'Agentes de IA',
    description: 'Use agentes especializados para tarefas específicas'
  },
  {
    keywords: ['curso', 'cursos', 'aprender', 'aula', 'aulas', 'treinamento'],
    view: 'cursos',
    resourceName: 'Cursos',
    description: 'Acesse cursos e treinamentos disponíveis'
  }
];

export function processUserQuery(query: string): AssistantResponse {
  const lowerQuery = query.toLowerCase().trim();

  if (!lowerQuery || lowerQuery.length < 3) {
    return {
      message: 'Por favor, descreva o que você gostaria de fazer. Exemplo: "criar um vídeo", "escrever um artigo", "gerar uma imagem".'
    };
  }

  if (detectAIAccessIntent(lowerQuery)) {
    return {
      message: 'Para acessar essa IA, vá até a aba **Recursos de IA**.\n\nLá você encontra as inteligências disponíveis dentro do Clube.',
      suggestedView: 'ferramentas-ia',
      suggestedAction: 'Acessar Recursos de IA'
    };
  }

  for (const mapping of resourceMappings) {
    const hasKeyword = mapping.keywords.some(keyword =>
      lowerQuery.includes(keyword.toLowerCase())
    );

    if (hasKeyword) {
      return {
        message: `Para fazer isso, você pode usar o recurso **${mapping.resourceName}**.\n\n${mapping.description}.\n\nClique no botão abaixo para acessar:`,
        suggestedView: mapping.view,
        suggestedAction: `Acessar ${mapping.resourceName}`
      };
    }
  }

  return {
    message: `Entendi que você quer: "${query}".\n\nAtualmente, os recursos disponíveis no Clube das IAs são:\n\n• **Criador de Vídeos com IA** - Para criar vídeos\n• **Gerador de Imagens** - Para criar imagens\n• **Escrita Automática** - Para gerar textos\n• **Chat de IA** - Para conversas e dúvidas\n• **Biblioteca de Prompts** - Templates prontos\n• **GPTs Personalizados** - Assistentes especializados\n• **Ferramentas de IA** - Mais de 150 recursos\n\nQual desses recursos mais se aproxima do que você precisa?`
  };
}

export function getResourceByView(view: string): string {
  const resource = resourceMappings.find(r => r.view === view);
  return resource ? resource.resourceName : 'Recurso';
}
