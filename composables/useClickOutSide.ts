import { Ref } from 'vue'

/**
 * This is a TypeScript function that listens for clicks outside of a specified HTML element and
 * triggers a callback function when a click occurs outside of that element.
 * @param ref - A reference to a HTMLDivElement or undefined, which is used to determine if the click
 * event occurred outside of the element.
 * @param callback - A function that will be called when a click or touch event occurs outside of the
 * element referenced by the `ref` parameter.
 */
export function useClickOutSide(ref: Ref<HTMLDivElement | undefined>, callback: () => void) {
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
