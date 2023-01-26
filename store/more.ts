import { defineStore } from 'pinia'

export const useMoreStore = defineStore('more', {
  state: () => ({ isShow: false }),
  getters: {},
  actions: {
    setHidden() {
      this.isShow = false
    },
    toggleSHow() {
      this.isShow = !this.isShow
    },
    setShow() {
      this.isShow = true
    },
  },
})
