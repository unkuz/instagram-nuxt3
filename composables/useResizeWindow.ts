import { useGlobalStore } from '@@/store'

export function useResizeWindow() {
  const globalStore = useGlobalStore()

  const dimension = reactive({
    width: 0,
    height: 0,
  })

  const resize = () => {
    const { innerWidth, innerHeight } = window
    dimension.width = innerWidth
    dimension.height = innerHeight
  }

  onMounted(() => {
    resize()
    window.addEventListener('resize', resize)
  })

  watch(
    dimension,
    ({ width, height }) => {
      globalStore.setClientSize(width, height)
    },
    {
      immediate: true,
    }
  )

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
  })

  return { width: dimension.width, height: dimension.height }
}
