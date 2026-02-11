export interface AgentPrompt {
  id: string;
  title: string;
  prompt: string;
  category?: string;
}

export interface PersonalizationField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'textarea';
}

export interface AgentData {
  id: string;
  name: string;
  description: string;
  videoUrl?: string;
  videoThumbnail?: string;
  steps: string[];
  externalLink?: string;
  externalLinkText?: string;
  prompts: AgentPrompt[];
  personalizationFields: PersonalizationField[];
  personalizationInstructions: string;
}

export const agentsData: Record<string, AgentData> = {
  'roteirista-video': {
    id: 'roteirista-video',
    name: 'Roteirista de Vídeo',
    description: 'Criação de roteiros envolventes e estruturados para vídeos profissionais',
    steps: [
      'Defina o objetivo do seu vídeo e público-alvo',
      'Escolha um dos prompts prontos ou personalize um novo',
      'Cole o prompt no ChatGPT, Claude ou outra IA de sua preferência',
      'Revise e adapte o roteiro gerado conforme necessário',
      'Use o roteiro para gravar ou produzir seu vídeo'
    ],
    prompts: [
      {
        id: 'roteiro-curto',
        title: 'Roteiro para Vídeo Curto (30-60s)',
        category: 'Redes Sociais',
        prompt: 'Crie um roteiro para um vídeo curto de 30-60 segundos sobre [TEMA]. O vídeo deve:\n- Ter um gancho forte nos primeiros 3 segundos\n- Apresentar 3 pontos principais de forma rápida\n- Terminar com uma call-to-action clara\n- Ser dinâmico e prender a atenção\n\nFormato:\n[GANCHO] (0-3s)\n[DESENVOLVIMENTO] (3-50s)\n[CTA] (50-60s)'
      },
      {
        id: 'roteiro-explicativo',
        title: 'Roteiro para Vídeo Explicativo',
        category: 'Educacional',
        prompt: 'Crie um roteiro para um vídeo explicativo sobre [TEMA]. Estruture da seguinte forma:\n\n1. INTRODUÇÃO (10%): Apresente o problema ou dúvida\n2. DESENVOLVIMENTO (70%): Explique o conceito passo a passo\n3. EXEMPLOS PRÁTICOS (15%): Mostre aplicações reais\n4. CONCLUSÃO (5%): Resuma os pontos principais\n\nTom: didático e acessível\nDuração estimada: 5-10 minutos'
      },
      {
        id: 'roteiro-vendas',
        title: 'Roteiro para Vídeo de Vendas',
        category: 'Marketing',
        prompt: 'Crie um roteiro persuasivo para vender [PRODUTO/SERVIÇO]. Use a estrutura PAS:\n\nP - PROBLEMA: Identifique a dor do cliente\nA - AGITAÇÃO: Intensifique o problema\nS - SOLUÇÃO: Apresente seu produto como solução\n\nInclua:\n- Prova social (depoimentos)\n- Benefícios claros\n- Garantia\n- Call-to-action forte\n- Senso de urgência'
      }
    ],
    personalizationFields: [
      { id: 'objetivo', label: 'Objetivo do Vídeo', placeholder: 'Ex: Ensinar, Vender, Engajar, Informar', type: 'text' },
      { id: 'nicho', label: 'Nicho/Tema', placeholder: 'Ex: Marketing Digital, Fitness, Finanças', type: 'text' },
      { id: 'publico', label: 'Público-Alvo', placeholder: 'Ex: Empreendedores iniciantes, Mães, Universitários', type: 'text' },
      { id: 'tom', label: 'Tom de Voz', placeholder: 'Ex: Profissional, Descontraído, Motivacional', type: 'text' },
      { id: 'duracao', label: 'Duração Desejada', placeholder: 'Ex: 30 segundos, 5 minutos, 15 minutos', type: 'text' }
    ],
    personalizationInstructions: 'Crie um roteiro de vídeo personalizado com base nas seguintes especificações:'
  },

  'tradutor-multilingue': {
    id: 'tradutor-multilingue',
    name: 'Tradutor Multilíngue',
    description: 'Tradução profissional de vídeos e conteúdos mantendo contexto e naturalidade',
    steps: [
      'Copie o texto do vídeo ou legendas que deseja traduzir',
      'Escolha um prompt adequado ao tipo de conteúdo',
      'Especifique o idioma de origem e destino',
      'Cole na IA e receba a tradução contextualizada',
      'Revise e use a tradução nas legendas ou dublagem'
    ],
    prompts: [
      {
        id: 'traducao-legendas',
        title: 'Tradução de Legendas',
        category: 'Vídeo',
        prompt: 'Traduza as seguintes legendas de [IDIOMA ORIGEM] para [IDIOMA DESTINO], mantendo:\n- Sincronização com timing de vídeo\n- Naturalidade e fluência\n- Contexto cultural apropriado\n- Limite de caracteres por linha (máx 42)\n\n[COLE AS LEGENDAS AQUI]'
      },
      {
        id: 'traducao-roteiro',
        title: 'Tradução de Roteiro',
        category: 'Conteúdo',
        prompt: 'Traduza o seguinte roteiro de [IDIOMA ORIGEM] para [IDIOMA DESTINO]. Priorize:\n- Manter o tom e estilo original\n- Adaptar expressões idiomáticas\n- Preservar o timing e ritmo\n- Adequar referências culturais quando necessário\n\n[COLE O ROTEIRO AQUI]'
      }
    ],
    personalizationFields: [
      { id: 'origem', label: 'Idioma de Origem', placeholder: 'Ex: Inglês, Espanhol, Francês', type: 'text' },
      { id: 'destino', label: 'Idioma de Destino', placeholder: 'Ex: Português, Inglês, Espanhol', type: 'text' },
      { id: 'tipo', label: 'Tipo de Conteúdo', placeholder: 'Ex: Legendas, Roteiro, Artigo, Post', type: 'text' },
      { id: 'tom', label: 'Tom do Conteúdo', placeholder: 'Ex: Formal, Casual, Técnico, Criativo', type: 'text' }
    ],
    personalizationInstructions: 'Traduza o conteúdo com as seguintes especificações:'
  },

  'agente-legendas': {
    id: 'agente-legendas',
    name: 'Gerador de Legendas',
    description: 'Criação de legendas e closed captions profissionais para vídeos',
    steps: [
      'Transcreva ou tenha o texto do vídeo em mãos',
      'Use um dos prompts para formatar as legendas',
      'Ajuste o timing e sincronização se necessário',
      'Exporte no formato desejado (SRT, VTT, etc)',
      'Importe no seu editor de vídeo ou plataforma'
    ],
    prompts: [
      {
        id: 'legendas-youtube',
        title: 'Legendas para YouTube',
        category: 'Plataforma',
        prompt: 'Formate o seguinte texto em legendas para YouTube:\n\nRequisitos:\n- Máximo 42 caracteres por linha\n- 2 linhas por legenda\n- Quebras naturais nas pausas da fala\n- Pontuação correta\n- Timing sugerido para cada legenda\n\n[COLE O TEXTO AQUI]'
      },
      {
        id: 'legendas-acessiveis',
        title: 'Legendas Acessíveis (CC)',
        category: 'Acessibilidade',
        prompt: 'Crie closed captions acessíveis incluindo:\n- Diálogos completos\n- Descrição de sons importantes [APLAUSO], [MÚSICA]\n- Identificação de falantes quando necessário\n- Formatação clara e legível\n\n[COLE O CONTEÚDO AQUI]'
      }
    ],
    personalizationFields: [
      { id: 'plataforma', label: 'Plataforma', placeholder: 'Ex: YouTube, Instagram, TikTok, LinkedIn', type: 'text' },
      { id: 'idioma', label: 'Idioma', placeholder: 'Ex: Português, Inglês, Espanhol', type: 'text' },
      { id: 'estilo', label: 'Estilo', placeholder: 'Ex: Simples, Com emojis, Formal, Criativo', type: 'text' }
    ],
    personalizationInstructions: 'Gere legendas personalizadas com base em:'
  },

  'mestre-copy': {
    id: 'mestre-copy',
    name: 'Agente Mestre de Copy',
    description: 'Criação de textos persuasivos e copy estratégica que converte',
    steps: [
      'Defina o objetivo da sua copy (vender, engajar, informar)',
      'Escolha um dos frameworks prontos ou personalize',
      'Forneça informações sobre produto e público',
      'Receba múltiplas variações de copy',
      'Teste e otimize com base nos resultados'
    ],
    prompts: [
      {
        id: 'copy-aida',
        title: 'Copy usando AIDA',
        category: 'Framework',
        prompt: 'Crie uma copy usando o framework AIDA para [PRODUTO/SERVIÇO]:\n\nA - ATENÇÃO: Gancho poderoso\nI - INTERESSE: Desperte curiosidade\nD - DESEJO: Crie necessidade\nA - AÇÃO: Call-to-action clara\n\nPúblico: [DESCREVA]\nObjetivo: [DESCREVA]\nTom: [DESCREVA]'
      },
      {
        id: 'copy-pas',
        title: 'Copy usando PAS',
        category: 'Framework',
        prompt: 'Escreva uma copy persuasiva usando PAS:\n\nP - PROBLEMA: Identifique a dor\nA - AGITAÇÃO: Intensifique o problema\nS - SOLUÇÃO: Apresente a solução\n\nProduto: [DESCREVA]\nPúblico-alvo: [DESCREVA]\nBenefício principal: [DESCREVA]'
      },
      {
        id: 'headlines',
        title: 'Headlines Magnéticas',
        category: 'Títulos',
        prompt: 'Crie 10 headlines magnéticas para [PRODUTO/SERVIÇO]. Cada headline deve:\n- Ter no máximo 10 palavras\n- Despertar curiosidade ou emoção\n- Comunicar benefício claro\n- Ser única e memorável\n\nUse diferentes abordagens: pergunta, afirmação, número, promessa, transformação.'
      }
    ],
    personalizationFields: [
      { id: 'produto', label: 'Produto/Serviço', placeholder: 'Descreva o que está vendendo', type: 'textarea' },
      { id: 'publico', label: 'Público-Alvo', placeholder: 'Quem é seu cliente ideal?', type: 'text' },
      { id: 'problema', label: 'Principal Problema', placeholder: 'Qual dor você resolve?', type: 'text' },
      { id: 'beneficio', label: 'Benefício Principal', placeholder: 'Qual a transformação oferecida?', type: 'text' },
      { id: 'tom', label: 'Tom de Voz', placeholder: 'Ex: Profissional, Descontraído, Urgente', type: 'text' }
    ],
    personalizationInstructions: 'Crie uma copy persuasiva personalizada:'
  },

  'pagina-vendas': {
    id: 'pagina-vendas',
    name: 'Criador de Página de Vendas',
    description: 'Estruturação completa de páginas de vendas que convertem',
    steps: [
      'Reúna informações sobre produto, preço e benefícios',
      'Escolha um modelo de página de vendas',
      'Personalize cada seção com seus dados',
      'Receba a estrutura completa da página',
      'Implemente no seu site ou ferramenta de landing page'
    ],
    prompts: [
      {
        id: 'vsl-completa',
        title: 'VSL (Video Sales Letter) Completa',
        category: 'Estrutura',
        prompt: 'Crie uma estrutura completa de VSL para [PRODUTO]:\n\n1. PRÉ-HEADLINE (curiosidade)\n2. HEADLINE (promessa grande)\n3. SUBHEADLINE (clarificação)\n4. HISTÓRIA/CONEXÃO\n5. APRESENTAÇÃO DO PROBLEMA\n6. AGITAÇÃO\n7. SOLUÇÃO (produto)\n8. COMO FUNCIONA\n9. BENEFÍCIOS (lista)\n10. PROVA SOCIAL\n11. OFERTA\n12. BÔNUS\n13. GARANTIA\n14. FAQ\n15. CTA FINAL\n16. PS (urgência)'
      },
      {
        id: 'landing-page',
        title: 'Landing Page de Conversão',
        category: 'Estrutura',
        prompt: 'Estruture uma landing page de alta conversão para [OFERTA]:\n\n- Hero section com headline forte\n- Subheadline explicativa\n- Benefícios (não features)\n- Prova social\n- CTA primário\n- Como funciona (3 passos)\n- Superar objeções\n- Garantia\n- CTA secundário\n- Footer minimalista'
      }
    ],
    personalizationFields: [
      { id: 'produto', label: 'Nome do Produto', placeholder: 'Como seu produto se chama?', type: 'text' },
      { id: 'nicho', label: 'Nicho/Mercado', placeholder: 'Ex: Emagrecimento, Marketing, Finanças', type: 'text' },
      { id: 'preco', label: 'Preço', placeholder: 'Qual o valor do investimento?', type: 'text' },
      { id: 'transformacao', label: 'Transformação', placeholder: 'Que resultado o cliente terá?', type: 'textarea' },
      { id: 'garantia', label: 'Garantia', placeholder: 'Ex: 7 dias, 30 dias, incondicional', type: 'text' }
    ],
    personalizationInstructions: 'Crie uma estrutura de página de vendas para:'
  },

  'gerador-imagens': {
    id: 'gerador-imagens',
    name: 'Gerador de Imagens',
    description: 'Criação de prompts para geração de imagens realistas com IA',
    externalLink: 'https://chatgpt.com',
    externalLinkText: 'Abrir DALL-E 3',
    steps: [
      'Defina o tipo de imagem que precisa',
      'Use um dos prompts ou personalize um novo',
      'Cole no ChatGPT (DALL-E), Midjourney ou outra IA',
      'Ajuste detalhes se necessário',
      'Baixe e use a imagem gerada'
    ],
    prompts: [
      {
        id: 'imagem-realista',
        title: 'Imagem Fotorrealista',
        category: 'Realista',
        prompt: 'Crie uma imagem fotorrealista de [DESCREVA A CENA]. Estilo: fotografia profissional, iluminação natural, alta resolução, detalhes realistas, foco nítido, composição equilibrada.'
      },
      {
        id: 'imagem-produto',
        title: 'Imagem de Produto',
        category: 'E-commerce',
        prompt: 'Crie uma imagem de produto profissional de [PRODUTO]. Fundo: [DESCREVA], iluminação: estúdio profissional, ângulo: [FRONTAL/LATERAL/3/4], estilo: clean e minimalista, alta qualidade, ideal para e-commerce.'
      },
      {
        id: 'capa-social',
        title: 'Capa para Redes Sociais',
        category: 'Social Media',
        prompt: 'Crie uma imagem para capa de [REDE SOCIAL] sobre [TEMA]. Estilo: moderno e profissional, cores: [DESCREVA], elementos: [DESCREVA], com espaço para texto, aspect ratio: [16:9 / 1:1 / 9:16].'
      }
    ],
    personalizationFields: [
      { id: 'tipo', label: 'Tipo de Imagem', placeholder: 'Ex: Retrato, Paisagem, Produto, Ilustração', type: 'text' },
      { id: 'descricao', label: 'Descrição Detalhada', placeholder: 'Descreva o que quer ver na imagem', type: 'textarea' },
      { id: 'estilo', label: 'Estilo Visual', placeholder: 'Ex: Realista, Cartoon, Minimalista, Vintage', type: 'text' },
      { id: 'cores', label: 'Paleta de Cores', placeholder: 'Ex: Tons pastéis, Vibrante, Monocromático', type: 'text' }
    ],
    personalizationInstructions: 'Gere um prompt de imagem com as seguintes características:'
  },

  'agente-automacao-n8n': {
    id: 'agente-automacao-n8n',
    name: 'Automação com n8n',
    description: 'Criação de automações inteligentes e workflows com n8n',
    externalLink: 'https://n8n.io',
    externalLinkText: 'Acessar n8n',
    steps: [
      'Identifique o processo que deseja automatizar',
      'Use um dos templates de automação disponíveis',
      'Configure os nós no n8n conforme o guia',
      'Teste a automação com dados reais',
      'Ative e monitore a execução'
    ],
    prompts: [
      {
        id: 'automacao-email',
        title: 'Automação de Email Marketing',
        category: 'Marketing',
        prompt: 'Crie um workflow n8n para:\n1. Capturar novo lead de [FONTE]\n2. Adicionar em [CRM/LISTA]\n3. Enviar sequência de boas-vindas\n4. Tagear conforme comportamento\n5. Notificar equipe sobre leads quentes\n\nDescreva cada nó necessário e suas configurações.'
      },
      {
        id: 'automacao-social',
        title: 'Automação de Redes Sociais',
        category: 'Social Media',
        prompt: 'Configure automação para:\n- Agendar posts em múltiplas plataformas\n- Responder mensagens automaticamente\n- Monitorar menções da marca\n- Gerar relatórios de engajamento\n- Enviar alertas sobre interações importantes'
      }
    ],
    personalizationFields: [
      { id: 'processo', label: 'Processo a Automatizar', placeholder: 'Ex: Captura de leads, Envio de emails, Backup', type: 'textarea' },
      { id: 'ferramentas', label: 'Ferramentas Envolvidas', placeholder: 'Ex: Gmail, Notion, Slack, Google Sheets', type: 'text' },
      { id: 'gatilho', label: 'Gatilho da Automação', placeholder: 'Ex: Novo email, Formulário preenchido, Horário', type: 'text' }
    ],
    personalizationInstructions: 'Crie uma automação n8n para:'
  },

  'criador-videos-veo3': {
    id: 'criador-videos-veo3',
    name: 'Criador de Vídeos (Flow Veo3)',
    description: 'Geração automática de vídeos profissionais usando IA avançada',
    externalLink: 'https://veo3.clube-das-ias.com',
    externalLinkText: 'Acessar Veo3',
    steps: [
      'Defina o conceito e objetivo do seu vídeo',
      'Escreva ou gere o prompt descritivo da cena',
      'Configure parâmetros de estilo e duração',
      'Gere o vídeo usando Veo3',
      'Baixe e edite se necessário'
    ],
    prompts: [
      {
        id: 'video-produto',
        title: 'Vídeo de Produto',
        category: 'Marketing',
        prompt: 'Crie um vídeo profissional mostrando [PRODUTO]. O vídeo deve ter:\n- Plano de fundo [DESCREVA]\n- Iluminação: suave e profissional\n- Movimento: rotação suave em 360°\n- Duração: 15 segundos\n- Estilo: clean e moderno\n- Foco: destacar características principais'
      },
      {
        id: 'video-explicativo',
        title: 'Vídeo Explicativo',
        category: 'Educacional',
        prompt: 'Gere um vídeo explicativo sobre [TEMA]:\n- Cenas: [DESCREVA 3-5 CENAS]\n- Transições: suaves\n- Estilo: didático e claro\n- Elementos: ícones e textos quando necessário\n- Duração: 30-60 segundos'
      }
    ],
    personalizationFields: [
      { id: 'conceito', label: 'Conceito do Vídeo', placeholder: 'Descreva o conceito geral', type: 'textarea' },
      { id: 'estilo', label: 'Estilo Visual', placeholder: 'Ex: Moderno, Minimalista, Cinematográfico', type: 'text' },
      { id: 'duracao', label: 'Duração', placeholder: 'Ex: 15s, 30s, 60s', type: 'text' },
      { id: 'cores', label: 'Paleta de Cores', placeholder: 'Ex: Cores vibrantes, Tons pastéis', type: 'text' }
    ],
    personalizationInstructions: 'Crie um prompt para gerar vídeo com Veo3:'
  },

  'clonagem-videos-kinglia': {
    id: 'clonagem-videos-kinglia',
    name: 'Clonagem de Vídeos (Kinglia)',
    description: 'Clone e recrie vídeos virais com inteligência artificial',
    externalLink: 'https://kinglia.com',
    externalLinkText: 'Acessar Kinglia',
    steps: [
      'Encontre o vídeo de referência que deseja clonar',
      'Analise os elementos chave: roteiro, estilo, edição',
      'Use os prompts para recriar com seu próprio toque',
      'Ajuste para seu nicho e público',
      'Produza e publique sua versão'
    ],
    prompts: [
      {
        id: 'analise-viral',
        title: 'Análise de Vídeo Viral',
        category: 'Análise',
        prompt: 'Analise este vídeo viral e identifique:\n\n1. ESTRUTURA\n- Gancho (primeiros 3s)\n- Desenvolvimento\n- Conclusão/CTA\n\n2. ELEMENTOS DE SUCESSO\n- Por que prende atenção?\n- Quais gatilhos mentais usa?\n- Padrões de edição\n\n3. ADAPTAÇÃO\n- Como recriar para [SEU NICHO]?\n- Quais elementos manter?\n- O que personalizar?\n\n[COLE LINK OU DESCRIÇÃO DO VÍDEO]'
      },
      {
        id: 'clonagem-estrutura',
        title: 'Clonagem de Estrutura',
        category: 'Recriação',
        prompt: 'Recrie a estrutura deste vídeo viral para [SEU TEMA]:\n\nVídeo original: [DESCREVA]\n\nMantendo:\n- Timing e ritmo\n- Estrutura narrativa\n- Gatilhos emocionais\n\nAdaptando:\n- Conteúdo para seu nicho\n- Identidade visual\n- Sua personalidade'
      }
    ],
    personalizationFields: [
      { id: 'video-ref', label: 'Vídeo de Referência', placeholder: 'Cole o link ou descreva o vídeo', type: 'textarea' },
      { id: 'seu-nicho', label: 'Seu Nicho', placeholder: 'Ex: Finanças, Fitness, Marketing', type: 'text' },
      { id: 'diferencial', label: 'Seu Diferencial', placeholder: 'O que torna sua versão única?', type: 'textarea' }
    ],
    personalizationInstructions: 'Clone e adapte um vídeo viral para:'
  },

  'resumidor-youtube': {
    id: 'resumidor-youtube',
    name: 'Resumidor de Vídeos do YouTube',
    description: 'Extraia insights e crie resumos inteligentes de qualquer vídeo',
    steps: [
      'Cole o link do vídeo do YouTube',
      'Escolha o tipo de resumo desejado',
      'Use o prompt adequado com a IA',
      'Receba o resumo estruturado',
      'Use o conteúdo para aprendizado ou criação'
    ],
    prompts: [
      {
        id: 'resumo-executivo',
        title: 'Resumo Executivo',
        category: 'Profissional',
        prompt: 'Crie um resumo executivo do vídeo [LINK/TÍTULO]:\n\n- Tema principal (1 frase)\n- 5 pontos-chave mais importantes\n- Conclusões e takeaways\n- Aplicação prática\n- Tempo estimado de leitura: 2 min\n\n[COLE TRANSCRIÇÃO OU CONTEXTO]'
      },
      {
        id: 'resumo-detalhado',
        title: 'Resumo Detalhado com Timestamps',
        category: 'Completo',
        prompt: 'Resuma este vídeo incluindo timestamps:\n\nPara cada seção, forneça:\n- [00:00] Timestamp\n- Tópico abordado\n- Pontos principais\n- Insights relevantes\n\n[COLE TRANSCRIÇÃO]'
      },
      {
        id: 'extrator-insights',
        title: 'Extrator de Insights',
        category: 'Aprendizado',
        prompt: 'Extraia os insights mais valiosos deste vídeo:\n\n1. TOP 3 IDEIAS PRINCIPAIS\n2. FRASES MARCANTES (citações)\n3. CONCEITOS EXPLICADOS\n4. AÇÕES RECOMENDADAS\n5. RECURSOS MENCIONADOS\n\n[COLE INFORMAÇÕES DO VÍDEO]'
      }
    ],
    personalizationFields: [
      { id: 'link', label: 'Link do Vídeo', placeholder: 'Cole o link do YouTube', type: 'text' },
      { id: 'objetivo', label: 'Objetivo do Resumo', placeholder: 'Ex: Estudo, Revisão, Criar conteúdo', type: 'text' },
      { id: 'foco', label: 'Foco Específico', placeholder: 'Há algum aspecto específico de interesse?', type: 'text' }
    ],
    personalizationInstructions: 'Crie um resumo do vídeo considerando:'
  }
};

export const getAgentData = (agentId: string): AgentData | null => {
  return agentsData[agentId] || null;
};
