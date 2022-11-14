export const usePrelude = () => {
  const isShowPrelude = ref<boolean>(true)

  onMounted(() => {
    document.fonts.ready.then(() => {
      isShowPrelude.value = false
    })
  })

  return { isShowPrelude }
}
