import React from 'react';
import { ExternalLink } from 'lucide-react';
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

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        
        {course.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            ⭐ Destaque
          </div>
        )}
        
        {course.new && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            🆕 Novo
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
          {course.name}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div></div>
          <button
            onClick={handleCardClick}
            className="bg-gradient-to-r from-orange-500 to-cyan-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-orange-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-sm font-medium">Acessar</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}