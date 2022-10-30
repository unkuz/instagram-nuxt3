import { useWindowResizeCallback } from '@@/composables'
import { gsap } from 'gsap'
import { Ref } from 'vue'

export const useCarousel = (containerMediaRef: Ref<HTMLDivElement>) => {
  const current = ref(0)

  const transition = () => {
    gsap.to(containerMediaRef.value, {
      translateX: -containerMediaRef.value.offsetWidth * current.value,
      duration: 0.2,
      ease: "back.out(1.7)"
    })
  }

  useWindowResizeCallback(transition)

  watch(current, transition)

  const next = () => {
    if (current.value === containerMediaRef.value.childElementCount - 1) {
      return
    }
    current.value += 1
  }

  const prev = () => {
    if (current.value === 0) {
      return
    }
    current.value -= 1
  }

  return { next, prev, current }
}
