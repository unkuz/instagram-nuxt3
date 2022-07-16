import { Ref } from 'nuxt/dist/app/compat/capi'

export const useCarousel = (containerMediaRef: Ref<HTMLDivElement>) => {
  const current = ref(0)
  watch(current, (idx) => {
    containerMediaRef.value.style.transform = `translateX(${
      -containerMediaRef.value.offsetWidth * idx
    }px)`
  })
  const next = () => {
    current.value += 1
  }
  const prev = () => {
    current.value -= 1
  }

  return { next, prev, current }
}
