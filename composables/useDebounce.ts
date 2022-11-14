import { Ref } from "vue"

export function useDebounce(input: Ref<string>, delayTimeSecond: number) {
  const value = ref<string>(input.value)
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
