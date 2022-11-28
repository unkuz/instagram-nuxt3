import { getScrollbarWidth } from '@@/utils'

export function useLockScroll() {
  let originalStyle: string = ''

  onBeforeMount(() => {
    const scrollBarW = getScrollbarWidth()
    originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    document.body.style.width = `${window.innerWidth - scrollBarW}px`
  })

  onUnmounted(() => {
    document.body.style.overflow = originalStyle
    document.body.style.width = `auto`
  })
}
