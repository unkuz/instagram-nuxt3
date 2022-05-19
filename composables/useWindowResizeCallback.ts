export function useWindowResizeCallback(callback: Function): void {
  const resize = (e: any) => {
    callback()
  }
  onMounted(() => {
    window.addEventListener('resize', resize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })
}
