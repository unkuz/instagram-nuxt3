export function useCenterElement(refElement: HTMLDivElement | null, refFile: HTMLDivElement | null) {
  const position = () => {
    Object.assign(refElement!.style, {
      top: `${window.scrollY + window.innerHeight / 2 - refElement!.clientHeight / 2}px`,
      left: `${window.innerWidth / 2 - refElement!.clientWidth / 2}px`,
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

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', position)
    window.removeEventListener('resize', position)
  })
}
