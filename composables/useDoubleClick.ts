import { Ref } from 'nuxt/dist/app/compat/capi'

export const useDoubleClick = (ref: Ref<HTMLElement>, click: () => void, dblclick: () => void) => {
  let timer

  const _click = (event) => {
    if (event.detail === 1) {
      timer = setTimeout(() => {
        click()
      }, 200)
    }
  }

  const _dbclick = (event) => {
    clearTimeout(timer)
    dblclick()
  }

  onMounted(() => {
    ref.value.addEventListener('click', _click)
    ref.value.addEventListener('dblclick', _dbclick)
  })
  onUnmounted(() => {
    ref.value.removeEventListener('click', _click)
    ref.value.removeEventListener('dblclick', _dbclick)
  })
}
