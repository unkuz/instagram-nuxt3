import { Ref } from 'vue'

/**
 * This function sets the top position of a given HTML div element to the current scroll position of
 * the window and updates it on scroll.
 * @param refElement - A reference to a HTMLDivElement or null element that will be used to set the top
 * position of the element based on the window scroll position.
 */
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
