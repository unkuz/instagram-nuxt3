import { defineStore } from 'pinia'
import { inboxListUser } from '~~/mocks'

export const useInboxListUserStore = defineStore('listUser', {
  state: () => ({
    data: [...inboxListUser],
  }),
  getters: {},
  actions: {},
})
