import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { translations, type Locale } from '@/i18n/translations'

export const useLocaleStore = defineStore('locale', () => {
  const locale = ref<Locale>('pt')

  function init() {
    const stored = localStorage.getItem('locale') as Locale | null
    if (stored === 'pt' || stored === 'en') {
      locale.value = stored
    } else {
      locale.value = navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
    }
  }

  function toggle() {
    locale.value = locale.value === 'pt' ? 'en' : 'pt'
    localStorage.setItem('locale', locale.value)
  }

  const t = computed(() => translations[locale.value])

  return { locale, t, toggle, init }
})
