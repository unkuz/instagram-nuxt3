import { urlify } from '@@/helpers'
import { gsap } from 'gsap'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      urlify: (text: string) => urlify(text),
    },
    gsap,
  }
})
