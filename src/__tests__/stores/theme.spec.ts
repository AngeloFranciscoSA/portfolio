import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useThemeStore } from '@/stores/theme'

describe('useThemeStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    document.documentElement.classList.remove('dark')
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }))
  })

  it('starts with isDark = false', () => {
    const store = useThemeStore()
    expect(store.isDark).toBe(false)
  })

  it('toggle() flips isDark', () => {
    const store = useThemeStore()
    store.toggle()
    expect(store.isDark).toBe(true)
    store.toggle()
    expect(store.isDark).toBe(false)
  })

  it('toggle() persists to localStorage', () => {
    const store = useThemeStore()
    store.toggle()
    expect(localStorage.getItem('theme')).toBe('dark')
    store.toggle()
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('toggle() adds .dark class to <html>', () => {
    const store = useThemeStore()
    store.toggle()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggle() removes .dark class from <html>', () => {
    const store = useThemeStore()
    document.documentElement.classList.add('dark')
    store.isDark = true
    store.toggle()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('init() reads "dark" from localStorage', () => {
    localStorage.setItem('theme', 'dark')
    const store = useThemeStore()
    store.init()
    expect(store.isDark).toBe(true)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('init() reads "light" from localStorage', () => {
    localStorage.setItem('theme', 'light')
    const store = useThemeStore()
    store.init()
    expect(store.isDark).toBe(false)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('init() falls back to prefers-color-scheme: dark', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }))
    const store = useThemeStore()
    store.init()
    expect(store.isDark).toBe(true)
  })

  it('init() falls back to prefers-color-scheme: light', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }))
    const store = useThemeStore()
    store.init()
    expect(store.isDark).toBe(false)
  })
})
