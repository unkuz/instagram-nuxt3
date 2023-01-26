import { Ref } from 'vue'

export const isEllipsisActive = (element: Ref<HTMLElement | null>) => {
  const el = unref(element)
  if (el?.parentElement) {
    el.scrollWidth > el.parentElement.scrollWidth
  }
}
