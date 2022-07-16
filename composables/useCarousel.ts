import { Ref } from 'nuxt/dist/app/compat/capi'

export const useCarousel = (containerMediaRef: Ref<HTMLDivElement>) => {
  const currentIndex = ref(0)
  watch(currentIndex, (idx) => {
    containerMediaRef.value.style.transform = `translateX(${
      -containerMediaRef.value.offsetWidth * idx
    }px)`
  })
  const next = () => {
    currentIndex.value += 1
  }
  const prev = () => {
    currentIndex.value -= 1
  }

  return { next, prev }
}
