export const useModalPosition = () => {
  const x = ref(0)
  const y = ref(0)

  const position = () => {
    x.value = window.innerWidth / 2
    y.value = window.scrollY + window.innerHeight / 2
  }

  onMounted(() => {
    position()
    window.addEventListener('scroll', position)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', position)
  })
  return { x, y }
}
