import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    return new Promise((resolve, _reject) => {
      if (savedPosition) {
        resolve(savedPosition)
      }
    })
  },
}
