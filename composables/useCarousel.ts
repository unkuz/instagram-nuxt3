import { useWindowResizeCallback } from '@@/composables'
import { gsap } from 'gsap'

export const useCarousel = (containerMediaRef: HTMLDivElement | null) => {
  let current = $ref<number>(0)

  const transition = () => {
    if (containerMediaRef) {
      gsap.to(containerMediaRef, {
        translateX: -containerMediaRef.offsetWidth * current,
        duration: 0.2,
      })
    }
  }

  useWindowResizeCallback(transition)

  watch(current, transition)

  const next = () => {
    if (containerMediaRef) {
      if (current === containerMediaRef.childElementCount - 1) {
        return
      }
      current += 1
    }
  }

  const prev = () => {
    if (current === 0) {
      return
    }
    current -= 1
  }

  return { next, prev, current }
}

