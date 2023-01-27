import { urlify } from '@@/helpers'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      urlify: (text: string) => urlify(text),
    },
  }
})
