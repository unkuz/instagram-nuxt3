/**
 * This function adds a callback to be executed on window resize and scroll events, with an option to
 * execute the callback on initialization.
 * @param {Function} callback - A function that will be called whenever the window is resized or
 * scrolled.
 * @param {boolean} [withInit=true] - A boolean parameter that determines whether the callback function
 * should be called immediately after the component is mounted. If set to true, the callback function
 * will be called once during the onMounted lifecycle hook. If set to false, the callback function will
 * only be called when the window is resized or scrolled.
 */
export function useWindowResizeCallback(callback: Function, withInit: boolean = true) {
  const resize = () => callback()

  onMounted(() => {
    if (withInit) callback()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', resize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('scroll', resize)
  })
}
