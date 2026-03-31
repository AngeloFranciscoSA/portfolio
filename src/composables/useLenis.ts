import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let instance: Lenis | null = null

export function useLenis() {
  function init() {
    if (instance) return

    instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Sync Lenis with GSAP ScrollTrigger
    instance.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      instance!.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }

  function destroy() {
    instance?.destroy()
    instance = null
  }

  return { init, destroy }
}
