export function useClickOutSide(ref: HTMLDivElement | null, callback: Function) {
  const listener = (e: MouseEvent | TouchEvent) => {
    console.log('HEHE')
    e.stopPropagation()
    console.log('REF', ref)
    if (!ref || ref.contains(e.target as HTMLElement)) {
      return
    }
    callback()
  }

  onMounted(() => {
    window.addEventListener('mousedown', listener)
    window.addEventListener('touchstart', listener)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousedown', listener)
    window.removeEventListener('touchstart', listener)
  })
}

