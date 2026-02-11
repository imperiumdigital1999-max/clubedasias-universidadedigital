import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Minimize2 } from 'lucide-react';

interface FloatingChatProps {
  shouldShow?: boolean;
}

const FloatingChat: React.FC<FloatingChatProps> = ({ shouldShow = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [chatStage, setChatStage] = useState<'initial' | 'accepted' | 'declined'>('initial');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; isLink?: boolean }>>([]);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const chatDismissed = localStorage.getItem('chatDismissed');
    const chatShown = localStorage.getItem('chatShownOnce');

    if (!chatDismissed && !chatShown && shouldShow) {
      setTimeout(() => {
        setIsOpen(true);
        setMessages([
          {
            text: '🎓 Acesso liberado!\nQuer ganhar acesso gratuito a um curso da Harvard School (EUA) sobre Inteligência Artificial?',
            isUser: false,
          },
        ]);
        localStorage.setItem('chatShownOnce', 'true');
      }, 2000);
    }
  }, [shouldShow]);

  const handleAccept = () => {
    setShowButtons(false);
    setChatStage('accepted');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: 'Quero acessar', isUser: true },
      ]);
    }, 300);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Excelente escolha 👌\nO Clube das IAs está liberando o acesso a um curso oficial da Harvard School, focado em Inteligência Artificial Generativa.',
          isUser: false,
        },
      ]);
    }, 1000);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: '📚 Curso: Generative AI\n🏛️ Instituição: Harvard School (EUA)\n🎥 Plataforma: YouTube\n🌍 Idioma: Inglês',
          isUser: false,
        },
      ]);
    }, 2500);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: 'https://generative-ai-course.hks.harvard.edu/spring-2024',
          isUser: false,
          isLink: true,
        },
      ]);
    }, 4000);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: '💡 Importante:\nO curso é em inglês, mas você pode ativar legendas em português diretamente no YouTube.',
          isUser: false,
        },
      ]);
    }, 5000);
  };

  const handleDecline = () => {
    setShowButtons(false);
    setChatStage('declined');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: 'Agora não', isUser: true },
      ]);
    }, 300);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Sem problemas 😊\nSe quiser acessar depois, esse aviso continuará disponível aqui.',
          isUser: false,
        },
      ]);
    }, 1000);

    setTimeout(() => {
      setIsMinimized(true);
    }, 3000);
  };

  const handleClose = () => {
    localStorage.setItem('chatDismissed', 'true');
    setIsOpen(false);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleReopen = () => {
    setIsMinimized(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {isMinimized ? (
        <button
          onClick={handleReopen}
          className="fixed bottom-24 md:bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl transition-all transform hover:scale-110 animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        </button>
      ) : (
        <div className="fixed bottom-24 md:bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] animate-fade-in">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Clube das IAs</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-300 rounded-full" />
                    <span className="text-xs text-green-100">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleMinimize}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Minimize2 className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={handleClose}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-3 max-h-96 overflow-y-auto bg-gray-900/30">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                      message.isUser
                        ? 'bg-green-600 text-white rounded-br-none'
                        : message.isLink
                        ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-bl-none'
                        : 'bg-gray-800 text-gray-100 rounded-bl-none'
                    }`}
                  >
                    {message.isLink ? (
                      <a
                        href={message.text}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-300 transition-colors break-all"
                      >
                        {message.text}
                      </a>
                    ) : (
                      <p className="text-sm whitespace-pre-line leading-relaxed">
                        {message.text}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {showButtons && chatStage === 'initial' && (
                <div className="flex flex-col gap-2 pt-2 animate-fade-in">
                  <button
                    onClick={handleAccept}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  >
                    Quero acessar
                  </button>
                  <button
                    onClick={handleDecline}
                    className="w-full py-2.5 px-4 bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium rounded-lg transition-all"
                  >
                    Agora não
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;
