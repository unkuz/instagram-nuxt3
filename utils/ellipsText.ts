import { Ref } from 'vue'

/**
 * The function checks if an element's content is overflowing and truncated with an ellipsis.
 * @param element - A Vue 3 composition API ref object that holds a reference to an HTML element.
 */
export const isEllipsisActive = (element: Ref<HTMLElement | null>) => {
  const el = unref(element)
  if (el?.parentElement) {
    el.scrollWidth > el.parentElement.scrollWidth
  }
}
