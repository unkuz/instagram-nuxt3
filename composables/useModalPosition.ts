/**
 * The function returns the position of a modal in the center of the viewport and updates it on scroll.
 * @returns A reactive object containing the values of `x` and `y`.
 */
export const useModalPosition = () => {
  let x = $ref(0)
  let y = $ref(0)

  const position = () => {
    x = window.innerWidth / 2
    y = window.scrollY + window.innerHeight / 2
  }

  onMounted(() => {
    position()
    window.addEventListener('scroll', position)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', position)
  })

  return $$({ x, y })
}
