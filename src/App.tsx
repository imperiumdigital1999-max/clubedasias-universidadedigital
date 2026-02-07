import React, { useState } from 'react';
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
import ImageGeneratorAgent from './components/agents/ImageGeneratorAgent';
import VideoGeneratorAgent from './components/agents/VideoGeneratorAgent';
import { ViewMode, AITool, TaskPlatform, Course } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('inicio');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<TaskPlatform | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleViewChange = (view: ViewMode) => {
    setCurrentView(view);
    if (view === 'inicio') {
      setSelectedCategory('');
      setSelectedTool(null);
      setSelectedPlatform(null);
      setSelectedCourse(null);
    }
  };

  const handleBackToDashboard = () => {
    setCurrentView('inicio');
    setSelectedCategory('');
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

  const handleAgentSelect = (agentId: string) => {
    setCurrentView(agentId as ViewMode);
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
        return <AiAgentsView onBack={handleBackToDashboard} onAgentSelect={handleAgentSelect} />;
      case 'chat-ia':
        return <ChatAIAgent onBack={handleBackToDashboard} />;
      case 'resumo-texto':
        return <TextSummaryAgent onBack={handleBackToDashboard} />;
      case 'escrita-automatica':
        return <AutomaticWritingAgent onBack={handleBackToDashboard} />;
      case 'gerador-imagens':
        return <ImageGeneratorAgent onBack={handleBackToDashboard} />;
      case 'gerador-videos':
        return <VideoGeneratorAgent onBack={handleBackToDashboard} />;
      default:
        return <Dashboard onToolSelect={handleToolSelect} onViewChange={handleViewChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Sidebar para Desktop */}
      <Sidebar currentView={currentView} onViewChange={handleViewChange} />
      
      {currentView !== 'tool-detail' && currentView !== 'task-detail' && currentView !== 'course-detail' && (
        <Header
          currentView={currentView}
          onViewChange={handleViewChange}
          onMenuToggle={() => {}}
        />
      )}
      
      <main className={`min-h-screen ${currentView !== 'tool-detail' && currentView !== 'task-detail' && currentView !== 'course-detail' ? 'pb-20 md:pb-0 md:ml-64' : 'md:ml-64'}`}>
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