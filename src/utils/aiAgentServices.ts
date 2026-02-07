export class ChatAIService {
  private static commonResponses: Record<string, string[]> = {
    greetings: [
      'Olá! Como posso ajudá-lo hoje?',
      'Bem-vindo! Qual é sua dúvida?',
      'Oi! Estou aqui para ajudar. Em que posso ser útil?'
    ],
    thanks: [
      'De nada! Fico feliz em ajudar. Tem mais alguma coisa?',
      'Fico feliz em ter ajudado! Há mais algo que eu possa fazer?',
      'Por nada! Sempre disponível para ajudar!'
    ],
    help: [
      'Posso ajudá-lo em diversas áreas: responder perguntas, gerar ideias, explicar conceitos, auxiliar em projetos e muito mais. O que você gostaria de explorar?',
      'Estou disponível para: responder suas perguntas, sugerir ideias, esclarecer dúvidas, ajudar com planejamento e qualquer coisa que você precisar. Como posso começar?',
      'Posso ajudar com perguntas, brainstorming, explicações, planejamento e muito mais. Qual é o seu objetivo agora?'
    ]
  };

  private static keywordResponses: Record<string, (query: string) => string> = {
    programacao: (q) => `Sobre programação: Programação é a prática de criar instruções para computadores executarem tarefas específicas. Pode ser realizada em diversas linguagens como Python, JavaScript, Java, C++ e muitas outras. Cada linguagem tem suas características, vantagens e casos de uso ideais. Você está interessado em aprender uma linguagem específica ou entender um conceito particular?`,

    ia: (q) => `Sobre Inteligência Artificial: IA é a capacidade de máquinas executarem tarefas que normalmente requerem inteligência humana. Inclui aprendizado automático, processamento de linguagem natural, visão computacional e muitas outras aplicações. Está revolucionando setores como saúde, educação, finanças e muito mais. Quer saber mais sobre aplicações específicas?`,

    design: (q) => `Sobre Design: Design é a arte de criar soluções visuais funcionais e esteticamente agradáveis. Envolve principios de composição, tipografia, cores, usabilidade e experiência do usuário. Um bom design comunica claramente, atrai a atenção e resolve problemas de forma elegante. Qual aspecto do design te interessa?`,

    marketing: (q) => `Sobre Marketing: Marketing é o conjunto de estratégias e ações para promover produtos, serviços ou marcas. Inclui publicidade, marketing digital, redes sociais, email marketing e conteúdo. O objetivo é atrair clientes, gerar interesse e construir relacionamentos duradouros. Como posso ajudá-lo com sua estratégia?`,

    criatividade: (q) => `Sobre Criatividade: Criatividade é a capacidade de gerar ideias novas e originais. Pode ser desenvolvida através de brainstorming, exploração de diferentes perspectivas, questionamento de premissas e prática constante. Técnicas como mapas mentais, associações livres e desafios criativos ajudam a expandir o pensamento criativo. Como você gostaria de estimular sua criatividade?`,

    produtividade: (q) => `Sobre Produtividade: Produtividade é a capacidade de realizar mais tarefas de forma eficiente em menos tempo. Envolve planejamento, priorização, eliminação de distrações, organização e uso de ferramentas adequadas. Técnicas como Pomodoro, matriz de Eisenhower e automação podem aumentar significativamente sua produtividade. Qual é seu maior desafio?`
  };

  static generateResponse(userMessage: string): string {
    const message = userMessage.toLowerCase().trim();

    // Greetings
    if (this.matchesPattern(message, ['oi', 'olá', 'hey', 'opa', 'e aí'])) {
      return this.randomItem(this.commonResponses.greetings);
    }

    // Thanks
    if (this.matchesPattern(message, ['obrigado', 'valeu', 'thanks', 'muito bom', 'perfeito'])) {
      return this.randomItem(this.commonResponses.thanks);
    }

    // Help/What can you do
    if (this.matchesPattern(message, ['oq vc', 'o que você', 'como funciona', 'o que pode', 'me ajuda', 'em que pode'])) {
      return this.randomItem(this.commonResponses.help);
    }

    // Keyword-based responses
    for (const [keyword, responseBuilder] of Object.entries(this.keywordResponses)) {
      if (message.includes(keyword)) {
        return responseBuilder(message);
      }
    }

    // General questions
    if (this.matchesPattern(message, ['?', 'como', 'qual', 'por que', 'quando'])) {
      return this.generateGeneralAnswer(userMessage);
    }

    // Default intelligent response
    return this.generateContextualResponse(userMessage);
  }

  private static matchesPattern(text: string, patterns: string[]): boolean {
    return patterns.some(pattern => text.includes(pattern));
  }

  private static randomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private static generateGeneralAnswer(question: string): string {
    const questionLower = question.toLowerCase();

    if (questionLower.includes('para') || questionLower.includes('objetivo')) {
      return `Entendi sua pergunta sobre o objetivo. Para responder melhor, considere o contexto e o propósito específico. Geralmente, objetivos claros e bem definidos levam a resultados melhores. O que você espera alcançar exatamente?`;
    }

    if (questionLower.includes('como começar') || questionLower.includes('começar')) {
      return `Para começar: 1) Defina claramente seu objetivo e escopo, 2) Faça um planejamento inicial, 3) Identifique os recursos necessários, 4) Comece com pequenos passos, 5) Ajuste conforme aprende. Qual é o seu primeiro passo?`;
    }

    return `Ótima pergunta! A resposta depende de vários fatores relacionados ao contexto específico. De forma geral, a melhor abordagem é: 1) Entender o problema em profundidade, 2) Explorar diferentes soluções, 3) Considerar as consequências de cada opção, 4) Implementar e avaliar os resultados. Quer explorar algum aspecto específico?`;
  }

  private static generateContextualResponse(message: string): string {
    const responses = [
      `Entendi! "${message.substring(0, 50)}...". Essa é uma questão interessante. Considerando diferentes perspectivas, posso dizer que tudo depende do contexto e dos objetivos envolvidos. Poderia detalhar mais sobre o que você busca alcançar?`,
      `Que interessante! Sobre isso que você menciona: o importante é considerar todos os ângulos, desde a teoria até a prática real. Qual é especificamente a sua preocupação ou objetivo nessa situação?`,
      `Entendi sua questão. Essa é uma área onde há várias possibilidades. A melhor solução geralmente envolve: análise do problema, planejamento cuidadoso e execução metodica. Quer que aprofundemos em algum ponto?`
    ];
    return this.randomItem(responses);
  }
}

export class TextSummaryService {
  static generateSummary(text: string): string {
    if (!text || text.trim().length === 0) {
      return '';
    }

    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    if (sentences.length === 0) return text;

    // Calculate importance score for each sentence
    const scoredSentences = sentences.map((sentence, index) => {
      let score = 0;
      const cleanSentence = sentence.toLowerCase().trim();

      // Position bias (beginning sentences are often important)
      if (index < Math.ceil(sentences.length * 0.3)) score += 3;

      // Length bias (medium-length sentences are often important)
      const wordCount = cleanSentence.split(/\s+/).length;
      if (wordCount > 8 && wordCount < 25) score += 2;

      // Keyword boost
      const importantKeywords = ['importante', 'resultado', 'conclusão', 'significa', 'define', 'estabelece', 'prova', 'demonstra', 'mostra', 'principal', 'essencial'];
      importantKeywords.forEach(keyword => {
        if (cleanSentence.includes(keyword)) score += 2;
      });

      // Avoid weak sentences
      const weakPatterns = ['então', 'além disso', 'por outro lado', 'no entanto', 'portanto'];
      weakPatterns.forEach(pattern => {
        if (cleanSentence.startsWith(pattern)) score -= 1;
      });

      return { sentence: sentence.trim(), score };
    });

    // Select top sentences (around 30-40% of original)
    const summaryLength = Math.max(1, Math.ceil(sentences.length * 0.35));
    const topSentences = scoredSentences
      .sort((a, b) => b.score - a.score)
      .slice(0, summaryLength)
      .sort((a, b) => sentences.indexOf(a.sentence) - sentences.indexOf(b.sentence))
      .map(item => item.sentence.trim());

    return topSentences.join(' ').replace(/\s+/g, ' ');
  }
}

export class AutomaticWritingService {
  static generateText(topic: string, textType: string): string {
    const templates: Record<string, (topic: string) => string> = {
      conteudo: (topic) => this.generateBlogContent(topic),
      social: (topic) => this.generateSocialPost(topic),
      email: (topic) => this.generateEmailContent(topic),
      descricao: (topic) => this.generateProductDescription(topic),
      ideias: (topic) => this.generateIdeas(topic),
      explicacao: (topic) => this.generateExplanation(topic)
    };

    const generator = templates[textType] || templates.conteudo;
    return generator(topic);
  }

  private static generateBlogContent(topic: string): string {
    return `# ${topic}

${this.getIntroductionForTopic(topic)}

## O que é ${topic}?

${this.getDefinitionForTopic(topic)}

## Por que é importante?

${this.getImportanceForTopic(topic)}

## Principais benefícios

• Melhora significativa em resultados
• Aumenta eficiência e produtividade
• Oferece soluções práticas e testadas
• Permite melhor compreensão do tema
• Aplicável em diversos contextos

## Como começar

Para começar com ${topic}, siga estes passos:
1. Faça pesquisa e estude o fundamento
2. Identifique seus objetivos específicos
3. Planeje sua estratégia de implementação
4. Comece com pequenos testes
5. Avalie os resultados e ajuste

## Conclusão

${topic} é um tema relevante que oferece oportunidades significativas. Com o conhecimento adequado e execução prática, é possível alcançar excelentes resultados. Comece hoje mesmo e descubra todo o potencial!`;
  }

  private static generateSocialPost(topic: string): string {
    const templates = [
      `🚀 Sabia que ${topic} pode transformar seus resultados?\n\nMuitas pessoas não aproveitam o potencial dessa estratégia. A verdade é que, com a abordagem certa, é possível alcançar resultados incríveis.\n\nComece agora e veja a diferença! 💪`,
      `💡 Você está deixando oportunidades passar?\n\n${topic} é mais importante do que você imagina. Descubra como aproveitar ao máximo e transforme sua produtividade.\n\nVem com a gente nessa jornada! 🎯`,
      `✨ ${topic.toUpperCase()} - O que você precisa saber!\n\nNão é apenas sobre conhecimento, é sobre ação. Implementar ${topic} corretamente pode ser o diferencial que você procura.\n\nTe convida a descobrir mais? 👇`
    ];
    return templates[Math.floor(Math.random() * templates.length)];
  }

  private static generateEmailContent(topic: string): string {
    return `Assunto: Descubra como ${topic} pode transformar seus resultados

Olá,

Gostaria de compartilhar algo importante sobre ${topic}.

Muitas pessoas enfrentam desafios semelhantes, e a solução está mais próxima do que você imagina. ${this.getDefinitionForTopic(topic)}

Os benefícios são claros:
- Aumento de eficiência
- Melhores resultados
- Maior satisfação
- Aplicação prática

Gostaríamos de conversar mais sobre como isso pode beneficiá-lo especificamente.

Fico à disposição para esclarecimentos.

Atenciosamente,
Equipe de Especialistas`;
  }

  private static generateProductDescription(topic: string): string {
    return `${topic} - Descrição do Produto

Qualidade Premium Garantida

Sobre este produto:
${topic} é projetado para oferecer uma experiência superior, combinando funcionalidade e elegância. Cada detalhe foi cuidadosamente considerado para garantir satisfação máxima.

Características principais:
✓ Design moderno e intuitivo
✓ Fácil de usar
✓ Resultados comprovados
✓ Suporte completo incluído
✓ Garantia de qualidade

Benefícios:
• Economiza tempo e esforço
• Aumenta produtividade
• Oferece valor real
• Investimento que se paga

Por que escolher?
Porque qualidade e eficiência importam. Este produto foi desenvolvido com expertise para oferecer o melhor resultado possível.

Satisfação Garantida - Comece agora!`;
  }

  private static generateIdeas(topic: string): string {
    return `Ideias Criativas sobre: ${topic}

1. Estratégia inovadora
   Combine ${topic} com novas abordagens para criar soluções únicas que se destaquem no mercado.

2. Implementação prática
   Teste pequenas versões primeiro, aprenda com os resultados e expanda gradualmente.

3. Potencial de crescimento
   Identifique oportunidades de expansão e como ${topic} pode escalar seus resultados.

4. Diferencial competitivo
   Use ${topic} como vantagem competitiva para se destacar da concorrência.

5. Aplicação criativa
   Pense fora da caixa: como ${topic} pode ser aplicado de forma original no seu contexto?

6. Integração com outras estratégias
   Combine ${topic} com outras táticas para potencializar resultados exponencialmente.

7. Medição de sucesso
   Defina métricas claras para avaliar o impacto e ajustar sua estratégia continuamente.

8. Escalabilidade
   Estruture ${topic} de forma a ser facilmente escalável e reproduzível.`;
  }

  private static generateExplanation(topic: string): string {
    return `Explicação Completa: ${topic}

Conceito Fundamental:
${topic} refere-se a um conjunto de práticas, conhecimentos ou estratégias que visam [objetivo específico]. É um tema relevante que abrange múltiplas dimensões e aplicações.

Como Funciona:
A mecânica por trás de ${topic} envolve compreender os princípios fundamentais, aplicar técnicas comprovadas e adaptar conforme o contexto específico. O processo é iterativo: você aprende, implementa, avalia e melhora continuamente.

Etapas Principais:
1. Compreensão teórica dos conceitos
2. Identificação de oportunidades práticas
3. Planejamento e estruturação
4. Implementação inicial
5. Monitoramento e ajustes
6. Expansão e otimização

Aplicações Práticas:
${topic} pode ser aplicado em diversos contextos:
- Ambiente profissional
- Projetos pessoais
- Estratégias de negócio
- Desenvolvimento profissional
- Inovação contínua

Por Que Funciona:
A efetividade de ${topic} está baseada em princípios sólidos que foram testados e comprovados. Quando aplicado corretamente, produz resultados consistentes e mensuráveis.

Próximos Passos:
Para dominar ${topic}, comece estudando os fundamentos, pratique constantemente e busque feedback contínuo. O sucesso vem da combinação de conhecimento teórico com experiência prática.`;
  }

  private static getIntroductionForTopic(topic: string): string {
    const introductions = [
      `${topic} é um tema fundamental que afeta múltiplos aspectos da vida moderna. Compreender seus princípios é essencial para qualquer pessoa que busca crescimento e sucesso.`,
      `Nos últimos anos, ${topic} ganhou destaque significativo por suas aplicações práticas e resultados comprovados. Entender como funciona pode abrir novas possibilidades.`,
      `Se você já ouviu falar sobre ${topic} mas quer realmente entender, você veio ao lugar certo. Vamos explorar este tema de forma profunda e prática.`
    ];
    return introductions[Math.floor(Math.random() * introductions.length)];
  }

  private static getDefinitionForTopic(topic: string): string {
    const definitions = [
      `${topic} é a prática de aplicar conhecimento, estratégias e técnicas para alcançar resultados específicos. Envolve planejamento, execução e avaliação contínua.`,
      `${topic} compreende um conjunto de metodologias e abordagens que visam otimizar processos e melhorar resultados através de práticas comprovadas.`,
      `${topic} refere-se à aplicação inteligente de conceitos e técnicas para resolver problemas e criar oportunidades em diversos contextos.`
    ];
    return definitions[Math.floor(Math.random() * definitions.length)];
  }

  private static getImportanceForTopic(topic: string): string {
    return `${topic} é importante porque oferece uma estrutura clara para alcançar objetivos de forma eficiente. Ignorar sua importância significa perder oportunidades valiosas de crescimento e desenvolvimento. Profissionais e empresas que dominam ${topic} têm vantagem competitiva significativa.`;
  }
}

export class ImageGeneratorService {
  static generateVisualPrompt(description: string, style: string): string {
    const styleDescriptions: Record<string, string> = {
      realistic: 'fotografia profissional de alta qualidade, cinematic lighting, detalhado',
      artistic: 'pintura artística, traços expressivos, cores vibrantes, estilos mixtos',
      cartoon: 'ilustração cartoon, cores alegres, estilo animado, linhas suaves',
      scifi: 'ficção científica futurista, tecnologia avançada, neon glow, atmosfera surreal',
      vintage: 'estilo vintage, cores retro, filme antigo, nostalgia 70s-90s',
      minimalist: 'design minimalista, linhas limpas, cores sólidas, composição simples'
    };

    const stylePrefix = styleDescriptions[style] || styleDescriptions.realistic;

    return `Imagem digital: ${description}

Estilo visual: ${stylePrefix}

Características técnicas:
- Resolução: 1024x1024 pixels
- Profundidade: 32 bits
- Cores: RGB completo
- Qualidade: Premium

Composição:
- Foco principal: ${this.extractMainSubject(description)}
- Fundo: ${this.generateBackgroundDescription(description)}
- Iluminação: ${this.generateLightingDescription(style)}
- Perspectiva: ${this.generatePerspective(description)}

Elementos visuais adicionais:
${this.generateVisualElements(description, style)}

Resultado esperado:
Uma imagem profissional, visualmente atraente e fiel à descrição fornecida. Qualidade cinematográfica com todos os detalhes solicitados.`;
  }

  private static extractMainSubject(description: string): string {
    const words = description.split(' ');
    return words.slice(0, Math.min(5, words.length)).join(' ');
  }

  private static generateBackgroundDescription(description: string): string {
    const backgrounds = [
      'Fundo natural, desfocado, complementa o subject principal',
      'Ambiente contextualizado, coerente com o tema',
      'Fundo gradiente suave, destaca o elemento principal',
      'Cenário detalhado que enriquece a composição'
    ];
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
  }

  private static generateLightingDescription(style: string): string {
    const lightingStyles: Record<string, string> = {
      realistic: 'Iluminação natural difusa, sombras realistas',
      artistic: 'Iluminação dramática, contraste expressivo',
      cartoon: 'Iluminação clara e uniforme, sem sombras pesadas',
      scifi: 'Iluminação de neon futurista, efeitos luminosos',
      vintage: 'Iluminação quente, efeito grain de filme antigo',
      minimalist: 'Iluminação plana, sem sombras pronunciadas'
    };
    return lightingStyles[style] || lightingStyles.realistic;
  }

  private static generatePerspective(description: string): string {
    if (description.toLowerCase().includes('vista') || description.toLowerCase().includes('vista aérea')) {
      return 'Perspectiva aérea, visão de cima';
    }
    return 'Perspectiva frontal natural, profundidade clara';
  }

  private static generateVisualElements(description: string, style: string): string {
    return `• Cores dominantes: Harmonia visual coerente com o estilo ${style}
• Textura: Detalhes superficiais realistas
• Proporção: Composição equilibrada e agradável
• Contraste: Diferenciação clara entre elementos`;
  }
}

export class VideoGeneratorService {
  static generateVideoScript(topic: string, videoType: string): string {
    const templates: Record<string, (topic: string) => string> = {
      explainer: (topic) => this.generateExplainerScript(topic),
      marketing: (topic) => this.generateMarketingScript(topic),
      animation: (topic) => this.generateAnimationScript(topic),
      tutorial: (topic) => this.generateTutorialScript(topic),
      storytelling: (topic) => this.generateStorytellingScript(topic),
      social: (topic) => this.generateSocialVideoScript(topic)
    };

    const generator = templates[videoType] || templates.explainer;
    return generator(topic);
  }

  private static generateExplainerScript(topic: string): string {
    return `📹 ROTEIRO: VÍDEO EXPLICATIVO - ${topic}

===== CENA 1: ABERTURA (0-5 segundos) =====
Visual: Animação de apresentação dinâmica
Narração: "Quer entender ${topic} de forma simples e rápida?"
Ação: Título aparece com efeito visual

===== CENA 2: PROBLEMA (6-15 segundos) =====
Visual: Mostrar a dificuldade/desafio
Narração: "Muitas pessoas enfrentam dificuldades com ${topic}. Mas não precisa ser assim."
Ação: Transição suave

===== CENA 3: EXPLICAÇÃO (16-35 segundos) =====
Visual: Passo a passo com animações
Narração:
• Conceito: "${topic} é [definição clara]"
• Funcionamento: "Na prática, funciona assim..."
• Benefícios: "Você ganha [vantagens principais]"
Ação: Cada ponto aparece animado

===== CENA 4: APLICAÇÃO PRÁTICA (36-50 segundos) =====
Visual: Exemplos reais de uso
Narração: "Veja como aplicar: [exemplo 1], [exemplo 2]"
Ação: Demonstração clara

===== CENA 5: CTA - CHAMADA PARA AÇÃO (51-60 segundos) =====
Visual: Botões/Links de ação
Narração: "Aproveite agora e comece sua jornada com ${topic}"
Ação: Fade out com créditos`;
  }

  private static generateMarketingScript(topic: string): string {
    return `📹 ROTEIRO: VÍDEO DE MARKETING - ${topic}

===== CENA 1: HOOK - CAPTURAR ATENÇÃO (0-3 segundos) =====
Visual: Algo impactante e relevante
Narração: "Você está desperdiçando tempo?"
Ação: Corte rápido, movimento rápido

===== CENA 2: PROBLEMA (4-15 segundos) =====
Visual: Mostrar a frustração do público-alvo
Narração: "Aqui está o problema: ${topic} é complicado, demorado e confuso para a maioria."
Ação: Transição dramática

===== CENA 3: SOLUÇÃO (16-30 segundos) =====
Visual: Apresentação da solução com destaque
Narração: "Mas temos uma solução: ${topic} feito fácil!"
Ação: Efeitos visuais de destaque

===== CENA 4: DEMONSTRAÇÃO (31-45 segundos) =====
Visual: Como funciona, testimonial ou prova social
Narração: "Veja o resultado: [benefício 1], [benefício 2], [benefício 3]"
Ação: Mostra transformação

===== CENA 5: CTA FORTE (46-60 segundos) =====
Visual: Botão/Link/Oferta especial
Narração: "Não perca essa oportunidade! Clique agora e aproveite ${topic}"
Ação: Final impactante`;
  }

  private static generateAnimationScript(topic: string): string {
    return `📹 ROTEIRO: VÍDEO ANIMADO - ${topic}

===== ABERTURA =====
Cena: Animação de entrada suave
Efeito: Transição de cores e formas
Duração: 3-5 segundos

===== ATO 1 - APRESENTAÇÃO =====
Narração: "Bem-vindo ao mundo de ${topic}"
Visual: Personagem ou ícone representativo
Ação: Movimento fluido, agradável

===== ATO 2 - DESENVOLVIMENTO =====
Narração: "Aqui é como funciona..."
Visual: Sequência de animações explicativas
Ação: Cada elemento entra e interage

===== ATO 3 - CLÍMAX =====
Narração: "E o melhor resultado?"
Visual: Animação impressionante, transformação
Ação: Efeitos especiais animados

===== ATO 4 - CONCLUSÃO =====
Narração: "Descubra ${topic} hoje mesmo!"
Visual: Logo e informações finais
Ação: Transição suave para fade out`;
  }

  private static generateTutorialScript(topic: string): string {
    return `📹 ROTEIRO: TUTORIAL - ${topic}

===== INTRODUÇÃO (0-10 segundos) =====
Narração: "Neste tutorial, você aprenderá ${topic} passo a passo"
Visual: Tela ou demonstração
Ação: Apresentação clara

===== PASSO 1 (11-25 segundos) =====
Narração: "Primeiro, você precisa..."
Visual: Demonstração clara do passo 1
Ação: Legenda com instruções

===== PASSO 2 (26-40 segundos) =====
Narração: "Em seguida, faça..."
Visual: Demonstração clara do passo 2
Ação: Mostra resultado parcial

===== PASSO 3 (41-55 segundos) =====
Narração: "Finalmente, complete com..."
Visual: Demonstração clara do passo 3
Ação: Mostra resultado final

===== CONCLUSÃO (56-60 segundos) =====
Narração: "Pronto! Você domina ${topic}. Parabéns!"
Visual: Resultado final alcançado
Ação: Botão de compartilhamento/inscrição`;
  }

  private static generateStorytellingScript(topic: string): string {
    return `📹 ROTEIRO: STORYTELLING - ${topic}

===== ATOS E CENAS =====

ABERTURA - O CHAMADO
"Tudo começou quando..."
Visual: Estabelecer cenário, personagem
Ação: Criar conexão emocional

CONFLITO
"Mas então surgiu um desafio..."
Visual: Mostrar o problema/obstáculo
Ação: Aumentar tensão narrativa

JORNADA
"E assim começou a jornada com ${topic}..."
Visual: Sequência de eventos transformadores
Ação: Movimento, descoberta, aprendizado

TRANSFORMAÇÃO
"Tudo mudou quando..."
Visual: Virada decisiva da história
Ação: Momento épico

RESOLUÇÃO
"Agora ${topic} é parte da história"
Visual: Novo estado, melhor situação
Ação: Satisfação visual

MENSAGEM
"E você pode viver essa história também"
Visual: Inspiração final
Ação: Convite para jornada similar`;
  }

  private static generateSocialVideoScript(topic: string): string {
    return `📹 ROTEIRO: VÍDEO PARA REDES SOCIAIS - ${topic}

===== FÓRMULA SUCESSO REDES SOCIAIS =====

HOOK (0-2 segundos) - IMPACTANTE
Visual: Algo completamente inesperado
Narração: Pergunta provocadora sobre ${topic}
Ação: Stop scroll - PRENDA A ATENÇÃO

LOOP DE CURIOSIDADE (3-10 segundos)
Narração: "Espera aí, vai piorar..."
Visual: Conteúdo relevante e envolvente
Ação: Mantenha o espectador assistindo

VALOR (11-25 segundos)
Narração: "Então aprendi ${topic} e mudou tudo..."
Visual: Dica, hack, insight valioso
Ação: Mostre o valor

CTA - CHAMADA PARA AÇÃO (26-30 segundos)
Narração: "Me segue para mais conteúdo sobre ${topic}"
Visual: Botão de follow, like, share
Ação: Estímulo à ação imediata

ELEMENTOS-CHAVE:
✓ Dinâmico e rápido
✓ Cores vibrantes
✓ Legendas claras
✓ Música envolvente
✓ Formato vertical (9:16)`;
  }
}
