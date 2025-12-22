import React from 'react';
import { Info } from 'lucide-react';

export default function ImportantNotice() {
  return (
    <section className="mb-12">
      <div className="relative rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-600/50 backdrop-blur-sm">
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:w-64">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Viral Edit + VO3 AI"
                className="w-full h-48 md:h-56 object-cover rounded-xl"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mt-1">
                  <Info className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    AVISO IMPORTANTE
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold text-blue-400 mb-3">
                    Acesso Viral Edit + VO3 AI
                  </h4>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                    Estamos reestabelecendo o acesso dos alunos individualmente.<br />
                    Caso não consiga acessar ainda, aguarde até nossa equipe chegar na sua vez!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
