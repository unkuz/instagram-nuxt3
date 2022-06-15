export function useTopBackDrop(refElement: any) {
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
