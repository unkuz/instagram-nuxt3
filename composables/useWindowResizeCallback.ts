export function useWindowResizeCallback(
  callback: Function,
  withInit: boolean = true
) {
  const resize = () => callback()

  onMounted(() => {
    if (withInit) callback()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', resize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('scroll', resize)
  })
}
