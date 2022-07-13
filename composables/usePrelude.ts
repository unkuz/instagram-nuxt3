export const usePrelude = () => {
  const isShowPrelude = ref(true)

  let timerPrelude

  const hiddenPrelude = () => {
    isShowPrelude.value = false
  }

  onMounted(() => {
    timerPrelude = setTimeout(hiddenPrelude, 500)
  })

  onUnmounted(() => {
    clearTimeout(timerPrelude)
  })
  return { isShowPrelude }
}
