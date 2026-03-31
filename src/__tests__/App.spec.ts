import { describe, it, expect, beforeEach, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import App from '../App.vue'

vi.mock('gsap', () => ({
  gsap: { registerPlugin: vi.fn(), from: vi.fn(), to: vi.fn(), fromTo: vi.fn() },
}))
vi.mock('gsap/ScrollTrigger', () => ({ ScrollTrigger: { update: vi.fn(), create: vi.fn() } }))
vi.mock('@/composables/useLenis', () => ({
  useLenis: () => ({ init: vi.fn(), destroy: vi.fn() }),
}))

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }))
    vi.stubGlobal('navigator', { language: 'pt-BR' })
  })

  it('mounts without errors', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders a <main> element', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('renders a <footer> element', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.find('footer').exists()).toBe(true)
  })

  it('footer contains the author name', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.find('footer').text()).toContain('Ângelo Francisco')
  })
})
