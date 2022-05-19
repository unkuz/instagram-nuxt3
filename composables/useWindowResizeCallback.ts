export function useWindowResizeCallback(callback: Function): void {
  const resize = (e: any) => {
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
