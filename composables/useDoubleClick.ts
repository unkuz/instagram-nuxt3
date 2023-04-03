import { Ref } from 'vue'

export const useDoubleClick = (
  el: Ref<HTMLElement | null | undefined>,
  clickCb: Function,
  dbclickCb: Function
) => {
  let timer = ref<any>(null)

  const onClick = (e: MouseEvent) => {
    if (e.detail === 1) {
      timer = setTimeout(() => {
        clickCb()
      }, 200)
    }
  }

  const onDbClick = (e: MouseEvent) => {
    clearTimeout(timer)
    dbclickCb()
  }

  onMounted(() => {
    el.value!.addEventListener('click', onClick)
    el.value!.addEventListener('dblclick', onDbClick)
  })

  onBeforeUnmount(() => {
    el.value!.removeEventListener('click', onClick)
    el.value!.removeEventListener('dblclick', onDbClick)
  })
}
