import { Ref } from 'vue'

export function useClickOutSide(ref: Ref<HTMLDivElement | null>, callback: () => void) {
  const listener = (e: MouseEvent | TouchEvent) => {
    e.stopPropagation()
    const el = unref(ref)

    if (!el || el.contains(e.target as HTMLElement)) {
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
