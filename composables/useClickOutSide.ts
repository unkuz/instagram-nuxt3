import { Ref } from 'vue'

/**
 * This function takes an input string and a delay time in seconds and returns a debounced version of
 * the input string.
 * @param {string} input - The input parameter is a string that represents the value that needs to be
 * debounced. This could be any user input such as search queries, form inputs, etc.
 * @param {number} delayTimeSecond - The `delayTimeSecond` parameter is a number that represents the
 * amount of time (in seconds) to wait before executing a function after the input has been changed.
 * This is commonly used to prevent excessive function calls when the input is changing rapidly, such
 * as in a search bar. The function will only
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
