import { Ref } from 'vue'

export const useDoubleClick = (refElement: Ref<HTMLElement | null>, click: () => void, dblclick: () => void) => {
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
    const refEl = unref(refElement)
    if (refEl) {
      refEl.addEventListener('click', _click)
      refEl.addEventListener('dblclick', _dbclick)
    }
  })

  onBeforeUnmount(() => {
    const refEl = unref(refElement)
    if (refEl) {
      refEl.removeEventListener('click', _click)
      refEl.removeEventListener('dblclick', _dbclick)
    }
  })
}
