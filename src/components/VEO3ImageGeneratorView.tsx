import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, MessageSquare, Download, Sparkles, Camera, FileCheck, AlertTriangle } from 'lucide-react';

interface VEO3ImageGeneratorViewProps {
  onBack?: () => void;
}

type Step = 'upload' | 'questionnaire' | 'result';

export default function VEO3ImageGeneratorView({ onBack }: VEO3ImageGeneratorViewProps) {
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    estilo: '',
    iluminacao: '',
    proporcao: ''
  });

  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    const maxSize = 20 * 1024 * 1024;

    if (!validTypes.includes(file.type)) {
      alert('Formato inválido. Use PNG, JPG ou WEBP.');
      return;
    }

    if (file.size > maxSize) {
      alert('Arquivo muito grande. Máximo 20MB.');
      return;
    }

    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleNextToQuestionnaire = () => {
    if (uploadedImage) {
      setCurrentStep('questionnaire');
    }
  };

  const handleGeneratePrompt = () => {
    const prompt = `Generate a video using VEO3 based on the uploaded reference image. Style: ${formData.estilo}, Lighting: ${formData.iluminacao}, Aspect Ratio: ${formData.proporcao}. Create a cinematic video that maintains the essence and characteristics of the reference image while adding dynamic movement and professional videography techniques.`;

    setGeneratedPrompt(prompt);
    setCurrentStep('result');
  };

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      alert('Prompt copiado!');
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const handleDownloadPrompt = () => {
    const blob = new Blob([generatedPrompt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'veo3-prompt.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleStartOver = () => {
    setCurrentStep('upload');
    setUploadedImage(null);
    setImageFile(null);
    setFormData({ estilo: '', iluminacao: '', proporcao: '' });
    setGeneratedPrompt('');
  };

  const steps = [
    { id: 'upload', label: 'Upload', description: 'Envie sua imagem', icon: Upload },
    { id: 'questionnaire', label: 'Questionário', description: 'Responda perguntas', icon: MessageSquare },
    { id: 'result', label: 'Resultado', description: 'Receba seu prompt', icon: Download }
  ];

  const getStepIndex = (step: Step) => {
    return steps.findIndex(s => s.id === step);
  };

  const currentStepIndex = getStepIndex(currentStep);

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Gerador VEO3 com Imagem
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Faça upload de uma imagem e receba um prompt VEO3 personalizado através de IA
          </p>
        </div>

        <div className="mb-8 bg-red-900/30 border border-red-500/50 rounded-xl p-4 flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-200 text-sm">
            <strong>ATENÇÃO:</strong> Se esta página estiver traduzida automaticamente, desative a tradução para evitar travamentos.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === currentStepIndex;
              const isCompleted = index < currentStepIndex;

              return (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                        isActive
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                          : isCompleted
                          ? 'bg-purple-500 text-white'
                          : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      <StepIcon className="w-7 h-7" />
                    </div>
                    <div className="text-center">
                      <div
                        className={`font-semibold mb-1 ${
                          isActive ? 'text-purple-400' : isCompleted ? 'text-purple-300' : 'text-slate-500'
                        }`}
                      >
                        {step.label}
                      </div>
                      <div className="text-slate-400 text-sm">{step.description}</div>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-4 mb-12 transition-all duration-300 ${
                        index < currentStepIndex ? 'bg-purple-500' : 'bg-slate-800'
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8 mb-12">
          {currentStep === 'upload' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Upload de Imagem</h2>
                <p className="text-slate-400">Envie uma imagem de referência para começar</p>
              </div>

              {!uploadedImage ? (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
                    isDragging
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-slate-700 hover:border-purple-500/50 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-24 h-24 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2">
                        Envie sua imagem de referência
                      </h3>
                      <p className="text-slate-400 mb-4">
                        Arraste e solte uma imagem ou clique para selecionar
                      </p>
                      <p className="text-slate-500 text-sm">
                        PNG, JPG, WEBP até 20MB
                      </p>
                    </div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".png,.jpg,.jpeg,.webp"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
                    <img
                      src={uploadedImage}
                      alt="Preview"
                      className="w-full h-auto max-h-96 object-contain bg-slate-800"
                    />
                  </div>

                  <div className="flex items-center justify-between bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center space-x-3">
                      <FileCheck className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-white font-medium">{imageFile?.name}</p>
                        <p className="text-slate-400 text-sm">
                          {imageFile && (imageFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleRemoveImage}
                      className="text-red-400 hover:text-red-300 font-medium transition-colors px-4 py-2 bg-red-500/10 rounded-lg hover:bg-red-500/20"
                    >
                      Remover
                    </button>
                  </div>

                  <button
                    onClick={handleNextToQuestionnaire}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/30"
                  >
                    Próximo Passo
                  </button>
                </div>
              )}
            </div>
          )}

          {currentStep === 'questionnaire' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Personalize seu Prompt</h2>
                <p className="text-slate-400">Responda algumas perguntas para otimizar o resultado</p>
              </div>

              {uploadedImage && (
                <div className="mb-8">
                  <img
                    src={uploadedImage}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-xl border border-slate-700"
                  />
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-3">
                    Estilo da Imagem
                  </label>
                  <select
                    value={formData.estilo}
                    onChange={(e) => setFormData({ ...formData, estilo: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="">Selecione um estilo</option>
                    <option value="realista">Realista</option>
                    <option value="cinematográfico">Cinematográfico</option>
                    <option value="artístico">Artístico</option>
                    <option value="documental">Documental</option>
                    <option value="animado">Animado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">
                    Iluminação
                  </label>
                  <select
                    value={formData.iluminacao}
                    onChange={(e) => setFormData({ ...formData, iluminacao: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="">Selecione a iluminação</option>
                    <option value="natural">Natural</option>
                    <option value="dramática">Dramática</option>
                    <option value="soft">Soft / Suave</option>
                    <option value="golden hour">Golden Hour</option>
                    <option value="low light">Low Light</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">
                    Proporção
                  </label>
                  <select
                    value={formData.proporcao}
                    onChange={(e) => setFormData({ ...formData, proporcao: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="">Selecione a proporção</option>
                    <option value="16:9">16:9 (Widescreen)</option>
                    <option value="9:16">9:16 (Vertical)</option>
                    <option value="1:1">1:1 (Quadrado)</option>
                    <option value="4:3">4:3 (Clássico)</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setCurrentStep('upload')}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-4 px-6 rounded-xl font-semibold transition-colors border border-slate-700"
                >
                  Voltar
                </button>
                <button
                  onClick={handleGeneratePrompt}
                  disabled={!formData.estilo || !formData.iluminacao || !formData.proporcao}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Gerar Prompt
                </button>
              </div>
            </div>
          )}

          {currentStep === 'result' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Prompt Gerado com Sucesso!</h2>
                <p className="text-slate-400">Seu prompt VEO3 personalizado está pronto</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <span>Prompt Personalizado:</span>
                </h3>
                <pre className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap break-words bg-black/50 p-4 rounded border border-slate-700">
                  {generatedPrompt}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Download className="w-5 h-5" />
                  <span>Copiar Prompt</span>
                </button>
                <button
                  onClick={handleDownloadPrompt}
                  className="flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white py-4 px-6 rounded-xl font-semibold transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>Baixar como TXT</span>
                </button>
              </div>

              <button
                onClick={handleStartOver}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white py-4 px-6 rounded-xl font-semibold transition-colors border border-slate-700"
              >
                Criar Novo Prompt
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Upload Inteligente</h3>
            <p className="text-slate-400 text-sm">
              IA analisa automaticamente sua imagem e identifica o tipo de modelo
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Questionário Otimizado</h3>
            <p className="text-slate-400 text-sm">
              Formulário direto e focado para prompts de modelo com produto
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Prompt Otimizado</h3>
            <p className="text-slate-400 text-sm">
              Prompt específico para VEO3 com referência explícita à sua imagem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
