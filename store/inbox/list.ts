import { defineStore } from 'pinia'
import { inboxList } from '~~/mocks'

export const useInboxStore = defineStore('inbox', {
  state: () => ({
    data: [...inboxList],
    hasErr: false,
    message: '',
  }),
  getters: {},
  actions: {},
})
