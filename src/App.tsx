import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BottomNavigation from './components/BottomNavigation';
import Dashboard from './components/Dashboard';
import CategoriesView from './components/CategoriesView';
import CategoryView from './components/CategoryView';
import FavoritesView from './components/FavoritesView';
import RecentView from './components/RecentView';
import ToolDetailView from './components/ToolDetailView';
import TasksView from './components/TasksView';
import TaskDetailView from './components/TaskDetailView';
import IAsProView from './components/IAsProView';
import CursosView from './components/CursosView';
import CourseDetailView from './components/CourseDetailView';
import PromptsView from './components/PromptsView';
import GPTsPersonalizadosView from './components/GPTsPersonalizadosView';
import ViralEditVO3View from './components/ViralEditVO3View';
import AulasViralEditView from './components/AulasViralEditView';
import CreditosGratuitosView from './components/CreditosGratuitosView';
import VEO3View from './components/VEO3View';
import AiAgentsView from './components/AiAgentsView';
import ChatAIAgent from './components/agents/ChatAIAgent';
import TextSummaryAgent from './components/agents/TextSummaryAgent';
import AutomaticWritingAgent from './components/agents/AutomaticWritingAgent';
import VideoGeneratorAgent from './components/agents/VideoGeneratorAgent';
import DestaquesDaSemanaView from './components/DestaquesDaSemanaView';
import LoginView from './components/LoginView';
import NucleoVideoView from './components/NucleoVideoView';
import NucleoEscritaView from './components/NucleoEscritaView';
import NucleoImagensView from './components/NucleoImagensView';
import NucleoAutomacaoView from './components/NucleoAutomacaoView';
import PlaceholderAgent from './components/agents/PlaceholderAgent';
import AgentDetailView from './components/AgentDetailView';
import AgentePage from './components/AgentePage';
import AgentLandingPage from './components/AgentLandingPage';
import AgentPromptsListView from './components/AgentPromptsListView';
import PromptDetailView from './components/PromptDetailView';
import UpgradeModal from './components/UpgradeModal';
import { getAgentData } from './data/agentsData';
import { ViewMode, AITool, TaskPlatform, Course } from './types';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<ViewMode>('inicio');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<TaskPlatform | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(null);
  const [showAgentFullPage, setShowAgentFullPage] = useState(false);
  const [userPlan, setUserPlan] = useState<'free' | 'pro'>('free');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('clube_ias_logged_in') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleViewChange = (view: ViewMode) => {
    setCurrentView(view);
    if (view === 'inicio') {
      setSelectedCategory('');
      setSelectedTool(null);
      setSelectedPlatform(null);
      setSelectedCourse(null);
      setSelectedAgentId(null);
      setShowAgentFullPage(false);
    }
  };

  const handleBackToDashboard = () => {
    setCurrentView('inicio');
    setSelectedCategory('');
    setSelectedTool(null);
    setSelectedPlatform(null);
    setSelectedCourse(null);
    setSelectedAgentId(null);
    setShowAgentFullPage(false);
  };

  const handleAgentSelect = (agentId: string) => {
    setSelectedAgentId(agentId);
    setShowAgentFullPage(false);
    setCurrentView(agentId as ViewMode);
  };

  const handleAccessAgentFullPage = () => {
    setShowAgentFullPage(true);
  };

  const handleBackFromAgent = () => {
    setSelectedAgentId(null);
    setSelectedPromptId(null);
    setShowAgentFullPage(false);
    setCurrentView('inicio');
  };

  const handlePromptSelect = (promptId: string) => {
    setSelectedPromptId(promptId);
  };

  const handleBackFromPrompt = () => {
    setSelectedPromptId(null);
  };

  const handleToolSelect = (tool: AITool) => {
    setSelectedTool(tool);
    setCurrentView('tool-detail');
  };

  const handlePlatformSelect = (platform: TaskPlatform) => {
    setSelectedPlatform(platform);
    setCurrentView('task-detail');
  };

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setCurrentView('course-detail');
  };

  const handleBackFromTool = () => {
    setSelectedTool(null);
    // Volta para a view anterior (categoria, favoritas, etc.)
    if (selectedCategory) {
      setCurrentView('category');
    } else {
      setCurrentView('inicio');
    }
  };

  const handleBackFromTask = () => {
    setSelectedPlatform(null);
    setCurrentView('tasks');
  };

  const handleBackFromCourse = () => {
    setSelectedCourse(null);
    setCurrentView('cursos');
  };

  const handleUpgradeClick = () => {
    setShowUpgradeModal(true);
  };

  const handleUpgrade = () => {
    setUserPlan('pro');
    setShowUpgradeModal(false);
    alert('Upgrade simulado! Em produção, isso levaria ao checkout.');
  };

  const isAgentPage = () => {
    const agentIds = [
      'roteirista-video', 'tradutor-multilingue', 'criador-videos-veo3',
      'agente-legendas', 'clonagem-videos-kinglia', 'resumidor-youtube',
      'mestre-copy', 'pagina-vendas', 'gerador-imagens', 'agente-automacao-n8n'
    ];
    return agentIds.includes(currentView);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'tool-detail':
        return selectedTool ? (
          <ToolDetailView
            tool={selectedTool}
            onBack={handleBackFromTool}
          />
        ) : null;
      case 'task-detail':
        return selectedPlatform ? (
          <TaskDetailView
            platform={selectedPlatform}
            onBack={handleBackFromTask}
          />
        ) : null;
      case 'course-detail':
        return selectedCourse ? (
          <CourseDetailView
            course={selectedCourse}
            onBack={handleBackFromCourse}
          />
        ) : null;
      case 'ferramentas-ia':
        return <CategoriesView onToolSelect={handleToolSelect} />;
      case 'category':
        return (
          <CategoryView
            categoryId={selectedCategory}
            onBack={handleBackToDashboard}
            onToolSelect={handleToolSelect}
          />
        );
      case 'favorites':
        return <FavoritesView onToolSelect={handleToolSelect} />;
      case 'destaques-da-semana':
        return <DestaquesDaSemanaView onViewChange={handleViewChange} />;
      case 'tasks':
        return <TasksView onPlatformSelect={handlePlatformSelect} />;
      case 'ias-pro':
        return <IAsProView onToolSelect={handleToolSelect} />;
      case 'cursos':
        return <CursosView onCourseSelect={handleCourseSelect} />;
      case 'prompts':
        return <PromptsView />;
      case 'gpts-personalizados':
        return <GPTsPersonalizadosView />;
      case 'viral-edit-vo3':
        return <ViralEditVO3View onBack={handleBackToDashboard} onViewChange={handleViewChange} />;
      case 'aulas-viral-edit':
        return <AulasViralEditView onBack={handleBackToDashboard} />;
      case 'creditos-gratuitos':
        return <CreditosGratuitosView onBack={handleBackToDashboard} />;
      case 'veo3':
        return <VEO3View onBack={handleBackToDashboard} />;
      case 'agentes-ia':
        return <AiAgentsView onBack={handleBackToDashboard} onAgentSelect={handleAgentSelect} onViewChange={handleViewChange} />;
      case 'chat-ia':
        return <ChatAIAgent onBack={handleBackToDashboard} />;
      case 'resumo-texto':
        return <TextSummaryAgent onBack={handleBackToDashboard} />;
      case 'escrita-automatica':
        return <AutomaticWritingAgent onBack={handleBackToDashboard} />;
      case 'gerador-videos':
        return <VideoGeneratorAgent onBack={handleBackToDashboard} />;
      case 'nucleo-video':
        return <NucleoVideoView onBack={handleBackToDashboard} onAgentSelect={handleAgentSelect} />;
      case 'nucleo-escrita':
        return <NucleoEscritaView onBack={handleBackToDashboard} onAgentSelect={handleAgentSelect} />;
      case 'nucleo-imagens':
        return <NucleoImagensView onBack={handleBackToDashboard} onAgentSelect={handleAgentSelect} />;
      case 'nucleo-automacao':
        return <NucleoAutomacaoView onBack={handleBackToDashboard} onAgentSelect={handleAgentSelect} />;
      case 'roteirista-video':
      case 'tradutor-multilingue':
      case 'criador-videos-veo3':
      case 'agente-legendas':
      case 'clonagem-videos-kinglia':
      case 'resumidor-youtube':
      case 'mestre-copy':
      case 'pagina-vendas':
      case 'gerador-imagens':
      case 'agente-automacao-n8n': {
        const agentData = getAgentData(currentView);
        if (!agentData) return null;

        if (selectedPromptId) {
          return <PromptDetailView agentData={agentData} promptId={selectedPromptId} onBack={handleBackFromPrompt} />;
        }

        return <AgentPromptsListView agentData={agentData} onBack={handleBackFromAgent} onPromptSelect={handlePromptSelect} />;
      }
      case 'gerador-imagens-pro':
        return <PlaceholderAgent onBack={handleBackToDashboard} title="Gerador de Imagens Profissionais" description="Imagens de alta qualidade para uso profissional" />;
      case 'estrategico-streaming':
        return <PlaceholderAgent onBack={handleBackToDashboard} title="Agente Estratégico de Streaming" description="Organização e monetização legal de streaming" />;
      case 'textos-persuasivos':
        return <PlaceholderAgent onBack={handleBackToDashboard} title="Gerador de Textos Persuasivos" description="Textos que vendem e convertem" />;
      case 'social-media':
        return <PlaceholderAgent onBack={handleBackToDashboard} title="Social Media Estratégico" description="Conteúdo estratégico para redes sociais" />;
      case 'textos-prontos':
        return <PlaceholderAgent onBack={handleBackToDashboard} title="Textos Prontos para Vender" description="Templates prontos para uso imediato" />;
      case 'criador-banners':
        return <PlaceholderAgent onBack={handleBackToDashboard} title="Criador de Banners" description="Banners profissionais para suas campanhas" />;
      case 'criador-thumbnails':
        return <PlaceholderAgent onBack={handleBackToDashboard} title="Criador de Thumbnails" description="Thumbnails que atraem cliques e visualizações" />;
      case 'mockups-produtos':
        return <PlaceholderAgent onBack={handleBackToDashboard} title="Mockups de Produtos" description="Mockups realistas para apresentação" />;
      case 'organizacao-processos':
        return <PlaceholderAgent onBack={handleBackToDashboard} title="Organização de Processos" description="Estruturação inteligente de processos" />;
      case 'estruturacao-fluxos':
        return <PlaceholderAgent onBack={handleBackToDashboard} title="Estruturação de Fluxos" description="Criação de fluxos automatizados" />;
      default:
        return <Dashboard onToolSelect={handleToolSelect} onViewChange={handleViewChange} onUpgradeClick={handleUpgradeClick} userPlan={userPlan} />;
    }
  };

  if (!isLoggedIn) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Sidebar para Desktop */}
      <Sidebar currentView={currentView} onViewChange={handleViewChange} onUpgradeClick={handleUpgradeClick} userPlan={userPlan} />

      {currentView !== 'tool-detail' && currentView !== 'task-detail' && currentView !== 'course-detail' && !isAgentPage() && (
        <Header
          currentView={currentView}
          onViewChange={handleViewChange}
          onMenuToggle={() => {}}
          onUpgradeClick={handleUpgradeClick}
          userPlan={userPlan}
        />
      )}

      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onUpgrade={handleUpgrade}
      />

      <main className={`min-h-screen ${currentView !== 'tool-detail' && currentView !== 'task-detail' && currentView !== 'course-detail' && !isAgentPage() ? 'pb-20 md:pb-0 md:ml-64 md:pt-16' : ''}`}>
        {renderCurrentView()}
      </main>

      {currentView !== 'tool-detail' && currentView !== 'task-detail' && currentView !== 'course-detail' && (
        <BottomNavigation
          currentView={currentView}
          onViewChange={handleViewChange}
        />
      )}
    </div>
  );
}

export default App;