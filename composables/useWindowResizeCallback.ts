export function useWindowResizeCallback(callback: Function) {
  const resize = () => callback()

  onMounted(() => {
    callback()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', resize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('scroll', resize)
  })
}
