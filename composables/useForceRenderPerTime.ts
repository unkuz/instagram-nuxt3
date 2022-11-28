export const useForceRenderTimer = (time: number = 1000) => {
  const timer = ref<NodeJS.Timer>()
  const key = ref<number>(0)

  onMounted(() => {
    timer.value = setInterval(() => {
      key.value++
    }, time)
  })
  onUnmounted(() => {
    clearInterval(timer.value)
  })

  return { key }
}
