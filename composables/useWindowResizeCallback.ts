export function useWindowResizeCallback(callback: () => void) {
  const resize = (_e: Event) => {
    callback()
  }

  onMounted(() => {
    callback()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', resize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('scroll', resize)
  })
}
