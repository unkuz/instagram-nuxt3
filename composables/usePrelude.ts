export const usePrelude = () => {
  let isShowPrelude = $ref(true)

  onMounted(() => {
    document.fonts.ready.then(() => (isShowPrelude = false))
  })

  return { isShowPrelude: $$(isShowPrelude) }
}
