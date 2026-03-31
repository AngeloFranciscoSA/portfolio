import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  function apply() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  function toggle() {
    isDark.value = !isDark.value
    apply()
  }

  function init() {
    const stored = localStorage.getItem('theme')
    isDark.value = stored === 'dark'
    apply()
  }

  return { isDark, toggle, init }
})
