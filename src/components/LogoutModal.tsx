import React from 'react';
import { LogOut, X } from 'lucide-react';

interface LogoutModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function LogoutModal({ onConfirm, onCancel }: LogoutModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 border-b border-slate-700">
          <button
            onClick={onCancel}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="bg-red-500/20 p-3 rounded-xl">
              <LogOut className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Sair da Conta</h2>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-slate-300 text-base leading-relaxed">
            Tem certeza que deseja sair da sua conta?
          </p>

          <div className="flex space-x-3">
            <button
              onClick={onCancel}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 border border-slate-700"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-red-500/30"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
