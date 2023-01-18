import { useWindowResizeCallback } from '@@/composables'
import { gsap } from 'gsap'
import { Ref } from 'vue'

export const useCarousel = (containerMediaRef: Ref<HTMLDivElement | null>) => {
  const current = ref<number>(0)

  const transition = () => {
    if (containerMediaRef.value) {
      gsap.to(containerMediaRef.value, {
        translateX: -containerMediaRef.value.offsetWidth * current.value,
        duration: 0.2,
      })
    }
  }

  useWindowResizeCallback(transition)

  watch(current, transition)

  const next = () => {
    if (containerMediaRef.value) {
      if (current.value === containerMediaRef.value.childElementCount - 1) {
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
