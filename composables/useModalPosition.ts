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
