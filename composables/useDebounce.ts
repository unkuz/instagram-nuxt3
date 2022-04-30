export function useDebounce(input: any, delayTimeSecond: number) {
  const value = ref(input.value);
  let timer: NodeJS.Timeout;
  onUpdated(() => {
    timer = setTimeout(() => {
      value.value = input.value;
    }, delayTimeSecond * 1000);
  });
  onUnmounted(() => {
    clearTimeout(timer);
  });

  return value;
}
