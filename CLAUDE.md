# CLAUDE.md

Guia de referência para o Claude Code neste projeto.

---

## Visão Geral

Portfólio pessoal de Angelo. Projeto Vue 3 + Vite + TypeScript, atualmente em fase inicial de desenvolvimento (scaffold gerado, `App.vue` ainda é placeholder).

Há um currículo em PDF disponível em `public/Curriculo_Angelo.pdf`.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Estilo | Tailwind CSS ^4 (via `@tailwindcss/vite`) |
| Estado | Pinia ^3 |
| Build | Vite ^8 |
| Linguagem | TypeScript ~6 |
| Testes | Vitest ^4 + @vue/test-utils + jsdom |
| Lint | oxlint + eslint (plugin-vue, eslint-config-prettier) |
| Format | Prettier 3.8 |

---

## Estrutura do Projeto

```
portifolio-angelo/
├── public/
│   ├── favicon.ico
│   └── Curriculo_Angelo.pdf
├── src/
│   ├── __tests__/          # Testes unitários (Vitest)
│   ├── components/
│   │   ├── NavBar.vue          # Navbar fixa com scroll suave
│   │   ├── HeroSection.vue     # Hero com nome, título e CTAs
│   │   ├── AboutSection.vue    # Resumo + stats
│   │   ├── ExperienceSection.vue # Timeline de experiências
│   │   ├── SkillsSection.vue   # Habilidades agrupadas por categoria
│   │   └── EducationSection.vue # Formação acadêmica
│   ├── i18n/
│   │   └── translations.ts     # Todas as traduções PT e EN
│   ├── stores/
│   │   ├── theme.ts            # Toggle dark/light + localStorage
│   │   ├── locale.ts           # Toggle PT/EN + auto-detect browser + localStorage
│   │   └── counter.ts          # (scaffold, não usado)
│   ├── App.vue             # Componente raiz (monta todas as seções)
│   ├── main.ts             # Entry point
│   └── style.css           # CSS global (importa Tailwind)
├── index.html
├── vite.config.ts
├── vitest.config.ts
├── eslint.config.ts
├── tsconfig.json           # Referência para tsconfig.app, node e vitest
├── tsconfig.app.json       # Compilação do app (src/)
├── tsconfig.node.json      # Compilação de arquivos de config
└── tsconfig.vitest.json    # Compilação dos testes
```

---

## Comandos

```bash
npm run dev          # Servidor de desenvolvimento (Vite)
npm run build        # Type-check + build de produção
npm run preview      # Preview do build
npm run test:unit    # Vitest (modo watch)
npm run lint         # oxlint --fix, depois eslint --fix
npm run format       # Prettier sobre src/
```

---

## Convenções de Código

### Vue
- Sempre usar `<script setup lang="ts">` nos componentes
- Composition API — sem Options API
- Styles com `scoped` por padrão

### TypeScript
- `noUncheckedIndexedAccess` está habilitado — cuidado com acessos a arrays e objetos
- Alias `@/` aponta para `src/` — usar em todos os imports internos

### Pinia (Stores)
- Usar Setup Stores (função, não objeto de opções)
- Arquivos em `src/stores/`
- Exemplo de referência: `src/stores/counter.ts`

### Testes
- Arquivos em `src/__tests__/`, com sufixo `.spec.ts`
- Environment: jsdom
- Usar `@vue/test-utils` para montar componentes Vue

---

## Configurações Relevantes

### Path Alias
`@/` → `src/` (configurado em `vite.config.ts` e `tsconfig.app.json`)

### Linting
O eslint usa `oxlint` como pré-lint via `eslint-plugin-oxlint`. A ordem de execução é:
1. `oxlint` (mais rápido, detecta a maioria dos problemas)
2. `eslint` (regras Vue + TypeScript)

Prettier é delegado via `eslint-config-prettier` (desabilita regras de formatação no eslint).

---

## Seções do Portfólio

| Seção | Componente | id HTML |
|---|---|---|
| Navbar | `NavBar.vue` | — |
| Hero | `HeroSection.vue` | `#hero` |
| Sobre | `AboutSection.vue` | `#about` |
| Experiência | `ExperienceSection.vue` | `#experience` |
| Habilidades | `SkillsSection.vue` | `#skills` |
| Educação | `EducationSection.vue` | `#education` |

### Design System (Tailwind — dual theme)
| Token | Light | Dark |
|---|---|---|
| Bg principal | `bg-gray-50` | `dark:bg-slate-950` |
| Bg alternado | `bg-white` | `dark:bg-slate-900` |
| Cards | `bg-white border-gray-200` | `dark:bg-slate-900 dark:border-slate-800` |
| Texto principal | `text-gray-900` | `dark:text-white` |
| Texto secundário | `text-gray-600` | `dark:text-slate-300` |
| Texto muted | `text-gray-400` | `dark:text-slate-500` |
| Accent | `indigo-500/600` | `dark:indigo-400` |
| Badges skill | `bg-indigo-50 text-indigo-600` | `dark:bg-indigo-500/10 dark:text-indigo-300` |

### Dark Mode (Tailwind v4)
- Ativado via classe `dark` na tag `<html>`
- Configurado em `style.css` com `@custom-variant dark (&:where(.dark, .dark *))`
- Script inline no `index.html` previne FOUC (flash antes do JS carregar)

### i18n
- Idiomas: PT (padrão) e EN
- Auto-detecção via `navigator.language` na primeira visita
- Persiste escolha em `localStorage` (chave `locale`)
- Todo conteúdo está em `src/i18n/translations.ts`
- Componentes usam `storeToRefs(useLocaleStore())` para acessar `t`

## Pendências

- Sem roteamento (Vue Router não instalado — página única, não necessário ainda)
- Sem projetos/portfólio de projetos pessoais ainda
