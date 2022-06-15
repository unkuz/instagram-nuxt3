export function useCenterElement(refElement, refFile) {
  const position = () => {
    Object.assign(refElement.value.style, {
      top: `${window.scrollY + window.innerHeight / 2 - refElement.value.clientHeight / 2}px`,
      left: `${window.innerWidth / 2 - refElement.value.clientWidth / 2}px`,
    })
  }

  onMounted(() => {
    position()
    window.addEventListener('scroll', position)
    window.addEventListener('resize', position)
  })
  onUpdated(() => {
    position()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', position)
    window.removeEventListener('resize', position)
  })
}
