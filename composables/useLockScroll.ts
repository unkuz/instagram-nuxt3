export function useLockScroll() {
  let originalStyle: string = ''

  onBeforeMount(() => {
    originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
  })

  onUnmounted(() => {
    document.body.style.overflow = originalStyle
  })
}
