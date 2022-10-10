import { Ref } from 'vue'

export const isEllipsisActive = (e: Ref<HTMLElement>) =>
  e.value.scrollWidth > e.value.parentElement.scrollWidth
