export interface AutomationCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  automationCount: number;
}

export const automationCategories: AutomationCategory[] = [
  {
    id: 'airtable',
    name: 'Airtable',
    description: 'Automações com Airtable, project management e análise de dados',
    icon: '📊',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/20',
    automationCount: 8
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    description: 'Chatbots com IA, automação de mensagens e atendimento',
    icon: '💬',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/20',
    automationCount: 6
  },
  {
    id: 'openai-llms',
    name: 'OpenAI e LLMs',
    description: 'Integrações com ChatGPT, GPT-4 e outros modelos de IA',
    icon: '🤖',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/20',
    automationCount: 12
  },
  {
    id: 'gmail-emails',
    name: 'Gmail e Emails',
    description: 'Automação de emails, templates e respostas inteligentes',
    icon: '📧',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/20',
    automationCount: 10
  },
  {
    id: 'google-drive-sheets',
    name: 'Google Drive e Sheets',
    description: 'Automações com planilhas, documentos e armazenamento',
    icon: '📑',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/20',
    automationCount: 15
  },
  {
    id: 'instagram-twitter',
    name: 'Instagram & Twitter',
    description: 'Automações para redes sociais e engajamento',
    icon: '📱',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/20',
    automationCount: 9
  },
  {
    id: 'integracoes',
    name: 'Integrações',
    description: 'Webhooks, APIs e cadeias de apps complexas',
    icon: '🔗',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/20',
    automationCount: 20
  },
  {
    id: 'pesquisa-analise-ia',
    name: 'Pesquisa & Análise com IA',
    description: 'Web scraping, análise de dados e pesquisas automatizadas',
    icon: '🔍',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/20',
    automationCount: 7
  },
  {
    id: 'pdfs-documentos',
    name: 'PDFs e Documentos',
    description: 'Processamento de documentos, extração de dados',
    icon: '📄',
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/20',
    automationCount: 11
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'Automações com Notion, bases de conhecimento e tarefas',
    icon: '📓',
    iconColor: 'text-slate-400',
    iconBg: 'bg-slate-500/20',
    automationCount: 8
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Notificações, bots e integrações com Slack',
    icon: '💼',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/20',
    automationCount: 6
  },
  {
    id: 'telegram',
    name: 'Telegram',
    description: 'Bots e automações para Telegram',
    icon: '✈️',
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-500/20',
    automationCount: 5
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Bots e automações para servidores Discord',
    icon: '🎮',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/20',
    automationCount: 4
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    description: 'Automações para sites WordPress',
    icon: '🌐',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/20',
    automationCount: 7
  },
  {
    id: 'rh-recrutamento',
    name: 'RH e Recrutamento',
    description: 'Processos seletivos, triagem e gestão de talentos',
    icon: '👥',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/20',
    automationCount: 5
  },
  {
    id: 'formularios',
    name: 'Formulários',
    description: 'Captura de dados, validação e processamento de forms',
    icon: '📝',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/20',
    automationCount: 8
  },
  {
    id: 'banco-dados',
    name: 'Banco de Dados',
    description: 'Integrações com MySQL, PostgreSQL, MongoDB e mais',
    icon: '🗄️',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/20',
    automationCount: 9
  },
  {
    id: 'outros',
    name: 'Outros',
    description: 'Diversas automações úteis para seu negócio',
    icon: '⚙️',
    iconColor: 'text-slate-400',
    iconBg: 'bg-slate-500/20',
    automationCount: 12
  }
];

export const getTotalAutomations = (): number => {
  return automationCategories.reduce((total, category) => total + category.automationCount, 0);
};

export const getTotalCategories = (): number => {
  return automationCategories.length;
};
