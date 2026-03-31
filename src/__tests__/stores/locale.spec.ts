import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useLocaleStore } from '@/stores/locale'
import { translations } from '@/i18n/translations'

describe('useLocaleStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    vi.stubGlobal('navigator', { language: 'pt-BR' })
  })

  it('starts with locale = "pt"', () => {
    const store = useLocaleStore()
    expect(store.locale).toBe('pt')
  })

  it('toggle() switches PT → EN', () => {
    const store = useLocaleStore()
    store.toggle()
    expect(store.locale).toBe('en')
  })

  it('toggle() switches EN → PT', () => {
    const store = useLocaleStore()
    store.toggle()
    store.toggle()
    expect(store.locale).toBe('pt')
  })

  it('toggle() persists to localStorage', () => {
    const store = useLocaleStore()
    store.toggle()
    expect(localStorage.getItem('locale')).toBe('en')
    store.toggle()
    expect(localStorage.getItem('locale')).toBe('pt')
  })

  it('t computed returns correct translations for PT', () => {
    const store = useLocaleStore()
    expect(store.t).toEqual(translations.pt)
  })

  it('t computed returns correct translations for EN after toggle', () => {
    const store = useLocaleStore()
    store.toggle()
    expect(store.t).toEqual(translations.en)
  })

  it('init() reads "pt" from localStorage', () => {
    localStorage.setItem('locale', 'pt')
    const store = useLocaleStore()
    // force locale to something else before init to confirm init() overrides it
    store.locale = 'en'
    store.init()
    expect(store.locale).toBe('pt')
  })

  it('init() reads "en" from localStorage', () => {
    localStorage.setItem('locale', 'en')
    const store = useLocaleStore()
    store.init()
    expect(store.locale).toBe('en')
  })

  it('init() ignores unknown localStorage values and falls back to browser language', () => {
    localStorage.setItem('locale', 'fr')
    vi.stubGlobal('navigator', { language: 'pt-BR' })
    const store = useLocaleStore()
    store.init()
    expect(store.locale).toBe('pt')
  })

  it('init() auto-detects PT from browser language', () => {
    vi.stubGlobal('navigator', { language: 'pt-BR' })
    const store = useLocaleStore()
    store.init()
    expect(store.locale).toBe('pt')
  })

  it('init() auto-detects EN from non-PT browser language', () => {
    vi.stubGlobal('navigator', { language: 'en-US' })
    const store = useLocaleStore()
    store.init()
    expect(store.locale).toBe('en')
  })

  it('init() auto-detects EN for Spanish browser language', () => {
    vi.stubGlobal('navigator', { language: 'es-ES' })
    const store = useLocaleStore()
    store.init()
    expect(store.locale).toBe('en')
  })
})
