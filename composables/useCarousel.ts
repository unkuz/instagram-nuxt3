import { useWindowResizeCallback } from '@/composables'
import { gsap } from 'gsap'
import { Ref } from 'vue'

export const useCarousel = (containerMediaRef: Ref<HTMLElement | undefined>) => {
  const current = ref<number>(0)

  const transition = () => {
    const containerMediaEl = unref(containerMediaRef)
    if (containerMediaEl) {
      gsap.to(containerMediaEl, {
        translateX: -containerMediaEl.offsetWidth * current.value,
        duration: 0.2,
      })
    }
  }

  useWindowResizeCallback(transition)

  watch(current, transition)

  const next = () => {
    const containerMediaEl = unref(containerMediaRef)

    if (containerMediaEl) {
      if (current.value === containerMediaEl.childElementCount - 1) {
        return
      }
      current.value += 1
    }
  }

  const prev = () => {
    if (current.value === 0) {
      return
    }
    current.value -= 1
  }

  return { next, prev, current }
}
