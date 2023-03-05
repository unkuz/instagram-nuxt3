import { defineStore } from 'pinia'
import { inboxList } from '@/mocks'

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
