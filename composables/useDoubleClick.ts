import { Ref } from 'vue'

export const useDoubleClick = (
  refElement: Ref<HTMLElement | null | undefined>,
  click: () => void,
  dblclick: () => void
) => {
  let timer = ref<any>(null)

  const _click = (event: MouseEvent) => {
    if (event.detail === 1) {
      timer = setTimeout(() => {
        click()
      }, 200)
    }
  }

  const _dbclick = (event: MouseEvent) => {
    clearTimeout(timer)
    dblclick()
  }

  onMounted(() => {
    const el = unref(refElement)
    if (el) {
      el.addEventListener('click', _click)
      el.addEventListener('dblclick', _dbclick)
    }
  })

  onBeforeUnmount(() => {
    const el = unref(refElement)
    if (el) {
      el.removeEventListener('click', _click)
      el.removeEventListener('dblclick', _dbclick)
    }
  })
}
