export interface Automation {
  id: string;
  name: string;
  fileType: string;
  downloadUrl?: string;
  categoryId: string;
}

export const automationsList: Automation[] = [
  {
    id: 'airtable-1',
    name: 'AI Agent for project management and meetings with Airtable and Fireflies',
    fileType: 'Arquivo de texto',
    categoryId: 'airtable'
  },
  {
    id: 'airtable-2',
    name: 'AI Agent to chat with Airtable and analyze data',
    fileType: 'Arquivo de texto',
    categoryId: 'airtable'
  },
  {
    id: 'airtable-3',
    name: 'Get Airtable data via AI and Obsidian Notes',
    fileType: 'Arquivo de texto',
    categoryId: 'airtable'
  },
  {
    id: 'airtable-4',
    name: 'Handling Job Application Submissions with AI and n8n Forms',
    fileType: 'Arquivo de texto',
    categoryId: 'airtable'
  },
  {
    id: 'airtable-5',
    name: 'vAssistant for Hubspot Chat using OpenAI and Airtable',
    fileType: 'Arquivo de texto',
    categoryId: 'airtable'
  },
  {
    id: 'airtable-6',
    name: 'Sync Airtable records with Google Calendar',
    fileType: 'Arquivo de texto',
    categoryId: 'airtable'
  },
  {
    id: 'airtable-7',
    name: 'Create tasks in Airtable from email',
    fileType: 'Arquivo de texto',
    categoryId: 'airtable'
  },
  {
    id: 'airtable-8',
    name: 'Generate reports from Airtable with AI',
    fileType: 'Arquivo de texto',
    categoryId: 'airtable'
  },
  {
    id: 'whatsapp-1',
    name: 'Chatbot de atendimento automático com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'whatsapp'
  },
  {
    id: 'whatsapp-2',
    name: 'Envio de mensagens em massa personalizadas',
    fileType: 'Arquivo de texto',
    categoryId: 'whatsapp'
  },
  {
    id: 'whatsapp-3',
    name: 'Integração WhatsApp com CRM',
    fileType: 'Arquivo de texto',
    categoryId: 'whatsapp'
  },
  {
    id: 'whatsapp-4',
    name: 'Notificações automáticas por WhatsApp',
    fileType: 'Arquivo de texto',
    categoryId: 'whatsapp'
  },
  {
    id: 'whatsapp-5',
    name: 'Agendamento de mensagens com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'whatsapp'
  },
  {
    id: 'whatsapp-6',
    name: 'Análise de sentimento em conversas',
    fileType: 'Arquivo de texto',
    categoryId: 'whatsapp'
  },
  {
    id: 'openai-llms-1',
    name: 'Geração de conteúdo com GPT-4',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'openai-llms-2',
    name: 'Análise de documentos com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'openai-llms-3',
    name: 'Assistente de código com ChatGPT',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'openai-llms-4',
    name: 'Resumo automático de textos',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'openai-llms-5',
    name: 'Tradução inteligente multilíngue',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'openai-llms-6',
    name: 'Geração de embeddings para busca semântica',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'openai-llms-7',
    name: 'Chatbot personalizado com RAG',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'openai-llms-8',
    name: 'Classificação de textos com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'openai-llms-9',
    name: 'Extração de dados estruturados',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'openai-llms-10',
    name: 'Moderação de conteúdo com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'openai-llms-11',
    name: 'Geração de imagens com DALL-E',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'openai-llms-12',
    name: 'Análise de sentimento avançada',
    fileType: 'Arquivo de texto',
    categoryId: 'openai-llms'
  },
  {
    id: 'gmail-emails-1',
    name: 'Respostas automáticas inteligentes',
    fileType: 'Arquivo de texto',
    categoryId: 'gmail-emails'
  },
  {
    id: 'gmail-emails-2',
    name: 'Organização automática de emails',
    fileType: 'Arquivo de texto',
    categoryId: 'gmail-emails'
  },
  {
    id: 'gmail-emails-3',
    name: 'Extração de dados de emails',
    fileType: 'Arquivo de texto',
    categoryId: 'gmail-emails'
  },
  {
    id: 'gmail-emails-4',
    name: 'Envio de emails personalizados em massa',
    fileType: 'Arquivo de texto',
    categoryId: 'gmail-emails'
  },
  {
    id: 'gmail-emails-5',
    name: 'Integração Gmail com CRM',
    fileType: 'Arquivo de texto',
    categoryId: 'gmail-emails'
  },
  {
    id: 'gmail-emails-6',
    name: 'Notificações de emails importantes',
    fileType: 'Arquivo de texto',
    categoryId: 'gmail-emails'
  },
  {
    id: 'gmail-emails-7',
    name: 'Backup automático de emails',
    fileType: 'Arquivo de texto',
    categoryId: 'gmail-emails'
  },
  {
    id: 'gmail-emails-8',
    name: 'Análise de campanhas de email',
    fileType: 'Arquivo de texto',
    categoryId: 'gmail-emails'
  },
  {
    id: 'gmail-emails-9',
    name: 'Agendamento de emails com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'gmail-emails'
  },
  {
    id: 'gmail-emails-10',
    name: 'Filtros inteligentes de spam',
    fileType: 'Arquivo de texto',
    categoryId: 'gmail-emails'
  },
  {
    id: 'google-drive-sheets-1',
    name: 'Sincronização automática de planilhas',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-2',
    name: 'Geração de relatórios com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-3',
    name: 'Backup automático de arquivos',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-4',
    name: 'Análise de dados com Python',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-5',
    name: 'Importação de dados de APIs',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-6',
    name: 'Criação de dashboards automáticos',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-7',
    name: 'Organização inteligente de arquivos',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-8',
    name: 'Conversão de formatos de documentos',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-9',
    name: 'Extração de dados de PDFs para Sheets',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-10',
    name: 'Validação automática de dados',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-11',
    name: 'Notificações de alterações em arquivos',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-12',
    name: 'Integração Sheets com banco de dados',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-13',
    name: 'Atualização em tempo real de dados',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-14',
    name: 'Geração de gráficos automáticos',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'google-drive-sheets-15',
    name: 'Consolidação de múltiplas planilhas',
    fileType: 'Arquivo de texto',
    categoryId: 'google-drive-sheets'
  },
  {
    id: 'instagram-twitter-1',
    name: 'Agendamento de posts com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'instagram-twitter'
  },
  {
    id: 'instagram-twitter-2',
    name: 'Análise de engajamento',
    fileType: 'Arquivo de texto',
    categoryId: 'instagram-twitter'
  },
  {
    id: 'instagram-twitter-3',
    name: 'Resposta automática a comentários',
    fileType: 'Arquivo de texto',
    categoryId: 'instagram-twitter'
  },
  {
    id: 'instagram-twitter-4',
    name: 'Geração de legendas com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'instagram-twitter'
  },
  {
    id: 'instagram-twitter-5',
    name: 'Monitoramento de menções',
    fileType: 'Arquivo de texto',
    categoryId: 'instagram-twitter'
  },
  {
    id: 'instagram-twitter-6',
    name: 'Análise de concorrentes',
    fileType: 'Arquivo de texto',
    categoryId: 'instagram-twitter'
  },
  {
    id: 'instagram-twitter-7',
    name: 'Relatórios automáticos de métricas',
    fileType: 'Arquivo de texto',
    categoryId: 'instagram-twitter'
  },
  {
    id: 'instagram-twitter-8',
    name: 'Hashtags inteligentes com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'instagram-twitter'
  },
  {
    id: 'instagram-twitter-9',
    name: 'Cross-posting entre plataformas',
    fileType: 'Arquivo de texto',
    categoryId: 'instagram-twitter'
  },
  {
    id: 'integracoes-1',
    name: 'Webhook para integração de sistemas',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-2',
    name: 'Sincronização entre CRMs',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-3',
    name: 'Pipeline de dados automatizado',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-4',
    name: 'API Gateway personalizado',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-5',
    name: 'Integração com sistemas legados',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-6',
    name: 'Transformação de dados entre APIs',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-7',
    name: 'Monitoramento de integrações',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-8',
    name: 'Retry automático de falhas',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-9',
    name: 'Log e auditoria de integrações',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-10',
    name: 'Orquestração de microsserviços',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-11',
    name: 'Integração com plataformas de pagamento',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-12',
    name: 'Sincronização de estoque em tempo real',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-13',
    name: 'Integração com ERPs',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-14',
    name: 'Automação de fluxos entre departamentos',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-15',
    name: 'API rate limiting e cache',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-16',
    name: 'Integração com sistemas de terceiros',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-17',
    name: 'Event-driven architecture',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-18',
    name: 'Message queue processing',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-19',
    name: 'Integração com blockchain',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'integracoes-20',
    name: 'Multi-tenant integration hub',
    fileType: 'Arquivo de texto',
    categoryId: 'integracoes'
  },
  {
    id: 'pesquisa-analise-ia-1',
    name: 'Web scraping inteligente',
    fileType: 'Arquivo de texto',
    categoryId: 'pesquisa-analise-ia'
  },
  {
    id: 'pesquisa-analise-ia-2',
    name: 'Análise de concorrência automatizada',
    fileType: 'Arquivo de texto',
    categoryId: 'pesquisa-analise-ia'
  },
  {
    id: 'pesquisa-analise-ia-3',
    name: 'Pesquisa de mercado com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'pesquisa-analise-ia'
  },
  {
    id: 'pesquisa-analise-ia-4',
    name: 'Monitoramento de notícias e tendências',
    fileType: 'Arquivo de texto',
    categoryId: 'pesquisa-analise-ia'
  },
  {
    id: 'pesquisa-analise-ia-5',
    name: 'Extração de dados de sites',
    fileType: 'Arquivo de texto',
    categoryId: 'pesquisa-analise-ia'
  },
  {
    id: 'pesquisa-analise-ia-6',
    name: 'Análise preditiva com machine learning',
    fileType: 'Arquivo de texto',
    categoryId: 'pesquisa-analise-ia'
  },
  {
    id: 'pesquisa-analise-ia-7',
    name: 'Busca semântica avançada',
    fileType: 'Arquivo de texto',
    categoryId: 'pesquisa-analise-ia'
  },
  {
    id: 'pdfs-documentos-1',
    name: 'Extração de texto de PDFs',
    fileType: 'Arquivo de texto',
    categoryId: 'pdfs-documentos'
  },
  {
    id: 'pdfs-documentos-2',
    name: 'Análise de contratos com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'pdfs-documentos'
  },
  {
    id: 'pdfs-documentos-3',
    name: 'Geração automática de documentos',
    fileType: 'Arquivo de texto',
    categoryId: 'pdfs-documentos'
  },
  {
    id: 'pdfs-documentos-4',
    name: 'OCR e processamento de imagens',
    fileType: 'Arquivo de texto',
    categoryId: 'pdfs-documentos'
  },
  {
    id: 'pdfs-documentos-5',
    name: 'Conversão de documentos',
    fileType: 'Arquivo de texto',
    categoryId: 'pdfs-documentos'
  },
  {
    id: 'pdfs-documentos-6',
    name: 'Indexação de documentos para busca',
    fileType: 'Arquivo de texto',
    categoryId: 'pdfs-documentos'
  },
  {
    id: 'pdfs-documentos-7',
    name: 'Assinatura digital automatizada',
    fileType: 'Arquivo de texto',
    categoryId: 'pdfs-documentos'
  },
  {
    id: 'pdfs-documentos-8',
    name: 'Compressão e otimização de PDFs',
    fileType: 'Arquivo de texto',
    categoryId: 'pdfs-documentos'
  },
  {
    id: 'pdfs-documentos-9',
    name: 'Mesclagem de múltiplos documentos',
    fileType: 'Arquivo de texto',
    categoryId: 'pdfs-documentos'
  },
  {
    id: 'pdfs-documentos-10',
    name: 'Extração de tabelas com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'pdfs-documentos'
  },
  {
    id: 'pdfs-documentos-11',
    name: 'Validação de documentos',
    fileType: 'Arquivo de texto',
    categoryId: 'pdfs-documentos'
  },
  {
    id: 'notion-1',
    name: 'Sincronização com banco de dados',
    fileType: 'Arquivo de texto',
    categoryId: 'notion'
  },
  {
    id: 'notion-2',
    name: 'Criação automática de páginas',
    fileType: 'Arquivo de texto',
    categoryId: 'notion'
  },
  {
    id: 'notion-3',
    name: 'Backup de workspace',
    fileType: 'Arquivo de texto',
    categoryId: 'notion'
  },
  {
    id: 'notion-4',
    name: 'Integração com calendário',
    fileType: 'Arquivo de texto',
    categoryId: 'notion'
  },
  {
    id: 'notion-5',
    name: 'Geração de relatórios automáticos',
    fileType: 'Arquivo de texto',
    categoryId: 'notion'
  },
  {
    id: 'notion-6',
    name: 'Importação de dados externos',
    fileType: 'Arquivo de texto',
    categoryId: 'notion'
  },
  {
    id: 'notion-7',
    name: 'Notificações personalizadas',
    fileType: 'Arquivo de texto',
    categoryId: 'notion'
  },
  {
    id: 'notion-8',
    name: 'Gestão de tarefas automatizada',
    fileType: 'Arquivo de texto',
    categoryId: 'notion'
  },
  {
    id: 'slack-1',
    name: 'Bot de notificações inteligentes',
    fileType: 'Arquivo de texto',
    categoryId: 'slack'
  },
  {
    id: 'slack-2',
    name: 'Integração com sistemas externos',
    fileType: 'Arquivo de texto',
    categoryId: 'slack'
  },
  {
    id: 'slack-3',
    name: 'Assistente virtual com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'slack'
  },
  {
    id: 'slack-4',
    name: 'Automação de workflows',
    fileType: 'Arquivo de texto',
    categoryId: 'slack'
  },
  {
    id: 'slack-5',
    name: 'Relatórios automáticos de status',
    fileType: 'Arquivo de texto',
    categoryId: 'slack'
  },
  {
    id: 'slack-6',
    name: 'Monitoramento de alertas',
    fileType: 'Arquivo de texto',
    categoryId: 'slack'
  },
  {
    id: 'telegram-1',
    name: 'Bot de atendimento ao cliente',
    fileType: 'Arquivo de texto',
    categoryId: 'telegram'
  },
  {
    id: 'telegram-2',
    name: 'Notificações de sistemas',
    fileType: 'Arquivo de texto',
    categoryId: 'telegram'
  },
  {
    id: 'telegram-3',
    name: 'Integração com canais e grupos',
    fileType: 'Arquivo de texto',
    categoryId: 'telegram'
  },
  {
    id: 'telegram-4',
    name: 'Comandos personalizados com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'telegram'
  },
  {
    id: 'telegram-5',
    name: 'Automação de mensagens agendadas',
    fileType: 'Arquivo de texto',
    categoryId: 'telegram'
  },
  {
    id: 'discord-1',
    name: 'Bot moderador automático',
    fileType: 'Arquivo de texto',
    categoryId: 'discord'
  },
  {
    id: 'discord-2',
    name: 'Sistema de níveis e recompensas',
    fileType: 'Arquivo de texto',
    categoryId: 'discord'
  },
  {
    id: 'discord-3',
    name: 'Integração com APIs externas',
    fileType: 'Arquivo de texto',
    categoryId: 'discord'
  },
  {
    id: 'discord-4',
    name: 'Assistente de comunidade com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'discord'
  },
  {
    id: 'wordpress-1',
    name: 'Publicação automática de posts',
    fileType: 'Arquivo de texto',
    categoryId: 'wordpress'
  },
  {
    id: 'wordpress-2',
    name: 'Backup automático de site',
    fileType: 'Arquivo de texto',
    categoryId: 'wordpress'
  },
  {
    id: 'wordpress-3',
    name: 'Otimização de SEO com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'wordpress'
  },
  {
    id: 'wordpress-4',
    name: 'Geração de conteúdo com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'wordpress'
  },
  {
    id: 'wordpress-5',
    name: 'Sincronização com redes sociais',
    fileType: 'Arquivo de texto',
    categoryId: 'wordpress'
  },
  {
    id: 'wordpress-6',
    name: 'Monitoramento de segurança',
    fileType: 'Arquivo de texto',
    categoryId: 'wordpress'
  },
  {
    id: 'wordpress-7',
    name: 'Gestão de comentários com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'wordpress'
  },
  {
    id: 'rh-recrutamento-1',
    name: 'Triagem de currículos com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'rh-recrutamento'
  },
  {
    id: 'rh-recrutamento-2',
    name: 'Agendamento automático de entrevistas',
    fileType: 'Arquivo de texto',
    categoryId: 'rh-recrutamento'
  },
  {
    id: 'rh-recrutamento-3',
    name: 'Envio de feedbacks automatizado',
    fileType: 'Arquivo de texto',
    categoryId: 'rh-recrutamento'
  },
  {
    id: 'rh-recrutamento-4',
    name: 'Análise de fit cultural',
    fileType: 'Arquivo de texto',
    categoryId: 'rh-recrutamento'
  },
  {
    id: 'rh-recrutamento-5',
    name: 'Onboarding automatizado',
    fileType: 'Arquivo de texto',
    categoryId: 'rh-recrutamento'
  },
  {
    id: 'formularios-1',
    name: 'Processamento de respostas com IA',
    fileType: 'Arquivo de texto',
    categoryId: 'formularios'
  },
  {
    id: 'formularios-2',
    name: 'Validação automática de dados',
    fileType: 'Arquivo de texto',
    categoryId: 'formularios'
  },
  {
    id: 'formularios-3',
    name: 'Integração com CRM',
    fileType: 'Arquivo de texto',
    categoryId: 'formularios'
  },
  {
    id: 'formularios-4',
    name: 'Notificações de novos envios',
    fileType: 'Arquivo de texto',
    categoryId: 'formularios'
  },
  {
    id: 'formularios-5',
    name: 'Análise de sentimento nas respostas',
    fileType: 'Arquivo de texto',
    categoryId: 'formularios'
  },
  {
    id: 'formularios-6',
    name: 'Geração de relatórios automáticos',
    fileType: 'Arquivo de texto',
    categoryId: 'formularios'
  },
  {
    id: 'formularios-7',
    name: 'Follow-up automatizado',
    fileType: 'Arquivo de texto',
    categoryId: 'formularios'
  },
  {
    id: 'formularios-8',
    name: 'Roteamento inteligente de leads',
    fileType: 'Arquivo de texto',
    categoryId: 'formularios'
  },
  {
    id: 'banco-dados-1',
    name: 'Sincronização entre bancos',
    fileType: 'Arquivo de texto',
    categoryId: 'banco-dados'
  },
  {
    id: 'banco-dados-2',
    name: 'Backup automático diário',
    fileType: 'Arquivo de texto',
    categoryId: 'banco-dados'
  },
  {
    id: 'banco-dados-3',
    name: 'Migração de dados',
    fileType: 'Arquivo de texto',
    categoryId: 'banco-dados'
  },
  {
    id: 'banco-dados-4',
    name: 'Limpeza de dados duplicados',
    fileType: 'Arquivo de texto',
    categoryId: 'banco-dados'
  },
  {
    id: 'banco-dados-5',
    name: 'Monitoramento de performance',
    fileType: 'Arquivo de texto',
    categoryId: 'banco-dados'
  },
  {
    id: 'banco-dados-6',
    name: 'Auditoria de alterações',
    fileType: 'Arquivo de texto',
    categoryId: 'banco-dados'
  },
  {
    id: 'banco-dados-7',
    name: 'ETL automatizado',
    fileType: 'Arquivo de texto',
    categoryId: 'banco-dados'
  },
  {
    id: 'banco-dados-8',
    name: 'Validação de integridade',
    fileType: 'Arquivo de texto',
    categoryId: 'banco-dados'
  },
  {
    id: 'banco-dados-9',
    name: 'Replicação de dados em tempo real',
    fileType: 'Arquivo de texto',
    categoryId: 'banco-dados'
  },
  {
    id: 'outros-1',
    name: 'Automação de tarefas repetitivas',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  },
  {
    id: 'outros-2',
    name: 'Integração com IoT',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  },
  {
    id: 'outros-3',
    name: 'Monitoramento de servidores',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  },
  {
    id: 'outros-4',
    name: 'Geração de QR codes',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  },
  {
    id: 'outros-5',
    name: 'Encurtador de URLs',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  },
  {
    id: 'outros-6',
    name: 'Sistema de filas',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  },
  {
    id: 'outros-7',
    name: 'Conversão de moedas automática',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  },
  {
    id: 'outros-8',
    name: 'Clima e previsões meteorológicas',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  },
  {
    id: 'outros-9',
    name: 'Tradução de idiomas',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  },
  {
    id: 'outros-10',
    name: 'Geração de certificados',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  },
  {
    id: 'outros-11',
    name: 'Calculadora de métricas de negócio',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  },
  {
    id: 'outros-12',
    name: 'Sistema de lembretes inteligentes',
    fileType: 'Arquivo de texto',
    categoryId: 'outros'
  }
];

export const getAutomationsByCategory = (categoryId: string): Automation[] => {
  return automationsList.filter(automation => automation.categoryId === categoryId);
};
