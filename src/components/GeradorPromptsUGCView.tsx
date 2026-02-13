import React, { useState } from 'react';
import { Copy, Sparkles, RefreshCw, Camera, Video, Wand2, Bot, CheckCircle2 } from 'lucide-react';

type TipoCategoria = 'imagens-profissionais' | 'veo3' | 'animar-imagem' | 'clone-gemini';

interface LoadingStep {
  text: string;
  duration: number;
}

const loadingSteps: LoadingStep[] = [
  { text: 'Analisando dados...', duration: 800 },
  { text: 'Otimizando estrutura...', duration: 900 },
  { text: 'Aplicando modelo avançado...', duration: 1000 }
];

const categorias = [
  {
    id: 'imagens-profissionais' as TipoCategoria,
    icon: Camera,
    titulo: 'Criativos em imagens profissionais',
    descricao: 'Imagens UGC ultra realistas e autênticas',
    gradiente: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'veo3' as TipoCategoria,
    icon: Video,
    titulo: 'Criativos estilo VEO3',
    descricao: 'Vídeos cinematográficos de alta qualidade',
    gradiente: 'from-purple-600 to-pink-600'
  },
  {
    id: 'animar-imagem' as TipoCategoria,
    icon: Wand2,
    titulo: 'Animar sua imagem',
    descricao: 'Transforme imagens estáticas em vídeos',
    gradiente: 'from-orange-600 to-red-600'
  },
  {
    id: 'clone-gemini' as TipoCategoria,
    icon: Bot,
    titulo: 'Clone Gemini',
    descricao: 'IA avançada para clonagem de estilo',
    gradiente: 'from-green-600 to-emerald-600'
  }
];

const promptTemplates: Record<TipoCategoria, (descricao: string) => string> = {
  'imagens-profissionais': (descricao) => `Ultra-realistic UGC photograph with authentic iPhone quality. ${descricao}. Natural lighting creates soft, flattering shadows - could be window light, golden hour, or soft indoor lighting. The scene feels spontaneous and genuine, not staged or overly produced. Shot on iPhone 14 Pro or 15 Pro, natural color grading with slight grain for authenticity. Shallow depth of field keeps focus on subject while background provides context. Composition follows rule of thirds with natural, imperfect framing that adds to authenticity. The overall vibe is "real person sharing genuine experience" - relatable, trustworthy, and engaging. 4K resolution, portrait mode when applicable, authentic UGC aesthetic that performs well on social media platforms.`,

  'veo3': (descricao) => `Cinematic video sequence in VEO3 style with professional production quality. ${descricao}. Dynamic camera movement - smooth tracking shot, subtle dolly push, or elegant pan that adds cinematic depth. Lighting is sophisticated: three-point setup with key light, fill light, and rim light creating dimensional depth. Color grading follows modern cinema aesthetic - slightly desaturated with lifted blacks, crushed highlights, and warm/cool color contrast. Shot composition uses leading lines, symmetry, or dynamic framing to create visual interest. Camera movement is purposeful and motivated, never shaky or random. Frame rate at 24fps for cinema look or 60fps for smooth motion. Resolution 4K or higher. The sequence has clear narrative flow with beginning, middle, and end. Atmospheric effects like subtle lens flares, light rays, or bokeh add production value. Overall aesthetic feels like high-end commercial or premium content creator work.`,

  'animar-imagem': (descricao) => `Animation transformation of static image into dynamic video. ${descricao}. The animation should feel natural and purposeful, not random motion. Start with subtle movements - gentle camera push-in or pull-out, slight parallax effect on different depth layers, or organic subject movement like hair flowing, fabric swaying, or natural breathing motion. Transition is smooth with no jarring jumps. If animating person: micro-expressions, eye movement, slight head tilt, or natural pose adjustment. If animating scene: environmental elements like leaves moving, water rippling, or atmospheric particles. Use AI-powered motion interpolation for realistic movement. Maintain image quality throughout animation with no distortion or artifacts. Animation loop is seamless if intended to repeat. Duration 3-8 seconds optimal for social media. Export at 30fps or 60fps for smooth motion. The result should feel like capturing a living moment, not just motion for motion's sake.`,

  'clone-gemini': (descricao) => `Advanced AI-generated content using Gemini's multimodal capabilities. ${descricao}. Leverage Gemini's understanding of context, style, and nuance to create highly sophisticated output. The generation should demonstrate: deep comprehension of the request with attention to subtle details, style consistency that matches reference or described aesthetic, natural language flow if text-based or coherent visual style if image-based, appropriate tone and voice for intended audience, cultural awareness and sensitivity, creative interpretation that goes beyond literal translation. Use Gemini's ability to synthesize information across modalities - combining visual understanding, language processing, and contextual reasoning. Output should feel intelligent and purposeful, not generic or template-based. Quality indicators: coherent structure, attention to detail, appropriate complexity level, natural feel without obvious AI artifacts, alignment with brand voice or personal style if specified. The result represents cutting-edge AI capability - sophisticated, nuanced, and impressively human-like in quality.`
};

const nomeModelos: Record<TipoCategoria, string> = {
  'imagens-profissionais': 'UGC Pro Image Engine',
  'veo3': 'VEO3 Cinema Model',
  'animar-imagem': 'AI Animation Studio',
  'clone-gemini': 'Gemini Advanced Clone'
};

export default function GeradorPromptsUGCView() {
  const [categoriaEscolhida, setCategoriaEscolhida] = useState<TipoCategoria | null>(null);
  const [descricao, setDescricao] = useState('');
  const [promptGerado, setPromptGerado] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLoadingStep, setCurrentLoadingStep] = useState(0);

  const gerarPrompt = async () => {
    if (!categoriaEscolhida) {
      alert('Por favor, selecione o tipo de criativo que você deseja gerar.');
      return;
    }

    if (!descricao.trim()) {
      alert('Por favor, descreva o que você quer criar.');
      return;
    }

    setIsLoading(true);
    setCurrentLoadingStep(0);

    for (let i = 0; i < loadingSteps.length; i++) {
      setCurrentLoadingStep(i);
      await new Promise(resolve => setTimeout(resolve, loadingSteps[i].duration));
    }

    const template = promptTemplates[categoriaEscolhida];
    const prompt = template(descricao);
    setPromptGerado(prompt);
    setIsLoading(false);
    setShowResult(true);
  };

  const copiarPrompt = async () => {
    try {
      await navigator.clipboard.writeText(promptGerado);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Não foi possível copiar. Por favor, copie manualmente.');
    }
  };

  const gerarNovo = () => {
    setShowResult(false);
    setPromptGerado('');
    setDescricao('');
    setCategoriaEscolhida(null);
    setCurrentLoadingStep(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 right-0 md:right-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-blue-300">Sistema Exclusivo Clube das IAs</span>
            </div>
          </div>

          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-6 shadow-2xl shadow-blue-600/40">
            <Camera className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            UGC Prompt Engine<sup className="text-2xl">™</sup>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Tecnologia avançada para geração de prompts ultra realistas.
          </p>
        </div>

        {!showResult ? (
          <div className="space-y-10">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                <span>O que você quer criar?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categorias.map((categoria) => {
                  const Icon = categoria.icon;
                  const isSelected = categoriaEscolhida === categoria.id;

                  return (
                    <button
                      key={categoria.id}
                      onClick={() => setCategoriaEscolhida(categoria.id)}
                      className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                        isSelected
                          ? `border-transparent bg-gradient-to-br ${categoria.gradiente} shadow-2xl scale-105`
                          : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-white/20' : 'bg-slate-700/50'
                        }`}>
                          <Icon className={`w-7 h-7 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                        </div>

                        <div className="flex-1">
                          <h3 className={`text-lg font-semibold mb-2 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                            {categoria.titulo}
                          </h3>
                          <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                            {categoria.descricao}
                          </p>
                        </div>

                        {isSelected && (
                          <div className="absolute top-4 right-4">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                <span>Descreva sua criação</span>
              </h2>

              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descreva com riqueza de detalhes o que você quer criar… cenário, emoção, produto, público, estilo, ambiente…"
                rows={6}
                className="w-full px-6 py-5 bg-slate-950/50 border border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all resize-none text-base"
              />

              <div className="mt-4 flex items-start space-x-2 text-sm text-slate-400">
                <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-300">Dica:</strong> Quanto mais detalhes você fornecer, mais poderoso será o resultado.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={gerarPrompt}
                disabled={isLoading}
                className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-4"
              >
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{loadingSteps[currentLoadingStep]?.text || 'Processando...'}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-7 h-7" />
                    <span>GERAR PROMPT AVANÇADO</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8 md:p-10">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-700">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Prompt gerado com sucesso</h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Modelo aplicado: <span className="text-blue-400 font-semibold">{categoriaEscolhida ? nomeModelos[categoriaEscolhida] : ''}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-700/50 rounded-2xl p-6 mb-6 font-mono">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Prompt Gerado</span>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-sm">
                  {promptGerado}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={copiarPrompt}
                  className="flex-1 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center space-x-3"
                >
                  <Copy className="w-6 h-6" />
                  <span>{copied ? 'Copiado!' : 'Copiar Prompt'}</span>
                </button>

                <button
                  onClick={gerarNovo}
                  className="flex-1 py-5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg rounded-xl border-2 border-slate-600 transition-all flex items-center justify-center space-x-3"
                >
                  <RefreshCw className="w-6 h-6" />
                  <span>Gerar Novo</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/30 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <Sparkles className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-bold text-blue-300 mb-2">Dica Profissional</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Este prompt foi otimizado usando nossa tecnologia proprietária. Copie e use diretamente na plataforma escolhida.
                    Para melhores resultados, ajuste pequenos detalhes específicos do seu projeto mantendo a estrutura principal intacta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
