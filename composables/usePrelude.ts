export const usePrelude = () => {
  const isShowPrelude = ref(true)

  let timerPrelude
  
  const hiddenPrelude = () => {
    isShowPrelude.value = false
  }

  onMounted(() => {
    timerPrelude = setTimeout(hiddenPrelude, 2000)
  })

  onUnmounted(() => {
    clearTimeout(timerPrelude)
  })
  return { isShowPrelude }
}
