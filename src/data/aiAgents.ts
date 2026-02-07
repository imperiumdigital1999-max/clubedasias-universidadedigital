export interface AIAgent {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  accent: string;
}

export const aiAgents: AIAgent[] = [
  {
    id: 'chat-ia',
    name: 'Chat de IA',
    description: 'Converse com um assistente inteligente para tirar dúvidas, gerar ideias e obter respostas rápidas.',
    icon: 'MessageCircle',
    color: 'from-blue-600 to-cyan-600',
    accent: 'blue'
  },
  {
    id: 'resumo-texto',
    name: 'Resumo de Texto',
    description: 'Cole qualquer texto longo e receba um resumo claro e objetivo em segundos.',
    icon: 'FileText',
    color: 'from-emerald-600 to-teal-600',
    accent: 'emerald'
  },
  {
    id: 'escrita-automatica',
    name: 'Escrita Automática',
    description: 'Gere textos automaticamente para conteúdos, mensagens, ideias ou explicações.',
    icon: 'PenTool',
    color: 'from-purple-600 to-pink-600',
    accent: 'purple'
  },
  {
    id: 'gerador-imagens',
    name: 'Gerador de Imagens',
    description: 'Crie imagens a partir de descrições em texto, de forma simples e rápida.',
    icon: 'Image',
    color: 'from-orange-600 to-rose-600',
    accent: 'orange'
  },
  {
    id: 'gerador-videos',
    name: 'Gerador de Vídeos',
    description: 'Gere vídeos a partir de ideias, textos ou comandos simples.',
    icon: 'Video',
    color: 'from-red-600 to-orange-600',
    accent: 'red'
  }
];
