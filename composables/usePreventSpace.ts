export const usePreventSpace = () => {
  const space = (e) => {
    if (e.keyCode === 32 && e.target === document.body) {
      e.preventDefault()
    }
  }

  onMounted(() => {
    addEventListener('keydown', space)
  })

  onUnmounted(() => {
    removeEventListener('keydown', space)
  })
}
