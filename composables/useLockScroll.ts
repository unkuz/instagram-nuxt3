import { getScrollbarWidth } from '@@/utils'

export function useLockScroll() {
  const overflow = ref<string>('')

  onMounted(() => {
    const htmlEl = document.getElementsByTagName('html')[0]
    const scrollBarW = getScrollbarWidth()
    overflow.value = window.getComputedStyle(document.body).overflow

    htmlEl.style.overflow = 'hidden'
    htmlEl.style.width = `${window.innerWidth - scrollBarW}px`
  })

  onBeforeUnmount(() => {
    const htmlEl = document.getElementsByTagName('html')[0]
    htmlEl.style.overflow = overflow.value
    htmlEl.style.width = `auto`
  })
}
