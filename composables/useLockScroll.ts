import { getScrollbarWidth } from '@@/utils'

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
