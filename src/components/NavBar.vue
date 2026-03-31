<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import { useLocaleStore } from '@/stores/locale'

const themeStore = useThemeStore()
const localeStore = useLocaleStore()
const { isDark } = storeToRefs(themeStore)
const { t, locale } = storeToRefs(localeStore)

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 bg-[#f5f4ef]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-neutral-300 dark:border-neutral-800 transition-colors duration-300"
  >
    <nav class="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
      <span class="font-display font-bold text-sm tracking-widest uppercase">AF</span>

      <ul class="hidden md:flex items-center gap-10">
        <li
          v-for="(label, key) in {
            about: t.nav.about,
            experience: t.nav.experience,
            skills: t.nav.skills,
            education: t.nav.education,
          }"
          :key="key"
        >
          <a
            :href="`#${key}`"
            class="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 hover:text-[#0a0a0a] dark:hover:text-[#f5f4ef] transition-colors duration-200"
            @click.prevent="scrollTo(`#${key}`)"
          >
            {{ label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <button
          class="text-xs font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 hover:text-[#0a0a0a] dark:hover:text-[#f5f4ef] transition-colors duration-200"
          :aria-label="locale === 'pt' ? 'Switch to English' : 'Mudar para Português'"
          @click="localeStore.toggle()"
        >
          {{ locale === 'pt' ? 'EN' : 'PT' }}
        </button>

        <span class="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />

        <button
          class="text-neutral-500 dark:text-neutral-400 hover:text-[#0a0a0a] dark:hover:text-[#f5f4ef] transition-colors duration-200"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="themeStore.toggle()"
        >
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            />
          </svg>
        </button>

        <span class="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />

        <a
          href="mailto:angelo.francisco0002@gmail.com"
          class="text-xs font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 hover:text-[#0a0a0a] dark:hover:text-[#f5f4ef] transition-colors duration-200"
        >
          {{ t.nav.contact }} ↗
        </a>
      </div>
    </nav>
  </header>
</template>
