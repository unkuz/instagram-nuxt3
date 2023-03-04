import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    isShow: false,
  }),
  getters: {},
  actions: {
    toggle(val: boolean) {
      if (_isBoolean(val)) {
        let timer: NodeJS.Timer | '' = ''
        if (val) {
          this.isShow = val

          timer = setTimeout(() => (this.isShow = false), 1000)
        } else {
          clearTimeout(timer)
        }
      }
    },
  },
})
