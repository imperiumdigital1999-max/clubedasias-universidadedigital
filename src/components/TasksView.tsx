import React from 'react';
import { CheckSquare } from 'lucide-react';
import { taskPlatforms } from '../data/taskPlatforms';
import TaskCard from './TaskCard';
import { TaskPlatform } from '../types';

interface TasksViewProps {
  onPlatformSelect: (platform: TaskPlatform) => void;
}

export default function TasksView({ onPlatformSelect }: TasksViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <CheckSquare className="w-8 h-8 text-blue-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">Plataformas de Tarefas</h1>
          <p className="text-slate-400 mt-1">Ganhe dinheiro executando tarefas com inteligência artificial</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {taskPlatforms.map((platform) => (
          <TaskCard key={platform.id} platform={platform} onPlatformClick={onPlatformSelect} />
        ))}
      </div>
    </div>
  );
}