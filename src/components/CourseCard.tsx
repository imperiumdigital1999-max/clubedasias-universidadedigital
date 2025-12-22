import React from 'react';
import { BookOpen, Clock, Award, Play } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onCourseClick?: (course: Course) => void;
}

export default function CourseCard({ course, onCourseClick }: CourseCardProps) {
  const handleCardClick = () => {
    if (onCourseClick) {
      onCourseClick(course);
    }
  };

  const nivelColors = {
    'Iniciante': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'Intermediário': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Avançado': 'bg-amber-500/20 text-amber-400 border-amber-500/30'
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-slate-800/50 rounded-2xl overflow-hidden border-2 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer flex flex-col"
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          Curso
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2 leading-tight line-clamp-2 min-h-[3.5rem]">
          {course.name}
        </h3>

        <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">
          {course.description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-4 text-xs">
            {course.nivel && (
              <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${nivelColors[course.nivel] || 'bg-slate-700 text-slate-300'}`}>
                <Award className="w-3.5 h-3.5" />
                <span className="font-medium">{course.nivel}</span>
              </div>
            )}

            {course.cargaHoraria && (
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{course.cargaHoraria}</span>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handleCardClick}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg transition-colors font-medium text-sm"
        >
          <Play className="w-4 h-4" />
          <span>Acessar Curso</span>
        </button>
      </div>
    </div>
  );
}