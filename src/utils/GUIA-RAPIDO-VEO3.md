# Guia Rápido: Adicionar Novos Prompts VEO3

## Passo a Passo

### 1. Copie os prompts brutos do site externo

Exemplo do formato bruto:
```javascript
{
  titulo: 'TUTORIAL DE FOTOGRAFIA',
  prompt_texto: '{"scene": "4K tutorial..."}',
  sub_topico: 'Tutorial',
  video_exemplo_url: 'https://...',
  thumbnail_url: 'https://...'
}
```

### 2. Importe a função de normalização

No arquivo `src/data/veo3Prompts.ts`:

```typescript
import { normalizeVeoPrompts } from '../utils/normalizeVeoPrompt';
```

### 3. Cole e normalize os prompts

```typescript
const novosPromptsRaw = [
  {
    titulo: 'SEU TITULO AQUI',
    prompt_texto: 'SEU PROMPT AQUI',
    sub_topico: 'SUA CATEGORIA AQUI',
    video_exemplo_url: 'SUA URL AQUI',
    thumbnail_url: 'SUA URL AQUI'
  },
  // ... mais prompts
];

const novosPromptsNormalizados = normalizeVeoPrompts(novosPromptsRaw);
```

### 4. Adicione ao array principal

```typescript
export const veo3Prompts: VEO3Prompt[] = [
  // ... prompts existentes
  ...novosPromptsNormalizados
];
```

## Pronto!

Os prompts serão automaticamente:
- Convertidos para o formato correto
- Limpos de quebras de linha problemáticas
- Com IDs gerados automaticamente
- Sem bugs de aspas ou strings

## Campos Automáticos

Se você não fornecer:
- `id` → será gerado automaticamente
- `categoria` → receberá 'Geral'
- `thumbnail_url` → receberá uma imagem padrão

## Validação

Sempre rode após adicionar novos prompts:

```bash
npm run build
```

Se o build passar, seus prompts estão corretos!
