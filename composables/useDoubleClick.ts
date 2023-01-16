import { Ref } from 'vue'

export const useDoubleClick = (
  refElement: HTMLElement | null,
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
    if (refElement) {
      refElement.addEventListener('click', _click)
      refElement.addEventListener('dblclick', _dbclick)
    }
  })

  onBeforeUnmount(() => {
    if (refElement) {
      refElement.removeEventListener('click', _click)
      refElement.removeEventListener('dblclick', _dbclick)
    }
  })
}

