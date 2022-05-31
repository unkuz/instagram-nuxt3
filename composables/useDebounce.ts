export function useDebounce(input: any, delayTimeSecond: number) {
  const value = ref(input.value)
  let timer: ReturnType<typeof setTimeout>
  
  onUpdated(() => {
    timer = setTimeout(() => {
      value.value = input.value
    }, delayTimeSecond * 1000)
  })

  onUnmounted(() => {
    clearTimeout(timer)
  })
  return value
}
