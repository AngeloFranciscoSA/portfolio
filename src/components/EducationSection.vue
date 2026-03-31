<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { storeToRefs } from 'pinia'
import { useLocaleStore } from '@/stores/locale'

gsap.registerPlugin(ScrollTrigger)

const { t } = storeToRefs(useLocaleStore())

const listRef = ref<HTMLElement | null>(null)
const triggers: ScrollTrigger[] = []

onMounted(() => {
  if (!listRef.value) return
  const rows = listRef.value.querySelectorAll<HTMLElement>('.edu-row')
  rows.forEach((row, i) => {
    triggers.push(
      ScrollTrigger.create({
        trigger: row,
        start: 'top 90%',
        onEnter: () =>
          gsap.from(row, { y: 24, opacity: 0, duration: 0.55, ease: 'power2.out', delay: i * 0.1 }),
      }),
    )
  })
})

onUnmounted(() => triggers.forEach((t) => t.kill()))
</script>

<template>
  <section
    id="education"
    class="border-t border-neutral-300 dark:border-neutral-800 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 pt-24">
      <p
        class="text-xs font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-16"
      >
        — 04 / {{ t.education.label }}
      </p>
    </div>

    <div ref="listRef" class="border-t border-neutral-300 dark:border-neutral-800">
      <div
        v-for="item in t.education.items"
        :key="item.degree"
        class="edu-row border-b border-neutral-300 dark:border-neutral-800 px-6 md:px-12 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-12"
      >
        <div class="flex flex-wrap items-center gap-3 md:gap-6 min-w-0">
          <span
            class="text-xs font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 tabular-nums shrink-0"
          >
            {{ item.period }}
          </span>
          <h3 class="font-display font-bold text-lg md:text-xl uppercase leading-tight truncate">
            {{ item.degree }}
          </h3>
          <span
            v-if="item.current"
            class="text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 shrink-0"
          >
            ● {{ t.education.ongoing }}
          </span>
        </div>
        <p
          class="text-xs font-semibold text-neutral-500 dark:text-neutral-500 shrink-0 md:text-right"
        >
          {{ item.institution }}
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 pb-24" />
  </section>
</template>
