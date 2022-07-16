import { Ref } from 'nuxt/dist/app/compat/capi'

export const isEllipsisActive = (e: Ref<HTMLElement>) =>
  e.value.scrollWidth > e.value.parentElement.scrollWidth
