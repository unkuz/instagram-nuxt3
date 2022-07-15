export function useClickOutSide(ref: any, callback: Function) {
  const listener = (event: MouseEvent) => {
    event.stopPropagation()
    if (!ref.value || ref.value.contains(event.target)) {
      return
    }
    callback()
  }

  onMounted(() => {
    window.addEventListener('mousedown', listener)
    window.addEventListener('touchstart', listener)
  })

  onUnmounted(() => {
    window.removeEventListener('mousedown', listener)
    window.removeEventListener('touchstart', listener)
  })
}
