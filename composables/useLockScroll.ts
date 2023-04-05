import { getScrollbarWidth } from '@/utils'

/**
 * This function disables scrolling on the HTML element and adjusts its width to account for the
 * scrollbar.
 */
export function useLockScroll() {
  let overflow = ''

  onMounted(() => {
    const htmlEl = document.getElementsByTagName('html')[0]
    const scrollBarW = getScrollbarWidth()
    overflow = window.getComputedStyle(document.body).overflow

    htmlEl.style.overflow = 'hidden'
    htmlEl.style.width = `${window.innerWidth - scrollBarW}px`
  })

  onBeforeUnmount(() => {
    const htmlEl = document.getElementsByTagName('html')[0]
    htmlEl.style.overflow = overflow
    htmlEl.style.width = 'auto'
  })
}
