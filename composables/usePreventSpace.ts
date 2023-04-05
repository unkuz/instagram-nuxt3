/**
 * This function prevents the space key from creating spaces when pressed on the document body.
 */
export const usePreventSpace = () => {
  const space = (e: KeyboardEvent) => {
    if (e.keyCode === 32 && e.target === document.body) {
      e.preventDefault()
    }
  }

  onMounted(() => {
    addEventListener('keydown', space)
  })

  onBeforeUnmount(() => {
    removeEventListener('keydown', space)
  })
}
