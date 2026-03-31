<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { storeToRefs } from 'pinia'
import { useLocaleStore } from '@/stores/locale'

gsap.registerPlugin(ScrollTrigger)

const { t } = storeToRefs(useLocaleStore())

const bioRef = ref<HTMLElement | null>(null)
const photoRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)

const triggers: ScrollTrigger[] = []

onMounted(() => {
  if (bioRef.value) {
    triggers.push(
      ScrollTrigger.create({
        trigger: bioRef.value,
        start: 'top 85%',
        onEnter: () => {
          gsap.from(bioRef.value, { y: 50, opacity: 0, duration: 0.9, ease: 'power3.out' })
          if (photoRef.value) {
            gsap.from(photoRef.value, {
              scale: 1.04,
              opacity: 0,
              duration: 1,
              ease: 'power3.out',
              delay: 0.15,
            })
          }
        },
      }),
    )
  }

  if (statsRef.value) {
    const stats = statsRef.value.querySelectorAll<HTMLElement>('.stat-item')
    triggers.push(
      ScrollTrigger.create({
        trigger: statsRef.value,
        start: 'top 88%',
        onEnter: () =>
          gsap.from(stats, { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' }),
      }),
    )
  }
})

onUnmounted(() => triggers.forEach((t) => t.kill()))
</script>

<template>
  <section
    id="about"
    class="border-t border-neutral-300 dark:border-neutral-800 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
      <p
        class="text-xs font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-12"
      >
        — 01 / {{ t.about.label }}
      </p>

      <!-- Bio + foto lado a lado -->
      <div class="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-start">
        <p
          ref="bioRef"
          class="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-snug"
        >
          {{ t.about.bio }}
        </p>

        <div ref="photoRef" class="w-48 md:w-56 lg:w-64 shrink-0 mx-auto md:mx-0">
          <img
            src="/profile.jpeg"
            alt="Ângelo Francisco"
            class="w-full aspect-[3/4] object-cover object-top"
          />
        </div>
      </div>
    </div>

    <!-- Stats strip -->
    <div
      ref="statsRef"
      class="border-t border-neutral-300 dark:border-neutral-800 grid grid-cols-2 md:grid-cols-4"
    >
      <div
        v-for="(stat, i) in t.about.stats"
        :key="stat.label"
        class="stat-item py-8 px-5 md:px-12 md:py-10 flex flex-col gap-2 overflow-hidden"
        :class="[
          i < t.about.stats.length - 1 ? 'border-r border-neutral-300 dark:border-neutral-800' : '',
          i >= 2 ? 'border-t md:border-t-0 border-neutral-300 dark:border-neutral-800' : '',
        ]"
      >
        <span class="font-display font-extrabold text-3xl md:text-5xl leading-none break-words">{{ stat.value }}</span>
        <span
          class="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-500"
          >{{ stat.label }}</span
        >
      </div>
    </div>
  </section>
</template>
