import { useGlobalStore } from '~~/store'

export function useResizeWindow() {
  const globalStore = useGlobalStore()

  const width = ref<number>(0)
  const height = ref<number>(0)

  const resize = (e: UIEvent) => {
    const target = e.target as Window
    width.value = target.innerWidth
    height.value = target.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', resize)
    width.value = window.innerWidth
    height.value = window.innerHeight
  })

  watch([width, height], () => {
    globalStore.setClientSize(width.value, height.value)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
  })
  return { width, height }
}
