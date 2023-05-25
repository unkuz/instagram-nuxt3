import { Ref } from 'vue'

/**
 * The useDoubleClick function takes in an element reference and two callback functions for single and
 * double clicks, and adds event listeners to the element to handle these events.
 * @param el - A reference to the HTML element that the double click functionality will be applied to.
 * @param {Function} clickCb - A callback function that will be executed when a single click is
 * detected on the element being watched.
 * @param {Function} dbclickCb - dbclickCb is a callback function that will be executed when the
 * element is double-clicked.
 */
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
