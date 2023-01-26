import { defineStore } from 'pinia'

export const useViewPostStore = defineStore('viewPost', {
  state: () => ({
    isShow: false,
  }),
  getters: {},
  actions: {
    setIsShow(value: boolean) {
      this.isShow = value
    },
  },
})
