import { defineStore } from 'pinia'

export const useAddStore = defineStore('add', {
  state: () => ({
    isShow: false,
  }),
  getters: {},
  actions: {
    toggle(val: boolean) {
      if (!_isNil(val)) {
        this.isShow = val
      }
    },
  },
})
