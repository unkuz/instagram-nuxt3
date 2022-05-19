export function useLockScroll() {
  let originalStyle = ''
  onBeforeMount(() => {
    console.log('A', window.getComputedStyle(document.body).overflow)
    console.log('B', document.body.style.overflow)
    originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
  })
  onUnmounted(() => {
    document.body.style.overflow = originalStyle
  })
}
