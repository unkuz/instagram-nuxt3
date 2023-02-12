import { defineStore } from 'pinia'
import { inboxDetail } from '@/mocks'

export const useInboxDetailStore = defineStore('inboxDetail', {
  state: () => ({
    data: [...inboxDetail],
  }),
  getters: {},
  actions: {},
})
