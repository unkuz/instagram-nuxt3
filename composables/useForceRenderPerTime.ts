/**
 * This function returns a reactive key that updates every specified time interval.
 * @param [time=1000] - The time parameter is a number that represents the interval time in
 * milliseconds for the setInterval function. By default, it is set to 1000 milliseconds (1 second).
 * @returns An object with a single property `key`, which is a reactive reference to a number.
 */
export const useForceRenderTimer = (time = 1000) => {
  let timer: NodeJS.Timer
  const key = ref<number>(0)

  onMounted(() => {
    timer = setInterval(() => {
      key.value++
    }, time)
  })

  onBeforeUnmount(() => {
    clearInterval(timer)
  })

  return { key }
}
