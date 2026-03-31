# Portfólio — Ângelo Francisco

Portfólio pessoal de Ângelo Francisco Souza de Araújo, Desenvolvedor Full-Stack Sênior.
Single-page application com design Bold/Editorial, suporte a tema claro/escuro e idiomas PT/EN.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Estilo | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Estado | Pinia v3 |
| Build | Vite v8 |
| Linguagem | TypeScript ~6 |
| Animações | GSAP v3 + ScrollTrigger |
| Scroll | Lenis |
| Testes | Vitest v4 + @vue/test-utils |
| Lint | oxlint + ESLint |
| Format | Prettier |

## Funcionalidades

- **Tema claro/escuro** — toggle na navbar, detecta `prefers-color-scheme` na primeira visita, persiste em `localStorage`
- **PT / EN** — toggle na navbar, detecta `navigator.language` na primeira visita, persiste em `localStorage`
- **Animações GSAP** — timeline de entrada no hero, ScrollTrigger nas seções, dropdown da carreira com altura real animada
- **Scroll suave** — Lenis sincronizado com o ticker do GSAP
- **Download CV** — PDF disponível em `/public/Curriculo_Angelo.pdf`

## Estrutura

```
src/
├── components/
│   ├── NavBar.vue            # Navbar fixa — links, toggle tema/idioma
│   ├── HeroSection.vue       # Hero com GSAP timeline de entrada
│   ├── AboutSection.vue      # Bio + stats com ScrollTrigger
│   ├── ExperienceSection.vue # Carreira — featured job + rows expandáveis (GSAP)
│   ├── SkillsSection.vue     # Habilidades por categoria com ScrollTrigger
│   └── EducationSection.vue  # Formação com ScrollTrigger
├── composables/
│   ├── useLenis.ts           # Lenis singleton sincronizado com GSAP ticker
│   └── useVisible.ts         # IntersectionObserver composable
├── i18n/
│   └── translations.ts       # Todas as strings PT e EN
├── stores/
│   ├── theme.ts              # Toggle dark/light + localStorage
│   ├── locale.ts             # Toggle PT/EN + auto-detect + localStorage
│   └── counter.ts            # (scaffold, não utilizado)
├── App.vue                   # Raiz — registra GSAP, inicia Lenis, theme e locale
├── main.ts                   # Entry point
└── style.css                 # Tailwind + dark variant + font tokens
```

## Seções

| # | Seção | Componente | Âncora |
|---|---|---|---|
| — | Navbar | `NavBar.vue` | — |
| 01 | Sobre | `AboutSection.vue` | `#about` |
| 02 | Experiência | `ExperienceSection.vue` | `#experience` |
| 03 | Habilidades | `SkillsSection.vue` | `#skills` |
| 04 | Educação | `EducationSection.vue` | `#education` |

## Comandos

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção (type-check + build)
npm run build

# Preview do build
npm run preview

# Testes unitários
npm run test:unit

# Lint (oxlint → eslint)
npm run lint

# Formatação
npm run format
```

## Configurações relevantes

**Dark mode (Tailwind v4)**
Ativado via classe `dark` na tag `<html>`. Configurado em `style.css` com `@custom-variant dark`.
Script inline no `index.html` previne flash de tema errado antes do JS carregar.

**i18n**
Todo o conteúdo textual está centralizado em `src/i18n/translations.ts`.
Componentes acessam via `storeToRefs(useLocaleStore())`.

**Path alias**
`@/` aponta para `src/` — configurado em `vite.config.ts` e `tsconfig.app.json`.

## Contato

- Email: angelo.francisco0002@gmail.com
- LinkedIn: linkedin.com/in/angelofransicosa
- GitHub: github.com/AngeloFranciscoSA
