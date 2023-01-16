export function useDebounce(input: string, delayTimeSecond: number) {
  let value = $ref(input)
  let timer: NodeJS.Timer

  onUpdated(() => {
    timer = setTimeout(() => {
      value = input
    }, delayTimeSecond * 1000)
  })

  onBeforeUnmount(() => {
    clearTimeout(timer)
  })

  return value
}

