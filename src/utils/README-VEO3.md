# Normalização de Prompts VEO3

## Visão Geral

Este utilitário garante que prompts VEO3 copiados de fontes externas sejam convertidos automaticamente para o formato correto usado pelo aplicativo, evitando bugs de string, aspas ou quebra de layout.

## Por que usar?

Quando você copia prompts de sites externos, eles vêm com:
- Nomes de campos diferentes (`titulo`, `prompt_texto`, `sub_topico`)
- Quebras de linha problemáticas
- Espaços extras
- Aspas não normalizadas

A função `normalizeVeoPrompt` resolve todos esses problemas automaticamente.

## Como Usar

### Importar a função

```typescript
import { normalizeVeoPrompt, normalizeVeoPrompts } from './utils/normalizeVeoPrompt';
```

### Normalizar um único prompt

```typescript
const rawPrompt = {
  titulo: 'TUTORIAL DE MAQUIAGEM',
  prompt_texto: '{"scene": "4K tutorial showing makeup application..."}',
  sub_topico: 'Tutorial',
  video_exemplo_url: 'https://videos.pexels.com/video-files/12345/video.mp4',
  thumbnail_url: 'https://images.pexels.com/photos/12345/photo.jpeg'
};

const normalized = normalizeVeoPrompt(rawPrompt);
```

**Resultado:**
```typescript
{
  id: 'tutorial-de-maquiagem-a1b2',
  category: 'Tutorial',
  title: 'TUTORIAL DE MAQUIAGEM',
  prompt: '{"scene": "4K tutorial showing makeup application..."}',
  video_exemplo_url: 'https://videos.pexels.com/video-files/12345/video.mp4',
  thumbnail_url: 'https://images.pexels.com/photos/12345/photo.jpeg'
}
```

### Normalizar múltiplos prompts

```typescript
const rawPrompts = [
  {
    titulo: 'PROMPT 1',
    prompt_texto: '{"scene": "..."}',
    sub_topico: 'Categoria',
    video_exemplo_url: 'https://...',
    thumbnail_url: 'https://...'
  },
  {
    titulo: 'PROMPT 2',
    prompt_texto: '{"scene": "..."}',
    sub_topico: 'Categoria',
    video_exemplo_url: 'https://...',
    thumbnail_url: 'https://...'
  }
];

const normalized = normalizeVeoPrompts(rawPrompts);
```

## Mapeamento de Campos

| Campo Bruto        | Campo Normalizado  |
|--------------------|--------------------|
| `titulo`           | `title`            |
| `prompt_texto`     | `prompt`           |
| `sub_topico`       | `category`         |
| `video_exemplo_url`| `video_exemplo_url`|
| `thumbnail_url`    | `thumbnail_url`    |
| `gif_url`          | `gif_url`          |

## O que a normalização faz?

1. **Remove quebras de linha**: `\r\n` → espaço único
2. **Normaliza espaços**: múltiplos espaços → espaço único
3. **Remove tabs**: `\t` → espaço
4. **Remove aspas externas**: `"texto"` → `texto`
5. **Corrige escape de aspas**: `\"` → `"`
6. **Trim espaços**: remove espaços no início/fim
7. **Gera ID automático**: se não fornecido

## Adicionar Novos Prompts ao App

1. Copie os prompts brutos do site externo
2. Cole no array `rawPrompts`
3. Normalize com `normalizeVeoPrompts(rawPrompts)`
4. Adicione ao array `veo3Prompts` em `src/data/veo3Prompts.ts`

### Exemplo Completo

```typescript
import { normalizeVeoPrompts } from '../utils/normalizeVeoPrompt';
import { veo3Prompts } from '../data/veo3Prompts';

const newRawPrompts = [
  // ... cole os prompts brutos aqui
];

const newNormalizedPrompts = normalizeVeoPrompts(newRawPrompts);

export const updatedVeo3Prompts = [
  ...veo3Prompts,
  ...newNormalizedPrompts
];
```

## Segurança

A função **NÃO**:
- Usa `eval()`
- Tenta interpretar JSON internamente
- Modifica aspas internas do JSON
- Executa código dinâmico

Ela apenas normaliza a string para uso seguro no aplicativo.

## Campos Obrigatórios

- `titulo` (gera ID se ausente)
- `prompt_texto`
- `sub_topico`

Campos opcionais receberão valores padrão se ausentes.
