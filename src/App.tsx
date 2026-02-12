import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BottomNavigation from './components/BottomNavigation';
import Dashboard from './components/Dashboard';
import ToolDetailView from './components/ToolDetailView';
import TasksView from './components/TasksView';
import TaskDetailView from './components/TaskDetailView';
import CursosView from './components/CursosView';
import CourseDetailView from './components/CourseDetailView';
import PromptsView from './components/PromptsView';
import GPTsPersonalizadosView from './components/GPTsPersonalizadosView';
import DestaquesDaSemanaView from './components/DestaquesDaSemanaView';
import BancoDigitalView from './components/BancoDigitalView';
import SuporteView from './components/SuporteView';
import LoginView from './components/LoginView';
import WelcomeAnimation from './components/WelcomeAnimation';
import OnboardingChoice from './components/OnboardingChoice';
import AtivacaoTextoView from './components/AtivacaoTextoView';
import AtivacaoVideoView from './components/AtivacaoVideoView';
import LogoutModal from './components/LogoutModal';
import ViralEditVO3View from './components/ViralEditVO3View';
import AulasViralEditView from './components/AulasViralEditView';
import VEO3View from './components/VEO3View';
import CreditosGratuitosView from './components/CreditosGratuitosView';
import PromptDetailView from './components/PromptDetailView';
import AppPromptsView from './components/AppPromptsView';
import AppAutomationsView from './components/AppAutomationsView';
import AutomationCategoryView from './components/AutomationCategoryView';
import { ViewMode, AITool, TaskPlatform, Course } from './types';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<ViewMode>('inicio');
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<TaskPlatform | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [promptInitialTag, setPromptInitialTag] = useState<string | null>(null);
  const [selectedAutomationCategory, setSelectedAutomationCategory] = useState<string | null>(null);
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(false);
  const [showOnboardingChoice, setShowOnboardingChoice] = useState(false);
  const [showAtivacaoTexto, setShowAtivacaoTexto] = useState(false);
  const [showAtivacaoVideo, setShowAtivacaoVideo] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [initialFlowComplete, setInitialFlowComplete] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('clube_ias_logged_in') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    if (isLoggedIn && initialFlowComplete) {
      const ativacaoConcluida = localStorage.getItem('ativacaoConcluida') === 'true';

      if (!ativacaoConcluida && !showAtivacaoTexto && !showAtivacaoVideo) {
        setShowAtivacaoTexto(true);
      }
    }
  }, [isLoggedIn, initialFlowComplete, showAtivacaoTexto, showAtivacaoVideo]);

  const handleLogin = () => {
    setIsLoggedIn(true);

    const today = new Date().toDateString();
    const lastShown = localStorage.getItem('clube_ias_welcome_last_shown');

    if (lastShown !== today) {
      setShowWelcomeAnimation(true);
      localStorage.setItem('clube_ias_welcome_last_shown', today);
    } else {
      setInitialFlowComplete(true);
    }
  };

  const handleWelcomeComplete = () => {
    setShowWelcomeAnimation(false);
    setShowOnboardingChoice(true);
  };

  const handleOnboardingComplete = () => {
    setShowOnboardingChoice(false);
    setInitialFlowComplete(true);
  };

  const handleOnboardingChoice = (choice: 'text' | 'video') => {
    if (choice === 'text') {
      setShowAtivacaoTexto(true);
    } else if (choice === 'video') {
      setShowAtivacaoVideo(true);
    }
  };

  const handleBackFromAtivacao = () => {
    const ativacaoConcluida = localStorage.getItem('ativacaoConcluida') === 'true';
    if (ativacaoConcluida) {
      setShowAtivacaoTexto(false);
    }
  };

  const handleConcluirAtivacao = () => {
    localStorage.setItem('ativacaoConcluida', 'true');
    setShowAtivacaoTexto(false);
    setShowAtivacaoVideo(false);
  };

  const handleAutomationCategorySelect = (categoryId: string) => {
    setSelectedAutomationCategory(categoryId);
  };

  const handleBackToAutomations = () => {
    setSelectedAutomationCategory(null);
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    localStorage.clear();
    sessionStorage.clear();
    setIsLoggedIn(false);
    setShowLogoutModal(false);
    setCurrentView('inicio');
    setSelectedTool(null);
    setSelectedPlatform(null);
    setSelectedCourse(null);
    setShowWelcomeAnimation(false);
    setShowOnboardingChoice(false);
    setShowAtivacaoTexto(false);
    setShowAtivacaoVideo(false);
    setInitialFlowComplete(false);
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  const handleViewChange = (view: ViewMode, options?: { promptTag?: string }) => {
    setCurrentView(view);
    if (view === 'inicio') {
      setSelectedTool(null);
      setSelectedPlatform(null);
      setSelectedCourse(null);
      setPromptInitialTag(null);
    }
    if (view === 'prompts' && options?.promptTag) {
      setPromptInitialTag(options.promptTag);
    } else if (view !== 'prompts') {
      setPromptInitialTag(null);
    }
  };

  const handleBackToDashboard = () => {
    setCurrentView('inicio');
    setSelectedTool(null);
    setSelectedPlatform(null);
    setSelectedCourse(null);
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
    setCurrentView('inicio');
  };

  const handleBackFromTask = () => {
    setSelectedPlatform(null);
    setCurrentView('tasks');
  };

  const handleBackFromCourse = () => {
    setSelectedCourse(null);
    setCurrentView('cursos');
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
      case 'destaques-da-semana':
        return <DestaquesDaSemanaView onViewChange={handleViewChange} />;
      case 'tasks':
        return <TasksView onPlatformSelect={handlePlatformSelect} />;
      case 'cursos':
        return <CursosView onCourseSelect={handleCourseSelect} />;
      case 'prompts':
        return <PromptsView initialTag={promptInitialTag} />;
      case 'gpts-personalizados':
        return <GPTsPersonalizadosView />;
      case 'banco-digital':
        return <BancoDigitalView />;
      case 'suporte':
        return <SuporteView />;
      case 'viral-edit-vo3':
        return <ViralEditVO3View onBack={handleBackToDashboard} onViewChange={handleViewChange} />;
      case 'aulas-viral-edit':
        return <AulasViralEditView onBack={handleBackToDashboard} />;
      case 'veo3':
        return <VEO3View onBack={handleBackToDashboard} />;
      case 'creditos-gratuitos':
        return <CreditosGratuitosView onBack={handleBackToDashboard} />;
      case 'app-prompts':
        return <AppPromptsView />;
      case 'app-automations':
        if (selectedAutomationCategory) {
          return (
            <AutomationCategoryView
              categoryId={selectedAutomationCategory}
              onBack={handleBackToAutomations}
            />
          );
        }
        return <AppAutomationsView onCategorySelect={handleAutomationCategorySelect} />;
      default:
        return <Dashboard onToolSelect={handleToolSelect} onViewChange={handleViewChange} />;
    }
  };

  if (!isLoggedIn) {
    return <LoginView onLogin={handleLogin} />;
  }

  if (showAtivacaoTexto) {
    return (
      <div className="min-h-screen bg-slate-950">
        <AtivacaoTextoView
          onBack={handleBackFromAtivacao}
          onConcluir={handleConcluirAtivacao}
        />
      </div>
    );
  }

  if (showAtivacaoVideo) {
    return (
      <div className="min-h-screen bg-slate-950">
        <AtivacaoVideoView
          onConcluir={handleConcluirAtivacao}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {showWelcomeAnimation && <WelcomeAnimation onComplete={handleWelcomeComplete} />}
      {showOnboardingChoice && <OnboardingChoice onComplete={handleOnboardingComplete} onChoiceSelect={handleOnboardingChoice} />}

      {/* Sidebar para Desktop */}
      <Sidebar currentView={currentView} onViewChange={handleViewChange} />

      {currentView !== 'tool-detail' && currentView !== 'task-detail' && currentView !== 'course-detail' && currentView !== 'viral-edit-vo3' && currentView !== 'aulas-viral-edit' && currentView !== 'veo3' && currentView !== 'creditos-gratuitos' && currentView !== 'app-prompts' && (
        <Header
          currentView={currentView}
          onViewChange={handleViewChange}
          onMenuToggle={() => {}}
          onLogoutClick={handleLogoutClick}
        />
      )}

      {showLogoutModal && (
        <LogoutModal
          onConfirm={handleLogoutConfirm}
          onCancel={handleLogoutCancel}
        />
      )}

      <main className={`min-h-screen ${currentView !== 'tool-detail' && currentView !== 'task-detail' && currentView !== 'course-detail' ? 'pb-20 md:pb-0 md:ml-64 md:pt-16' : ''}`}>
        {renderCurrentView()}
      </main>

      {currentView !== 'tool-detail' && currentView !== 'task-detail' && currentView !== 'course-detail' && currentView !== 'viral-edit-vo3' && currentView !== 'aulas-viral-edit' && currentView !== 'veo3' && currentView !== 'creditos-gratuitos' && currentView !== 'app-prompts' && (
        <BottomNavigation
          currentView={currentView}
          onViewChange={handleViewChange}
        />
      )}
    </div>
  );
}

export default App;