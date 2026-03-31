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
  const rows = listRef.value.querySelectorAll<HTMLElement>('.skill-row')
  rows.forEach((row, i) => {
    triggers.push(
      ScrollTrigger.create({
        trigger: row,
        start: 'top 90%',
        onEnter: () =>
          gsap.from(row, { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out', delay: i * 0.05 }),
      }),
    )
  })
})

onUnmounted(() => triggers.forEach((t) => t.kill()))
</script>

<template>
  <section
    id="skills"
    class="border-t border-neutral-300 dark:border-neutral-800 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 pt-24">
      <p
        class="text-xs font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-16"
      >
        — 03 / {{ t.skills.label }}
      </p>
    </div>

    <div ref="listRef" class="border-t border-neutral-300 dark:border-neutral-800">
      <div
        v-for="group in t.skills.groups"
        :key="group.category"
        class="skill-row border-b border-neutral-300 dark:border-neutral-800 grid md:grid-cols-[200px_1fr] items-baseline"
      >
        <div
          class="px-6 md:px-12 pt-6 pb-2 md:py-8 md:border-r border-neutral-300 dark:border-neutral-800"
        >
          <span
            class="text-xs font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-600"
          >
            {{ group.category }}
          </span>
        </div>
        <p
          class="px-6 md:px-12 pb-6 md:py-8 text-sm font-medium leading-relaxed text-neutral-700 dark:text-neutral-300"
        >
          {{ group.skills.join(' · ') }}
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 pb-24" />
  </section>
</template>
