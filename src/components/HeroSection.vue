<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { storeToRefs } from 'pinia'
import { useLocaleStore } from '@/stores/locale'

const { t } = storeToRefs(useLocaleStore())

const metaRef = ref<HTMLElement | null>(null)
const ruleTopRef = ref<HTMLElement | null>(null)
const nameRef = ref<HTMLElement | null>(null)
const ruleBottomRef = ref<HTMLElement | null>(null)
const bottomRef = ref<HTMLElement | null>(null)

let tl: gsap.core.Timeline | null = null

onMounted(() => {
  tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from(metaRef.value, { y: 16, opacity: 0, duration: 0.6 })
    .from(
      ruleTopRef.value,
      { scaleX: 0, transformOrigin: 'left center', duration: 0.7, ease: 'power2.inOut' },
      '-=0.2',
    )
    .from(nameRef.value, { y: 70, opacity: 0, duration: 0.9 }, '-=0.4')
    .from(
      ruleBottomRef.value,
      { scaleX: 0, transformOrigin: 'left center', duration: 0.7, ease: 'power2.inOut' },
      '-=0.5',
    )
    .from(bottomRef.value, { y: 16, opacity: 0, duration: 0.6 }, '-=0.3')
})

onUnmounted(() => tl?.kill())
</script>

<template>
  <section id="hero" class="min-h-screen flex flex-col pt-20 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
    <div
      ref="metaRef"
      class="flex items-center justify-between py-4 text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-500"
    >
      <span>São José dos Campos, SP</span>
      <span>{{ new Date().getFullYear() }}</span>
    </div>

    <div ref="ruleTopRef" class="w-full h-px bg-neutral-300 dark:bg-neutral-800" />

    <div class="flex-1 flex items-center py-8">
      <h1
        ref="nameRef"
        class="font-display font-extrabold leading-[0.9] tracking-tight text-[clamp(2rem,8vw,6rem)] uppercase w-full"
      >
        Ângelo<br />Francisco
      </h1>
    </div>

    <div ref="ruleBottomRef" class="w-full h-px bg-neutral-300 dark:bg-neutral-800 mb-8" />

    <div ref="bottomRef" class="flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div>
        <p
          class="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-500 mb-3"
        >
          {{ t.hero.label }}
        </p>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm">
          {{ t.hero.stack }}
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-6">
        <a
          href="https://linkedin.com/in/angelofransicosa"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-bold tracking-widest uppercase border-b border-current pb-0.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/AngeloFranciscoSA"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-bold tracking-widest uppercase border-b border-current pb-0.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
        >
          GitHub ↗
        </a>
        <a
          href="/Curriculo_Angelo.pdf"
          download
          class="text-xs font-bold tracking-widest uppercase border-b border-current pb-0.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
        >
          {{ t.hero.downloadCV }} ↓
        </a>
      </div>
    </div>
  </section>
</template>
