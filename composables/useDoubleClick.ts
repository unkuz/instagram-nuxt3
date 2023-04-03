import { Ref } from 'vue'

export const useDoubleClick = (
  el: Ref<HTMLElement | null | undefined>,
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
    el.value!.addEventListener('click', _click)
    el.value!.addEventListener('dblclick', _dbclick)
  })

  onBeforeUnmount(() => {
    el.value!.removeEventListener('click', _click)
    el.value!.removeEventListener('dblclick', _dbclick)
  })
}
