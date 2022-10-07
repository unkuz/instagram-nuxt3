import { Ref } from 'vue'
import { isNil } from 'lodash'

export const useDoubleClick = (ref: Ref<HTMLElement>, click: () => void, dblclick: () => void) => {
  let timer

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
    if (!isNil(ref.value)) {
      ref.value.addEventListener('click', _click)
      ref.value.addEventListener('dblclick', _dbclick)
    }
  })
  onUnmounted(() => {
    if (!isNil(ref.value)) {
      ref.value.removeEventListener('click', _click)
      ref.value.removeEventListener('dblclick', _dbclick)
    }
  })
}
