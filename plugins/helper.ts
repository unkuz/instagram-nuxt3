import { formatNum, urlify, emailify } from '@/helpers'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      urlify: (val: string) => urlify(val),
      formatNum: (val: number | bigint) => formatNum(val),
      emailify: (val: string) => emailify(val),
      urlEmailify: (val: string) => emailify(urlify(val)),
    },
  }
})
