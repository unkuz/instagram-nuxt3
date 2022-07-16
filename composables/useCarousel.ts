export const useCarousel = (containerMediaRef) => {
  const currentIndex = ref(0)
  watch(currentIndex, (idx) => {
    containerMediaRef.value.style.transform = `translateX(${
      -containerMediaRef.value.getClientRects()[0].width * idx
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
