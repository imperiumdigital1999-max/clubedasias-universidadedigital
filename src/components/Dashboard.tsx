import React from 'react';
import { ArrowLeft, Brain, Rocket, Play, ExternalLink, GraduationCap } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailViewProps {
  course: Course;
  onBack: () => void;
}

export default function CourseDetailView({ course, onBack }: CourseDetailViewProps) {
  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleAccessCourse = () => {
    window.open(course.url, '_blank', 'noopener,noreferrer');
  };

  const handleFreeAccessVideo = () => {
    if (course.freeAccessVideo) {
      window.open(course.freeAccessVideo, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header com botão voltar */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button
              onClick={onBack}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold text-white">{course.name}</h1>
          </div>
        </div>
      </div>

      {/* Banner de Capa */}
      <div 
        className="relative h-64 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${course.coverImage || course.image})`
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {course.name}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* 1. Função */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-white">Função</h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            {course.function || course.description}
          </p>
        </section>

        {/* 2. Principais Aplicações */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Rocket className="w-6 h-6 text-cyan-500" />
            <h2 className="text-2xl font-bold text-white">Principais Aplicações</h2>
          </div>
          <div className="grid gap-4">
            {course.applications?.map((application, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-300">{application}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Pronto para Começar */}
        <section>
          <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 rounded-2xl p-8 border border-orange-500/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Pronto para começar?</h2>
            <p className="text-slate-300 mb-6">
              Acesse o curso {course.name} agora e transforme seu conhecimento em resultados práticos
            </p>
            <button
              onClick={handleAccessCourse}
              className="bg-gradient-to-r from-orange-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 mx-auto hover:from-orange-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Acessar Curso</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}