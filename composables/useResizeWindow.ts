import { useGlobalStore } from '@@/store'

export function useResizeWindow() {
  const globalStore = useGlobalStore()

  const width = ref<number>(0)
  const height = ref<number>(0)

  const resize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => {
    resize()
    window.addEventListener('resize', resize)
  })

  watch(
    [width, height],
    ([width, height]) => {
      globalStore.setClientSize(width, height)
    },
    {
      immediate: true,
    }
  )

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
  })

  return { width, height }
}

