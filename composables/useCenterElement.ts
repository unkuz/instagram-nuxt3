/**
 * This function centers an HTML element on the screen and updates its position on scroll or resize.
 * @param {HTMLDivElement | null} refElement - A reference to an HTMLDivElement that needs to be
 * centered on the screen.
 * @param {HTMLDivElement | null} refFile - A reference to an HTMLDivElement that is used to center
 * another HTMLDivElement.
 */
export function useCenterElement(
  refElement: HTMLDivElement | null,
  refFile: HTMLDivElement | null
) {
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
