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
