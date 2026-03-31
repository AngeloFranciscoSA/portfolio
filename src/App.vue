<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThemeStore } from './stores/theme'
import { useLocaleStore } from './stores/locale'
import { useLenis } from './composables/useLenis'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'

gsap.registerPlugin(ScrollTrigger)

const themeStore = useThemeStore()
const localeStore = useLocaleStore()
const lenis = useLenis()

onMounted(() => {
  themeStore.init()
  localeStore.init()
  lenis.init()
})

onUnmounted(() => {
  lenis.destroy()
})
</script>

<template>
  <div
    class="min-h-screen bg-[#f5f4ef] dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-[#f5f4ef] font-sans transition-colors duration-300"
  >
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </main>
    <footer
      class="border-t border-neutral-300 dark:border-neutral-800 py-10 transition-colors duration-300"
    >
      <div
        class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-2"
      >
        <p
          class="font-display font-bold text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-600"
        >
          Ângelo Francisco
        </p>
        <p class="text-xs text-neutral-400 dark:text-neutral-600">
          {{ localeStore.t.footer.copy.replace('{year}', new Date().getFullYear().toString()) }} ·
          <a
            href="mailto:angelo.francisco0002@gmail.com"
            class="hover:text-[#0a0a0a] dark:hover:text-[#f5f4ef] transition-colors"
          >
            angelo.francisco0002@gmail.com
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>
