import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    isShow: true,
  }),
  getters: {},
  actions: {
    toggle(val: boolean) {
      if (_isBoolean(val)) {
        let timer: NodeJS.Timer | '' = ''
        this.isShow = val
        if (val) {
          timer = setTimeout(() => (this.isShow = false), 1000)
        } else {
          clearTimeout(timer)
        }
      }
    },
  },
})
