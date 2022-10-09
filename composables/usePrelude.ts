export const usePrelude = () => {
  const isShowPrelude = ref(true)

  onMounted(() => {
    document.fonts.ready.then(() => {
      isShowPrelude.value = false
    })
  })

  return { isShowPrelude }
}
