import React, { useEffect } from 'react';

export default function CloneComIAView() {
  useEffect(() => {
    window.open('https://gemini.google.com/app', '_blank');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-slate-400">Redirecionando...</p>
      </div>
    </div>
  );
}
