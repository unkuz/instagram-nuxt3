import { Ref } from 'vue'

export function useTopBackDrop(refElement: Ref<HTMLDivElement>) {
  const handleScroll = () => {
    refElement.value.style.top = `${window.scrollY}px`
  }

  onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
