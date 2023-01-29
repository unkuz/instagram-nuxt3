import { formatNum, urlify } from '@@/helpers'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      urlify: (val: string) => urlify(val),
      formatNum: (val: number | bigint) => formatNum(val),
    },
  }
})
