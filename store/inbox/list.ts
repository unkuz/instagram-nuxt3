import { defineStore } from 'pinia'

export const useInboxStore = defineStore('inbox', {
  state: () => ({
    data: [],
    hasErr: false,
    message: '',
  }),
  getters: {},
  actions: {
    save(data: any) {
      if (data) {
        this.data = data
      }
    },
  },
})
