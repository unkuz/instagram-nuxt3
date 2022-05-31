export function useWindowResizeCallback(callback: Function) {
  const resize = (e: UIEvent) => {
    callback()
  }

  onMounted(() => {
    callback()
    window.addEventListener('resize', resize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })
}
