import React, { useState } from 'react';
import { Copy, Sparkles, RefreshCw, Camera } from 'lucide-react';

type TipoCriativo = 'selfie' | 'antes-depois' | 'print-conversa' | 'review-tiktok' | 'influencer-lifestyle' | 'foto-espelho' | 'reacao-surpresa';
type TipoPublico = 'masculino' | 'feminino' | 'jovem' | '30+' | '40+' | 'empresarios' | 'estudantes';

interface PromptTemplate {
  tipo: TipoCriativo;
  publico: TipoPublico;
  template: (produto: string) => string;
}

const promptTemplates: PromptTemplate[] = [
  {
    tipo: 'selfie',
    publico: 'masculino',
    template: (produto) => `Ultra-realistic selfie photo of a genuine young man in his early 20s, holding his smartphone at arm's length, natural smile showing real enthusiasm. He's in a modern casual setting - could be a home office, bedroom, or coffee shop. Natural window lighting creates soft shadows on his face. He's wearing a simple t-shirt or hoodie. In the frame, subtly visible: ${produto}. The photo has that authentic iPhone quality - slight grain, natural colors, imperfect framing that feels spontaneous. His expression conveys honest recommendation, not posed or fake. Background slightly blurred with shallow depth of field. The vibe is "just discovered something cool and sharing it with friends". Shot on iPhone 14 Pro, portrait mode, natural lighting, 4K resolution.`
  },
  {
    tipo: 'selfie',
    publico: 'feminino',
    template: (produto) => `Ultra-realistic selfie photo of an authentic young woman in her early 20s, holding her phone at a natural angle, genuine warm smile. She's in a cozy, well-lit space - bedroom, living room, or trendy café. Soft natural lighting from a window highlights her face beautifully. She's wearing casual everyday clothes - maybe a comfortable sweater or simple top. Minimal natural makeup. In the scene, casually present: ${produto}. The photo has that real Instagram quality - natural colors, slight grain, imperfect but charming framing. Her expression shows genuine excitement and trust, like she's sharing a secret with her best friend. Background has personality but doesn't distract - plants, books, or simple décor. Shot on iPhone 14 Pro, portrait mode, golden hour lighting, authentic and relatable.`
  },
  {
    tipo: 'antes-depois',
    publico: 'jovem',
    template: (produto) => `Ultra-realistic before and after comparison photo. LEFT SIDE (BEFORE): Young person looking tired, stressed, or dealing with a common problem - messy background, dim lighting, concerned expression, wearing simple clothes. The scene feels relatable and honest. RIGHT SIDE (AFTER): Same person, same location, but transformed - brighter lighting, confident smile, organized space, improved appearance. Between them, prominently featured: ${produto}. Both photos shot with iPhone camera quality - natural grain, authentic colors, real-life lighting. The transformation is believable and inspiring, not exaggerated. Split-screen layout with subtle dividing line. The "after" side has warmer tones and better composition, showing the real impact. Text overlay space at top and bottom. Shot on iPhone 14, natural lighting, 4K resolution, authentic UGC style.`
  },
  {
    tipo: 'print-conversa',
    publico: 'feminino',
    template: (produto) => `Ultra-realistic screenshot of a genuine WhatsApp conversation between two friends. iPhone interface, dark mode or light mode, showing a natural chat flow. Contact name at top with a casual profile picture. The conversation shows authentic excitement: Friend 1 asking for advice about a problem, Friend 2 enthusiastically recommending ${produto} with multiple messages showing genuine experience. Include realistic details: typing indicators, blue checkmarks, timestamps (recent, like "today" or "yesterday"), casual language with typos or emojis that feel real. One message includes a photo of the product in use, taken casually. The tone is helpful and personal, like real friends talking. Natural screenshot lighting on phone screen, slight glare or reflection that makes it feel authentic. Battery and signal indicators visible at top. The conversation feels spontaneous and unscripted, not like an ad. iPhone X or newer interface, captured screen, ultra-realistic UGC style.`
  },
  {
    tipo: 'review-tiktok',
    publico: 'jovem',
    template: (produto) => `Ultra-realistic TikTok style video frame - vertical 9:16 format. Young person (18-25) speaking directly to camera, sitting or standing in their bedroom or living space. Natural lighting from window or ring light creates flattering but authentic look. They're mid-sentence, with genuine animated expression, casual hand gestures. Wearing everyday clothes - hoodie, t-shirt, or casual outfit. In the frame with them: ${produto}. The scene has that real TikTok aesthetic - slightly imperfect framing, phone camera quality, natural background (posters, plants, messy but relatable space). Their expression shows honest enthusiasm, like they're telling their followers about a genuine discovery. Visible TikTok UI elements could include: username at bottom, caption text, like/comment/share icons on right side. The lighting has that soft, slightly overexposed quality popular on TikTok. Shot on iPhone front camera, vertical video frame, natural authentic lighting, Gen Z aesthetic.`
  },
  {
    tipo: 'influencer-lifestyle',
    publico: 'empresarios',
    template: (produto) => `Ultra-realistic lifestyle photo of a successful professional in their 30s-40s, captured in a sophisticated yet authentic moment. They're in an upscale setting - modern home office, luxury apartment, or trendy coworking space. Natural abundant lighting from large windows. They're wearing smart casual business attire - blazer, quality shirt, or elegant casual wear. Their posture and expression convey confidence and success. Prominently but naturally featured in the scene: ${produto}. The photo has high-quality iPhone 15 Pro characteristics - sharp focus, natural color grading, professional but not overly edited. Background shows subtle wealth indicators - MacBook, designer furniture, minimalist décor, books, or premium coffee setup. The composition feels candid yet polished, like a lifestyle influencer's Instagram post. Natural depth of field keeps focus on subject and product. The vibe is "successful person sharing what works for them". Shot on iPhone 15 Pro Max, natural lighting, shallow depth of field, 4K, authentic luxury lifestyle aesthetic.`
  },
  {
    tipo: 'foto-espelho',
    publico: 'feminino',
    template: (produto) => `Ultra-realistic mirror selfie of a young woman in her 20s, taken in her bedroom or bathroom. She's holding her iPhone up to capture the reflection, natural casual pose. The mirror is clean but might have a few authentic details - perhaps a sticky note, small decorations, or natural spots. She's wearing comfortable everyday clothes - leggings and crop top, jeans and t-shirt, or athleisure. Natural room lighting, perhaps with string lights or bedside lamp creating warm ambiance. Her expression is relaxed and genuine, like she's about to post on Instagram Stories. In the frame, naturally present: ${produto}. The photo has that real mirror selfie quality - you can see her phone covering part of her face, natural room mess in background (bed, clothes, furniture), authentic iPhone camera quality with natural colors and slight grain. Maybe one hand adjusting her hair or holding the product. The scene feels spontaneous and relatable, not staged. Background shows personality - posters, plants, makeup table, or closet. Shot on iPhone 14, natural indoor lighting, authentic UGC mirror selfie style.`
  },
  {
    tipo: 'reacao-surpresa',
    publico: 'jovem',
    template: (produto) => `Ultra-realistic reaction photo capturing genuine surprise and delight. Young person (18-27) in mid-reaction, mouth slightly open, eyes wide with authentic amazement, eyebrows raised. They're in a casual setting - bedroom, living room, or casual space. Natural lighting from window creates real-life atmosphere. They're wearing everyday comfortable clothes. In their hands or immediately in front of them: ${produto}. The photo has that perfect "caught in the moment" quality - slightly imperfect framing, natural iPhone camera characteristics, authentic lighting. Their body language shows real excitement - perhaps leaning forward, hands gesturing naturally. Background is lived-in and relatable - could be slightly messy, with personal items visible. The expression is the key - it needs to feel genuinely surprised and impressed, not fake or overly dramatic. Maybe they're looking at the product or looking at camera sharing their reaction. Natural depth of field, warm color tones. Shot on iPhone 14, burst mode capture, natural lighting, 4K resolution, authentic spontaneous reaction style.`
  }
];

const tiposCriativos = [
  { id: 'selfie' as TipoCriativo, label: 'Selfie recomendação' },
  { id: 'antes-depois' as TipoCriativo, label: 'Antes e depois' },
  { id: 'print-conversa' as TipoCriativo, label: 'Print falso de conversa' },
  { id: 'review-tiktok' as TipoCriativo, label: 'Review estilo TikTok' },
  { id: 'influencer-lifestyle' as TipoCriativo, label: 'Influencer lifestyle' },
  { id: 'foto-espelho' as TipoCriativo, label: 'Foto casual no espelho' },
  { id: 'reacao-surpresa' as TipoCriativo, label: 'Reação surpresa' }
];

const tiposPublico = [
  { id: 'masculino' as TipoPublico, label: 'Masculino' },
  { id: 'feminino' as TipoPublico, label: 'Feminino' },
  { id: 'jovem' as TipoPublico, label: 'Jovem' },
  { id: '30+' as TipoPublico, label: '+30' },
  { id: '40+' as TipoPublico, label: '+40' },
  { id: 'empresarios' as TipoPublico, label: 'Empresários' },
  { id: 'estudantes' as TipoPublico, label: 'Estudantes' }
];

export default function GeradorPromptsUGCView() {
  const [produto, setProduto] = useState('');
  const [tipoCriativo, setTipoCriativo] = useState<TipoCriativo>('selfie');
  const [tipoPublico, setTipoPublico] = useState<TipoPublico>('jovem');
  const [promptGerado, setPromptGerado] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);

  const gerarPrompt = () => {
    if (!produto.trim()) {
      alert('Por favor, insira o produto ou serviço que deseja promover.');
      return;
    }

    const template = promptTemplates.find(
      t => t.tipo === tipoCriativo && t.publico === tipoPublico
    );

    if (template) {
      const prompt = template.template(produto);
      setPromptGerado(prompt);
      setShowResult(true);
    } else {
      const fallbackTemplate = promptTemplates.find(t => t.tipo === tipoCriativo);
      if (fallbackTemplate) {
        const prompt = fallbackTemplate.template(produto);
        setPromptGerado(prompt);
        setShowResult(true);
      }
    }
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
    setProduto('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Gerador de Prompts UGC para Sora
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Gere prompts prontos para criar imagens ultra realistas no estilo UGC usando o Sora.
          </p>
        </div>

        {!showResult ? (
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8 space-y-8">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                Qual produto ou serviço você quer promover?
              </label>
              <input
                type="text"
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
                placeholder="Ex: curso online, produto de skincare, app fitness..."
                className="w-full px-4 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                Escolha o tipo de criativo
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tiposCriativos.map((tipo) => (
                  <button
                    key={tipo.id}
                    onClick={() => setTipoCriativo(tipo.id)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      tipoCriativo === tipo.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
                    }`}
                  >
                    {tipo.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                Escolha o público-alvo
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {tiposPublico.map((publico) => (
                  <button
                    key={publico.id}
                    onClick={() => setTipoPublico(publico.id)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      tipoPublico === publico.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
                    }`}
                  >
                    {publico.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={gerarPrompt}
              className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all flex items-center justify-center space-x-3"
            >
              <Sparkles className="w-6 h-6" />
              <span>GERAR PROMPT UGC</span>
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <span>Seu Prompt Está Pronto!</span>
                </h3>
              </div>

              <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-6 mb-6">
                <p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                  {promptGerado}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={copiarPrompt}
                  className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center space-x-2"
                >
                  <Copy className="w-5 h-5" />
                  <span>{copied ? 'Copiado!' : 'Copiar Prompt'}</span>
                </button>

                <button
                  onClick={gerarNovo}
                  className="flex-1 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-600 transition-all flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Gerar Novo</span>
                </button>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-800/30 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-blue-300 mb-2">Dica Pro:</h4>
              <p className="text-sm text-slate-400">
                Copie este prompt e cole diretamente no Sora para gerar imagens ultra realistas no estilo UGC.
                Ajuste pequenos detalhes se necessário para personalizar ainda mais o resultado!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
