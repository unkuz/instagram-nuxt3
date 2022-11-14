export function useResizeWindow() {
  const width = ref<number>(0)
  const height = ref<number>(0)

  const resize = (e: UIEvent) => {
    const target = e.target as Window
    width.value = target.innerWidth
    height.value = target.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', resize)
    width.value = window.innerWidth
    height.value = window.innerHeight
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })
  return { width, height }
}
