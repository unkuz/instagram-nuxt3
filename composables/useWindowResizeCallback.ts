export function useWindowResizeCallback(callback: Function) {
  const resize = (e: UIEvent) => {
    callback()
  }

  onMounted(() => {
    callback()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll',resize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('scroll',resize)
  })
}
