<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { storeToRefs } from 'pinia'
import { useLocaleStore } from '@/stores/locale'

gsap.registerPlugin(ScrollTrigger)

const { t } = storeToRefs(useLocaleStore())

const featuredRef = ref<HTMLElement | null>(null)
const pastJobsRef = ref<HTMLElement | null>(null)
const expanded = ref<Record<number, boolean>>({})
const triggers: ScrollTrigger[] = []

function toggle(index: number) {
  expanded.value[index] = !expanded.value[index]
}

// ── Dropdown GSAP hooks ────────────────────────────
function onEnter(el: Element, done: () => void) {
  const panel = el as HTMLElement
  panel.style.overflow = 'hidden'

  gsap.fromTo(
    panel,
    { height: 0, opacity: 0 },
    {
      height: 'auto',
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out',
      onComplete: () => {
        panel.style.overflow = ''
        done()
      },
    },
  )

  // Stagger interno: linha de mobile + highlights + tags
  const items = panel.querySelectorAll<HTMLElement>('.drop-item')
  gsap.fromTo(
    items,
    { y: 14, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, stagger: 0.07, ease: 'power2.out', delay: 0.15 },
  )
}

function onLeave(el: Element, done: () => void) {
  const panel = el as HTMLElement
  panel.style.overflow = 'hidden'

  gsap.to(panel, {
    height: 0,
    opacity: 0,
    duration: 0.35,
    ease: 'power3.in',
    onComplete: done,
  })
}

// ── ScrollTrigger ──────────────────────────────────
onMounted(() => {
  if (featuredRef.value) {
    const left = featuredRef.value.querySelector<HTMLElement>('.feat-left')
    const right = featuredRef.value.querySelector<HTMLElement>('.feat-right')

    triggers.push(
      ScrollTrigger.create({
        trigger: featuredRef.value,
        start: 'top 82%',
        onEnter: () => {
          if (left) gsap.from(left, { x: -60, opacity: 0, duration: 0.9, ease: 'power3.out' })
          if (right) {
            gsap.from(right, { x: 60, opacity: 0, duration: 0.9, ease: 'power3.out' })
            const highlights = right.querySelectorAll<HTMLElement>('.feat-highlight')
            gsap.from(highlights, {
              x: 20,
              opacity: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power2.out',
              delay: 0.3,
            })
          }
        },
      }),
    )
  }

  if (pastJobsRef.value) {
    pastJobsRef.value.querySelectorAll<HTMLElement>('.past-row').forEach((row, i) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: row,
          start: 'top 90%',
          onEnter: () =>
            gsap.from(row, {
              y: 24,
              opacity: 0,
              duration: 0.55,
              ease: 'power2.out',
              delay: i * 0.06,
            }),
        }),
      )
    })
  }
})

onUnmounted(() => triggers.forEach((t) => t.kill()))
</script>

<template>
  <section
    id="experience"
    class="border-t border-neutral-300 dark:border-neutral-800 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 pt-24">
      <p
        class="text-xs font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-16"
      >
        — 02 / {{ t.experience.label }}
      </p>
    </div>

    <!-- Featured: current job -->
    <div
      ref="featuredRef"
      class="border-t border-neutral-300 dark:border-neutral-800 grid md:grid-cols-2"
    >
      <div
        v-if="t.experience.jobs[0]"
        class="feat-left px-6 md:px-12 py-12 md:border-r border-neutral-300 dark:border-neutral-800 flex flex-col justify-between gap-8"
      >
        <div>
          <span
            class="text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-4 block"
          >
            ● {{ t.experience.current }}
          </span>
          <h2 class="font-display font-extrabold text-5xl md:text-6xl uppercase leading-none mb-4">
            {{ t.experience.jobs[0].company }}
          </h2>
          <p class="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            {{ t.experience.jobs[0].role }}
          </p>
        </div>
        <div
          class="flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-400 dark:text-neutral-600 tracking-wide"
        >
          <span>{{ t.experience.jobs[0].period }}</span>
          <span>{{ t.experience.jobs[0].location }}</span>
        </div>
      </div>

      <div
        v-if="t.experience.jobs[0]"
        class="feat-right px-6 md:px-12 py-12 border-t md:border-t-0 border-neutral-300 dark:border-neutral-800"
      >
        <ul class="space-y-3 mb-8">
          <li
            v-for="(h, i) in t.experience.jobs[0].highlights"
            :key="i"
            class="feat-highlight text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-3"
          >
            <span class="text-indigo-600 dark:text-indigo-500 shrink-0 mt-0.5 font-bold">—</span>
            {{ h }}
          </li>
        </ul>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in t.experience.jobs[0].tags"
            :key="tag"
            class="text-xs font-bold tracking-widest uppercase px-3 py-1 border border-neutral-300 dark:border-neutral-800 text-neutral-500 dark:text-neutral-500"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Past jobs — expandable rows -->
    <div ref="pastJobsRef" class="border-t border-neutral-300 dark:border-neutral-800">
      <div
        v-for="(job, index) in t.experience.jobs.slice(1)"
        :key="job.company + job.period"
        class="past-row border-b border-neutral-300 dark:border-neutral-800"
      >
        <!-- Header row -->
        <button
          class="w-full px-6 md:px-12 py-8 grid grid-cols-[1fr_auto] md:grid-cols-[160px_1fr_1fr_auto] gap-4 md:gap-8 items-center text-left hover:bg-neutral-100 dark:hover:bg-neutral-900/40 transition-colors duration-150"
          @click="toggle(index)"
        >
          <span
            class="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 tabular-nums hidden md:block"
          >
            {{ job.period }}
          </span>
          <h3 class="font-display font-bold text-xl md:text-2xl uppercase leading-none">
            {{ job.company }}
          </h3>
          <div class="hidden md:block">
            <p class="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
              {{ job.role }}
            </p>
            <p class="text-xs text-neutral-400 dark:text-neutral-600 mt-0.5">{{ job.location }}</p>
          </div>
          <span
            :class="[
              'text-neutral-400 dark:text-neutral-600 text-xl leading-none transition-transform duration-300 shrink-0 justify-self-end select-none',
              expanded[index] ? 'rotate-45' : 'rotate-0',
            ]"
            >+</span
          >
        </button>

        <!-- Expandable panel — GSAP via JS hooks -->
        <Transition :css="false" @enter="onEnter" @leave="onLeave">
          <div
            v-if="expanded[index]"
            class="border-t border-neutral-200 dark:border-neutral-800/60"
          >
            <!-- mobile: period + location -->
            <p
              class="drop-item px-6 md:px-12 pt-6 text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 md:hidden"
            >
              {{ job.period }} · {{ job.location }}
            </p>

            <!-- highlights -->
            <ul class="px-6 md:px-12 mt-4 md:mt-6 mb-6 space-y-3 max-w-3xl">
              <li
                v-for="(h, i) in job.highlights"
                :key="i"
                class="drop-item text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-3"
              >
                <span class="text-indigo-600 dark:text-indigo-500 shrink-0 mt-0.5 font-bold"
                  >—</span
                >
                {{ h }}
              </li>
            </ul>

            <!-- tags -->
            <div class="drop-item px-6 md:px-12 pb-8 flex flex-wrap gap-2">
              <span
                v-for="tag in job.tags"
                :key="tag"
                class="text-xs font-bold tracking-widest uppercase px-3 py-1 border border-neutral-300 dark:border-neutral-800 text-neutral-500 dark:text-neutral-500"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 pb-24" />
  </section>
</template>
