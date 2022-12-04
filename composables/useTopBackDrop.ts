import { Ref } from 'vue'

export function useTopBackDrop(refElement: Ref<HTMLDivElement | null>) {
  const handleScroll = () => {
    refElement.value!.style.top = `${window.scrollY}px`
  }

  onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
