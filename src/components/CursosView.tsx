import React from 'react';
import { GraduationCap } from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from './CourseCard';
import { Course } from '../types';

interface CursosViewProps {
  onCourseSelect: (course: Course) => void;
}

export default function CursosView({ onCourseSelect }: CursosViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <GraduationCap className="w-8 h-8 text-green-500" />
        <div>
          <h1 className="text-3xl font-bold text-white">Cursos</h1>
          <p className="text-slate-400 mt-1">Aprenda a dominar as ferramentas de IA</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} onCourseClick={onCourseSelect} />
        ))}
      </div>
    </div>
  );
}