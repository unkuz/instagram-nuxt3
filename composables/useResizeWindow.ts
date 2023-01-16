import { useGlobalStore } from '@@/store'

export function useResizeWindow() {
  const globalStore = useGlobalStore()

  let width = $ref(0)
  let height = $ref(0)

  const resize = () => {
    const { innerWidth, innerHeight } = window
    width = innerWidth
    height = innerHeight
  }

  onMounted(() => {
    resize()
    window.addEventListener('resize', resize)
  })

  watch(
    [() => width, () => height],
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

